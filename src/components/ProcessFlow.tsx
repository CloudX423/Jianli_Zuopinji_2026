import { motion } from 'framer-motion';
import { processSteps } from '../data/content';

export default function ProcessFlow() {
  return (
    <section className="py-24 px-6 bg-surface">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Production Process</h2>
          <p className="text-secondary max-w-2xl mx-auto">
            A structured approach from product information to publishable social media content, 
            connecting product value with platform requirements.
          </p>
        </motion.div>
        
        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2" />
          <div className="hidden md:block absolute top-1/2 left-[12.5%] right-[12.5%] h-0.5 bg-accent/30 -translate-y-1/2" />
          
          <div className="grid md:grid-cols-4 gap-8 relative">
            {processSteps.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="md:bg-white p-6 rounded-2xl border border-border md:border-0 md:shadow-sm">
                  <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-accent text-white font-bold text-lg mb-4 mx-auto">
                    {item.step}
                  </div>
                  
                  <div className="md:hidden flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-accent text-white font-bold text-sm flex items-center justify-center">
                      {item.step}
                    </div>
                    <div className="flex-1 h-0.5 bg-accent/30" />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-primary mb-2 text-center md:text-left">
                    {item.label}
                  </h3>
                  <p className="text-sm text-secondary text-center md:text-left">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-white rounded-2xl p-8 border border-border"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
              <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="text-sm font-semibold text-primary">Connected System</span>
          </div>
          <p className="text-secondary text-sm leading-relaxed">
            This workflow connects product value propositions, social media platform language, 
            visual output requirements, and e-commerce marketing goals. Each step informs the next, 
            creating a continuous loop from product input to performance data.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
