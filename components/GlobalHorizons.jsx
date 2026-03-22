import Link from 'next/link';
import './GlobalHorizons.css';

export default function GlobalHorizons({ destinations = [] }) {
  return (
    <section className="horizons">
      <div className="container">
        <div className="horizons-header">
          <div>
            <h2 className="section-title">Global Horizons</h2>
            <p className="section-subtitle">Pristine locales awaiting your arrival.</p>
          </div>
          <Link href="/destinations" className="btn btn-secondary">
            View All
          </Link>
        </div>
        
        <div className="horizons-grid">
          {destinations.length > 0 ? (
            destinations.slice(0, 4).map((dest) => (
              <Link href={`/destinations/${dest.slug}`} key={dest._id} className="card destination-card">
                <div className="card-image-wrapper">
                  <img src={dest.image} alt={dest.title} className="card-image" loading="lazy" />
                </div>
                <div className="card-content">
                  <h3 className="card-title">{dest.title}</h3>
                  <p className="card-duration">{dest.duration}</p>
                </div>
              </Link>
            ))
          ) : (
            <div className="skeleton-grid">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="card destination-card skeleton" style={{ minHeight: '300px' }}></div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
