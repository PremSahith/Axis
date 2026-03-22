import dbConnect from '@/lib/mongodb';
import Destination from '@/models/Destination';
import BookingForm from './BookingForm';
import './Booking.css';

export const revalidate = 60;

export default async function BookingPage({ searchParams }) {
  await dbConnect();
  // Fetch only necessary fields for the dropdown
  const destinations = await Destination.find({}).select('title _id').lean().exec();

  const plainDestinations = destinations.map(d => ({
    title: d.title,
    _id: d._id.toString()
  }));

  // Next.js 16+ requires awaiting searchParams
  const resolvedParams = await searchParams;
  const initialDestination = resolvedParams?.destination || '';

  return (
    <div className="booking-page">
      <div className="container">
        <header className="page-header text-center">
          <h1 className="display-lg text-primary">Reserve Your Journey</h1>
          <p className="page-subtitle">Begin planning your curated experience.</p>
        </header>

        <div className="booking-content">
          <BookingForm 
            destinations={plainDestinations} 
            initialDestination={initialDestination} 
          />
        </div>
      </div>
    </div>
  );
}
