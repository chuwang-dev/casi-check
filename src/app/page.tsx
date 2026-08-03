'use client';

import { useMemo, useState } from 'react';

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
  { id: 1, title: 'Engine Parts', image: 'https://images.unsplash.com/photo-1517142089942-ba376ce32a2e?auto=format&fit=crop&w=900&q=80', detail: 'Timing belts, valve covers, gaskets.' },
  { id: 2, title: 'Brakes', image: 'https://images.unsplash.com/photo-1549921296-3b95bb6d17df?auto=format&fit=crop&w=900&q=80', detail: 'Pads, discs, callipers, sensors.' },
  { id: 3, title: 'Suspension', image: 'https://images.unsplash.com/photo-1517906409615-9bd5d98f9872?auto=format&fit=crop&w=900&q=80', detail: 'Shocks, struts, control arms.' },
  { id: 4, title: 'Lighting', image: 'https://images.unsplash.com/photo-1558981285-c7b1f0f6041a?auto=format&fit=crop&w=900&q=80', detail: 'Headlights, bulbs, signal lights.' },
  { id: 5, title: 'Interior', image: 'https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?auto=format&fit=crop&w=900&q=80', detail: 'Covers, carpets, trims, dash kits.' },
  { id: 6, title: 'Exterior', image: 'https://images.unsplash.com/photo-1475180092658-5c8135c02083?auto=format&fit=crop&w=900&q=80', detail: 'Bumpers, grills, mirrors.' },
  { id: 7, title: 'Filters', image: 'https://images.unsplash.com/photo-1499111314391-8d75f45c2b4e?auto=format&fit=crop&w=900&q=80', detail: 'Air, oil, fuel, cabin filters.' },
  { id: 8, title: 'Electrical', image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80', detail: 'Batteries, alternators, wiring.' },
  { id: 9, title: 'Tires & Wheels', image: 'https://images.unsplash.com/photo-1483721310020-03333e577078?auto=format&fit=crop&w=900&q=80', detail: 'Tyres, rims, wheel accessories.' },
  { id: 10, title: 'Cooling', image: 'https://images.unsplash.com/photo-1516515429575-9d41f4a69862?auto=format&fit=crop&w=900&q=80', detail: 'Radiators, hoses, water pumps.' },
];

const featuredProducts: Product[] = [
  { id: 1, name: 'Front Hub Bearing', price: 100000, image: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=900&q=80', description: 'Premium OEM hub bearing for reliable performance.' },
  { id: 2, name: 'Brake Kit Set', price: 43000, image: 'https://images.unsplash.com/photo-1597029946268-0848f2c11bda?auto=format&fit=crop&w=900&q=80', description: 'Complete brake system with pads and discs.' },
  { id: 3, name: 'LED Headlamp Set', price: 45000, image: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e69?auto=format&fit=crop&w=900&q=80', description: 'High-performance lighting for clear night driving.' },
];

const galleryProducts: Product[] = [
  { id: 4, name: 'Air Filter Bundle', price: 8500, image: 'https://images.unsplash.com/photo-1510549819182-a0ec5e0d0e7b?auto=format&fit=crop&w=900&q=80', description: 'Everyday filter bundle for strong engine health.' },
  { id: 5, name: 'Complete Suspension Kit', price: 160000, image: 'https://images.unsplash.com/photo-1553741632-cc44fef7be52?auto=format&fit=crop&w=900&q=80', description: 'Smooth ride suspension upgrade for heavy-duty use.' },
  { id: 6, name: 'Master Brake Venza', price: 37000, image: 'https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?auto=format&fit=crop&w=900&q=80', description: 'Reliable master cylinder for Toyota Venza.' },
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
          <div className="category-carousel">
            {categories.map((category) => (
              <article className="category-card" key={category.id}>
                <img src={category.image} alt={category.title} />
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
              <img src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=900&q=80" alt="Toyota Shaft" />
              <div>
                <h3>Toyota Shaft</h3>
                <p>Just NGN 190,000</p>
              </div>
              <button className="link-button" onClick={() => addToCart({ id: 11, name: 'Toyota Shaft', price: 190000, image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=900&q=80', description: 'Heavy-duty shaft for Toyota models.' })}>Add to Cart</button>
            </article>
            <article className="deal-card">
              <img src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=900&q=80" alt="Engine Valve" />
              <div>
                <h3>Engine Valve</h3>
                <p>Just NGN 43,000</p>
              </div>
              <button className="link-button" onClick={() => addToCart({ id: 12, name: 'Engine Valve', price: 43000, image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=900&q=80', description: 'Durable valve for engine rebuilds.' })}>Add to Cart</button>
            </article>
            <article className="deal-card">
              <img src="https://images.unsplash.com/photo-1517638851339-4aa0e62b9c52?auto=format&fit=crop&w=900&q=80" alt="Brake Kit" />
              <div>
                <h3>Brake Kit</h3>
                <p>Quality OEM replacements available.</p>
              </div>
              <button className="link-button" onClick={() => addToCart({ id: 13, name: 'Brake Kit', price: 82000, image: 'https://images.unsplash.com/photo-1517638851339-4aa0e62b9c52?auto=format&fit=crop&w=900&q=80', description: 'Complete brake kit for safe stopping.' })}>Add to Cart</button>
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
                <img src={product.image} alt={product.name} />
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
      </footer>
    </main>
  );
}
