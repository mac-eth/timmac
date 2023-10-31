import "@timmac/ui/src/styles.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Timmac | Web Development",
  description: "Modern Web Design & Development Agency",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
