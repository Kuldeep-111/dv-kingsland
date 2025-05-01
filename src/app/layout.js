import { Geist, Geist_Mono } from "next/font/google";
import "../style/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Bhubaneswar’s Most Iconic 4 & 5 BHK Homes | DN Kingsland",
  description: "Experience Odisha’s most luxurious 4 & 5 BHK residences at Janpath, Bhubaneswar. A legacy since 1960. From ₹5.10 Cr*. DN Kingsland – First & Last in Luxury.",
  icons: {
    icon: [
      { url: '/assets/favicons/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/assets/favicons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/assets/favicons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
