import Link from 'next/link';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <h2 className="logo">AXIS</h2>
          <p className="footer-tagline">Premium Travel Experiences</p>
        </div>
        <div className="footer-links">
          <div className="footer-col">
            <h4>Explore</h4>
            <Link href="/destinations">Destinations</Link>
            <Link href="/packages">Curated Journeys</Link>
            <Link href="/lookbook">Lookbook</Link>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <Link href="/about">About Us</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/privacy">Privacy Policy</Link>
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>&copy; {new Date().getFullYear()} Axis. The Curated Voyager.</p>
      </div>
    </footer>
  );
}
