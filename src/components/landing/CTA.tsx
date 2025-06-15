
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const CTA = () => {
  const handleNotify = () => {
    toast.success("You're on the list!", {
      description: "We'll notify you as soon as Expense+ launches.",
    });
  };

  return (
    <section id="cta" className="py-24 sm:py-32">
        <div className="container text-center">
            <h2 className="text-4xl md:text-5xl font-bold">
                Launching Soon on iOS
            </h2>
            <p className="text-xl text-muted-foreground mt-4 mb-8">
                Be the first to know when Expense+ hits the App Store.
            </p>
            <Button onClick={handleNotify} className="w-full md:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg py-6 px-12">
                Join the Waitlist
            </Button>
        </div>
    </section>
  );
}

export default CTA;
