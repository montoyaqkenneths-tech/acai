import { motion } from 'motion/react';
import { Product } from '../types.ts';
import { Plus } from 'lucide-react';

interface CollectionViewProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
}

export default function CollectionView({ products, onAddToCart }: CollectionViewProps) {
  const categories = ['All', 'Bowls', 'Kits', 'Accessories'];

  return (
    <div className="bg-primary-container text-white min-h-screen pt-32 pb-24 px-6 md:px-16">
      <div className="max-w-[1280px] mx-auto">
        <header className="mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-5xl md:text-7xl mb-8 tracking-tighter"
          >
            The Ritual <span className="text-on-primary-container">Collection</span>
          </motion.h1>
          <div className="flex flex-wrap gap-4">
            {categories.map((cat, i) => (
              <button 
                key={cat}
                className={`px-8 py-2 rounded-full font-sans text-xs uppercase tracking-widest transition-all ${
                  i === 0 ? 'bg-secondary-brand text-white shadow-lg shadow-secondary-brand/20' : 'border border-white/20 text-white/60 hover:border-white/40'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {products.map((product, idx) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onAddToCart={onAddToCart}
              className={idx % 3 === 0 ? 'md:col-span-8' : 'md:col-span-4'}
              aspect={idx % 3 === 0 ? 'aspect-[16/9]' : 'aspect-square'}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (p: Product) => void;
  className?: string;
  aspect?: string;
}

function ProductCard({ product, onAddToCart, className = '', aspect = '' }: ProductCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`group cursor-pointer ${className}`}
    >
      <div className={`relative overflow-hidden rounded-[40px] bg-white/5 border border-white/10 mb-6 ${aspect}`}>
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-container/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {product.isLimited && (
          <span className="absolute top-8 left-8 bg-secondary-brand text-white text-[10px] uppercase font-bold tracking-[0.2em] px-4 py-1.5 rounded-full z-10">
            Limited Edition
          </span>
        )}

        <div className="absolute bottom-8 right-8 z-20 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <button 
            onClick={(e) => { e.stopPropagation(); onAddToCart(product); }}
            className="w-14 h-14 bg-white text-secondary-brand rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform active:scale-95"
          >
            <Plus className="w-6 h-6" />
          </button>
        </div>
      </div>
      <div className="flex justify-between items-start px-4">
        <div>
          <h3 className="font-display text-2xl text-white mb-1 group-hover:text-on-primary-container transition-colors">{product.name}</h3>
          <p className="font-sans text-xs text-white/40 uppercase tracking-widest">{product.category} Series</p>
        </div>
        <p className="font-display text-2xl text-secondary-brand">${product.price.toFixed(0)}</p>
      </div>
    </motion.div>
  );
}
