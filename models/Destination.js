import mongoose from 'mongoose';

const DestinationSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  duration: { type: String, required: true }, // e.g., "7 Days / 6 Nights"
  highlights: [{ type: String }]
}, { timestamps: true });

export default mongoose.models.Destination || mongoose.model('Destination', DestinationSchema);
