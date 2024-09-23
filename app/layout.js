import { Fugaz_One, Inter, Open_Sans } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { AuthPorvider } from "@/context/AuthContext";
import Head from "./head";
import Logout from "@/components/Logout";

const openSans = Open_Sans({ subsets: ["latin"] });
const fugaz = Fugaz_One({ subsets: ["latin"], weight: ['400']});


export const metadata = {
  title: "Broodl ⋅ App",
  description: "Nothing",
};

export default function RootLayout({ children }) {

  const header = (
    <header className="p-4 sm:p-8 flex item-center justify-between gap-4">
      <Link href={'/'}>
        <h1 className={'text-base sm:text-lg textGradient ' + fugaz.className}>Broodl</h1>
      </Link>
      <Logout />
    </header>
  )

  const footer = (
    <footer className="p-4 sm:p-8 grid place-items-center" >
      <p className={'text-indigo-500 ' + fugaz.className}>Created by Anjul Singhal </p>
    </footer>
  )

  return (
    <html lang="en">
      <Head/>
      <AuthPorvider>
        <body className={'text-slate-800 w-full max-w-[1000px] mx-auto text-sm sm:text-base min-h-screen flex flex-col ' + openSans.className}>
          {header}
          {children}
          {footer}
        </body>
      </AuthPorvider>
      
    </html>
  );
}
