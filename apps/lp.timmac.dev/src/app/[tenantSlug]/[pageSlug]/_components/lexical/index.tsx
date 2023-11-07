import React, { Fragment } from "react";
import escapeHTML from "escape-html";

import { cn } from "../../../../../utils/cn";
import {
  IS_BOLD,
  IS_CODE,
  IS_ITALIC,
  IS_STRIKETHROUGH,
  IS_SUBSCRIPT,
  IS_SUPERSCRIPT,
  IS_UNDERLINE,
} from "./nodeFormat";

export interface SerializedLexicalNode {
  children?: SerializedLexicalNode[];
  direction: string;
  format: number;
  indent?: string | number;
  type: string;
  version: number;
  style?: string;
  mode?: string;
  text?: string;
  [other: string]: any;
}

interface Props {
  nodes: SerializedLexicalNode[];
  tailwindExpansions?: {
    paragraph?: string;
    bold?: string;
  };
}

export interface LexicalHelperType {
  root: {
    children: unknown;
  };
}

export default function Serialize({ nodes, tailwindExpansions }: Props) {
  return (
    <Fragment>
      {nodes?.map((node, index): JSX.Element | null => {
        if (node.type === "text") {
          let text = (
            <span
              key={index}
              dangerouslySetInnerHTML={{ __html: escapeHTML(node.text) }}
            />
          );
          if (node.format & IS_BOLD) {
            text = (
              <strong className={cn(tailwindExpansions?.bold)} key={index}>
                {text}
              </strong>
            );
          }
          if (node.format & IS_ITALIC) {
            text = <em key={index}>{text}</em>;
          }
          if (node.format & IS_STRIKETHROUGH) {
            text = (
              <span key={index} className="line-through">
                {text}
              </span>
            );
          }
          if (node.format & IS_UNDERLINE) {
            text = (
              <span key={index} className="underline">
                {text}
              </span>
            );
          }
          if (node.format & IS_CODE) {
            text = <code key={index}>{text}</code>;
          }
          if (node.format & IS_SUBSCRIPT) {
            text = <sub key={index}>{text}</sub>;
          }
          if (node.format & IS_SUPERSCRIPT) {
            text = <sup key={index}>{text}</sup>;
          }

          return text;
        }

        if (node == null) {
          return null;
        }

        // NOTE: Hacky fix for
        // https://github.com/facebook/lexical/blob/d10c4e6e55261b2fdd7d1845aed46151d0f06a8c/packages/lexical-list/src/LexicalListItemNode.ts#L133
        // which does not return checked: false (only true - i.e. there is no prop for false)
        const serializedChildrenFn = (
          node: SerializedLexicalNode,
        ): JSX.Element | null => {
          if (node.children == null) {
            return null;
          } else {
            if (node?.type === "list" && node?.listType === "check") {
              for (const item of node.children) {
                if (!item?.checked) {
                  item.checked = false;
                }
              }
              return Serialize({
                nodes: node.children,
                tailwindExpansions: tailwindExpansions,
              });
            } else {
              return Serialize({
                nodes: node.children,
                tailwindExpansions: tailwindExpansions,
              });
            }
          }
        };

        const serializedChildren = serializedChildrenFn(node);

        switch (node.type) {
          case "linebreak": {
            return <br key={index} />;
          }
          case "paragraph": {
            return (
              <p className={cn(tailwindExpansions?.paragraph)} key={index}>
                {serializedChildren}
              </p>
            );
          }
          case "heading": {
            type Heading = Extract<
              keyof JSX.IntrinsicElements,
              "h1" | "h2" | "h3" | "h4" | "h5"
            >;
            const Tag = node?.tag as Heading;
            console.log(node);
            return <Tag key={index}>{serializedChildren}</Tag>;
          }
          case "list": {
            type List = Extract<keyof JSX.IntrinsicElements, "ul" | "ol">;
            const Tag = node?.tag as List;
            return (
              <Tag key={index} className={node?.listType}>
                {serializedChildren}
              </Tag>
            );
          }
          case "listitem": {
            if (node?.checked != null) {
              return (
                <li
                  key={index}
                  className={`component--list-item-checkbox ${
                    node.checked
                      ? "component--list-item-checkbox-checked"
                      : "component--list-item-checked-unchecked"
                  }`}
                  value={node?.value}
                  role="checkbox"
                  aria-checked={node.checked ? "true" : "false"}
                  tabIndex={-1}
                >
                  {serializedChildren}
                </li>
              );
            } else {
              return (
                <li key={index} value={node?.value}>
                  {serializedChildren}
                </li>
              );
            }
          }
          case "quote": {
            return <blockquote key={index}>{serializedChildren}</blockquote>;
          }
          case "link": {
            const attributes: {
              doc?: any;
              linkType?: "custom" | "internal";
              newTab?: boolean;
              nofollow?: boolean;
              rel?: string;
              sponsored?: boolean;
              url?: string;
            } = node.attributes;

            if (attributes.linkType === "custom") {
              const rel = `${attributes?.rel ?? ""} ${
                attributes?.nofollow ? " nofollow" : ""
              }`;
              return (
                <a
                  key={index}
                  href={attributes.url}
                  target={attributes.newTab ? 'target="_blank"' : undefined}
                  rel={rel}
                >
                  {serializedChildren}
                </a>
              );
            } else {
              return <span key={index}>Internal link coming soon</span>;
            }

            // TODO: internal links
            // return `<a href="${getLinkForPage(attributes.doc)}"${
            //   attributes.newTab ? ' target=_"blank"' : ''
            // } rel="${attributes?.rel ?? ''}${
            //   attributes?.sponsored ? ' sponsored' : ''
            // }${attributes?.nofollow ? ' nofollow' : ''}">${serializedChildren}</a>` // TODO: Check doc link handling
          }
          case "inline-image": {
            // TODO: inline-images based on InlineImagePlugin
            return (
              <span key={index} style={{ fontStyle: "italic" }}>
                {" "}
                (An inline image will appear here! Honest!){" "}
              </span>
            );
          }
          default:
            return null;
        }
      })}
    </Fragment>
  );
}
