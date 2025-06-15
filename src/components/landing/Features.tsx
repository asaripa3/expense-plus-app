
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScanLine, Split, Wallet } from 'lucide-react';
import PhoneMockup from './PhoneMockup';

const features = [
  {
    icon: <ScanLine />,
    title: 'Smart OCR Scanning',
    description: "Our custom-trained ML model instantly and accurately extracts item names, quantities, and prices from any receipt.",
  },
  {
    icon: <Split />,
    title: 'Flexible Splitting',
    description: 'Split expenses by item, percentage, or exact amounts. Handle unequal splits with ease.',
  },
  {
    icon: <Wallet />,
    title: 'Seamless Tracking',
    description: 'Get a clear overview of who paid, who owes what, and settle up directly. No more awkward follow-ups.',
  },
];

const Features = () => {
  return (
    <section id="features" className="container py-24 sm:py-32 space-y-8">
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        How{" "}
        <span className="bg-gradient-to-r from-amber-400 to-orange-500 text-transparent bg-clip-text">
          Expense+
        </span>{" "}
        Works
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ icon, title, description }) => (
          <Card key={title} className="bg-secondary/50 border-border">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/20 text-primary rounded-lg flex items-center justify-center mb-4">{icon}</div>
              <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
      <div className="grid md:grid-cols-2 gap-8 pt-16 items-center">
        <div>
           <h3 className="text-3xl font-bold mb-4">Your Finances, Organized</h3>
           <p className="text-muted-foreground mb-8">Manage group expenses, track shared bills, and maintain a clear financial history, all from your account page.</p>
        </div>
        <PhoneMockup imgSrc="/lovable-uploads/7b3c3efa-1d2a-4f9f-9641-e2470b7083f6.png" className="mx-auto" />
      </div>
    </section>
  );
};

export default Features;
