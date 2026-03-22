'use client';
import { useState, useEffect } from 'react';
import './Testimonials.css';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

export default function Testimonials({ testimonials = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // If no testimonials are passed, we could optionally show a skeleton or nothing
  if (!testimonials || testimonials.length === 0) return null;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const activeTestimonial = testimonials[currentIndex];

  return (
    <section className="testimonials">
      <div className="container">
        <h2 className="section-title text-center">Voices of the Voyage</h2>
        
        <div className="testimonial-slider">
          <button className="slider-btn" onClick={handlePrev} aria-label="Previous Testimonial">
            <ChevronLeft size={24} />
          </button>
          
          <div className="testimonial-content">
            <div className="stars">
              {[...Array(activeTestimonial.rating || 5)].map((_, i) => (
                <Star key={i} size={20} fill="var(--secondary)" color="var(--secondary)" />
              ))}
            </div>
            <p className="testimonial-text">&quot;{activeTestimonial.content}&quot;</p>
            <div className="testimonial-author">
              <img src={activeTestimonial.avatar} alt={activeTestimonial.author} className="author-avatar" loading="lazy" />
              <span className="author-name">{activeTestimonial.author}</span>
            </div>
          </div>

          <button className="slider-btn" onClick={handleNext} aria-label="Next Testimonial">
            <ChevronRight size={24} />
          </button>
        </div>
        
        <div className="slider-dots">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              className={`dot ${idx === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
