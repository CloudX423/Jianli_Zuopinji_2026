import { motion } from 'framer-motion';
import CaseStudyCard from './CaseStudyCard';
import { caseStudies } from '../data/content';

export default function FeaturedWork() {
  return (
    <section className="pt-8 pb-16 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary">Featured Work</h2>
        </motion.div>
        
        <div className="grid grid-cols-1 gap-8">
          {caseStudies.map((caseStudy) => (
            <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
          ))}
        </div>
      </div>
    </section>
  );
}
