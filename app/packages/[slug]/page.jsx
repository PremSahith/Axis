import dbConnect from '@/lib/mongodb';
import Package from '@/models/Package';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import '../Packages.css';

export const revalidate = 60;

export default async function PackageRoute({ params }) {
  await dbConnect();
  // We specify lean to get a plain JS object back
  const { slug } = await params;
  const pkg = await Package.findOne({ slug }).lean().exec();

  if (!pkg) {
    notFound();
  }

  return (
    <div className="package-detail">
       <div className="package-hero">
         <div className="package-hero-bg">
            <img src={pkg.image} alt={pkg.title} />
         </div>
         <div className="container relative">
            <div className="package-hero-content card glass-card">
               <h1 className="display-lg text-primary">{pkg.title}</h1>
               <div className="package-meta-large">
                  <span className="price">${pkg.price?.toLocaleString()}</span>
                  <span className="divider">|</span>
                  <span className="duration">{pkg.daysNights}</span>
               </div>
               <Link href={`/booking?package=${pkg._id}`} className="btn btn-primary btn-large w-100">
                 Reserve this Journey
               </Link>
            </div>
         </div>
       </div>

       <div className="container package-grid-layout">
         <div className="main-content">
           <h2 className="section-title">Journey Overview</h2>
           <ul className="overview-highlights">
             {pkg.highlights?.map((highlight, idx) => (
               <li key={idx}>{highlight}</li>
             ))}
           </ul>

           <h2 className="section-title mt-top">Itinerary Timeline</h2>
           <div className="timeline">
             {pkg.itineraryTimeline?.map((item, idx) => (
               <div key={idx} className="timeline-item">
                 <div className="timeline-day">Day {item.day}</div>
                 <div className="timeline-content card">
                   <h3 className="timeline-title">{item.title}</h3>
                   <p className="timeline-desc">{item.description}</p>
                 </div>
               </div>
             ))}
           </div>
         </div>
       </div>
    </div>
  );
}
