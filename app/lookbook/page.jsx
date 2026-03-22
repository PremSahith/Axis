import dbConnect from '@/lib/mongodb';
import Lookbook from '@/models/Lookbook';
import LookbookClient from './LookbookClient';
import './Lookbook.css';

export const revalidate = 60;

export default async function LookbookPage() {
  await dbConnect();
  const items = await Lookbook.find({}).lean().exec();
  
  // Convert _id to string for the client component
  const plainItems = items.map(item => ({
    ...item,
    _id: item._id.toString()
  }));

  return (
    <div className="lookbook-page">
      <div className="container">
        <header className="page-header text-center">
          <h1 className="display-lg text-primary">The Lookbook</h1>
          <p className="page-subtitle">A visual voyage through luxury and leisure.</p>
        </header>

        <LookbookClient initialItems={plainItems} />
      </div>
    </div>
  );
}
