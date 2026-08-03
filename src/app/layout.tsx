import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Casi-Check | Auto Parts Dealers & Repair',
  description: 'Casi-Check provides premium auto parts sourcing and repair services for dealers, fleets, and drivers.',
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
