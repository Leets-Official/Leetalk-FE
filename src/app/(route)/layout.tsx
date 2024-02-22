import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "리톡",
  description: "Leetalk",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-screen">{children}</body>
    </html>
  );
}
