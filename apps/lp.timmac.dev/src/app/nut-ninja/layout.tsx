import "@timmac/ui/src/styles.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NutNinja | Modern Mens Grooming",
  description: "Mens Grooming for the Modern Man",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html
      className="bg-white-50 relative overflow-x-hidden font-futuraPT"
      lang="en"
    >
      <body>{children}</body>
    </html>
  );
}
