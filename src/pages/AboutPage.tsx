type Page = 'home' | 'product' | 'about';

const timeline = [
  { year: '2019', event: 'Ryan throws out his back carrying a 40-pound toolbox up three flights of stairs. Enough is enough.' },
  { year: '2020', event: 'First prototype. Duct tape, a spare hammer handle, and a magnetic bit from a broken drill. It works.' },
  { year: '2021', event: 'Prototype #47 is so good that Grayson\'s neighbor refuses to give it back. They realize they might be onto something.' },
  { year: '2022', event: 'Patent filed. Manufacturing partner found in Ohio. The Screwham name is born over a Friday night beer.' },
  { year: '2024', event: 'Launch day. 10,000 units sell out in 72 hours. Ryan finally buys a truck with a decent toolbox.' },
];

const founders = [
  { name: 'Ryan Francis', role: 'Co-Founder & CEO' },
  { name: 'Grayson Clark', role: 'Co-Founder & Chief Engineer' },
];

export default function AboutPage({ navigate }: { navigate: (p: Page) => void }) {
  return (
    <main className="pt-16 min-h-screen">
      {/* Hero */}
      <section className="bg-charcoal-dark py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `repeating-linear-gradient(-45deg, transparent, transparent 10px, rgba(242,101,34,0.3) 10px, rgba(242,101,34,0.3) 11px)`,
          }}
        />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <div className="inline-block bg-orange/20 text-orange font-condensed font-semibold text-xs tracking-widest uppercase px-4 py-2 mb-6">
            The Origin Story
          </div>
          <h1 className="font-condensed font-black text-white leading-none mb-6" style={{ fontSize: 'clamp(3rem, 6vw, 6rem)' }}>
            ONE TIRED<br /><span className="text-orange">CONTRACTOR.</span><br />ONE BIG IDEA.
          </h1>
          <p className="text-white/60 text-xl leading-relaxed max-w-2xl mx-auto">
            The Screwham wasn't born in a Silicon Valley lab or a venture-funded workshop. It was born in Ryan's garage, out of pure, honest frustration.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-6">
            {founders.map((f) => (
              <div key={f.name} className="relative bg-charcoal-dark border border-white/10 p-10 group hover:border-orange/40 transition-colors duration-300">
                <div className="absolute top-0 left-10 w-0.5 h-8 bg-orange" />
                <div className="font-condensed font-black text-white leading-none mb-2" style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}>
                  {f.name}
                </div>
                <div className="text-orange font-condensed font-semibold text-sm tracking-widest uppercase">{f.role}</div>
              </div>
            ))}
          </div>

          <div>
            <h2 className="font-condensed font-black text-charcoal-dark leading-none mb-8" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
              THEY HAD TWO TOOLS.<br /><span className="text-orange">THEY WANTED ONE.</span>
            </h2>

            <div className="space-y-6 text-charcoal/70 leading-relaxed font-body text-base">
              <p>
                Ryan Francis spent 22 years as a residential contractor in Columbus, Ohio. He was good at his job. Great, even. But there was one thing that drove him absolutely nuts: the <strong className="text-charcoal-dark">toolbox shuffle</strong>.
              </p>
              <p>
                Every single job site, he'd dig through a 40-pound bag just to grab a hammer <em>and</em> a screwdriver — the two tools he used more than anything else. He'd put one down, use the other, lose the first one under a pile of lumber, and repeat the cycle a hundred times a day.
              </p>
              <p>
                "I didn't need a smarter job site," Ryan says. "I needed a smarter tool." He called his old friend Grayson Clark — an engineer with a thing for elegant solutions — and the two got to work.
              </p>
              <p>
                In the winter of 2020, with nothing but time and a garage full of spare parts, they started experimenting. After 47 prototypes, three broken windows, and two very confused wives, they had something that actually worked.
              </p>
              <p className="border-l-4 border-orange pl-4 text-charcoal-dark font-medium italic">
                "We called it the Screwham because it hammers and it drives screws. We're contractors, not marketers."
              </p>
              <p>
                Today, ScrewHam Tools is a small, independent company based in Columbus. We don't have a marketing team or a PR firm. What we have is one brilliant tool, a handful of people who believe in it, and 50,000+ customers who refuse to put it down.
              </p>
            </div>

            <button
              onClick={() => navigate('product')}
              className="mt-10 inline-flex items-center gap-3 bg-orange text-white font-condensed font-black text-sm tracking-widest uppercase px-8 py-4 hover:bg-orange-light transition-colors"
            >
              Meet the Screwham
              <span>→</span>
            </button>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-charcoal-dark py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block bg-orange/20 text-orange font-condensed font-semibold text-xs tracking-widest uppercase px-4 py-2 mb-4">
              The Journey
            </div>
            <h2 className="font-condensed font-black text-white" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
              FROM GARAGE TO <span className="text-orange">50,000 HOMES</span>
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-16 top-0 bottom-0 w-0.5 bg-white/10 hidden md:block" />
            <div className="space-y-10">
              {timeline.map((item) => (
                <div key={item.year} className="flex gap-8 items-start group">
                  <div className="shrink-0 w-16 text-right md:text-center">
                    <div className="font-condensed font-black text-orange text-xl group-hover:scale-110 transition-transform inline-block">
                      {item.year}
                    </div>
                  </div>
                  <div className="relative hidden md:flex items-center justify-center shrink-0 w-0">
                    <div className="absolute w-3 h-3 rounded-full bg-orange border-4 border-charcoal-dark -left-1.5 top-1.5" />
                  </div>
                  <div className="flex-1 bg-charcoal border border-white/10 p-6 rounded-sm group-hover:border-orange/30 transition-colors">
                    <p className="text-white/70 leading-relaxed font-body">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-orange py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { emoji: '🏭', title: 'Made in Ohio', desc: 'Every Screwham is assembled in Columbus. American workers. American quality.' },
              { emoji: '🔒', title: 'No Investors, No BS', desc: 'We\'re privately owned and answer only to our customers — not a board of directors.' },
              { emoji: '♻️', title: 'Less Waste', desc: 'One tool replacing two means less plastic, less metal, less junk in landfills.' },
            ].map((v) => (
              <div key={v.title} className="text-white">
                <div className="text-5xl mb-4">{v.emoji}</div>
                <h3 className="font-condensed font-black text-2xl uppercase tracking-wide mb-3">{v.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed font-body">{v.desc}</p>
              </div>
            ))}
          </div>
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