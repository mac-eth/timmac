import Image from "next/image";
import type { StaticImageData } from "next/image";
import { CheckCircledIcon } from "@radix-ui/react-icons";

import { cn } from "~/utils/cn";
import Button from "../misc/button";

interface Product {
  id: string;
  name: string;
  price: string;
  comparisonPrice?: string;
  mostPopular?: boolean;
  includes: string[];
  href: string;
  imageURL: StaticImageData;
  imageAlt: string;
  CTA: React.ReactNode;
}

interface ProductSection {
  icon: React.ReactNode;
  mainText: React.ReactNode;
  subText?: React.ReactNode;
  products: Product[];
}

export default function ProductSection({
  icon,
  mainText,
  subText,
  products,
}: ProductSection): JSX.Element {
  return (
    <div className="bg-neutral-950 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">{mainText}</div>
        <div className="mx-auto mt-4 max-w-4xl text-center">{subText}</div>
        <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.id}
              className={cn(
                product.mostPopular
                  ? "bg-neutral-50/10 shadow-lg shadow-[#FFD700] ring-2 ring-[#FFD700]"
                  : "shadow-md shadow-neutral-50/20 ring-1 ring-neutral-50/20",
                "rounded-3xl p-8 xl:p-10",
              )}
            >
              <div className="flex items-center justify-between gap-x-4">
                <h3
                  id={product.id}
                  className="font-neueEinstellung text-lg uppercase italic leading-8 text-neutral-50"
                >
                  {product.name}
                </h3>
                {product.mostPopular ? (
                  <p className="text-md rounded-full bg-[#FFD700] px-4 py-2 font-semibold leading-5 text-neutral-950">
                    Most popular
                  </p>
                ) : null}
              </div>
              <Image
                src={product.imageURL}
                alt={product.imageAlt}
                className="mt-4 h-auto w-full rounded-xl ring-1 ring-neutral-50"
              />
              <ul
                role="list"
                className="mt-4 space-y-3 text-sm leading-6 text-neutral-100 xl:mt-4"
              >
                <span className=" font-futuraPTDemi text-lg">Includes:</span>
                {product.includes.map((include) => (
                  <li key={include} className="flex gap-x-3 text-lg">
                    {icon}
                    {include}
                  </li>
                ))}
              </ul>
              {product.CTA}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
