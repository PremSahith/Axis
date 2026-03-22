import mongoose from 'mongoose';

const LookbookSchema = new mongoose.Schema({
  title: { type: String },
  image: { type: String, required: true },
  category: { 
    type: String, 
    enum: ['Beach', 'Mountains', 'Luxury', 'Adventure'],
    required: true
  }
}, { timestamps: true });

export default mongoose.models.Lookbook || mongoose.model('Lookbook', LookbookSchema);
