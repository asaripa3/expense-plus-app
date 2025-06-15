
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "What is Expense+ and how is it different from other expense-splitting apps?",
    answer: "Expense+ is a smart bill-splitting app that automates itemized expense sharing. Unlike traditional apps that require you to enter amounts manually, Expense+ uses advanced receipt scanning to extract items, quantities, and prices automatically—ensuring each person pays only for what they consumed, including tax."
  },
  {
    question: "How does the app scan and split expenses from a bill?",
    answer: "Expense+ uses a machine learning model trained on 10,000+ real-world invoices to recognize items, prices, and quantities from scanned receipts or PDFs. Once scanned, you can assign items to group members, and the app calculates each person’s share with tax proportioning included."
  },
  {
    question: "Can I use Expense+ offline?",
    answer: "Yes! Expense+ is designed to work offline-first, so you can scan bills, split expenses, and manage your groups without an internet connection. All your data is stored locally on your device using secure storage."
  },
  {
    question: "Does Expense+ support splitting unequal quantities of shared items?",
    answer: "Absolutely. Expense+ offers both equal and unequal split modes, allowing you to input the exact quantity each person consumed—for example, if one person had two tacos and another had one, the app handles the math for you."
  },
  {
    question: "How do I track who owes whom after a split?",
    answer: "After each bill is split, Expense+ updates every group member’s balance. You’ll see a clear breakdown of who owes whom, how much, and for what. Once someone pays, you can mark the transaction as “settled.”"
  },
  {
    question: "Is my data secure?",
    answer: "Yes. All data is securely stored on your device. We do not collect or transmit your personal data. If cloud backup is enabled in future updates, it will be encrypted and privacy-first."
  },
  {
    question: "Can I export or share expense summaries?",
    answer: "Currently, summaries can be reviewed within the app. In upcoming updates, we plan to support PDF exports and group sharing features so you can send detailed reports to friends or keep a record."
  },
  {
    question: "Is Expense+ free to use? Will there be any premium features?",
    answer: "Yes, Expense+ is free to download and use. We plan to offer optional premium features in future updates (like multi-device sync and advanced analytics), but the core features will always remain free."
  }
];


const FAQ = () => {
  return (
    <section id="faq" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
        Frequently Asked{" "}
        <span className="bg-gradient-to-r from-amber-400 to-orange-500 text-transparent bg-clip-text">
          Questions
        </span>
      </h2>

      <Accordion type="single" collapsible className="w-full max-w-4xl mx-auto">
        {faqData.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`} className="border-b-0 mb-3">
            <AccordionTrigger className="text-left bg-secondary/50 border hover:no-underline rounded-xl p-4 text-base font-semibold">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="p-4 text-muted-foreground">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default FAQ;
