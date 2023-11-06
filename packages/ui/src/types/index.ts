import type { StaticImageData } from "next/image";

export interface BenefitProps {
  BackgroundColor?: string;
  TitleColor?: string;
  TextColor?: string;
  AccentColor?: string;
  Title: React.ReactNode;
  Description: React.ReactNode;
  FeatureClassName: React.ReactNode;
  ImageURL: StaticImageData;
  ImageAlt: string;
  ImageClassName: string;
  Features: {
    Name: string;
    Description: string;
    Icon: StaticImageData;
  }[];
  Button: React.ReactNode;
}
