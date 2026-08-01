import { motion } from 'motion/react';
import { MapPin, Phone, Mail, MessageSquare } from 'lucide-react';
import { Button } from '../components/Button';

export default function Contact() {
  return (
    <div className="pt-24 min-h-screen bg-luxury-cream pb-24">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="text-center mb-16 pt-12">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif text-luxury-charcoal mb-4"
          >
            Get in Touch
          </motion.h1>
          <motion.div 
             initial={{ opacity: 0, scale: 0 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ delay: 0.2 }}
             className="w-16 h-0.5 bg-luxury-gold mx-auto mb-6"
          ></motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-luxury-charcoal/80 max-w-2xl mx-auto"
          >
            We would love to hear from you. For inquiries about our collections, bespoke services, or general questions, please reach out to us.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information & Actions */}
          <motion.div 
             initial={{ opacity: 0, x: -20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ delay: 0.4 }}
             className="space-y-12"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
               <div className="bg-white p-8 rounded-sm shadow-sm flex flex-col items-center text-center">
                 <div className="w-12 h-12 bg-luxury-cream rounded-full flex items-center justify-center text-luxury-gold mb-4">
                    <Phone className="w-5 h-5" />
                 </div>
                 <h3 className="font-serif text-xl mb-2">Call Us</h3>
                 <p className="text-luxury-charcoal/60 mb-6">+91 9762108336</p>
                 <Button variant="outline" size="sm" className="mt-auto w-full" onClick={() => window.location.href='tel:+919762108336'}>
                   Click to Call
                 </Button>
               </div>
               
               <div className="bg-white p-8 rounded-sm shadow-sm flex flex-col items-center text-center">
                 <div className="w-12 h-12 bg-luxury-cream rounded-full flex items-center justify-center text-luxury-gold mb-4">
                    <MessageSquare className="w-5 h-5" />
                 </div>
                 <h3 className="font-serif text-xl mb-2">WhatsApp</h3>
                 <p className="text-luxury-charcoal/60 mb-6">+91 9762108336</p>
                 <Button variant="primary" size="sm" className="mt-auto w-full bg-[#25D366] hover:bg-[#128C7E] border-none text-white" onClick={() => window.open('https://wa.me/919762108336', '_blank')}>
                   Chat Now
                 </Button>
               </div>
               
               <div className="bg-white p-8 rounded-sm shadow-sm flex flex-col items-center text-center sm:col-span-2 lg:col-span-1">
                 <div className="w-12 h-12 bg-luxury-cream rounded-full flex items-center justify-center text-luxury-gold mb-4">
                    <Mail className="w-5 h-5" />
                 </div>
                 <h3 className="font-serif text-xl mb-2">Email</h3>
                 <p className="text-luxury-charcoal/60 mb-6 text-sm break-all">almassayyed616@gmail.com</p>
                 <Button variant="outline" size="sm" className="mt-auto w-full" onClick={() => window.location.href='mailto:almassayyed616@gmail.com'}>
                   Send Email
                 </Button>
               </div>

               <div className="bg-white p-8 rounded-sm shadow-sm flex flex-col items-center text-center sm:col-span-2 lg:col-span-1">
                 <div className="w-12 h-12 bg-luxury-cream rounded-full flex items-center justify-center text-luxury-gold mb-4">
                    <MapPin className="w-5 h-5" />
                 </div>
                 <h3 className="font-serif text-xl mb-2">Visit Us</h3>
                 <p className="text-luxury-charcoal/60 text-sm">
                   St. No. 230, Near Airport,<br/>
                   Viman Darshan Society,<br/>
                   Sanjay Park, Pune – 411032
                 </p>
               </div>
            </div>
          </motion.div>

          {/* Contact Form & Map */}
          <motion.div 
             initial={{ opacity: 0, x: 20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ delay: 0.5 }}
             className="bg-white p-8 md:p-12 rounded-sm shadow-sm flex flex-col"
          >
            <h3 className="text-2xl font-serif text-luxury-charcoal mb-8">Send us a Message</h3>
            <form className="space-y-6 flex-grow" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-luxury-charcoal/60">First Name</label>
                  <input type="text" className="w-full border-b border-luxury-beige py-2 focus:outline-none focus:border-luxury-gold transition-colors bg-transparent" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-luxury-charcoal/60">Last Name</label>
                  <input type="text" className="w-full border-b border-luxury-beige py-2 focus:outline-none focus:border-luxury-gold transition-colors bg-transparent" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-luxury-charcoal/60">Email Address</label>
                <input type="email" className="w-full border-b border-luxury-beige py-2 focus:outline-none focus:border-luxury-gold transition-colors bg-transparent" />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-luxury-charcoal/60">Message</label>
                <textarea rows={4} className="w-full border-b border-luxury-beige py-2 focus:outline-none focus:border-luxury-gold transition-colors bg-transparent resize-none"></textarea>
              </div>
              <Button type="submit" className="w-full">
                Submit Request
              </Button>
            </form>

            <div className="mt-12 h-64 w-full bg-luxury-beige rounded-sm overflow-hidden">
               {/* Map Placeholder */}
               <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15129.414704383421!2d73.9103848!3d18.5581177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1404c0ab0cb%3A0xc34cc501c51d7c49!2sSanjay%20Park%2C%20Pune%2C%20Maharashtra%20411032!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{border:0}} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Hamd Couture Location"
                ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
