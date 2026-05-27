import { motion } from 'motion/react';
import { ShoppingBag, ChevronRight } from 'lucide-react';

interface NavbarProps {
  onNavigate: (view: 'home' | 'collection' | 'cart') => void;
  currentView: string;
  cartCount: number;
}

export default function Navbar({ onNavigate, currentView, cartCount }: NavbarProps) {
  return (
    <nav className="fixed top-0 w-full z-50 glass-nav">
      <div className="flex justify-between items-center px-6 md:px-16 py-6 max-w-[1280px] mx-auto w-full">
        <button 
          onClick={() => onNavigate('home')}
          className="font-display text-2xl md:text-3xl text-secondary-brand tracking-tighter leading-none hover:opacity-80 transition-opacity"
        >
          Açaí Ritual
        </button>

        <div className="hidden md:flex items-center gap-10">
          <button 
            onClick={() => onNavigate('collection')}
            className={`font-sans text-sm uppercase tracking-widest transition-colors ${
              currentView === 'collection' ? 'text-secondary-brand border-b-2 border-secondary-brand pb-1' : 'text-on-surface-variant hover:text-secondary-brand'
            }`}
          >
            Rituals
          </button>
          <button className="font-sans text-sm uppercase tracking-widest text-on-surface-variant hover:text-secondary-brand transition-colors">
            Locations
          </button>
          <button className="font-sans text-sm uppercase tracking-widest text-on-surface-variant hover:text-secondary-brand transition-colors">
            Our Story
          </button>
        </div>

        <div className="flex items-center gap-6">
          <button 
            onClick={() => onNavigate('cart')}
            className="relative p-2 hover:bg-surface-container rounded-full transition-colors group"
          >
            <ShoppingBag className="w-6 h-6 text-on-surface group-hover:text-secondary-brand transition-colors" />
            {cartCount > 0 && (
              <motion.span 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute top-0 right-0 bg-secondary-brand text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold"
              >
                {cartCount}
              </motion.span>
            )}
          </button>
          <button className="bg-secondary-brand text-white px-6 py-2 rounded-full font-sans text-sm uppercase tracking-widest hover:opacity-80 transition-all active:scale-95 shadow-lg shadow-secondary-brand/20">
            Order Now
          </button>
        </div>
      </div>
    </nav>
  );
}
