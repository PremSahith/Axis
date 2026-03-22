'use client';

import { useState } from 'react';
import { X } from 'lucide-react';

const CATEGORIES = ['All', 'Beach', 'Mountains', 'Luxury', 'Adventure'];

export default function LookbookClient({ initialItems = [] }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [modalImage, setModalImage] = useState(null);

  const filteredItems = activeCategory === 'All' 
    ? initialItems 
    : initialItems.filter(item => item.category === activeCategory);

  return (
    <>
      <div className="lookbook-filters">
        {CATEGORIES.map(cat => (
          <button 
            key={cat}
            className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="masonry-grid">
        {filteredItems.map(item => (
          <div 
            key={item._id} 
            className="masonry-item"
            onClick={() => setModalImage(item)}
          >
            <img src={item.image} alt={item.title || item.category} loading="lazy" />
            <div className="masonry-overlay">
              <span className="masonry-category">{item.category}</span>
            </div>
          </div>
        ))}
        {filteredItems.length === 0 && (
          <p className="no-items-msg">No images found for this category.</p>
        )}
      </div>

      {/* Modal */}
      {modalImage && (
        <div className="lookbook-modal glass" onClick={() => setModalImage(null)}>
          <button className="modal-close" onClick={() => setModalImage(null)}>
            <X size={32} />
          </button>
          <img 
            src={modalImage.image} 
            alt={modalImage.title || modalImage.category} 
            className="modal-image"
            onClick={(e) => e.stopPropagation()} 
          />
        </div>
      )}
    </>
  );
}
