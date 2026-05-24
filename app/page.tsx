'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const products = [
  {
    name: 'Violet Blazer Edit',
    description: 'A sharp color statement with relaxed denim ease.',
    category: 'Tailoring',
    price: '₱350',
    image: '/images/image1.jpg',
    position: 'object-center',
  },
  {
    name: 'Cloud Puffer Jacket',
    description: 'Soft volume, clean lines, and a winter-ready profile.',
    category: 'Outerwear',
    price: '₱490',
    image: '/images/image2.jpg',
    position: 'object-[50%_18%]',
  },
  {
    name: 'Sunlit Shirt Dress',
    description: 'Lightweight polish for warm days and effortless plans.',
    category: 'Dresses',
    price: '₱200',
    image: '/images/image3.jpg',
    position: 'object-[50%_28%]',
  },
  {
    name: 'Studio Denim Coat',
    description: 'Dark layers, distressed denim, and easy city attitude.',
    category: 'Streetwear',
    price: '₱300',
    image: '/images/image4.jpg',
    position: 'object-[50%_22%]',
  },
  {
    name: 'Alpine Cropped Puffer',
    description: 'Cool-weather texture with soft pastel styling.',
    category: 'Winter',
    price: '₱150',
    image: '/images/image5.jpg',
    position: 'object-[50%_20%]',
  },
  {
    name: 'Signal Color Suiting',
    description: 'Bright contrast pieces made to anchor the room.',
    category: 'Statement',
    price: '₱250',
    image: '/images/image6.jpg',
    position: 'object-[50%_20%]',
  },
];

const lookbookImages = [
  {
    src: '/images/image5.jpg',
    alt: 'Model in a pastel cropped puffer in a snowy setting',
    label: 'Winter color',
    className: 'md:col-span-2 md:row-span-2',
    imageClassName: 'object-cover object-[50%_18%]',
  },
  {
    src: '/images/image4.jpg',
    alt: 'Model wearing a dark coat with distressed denim',
    label: 'Studio denim',
    className: '',
    imageClassName: 'object-cover object-[50%_18%]',
  },
  {
    src: '/images/image6.jpg',
    alt: 'Model wearing red trousers with a bright green top',
    label: 'Color signal',
    className: '',
    imageClassName: 'object-cover object-[50%_22%]',
  },
];

