"use client"
import { Geist, Geist_Mono } from "next/font/google";
import "../style/globals.css";
import { usePathname } from "next/navigation";
import metadata from "./metadata";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({ children }) {
  const pathname=usePathname();
  return (
    <html lang="en">
           <head>
           <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        {metadata.icons.icon.map((icon, index) => (
          <link key={index} rel="icon" href={icon.url} sizes={icon.sizes} type={icon.type} />
        ))}
        <link rel="apple-touch-icon" href={metadata.icons.apple} />
           <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17028235260"></script>
        <script id="gtag-init" >
          {`
              window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'AW-17028235260');
          `}
        </script>

        {pathname.split("/").includes("thank-you") && (
          <script id="conversion-event" >
            {`
              gtag('event', 'conversion', {'send_to': 'AW-17028235260/F2kVCJj7m8MaEPz_2Lc_'});
            `}
          </script>
        )}</head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
