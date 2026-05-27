import { motion } from 'motion/react';
import { ReactNode } from 'react';
import { Leaf, Zap, Heart } from 'lucide-react';

export default function BentoDetails() {
  return (
    <section className="py-24 md:py-[120px] px-6 md:px-16 max-w-[1280px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Main Description */}
        <div className="md:col-span-8 flex flex-col justify-center pr-0 md:pr-12">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-[48px] text-primary-brand mb-8 leading-tight tracking-tight"
          >
            Artisanal excellence in every spoonful.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-sans text-lg text-on-surface-variant max-w-2xl leading-relaxed opacity-80"
          >
            Our Signature Ritual Bowl is more than a meal—it's a curated experience. We source organic, wild-harvested açaí from the heart of the Amazon, blended to a velvet consistency and paired with hand-selected botanicals to elevate your morning routine.
          </motion.p>
        </div>

        {/* Highlight Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="md:col-span-4 bg-surface-container rounded-[40px] p-10 flex flex-col justify-between border border-outline-variant/20 hover:border-secondary-brand transition-colors group cursor-default"
        >
          <div className="bg-white w-16 h-16 rounded-3xl flex items-center justify-center mb-12 shadow-sm group-hover:bg-secondary-brand transition-colors duration-500">
            <Leaf className="w-8 h-8 text-secondary-brand group-hover:text-white transition-colors duration-500" />
          </div>
          <div>
            <h3 className="font-display text-6xl mb-2 text-primary-brand tracking-tighter">100%</h3>
            <p className="font-sans text-sm uppercase tracking-widest text-on-surface-variant">Sustainable Sourcing</p>
          </div>
        </motion.div>

        {/* Benefits List */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="md:col-span-6 bg-primary-container text-white rounded-[40px] p-12 overflow-hidden relative"
        >
          <div className="relative z-10 h-full flex flex-col">
            <h3 className="font-display text-4xl mb-12">The Benefits</h3>
            <div className="space-y-12 flex-grow">
              <BenefitItem 
                number="01" 
                title="Antioxidant Power" 
                desc="Rich in anthocyanins to combat free radicals and support cellular health." 
                icon={<Heart className="w-5 h-5 text-on-primary-container" />}
              />
              <BenefitItem 
                number="02" 
                title="Clean Energy" 
                desc="Low glycemic index for sustained focus and vitality throughout the day." 
                icon={<Zap className="w-5 h-5 text-on-primary-container" />}
              />
              <BenefitItem 
                number="03" 
                title="Fiber Rich" 
                desc="Promotes digestive wellness with organic flax seeds and whole berries." 
                icon={<Leaf className="w-5 h-5 text-on-primary-container" />}
              />
            </div>
          </div>
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-secondary-brand opacity-10 blur-[100px] rounded-full"></div>
        </motion.div>

        {/* Ingredients Grid */}
        <div className="md:col-span-6 grid grid-cols-2 gap-4">
          <IngredientCard 
            image="https://lh3.googleusercontent.com/aida-public/AB6AXuAwdTQKS0UtRKCeRsULkNjUX8rInHmUMCE8VqJc_2ghy58JGsrXEIN-AcXhXmhw83gq6_ZEYufleXIJdRb5KV8hYlmOdLl9vs4xqsv-3vEEVLjziLAMzyUuuOoRO4mmmdhH5ivCWWhW1bwElZmmaTBQ0snNWP4DuCOGovcUaKmCavINUiC4PLAii0_rqscf1VPWVvV5Flz7MaYbwaHIK4oRVlYCEr378HcGi32mDvc2ZM5VNLNci-qHLEUAAVcYtOvHmGqfuB0RNwNK" 
            label="Wild Açaí"
          />
          <IngredientCard 
            image="https://lh3.googleusercontent.com/aida-public/AB6AXuDXeajePHFFsmBBvBf2qg_0hjWC91hAigA6UOy24RENdGMOZyTlPWfC1k8BZb7zpjNunjudvVupdDMI-Q1h1PVZlA5obzYmDOWQuHqvkCKcDT1vn9dnlqfw4AiJIID0nuxDCh6dzNN0kmscFMWqQlO3sp6k7Hvfo_qY_xEEKV7TV7P7B9mqYZqHxFFAr-NV6iBJYzQP-ksMturmjNxC3hEibLCucF8Eu_r8KgntBfDuCAZOxCk7D2T7Ykuftw9NPY_-CKyX-bBIdyjp" 
            label="House Granola"
          />
          <IngredientCard 
            image="https://lh3.googleusercontent.com/aida-public/AB6AXuAaOW7opl2WRMjnfQsUvCSKoDqGE1ZH1fI28Kmz-nD1-TomP60jMAviKRr9MhPlfv9x8Quj884DPveP9ADNvJTyIInDyT8fA3A-b9g1Dyd-n1YHWQFKKPO9_uJcmXiUE2ASd2qRAPoXtTvookcReTXZFFieyH2sM5zI96De8-30VtgxTdTjbHsofemW2xbx_V8rso-7-Wr1OSJpQIN1QiEqR876Ge6mQdSPWGAR1ILrVLz_gScY-7wuoQHvyrWV5MAqQay2qLc8tAUl" 
            label="Dragonfruit"
          />
          <IngredientCard 
            image="https://lh3.googleusercontent.com/aida-public/AB6AXuDcTFjU2UGZ6q0xPSOpm7ruWgsPF7hlE_cZvtpZ7tt2JRET_HFcWXLMqtpfjKtFOUzB0Jh28nvHo5-5ds2f9iig1pDAoJyMQtqge7Q2k6EkqKeGgwveESth3P7T1GRYk5ijLhIdr0b1edtUOCh9y7MlG1fPj9satBzXqiMrZgtv0iwIAF8D4jjCHq1zvChCbZydDDCo0MUpTkCqGixzMEb-xk_jhgScbUWiHnaU3ail_h_EG-uYTrxTy88RFalUQ3_R5WFqJWCbERZ5" 
            label="Nut Butter"
          />
        </div>
      </div>
    </section>
  );
}

function BenefitItem({ number, title, desc, icon }: { number: string, title: string, desc: string, icon: ReactNode }) {
  return (
    <div className="flex items-start gap-6 group">
      <div className="relative">
        <div className="bg-secondary-container text-white w-12 h-12 rounded-full flex items-center justify-center font-bold relative z-10 overflow-hidden">
          <span className="group-hover:-translate-y-12 transition-transform duration-500">{number}</span>
          <div className="absolute top-12 group-hover:top-0 transition-all duration-500 left-0 w-full h-full flex items-center justify-center">
            {icon}
          </div>
        </div>
      </div>
      <div className="border-b border-white/10 pb-6 flex-grow group-last:border-0">
        <h4 className="font-sans text-sm uppercase tracking-widest mb-2 text-on-primary-container">{title}</h4>
        <p className="text-white/60 text-sm leading-relaxed max-w-sm">{desc}</p>
      </div>
    </div>
  );
}

function IngredientCard({ image, label }: { image: string, label: string }) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-surface-container-highest rounded-[32px] p-6 flex flex-col items-center justify-center text-center gap-6 border border-transparent hover:border-secondary-brand/20 transition-colors cursor-pointer group"
    >
      <div className="relative">
        <div className="absolute inset-0 bg-secondary-brand/20 blur-xl rounded-full scale-0 group-hover:scale-100 transition-transform duration-500"></div>
        <img src={image} alt={label} className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-white shadow-xl relative z-10" />
      </div>
      <span className="font-sans text-xs uppercase tracking-[0.2em] text-on-surface-variant font-bold">{label}</span>
    </motion.div>
  );
}
