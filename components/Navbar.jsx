import Link from 'next/link';
import './Navbar.css';

export default function Navbar() {
  return (
    <header className="navbar glass-nav">
      <div className="container nav-container">
        <Link href="/" className="logo">
          AXIS
        </Link>
        <nav className="nav-links">
          <Link href="/destinations">Destinations</Link>
          <Link href="/packages">Packages</Link>
          <Link href="/lookbook">Lookbook</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <div className="nav-actions">
          <Link href="/booking" className="btn btn-primary">
            Book Now
          </Link>
        </div>
      </div>
    </header>
  );
}
