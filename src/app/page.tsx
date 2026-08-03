'use client';

import { useEffect, useMemo, useRef, useState } from 'react';

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
};

type Category = {
  id: number;
  title: string;
  image: string;
  detail: string;
};

type Testimonial = {
  id: number;
  quote: string;
  author: string;
  rating: number;
};

const whatsappNumber = '08143832354';

const categories: Category[] = [
  { id: 1, title: 'Engine Parts', image: '/images/engine-part1.avif', detail: 'Timing belts, valve covers, gaskets.' },
  { id: 2, title: 'Brakes', image: '/images/brake-pad.jpg', detail: 'Brake pads, discs, calipers and sensors.' },
  { id: 3, title: 'Suspension', image: '/images/radiator-1.jpg', detail: 'Shocks, struts, springs and control arms.' },
  { id: 4, title: 'Lighting', image: '/images/light-1.webp', detail: 'Headlights, bulbs, indicators and fog lamps.' },
  { id: 5, title: 'Interior', image: '/images/air-filter-2.webp', detail: 'Seat covers, mats, dash trims and panels.' },
  { id: 6, title: 'Exterior', image: '/images/exterior-1.avif', detail: 'Bumpers, grills, mirrors and body trims.' },
  { id: 7, title: 'Engine Oil', image: '/images/engine-oil-1.webp', detail: 'Lubricants, oil filters and service kits.' },
  { id: 8, title: 'Brake Pads', image: '/images/brake-pad.jpg', detail: 'Premium brake pads for safety and control.' },
  { id: 9, title: 'Tires & Wheels', image: '/images/car-bearing.webp', detail: 'Tyres, rims, hubs and wheel accessories.' },
  { id: 10, title: 'Cooling Systems', image: '/images/radiators-2.jpg', detail: 'Radiators, hoses, pumps and fans.' },
];

const featuredProducts: Product[] = [
  { id: 1, name: 'Front Hub Bearing', price: 100000, image: '/images/car-bearing.webp', description: 'Premium OEM hub bearing for reliable performance.' },
  { id: 2, name: 'Brake Pad Set', price: 39000, image: '/images/brake-pad.jpg', description: 'Durable brake pads for secure stopping power.' },
  { id: 3, name: 'Engine Oil 5W-30', price: 45000, image: '/images/engine-oil-1.webp', description: 'Full synthetic oil for smooth engine life.' },
];

const galleryProducts: Product[] = [
  { id: 4, name: 'Air Filter Bundle', price: 8500, image: '/images/air-filter.webp', description: 'Complete air and cabin filter bundle.' },
  { id: 5, name: 'Complete Suspension Kit', price: 160000, image: '/images/radiator-1.jpg', description: 'Full suspension kit for a smoother ride.' },
  { id: 6, name: 'Interior Mat Set', price: 15000, image: '/images/exterior-1.avif', description: 'Custom-fit interior floor mats and covers.' },
];

const testimonials: Testimonial[] = [
  { id: 1, quote: 'Casi-Check makes parts sourcing easy and reliable. Their response time is excellent.', author: 'Obinna N., Workshop Manager', rating: 5 },
  { id: 2, quote: 'Great selection, fast delivery, and quality parts at the right price.', author: 'Chimamanda A., Auto Dealer', rating: 4 },
];

