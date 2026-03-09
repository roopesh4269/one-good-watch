import "./globals.css";

export const metadata = {
  title: "One Good Watch",
  description: "Luxury Watch Advisory — India. One considered conversation. One right watch.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
