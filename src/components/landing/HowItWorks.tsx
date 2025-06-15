
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Camera, Users, CreditCard } from "lucide-react";

const steps = [
    {
        icon: <Camera size={48} className="text-primary" />,
        title: "1. Snap a Photo",
        description: "Take a picture of any itemized bill or receipt.",
    },
    {
        icon: <Users size={48} className="text-primary" />,
        title: "2. Assign Items",
        description: "Our AI digitizes the bill. Just tap to assign items to friends.",
    },
    {
        icon: <CreditCard size={48} className="text-primary" />,
        title: "3. Settle Up",
        description: "Everyone sees what they owe. Settle up in a few taps.",
    }
]

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 sm:py-32 bg-secondary/30">
        <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center">
                Three Simple Steps
            </h2>
            <p className="md:w-3/4 mx-auto mt-4 mb-16 text-xl text-muted-foreground text-center">
                From cluttered receipt to settled bill in under a minute.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {steps.map((step) => (
                    <Card key={step.title} className="bg-background border-border text-center">
                        <CardHeader>
                            <div className="mx-auto flex items-center justify-center mb-4">{step.icon}</div>
                            <CardTitle className="text-2xl">{step.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="text-muted-foreground">
                            {step.description}
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    </section>
  )
}

export default HowItWorks;
