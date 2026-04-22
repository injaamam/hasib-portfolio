import "./globals.css";
import SiteLayout from "@/components/SiteLayout";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;500;600&family=Amiri:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <title>Hasib Cheragee</title>
      <body>
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  );
}
