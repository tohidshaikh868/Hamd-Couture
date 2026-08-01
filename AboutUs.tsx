import { motion } from 'motion/react';

export default function AboutUs() {
  return (
    <div className="pt-24 min-h-screen bg-white pb-24">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center py-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="aspect-[4/5] overflow-hidden rounded-sm"
          >
            <img 
              src="/src/assets/images/about_boutique_1785611676292.jpg" 
              alt="Hamd Couture Boutique" 
              className="w-full h-full object-cover"
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <span className="text-luxury-charcoal/60 uppercase tracking-widest text-sm mb-4">Our Story</span>
            <h1 className="text-4xl md:text-5xl font-serif text-luxury-charcoal mb-8 leading-tight">
              Welcome to Hamd Couture
            </h1>
            
            <div className="space-y-6 text-luxury-charcoal/80 font-light leading-relaxed text-lg">
              <p>
                We specialize in premium Arabian Fashion and Kids Wear. Our boutique offers elegant, timeless designs made with quality fabrics, exceptional craftsmanship, and modern style. 
              </p>
              <p>
                Every collection is carefully curated to provide luxury, comfort, and sophistication for our discerning clients.
              </p>
              <p>
                Whether you are seeking the perfect evening Abaya or an exquisite outfit for your little ones, Hamd Couture blends tradition with contemporary elegance to ensure you look and feel your absolute best.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-8">
               <div>
                  <h3 className="text-3xl font-serif text-luxury-gold mb-2">10+</h3>
                  <p className="text-sm uppercase tracking-widest text-luxury-charcoal">Years of Elegance</p>
               </div>
               <div>
                  <h3 className="text-3xl font-serif text-luxury-gold mb-2">100%</h3>
                  <p className="text-sm uppercase tracking-widest text-luxury-charcoal">Premium Quality</p>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
