import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const workflowSteps = [
  {
    label: "01 / Discover",
    title: "Identify demand signals early to reduce creative guesswork and improve content decisions.",
    execution: [
      "Monitor emerging topics and audience discussions with OpenClaw",
      "Validate demand through Google Trends, TikTok Creative Center, Meta Ad Library, and marketplace reviews",
      "Prioritize signals by repetition, engagement intensity, and commercial intent"
    ],
    deliverables: ["Ranked demand opportunities", "Verified audience pain points", "Testable content angles"]
  },
  {
    label: "02 / Create",
    title: "Turn one product message into multiple creative hypotheses for testing.",
    execution: [
      "Break product value into messaging angles: hook, problem, outcome, and proof",
      "Generate creative variants across scripts, visuals, and narrative structures",
      "Use AI for iteration speed, while manually filtering for clarity, positioning, and intent"
    ],
    deliverables: ["Hypothesis-based scripts", "Multi-variant creative tests", "Platform-ready assets"]
  },
  {
    label: "03 / Distribute",
    title: "Test content across platforms instead of simply publishing it.",
    execution: [
      "Adapt content into native formats for TikTok, Instagram, Facebook, Pinterest, Shopify, and Amazon using structured distribution workflows",
      "Run organic distribution and paid creative tests in parallel",
      "Adjust format and framing based on platform behavior and early engagement signals"
    ],
    deliverables: ["Multi-platform distribution plan", "Organic + paid test sets", "Platform-optimized variants"]
  },
  {
    label: "04 / Convert",
    title: "Design content with clear conversion paths, not just engagement goals.",
    execution: [
      "Connect content to landing pages, DM flows, email capture, and CRM follow-up",
      "Segment audiences by engagement signals and purchase intent",
      "Build follow-up flows for retargeting, nurturing, and repeat purchase behavior"
    ],
    deliverables: ["Conversion paths", "Audience segments", "Retargeting and follow-up flows"]
  },
  {
    label: "05 / Optimize",
    title: "Use performance data to decide what to scale, refine, or stop.",
    execution: [
      "Track views, retention, engagement depth, CTR, conversions, and CAC",
      "Compare creative variants by message angle, not just by post",
      "Feed winning patterns into the next content cycle"
    ],
    deliverables: ["Validated creative patterns", "Performance-based targeting insights", "Next test priorities"]
  }
];

const StageButton = ({
  step,
  index,
  isActive,
  onClick
}: {
  step: typeof workflowSteps[0],
  index: number,
  isActive: boolean,
  onClick: () => void
}) => {
  const colors = ['#9be15d', '#f2c14e', '#ff6b4a', '#8b5cf6', '#315cff'];
  const color = colors[index];

  return (
    <button
      onClick={onClick}
      onMouseEnter={onClick}
      className={`
        relative grid min-h-[108px] p-4 cursor-pointer text-left
        transition-all duration-180 ease rounded-lg
        ${isActive 
          ? 'bg-white/95 border-white/54 text-[#121417] shadow-[0_20px_46px_rgba(0,0,0,0.22)] -translate-y-1' 
          : 'bg-white/[0.065] border-white/[0.11] text-white/90 hover:bg-white/95 hover:text-[#121417] hover:-translate-y-1'
        }
      `}
      style={{ '--stage-color': color } as React.CSSProperties}
    >
      <div className="absolute top-4 right-4 w-2 h-2 rounded-full opacity-36" style={{ backgroundColor: color }} />
      <div className="flex items-center justify-between gap-3">
              <span className={`text-sm font-black ${isActive ? 'text-[#315cff]' : 'text-white/54'}`}>
                {String(index + 1).padStart(2, '0')}
              </span>
              <div className="mr-2">
                <StageIcon index={index} />
              </div>
            </div>
            <strong className="text-lg font-semibold mt-3 block leading-tight">
              {step.label.split(' / ')[1]}
            </strong>
    </button>
  );
};

