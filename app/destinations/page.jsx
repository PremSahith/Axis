import dbConnect from '@/lib/mongodb';
import Destination from '@/models/Destination';
import Link from 'next/link';
import './Destinations.css';

export const revalidate = 60;

export default async function DestinationsPage() {
  await dbConnect();
  const destinations = await Destination.find({}).lean().exec();

  return (
    <div className="destinations-page">
      <div className="container">
        <header className="page-header">
          <h1 className="display-lg">All Destinations</h1>
          <p className="page-subtitle">Pristine locales awaiting your arrival.</p>
        </header>

        <div className="destinations-grid">
          {destinations.length > 0 ? (
            destinations.map((dest) => (
              <Link href={`/destinations/${dest.slug}`} key={dest._id.toString()} className="card destination-card">
                <div className="card-image-wrapper">
                  <img src={dest.image} alt={dest.title} className="card-image" loading="lazy" />
                </div>
                <div className="card-content">
                  <h2 className="card-title">{dest.title}</h2>
                  <p className="card-duration">{dest.duration} • ${dest.price?.toLocaleString()} / pp</p>
                </div>
              </Link>
            ))
          ) : (
             <p>No destinations available.</p>
          )}
        </div>
      </div>
    </div>
  );
}
