import "./globals.css";
import Navbar from "../components/Navbar";
import { Roboto } from 'next/font/google';

const roboto = Roboto({ 
  weight: ['400', '700'],
  subsets:['latin']
});

export const metadata = {
  title: "Zuunime",
  description: "Website anime by zuu",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} bg-color-darkgrey`}
        suppressHydrationWarning={true}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
