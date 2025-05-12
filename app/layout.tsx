import './globals.css';
import Header from './components/Header';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="favicon.ico" type="image/x-icon" />
        <link rel="icon" type="image/png" sizes="32x32" href="/prime_earth_logo-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/prime_earth_logo-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/prime_earth_logo-180x180.png" />
        <title>Prime Earth Realty</title>
        <meta name="description" content="Real Estate" />
      </head>
      <body className="antialiased transition-colors duration-200">
        <Header />
        {children}
      </body>
    </html>
  );
}
