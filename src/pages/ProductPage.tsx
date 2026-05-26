import { useState } from 'react';
import Icon from '@/components/ui/icon';

const PRODUCT_IMG = 'https://cdn.ezst.app/projects/5e25b8cf-8a8d-4da7-9381-dcb981f883fd/files/d7ddfdf1-794c-4d08-be4c-5fc6563551d6.jpg';

const specs = [
  { label: 'Head Weight', value: '1.5 lbs' },
  { label: 'Overall Length', value: '13 inches' },
  { label: 'Handle Material', value: 'Fiberglass + Dual-Density Rubber' },
  { label: 'Head Material', value: 'Drop-Forged Hardened Steel' },
  { label: 'Included Bits', value: '6 (Phillips, Flathead, Torx, Hex)' },
  { label: 'Warranty', value: 'Lifetime on Head' },
];

const bits = ['PH1', 'PH2', 'SL4', 'T20', 'T25', 'H4'];

export default function ProductPage() {
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2500);
  };

  return (
    <main className="pt-16 min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center gap-2 text-xs text-charcoal/40 font-body">
          <span>Home</span>
          <span>/</span>
          <span className="text-orange">The Screwham</span>
        </div>
      </div>

      {/* Product */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-16 items-start">
        {/* Image */}
        <div className="sticky top-24">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-orange/10 to-transparent rounded-2xl" />
            <div className="relative bg-charcoal-dark rounded-xl overflow-hidden">
              <img
                src={PRODUCT_IMG}
                alt="The Screwham"
                className="w-full object-cover"
                style={{ aspectRatio: '1 / 1' }}
              />
              <div className="absolute top-4 left-4 bg-orange text-white font-condensed font-black text-sm tracking-widest uppercase px-3 py-1.5">
                BESTSELLER
              </div>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-3">
            {['Hammer Mode', 'Driver Mode', 'Bit Storage'].map((label) => (
              <div key={label} className="bg-gray-50 border border-gray-200 rounded-lg p-3 text-center hover:border-orange/40 cursor-pointer transition-colors">
                <div className="text-2xl mb-1">{label === 'Hammer Mode' ? '🔨' : label === 'Driver Mode' ? '🔩' : '🗂️'}</div>
                <div className="font-condensed text-charcoal text-xs font-semibold uppercase tracking-wide">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Info */}
        <div>
          <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 font-condensed font-semibold text-xs tracking-widest uppercase px-3 py-1.5 mb-4">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
            In Stock — Ships in 24 hrs
          </div>

          <h1 className="font-condensed font-black text-charcoal-dark leading-none mb-2" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
            THE SCREWHAM™
          </h1>
          <p className="font-condensed text-charcoal/50 text-lg tracking-widest uppercase mb-6">
            Premium Hybrid Hand Tool
          </p>

          <div className="flex items-baseline gap-4 mb-6">
            <span className="font-condensed font-black text-charcoal-dark text-5xl">$34.99</span>
            <span className="text-charcoal/40 line-through font-body text-lg">$59.99</span>
            <span className="bg-orange/10 text-orange font-condensed font-bold text-sm px-2 py-1">Save 42%</span>
          </div>

          <div className="flex gap-0.5 items-center mb-8">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} className="text-orange text-xl">★</span>
            ))}
            <span className="text-charcoal/50 text-sm ml-2 font-body">4.9 (2,847 reviews)</span>
          </div>

          <p className="text-charcoal/70 leading-relaxed mb-8 text-base font-body border-l-2 border-orange pl-4">
            The Screwham is the first professional-grade tool that combines a precision-balanced claw hammer with a built-in magnetic screwdriver system — all in a single 13-inch package. Designed for contractors, homeowners, and anyone who's ever wished they could work smarter, not heavier.
          </p>

          {/* Quantity + Add */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center border border-gray-200">
              <button
                onClick={() => setQty(q => Math.max(1, q - 1))}
                className="w-10 h-12 flex items-center justify-center text-charcoal hover:bg-gray-50 transition-colors font-body text-lg"
              >
                −
              </button>
              <span className="w-12 h-12 flex items-center justify-center font-condensed font-bold text-charcoal-dark text-lg border-x border-gray-200">
                {qty}
              </span>
              <button
                onClick={() => setQty(q => q + 1)}
                className="w-10 h-12 flex items-center justify-center text-charcoal hover:bg-gray-50 transition-colors font-body text-lg"
              >
                +
              </button>
            </div>
            <button
              onClick={handleAdd}
              className={`flex-1 font-condensed font-black text-base tracking-widest uppercase py-4 transition-all duration-300 ${
                added
                  ? 'bg-green-600 text-white'
                  : 'bg-charcoal-dark text-white hover:bg-orange'
              }`}
            >
              {added ? '✓ Added to Cart!' : 'Add to Cart'}
            </button>
          </div>

          <button className="w-full bg-orange text-white font-condensed font-black text-base tracking-widest uppercase py-4 hover:bg-orange-light transition-colors mb-8">
            Buy Now — Checkout
          </button>

          {/* Trust signals */}
          <div className="grid grid-cols-3 gap-4 py-6 border-y border-gray-100 mb-8">
            {[
              { icon: 'Shield', label: 'Lifetime Warranty' },
              { icon: 'RotateCcw', label: '30-Day Returns' },
              { icon: 'Truck', label: 'Free Shipping $50+' },
            ].map(({ icon, label }) => (
              <div key={label} className="flex flex-col items-center gap-2 text-center">
                <Icon name={icon} size={20} className="text-orange" />
                <span className="font-condensed text-charcoal/60 text-xs tracking-wide uppercase">{label}</span>
              </div>
            ))}
          </div>

          {/* Specs */}
          <div>
            <h3 className="font-condensed font-bold text-charcoal-dark text-xl uppercase tracking-wide mb-4">
              Specifications
            </h3>
            <div className="divide-y divide-gray-100">
              {specs.map((s) => (
                <div key={s.label} className="flex justify-between py-3">
                  <span className="text-charcoal/50 text-sm font-body">{s.label}</span>
                  <span className="text-charcoal-dark font-semibold text-sm font-body">{s.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bits */}
          <div className="mt-8">
            <h3 className="font-condensed font-bold text-charcoal-dark text-xl uppercase tracking-wide mb-4">
              Included Magnetic Bits
            </h3>
            <div className="flex flex-wrap gap-2">
              {bits.map((b) => (
                <span key={b} className="bg-charcoal-dark text-white font-condensed font-semibold text-xs tracking-widest uppercase px-3 py-1.5">
                  {b}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Full-width CTA */}
      <section className="bg-charcoal-dark py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-condensed font-black text-white text-4xl md:text-5xl mb-4">
            STILL ON THE FENCE?
          </h2>
          <p className="text-white/60 text-lg mb-8 max-w-xl mx-auto">
            Try the Screwham risk-free for 30 days. If it doesn't replace half your toolbox, send it back — no questions asked.
          </p>
          <button className="bg-orange text-white font-condensed font-black text-base tracking-widest uppercase px-12 py-5 hover:bg-orange-light transition-colors">
            Order Now — $34.99
          </button>
        </div>
      </section>
    </main>
  );
}