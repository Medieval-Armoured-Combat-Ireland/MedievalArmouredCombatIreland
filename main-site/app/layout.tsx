import './globals.scss';
import { Header } from './components/header';
import { Footer } from './components/footer';
export const metadata = {
  title: 'Medieval Armoured Combat',
  description: 'Beir Bua!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
