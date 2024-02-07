import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import { LayoutProps } from "@/lib/@types/props";
import { Header } from "@/ui/header";
import { Footer } from "@/ui/footer";
import "@/ui/globals.css";

const ubuntu = Ubuntu({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-ubuntu"
})

export const metadata: Metadata = {
  title: "Register account",
  description: "Register new account on the application",
  applicationName: "Multiple register",
  authors: {
    name: "Hernan Alvarado",
    url: "https://halvaradop.tech"
  },
  creator: "halvaradop",
  category: "website",
  keywords: "website, platform, register, cloud, session",
  metadataBase: new URL("https://halvaradop.tech"),
  robots: "index, follow",
  openGraph: {
    type: "website",
    title: "Register account",
    countryName: "Colombia",
    description: "Register new account on the application",
    emails: "hernanvid123@gmail.com",
    siteName: "Multiple register",
  }
};

export default function RootLayout({
  children,
}: LayoutProps) {
  return (
    <html lang="en">
      <body className={ubuntu.className}>
        <div className="bg-magnolia">
          <Header />
          <div className="h-full">
            <main className="w-11/12 mx-auto pt-10 pb-8 px-6 rounded-xl -translate-y-[10%] shadow-form bg-white">
              {children}
            </main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
