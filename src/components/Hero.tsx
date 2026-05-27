import { motion } from 'motion/react';
import { ShoppingBag, ArrowDown } from 'lucide-react';
import { Product } from '../types.ts';

interface HeroProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onViewIngredients: () => void;
}

export default function Hero({ product, onAddToCart, onViewIngredients }: HeroProps) {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-primary-container">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-40">
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src={product.image}
          className="w-full h-full object-cover"
          alt={product.name}
        />
      </div>

      {/* Atmospheric Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-primary-container to-transparent opacity-60"></div>
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-primary-container to-transparent opacity-80"></div>
        <div className="absolute top-1/4 -left-1/4 w-[1000px] h-[1000px] bg-secondary-brand/10 blur-[200px] rounded-full"></div>
      </div>

      <div className="relative z-10 px-6 md:px-16 max-w-[1280px] mx-auto w-full">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl"
        >
          <span className="inline-block font-sans text-sm uppercase tracking-[0.3em] text-on-primary-container mb-6">
            {product.isLimited ? 'Limited Edition Ritual' : 'Artisanal Ritual'}
          </span>
          <h1 className="font-display text-5xl md:text-[96px] text-white mb-8 leading-[1.1] tracking-tighter">
            The Signature <br/>
            <span className="text-on-primary-container font-decorative italic">Ritual Bowl.</span>
          </h1>

          <div className="flex flex-wrap items-center gap-8 mb-12">
            <div className="flex items-center gap-3">
              <span className="text-white/60 font-sans text-sm uppercase tracking-widest">Price</span>
              <span className="text-on-primary-container font-display text-4xl">${product.price.toFixed(2)}</span>
            </div>
            <div className="h-10 w-[1px] bg-white/20 hidden md:block"></div>
            <div className="flex items-center gap-3">
              <span className="text-white/60 font-sans text-sm uppercase tracking-widest">Prep Time</span>
              <span className="text-white font-display text-4xl">{product.prepTime}</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6">
            <button 
              onClick={() => onAddToCart(product)}
              className="bg-secondary-brand text-white px-10 md:px-12 py-5 rounded-full font-sans text-sm uppercase tracking-[0.2em] hover:scale-105 transition-transform flex items-center justify-center gap-3 shadow-2xl shadow-secondary-brand/40 group"
            >
              Add to Cart
              <ShoppingBag className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            </button>
            <button 
              onClick={onViewIngredients}
              className="border border-white/30 text-white px-12 py-5 rounded-full font-sans text-sm uppercase tracking-[0.2em] hover:bg-white/10 transition-colors backdrop-blur-sm"
            >
              View Ingredients
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-40"
      >
        <span className="font-sans text-xs uppercase tracking-widest text-white">Scroll to explore</span>
        <ArrowDown className="w-4 h-4 text-white" />
      </motion.div>
    </section>
  );
}
