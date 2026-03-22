import mongoose from 'mongoose';

const TestimonialSchema = new mongoose.Schema({
  author: { type: String, required: true },
  avatar: { type: String, required: true },
  rating: { type: Number, required: true, min: 1, max: 5 },
  content: { type: String, required: true }
}, { timestamps: true });

export default mongoose.models.Testimonial || mongoose.model('Testimonial', TestimonialSchema);
