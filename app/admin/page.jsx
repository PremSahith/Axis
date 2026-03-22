'use client';

import { useState, useEffect } from 'react';
import './Admin.css';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('destinations');
  const [destinations, setDestinations] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const [newDest, setNewDest] = useState({
    title: '', image: '', description: '', price: '', duration: '', highlights: ''
  });

  useEffect(() => {
    fetchData();
  }, [activeTab]);

  const fetchData = async () => {
    setLoading(true);
    try {
      if (activeTab === 'destinations') {
        const res = await fetch('/api/destinations');
        const data = await res.json();
        setDestinations(data);
      } else if (activeTab === 'bookings') {
        const res = await fetch('/api/bookings');
        const data = await res.json();
        setBookings(data);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const handleDestSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = { 
        ...newDest, 
        highlights: newDest.highlights.split(',').map(s => s.trim()) 
      };
      const res = await fetch('/api/destinations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (res.ok) {
        setNewDest({ title: '', image: '', description: '', price: '', duration: '', highlights: '' });
        fetchData();
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="admin-page">
      <div className="container admin-container">
        <aside className="admin-sidebar card">
          <h2 className="admin-logo">AXIS CMS</h2>
          <nav className="admin-nav">
            <button className={activeTab === 'destinations' ? 'active' : ''} onClick={() => setActiveTab('destinations')}>
              Destinations
            </button>
            <button className={activeTab === 'bookings' ? 'active' : ''} onClick={() => setActiveTab('bookings')}>
              Bookings
            </button>
          </nav>
        </aside>

        <main className="admin-content card">
          {loading ? (
             <p>Loading data...</p>
          ) : (
            <>
              {activeTab === 'destinations' && (
                <div className="admin-section">
                  <h3>Manage Destinations</h3>
                  
                  <form className="admin-form mb-4" onSubmit={handleDestSubmit}>
                    <h4>Add New Destination</h4>
                    <div className="form-row">
                      <input type="text" placeholder="Title" value={newDest.title} onChange={e => setNewDest({...newDest, title: e.target.value})} required />
                      <input type="text" placeholder="Image URL" value={newDest.image} onChange={e => setNewDest({...newDest, image: e.target.value})} required />
                    </div>
                    <div className="form-row">
                      <input type="number" placeholder="Price" value={newDest.price} onChange={e => setNewDest({...newDest, price: e.target.value})} required />
                      <input type="text" placeholder="Duration (e.g. 7 Days / 6 Nights)" value={newDest.duration} onChange={e => setNewDest({...newDest, duration: e.target.value})} required />
                    </div>
                    <textarea placeholder="Description" rows="3" value={newDest.description} onChange={e => setNewDest({...newDest, description: e.target.value})} required />
                    <input type="text" placeholder="Highlights (comma separated)" value={newDest.highlights} onChange={e => setNewDest({...newDest, highlights: e.target.value})} />
                    <button type="submit" className="btn btn-primary mt-2">Add Destination</button>
                  </form>

                  <div className="admin-list">
                    {destinations.map(d => (
                      <div key={d._id} className="admin-list-item">
                        <img src={d.image} alt={d.title} width="60" className="admin-thumb" />
                        <div>
                          <strong>{d.title}</strong>
                          <p>${d.price} • {d.duration}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'bookings' && (
                <div className="admin-section">
                  <h3>Recent Bookings</h3>
                  <table className="admin-table">
                    <thead>
                      <tr>
                        <th>Customer</th>
                        <th>Email</th>
                        <th>Travelers</th>
                        <th>Status</th>
                        <th>Date Requested</th>
                      </tr>
                    </thead>
                    <tbody>
                      {bookings.map(b => (
                        <tr key={b._id}>
                          <td>{b.customerInfo.name}</td>
                          <td>{b.customerInfo.email}</td>
                          <td>{b.travelersCount}</td>
                          <td><span className="status-badge">{b.status || 'Pending'}</span></td>
                          <td>{new Date(b.createdAt).toLocaleDateString()}</td>
                        </tr>
                      ))}
                      {bookings.length === 0 && (
                        <tr><td colSpan="5">No bookings found.</td></tr>
                      )}
                    </tbody>
                  </table>
                </div>
              )}
            </>
          )}
        </main>
      </div>
    </div>
  );
}
