import './About.css';

export default function AboutPage() {
  return (
    <div className="about-page">
      <div className="container">
        <header className="page-header text-center">
          <h1 className="display-lg text-primary">About Axis</h1>
          <p className="page-subtitle">Redefining the standard of luxury travel.</p>
        </header>

        <div className="about-content">
          <div className="about-text">
             <h2>Our Philosophy</h2>
             <p>At Axis, we believe that true luxury is found in the details. From meticulously curated itineraries to exclusive access at the world's most sought-after destinations, our mission is to provide an unparalleled travel experience.</p>
             <p>Founded by passionate explorers, our team is dedicated to crafting bespoke journeys that inspire, rejuvenate, and create memories that last a lifetime. Whether it's a secluded overwater villa or a private heliskiing adventure, we elevate every moment.</p>
             
             <h2>The Axis Standard</h2>
             <ul>
               <li>Exclusive Access: Experiences inaccessible to the general public.</li>
               <li>Bespoke Itineraries: Tailored specifically to your desires and schedule.</li>
               <li>24/7 Concierge: Unwavering support before, during, and after your journey.</li>
             </ul>
          </div>
          <div className="about-image-wrapper">
             <img src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800&h=1000" alt="Luxury Travel Experiences" className="about-image" />
          </div>
        </div>
      </div>
    </div>
  );
}
