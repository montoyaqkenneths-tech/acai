export default function Footer() {
  return (
    <footer className="bg-white border-t border-outline-variant/20 w-full py-24">
      <div className="max-w-[1280px] mx-auto px-6 md:px-16 flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="flex flex-col items-center md:items-start gap-4">
          <span className="font-display text-4xl text-primary-brand tracking-tighter">Açaí Ritual</span>
          <span className="font-sans text-xs uppercase tracking-[0.2em] text-on-surface-variant font-bold">
            © 2024 Açaí Ritual. Artisanal Excellence.
          </span>
        </div>
        <div className="flex flex-wrap justify-center gap-10 md:gap-16">
          <FooterLink label="Privacy" />
          <FooterLink label="Terms" />
          <FooterLink label="Press" />
          <FooterLink label="Contact" />
        </div>
        <span className="font-sans text-xs uppercase tracking-[0.1em] text-on-surface-variant/40 hidden lg:block">
          Crafted in the Amazon / Perfected in the City
        </span>
      </div>
    </footer>
  );
}

function FooterLink({ label }: { label: string }) {
  return (
    <a href="#" className="font-sans text-xs uppercase tracking-[0.2em] text-on-surface-variant font-bold hover:text-secondary-brand transition-all hover:translate-x-1 inline-block">
      {label}
    </a>
  );
}