export default function HomePage() {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  const cartTotal = useMemo(
    () => cartItems.reduce((total, item) => total + item.price, 0),
    [cartItems]
  );

  const addToCart = (product: Product) => {
    setCartItems((prev) => [...prev, product]);
  };

  const removeFromCart = (index: number) => {
    setCartItems((prev) => prev.filter((_, itemIndex) => itemIndex !== index));
  };

  const carouselRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const step = 240;
    const interval = window.setInterval(() => {
      if (!carousel) return;
      const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;
      if (carousel.scrollLeft >= maxScrollLeft - 1) {
        carousel.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        carousel.scrollBy({ left: step, behavior: 'smooth' });
      }
    }, 3200);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <main>
      <div className="topbar">
        <div className="container topbar-inner">
          <p>Hotline: <strong>{whatsappNumber}</strong></p>
          <p>Fast delivery | Genuine parts | Expert repairs</p>
        </div>
      </div>

      <header className="site-header">
        <div className="container header-inner">
          <div className="brand">
            <span className="brand-mark">Casi-Check</span>
            <span className="brand-tag">Auto Parts & Repair</span>
          </div>
          <nav className="main-nav">
            <a href="#categories">Categories</a>
            <a href="#featured">Featured</a>
            <a href="#gallery">Gallery</a>
            <a href="#contact">Contact</a>
          </nav>
          <div className="header-actions">
            <a href="#gallery" className="button button-primary">Shop Now</a>
            <a href={`https://wa.me/2348143832354?text=I%20want%20to%20order%20spare%20parts`} className="button button-secondary">Order WhatsApp</a>
          </div>
        </div>
      </header>

      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-copy">
            <span className="eyebrow">Automobile Parts Dealers</span>
            <h1>Premium parts, fast delivery, and trusted service from Jahi Abuja.</h1>
            <p>
              Casi-Check supplies genuine auto parts for fleets, workshops, and car owners. Explore top categories, shop with images and pricing, and track deliveries directly on WhatsApp.
            </p>
            <div className="hero-actions">
              <a href="#gallery" className="button button-primary">Browse Parts</a>
              <a href="#contact" className="button button-secondary">Track Delivery</a>
            </div>
          </div>
          <div className="hero-panel">
            <div className="hero-panel-card">
              <p className="small-label">Featured supply</p>
              <h2>Same-day parts sourcing from Abuja</h2>
              <p>Shop brake kits, lighting, engine parts, and suspension items with full price transparency and fast WhatsApp support.</p>
              <a href="#featured" className="link-button">Browse best sellers</a>
            </div>
          </div>
        </div>
      </section>

      <section id="categories" className="section categories-section">
        <div className="container">
          <div className="section-header">
            <p className="section-label">Top Categories of the Month</p>
            <h2>Shop the most popular auto part categories</h2>
          </div>
          <div className="category-carousel" ref={carouselRef}>
            {categories.map((category) => (
              <article className="category-card" key={category.id}>
                <img loading="lazy" decoding="async" fetchPriority="low" src={category.image} alt={category.title} />
                <div className="category-card-body">
                  <h3>{category.title}</h3>
                  <p>{category.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="deals" className="section deals-section">
        <div className="container">
          <div className="section-header">
            <p className="section-label">Deals of the Day</p>
            <h2>Save on high-demand auto components</h2>
          </div>
                    <div className="deals-grid">
            <article className="deal-card">
              <img loading="lazy" decoding="async" fetchPriority="low" src="/images/engine-oil-1.webp" alt="Engine Oil 5W-30" />
              <div>
                <h3>Engine Oil 5W-30</h3>
                <p>Just NGN 43,000</p>
              </div>
              <button className="link-button" onClick={() => addToCart({ id: 11, name: 'Engine Oil 5W-30', price: 43000, image: '/images/engine-oil-1.webp', description: 'Synthetic engine oil for clean running.' })}>Add to Cart</button>
            </article>
            <article className="deal-card">
              <img loading="lazy" decoding="async" fetchPriority="low" src="/images/brake-pad.jpg" alt="Brake Pad Set" />
              <div>
                <h3>Brake Pad Set</h3>
                <p>Just NGN 39,000</p>
              </div>
              <button className="link-button" onClick={() => addToCart({ id: 12, name: 'Brake Pad Set', price: 39000, image: '/images/brake-pad.jpg', description: 'Premium brake pads for safe stopping.' })}>Add to Cart</button>
            </article>
            <article className="deal-card">
              <img loading="lazy" decoding="async" fetchPriority="low" src="/images/light-1.webp" alt="LED Headlamp Set" />
              <div>
                <h3>LED Headlamp Set</h3>
                <p>Just NGN 45,000</p>
              </div>
              <button className="link-button" onClick={() => addToCart({ id: 13, name: 'LED Headlamp Set', price: 45000, image: '/images/light-1.webp', description: 'Bright LED headlamps for night driving.' })}>Add to Cart</button>
            </article>
          </div>
        </div>
      </section>

      <section id="featured" className="section featured-section">
        <div className="container">
          <div className="section-header">
            <p className="section-label">Featured Parts</p>
            <h2>Best sellers and recommended items</h2>
          </div>
          <div className="featured-grid">
            {featuredProducts.map((product) => (
              <article className="product-card" key={product.id}>
                <img loading="lazy" decoding="async" fetchPriority="low" src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p>₦{product.price.toLocaleString()}</p>
                <button className="button button-secondary" onClick={() => addToCart(product)}>Add to Cart</button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="section gallery-section">
        <div className="container">
          <div className="section-header">
            <p className="section-label">Product Gallery</p>
            <h2>Shop the parts our customers rely on most</h2>
          </div>
          <div className="gallery-grid">
            {galleryProducts.map((product) => (
              <article className="product-card" key={product.id}>
                <figure>
                  <img src={product.image} alt={product.name} />
                </figure>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p>₦{product.price.toLocaleString()} <span>Shop now</span></p>
                <button className="button button-primary" onClick={() => addToCart(product)}>Add to Cart</button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section cart-section">
        <div className="container">
          <div className="section-header">
            <p className="section-label">Your Cart</p>
            <h2>Select items and order directly via WhatsApp</h2>
          </div>
          <div className="cart-panel">
            {cartItems.length === 0 ? (
              <p>Your cart is empty. Add items from the gallery and deals sections.</p>
            ) : (
              <div className="cart-list">
                {cartItems.map((item, index) => (
                  <div className="cart-item" key={`${item.id}-${index}`}>
                    <div className="cart-item-body">
                      <span>{item.name}</span>
                      <span>₦{item.price.toLocaleString()}</span>
                    </div>
                    <button className="link-button" onClick={() => removeFromCart(index)}>Remove</button>
                  </div>
                ))}
                <div className="cart-total">
                  <strong>Total:</strong> ₦{cartTotal.toLocaleString()}
                </div>
                <a
                  href={`https://wa.me/2348143832354?text=Hello%20Casi-Check,%20I%20would%20like%20to%20order%20the%20following%20items:%20${cartItems.map((item) => encodeURIComponent(item.name)).join(', ')}.%20Total%20budget:%20₦${cartTotal.toLocaleString()}`}
                  className="button button-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Checkout via WhatsApp
                </a>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="section testimonial-section">
        <div className="container testimonial-inner">
          <div>
            <p className="section-label">What clients say</p>
            <h2>Trusted by dealers and fleet owners</h2>
          </div>
          <div className="testimonial-grid">
            {testimonials.map((testimonial) => (
              <article className="testimonial-card" key={testimonial.id}>
                <p>{testimonial.quote}</p>
                <div className="rating-stars">
                  {Array.from({ length: testimonial.rating }).map((_, index) => (
                    <span key={index} className="star active">★</span>
                  ))}
                  {Array.from({ length: 5 - testimonial.rating }).map((_, index) => (
                    <span key={index} className="star">★</span>
                  ))}
                </div>
                <strong>{testimonial.author}</strong>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <div className="container">
          <div className="section-header">
            <p className="section-label">Ready to order?</p>
            <h2>Request a parts quote or ask our sourcing team</h2>
          </div>
          <div className="contact-panel">
            <p>
              Reach our parts desk directly at <strong>{whatsappNumber}</strong> or send a message on WhatsApp for delivery tracking and order updates.
            </p>
            <p><strong>Location:</strong> Jahi, Abuja</p>
            <div className="social-links">
              <a href={`https://wa.me/2348143832354`} target="_blank" rel="noreferrer">WhatsApp</a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
              <a href="https://tiktok.com" target="_blank" rel="noreferrer">TikTok</a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>
            </div>
            <div className="contact-actions">
              <a href={`https://wa.me/2348143832354?text=Hello%20Casi-Check,%20I%20need%20delivery%20tracking.`} className="button button-primary">Delivery Tracking</a>
              <a href={`https://wa.me/2348143832354?text=Hello%20Casi-Check,%20I%20want%20to%20order%20spare%20parts.`} className="button button-secondary">Message WhatsApp</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <div>
            <h3>Casi-Check</h3>
            <p>Premium auto parts and repair services for dealers, fleets, and drivers.</p>
          </div>
          <div className="footer-links">
            <a href="#categories">Interior</a>
            <a href="#categories">Performance</a>
            <a href="#categories">Exterior</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
        <div className="container footer-copy">
          <p>© 2026 Casi-Check. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
