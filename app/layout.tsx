import './globals.css';
import GDPRBanner from './components/GDPRBanner';
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
        <GDPRBanner />
        {children}

        {/* ✅ Zoho SalesIQ Visitor Tracking Script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              var $zoho=$zoho || {};
              $zoho.salesiq = $zoho.salesiq || {
                widgetcode:"siq5cf813d625cbdf46cb3471a24b31ddb984a6350c318e64bcc4ff8df4edc0f638",
                values:{},
                ready:function(){}
              };
              var d=document;
              s=d.createElement("script");
              s.type="text/javascript";
              s.id="zsiqscript";
              s.defer=true;
              s.src="https://salesiq.zoho.com/widget";
              t=d.getElementsByTagName("script")[0];
              t.parentNode.insertBefore(s,t);
            `,
          }}
        />
      </body>
    </html>
  );
}
