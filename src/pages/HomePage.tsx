type Page = 'home' | 'product' | 'about';

const PRODUCT_IMG = 'https://cdn.ezst.app/projects/5e25b8cf-8a8d-4da7-9381-dcb981f883fd/files/5a88d7c9-7e0a-47d2-ae31-123e61c3d843.jpg';

const features = [
  {
    icon: '🔨',
    title: 'Hardened Steel Head',
    desc: '1.5 lb forged steel head delivers maximum impact with minimal effort. Drives nails clean every time.',
  },
  {
    icon: '🧲',
    title: 'Magnetic Bit System',
    desc: 'Built-in magnetic bit holder with 6 interchangeable bits stored inside the handle. Switch in seconds.',
  },
  {
    icon: '✋',
    title: 'Ergonomic Grip',
    desc: 'Anti-slip rubber grip with dual-density foam core absorbs vibration and fits any hand size.',
  },
  {
    icon: '⚖️',
    title: 'Perfectly Balanced',
    desc: 'Center-weighted design reduces wrist fatigue during extended use. Engineered for all-day jobs.',
  },
  {
    icon: '🛡️',
    title: 'Industrial Durability',
    desc: 'Drop-tested to 10 feet. Corrosion-resistant steel with a lifetime warranty on the head.',
  },
  {
    icon: '🎒',
    title: 'One Tool, Half the Bag',
    desc: 'Replaces two essential tools in a single 13-inch package. Save space, save weight, save time.',
  },
];

const reviews = [
  {
    name: 'Mike D.',
    location: 'Austin, TX',
    stars: 5,
    text: "I bought this as a joke gift for my dad... he now refuses to use anything else. The magnetic bit storage is genuinely brilliant.",
  },
  {
    name: 'Sandra K.',
    location: 'Portland, OR',
    stars: 5,
    text: "Handles everything from hanging pictures to assembling IKEA furniture. It lives on my kitchen counter now. Best $35 I ever spent.",
  },
  {
    name: 'Carlos R.',
    location: 'Miami, FL',
    stars: 5,
    text: "As a contractor I was skeptical. But I've been leaving my full toolbox in the truck more and more often. This thing just works.",
  },
];

