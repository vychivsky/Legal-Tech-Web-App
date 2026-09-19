import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Khasra Map & Title Search",
  description: "Khasra parcel map and title search platform",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
