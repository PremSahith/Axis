import './Contact.css';

export default function ContactPage() {
  return (
    <div className="contact-page">
      <div className="container">
        <header className="page-header text-center">
          <h1 className="display-lg text-primary">Get in Touch</h1>
          <p className="page-subtitle">Begin planning your extraordinary journey.</p>
        </header>

        <div className="contact-content">
          <div className="contact-info">
             <h2>Contact Us</h2>
             <p>Our dedicated travel advisors are ready to craft your bespoke itinerary.</p>
             <div className="info-block">
                <h3>General Inquiries</h3>
                <p>concierge@axistravel.com</p>
             </div>
             <div className="info-block">
                <h3>Phone</h3>
                <p>+1 (800) 555-AXIS</p>
             </div>
             <div className="info-block">
                <h3>Global Headquarters</h3>
                <p>100 Luxury Avenue, Suite 500<br/>New York, NY 10001</p>
             </div>
          </div>
          <div className="contact-form-container card">
             <h3>Send a Message</h3>
             <form className="contact-form">
               <div className="form-group">
                 <label htmlFor="name">Full Name</label>
                 <input type="text" id="name" placeholder="Enter your name" required />
               </div>
               <div className="form-group">
                 <label htmlFor="email">Email Address</label>
                 <input type="email" id="email" placeholder="Enter your email" required />
               </div>
               <div className="form-group">
                 <label htmlFor="message">Message</label>
                 <textarea id="message" rows="5" placeholder="How can we help?" required></textarea>
               </div>
               <button type="submit" className="btn btn-primary w-100 mt-4">Submit Request</button>
             </form>
          </div>
        </div>
      </div>
    </div>
  );
}
