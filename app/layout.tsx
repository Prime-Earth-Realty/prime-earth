import './globals.css';
import Header from './components/Header';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased transition-colors duration-200">
      
        <Header />
        {children}
        
      </body>
    </html>
  );
}
