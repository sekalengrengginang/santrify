import "bootstrap/dist/css/bootstrap.css";
export const metadata = {
  title: "Santrify Login",
  description: "Generated by Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" sizes="any" />
      </head>
      <body>{children}</body>
    </html>
  );
}
