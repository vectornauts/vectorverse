import "./globals.css";
import { NextAuthProvider } from "./providers";
import { Providers as ReduxProvider } from "@/redux/provider";
import Head from "next/head";
import Header from "@/components/header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <title>VectorVerse</title>
        <meta
          name="description"
          content="A tool that helps you automatically explore and assign metadata to your data by comparing its geometric embeddings to a database of known metadata."
        ></meta>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="">
        <NextAuthProvider>
          <ReduxProvider>
            <Header />
            {children}
          </ReduxProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}
