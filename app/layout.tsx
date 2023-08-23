import Header from '@/components/Header';
import './globals.css';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata = {
  title: {
    template: "%s - Yamato's Portfolio",
    default: "Yamato's Portfolio",
  },
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body
        className={`text-blue-950 bg-gradient-to-t from-[white] to-blue-100  ${montserrat.className}`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
