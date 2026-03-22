import Link from 'next/link';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-background">
        <div className="hero-gradient" />
        <img 
          src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&q=80&w=2000" 
          alt="Premium Horizon"
          className="hero-image"
        />
      </div>
      
      <div className="container hero-content">
        <span className="hero-label">The Curated Voyager</span>
        <h1 className="hero-title display-lg">
          Beyond the<br />Ocean Horizon.
        </h1>
        <p className="hero-subtitle">
          Discover a collection of the world&apos;s most pristine destinations.
          Tailored explicitly for the design-conscious traveler.
        </p>
        
        <div className="hero-actions">
          <Link href="/destinations" className="btn btn-primary btn-large glass-cta">
            Start Exploring
          </Link>
          <Link href="/lookbook" className="btn btn-secondary btn-large">
            View Lookbook
          </Link>
        </div>
      </div>
    </section>
  );
}
