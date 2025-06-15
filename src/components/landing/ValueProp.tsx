
import { CheckCircle } from 'lucide-react';

const benefits = [
    "Add expenses in seconds.",
    "Track your spending in real-time.",
    "Analyze where your money goes—instantly."
];

const ValueProp = () => {
  return (
    <section id="value-prop" className="py-24 sm:py-32 bg-secondary/30">
        <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold">
                Struggling to keep up with your expenses?
            </h2>
            <p className="md:w-3/4 mx-auto mt-4 text-xl text-muted-foreground">
                Receipts everywhere. Budgets blown. It’s time to take control — with Expense+.
            </p>

            <div className="max-w-md mx-auto mt-12 space-y-4">
                {benefits.map((benefit) => (
                    <div key={benefit} className="flex items-center gap-4 p-4 rounded-lg bg-background border">
                        <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                        <p className="text-lg font-medium text-left">{benefit}</p>
                    </div>
                ))}
            </div>

            <div className="mt-16">
                 <p className="text-2xl font-semibold">
                    No stress. No spreadsheets. Just clarity.
                </p>
                <p className="mt-4 text-4xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 text-transparent bg-clip-text">
                    Your money. Mastered.
                </p>
            </div>
        </div>
    </section>
  );
};

export default ValueProp;
