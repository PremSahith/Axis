import dbConnect from '@/lib/mongodb';
import Destination from '@/models/Destination';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import '../Destinations.css';

export const revalidate = 60;

export default async function DestinationRoute({ params }) {
  await dbConnect();
  
  const { slug } = await params;
  const destination = await Destination.findOne({ slug }).lean().exec();

  if (!destination) {
    notFound();
  }

  return (
    <div className="destination-detail">
      <div className="destination-hero">
        <img src={destination.image} alt={destination.title} className="destination-hero-image" />
        <div className="destination-hero-overlay">
          <div className="container">
            <h1 className="display-lg text-white">{destination.title}</h1>
            <p className="destination-hero-meta">{destination.duration} • Starts at ${destination.price?.toLocaleString()}</p>
          </div>
        </div>
      </div>

      <div className="container destination-content">
        <div className="destination-main">
          <h2>About The Destination</h2>
          <p className="destination-description">{destination.description}</p>
          
          <h3>Highlights</h3>
          <ul className="destination-highlights">
            {destination.highlights?.map((highlight, idx) => (
              <li key={idx}>{highlight}</li>
            ))}
          </ul>
        </div>
        
        <div className="destination-sidebar">
           <div className="booking-card card">
              <h3>Reserve Your Journey</h3>
              <p>Experience {destination.title} with curated luxury.</p>
              <div className="booking-price-row">
                 <span className="price-label">From</span>
                 <span className="price-value">${destination.price?.toLocaleString()}</span>
              </div>
              <Link href={`/booking?destination=${destination._id}`} className="btn btn-primary w-100">
                Book Now
              </Link>
           </div>
        </div>
      </div>
    </div>
  );
}
