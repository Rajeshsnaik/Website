// app/layout.jsx (CRITICAL FIX)

import './globals.css';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import { Lexend } from 'next/font/google'; // 1. Import Lexend font loader

// 2. DEFINE THE LEXEND FONT LOADER
// Configures Lexend and creates a CSS variable (--font-lexend) for global use.
const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend', 
});

// Standard Next.js metadata export
export const metadata = {
  title: 'Blute Technologies',
  description: 'International software development company website.',
  // Add other standard metadata fields here
};

export default function RootLayout({ children }) {
  return (
    // 3. APPLY FONT VARIABLE TO THE HTML TAG
    // This allows the font to be used globally via the custom CSS or the font-lexend utility class.
    <html lang="en" className={`scroll-smooth ${lexend.variable}`}>
      <body> 
        {/*
          THE FIX: The entire visual structure (Navbar, children, Footer) 
          must be wrapped by ThemeProvider.
        */}
          {/* Navbar can now access theme context */}
          <Navbar />
          
          <main className="flex-grow pt-20 min-h-screen">
              {children}
          </main>
          
          <Footer />
      </body>
    </html>
  );
}