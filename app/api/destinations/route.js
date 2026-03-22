import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Destination from '@/models/Destination';

export async function GET() {
  try {
    await dbConnect();
    const destinations = await Destination.find({});
    return NextResponse.json(destinations);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    await dbConnect();
    const body = await req.json();
    // Autogenerate slug if not provided
    if (!body.slug && body.title) {
      body.slug = body.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    }
    const destination = await Destination.create(body);
    return NextResponse.json(destination, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
