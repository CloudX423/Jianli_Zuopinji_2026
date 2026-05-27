import { motion } from 'framer-motion';

interface MarketingNoteCardProps {
  note: {
    id: number;
    title: string;
    content: string;
  };
}

function MarketingNoteCard({ note }: MarketingNoteCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="bg-white rounded-xl p-6 border border-border"
    >
      <div className="flex items-start gap-3 mb-3">
        <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
          <svg className="w-3 h-3 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        </div>
        <h3 className="font-semibold text-primary">{note.title}</h3>
      </div>
      <p className="text-sm text-secondary leading-relaxed">{note.content}</p>
    </motion.div>
  );
}

export default function MarketingNotes() {
  const notes = [
    {
      id: 1,
      title: 'Social Media as E-commerce Touchpoint',
      content: 'Social media isn\'t a separate skill category—it\'s a continuation of the e-commerce customer journey. From product discovery to trust building to conversion, social content serves specific marketing functions at each stage.',
    },
    {
      id: 2,
      title: 'AI as Production Leverage',
      content: 'AI tools accelerate content production but don\'t replace strategic judgment. The value lies in using AI for ideation, drafting, and iteration while keeping human oversight for quality, brand fit, and performance calibration.',
    },
    {
      id: 3,
      title: 'Turning Product Information into Testable Content',
      content: 'Product features become content when connected to customer needs. A structured approach—extract value propositions, define target intent, choose content formats—creates testable hypotheses rather than guesswork.',
    },
    {
      id: 4,
      title: 'Platform Language vs. Product Language',
      content: 'Successful e-commerce content bridges product language and platform language. The product says what it does; the content shows why it matters in the context where the customer encounters it.',
    },
    {
      id: 5,
      title: 'Repeatable Systems for E-commerce Growth',
      content: 'Scalable content isn\'t about producing more—it\'s about building systems that produce consistently. Template-based workflows, automated pipelines, and structured approval processes reduce variation and increase output quality.',
    },
  ];

  return (
    <section className="py-16 px-6 bg-[#FAFAFA]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary">AI Content & Marketing Systems</h2>
        </motion.div>
        
        <div className="grid grid-cols-1 gap-6">
          {notes.map((note) => (
            <MarketingNoteCard key={note.id} note={note} />
          ))}
        </div>
      </div>
    </section>
  );
}
