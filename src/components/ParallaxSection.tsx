import { motion } from 'motion/react';

export default function ParallaxSection() {
  return (
    <section className="h-[70vh] relative overflow-hidden flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-fixed bg-cover bg-center"
        style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA36Q74V6OdUMUiz2KlXlK0prh2aimK9hCH-fg0sCT3VtHmSUw_ONVAkMRFiMdvppjKABc16LzVp3vmJbuzrSOhltITSBd3Q5yrYS_82dfMimpCYXClb6VH8HbAVjiQUog_hUrNIe5-T0M6XgcSKUMviNKpmBUXzlfOxNOrKXIPPsscPiDc-vQuu2xRkETwBBX3CEK1vHZH682neGmbTkwATAf4qw_gGicjawDQ9NTNmrSI-DUJPyechXIKotZUfVf_1FTwEiHk6WqN')" }}
      >
        <div className="absolute inset-0 bg-primary-container/40"></div>
      </div>
      
      <div className="relative z-10 text-center px-6">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="font-display text-5xl md:text-[120px] text-white italic tracking-tighter mb-12"
        >
          Pure Sensation.
        </motion.h2>
        <button className="bg-white text-primary-brand px-12 py-6 rounded-full font-sans text-sm uppercase tracking-[0.3em] font-bold hover:bg-secondary-brand hover:text-white transition-all shadow-2xl">
          Order This Ritual
        </button>
      </div>
    </section>
  );
}
