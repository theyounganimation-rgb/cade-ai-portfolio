import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import "./globals.css";

const title = "Cade Mack — Applied AI & Agent Engineer";
const description =
  "Applied AI engineer building realtime voice agents, persistent memory systems, structured tool execution, and behavioral evaluation.";

export async function generateMetadata(): Promise<Metadata> {
  const incomingHeaders = await headers();
  const host =
    incomingHeaders.get("x-forwarded-host") ??
    incomingHeaders.get("host") ??
    "localhost:3000";
  const protocol =
    incomingHeaders.get("x-forwarded-proto") ??
    (host.startsWith("localhost") || host.startsWith("127.0.0.1")
      ? "http"
      : "https");
  const origin = new URL(`${protocol}://${host}`);
  const socialImage = new URL("/og.png", origin).toString();

  return {
    metadataBase: origin,
    title,
    description,
    applicationName: "Cade Mack Portfolio",
    authors: [{ name: "Cade Mack" }],
    keywords: [
      "applied AI engineer",
      "agent engineer",
      "realtime voice",
      "AI memory",
      "tool orchestration",
      "AI evaluation",
    ],
    alternates: { canonical: origin.toString() },
    icons: {
      icon: "/favicon.svg",
      shortcut: "/favicon.svg",
    },
    openGraph: {
      type: "website",
      url: origin.toString(),
      title,
      description,
      siteName: "Cade Mack — Applied AI & Agent Engineer",
      images: [
        {
          url: socialImage,
          width: 1200,
          height: 630,
          alt: "Cade Mack, Applied AI and Agent Engineer",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [socialImage],
    },
  };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark",
  themeColor: "#070b0f",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
