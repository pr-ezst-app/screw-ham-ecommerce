import { useState } from 'react';

const products = [
  {
    id: 1,
    name: 'ScrewHam Tool Belt',
    tagline: 'Carry More. Reach Faster.',
    price: '$27.99',
    badge: 'NEW',
    img: 'https://cdn.ezst.app/projects/5e25b8cf-8a8d-4da7-9381-dcb981f883fd/files/8af310fc-3ea9-46af-922e-db6e1c92b708.jpg',
    desc: 'Heavy-duty canvas belt with 14 pockets, loops, and a dedicated Screwham holster. Orange contrast stitching. One-size-adjustable.',
    specs: ['14 pockets & loops', 'Reinforced canvas', 'Adjustable waist 28"–46"', 'Screwham-ready holster'],
  },
  {
    id: 2,
    name: 'ScrewHam Pro Bag',
    tagline: 'Everything In. Nothing Lost.',
    price: '$39.99',
    badge: 'BESTSELLER',
    img: 'https://cdn.ezst.app/projects/5e25b8cf-8a8d-4da7-9381-dcb981f883fd/files/142693e9-0af3-4346-913b-cfb6e14915e0.jpg',
    desc: 'The carry-all for serious builders. Reinforced base, 22 pockets, steel-frame mouth that stays open. Fits a full day\'s worth of gear.',
    specs: ['22 internal pockets', 'Steel-frame open top', 'Rubber-reinforced base', 'Lifetime stitching warranty'],
  },
  {
    id: 3,
    name: 'ScrewHam Wall Grid',
    tagline: 'Your Garage, Organized.',
    price: '$44.99',
    badge: 'POPULAR',
    img: 'https://cdn.ezst.app/projects/5e25b8cf-8a8d-4da7-9381-dcb981f883fd/files/1ed276fa-30ce-47b7-8a96-6bb138ff0919.jpg',
    desc: 'Powder-coated steel pegboard system with 24 heavy-duty hooks included. Mounts to any wall in minutes. Holds up to 80 lbs.',
    specs: ['24 hooks included', 'Holds up to 80 lbs', 'Powder-coated steel', '24" × 36" panel'],
  },
  {
    id: 4,
    name: 'ScrewHam Magnetic Tray',
    tagline: 'Stop Losing Your Screws.',
    price: '$12.99',
    badge: 'GRAB ONE',
    img: 'https://cdn.ezst.app/projects/5e25b8cf-8a8d-4da7-9381-dcb981f883fd/files/6d65b86d-6288-4b95-b942-8bacf1f3e150.jpg',
    desc: 'Super-strength magnetic tray with non-slip rubber base. Catches every screw, bolt, and bit so nothing rolls off the workbench. Ever.',
    specs: ['Super-strength magnet', 'Non-slip rubber base', '6" diameter', 'Holds up to 3 lbs of hardware'],
  },
];

export default function MoreToolsPage() {
  const [added, setAdded] = useState<number | null>(null);

  const handleAdd = (id: number) => {
    setAdded(id);
    setTimeout(() => setAdded(null), 2000);
  };

  return (
    <main className="pt-16 min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-charcoal-dark py-20 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `repeating-linear-gradient(-45deg, transparent, transparent 10px, rgba(242,101,34,0.4) 10px, rgba(242,101,34,0.4) 11px)`,
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="inline-block bg-orange/20 text-orange font-condensed font-semibold text-xs tracking-widest uppercase px-4 py-2 mb-6">
            Tool Storage
          </div>
          <h1 className="font-condensed font-black text-white leading-none mb-4" style={{ fontSize: 'clamp(3rem, 6vw, 5.5rem)' }}>
            MORE TOOLS.<br /><span className="text-orange">ZERO CHAOS.</span>
          </h1>
          <p className="text-white/60 text-lg max-w-xl leading-relaxed">
            Built by the same people who made the Screwham. Every storage product is designed to keep your gear ready, reachable, and organized.
          </p>
        </div>
      </section>

      {/* Filter bar */}
      <div className="bg-white border-b border-gray-100 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <span className="font-condensed text-charcoal/50 text-sm uppercase tracking-widest">{products.length} Products</span>
          <div className="flex gap-2">
            {['All', 'Carry', 'Wall', 'Bench'].map((f) => (
              <button
                key={f}
                className={`font-condensed font-semibold text-xs tracking-widest uppercase px-4 py-1.5 transition-colors ${
                  f === 'All'
                    ? 'bg-charcoal-dark text-white'
                    : 'text-charcoal/50 hover:text-charcoal border border-gray-200 hover:border-gray-400'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {products.map((p) => (
            <div key={p.id} className="group border border-gray-100 hover:border-orange/30 transition-all duration-300 hover:shadow-lg">
              {/* Image */}
              <div className="relative bg-gray-50 overflow-hidden" style={{ aspectRatio: '4/3' }}>
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-orange text-white font-condensed font-black text-xs tracking-widest uppercase px-3 py-1.5">
                  {p.badge}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <h2 className="font-condensed font-black text-charcoal-dark text-2xl uppercase leading-tight">
                      {p.name}
                    </h2>
                    <p className="text-orange font-condensed font-semibold text-sm tracking-wide uppercase">{p.tagline}</p>
                  </div>
                  <span className="font-condensed font-black text-charcoal-dark text-2xl shrink-0">{p.price}</span>
                </div>

                <p className="text-charcoal/60 text-sm leading-relaxed mb-5 font-body">{p.desc}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {p.specs.map((s) => (
                    <span key={s} className="bg-gray-50 border border-gray-200 text-charcoal/60 font-condensed font-semibold text-xs tracking-wide uppercase px-3 py-1">
                      {s}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => handleAdd(p.id)}
                  className={`w-full font-condensed font-black text-sm tracking-widest uppercase py-3.5 transition-all duration-300 ${
                    added === p.id
                      ? 'bg-green-600 text-white'
                      : 'bg-charcoal-dark text-white hover:bg-orange'
                  }`}
                >
                  {added === p.id ? '✓ Added to Cart!' : 'Add to Cart'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bundle CTA */}
      <section className="bg-orange py-16 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `repeating-linear-gradient(-45deg, transparent, transparent 10px, rgba(0,0,0,0.1) 10px, rgba(0,0,0,0.1) 11px)`,
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="font-condensed font-black text-white leading-none mb-2" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              GRAB THE FULL SETUP.
            </h2>
            <p className="text-white/80 text-lg">The Screwham + Tool Belt + Pro Bag. Everything you need, nothing you don't.</p>
          </div>
          <button className="shrink-0 bg-white text-orange font-condensed font-black text-base tracking-widest uppercase px-10 py-4 hover:bg-charcoal-dark hover:text-white transition-all duration-200">
            Shop the Bundle
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal-dark border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <div className="font-condensed font-black text-white text-2xl tracking-wider mb-2">
                SCREWHAM<span className="text-orange">.</span>
              </div>
              <p className="text-white/40 text-sm">One Tool. Double the Power. Since 2024.</p>
            </div>
            <div className="flex flex-wrap gap-x-8 gap-y-2">
              {['Privacy Policy', 'Terms of Service', 'Returns & Warranty', 'Support'].map((link) => (
                <a key={link} href="#" className="text-white/40 text-xs tracking-wide uppercase hover:text-orange transition-colors font-condensed">
                  {link}
                </a>
              ))}
            </div>
          </div>
          <div className="border-t border-white/5 mt-8 pt-8 text-center text-white/20 text-xs">
            © 2025 ScrewHam Tools, LLC. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
