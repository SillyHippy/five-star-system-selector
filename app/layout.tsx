import React from 'react';
import { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://justlegalsolutions.org'), // Added metadataBase URL
  title: 'Joseph Iannazzi | Digital Business/Resume(s) Card',
  description: 'Digital Business/Resume(s) Card for Joseph Iannazzi.',
  openGraph: {
    title: 'Joseph Iannazzi | Process Server',
    description: 'Professional process server and legal support services by Joseph Iannazzi at Just Legal Solutions.',
    images: [
      {
        url: '/preview.png',
        width: 1200,
        height: 630,
        alt: 'Joseph Iannazzi - Just Legal Solutions',
      },
    ],
    siteName: 'Just Legal Solutions',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Joseph Iannazzi | Process Server',
    description: 'Professional process server and legal support services',
    images: ['/preview.png'],
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta property="og:image" content="/preview.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/preview.png" />
      </head>
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
