import type { Metadata } from "next";
import Nav from "./nav";

export const metadata: Metadata = {
  title: "gtdcc",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <body style={{ margin: 0 }}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
