import './globals.scss';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

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
      <body className="-papyrus-light__background">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
