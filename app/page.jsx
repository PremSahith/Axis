import dbConnect from '@/lib/mongodb';
import Destination from '@/models/Destination';
import Package from '@/models/Package';
import Testimonial from '@/models/Testimonial';
import Hero from '@/components/Hero';
import GlobalHorizons from '@/components/GlobalHorizons';
import CuratedJourneys from '@/components/CuratedJourneys';
import Testimonials from '@/components/Testimonials';

export const revalidate = 60; // optionally revalidate every minute if static

export default async function HomePage() {
  await dbConnect();
  
  // Fetch from DB using Lean for pure JSON
  const destinations = await Destination.find({}).limit(4).lean().exec();
  const packages = await Package.find({}).limit(3).lean().exec();
  const testimonials = await Testimonial.find({}).limit(5).lean().exec();
  
  // Convert _id to string to pass to client components properly
  const plainDestinations = destinations.map(d => ({ ...d, _id: d._id.toString() }));
  const plainPackages = packages.map(p => ({ ...p, _id: p._id.toString() }));
  const plainTestimonials = testimonials.map(t => ({ ...t, _id: t._id.toString() }));

  return (
    <div className="home-wrapper">
      <Hero />
      <GlobalHorizons destinations={plainDestinations} />
      <CuratedJourneys packages={plainPackages} />
      <Testimonials testimonials={plainTestimonials} />
    </div>
  );
}
