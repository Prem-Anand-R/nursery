'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Shop', path: '/shop' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-white/80 backdrop-blur-sm'} transition-all duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Animated Logo */}
          <Link href="/" className="flex items-center group">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center"
            >
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mr-3 shadow-md"
              >
                <span className="text-xl animate-leaf-float">🌱</span>
              </motion.div>
              <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-700 bg-clip-text text-transparent">
                GreenSprout
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className="relative group px-2 py-1"
              >
                <motion.span
                  className={`block ${pathname === item.path ? 'text-green-600' : 'text-gray-700 hover:text-green-600'} transition-colors duration-200 font-medium`}
                  whileHover={{ scale: 1.05 }}
                >
                  {item.name}
                </motion.span>
                {pathname === item.path && (
                  <motion.div 
                    layoutId="nav-underline"
                    className="absolute left-0 bottom-0 h-0.5 w-full bg-green-600"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Cart and mobile menu button */}
          <div className="flex items-center space-x-4">
            <Link
              href="/cart"
              className="relative p-2 text-gray-700 hover:text-green-600 transition-colors"
            >
              <motion.span 
                className="text-xl block"
                whileHover={{ scale: 1.1 }}
              >
                🛒
              </motion.span>
              <motion.span 
                className="absolute -top-1 -right-1 bg-green-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
                whileTap={{ scale: 0.9 }}
              >
                3
              </motion.span>
            </Link>

            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2 text-gray-700 hover:text-green-600 focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 180 }}
                  className="text-2xl"
                >
                  ✕
                </motion.div>
              ) : (
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="text-2xl"
                >
                  ☰
                </motion.div>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 backdrop-blur-sm overflow-hidden"
          >
            <div className="pt-2 pb-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-3 ${pathname === item.path ? 'bg-green-50 text-green-600' : 'text-gray-700 hover:bg-green-50'} font-medium transition-colors`}
                >
                  <motion.span
                    whileHover={{ x: 5 }}
                    className="flex items-center"
                  >
                    {pathname === item.path && (
                      <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                    )}
                    {item.name}
                  </motion.span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}