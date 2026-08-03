export default function HomePage() {
  return (
    <main>
      <div className="topbar">
        <div className="container topbar-inner">
          <p>Hotline: <strong>070 1603 6776</strong></p>
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
            <a href="#deals">Deals</a>
            <a href="#featured">Featured</a>
            <a href="#contact">Contact</a>
          </nav>
          <div className="header-actions">
            <a href="#featured" className="button button-primary">Shop Now</a>
            <a href="#contact" className="button button-secondary">Request Quote</a>
          </div>
        </div>
      </header>

      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-copy">
            <span className="eyebrow">Automobile Parts Dealers</span>
            <h1>Premium parts, fast repairs and trusted service for every vehicle.</h1>
            <p>
              Casi-Check delivers genuine auto parts and full-service repairs for dealers, fleets,
              and car owners. Discover top categories, daily deals, and expert support in one place.
            </p>
            <div className="hero-actions">
              <a href="#categories" className="button button-primary">Shop Categories</a>
              <a href="#deals" className="button button-secondary">View Deals</a>
            </div>
          </div>
          <div className="hero-panel">
            <div className="hero-panel-card">
              <p className="small-label">Featured service</p>
              <h2>Same-day parts sourcing</h2>
              <p>Get fast access to tires, brakes, lighting, and engine components with expert quoting.</p>
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
          <div className="category-grid">
            <article className="category-card">
              <h3>Interior</h3>
              <p>Seats, steering wheels, dash covers, floor mats.</p>
            </article>
            <article className="category-card">
              <h3>Performance</h3>
              <p>Brakes, chips, starters, charging, exhaust systems.</p>
            </article>
            <article className="category-card">
              <h3>Exterior</h3>
              <p>Running boards, grilles, bumpers, body kits.</p>
            </article>
            <article className="category-card">
              <h3>Body Parts</h3>
              <p>Mirrors, hoods, bumpers, quarter panels.</p>
            </article>
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
              <div>
                <h3>Toyota Shaft</h3>
                <p>Just NGN 190,000</p>
              </div>
              <a className="link-button" href="#contact">Shop Now</a>
            </article>
            <article className="deal-card">
              <div>
                <h3>Engine Valve</h3>
                <p>Just NGN 43,000</p>
              </div>
              <a className="link-button" href="#contact">Shop Now</a>
            </article>
            <article className="deal-card">
              <div>
                <h3>Brake Kit</h3>
                <p>Quality OEM replacements available.</p>
              </div>
              <a className="link-button" href="#contact">Shop Now</a>
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
            <article className="product-card">
              <h3>Front Hub Bearing for Toyota Hilux</h3>
              <p>₦100,000.00 <span>₦120,000.00</span></p>
            </article>
            <article className="product-card">
              <h3>Master Brake Toyota Corolla 2003-2005</h3>
              <p>₦20,000.00 <span>₦25,000.00</span></p>
            </article>
            <article className="product-card">
              <h3>Master Brake for Toyota Venza</h3>
              <p>₦37,000.00 <span>₦40,000.00</span></p>
            </article>
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
            <article className="product-card">
              <h3>Complete Suspension Kit</h3>
              <p>₦160,000.00 <span>Shop now</span></p>
            </article>
            <article className="product-card">
              <h3>LED Headlamp Set</h3>
              <p>₦45,000.00 <span>Shop now</span></p>
            </article>
            <article className="product-card">
              <h3>Air Filter Bundle</h3>
              <p>₦8,500.00 <span>Shop now</span></p>
            </article>
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
            <article className="testimonial-card">
              <p>“Casi-Check makes parts sourcing easy and reliable. Their response time is excellent.”</p>
              <strong>Obinna N., Workshop Manager</strong>
            </article>
            <article className="testimonial-card">
              <p>“Great selection, fast delivery, and quality parts at the right price.”</p>
              <strong>Chimamanda A., Auto Dealer</strong>
            </article>
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
              Reach our parts desk directly at <strong>070 1603 6776</strong> or send a quick message via WhatsApp.
            </p>
            <a href="tel:+2347016036776" className="button button-primary">Call Now</a>
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
