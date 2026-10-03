export interface ServiceProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface Service {
  id: string;
  slug: string;
  number: string;
  title: string;
  description: string;
  introduction: string;
  capabilities: string[];
  process: ServiceProcessStep[];
  businessValue: string;
  faq: ServiceFAQ[];
}

export const services: Service[] = [
  {
    id: "web-development",
    slug: "web-development",
    number: "01",
    title: "Web Development",
    description: "We build fast, responsive, and visually stunning websites that convert visitors into customers. From landing pages to complex web applications.",
    introduction: "Your website is the digital foundation of your business. We engineer high-performance, responsive websites that don't just look beautiful—they are built to drive conversions, establish trust, and scale with your growth. From corporate sites to complex web applications, we focus on clean code, seamless user experiences, and SEO-first architecture.",
    capabilities: [
      "Corporate & Business Websites",
      "E-commerce Platforms (Shopify, Custom)",
      "Custom Web Applications",
      "High-Converting Landing Pages",
      "CMS Integration & Migration",
      "Performance Optimization & Auditing",
      "REST & GraphQL API Development",
      "Responsive, Mobile-First Development"
    ],
    process: [
      { step: "01", title: "Discovery", description: "We analyze your audience, competitors, and business objectives to define the technical requirements and project scope." },
      { step: "02", title: "Strategy & UX", description: "Wireframing user journeys that ensure seamless navigation and optimized conversion funnels." },
      { step: "03", title: "Design", description: "Crafting a premium, responsive visual identity that aligns perfectly with your brand's aesthetic." },
      { step: "04", title: "Development", description: "Writing clean, scalable code using modern frameworks like Next.js and React for blazing-fast performance." },
      { step: "05", title: "QA & Testing", description: "Rigorous testing across all devices, browsers, and network speeds to ensure a flawless experience." },
      { step: "06", title: "Launch & Support", description: "Smooth deployment followed by ongoing technical support and performance monitoring." }
    ],
    businessValue: "A slow or outdated website costs you customers every single day. By investing in a modern web architecture, you reduce bounce rates, improve search engine visibility, and provide a frictionless experience that turns casual visitors into loyal clients.",
    faq: [
      { question: "How long does a custom website project take?", answer: "A standard corporate website typically takes 4-6 weeks from discovery to launch. Complex web applications or e-commerce platforms can take 8-12 weeks depending on features." },
      { question: "What technologies do you use?", answer: "We specialize in modern JavaScript frameworks, primarily React and Next.js, combined with Tailwind CSS for styling. We also work with headless CMS platforms and robust backend technologies like Node.js." },
      { question: "Do you redesign existing websites?", answer: "Yes. We frequently audit and rebuild legacy websites to improve their design, performance, and SEO rankings." },
      { question: "Is SEO included in the development?", answer: "Absolutely. Technical SEO—including semantic HTML, fast load times, mobile responsiveness, and schema markup—is baked into our development process from day one." }
    ]
  },
  {
    id: "app-development",
    slug: "app-development",
    number: "02",
    title: "App Development",
    description: "Native and cross-platform mobile applications designed for performance and user experience. From concept to App Store.",
    introduction: "In a mobile-first world, your application needs to be intuitive, fast, and reliable. We design and develop native and cross-platform mobile apps that solve real business problems and engage users. We handle the entire lifecycle, from prototyping to App Store deployment.",
    capabilities: [
      "iOS Native Development",
      "Android Native Development",
      "Cross-Platform Apps (React Native, Flutter)",
      "UI/UX Mobile Design",
      "API Development & Integration",
      "Legacy App Modernization",
      "App Store Optimization (ASO)",
      "Ongoing Maintenance & Scaling"
    ],
    process: [
      { step: "01", title: "Concept & Planning", description: "Defining core features, target platforms, and the technical stack required for your application." },
      { step: "02", title: "Wireframing", description: "Mapping out the user flow to guarantee an intuitive mobile experience." },
      { step: "03", title: "UI/UX Design", description: "Creating pixel-perfect interfaces tailored for touch interactions and mobile constraints." },
      { step: "04", title: "Development", description: "Agile engineering with frequent milestones, ensuring performance and stability." },
      { step: "05", title: "Beta Testing", description: "Internal and external testing rounds to eliminate bugs and refine interactions." },
      { step: "06", title: "Deployment", description: "Managing the complex submission processes for the Apple App Store and Google Play Store." }
    ],
    businessValue: "A dedicated mobile app creates a direct marketing channel to your customers, builds unparalleled brand loyalty, and streamlines complex business processes into a convenient, accessible format.",
    faq: [
      { question: "Should I build a native or cross-platform app?", answer: "It depends on your requirements. Cross-platform (like React Native) is cost-effective and faster to market. Native is best for apps requiring deep device integration and maximum performance." },
      { question: "Will you help upload the app to the stores?", answer: "Yes, we handle the entire submission process for both the Apple App Store and Google Play, ensuring compliance with their guidelines." },
      { question: "Do you provide backend development for the app?", answer: "Yes. We develop scalable APIs, databases, and admin dashboards to manage your app's content and users." }
    ]
  },
  {
    id: "content-creation",
    slug: "content-creation",
    number: "03",
    title: "Content Creation",
    description: "Compelling content that tells your brand story. We create visuals, copy, and multimedia that captivate your audience.",
    introduction: "Great design is nothing without a compelling narrative. Our content creation services blend strategic copywriting, stunning photography, and high-quality video production to tell your brand's unique story. We produce assets that capture attention, communicate value, and drive action.",
    capabilities: [
      "Commercial Video Production",
      "Corporate & Lifestyle Photography",
      "SEO-Optimized Copywriting",
      "Social Media Content Production",
      "Brand Storytelling & Scripting",
      "Drone & Aerial Videography",
      "Animation & Motion Graphics",
      "Podcast & Audio Production"
    ],
    process: [
      { step: "01", title: "Briefing", description: "Understanding your brand voice, target demographic, and campaign goals." },
      { step: "02", title: "Pre-Production", description: "Scriptwriting, storyboarding, location scouting, and talent acquisition." },
      { step: "03", title: "Production", description: "Executing the shoot with professional equipment and experienced directors." },
      { step: "04", title: "Post-Production", description: "Editing, color grading, sound design, and visual effects." },
      { step: "05", title: "Copywriting", description: "Drafting compelling narratives that align perfectly with the visual assets." },
      { step: "06", title: "Delivery", description: "Providing formatted assets ready for web, social media, or broadcast." }
    ],
    businessValue: "High-quality original content elevates your perceived brand value, builds trust instantly, and provides the raw material needed to fuel successful marketing campaigns across every digital channel.",
    faq: [
      { question: "Do you shoot on location?", answer: "Yes, we handle on-location shoots throughout Lahore and across Pakistan, coordinating all necessary logistics." },
      { question: "Can you create content for social media?", answer: "Absolutely. We can produce short-form vertical video (Reels, TikToks) and high-end imagery specifically formatted for social platforms." },
      { question: "Do you write website copy?", answer: "Yes. Our copywriters specialize in writing persuasive, SEO-friendly content for corporate websites, landing pages, and e-commerce stores." }
    ]
  },
  {
    id: "product-shoot",
    slug: "product-shoot",
    number: "04",
    title: "Product Shoots",
    description: "Professional product photography and catalog management that showcases your products in the best possible light.",
    introduction: "In e-commerce, your imagery is your storefront. We provide premium product photography that highlights the texture, quality, and details of your merchandise. From crisp white-background catalog shots to creative lifestyle scenes, we create visuals that make your products irresistible.",
    capabilities: [
      "E-commerce Catalog Photography",
      "Creative Lifestyle Product Shoots",
      "360-Degree Product Views",
      "Macro & Detail Photography",
      "Food & Beverage Styling",
      "Fashion & Apparel Lookbooks",
      "High-End Retouching",
      "Amazon/Shopify Compliant Imagery"
    ],
    process: [
      { step: "01", title: "Consultation", description: "Determining the creative direction, styling needs, and platform requirements." },
      { step: "02", title: "Set Preparation", description: "Building custom sets, sourcing props, and perfecting the lighting setup." },
      { step: "03", title: "Shooting", description: "Capturing high-resolution images with precise attention to color accuracy and detail." },
      { step: "04", title: "Selection", description: "Collaborating with you to select the strongest images from the session." },
      { step: "05", title: "Retouching", description: "Meticulous post-processing to remove imperfections and enhance visual appeal." },
      { step: "06", title: "Formatting", description: "Delivering web-optimized files ready for immediate upload to your store." }
    ],
    businessValue: "Professional product photography directly impacts your bottom line. High-quality images reduce return rates by setting accurate expectations, justify premium pricing, and significantly increase e-commerce conversion rates.",
    faq: [
      { question: "Where do the product shoots take place?", answer: "We have a fully equipped studio in Lahore, but we can also arrange location shoots for lifestyle product imagery." },
      { question: "Can I mail my products to you?", answer: "Yes. Many of our clients ship their products to our studio. We shoot them and can either return them or donate them based on your preference." },
      { question: "Do you provide models for apparel shoots?", answer: "Yes, we can manage talent sourcing, makeup artists, and styling for fashion and apparel lookbooks." }
    ]
  },
  {
    id: "social-media",
    slug: "social-media",
    number: "05",
    title: "Social Media Management",
    description: "Strategic social media management that builds community, drives engagement, and strengthens your brand presence across platforms.",
    introduction: "Social media is where your audience lives, but standing out requires more than just posting. We develop and execute comprehensive social media strategies that build authentic communities, drive meaningful engagement, and turn followers into brand advocates.",
    capabilities: [
      "Social Media Strategy Development",
      "Visual Feed Curation & Branding",
      "Community Management & Engagement",
      "Influencer Outreach & Collaboration",
      "Monthly Content Calendars",
      "Analytics & Performance Reporting",
      "Social Listening & Trend Monitoring",
      "Platform-Specific Growth Tactics"
    ],
    process: [
      { step: "01", title: "Audit", description: "Analyzing your current presence, audience demographics, and competitor landscape." },
      { step: "02", title: "Strategy", description: "Defining content pillars, brand voice, and concrete growth objectives." },
      { step: "03", title: "Creation", description: "Designing visually striking posts and writing engaging captions." },
      { step: "04", title: "Scheduling", description: "Planning a consistent posting cadence using advanced management tools." },
      { step: "05", title: "Engagement", description: "Actively responding to comments, messages, and interacting with your community." },
      { step: "06", title: "Analysis", description: "Reviewing metrics monthly to double down on what works and pivot what doesn't." }
    ],
    businessValue: "A strong social presence humanizes your brand, keeps you top-of-mind, and provides a direct channel for customer feedback and loyalty building. It is a critical touchpoint in the modern consumer journey.",
    faq: [
      { question: "Which platforms do you manage?", answer: "We manage Instagram, LinkedIn, Facebook, TikTok, and Twitter (X). We recommend focusing on the platforms where your specific target audience is most active." },
      { question: "Do I need to provide the photos and videos?", answer: "You can, but we highly recommend utilizing our Content Creation service. The best social media results come from high-quality, custom-produced visuals." },
      { question: "How do you measure success?", answer: "We look beyond vanity metrics (likes). We track engagement rates, website click-throughs, audience growth, and ultimately, how social media contributes to your business goals." }
    ]
  },
  {
    id: "digital-marketing",
    slug: "digital-marketing",
    number: "06",
    title: "Digital Marketing",
    description: "Data-driven marketing strategies that maximize ROI. We reach your audience where they are with the right message.",
    introduction: "Visibility is only half the battle; profitability is the goal. Our digital marketing campaigns are strictly data-driven, focusing on maximizing your Return on Ad Spend (ROAS) and lowering your Customer Acquisition Cost (CAC). We place your brand exactly where your highest-intent customers are searching.",
    capabilities: [
      "Search Engine Optimization (SEO)",
      "Google Ads (PPC, Display, YouTube)",
      "Meta Ads (Facebook & Instagram)",
      "LinkedIn B2B Advertising",
      "Conversion Rate Optimization (CRO)",
      "Email Marketing & Automation",
      "Retargeting Campaigns",
      "Comprehensive Analytics Tracking"
    ],
    process: [
      { step: "01", title: "Research", description: "Deep diving into keyword data, audience targeting options, and competitor strategies." },
      { step: "02", title: "Planning", description: "Allocating budget across the most effective channels for your specific goals." },
      { step: "03", title: "Setup", description: "Configuring ad accounts, building landing pages, and implementing precise tracking pixels." },
      { step: "04", title: "Execution", description: "Launching targeted campaigns with compelling ad copy and creative assets." },
      { step: "05", title: "Optimization", description: "Continuous A/B testing of headlines, audiences, and creatives to lower costs." },
      { step: "06", title: "Reporting", description: "Providing transparent, easy-to-understand reports detailing exactly what you spent and what you earned." }
    ],
    businessValue: "Effective digital marketing turns your website into a predictable revenue engine. By targeting users based on intent and behavior, we ensure your marketing budget is invested, not just spent.",
    faq: [
      { question: "How long does it take to see results?", answer: "Paid advertising (Google/Meta Ads) can generate traffic and leads within days. Organic strategies like SEO typically take 3 to 6 months to show significant compounding growth." },
      { question: "What is a good advertising budget to start?", answer: "It depends on your industry and competition. We recommend a budget that allows for statistically significant testing—we can help you calculate this during a consultation." },
      { question: "Do I get a dedicated account manager?", answer: "Yes. You will have a direct line to a strategist who understands your campaigns and business objectives inside out." }
    ]
  },
  {
    id: "gbp-management",
    slug: "gbp-management",
    number: "07",
    title: "GBP Management",
    description: "Optimize your Google Business Profile to attract local customers and dominate local search results.",
    introduction: "For local businesses, your Google Business Profile (GBP) is often more important than your website. We optimize and manage your profile to ensure you appear in the highly coveted 'Local Pack' when potential customers search for your services in Lahore or your specific service area.",
    capabilities: [
      "Complete Profile Optimization",
      "Local Keyword Targeting",
      "Review Generation Strategies",
      "Review Monitoring & Responding",
      "Weekly GBP Post Updates",
      "Product & Service Listings",
      "Local Citation Building",
      "Spam Fighting (Reporting Fake Competitors)"
    ],
    process: [
      { step: "01", title: "Verification", description: "Claiming and verifying your business listing to establish ownership." },
      { step: "02", title: "Optimization", description: "Fleshing out every available field with SEO-optimized, accurate information." },
      { step: "03", title: "Content Upload", description: "Adding high-quality exterior, interior, and team photos to build trust." },
      { step: "04", title: "Strategy", description: "Implementing a system to consistently capture genuine 5-star reviews." },
      { step: "05", title: "Maintenance", description: "Posting regular updates, offers, and responding to Q&As to signal activity to Google." },
      { step: "06", title: "Tracking", description: "Monitoring map ranking positions and calls/directions generated from the profile." }
    ],
    businessValue: "Dominating local search drives high-intent foot traffic and phone calls directly to your business. A highly-rated, well-managed profile instantly establishes you as the premier choice in your geographical area.",
    faq: [
      { question: "Why is GBP management important?", answer: "Over 46% of all Google searches have local intent. If you aren't optimized for local search, you are handing customers directly to your competitors." },
      { question: "Can you guarantee a top 3 spot on the map?", answer: "No reputable agency can guarantee rankings. However, consistent optimization, strong review velocity, and accurate local citations drastically improve your chances of dominating the local pack." },
      { question: "Do you respond to negative reviews?", answer: "Yes. We work with you to craft professional, de-escalating responses to negative reviews, showing future customers that you care about their experience." }
    ]
  },
  {
    id: "printing-packaging",
    slug: "printing-packaging",
    number: "08",
    title: "Printing & Packaging",
    description: "Premium print materials and packaging design that make your brand tangible and memorable.",
    introduction: "In an increasingly digital world, physical touchpoints leave a lasting impression. We design and produce premium printing and packaging solutions that elevate your brand's physical unboxing experience and corporate collateral. We ensure your brand looks as impressive in someone's hands as it does on a screen.",
    capabilities: [
      "Custom Packaging Design",
      "Corporate Stationery (Business Cards, Letterheads)",
      "Brochures, Catalogs & Lookbooks",
      "Label & Sticker Design",
      "Large Format & Signage Graphics",
      "Premium Finishing (Foil, Emboss, Spot UV)",
      "Sustainable Packaging Solutions",
      "End-to-End Print Production Management"
    ],
    process: [
      { step: "01", title: "Concept", description: "Developing structural and visual concepts that align with your brand identity." },
      { step: "02", title: "Dielines & Layout", description: "Creating precise technical files ensuring perfect folds and accurate dimensions." },
      { step: "03", title: "Design", description: "Applying typography, colors, and graphics to the structural layout." },
      { step: "04", title: "Prototyping", description: "Reviewing physical mockups to test durability, fit, and visual appeal." },
      { step: "05", title: "Pre-Press", description: "Finalizing files for the printer, including bleed margins and color profiles." },
      { step: "06", title: "Production", description: "Liaising with top-tier print houses to ensure the final product matches our exacting standards." }
    ],
    businessValue: "Exceptional packaging justifies premium pricing, encourages social media sharing (unboxing videos), and serves as a silent ambassador for your brand long after the initial purchase.",
    faq: [
      { question: "Do you handle the actual printing, or just the design?", answer: "We provide end-to-end service. We design the assets and manage the production process with our trusted network of premium print partners in Lahore." },
      { question: "Can you help with eco-friendly packaging?", answer: "Yes. We can design for and source sustainable, biodegradable, and recycled materials for environmentally conscious brands." },
      { question: "What is the minimum order quantity (MOQ)?", answer: "MOQs vary drastically depending on the complexity of the packaging and the specific print finishing required. We will advise you on the most cost-effective quantities during consultation." }
    ]
  }
];
