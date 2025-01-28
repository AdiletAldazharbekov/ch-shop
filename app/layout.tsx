import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Christmas Shop",
  description: "Christmas shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Allura&family=Montserrat:wght@100..900&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
