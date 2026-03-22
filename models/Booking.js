import mongoose from 'mongoose';

const BookingSchema = new mongoose.Schema({
  destinationId: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  travelersCount: { type: Number, required: true },
  luxuryPreferences: [{ type: String }],
  customerInfo: {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String }
  },
  status: { type: String, default: 'Pending' }
}, { timestamps: true });

export default mongoose.models.Booking || mongoose.model('Booking', BookingSchema);
