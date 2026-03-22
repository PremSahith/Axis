import mongoose from 'mongoose';

const PackageSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
  daysNights: { type: String, required: true },
  highlights: [{ type: String }],
  itineraryTimeline: [{
    day: { type: Number },
    title: { type: String },
    description: { type: String }
  }]
}, { timestamps: true });

export default mongoose.models.Package || mongoose.model('Package', PackageSchema);
