import { motion } from 'motion/react';
import { products, kidsCategories } from '../data';
import ProductCard from '../components/ProductCard';

export default function KidsWear() {
  const kidsProducts = products.filter(p => p.category === 'Kids Wear');

  return (
    <div className="pt-24 min-h-screen bg-white pb-24">
      {/* Hero */}
      <div className="relative h-[40vh] md:h-[50vh] overflow-hidden mb-16">
        <img 
          src="https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
          alt="Kids Wear" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4">
           <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif text-white mb-6"
          >
            Kids Wear
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/90 max-w-2xl text-lg font-light"
          >
            Elegant and comfortable designer wear for your little ones.
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <button className="px-6 py-2 bg-luxury-charcoal text-white text-xs uppercase tracking-widest font-medium rounded-sm">All</button>
          {kidsCategories.map((cat) => (
            <button key={cat} className="px-6 py-2 bg-luxury-cream text-luxury-charcoal hover:bg-luxury-beige transition-colors text-xs uppercase tracking-widest font-medium rounded-sm">
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {kidsProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
