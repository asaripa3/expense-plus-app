
import { Button } from '@/components/ui/button';
import { toast } from "sonner";

const Header = () => {
  const handleNotify = () => {
    toast.success("You're on the list!", {
      description: "We'll notify you as soon as Expense+ launches.",
    });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <div className="flex items-center space-x-2">
          <img src="/lovable-uploads/c95faf3d-014d-418f-9470-3be4ce6a3af7.png" alt="Expense+ Logo" className="h-10" />
        </div>
        <Button onClick={handleNotify} className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
          Get Notified
        </Button>
      </div>
    </header>
  );
};

export default Header;
