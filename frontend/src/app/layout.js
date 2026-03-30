import "./globals.css";
import SiteLayout from "@/components/SiteLayout";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <title>Hasib Cheragee</title>
      <body>
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  );
}
