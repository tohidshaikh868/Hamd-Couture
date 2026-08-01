import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ShoppingBag, Eye, Heart } from 'lucide-react';
import { Product } from '../types';
import { cn } from '../lib/utils';
import React from 'react';

interface ProductCardProps {
  product: Product;
  key?: React.Key;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group flex flex-col"
    >
      <div className="relative overflow-hidden aspect-[3/4] bg-luxury-beige mb-4 rounded-sm">
        <img
          src={product.image}
          alt={product.name}
          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
        />
        
        {product.isNew && (
          <div className="absolute top-4 left-4 bg-white px-3 py-1 text-[10px] uppercase tracking-widest font-medium text-luxury-charcoal">
            New
          </div>
        )}

        <div className="absolute top-4 right-4 flex flex-col gap-2 translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
          <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-luxury-charcoal hover:bg-luxury-gold hover:text-white transition-colors shadow-sm">
            <Heart className="w-4 h-4" />
          </button>
          <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-luxury-charcoal hover:bg-luxury-gold hover:text-white transition-colors shadow-sm">
            <Eye className="w-4 h-4" />
          </button>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <button className="w-full bg-luxury-charcoal text-white py-3 text-xs uppercase tracking-widest font-medium hover:bg-luxury-gold transition-colors flex items-center justify-center gap-2 rounded-sm">
            <ShoppingBag className="w-4 h-4" />
            Add to Cart
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center text-center px-2">
        <span className="text-[10px] uppercase tracking-widest text-luxury-charcoal/60 mb-2">
          {product.category}
        </span>
        <Link to={`/product/${product.id}`} className="font-serif text-lg text-luxury-charcoal hover:text-luxury-gold transition-colors mb-2 line-clamp-1">
          {product.name}
        </Link>
        <span className="text-sm font-medium text-luxury-charcoal">
          ${product.price.toFixed(2)}
        </span>
      </div>
    </motion.div>
  );
}
