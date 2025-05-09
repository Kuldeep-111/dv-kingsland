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
        <meta name="keywords" content={metadata.keywords}/>
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
        )}
        
<script async src="https://www.googletagmanager.com/gtag/js?id=G-07JFDJWP87"></script>
<script>
 {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-07JFDJWP87');`}
</script>

{/* meta pixel start */}
<script>{`
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1656003297922168');
fbq('track', 'PageView');`}
</script>
<noscript><img height="1" width="1" style={{ display: "none" }}
src="https://www.facebook.com/tr?id=1656003297922168&ev=PageView&noscript=1"
/></noscript>

{/* meta pixel end */}
        </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
