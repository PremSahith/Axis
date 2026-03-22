import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Lookbook from '@/models/Lookbook';

export async function GET() {
  try {
    await dbConnect();
    const items = await Lookbook.find({});
    return NextResponse.json(items);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    await dbConnect();
    const body = await req.json();
    const lookbookItem = await Lookbook.create(body);
    return NextResponse.json(lookbookItem, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