const featuredProducts = products.slice(0, 3);

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState<(typeof products)[number] | null>(null);

  useEffect(() => {
    if (!selectedProduct) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedProduct(null);
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProduct]);

  return (
    <main className="font-body min-h-screen bg-[#f6f1e8] text-[#171717] animate-fade-in">
      <section className="relative overflow-hidden px-5 py-6 sm:px-8 lg:px-12 animate-fade-slide-up">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_8%,rgba(255,255,255,0.95),transparent_28%),radial-gradient(circle_at_85%_8%,rgba(185,134,67,0.12),transparent_25%),linear-gradient(180deg,#f8f3eb_0%,#f6f1e8_48%,#eee2d2_100%)]" />
        <div className="relative mx-auto flex max-w-7xl flex-col gap-10 lg:gap-14">
          <header className="flex items-center justify-between gap-6 py-2">
            <Link href="/" className="font-display text-xl font-semibold text-[#171717]">
              Stop Shop HM Closet
            </Link>
            <nav className="hidden items-center gap-7 text-sm font-medium text-[#5f5a52] sm:flex">
              <Link href="#shop" className="transition hover:text-[#171717]">Shop</Link>
              <Link href="#lookbook" className="transition hover:text-[#171717]">Lookbook</Link>
              <Link href="#story" className="transition hover:text-[#171717]">Story</Link>
            </nav>
          </header>

          <section className="grid min-h-[680px] items-center gap-8 lg:grid-cols-[0.9fr_0.8fr_1fr]">
            <div className="relative z-10 max-w-xl py-8 lg:py-16">
              <span className="inline-flex rounded-full border border-[#c8a46e]/45 bg-[#fffaf2]/80 px-4 py-2 text-sm font-medium text-[#8a5a1f] shadow-sm">
                New season collection
              </span>
              <h1 className="font-display mt-7 text-5xl font-medium leading-[0.98] tracking-tight text-[#171717] sm:text-6xl lg:text-7xl">
                Stop Shop <span className=' text-[#b98643]'>HM Closet</span>
              </h1>
              <div className="mt-8 h-0.5 w-12 bg-[#b98643]" />
              <p className="mt-8 max-w-lg text-base leading-8 text-[#5f5a52] sm:text-lg">
                A modern clothing collective for confidence, comfort, and everyday style. Discover curated pieces, bold palettes, and a premium shopping experience.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Link href="#shop" className="inline-flex items-center justify-center rounded-full bg-[#111111] px-7 py-3 text-sm font-semibold text-[#fffaf2] shadow-[0_14px_30px_rgba(17,17,17,0.18)] transition hover:-translate-y-0.5 hover:bg-[#2a2723]">
                  Explore the collection
                </Link>
                <Link href="#lookbook" className="inline-flex items-center justify-center rounded-full border border-[#171717]/18 bg-[#fffaf2]/70 px-7 py-3 text-sm font-semibold text-[#171717] shadow-sm transition hover:-translate-y-0.5 hover:border-[#171717]/36 hover:bg-[#fffaf2]">
                  View lookbook
                </Link>
              </div>
              <dl className="mt-12 grid max-w-md grid-cols-3 gap-5 border-t border-[#171717]/10 pt-6">
                {[
                  ['06', 'Looks'],
                  ['24', 'Hour style'],
                  ['03', 'Core moods'],
                ].map(([value, label]) => (
                  <div key={label}>
                    <dt className="font-display text-3xl font-semibold text-[#171717]">{value}</dt>
                    <dd className="mt-1 text-xs uppercase tracking-[0.18em] text-[#8a5a1f]">{label}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="relative min-h-[520px] overflow-hidden rounded-[2rem] bg-[#e8d9c7] shadow-[0_30px_80px_rgba(68,49,28,0.18)] lg:min-h-[650px]">
              <Image
                src="/images/image1.jpg"
                alt="Model wearing a violet blazer and relaxed denim"
                fill
                priority
                sizes="(min-width: 1024px) 28vw, 100vw"
                className="object-cover object-center"
              />
            </div>

            <aside className="rounded-[2rem] bg-[#111111] p-6 text-[#fffaf2] shadow-[0_34px_90px_rgba(17,17,17,0.22)] sm:p-8 lg:justify-self-end">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#c9954f]">Featured drop</p>
              <h2 className="font-display mt-4 max-w-sm text-3xl font-medium leading-tight sm:text-4xl">New silhouettes for every mood</h2>
              <p className="mt-4 max-w-md text-sm leading-6 text-[#d8d0c6]">
                Elevated everyday essentials and statement pieces made for life on the move.
              </p>
              <div className="mt-7 grid gap-4">
                {featuredProducts.map((product) => (
                  <article key={product.name} className="grid grid-cols-[96px_1fr] gap-4 rounded-[1.25rem] bg-white/[0.06] p-3">
                    <div className="relative aspect-square overflow-hidden rounded-[1rem] bg-[#2a2723]">
                      <Image
                        src={product.image}
                        alt={`${product.name} preview`}
                        fill
                        sizes="96px"
                        className={`${product.position} object-cover`}
                      />
                    </div>
                    <div className="self-center">
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#c9954f]">{product.category}</p>
                      <h3 className="mt-2 text-base font-semibold leading-snug text-white">{product.name}</h3>
                      <p className="mt-2 text-sm leading-5 text-[#d8d0c6]">{product.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </aside>
          </section>

          <section id="shop" className="rounded-[2rem] bg-[#fffaf2]/88 p-5 shadow-glow backdrop-blur sm:p-8 lg:p-10 animate-fade-slide-up">
            <div className="grid gap-5 lg:grid-cols-[1fr_0.85fr] lg:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#8a5a1f]">Shop by look</p>
                <h2 className="font-display mt-3 text-3xl font-medium text-[#171717] sm:text-4xl">Modern essentials for the season</h2>
              </div>
              <p className="max-w-xl text-sm leading-7 text-[#5f5a52] lg:justify-self-end">A refined selection of wardrobe staples and statement pieces, designed to feel premium with every wear.</p>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {products.map((product) => (
                <button
                  key={product.name}
                  type="button"
                  onClick={() => setSelectedProduct(product)}
                  className="group rounded-[1.5rem] bg-white p-4 text-left shadow-[0_16px_42px_rgba(48,36,24,0.08)] transition hover:-translate-y-1 hover:shadow-[0_24px_56px_rgba(48,36,24,0.12)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#b98643]/50 focus-visible:ring-offset-4 focus-visible:ring-offset-[#f6f1e8]"
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[1.25rem] bg-[#efe5d6]">
                    <Image
                      src={product.image}
                      alt={`${product.name} look`}
                      fill
                      sizes="(min-width: 768px) 31vw, 100vw"
                      className={`${product.position} object-cover transition duration-500 group-hover:scale-105`}
                    />
                    <div className="absolute left-4 top-4 rounded-full bg-[#fffaf2]/88 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#8a5a1f] shadow-sm backdrop-blur-sm">
                      {product.category}
                    </div>
                    <div className="absolute inset-x-4 bottom-4 translate-y-2 rounded-full bg-[#111111]/88 px-4 py-2 text-center text-xs font-semibold uppercase tracking-[0.18em] text-[#fffaf2] opacity-0 shadow-lg backdrop-blur-sm transition group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
                      View details
                    </div>
                  </div>
                  <div className="mt-5 flex items-start justify-between gap-4">
                    <h3 className="text-lg font-semibold text-[#171717]">{product.name}</h3>
                    <p className="text-sm font-semibold text-[#8a5a1f]">{product.price}</p>
                  </div>
                  <p className="mt-2 max-w-sm text-sm leading-6 text-[#5f5a52]">{product.description}</p>
                </button>
              ))}
            </div>
          </section>

          <section id="lookbook" className="grid gap-8 animate-fade-slide-up">
            <div className="grid gap-5 lg:grid-cols-[1fr_0.85fr] lg:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#8a5a1f]">Lookbook</p>
                <h2 className="font-display mt-3 text-3xl font-medium text-[#171717] sm:text-4xl">Editorial crops with full-image focus</h2>
              </div>
              <p className="max-w-xl text-sm leading-7 text-[#5f5a52] lg:justify-self-end">Larger image moments give the collection more rhythm and make each outfit feel intentional across the page.</p>
            </div>

            <div className="grid auto-rows-[280px] gap-5 md:grid-cols-4">
              {lookbookImages.map((image) => (
                <figure key={image.src} className={`group relative overflow-hidden rounded-[1.75rem] bg-[#111111] shadow-[0_24px_56px_rgba(48,36,24,0.14)] ${image.className}`}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className={`${image.imageClassName} transition duration-500 group-hover:scale-105`}
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#111111]/88 to-transparent p-5 text-sm font-semibold uppercase tracking-[0.18em] text-[#fffaf2]">
                    {image.label}
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>

          <section id="story" className="rounded-[2rem] bg-[#111111] p-6 text-[#fffaf2] shadow-[0_34px_90px_rgba(17,17,17,0.2)] sm:p-10 animate-fade-slide-up">
            <div className="grid gap-5 md:grid-cols-[0.9fr_1fr] md:items-start">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#c9954f]">Our approach</p>
                <h2 className="font-display mt-4 text-3xl font-medium leading-tight text-[#fffaf2] sm:text-4xl">A collective built for modern style and curated comfort</h2>
              </div>
              <p className="max-w-2xl text-sm leading-7 text-[#d8d0c6]">Design, quality, and effortless style come together in a shopping experience built around clothing people want to keep reaching for.</p>
            </div>
            <div className="mt-10 grid gap-5 sm:grid-cols-3">
              {[
                { title: 'Curated drops', description: 'Seasonal pieces selected for refined everyday wear.' },
                { title: 'Premium basics', description: 'Soft fabrics and thoughtful fits meant to last.' },
                { title: 'Modern details', description: 'Clean silhouettes with subtle design accents.' },
              ].map((item) => (
                <div key={item.title} className="rounded-[1.5rem] bg-white/[0.06] p-6">
                  <h3 className="text-lg font-semibold text-[#fffaf2]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#d8d0c6]">{item.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>

      {selectedProduct ? (
        <div
          className="product-modal-backdrop fixed inset-0 z-50 flex items-center justify-center bg-[#111111]/58 px-4 py-6 backdrop-blur-md sm:px-6"
          onClick={() => setSelectedProduct(null)}
          role="presentation"
        >
          <section
            className="product-modal-panel grid max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-[2rem] bg-[#fffaf2] p-4 shadow-[0_34px_100px_rgba(17,17,17,0.34)] sm:p-5 md:grid-cols-[1.05fr_0.95fr] md:gap-6"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="product-modal-title"
          >
            <div className="product-modal-image relative min-h-[320px] overflow-hidden rounded-[1.5rem] bg-[#efe5d6] sm:min-h-[420px] md:min-h-[560px]">
              <Image
                src={selectedProduct.image}
                alt={`${selectedProduct.name} detail`}
                fill
                sizes="(min-width: 768px) 48vw, 100vw"
                className={`${selectedProduct.position} object-cover`}
                priority
              />
            </div>

            <div className="flex flex-col justify-between gap-8 px-1 py-6 sm:px-3 md:py-8">
              <div>
                <div className="flex items-start justify-between gap-4">
                  <span className="rounded-full bg-[#efe5d6] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#8a5a1f]">
                    {selectedProduct.category}
                  </span>
                  <button
                    type="button"
                    onClick={() => setSelectedProduct(null)}
                    className="rounded-full bg-[#111111] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#fffaf2] transition hover:bg-[#2a2723] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#b98643]/50"
                    aria-label="Close product details"
                  >
                    Close
                  </button>
                </div>

                <h2 id="product-modal-title" className="font-display mt-8 text-4xl font-medium leading-tight text-[#171717] sm:text-5xl">
                  {selectedProduct.name}
                </h2>
                <p className="mt-4 text-2xl font-semibold text-[#8a5a1f]">{selectedProduct.price}</p>
                <p className="mt-6 max-w-md text-base leading-8 text-[#5f5a52]">
                  {selectedProduct.description}
                </p>
              </div>

              <div className="rounded-[1.25rem] bg-[#f6f1e8] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8a5a1f]">Stop Shop HM CLOSET</p>
                <p className="mt-3 text-sm leading-6 text-[#5f5a52]">
                  Styled for polished everyday wear with a premium editorial finish.
                </p>
              </div>
            </div>
          </section>
        </div>
      ) : null}
    </main>
  );
}
