import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NutNinja | Modern Mens Grooming",
  description: "Mens Grooming for the Modern Man",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html
      className="font-futuraPT relative overflow-x-hidden bg-[#1C212B]"
      lang="en"
    >
      <body>{children}</body>
    </html>
  );
}
