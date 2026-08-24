import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { AnimationProvider } from "@/components/shared/motion";
import { AnnouncementBar } from "@/components/layout/announcement-bar";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Universal Health Institute of Nursing & Allied Sciences",
    template: "%s | UHINAS",
  },
  description:
    "Admissions open for BS Nursing 4-Year Degree Program (3rd Batch) at UHINAS Karachi. Join Pakistan's premier nursing institute with modern facilities, expert faculty, and clinical training.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <AnimationProvider>
          <AnnouncementBar />
          <Navbar />
          {children}
          <Footer />
        </AnimationProvider>
      </body>
    </html>
  );
}
