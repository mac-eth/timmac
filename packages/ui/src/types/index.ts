import type { StaticImageData } from "next/image";

export interface BenefitProps {
  BackgroundColor?: string;
  TitleColor?: string;
  TextColor?: string;
  Title: React.ReactNode;
  Description: React.ReactNode;
  ImageURL: StaticImageData;
  ImageAlt: string;
  ImageClassName: string;
  Features: {
    Name: string;
    Description: string;
    Icon: React.JSXElementConstructor<React.SVGProps<SVGSVGElement>>;
  }[];
}
