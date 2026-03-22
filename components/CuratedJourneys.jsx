import Link from 'next/link';
import './CuratedJourneys.css';

export default function CuratedJourneys({ packages = [] }) {
  return (
    <section className="journeys">
      <div className="container">
        <div className="section-header-center">
          <h2 className="section-title">Curated Journeys</h2>
          <p className="section-subtitle">Exclusively designed, completely immersive experiences.</p>
        </div>
        
        <div className="journeys-list">
          {packages.length > 0 ? (
            packages.map((pkg, index) => (
              <div key={pkg._id} className={`journey-row ${index % 2 !== 0 ? 'reverse' : ''}`}>
                <div className="journey-image-col">
                  <img src={pkg.image} alt={pkg.title} className="journey-image" loading="lazy" />
                </div>
                <div className="journey-content-col">
                  <h3 className="journey-title">{pkg.title}</h3>
                  <div className="journey-meta">
                    <span className="journey-price">${pkg.price?.toLocaleString()}</span>
                    <span className="journey-dot">•</span>
                    <span className="journey-days">{pkg.daysNights}</span>
                  </div>
                  <ul className="journey-highlights">
                    {pkg.highlights?.slice(0, 3).map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                  <Link href={`/packages/${pkg.slug}`} className="btn btn-secondary mt-4">
                    Explore Itinerary
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <div className="skeleton-journey">
               <div className="skeleton-img skeleton" />
               <div className="skeleton-content skeleton" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
