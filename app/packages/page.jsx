import dbConnect from '@/lib/mongodb';
import Package from '@/models/Package';
import Link from 'next/link';
import './Packages.css';

export const revalidate = 60;

export default async function PackagesPage() {
  await dbConnect();
  const packages = await Package.find({}).lean().exec();

  return (
    <div className="packages-page">
      <div className="container">
        <header className="page-header text-center">
          <h1 className="display-lg text-primary">Curated Journeys</h1>
          <p className="page-subtitle">Immersive experiences, perfectly planned.</p>
        </header>

        <div className="packages-list">
          {packages.length > 0 ? (
            packages.map((pkg) => (
              <div key={pkg._id.toString()} className="card package-card-row">
                <div className="package-image-col">
                  <img src={pkg.image} alt={pkg.title} className="package-image" loading="lazy" />
                </div>
                <div className="package-info-col">
                  <h2>{pkg.title}</h2>
                  <div className="package-meta">
                     <span className="package-price">${pkg.price?.toLocaleString()}</span>
                     <span className="dot-divider">•</span>
                     <span className="package-days">{pkg.daysNights}</span>
                  </div>
                  <ul className="package-highlights-list">
                    {pkg.highlights?.slice(0, 3).map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                  <Link href={`/packages/${pkg.slug}`} className="btn btn-secondary mt-auto">
                    View Complete Itinerary
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p>No packages available at the moment.</p>
          )}
        </div>
      </div>
    </div>
  );
}
