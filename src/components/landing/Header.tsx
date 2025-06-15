
import { Button } from '@/components/ui/button';
import { toast } from "sonner";
import { Link } from 'react-router-dom';

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
          <Link to="/" className="flex items-center space-x-2">
            <img src="/lovable-uploads/604f5371-7766-4e6d-8cfb-b5611a9fd31b.png" alt="Expense+ Logo" className="h-10" />
            <span className="font-sora font-bold text-xl inline bg-gradient-to-r from-amber-400 to-orange-500 text-transparent bg-clip-text">
              Expense+
            </span>
          </Link>
        </div>
        <Button onClick={handleNotify} className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
          Get Notified
        </Button>
      </div>
    </header>
  );
};

export default Header;
