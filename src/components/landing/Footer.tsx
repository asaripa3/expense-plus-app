
const Footer = () => {
  return (
    <footer id="footer" className="border-t border-border/40 py-8">
        <div className="container flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <div>
                <a href="/" className="flex items-center space-x-2">
                    <img src="/lovable-uploads/604f5371-7766-4e6d-8cfb-b5611a9fd31b.png" alt="Expense+ Logo" className="h-8" />
                </a>
            </div>
            <p className="text-sm text-muted-foreground mt-4 md:mt-0">
                &copy; {new Date().getFullYear()} Expense+. All rights reserved.
            </p>
        </div>
    </footer>
  );
};

export default Footer;
