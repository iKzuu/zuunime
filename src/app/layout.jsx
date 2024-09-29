import "./globals.css";
import Navbar from "../components/Navbar";
import { Pixelify_Sans } from 'next/font/google';

const pixel = Pixelify_Sans({ 
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
        className={`${pixel.className} bg-color-darkgrey`}
        suppressHydrationWarning={true}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
