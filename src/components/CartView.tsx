import { motion, AnimatePresence } from 'motion/react';
import { CartItem, Product } from '../types.ts';
import { ShoppingBag, Minus, Plus, X, ArrowRight, Verified } from 'lucide-react';

interface CartViewProps {
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemove: (id: string) => void;
}

export default function CartView({ items, onUpdateQuantity, onRemove }: CartViewProps) {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const delivery = subtotal > 0 ? 5.00 : 0;
  const tax = subtotal * 0.08;
  const total = subtotal + delivery + tax;

  return (
    <div className="bg-primary-container min-h-screen pt-32 pb-24 px-6 md:px-16 text-white">
      <div className="max-w-[1280px] mx-auto">
        <header className="mb-16">
          <h1 className="font-display text-5xl md:text-8xl mb-4">Your <span className="text-gradient">Ritual</span></h1>
          <p className="font-sans text-lg text-on-primary-container max-w-xl opacity-80">Each selection is a step toward mindful indulgence. Review your curated items before we begin the preparation.</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-8 space-y-12">
            <AnimatePresence mode="popLayout">
              {items.length === 0 ? (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="py-20 text-center border-2 border-dashed border-white/10 rounded-[40px]"
                >
                  <ShoppingBag className="w-16 h-16 text-white/10 mx-auto mb-6" />
                  <p className="font-sans text-white/40 uppercase tracking-widest">Your ritual bag is empty</p>
                </motion.div>
              ) : (
                items.map((item) => (
                  <motion.div 
                    key={item.id}
                    layout
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="group flex flex-col md:flex-row gap-8 pb-12 border-b border-white/10 last:border-0"
                  >
                    <div className="w-full md:w-56 h-56 overflow-hidden rounded-[32px] bg-white/5 relative">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    </div>
                    <div className="flex-grow flex flex-col justify-between">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-display text-3xl mb-1">{item.name}</h3>
                          <p className="font-sans text-on-primary-container opacity-60 uppercase text-xs tracking-widest">{item.category}</p>
                        </div>
                        <span className="font-display text-3xl">${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                      
                      <div className="flex items-center justify-between mt-8">
                        <div className="flex items-center border border-white/20 rounded-full px-6 py-2 gap-8 backdrop-blur-md">
                          <button 
                            onClick={() => onUpdateQuantity(item.id, -1)}
                            className="text-white hover:text-secondary-brand transition-colors p-1"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="font-display text-xl w-6 text-center">{item.quantity.toString().padStart(2, '0')}</span>
                          <button 
                            onClick={() => onUpdateQuantity(item.id, 1)}
                            className="text-white hover:text-secondary-brand transition-colors p-1"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                        <button 
                          onClick={() => onRemove(item.id)}
                          className="font-sans text-xs uppercase tracking-widest text-on-primary-container hover:text-secondary-brand transition-colors flex items-center gap-2 group/remove"
                        >
                          <X className="w-4 h-4 group-hover/remove:rotate-90 transition-transform" /> REMOVE
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </AnimatePresence>
          </div>

          <aside className="lg:col-span-4 sticky top-32">
            <div className="bg-white/5 border border-white/10 p-10 rounded-[40px] backdrop-blur-xl">
              <h2 className="font-display text-3xl mb-10 border-b border-white/10 pb-6">Summary</h2>
              <div className="space-y-6 mb-12">
                <SummaryRow label="Subtotal" value={subtotal} />
                <SummaryRow label="Ritual Delivery Fee" value={delivery} />
                <SummaryRow label="Tax" value={tax} />
              </div>

              <div className="pt-8 border-t border-white/10 mb-12">
                <div className="flex justify-between items-end">
                  <span className="font-sans text-xs tracking-[0.2em] text-on-primary-container uppercase font-bold">Total Ritual</span>
                  <span className="font-display text-6xl text-on-primary-container leading-none">${total.toFixed(2)}</span>
                </div>
              </div>

              <button className="w-full pink-gradient-bg text-white py-6 rounded-full font-sans font-extrabold text-sm tracking-[0.2em] uppercase flex items-center justify-center gap-3 group transition-all hover:shadow-[0_20px_50px_rgba(185,8,93,0.3)] hover:-translate-y-1 active:scale-[0.98]">
                PROCEED TO CHECKOUT
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
              </button>

              <div className="mt-10 flex items-center gap-3 justify-center">
                <Verified className="w-5 h-5 text-on-primary-container opacity-60" />
                <p className="font-sans text-xs tracking-widest text-on-primary-container uppercase font-bold opacity-60">Sourced with Intention & Ethics</p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

function SummaryRow({ label, value }: { label: string, value: number }) {
  return (
    <div className="flex justify-between items-center group">
      <span className="font-sans text-sm text-on-primary-container uppercase tracking-widest group-hover:text-white transition-colors">{label}</span>
      <span className="font-display text-xl text-white">${value.toFixed(2)}</span>
    </div>
  );
}
