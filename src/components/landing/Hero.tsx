
import { Button } from '@/components/ui/button';
import { toast } from "sonner";
import PhoneMockup from './PhoneMockup';

const Hero = () => {
    const handleNotify = () => {
    toast.success("You're on the list!", {
      description: "We'll notify you as soon as Expense launches.",
    });
  };

  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-amber-400 to-orange-500 text-transparent bg-clip-text">
              Stop
            </span>{" "}
            the receipt math.
          </h1>{" "}
          <h2 className="inline">
            Split bills in a{" "}
            <span className="inline bg-gradient-to-r from-amber-400 to-orange-500 text-transparent bg-clip-text">
              snap
            </span>
            .
          </h2>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          Scan any receipt with our AI-powered app and split expenses with friends effortlessly. No more manual calculations.
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <Button onClick={handleNotify} className="w-full md:w-1/3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg py-6">
            Join the Waitlist
          </Button>
        </div>
      </div>

      <div className="z-10">
        <PhoneMockup imgSrc="/lovable-uploads/617614ca-855f-44b8-8716-543ad797058c.png" />
      </div>

      <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[radial-gradient(#1E1E1E_1px,transparent_1px)] [background-size:16px_16px]"></div>
    </section>
  );
};

export default Hero;
