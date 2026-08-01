import { motion } from 'motion/react';
import { Button } from '../components/Button';
import ProductCard from '../components/ProductCard';
import { products } from '../data';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart } from 'lucide-react';

export default function Home() {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/src/assets/images/hero_fashion_1785611660258.jpg"
            alt="Luxury Fashion"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="block text-white/90 text-sm tracking-[0.3em] uppercase mb-6"
          >
            Welcome to
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-8 leading-tight"
          >
            Timeless Arabian Elegance
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-white/80 text-lg md:text-xl font-light mb-12 max-w-2xl mx-auto"
          >
            Discover our curated collection of premium luxury fashion, blending traditional grace with modern sophistication.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Button variant="secondary" size="lg" className="w-full sm:w-auto" onClick={() => window.location.href = '/collections'}>
              Shop Collection
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-luxury-charcoal" onClick={() => window.location.href = '/contact'}>
              Contact Us
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-24 bg-luxury-cream">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif mb-4">Featured Collections</h2>
            <div className="w-16 h-0.5 bg-luxury-gold mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-[600px]">
            <Link to="/arabian-fashion" className="relative group overflow-hidden block rounded-sm">
              <img 
                src="https://images.unsplash.com/photo-1583391733958-650fac5ea07c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Arabian Fashion" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                <h3 className="text-3xl font-serif text-white mb-4">Arabian Fashion</h3>
                <span className="text-white uppercase tracking-widest text-sm flex items-center gap-2 group-hover:text-luxury-gold transition-colors">
                  Explore <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
            
            <Link to="/kids-wear" className="relative group overflow-hidden block rounded-sm">
              <img 
                src="https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Kids Wear" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                <h3 className="text-3xl font-serif text-white mb-4">Kids Wear</h3>
                <span className="text-white uppercase tracking-widest text-sm flex items-center gap-2 group-hover:text-luxury-gold transition-colors">
                  Explore <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif mb-4">New Arrivals</h2>
              <div className="w-16 h-0.5 bg-luxury-gold"></div>
            </div>
            <Link to="/new-arrivals" className="hidden md:flex text-sm uppercase tracking-widest text-luxury-charcoal hover:text-luxury-gold transition-colors items-center gap-2">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="mt-12 text-center md:hidden">
            <Button variant="outline" onClick={() => window.location.href = '/new-arrivals'}>
              View All Arrivals
            </Button>
          </div>
        </div>
      </section>

      {/* Brand Story / Banner */}
      <section className="relative py-32 overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0">
          <img 
            src="/src/assets/images/about_boutique_1785611676292.jpg" 
            alt="Boutique Interior" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-luxury-charcoal/70"></div>
        </div>
        <div className="relative z-10 text-center max-w-3xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-8">Crafting Elegance Since 2026</h2>
          <p className="text-white/80 text-lg font-light leading-relaxed mb-10">
            Every piece at Hamd Couture is carefully curated to provide luxury, comfort, and sophistication. 
            We believe in quality fabrics, exceptional craftsmanship, and timeless style.
          </p>
          <Button variant="secondary" onClick={() => window.location.href = '/about'}>
            Our Story
          </Button>
        </div>
      </section>
      
      {/* Instagram Gallery Placeholder */}
      <section className="py-24 bg-luxury-cream overflow-hidden">
         <div className="text-center mb-12">
            <h2 className="text-2xl font-serif mb-4">Follow @HamdCouture</h2>
            <p className="text-sm text-luxury-charcoal/60 uppercase tracking-widest">Share your style with us</p>
          </div>
          <div className="flex w-full">
            {[1,2,3,4,5,6].map((i) => (
               <div key={i} className="flex-none w-1/2 md:w-1/4 lg:w-1/6 aspect-square relative group">
                 <img 
                    src={`https://images.unsplash.com/photo-${1590740685934 + i}-2e92c5750d4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80`} 
                    alt="Instagram post" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Heart className="text-white w-6 h-6" />
                  </div>
               </div>
            ))}
          </div>
      </section>
    </div>
  );
}
