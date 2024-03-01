import type { Metadata } from 'next';
import '../ui/global.css';
import RecoilProvider from '../context/RecoilProvider';

export const metadata: Metadata = {
  title: '리톡',
  description: 'Leetalk',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen max-w-screen">
        <RecoilProvider>{children}</RecoilProvider>
      </body>
    </html>
  );
}
