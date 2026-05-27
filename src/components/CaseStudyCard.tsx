import { motion } from 'framer-motion';
import { useState } from 'react';
import Tag from './Tag';
import WorkflowShowcase from './WorkflowShowcase';

interface CaseStudyCardProps {
  caseStudy: {
    id: number;
    title: string;
    context: string;
    goal: string;
    tools: string[];
    process: string;
    output: string;
    learning: string;
    images?: string[];
    showWorkflow?: boolean;
  };
}

export default function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = caseStudy.images || [];
  const hasImages = images.length > 0;
  const showWorkflow = caseStudy.showWorkflow;

  const nextImage = () => {
    if (!hasImages) return;
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    if (!hasImages) return;
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToImage = (index: number) => {
    if (!hasImages) return;
    setCurrentImageIndex(index);
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-shadow duration-300"
    >
      <div className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-medium text-white bg-accent/80 px-2 py-1 rounded">
            {String(caseStudy.id).padStart(2, '0')}
          </span>
          <h3 className="text-lg font-semibold text-primary">
            {caseStudy.title}
          </h3>
        </div>
      </div>

      {showWorkflow ? (
        <div className="mx-6">
          <WorkflowShowcase />
        </div>
      ) : hasImages ? (
        <div className="relative mx-6 rounded-xl overflow-hidden bg-slate-100 aspect-video">
          <div className="absolute inset-0 flex items-stretch">
            {images.map((image, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-full relative"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: index === currentImageIndex ? 1 : 0,
                  x: `${(index - currentImageIndex) * 100}%`,
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                style={{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  width: '100%',
                  height: '100%',
                }}
              >
                <img
                  src={image}
                  alt={`${caseStudy.title} - ${index + 1}`}
                  className="w-full h-full object-contain"
                />
              </motion.div>
            ))}
          </div>

          {images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-2 md:left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/30 backdrop-blur-[1px] flex items-center justify-center shadow-sm border border-border"
              >
                <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={nextImage}
                className="absolute right-2 md:right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/30 backdrop-blur-[1px] flex items-center justify-center shadow-sm border border-border"
              >
                <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToImage(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentImageIndex 
                        ? 'w-6 bg-accent' 
                        : 'bg-white/60 hover:bg-white/80'
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </>
          )}

          {images.length > 1 && (
            <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/40 backdrop-blur-sm text-xs text-white">
              {currentImageIndex + 1} / {images.length}
            </div>
          )}
        </div>
      ) : (
        <div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 relative mx-6 rounded-xl overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 rounded-2xl bg-white/80 backdrop-blur border border-border flex items-center justify-center shadow-sm">
              <svg className="w-10 h-10 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
        </div>
      )}

      <div className="p-6">
        <p className="text-sm text-secondary mb-4 leading-relaxed">
          {caseStudy.goal}
        </p>

        {!showWorkflow && (
          <div className="flex flex-wrap gap-2">
            {caseStudy.tools.map((tool) => (
              <Tag key={tool} label={tool} />
            ))}
          </div>
        )}
      </div>
    </motion.article>
  );
}
