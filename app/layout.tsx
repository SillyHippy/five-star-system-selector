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
      <body>{children}</body>
    </html>
  );
}
