import type { Metadata } from "next";
import { Inter , Merriweather_Sans, Rubik} from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

const logo = Merriweather_Sans({
  subsets:["latin"],
  weight:["800"],
  variable:"--logo-font--"
})

const normal = Rubik({
  subsets:["latin"],
  weight:["500"],
  variable:"--normal-font--"
})

const normal900 = Rubik({
  subsets:["latin"],
  weight:["900"],
  variable:"--normal-font-900--"
})

export const metadata: Metadata = {
  title: "Kanha",
  description: "My Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` bg-black overflow-x-hidden ${logo.variable} ${normal.variable} ${normal900.variable}`}>

      
      
        
      
      <Link href={'/'} className='z-50 text-red-600 logo px-10 text-3xl fixed top-10'>KANHA</Link>
      
        {children}
      
      </body>
    </html>
  );
}
