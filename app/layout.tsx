import localFont from "next/font/local";
import Script from "next/script";
import React from "react";

import "./global.css";
import Nav from "@components/Nav";

const inter = localFont({
  src: "../public/fonts/inter-var.woff2",
  variable: "--font-inter",
  display: "swap",
});


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Nav />
        <main id="skip" className="px-8">
          {children}
        </main>
      </body>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-JDMZNFHMVW" />
      <Script id="google-analytics">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-JDMZNFHMVW');
        `}
      </Script>
    </html>
  );
}