const StageIcon = ({ index }: { index: number }) => {
  const icons = [
    // Discover
    <svg key={0} viewBox="0 0 24 24" aria-hidden="true" className="w-6 h-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8">
      <circle cx="11" cy="11" r="6"></circle>
      <path d="m16 16 5 5"></path>
      <path d="M8 11h6"></path>
    </svg>,
    // Create
    <svg key={1} viewBox="0 0 24 24" aria-hidden="true" className="w-6 h-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8">
      <path d="M12 3 9.6 8.2 4 9l4.1 4-1 5.7 4.9-2.7 4.9 2.7-1-5.7L20 9l-5.6-.8L12 3Z"></path>
    </svg>,
    // Distribute
    <svg key={2} viewBox="0 0 24 24" aria-hidden="true" className="w-6 h-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8">
      <path d="M22 2 11 13"></path>
      <path d="m22 2-7 20-4-9-9-4 20-7Z"></path>
    </svg>,
    // Convert
    <svg key={3} viewBox="0 0 24 24" aria-hidden="true" className="w-6 h-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
      <circle cx="9" cy="7" r="4"></circle>
      <path d="M22 21v-2a4 4 0 0 0-3-3.9"></path>
      <path d="M16 3.1a4 4 0 0 1 0 7.8"></path>
    </svg>,
    // Optimize
    <svg key={4} viewBox="0 0 24 24" aria-hidden="true" className="w-6 h-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8">
      <path d="M3 12a9 9 0 0 1 15-6.7"></path>
      <path d="M18 3v6h-6"></path>
      <path d="M21 12a9 9 0 0 1-15 6.7"></path>
      <path d="M6 21v-6h6"></path>
    </svg>
  ];
  return icons[index];
};