export default function HomePage({ navigate }: { navigate: (p: Page) => void }) {
  return (
    <main>
      {/* HERO */}
      <section className="relative min-h-screen bg-charcoal-dark overflow-hidden flex items-center">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-charcoal-dark via-charcoal to-charcoal-light opacity-90" />
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(255,255,255,0.03) 40px, rgba(255,255,255,0.03) 41px), repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(255,255,255,0.03) 40px, rgba(255,255,255,0.03) 41px)`,
            }}
          />
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-orange/10 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-16 w-full grid md:grid-cols-2 gap-12 items-center min-h-screen py-24">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 bg-orange/20 border border-orange/40 text-orange font-condensed font-semibold text-xs tracking-widest uppercase px-4 py-2 mb-8">
              <span className="w-2 h-2 bg-orange rounded-full animate-pulse" />
              New for 2025
            </div>

            <h1 className="font-condensed font-black text-white leading-none mb-6" style={{ fontSize: 'clamp(3.5rem, 8vw, 7rem)' }}>
              ONE TOOL.<br />
              <span className="text-orange">DOUBLE</span><br />
              THE POWER.
            </h1>

            <p className="text-white/70 text-lg leading-relaxed mb-10 max-w-md font-body">
              Stop lugging a heavy toolbox everywhere. The Screwham is the world's first premium hybrid hammer-screwdriver — and it fits in your back pocket.
            </p>

            <div className="flex flex-wrap gap-4 items-center">
              <button
                onClick={() => navigate('product')}
                className="bg-orange text-white font-condensed font-bold text-base tracking-widest uppercase px-8 py-4 hover:bg-orange-light transition-all duration-200 hover:scale-105 active:scale-95"
              >
                Shop Now — $34.99
              </button>
              <button
                onClick={() => navigate('about')}
                className="text-white/60 font-condensed font-semibold text-sm tracking-widest uppercase border border-white/20 px-8 py-4 hover:border-white/50 hover:text-white transition-all duration-200"
              >
                Our Story
              </button>
            </div>

            <div className="flex gap-8 mt-12 pt-8 border-t border-white/10">
              {[['50k+', 'Tools Sold'], ['4.9★', 'Avg Rating'], ['Lifetime', 'Warranty']].map(([val, label]) => (
                <div key={label}>
                  <div className="font-condensed font-black text-orange text-2xl">{val}</div>
                  <div className="text-white/50 text-xs tracking-wide uppercase font-body">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-fade-in flex justify-center items-center">
            <div className="absolute inset-0 bg-orange/20 rounded-full blur-3xl scale-75" />
            <div className="relative">
              <div className="absolute -inset-4 border border-orange/20 rounded-2xl" />
              <img
                src={PRODUCT_IMG}
                alt="The Screwham hybrid tool"
                className="relative w-full max-w-lg rounded-xl shadow-2xl object-cover"
                style={{ aspectRatio: '1 / 1' }}
              />
              <div className="absolute bottom-4 left-4 bg-charcoal-dark/90 backdrop-blur-sm border border-white/10 px-4 py-3 rounded-lg">
                <div className="font-condensed font-black text-white text-xl">SCREWHAM™</div>
                <div className="text-white/50 text-xs tracking-widest uppercase">Hammer + Screwdriver</div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 animate-bounce">
          <span className="font-condensed text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-0.5 h-8 bg-gradient-to-b from-white/30 to-transparent" />
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block bg-orange/10 text-orange font-condensed font-semibold text-xs tracking-widest uppercase px-4 py-2 mb-4">
              Built Different
            </div>
            <h2 className="font-condensed font-black text-charcoal-dark leading-none" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
              ENGINEERED FOR<br /><span className="text-orange">THE REAL WORLD</span>
            </h2>
            <p className="text-charcoal/60 text-lg mt-4 max-w-xl mx-auto">
              Every feature exists because a real problem needed solving. No fluff. No gimmicks.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-100 border border-gray-100">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-white p-8 hover:bg-orange/5 transition-colors duration-300 group cursor-default"
              >
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="font-condensed font-bold text-charcoal-dark text-xl uppercase tracking-wide mb-3 group-hover:text-orange transition-colors">
                  {f.title}
                </h3>
                <p className="text-charcoal/60 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BANNER */}
      <section className="bg-orange py-16 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `repeating-linear-gradient(-45deg, transparent, transparent 10px, rgba(0,0,0,0.1) 10px, rgba(0,0,0,0.1) 11px)`,
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="font-condensed font-black text-white leading-none mb-2" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
              ONE TOOL THAT DOES IT ALL.
            </h2>
            <p className="text-white/80 text-lg">The only hybrid hand tool with a lifetime warranty.</p>
          </div>
          <button
            onClick={() => navigate('product')}
            className="shrink-0 bg-white text-orange font-condensed font-black text-base tracking-widest uppercase px-10 py-4 hover:bg-charcoal-dark hover:text-white transition-all duration-200"
          >
            Get Yours — $34.99
          </button>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="bg-charcoal-dark py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block bg-orange/20 text-orange font-condensed font-semibold text-xs tracking-widest uppercase px-4 py-2 mb-4">
              Real Customers
            </div>
            <h2 className="font-condensed font-black text-white leading-none" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
              THEY WERE SKEPTICAL.<br /><span className="text-orange">THEN THEY TRIED IT.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <div key={r.name} className="bg-charcoal border border-white/10 p-8 relative hover:border-orange/40 transition-colors duration-300">
                <div className="absolute top-0 left-8 w-0.5 h-6 bg-orange" />
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: r.stars }).map((_, i) => (
                    <span key={i} className="text-orange text-lg">★</span>
                  ))}
                </div>
                <p className="text-white/80 text-base leading-relaxed mb-6 italic">"{r.text}"</p>
                <div>
                  <div className="font-condensed font-bold text-white text-sm tracking-wide">{r.name}</div>
                  <div className="text-white/40 text-xs">{r.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-charcoal-dark border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <div className="font-condensed font-black text-white text-2xl tracking-wider mb-2">
                SCREWHAM<span className="text-orange">.</span>
              </div>
              <p className="text-white/40 text-sm">One Tool. Double the Power. Since 2024.</p>
            </div>
            <div className="flex flex-wrap gap-x-8 gap-y-2 text-center md:text-left">
              {['Privacy Policy', 'Terms of Service', 'Returns & Warranty', 'Support'].map((link) => (
                <a key={link} href="#" className="text-white/40 text-xs tracking-wide uppercase hover:text-orange transition-colors font-condensed">
                  {link}
                </a>
              ))}
            </div>
          </div>
          <div className="border-t border-white/5 mt-8 pt-8 text-center text-white/20 text-xs">
            © 2025 ScrewHam Tools, LLC. All rights reserved. The Screwham is a registered trademark.
          </div>
        </div>
      </footer>
    </main>
  );
}
