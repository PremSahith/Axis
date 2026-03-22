import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Destination from '@/models/Destination';
import Package from '@/models/Package';
import Lookbook from '@/models/Lookbook';
import Testimonial from '@/models/Testimonial';

export async function POST() {
  try {
    await dbConnect();

    // Clear existing data (optional, ensures a clean seeded state)
    await Destination.deleteMany({});
    await Package.deleteMany({});
    await Lookbook.deleteMany({});
    await Testimonial.deleteMany({});

    // 1. Destinations
    const destinations = await Destination.insertMany([
      {
        title: 'Amalfi Coast',
        slug: 'amalfi-coast',
        image: 'https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&q=80&w=800&h=1000',
        description: 'Experience the stunning cliffs and vibrant culture of the Italian coast.',
        price: 4500,
        duration: '7 Days / 6 Nights',
        highlights: ['Private Boat Tour', 'Villa Stay', 'Wine Tasting']
      },
      {
        title: 'Kyoto',
        slug: 'kyoto',
        image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=800&h=1000',
        description: 'Immerse yourself in tranquil temples and traditional tea ceremonies.',
        price: 3800,
        duration: '5 Days / 4 Nights',
        highlights: ['Tea Ceremony', 'Bamboo Forest', 'Ryokan Stay']
      },
      {
        title: 'Patagonia',
        slug: 'patagonia',
        image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800&h=1000',
        description: 'Explore the raw, dramatic landscapes of the end of the world.',
        price: 6200,
        duration: '10 Days / 9 Nights',
        highlights: ['Glacier Trekking', 'Luxury Eco-Lodge', 'Wildlife Safari']
      },
      {
        title: 'Santorini',
        slug: 'santorini',
        image: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&q=80&w=800&h=1000',
        description: 'Breathtaking sunsets and iconic whitewashed architecture.',
        price: 4100,
        duration: '6 Days / 5 Nights',
        highlights: ['Sunset Catamaran', 'Cave Suite', 'Caldera Views']
      }
    ]);

    // 2. Packages (Curated Journeys)
    await Package.insertMany([
      {
        title: 'The Alpine Escape',
        slug: 'the-alpine-escape',
        image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=1200&h=900',
        price: 8500,
        daysNights: '9 Days / 8 Nights',
        highlights: ['Helicopter Skiing', 'Michelin Star Dining', 'Thermal Spa'],
        itineraryTimeline: [
          { day: 1, title: 'Arrival in Geneva', description: 'Private transfer to the luxury chalet.' },
          { day: 2, title: 'Heli-Skiing', description: 'Full day of private guided heli-skiing.' }
        ]
      },
      {
        title: 'Maldivian Serenity',
        slug: 'maldivian-serenity',
        image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&q=80&w=1200&h=900',
        price: 12000,
        daysNights: '7 Days / 6 Nights',
        highlights: ['Overwater Bungalow', 'Private Yacht Tour', 'Underwater Dining'],
        itineraryTimeline: [
          { day: 1, title: 'Seaplane Transfer', description: 'Arrive at your private overwater villa.' },
          { day: 2, title: 'Coral Reef Diving', description: 'Guided diving in exclusive reefs.' }
        ]
      }
    ]);

    // 3. Testimonials
    await Testimonial.insertMany([
      {
        author: 'Eleanor Vance',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150',
        rating: 5,
        content: 'Every detail was curated to perfection. Truly the pinnacle of luxury travel.'
      },
      {
        author: 'Marcus Sterling',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150',
        rating: 5,
        content: 'Axis redefined our expectations. The private yacht in the Maldives was spectacular.'
      }
    ]);

    // 4. Lookbook
    await Lookbook.insertMany([
      { category: 'Beach', image: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&q=80&w=600' },
      { category: 'Mountains', image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=600' },
      { category: 'Luxury', image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=600' },
      { category: 'Adventure', image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=600' },
      { category: 'Beach', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=600' },
      { category: 'Luxury', image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=600' }
    ]);

    return NextResponse.json({ message: 'Database seeded successfully!' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