export default function WorkflowShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeStep = workflowSteps[activeIndex];

  const handleStageClick = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  return (
    <div className="relative w-full">
      <style>{`
        :root {
          --paper: #f4f1e8;
          --paper-2: #e9edf2;
          --ink: #121417;
          --muted: #66706b;
          --line: rgba(18, 20, 23, 0.12);
          --panel: #101419;
          --panel-2: #171e24;
          --blue: #315cff;
          --green: #9be15d;
          --coral: #ff6b4a;
          --gold: #f2c14e;
          --violet: #8b5cf6;
          --white: #fffdfa;
        }
        
        @keyframes metricPulse {
          0%, 100% { opacity: 0.38; transform: scaleX(0.78); transform-origin: left; }
          50% { opacity: 1; transform: scaleX(1); }
        }
        
        @keyframes feedbackFlow {
          from { stroke-dashoffset: 0; }
          to { stroke-dashoffset: -704; }
        }
      `}</style>

      <div className="relative w-full grid gap-3.5 p-4 md:p-5 overflow-hidden rounded-xl"
        style={{
          background: `linear-gradient(135deg, rgba(49, 92, 255, 0.18), transparent 32%), linear-gradient(315deg, rgba(155, 225, 93, 0.18), transparent 28%), var(--panel)`,
          border: '1px solid rgba(18, 20, 23, 0.22)',
          boxShadow: '0 14px 45px rgba(18, 20, 23, 0.14)'
        }}
      >
        {/* Background pattern overlay */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: `linear-gradient(90deg, rgba(255, 255, 255, 0.06) 1px, transparent 1px) 0 0 / 38px 38px, linear-gradient(0deg, rgba(255, 255, 255, 0.045) 1px, transparent 1px) 0 0 / 38px 38px`,
          maskImage: 'linear-gradient(180deg, black, transparent 82%)',
          WebkitMaskImage: 'linear-gradient(180deg, black, transparent 82%)'
        }} />

        {/* Top labels - hidden on mobile */}
        <div className="relative z-10 hidden md:grid md:grid-cols-5 gap-3.5 px-2 text-[0.68rem] font-black uppercase text-white/[0.46]">
          <span>Signal</span>
          <span>Content</span>
          <span>Channel</span>
          <span>Customer</span>
          <span>Learning</span>
        </div>

        {/* Mobile stage buttons */}
        <div className="relative z-10 flex flex-col items-center justify-center gap-3 pb-4 md:hidden">
          <div className="flex justify-center items-center gap-3">
            {workflowSteps.map((_, index) => {
              const colors = ['#9be15d', '#f2c14e', '#ff6b4a', '#8b5cf6', '#315cff'];
              const color = colors[index];
              return (
                <button
                  key={index}
                  onClick={() => handleStageClick(index)}
                  className={`
                    w-9 h-9 rounded-full flex items-center justify-center
                    text-sm font-bold transition-all duration-200
                    ${index === activeIndex
                      ? 'bg-white text-[#121417] shadow-lg scale-110'
                      : 'bg-white/10 text-white/60 hover:bg-white/20'
                    }
                  `}
                  style={index === activeIndex ? { backgroundColor: color } : {}}
                >
                  {String(index + 1).padStart(2, '0')}
                </button>
              );
            })}
          </div>
          <p className="text-white/70 text-sm font-semibold text-center mt-1.5">
            {workflowSteps[activeIndex].label.split(' / ')[1]}
          </p>
        </div>

        {/* Desktop stage rail - hidden on mobile */}
        <div className="relative z-10 hidden md:grid md:grid-cols-5 gap-2.5 pb-8">
          {/* Progress bar */}
          <div className="absolute right-8 left-8 bottom-3 h-1 rounded-full" style={{
            background: `linear-gradient(90deg, var(--green) 0 ${activeIndex * 25}%, rgba(255, 255, 255, 0.14) ${activeIndex * 25}% 100%)`,
            transition: 'background 220ms ease'
          }} />
          {/* Active indicator */}
          <div className="absolute bottom-1.5 w-4 h-4 rounded-full border-4" style={{
            backgroundColor: '#9be15d',
            borderColor: '#101419',
            left: `calc(32px + (100% - 64px) * ${activeIndex / 4})`,
            transform: 'translateX(-50%)',
            boxShadow: '0 0 0 8px rgba(155, 225, 93, 0.18)',
            transition: 'left 220ms ease'
          }} />

          {workflowSteps.map((step, index) => (
            <StageButton
              key={index}
              step={step}
              index={index}
              isActive={index === activeIndex}
              onClick={() => handleStageClick(index)}
            />
          ))}
        </div>

        {/* Detail board */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0.42, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="relative z-10 grid grid-cols-1 gap-5.5 items-start min-h-[220px] md:min-h-[300px] p-4 md:p-8 overflow-hidden rounded-lg"
            style={{
              background: `linear-gradient(135deg, rgba(255, 253, 250, 0.96), rgba(255, 253, 250, 0.84)), var(--white)`,
              border: '1px solid rgba(255, 255, 255, 0.52)'
            }}
          >
            <div className="hidden md:block absolute top-5 right-5.5 h-px" style={{
              width: 'min(30vw, 310px)',
              background: 'linear-gradient(90deg, transparent, rgba(18, 20, 23, 0.28))'
            }} />

            <div className="relative mb-3 -mt-2">
              <p className="max-w-[730px] text-[#121417] font-medium leading-tight text-base md:text-lg">
                {activeStep.title}
              </p>
            </div>

            <div className="grid gap-2">
              <div className="p-4 bg-black/[0.045] border border-black/[0.1] rounded-lg grid gap-2.5">
                <span className="text-[#315cff] text-[0.74rem] font-black uppercase tracking-normal">
                  Execution
                </span>
                <div className="grid gap-1.5">
                  {activeStep.execution.map((item, i) => (
                    <p key={i} className="flex items-start gap-3 min-h-[46px] py-2.5 px-2.5 text-[0.8rem] font-bold text-[#121417] bg-white/[0.8] border border-black/[0.08] rounded-lg leading-relaxed">
                      {item}
                      <span className="w-1.75 h-1.75 rounded-full bg-[#315cff] flex-shrink-0 mt-2" style={{ width: '7px', height: '7px' }} />
                    </p>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-black/[0.045] border border-black/[0.1] rounded-lg grid gap-2.5">
                <span className="text-[#315cff] text-[0.74rem] font-black uppercase tracking-normal">
                  Deliverables
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-1.5">
                  {activeStep.deliverables.map((item, i) => (
                    <p key={i} className="flex items-center justify-center gap-3 min-h-8 py-1.5 px-2.5 text-center text-[0.8rem] font-bold text-[#121417] bg-white/[0.8] border border-black/[0.08] rounded-lg">
                      {item}
                    </p>
                  ))}
                </div>
              </div>

              <div className="hidden md:grid md:grid-cols-[1.1fr_0.7fr_1.4fr_0.92fr] gap-1.75 h-2.25">
                {[0, 1, 2, 3].map((i) => (
                  <span key={i} className="block rounded-full" style={{
                    background: 'linear-gradient(90deg, var(--blue), var(--green))',
                    animation: `metricPulse 1.9s ease-in-out infinite ${i * 120}ms`
                  }} />
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Loop thread SVG */}
        <svg className="absolute right-5.5 bottom-4 left-5.5 z-0 w-[calc(100%-44px)] h-30 pointer-events-none hidden md:block" viewBox="0 0 1120 190" preserveAspectRatio="none" aria-hidden="true">
          <path className="thread-base" d="M1030 22 C1110 168 120 170 88 42" fill="none" stroke="rgba(255, 255, 255, 0.1)" strokeLinecap="round" strokeWidth="3" />
          <path d="M1030 22 C1110 168 120 170 88 42" fill="none" stroke="#9be15d" strokeLinecap="round" strokeWidth="3" style={{
            strokeDasharray: '44 660',
            animation: 'feedbackFlow 3.1s linear infinite'
          }} />
        </svg>
      </div>
    </div>
  );
}
