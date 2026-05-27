const hero = {
  name: 'Cloud Xia',
  title: 'Digital Media Specialist',
  tagline: 'E-commerce Social Media Content & AI-assisted Marketing Workflows',
  supporting: 'Building e-commerce social media content through AI-assisted production workflows, digital media creation, and performance-aware marketing thinking.',
};

interface CaseStudy {
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
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: 'AI Content Automation Workflow',
    context: 'E-commerce brand needed to scale video content production across multiple social platforms while maintaining consistency.',
    goal: 'Built an AI-driven content automation system that transforms publicly available video data into multi-platform-ready content (video, image, and text) through API-based sourcing and structured workflows, significantly improving content production efficiency and scalability.',
    tools: ['Python', 'API integration', 'AI automation workflows', 'CapCut', 'Photoshop'],
    process: 'Product input → AI content direction → Video production → Platform adaptation',
    output: 'Series of short-form videos optimized for TikTok, Instagram Reels, and YouTube Shorts',
    learning: 'AI tools accelerate ideation and script drafting, but human judgment remains essential for tone calibration and brand fit.',
    images: ['/Case01_01A.jpg', '/Case01_02.jpeg', '/Case01_03.jpeg'],
  },
  {
    id: 2,
    title: 'Link → Video Automation',
    context: 'New product launch required a comprehensive visual content library for multi-channel distribution.',
    goal: 'Built an automated system that converts product links into short-form video content using structured content logic, enabling efficient transformation from product information to platform-ready media with dynamic visuals and optimized presentation for social distribution.',
    tools: ['Coze (workflow automation)', 'Content automation pipelines'],
    process: 'Product information → Visual concept → Content creation → Multi-format export',
    output: 'Complete visual asset library with platform-specific versions',
    learning: 'Starting with product value propositions rather than features improves content relevance across all touchpoints.',
    images: ['/Case02_01.jpg', '/Case02_02.jpeg', '/Case02_03.jpeg'],
  },
  {
    id: 3,
    title: 'Hybrid Video Production System',
    context: 'Brand needed to establish an in-house video production capability using mobile-first tools.',
    goal: 'Developed a hybrid content production system combining structured editing workflows with AI-generated animation (Coze), enabling flexible and scalable short-form video production across multiple content formats.',
    tools: ['Coze (AI workflow automation)', 'CapCut', 'Photoshop'],
    process: 'Concept → Capture → Edit → Review → Publish',
    output: 'Standardized template library and editing workflow documentation',
    learning: 'Mobile video tools have matured enough for professional output when paired with proper planning and templates.',
    images: ['/Case03_01.jpg', '/Case03_02.jpg', '/Case03_03.jpg'],
  },
  {
    id: 4,
    title: 'Product Guide WebApp',
    context: 'Existing content needed to be adapted across different social platforms with varying requirements.',
    goal: 'Designed a product recommendation system that structures product selection logic into a guided digital experience, improving user decision-making and supporting product discovery through simplified content presentation.',
    tools: ['Coze (workflow automation)', 'User flow design', 'Visual design (Photoshop)'],
    process: 'Core content → Platform analysis → Adaptation → Scheduling',
    output: 'Content calendar with platform-optimized versions',
    learning: 'Platform-specific adaptation beats cross-posting. Each platform has distinct language, timing, and format preferences.',
    images: ['/Case04_01.jpg', '/Case04_02.jpg', '/Case04_03.jpg'],
  },
  {
    id: 5,
    title: 'Content Growth System',
    context: 'Manual content creation was creating bottlenecks in the marketing workflow.',
    goal: 'I design practical content-to-conversion growth workflows for SME and early-stage brands — connecting content, distribution, conversion, and data into structured systems built for small teams to execute and iterate.',
    tools: ['Python', 'AI Workflow', 'E-commerce', 'Social Media'],
    process: 'Product data → Python processing → AI drafting → Human review → Publish',
    output: 'Automated content draft generation system',
    learning: 'Automation handles volume; human oversight ensures quality and brand alignment. The pipeline multiplies output without replacing judgment.',
    showWorkflow: true,
  },
];

const processSteps = [
  {
    step: 1,
    label: 'Product Input',
    description: 'Gather product information, value propositions, and target audience insights.',
  },
  {
    step: 2,
    label: 'Content Direction',
    description: 'Define content strategy, format choices, and platform priorities based on marketing goals.',
  },
  {
    step: 3,
    label: 'Media Production',
    description: 'Create visual and video content using AI-assisted workflows and creative tools.',
  },
  {
    step: 4,
    label: 'Review & Refine',
    description: 'Quality check, platform optimization, and performance-aware adjustments.',
  },
];

const toolShowcase = [
  {
    id: 1,
    type: 'video',
    caption: 'Short-form video sample optimized for e-commerce social touchpoints',
  },
  {
    id: 2,
    type: 'image',
    caption: 'Product visual content set with platform adaptations',
  },
  {
    id: 3,
    type: 'screenshot',
    caption: 'CapCut project workflow showing template-based production',
  },
  {
    id: 4,
    type: 'code',
    caption: 'Python automation for content draft generation',
    code: `def prepare_product_prompts(product_data):
    """Transform product info into AI prompt-ready format."""
    prompts = []
    for item in product_data:
        value_prop = extract_value_proposition(item)
        tone = match_brand_tone(item.category)
        prompts.append({
            'product_id': item.id,
            'prompts': generate_content_prompts(value_prop, tone),
            'platforms': get_target_platforms(item)
        })
    return prompts`,
  },
  {
    id: 5,
    type: 'workflow',
    caption: 'AI-assisted content production pipeline overview',
  },
];

const marketingNotes = [
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

const closing = {
  statement: 'Turning product information into social media content systems for e-commerce growth.',
  footer: 'Cloud Xia · Digital Media Specialist · Auckland',
};

export {
  hero,
  caseStudies,
  processSteps,
  toolShowcase,
  marketingNotes,
  closing,
};
