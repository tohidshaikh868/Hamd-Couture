import { useState } from 'react';
import { motion } from 'motion/react';
import { products } from '../data';
import ProductCard from '../components/ProductCard';
import { Search, SlidersHorizontal } from 'lucide-react';

export default function Collections() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="pt-24 min-h-screen bg-white pb-24">
      {/* Page Header */}
      <div className="bg-luxury-cream py-16 mb-12">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif mb-4 text-luxury-charcoal"
          >
            All Collections
          </motion.h1>
          <motion.div 
             initial={{ opacity: 0, scale: 0 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ delay: 0.2 }}
             className="w-16 h-0.5 bg-luxury-gold mx-auto"
          ></motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          {/* Filters/Sort */}
          <div className="flex items-center gap-4 text-sm font-medium uppercase tracking-widest text-luxury-charcoal w-full md:w-auto">
            <button className="flex items-center gap-2 hover:text-luxury-gold transition-colors">
              <SlidersHorizontal className="w-4 h-4" />
              Filter
            </button>
            <div className="w-px h-4 bg-luxury-beige"></div>
            <select className="bg-transparent outline-none cursor-pointer hover:text-luxury-gold transition-colors">
              <option>Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest</option>
            </select>
          </div>

          {/* Search */}
          <div className="relative w-full md:w-64">
            <input 
              type="text" 
              placeholder="Search products..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full border-b border-luxury-beige py-2 pl-8 pr-4 text-sm focus:outline-none focus:border-luxury-gold bg-transparent transition-colors"
            />
            <Search className="w-4 h-4 absolute left-0 top-1/2 -translate-y-1/2 text-luxury-charcoal/50" />
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24">
            <p className="text-luxury-charcoal/60 text-lg">No products found matching your search.</p>
          </div>
        )}

        {/* Pagination Placeholder */}
        {filteredProducts.length > 0 && (
          <div className="mt-20 flex justify-center items-center gap-4 text-sm font-medium">
            <button className="w-10 h-10 rounded-full border border-luxury-charcoal flex items-center justify-center hover:bg-luxury-charcoal hover:text-white transition-colors">1</button>
            <button className="w-10 h-10 rounded-full border border-luxury-beige text-luxury-charcoal/50 flex items-center justify-center hover:border-luxury-charcoal hover:text-luxury-charcoal transition-colors">2</button>
            <span className="text-luxury-charcoal/50">...</span>
          </div>
        )}
      </div>
    </div>
  );
}
