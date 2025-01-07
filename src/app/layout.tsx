import Header from './components/Header';
import Footer from './components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
 title: {
  default: 'Next.js training',
  template: '%s | Next.js',
 },
 description: 'Generated by Next.js',
};

export default function RootLayout({
 children,
}: {
 children: React.ReactNode;
}) {
 return (
  <html lang='en'>
   <body>
    <Header />

    {children}
    <Footer />
   </body>
  </html>
 );
}
