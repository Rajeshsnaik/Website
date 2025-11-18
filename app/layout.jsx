"use client";

import './globals.css';
import { Provider } from 'react-redux';
import { store } from '../store/stores.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import { Lexend } from 'next/font/google'; 

const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend', 
});


export default function RootLayout({ children }) {
  return (
    <Provider store={store}>
    
    <html lang="en" className={`scroll-smooth ${lexend.variable}`}>
      <body> 
       
          {/* Navbar can now access theme context */}
          <Navbar />
          
          <main className="flex-grow pt-20 min-h-screen">
              {children}
          </main>
          
          <Footer />
      </body>
    </html>
    </Provider>
  );
}