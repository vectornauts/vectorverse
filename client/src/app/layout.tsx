import "./globals.css";
import { NextAuthProvider } from "./providers";

export const metadata = {
  title: "VectorVerse",
  description: "A tool that helps you automatically explore and assign metadata to your data by comparing its geometric embeddings to a database of known metadata.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="">
        <NextAuthProvider>{children}</NextAuthProvider>
      </body>
    </html>
  );
}
