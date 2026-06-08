import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata, Viewport } from "next";
import localFont from 'next/font/local';
import "./globals.css";
import { SITE_METADATA } from "@constants";

const soriaFont = localFont({
  src: "../public/soria-font.ttf",
  variable: "--font-soria",
});

const vercettiFont = localFont({
  src: "../public/Vercetti-Regular.woff",
  variable: "--font-vercetti",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_METADATA.siteUrl),
  title: SITE_METADATA.title,
  description: SITE_METADATA.description,
  keywords: SITE_METADATA.keywords,
  authors: [{ name: SITE_METADATA.authorName }],
  creator: SITE_METADATA.creatorName,
  publisher: SITE_METADATA.publisherName,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: SITE_METADATA.openGraph.title,
    description: SITE_METADATA.openGraph.description,
    siteName: SITE_METADATA.openGraph.siteName,
    locale: SITE_METADATA.openGraph.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_METADATA.twitter.title,
    description: SITE_METADATA.twitter.description,
  },
  verification: SITE_METADATA.googleVerificationCode ? {
    google: SITE_METADATA.googleVerificationCode,
  } : undefined,
};

export const viewport: Viewport = {
  themeColor: "#000000",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overscroll-y-none">
      <body
        className={`${soriaFont.variable} ${vercettiFont.variable} font-sans antialiased`}
      >
        {children}
      </body>
      {SITE_METADATA.googleAnalyticsId && (
        <GoogleAnalytics gaId={SITE_METADATA.googleAnalyticsId}/>
      )}
    </html>
  );
}
