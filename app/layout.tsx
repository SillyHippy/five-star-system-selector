import React from 'react';
import { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Joseph Iannazzi | Digital Business/Resume(s) Card',
  description: 'Digital Business/Resume(s) Card for Joseph Iannazzi.',
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
      <body>{children}</body>
    </html>
  );
}
