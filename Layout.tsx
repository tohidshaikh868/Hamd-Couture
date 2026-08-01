import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, User, Search, Menu, X, Heart } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'New Arrivals', path: '/new-arrivals' },
    { name: 'Arabian Fashion', path: '/arabian-fashion' },
    { name: 'Kids Wear', path: '/kids-wear' },
    { name: 'Collections', path: '/collections' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled || !isHome || mobileMenuOpen
            ? 'bg-luxury-cream/95 backdrop-blur-md shadow-sm py-4'
            : 'bg-transparent py-6'
        )}
      >
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="flex items-center justify-between">
            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 -ml-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className={cn("w-6 h-6", isScrolled || !isHome ? "text-luxury-charcoal" : "text-white")} />
              ) : (
                <Menu className={cn("w-6 h-6", isScrolled || !isHome ? "text-luxury-charcoal" : "text-white")} />
              )}
            </button>

            {/* Logo */}
            <Link
              to="/"
              className={cn(
                "text-2xl md:text-3xl font-serif tracking-widest uppercase transition-colors duration-300 absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0",
                (isScrolled || !isHome || mobileMenuOpen) ? "text-luxury-charcoal" : "text-white"
              )}
            >
              Hamd Couture
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={cn(
                    "text-sm tracking-wide transition-colors duration-300 uppercase hover:text-luxury-gold",
                    isScrolled || !isHome ? "text-luxury-charcoal" : "text-white/90"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Icons */}
            <div className={cn(
              "flex items-center space-x-4 md:space-x-6 transition-colors duration-300",
              isScrolled || !isHome || mobileMenuOpen ? "text-luxury-charcoal" : "text-white"
            )}>
              <button className="hover:text-luxury-gold transition-colors">
                <Search className="w-5 h-5" />
              </button>
              <button className="hover:text-luxury-gold transition-colors hidden sm:block">
                <Heart className="w-5 h-5" />
              </button>
              <button className="hover:text-luxury-gold transition-colors hidden sm:block">
                <User className="w-5 h-5" />
              </button>
              <button className="hover:text-luxury-gold transition-colors relative">
                <ShoppingBag className="w-5 h-5" />
                <span className="absolute -top-2 -right-2 bg-luxury-gold text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-medium">
                  0
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-luxury-cream border-t border-luxury-beige mt-4"
            >
              <nav className="flex flex-col py-4 px-4 space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="text-luxury-charcoal text-sm tracking-widest uppercase py-2 border-b border-luxury-beige/50"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-luxury-charcoal text-white/80 pt-16 pb-8">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="text-2xl text-white font-serif tracking-widest uppercase mb-6">Hamd Couture</h3>
              <p className="text-sm leading-relaxed text-white/60 mb-6">
                Redefining luxury Arabian fashion and kids wear with elegant designs, exceptional craftsmanship, and timeless style.
              </p>
              <div className="flex space-x-4">
                {['Instagram', 'Facebook', 'WhatsApp'].map((social) => (
                  <a key={social} href="#" className="text-white/60 hover:text-luxury-gold text-sm uppercase tracking-wider transition-colors">
                    {social}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-white text-sm font-semibold tracking-widest uppercase mb-6">Quick Links</h4>
              <ul className="space-y-4 text-sm">
                {['Home', 'About Us', 'Collections', 'Contact'].map((link) => (
                  <li key={link}>
                    <Link to={`/${link.toLowerCase().replace(' ', '-')}`} className="hover:text-luxury-gold transition-colors">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white text-sm font-semibold tracking-widest uppercase mb-6">Categories</h4>
              <ul className="space-y-4 text-sm">
                {['New Arrivals', 'Arabian Fashion', 'Kids Wear', 'Accessories'].map((cat) => (
                  <li key={cat}>
                    <Link to={`/${cat.toLowerCase().replace(' ', '-')}`} className="hover:text-luxury-gold transition-colors">
                      {cat}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white text-sm font-semibold tracking-widest uppercase mb-6">Newsletter</h4>
              <p className="text-sm text-white/60 mb-4">Subscribe to receive updates, access to exclusive deals, and more.</p>
              <form className="flex flex-col space-y-3" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="bg-transparent border border-white/20 px-4 py-3 text-sm text-white focus:outline-none focus:border-luxury-gold transition-colors placeholder:text-white/30"
                />
                <button className="bg-white text-luxury-charcoal px-4 py-3 text-sm font-medium tracking-widest uppercase hover:bg-luxury-gold hover:text-white transition-colors duration-300">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-white/40 tracking-wider">
            <p>COPYRIGHT &copy; 2026 HAMD COUTURE. ALL RIGHTS RESERVED.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
