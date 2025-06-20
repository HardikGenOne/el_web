import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import HeaderTop from "./components/HeaderTop";
import ImagesScrolling from "./components/ImagesScrolling";
import Temp from "./components/temp";
import MidContent from "./components/MidContent";
import ExamsCategories from "./components/ExamsCategories";
import VideoSection from "./components/VideoSection";
import PlatformTrust from "./components/PlatformTrust";
import Testimonials from "./components/Testimonials";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <HeaderTop/>
        <ImagesScrolling/>
        <MidContent/>
        <ExamsCategories/>
        <VideoSection/>
        <PlatformTrust/>
        <Testimonials/>
        {children}
      </body>
    </html>
  );
}
