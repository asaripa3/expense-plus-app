
import { Button } from '@/components/ui/button';
import { toast } from "sonner";
import PhoneMockup from './PhoneMockup';
import { Star } from 'lucide-react';
import FallingEmojis from './FallingEmojis';

const Hero = () => {
    const handleNotify = () => {
    toast.success("You're on the list!", {
      description: "We'll notify you as soon as Expense+ launches.",
    });
  };

  const videoPreviewSrc = "/app-preview.mp4";
  const phoneBgColor = "#F59E0B";

  return (
    <section className="relative container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <FallingEmojis />
      <div className="relative z-10 text-center lg:text-start space-y-6">
        <div className="animate-fade-in-up">
            <div className="flex justify-center lg:justify-start">
                <div className="flex items-center gap-2 rounded-full bg-secondary/50 px-4 py-2 text-sm font-medium border">
                    <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-amber-400 fill-amber-400" />
                        ))}
                    </div>
                    <span className="text-muted-foreground">Launching soon on the App Store</span>
                </div>
            </div>
        </div>

        <main className="text-5xl md:text-6xl font-bold animate-fade-in-up font-sora" style={{ animationDelay: '0.2s' }}>
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

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          Scan any receipt with our AI-powered app and split expenses with friends effortlessly. No more manual calculations.
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <Button onClick={handleNotify} className="w-full md:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg py-6 px-8 rounded-full">
            Join the Waitlist
          </Button>
        </div>
      </div>

      <div className="relative z-10 flex w-full justify-center animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
        <PhoneMockup
          videoSrc={videoPreviewSrc}
          bgColor={phoneBgColor}
        />
      </div>

      <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[radial-gradient(#1E1E1E_1px,transparent_1px)] [background-size:16px_16px]"></div>
    </section>
  );
};

export default Hero;
