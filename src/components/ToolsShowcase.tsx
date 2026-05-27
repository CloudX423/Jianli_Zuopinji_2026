import { motion } from 'framer-motion';
import CodeSnippet from './CodeSnippet';
import { toolShowcase } from '../data/content';

export default function ToolsShowcase() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Tools & Process Showcase</h2>
          <p className="text-secondary max-w-2xl">
            Visual documentation of production workflows, media outputs, and automation systems 
            that support e-commerce content production.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {toolShowcase.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {item.type === 'video' && (
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl overflow-hidden aspect-video relative group">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur flex items-center justify-center group-hover:scale-110 transition-transform cursor-pointer">
                      <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-xs text-white/70">Video Sample</span>
                  </div>
                </div>
              )}
              
              {item.type === 'image' && (
                <div className="bg-gradient-to-br from-teal-100 to-cyan-100 rounded-2xl overflow-hidden aspect-video relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="grid grid-cols-3 gap-2 p-8 w-full">
                      <div className="aspect-square bg-white rounded-lg shadow-sm" />
                      <div className="aspect-square bg-white rounded-lg shadow-sm" />
                      <div className="aspect-square bg-white rounded-lg shadow-sm" />
                      <div className="aspect-square bg-white rounded-lg shadow-sm" />
                      <div className="aspect-square bg-white rounded-lg shadow-sm" />
                      <div className="aspect-square bg-white rounded-lg shadow-sm" />
                    </div>
                  </div>
                </div>
              )}
              
              {item.type === 'screenshot' && (
                <div className="bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl overflow-hidden aspect-video relative border border-border">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-3 rounded-xl bg-white shadow-sm flex items-center justify-center">
                        <svg className="w-8 h-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <span className="text-xs text-secondary">CapCut Project</span>
                    </div>
                  </div>
                </div>
              )}
              
              {item.type === 'code' && (
                <CodeSnippet code={item.code || ''} caption={item.caption} />
              )}
              
              {item.type === 'workflow' && (
                <div className="bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl overflow-hidden aspect-video relative border border-border">
                  <div className="absolute inset-0 p-6">
                    <div className="h-full flex items-center justify-center">
                      <div className="flex items-center gap-4 flex-wrap justify-center">
                        <div className="px-4 py-2 bg-white rounded-lg shadow-sm text-xs font-medium text-primary">
                          Product Data
                        </div>
                        <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                        <div className="px-4 py-2 bg-accent text-white rounded-lg shadow-sm text-xs font-medium">
                          Python Pipeline
                        </div>
                        <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                        <div className="px-4 py-2 bg-white rounded-lg shadow-sm text-xs font-medium text-primary">
                          AI Drafts
                        </div>
                        <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                        <div className="px-4 py-2 bg-white rounded-lg shadow-sm text-xs font-medium text-primary">
                          Publish
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              <p className="text-sm text-secondary mt-3">{item.caption}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
