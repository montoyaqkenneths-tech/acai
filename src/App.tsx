import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar.tsx';
import Footer from './components/Footer.tsx';
import Hero from './components/Hero.tsx';
import BentoDetails from './components/BentoDetails.tsx';
import ParallaxSection from './components/ParallaxSection.tsx';
import CollectionView from './components/CollectionView.tsx';
import CartView from './components/CartView.tsx';
import { PRODUCTS } from './data.ts';
import { CartItem, Product } from './types.ts';

type View = 'home' | 'collection' | 'cart';

export default function App() {
  const [view, setView] = useState<View>('home');
  const [cart, setCart] = useState<CartItem[]>([]);

  const cartCount = useMemo(() => cart.reduce((sum, item) => sum + item.quantity, 0), [cart]);

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === product.id);
      if (existing) {
        return prev.map(i => i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(0, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }).filter(item => item.quantity > 0));
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const signatureProduct = PRODUCTS[0];

  return (
    <div className="min-h-screen selection:bg-secondary-brand selection:text-white overflow-x-hidden">
      <Navbar 
        onNavigate={setView} 
        currentView={view} 
        cartCount={cartCount} 
      />

      <AnimatePresence mode="wait">
        {view === 'home' && (
          <motion.div 
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pt-20"
          >
            <Hero 
              product={signatureProduct} 
              onAddToCart={addToCart} 
              onViewIngredients={() => {}} 
            />
            <BentoDetails />
            <ParallaxSection />
          </motion.div>
        )}

        {view === 'collection' && (
          <motion.div 
            key="collection"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <CollectionView 
              products={PRODUCTS} 
              onAddToCart={addToCart} 
            />
          </motion.div>
        )}

        {view === 'cart' && (
          <motion.div 
            key="cart"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <CartView 
              items={cart} 
              onUpdateQuantity={updateQuantity} 
              onRemove={removeFromCart} 
            />
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
