import localFont from "next/font/local";
import "./globals.css";

const iranSans = localFont({
  src: "./fonts/IRANSansLight.woff",
});

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={iranSans.className}>{children}</body>
    </html>
  );
}
