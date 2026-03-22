'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function BookingForm({ destinations = [], initialDestination = '' }) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    destinationId: initialDestination,
    startDate: '',
    endDate: '',
    travelersCount: 2,
    luxuryPreferences: [],
    name: '',
    email: '',
    phone: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const preferencesOptions = ['Private Jet Transfer', 'Villa Upgrade', 'Helicopter Tour', 'Personal Chef'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckbox = (opt) => {
    setFormData(prev => {
      const isSelected = prev.luxuryPreferences.includes(opt);
      return {
        ...prev,
        luxuryPreferences: isSelected 
          ? prev.luxuryPreferences.filter(p => p !== opt)
          : [...prev.luxuryPreferences, opt]
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          customerInfo: {
            name: formData.name,
            email: formData.email,
            phone: formData.phone
          }
        })
      });

      if (!res.ok) throw new Error('Failed to submit booking request.');

      setSuccess(true);
      setTimeout(() => router.push('/destinations'), 3000); // redirect after success
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="booking-success card">
        <h2 className="text-primary">Request Received</h2>
        <p>Our concierge team will contact you shortly to finalize your itinerary.</p>
      </div>
    );
  }

  return (
    <form className="booking-form card" onSubmit={handleSubmit}>
      {error && <div className="error-message">{error}</div>}
      
      <div className="form-section">
        <h3>Journey Details</h3>
        
        <div className="form-group">
          <label>Destination</label>
          <select name="destinationId" value={formData.destinationId} onChange={handleChange} required>
            <option value="" disabled>Select a pristine locale...</option>
            {destinations.map(d => (
              <option key={d._id} value={d._id}>{d.title}</option>
            ))}
          </select>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Arrival Date</label>
            <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Departure Date</label>
            <input type="date" name="endDate" value={formData.endDate} onChange={handleChange} required />
          </div>
        </div>

        <div className="form-group">
          <label>Travelers</label>
          <input type="number" name="travelersCount" min="1" max="20" value={formData.travelersCount} onChange={handleChange} required />
        </div>
      </div>

      <div className="form-section">
        <h3>Luxury Preferences</h3>
        <p className="section-hint">Select any bespoke additions to elevate your travel.</p>
        <div className="preferences-grid">
          {preferencesOptions.map(opt => (
            <label key={opt} className={`preference-card ${formData.luxuryPreferences.includes(opt) ? 'active' : ''}`}>
              <input 
                type="checkbox" 
                checked={formData.luxuryPreferences.includes(opt)}
                onChange={() => handleCheckbox(opt)}
                className="hidden-checkbox"
              />
              <span>{opt}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="form-section">
        <h3>Contact Information</h3>
        <div className="form-group">
          <label>Full Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="John Sterling" />
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="john@example.com" />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required placeholder="+1 (555) 000-0000" />
          </div>
        </div>
      </div>

      <button type="submit" className="btn btn-primary btn-large w-100 mt-4" disabled={loading}>
        {loading ? 'Submitting...' : 'Submit Booking Request'}
      </button>
    </form>
  );
}
