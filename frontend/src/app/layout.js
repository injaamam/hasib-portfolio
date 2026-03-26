import "./globals.css";
import SiteLayout from "@/components/SiteLayout";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  );
}
