
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    quote: "This app is a game-changer for group trips. Splitting dinner bills is no longer a 20-minute math problem. Just snap, tap, and done!",
    name: "Jessica M.",
    title: "Frequent Traveler",
  },
  {
    quote: "The OCR is scarily accurate. It picked up everything from my crumpled receipt, even the weirdly abbreviated item names. Highly recommend!",
    name: "Alex R.",
    title: "Tech Enthusiast",
  },
  {
    quote: "Finally, an expense app that doesn't feel like a chore to use. The interface is clean, and settling up with friends is seamless.",
    name: "Sarah C.",
    title: "Apartment Roommate",
  },
  {
    quote: "As someone who organizes a lot of group events, Expense has saved me countless hours and awkward conversations about money. It's brilliant.",
    name: "David K.",
    title: "Event Organizer",
  },
  {
    quote: "I love that I can see exactly what I owe without having to do any math. The 'Settle Up' feature is incredibly convenient.",
    name: "Emily T.",
    title: "Student",
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        What Our First Users{" "}
        <span className="bg-gradient-to-r from-amber-400 to-orange-500 text-transparent bg-clip-text">
          Say
        </span>
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-16 text-xl text-muted-foreground text-center">
        Real stories from real people who've simplified their finances with Expense.
      </p>

      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full max-w-4xl mx-auto"
      >
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card className="bg-secondary/50 border-border h-full flex flex-col">
                  <CardContent className="pt-6 pb-4 flex-grow">
                    <p className="text-muted-foreground">"{testimonial.quote}"</p>
                  </CardContent>
                  <CardFooter className="pt-4 border-t border-border/20">
                    <div className="flex items-center space-x-4">
                      <Avatar>
                        <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                      </div>
                    </div>
                  </CardFooter>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};

export default Testimonials;
