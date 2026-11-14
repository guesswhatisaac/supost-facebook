import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Observatory",
  description: "A public message wall.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
