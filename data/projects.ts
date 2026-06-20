import type { Project } from '@/lib/types';

const projects: Project[] = [
  {
    slug: 'techling-head-of-growth',
    title: 'Building a B2B Growth Engine from Scratch',
    client: 'Techling.ai',
    industry: 'Software development / AI services, United States',
    engagementType: 'Head of Growth',
    categories: ['positioning', 'gtm', 'outbound'],
    thumbnail: '/images/placeholder-thumb.svg',
    videoUrl: '',
    oneLineResult: 'Built an entire B2B growth engine from scratch and held $149.5K in open pipeline',
    stats: [
      { value: '$149.5K', label: 'Open sales pipeline' },
      { value: '8,000', label: 'CEO LinkedIn followers grown' },
    ],
    problem:
      'When I joined, Techling relied on untrained sales reps and inconsistent Upwork leads, with little outbound success and no clear positioning.',
    solution:
      'I built the growth engine end to end: defined mission, vision, USP, and ICPs (healthcare, edtech, mobility AI), repositioned the company, rebuilt the website, grew the CEO\'s personal brand, launched the Techling Healthcare sub-brand, set up cold email and LinkedIn outreach, and implemented HubSpot CRM.',
    result:
      'The redesign generated 10 to 15 qualified leads in the first month, the founder brand reached 1.4M impressions, and the pipeline held $149.5K in open deal value across 17 active leads, with multiple five-figure deals closed.',
    screenshot: '/images/placeholder-thumb.svg',
    testimonial: {
      quote:
        'Working with Ahmer at Techling has been an exceptional experience. As our Head of Growth, he played a crucial role in building our entire digital and marketing infrastructure from the ground up. He built and scaled our marketing channels across content, email, and paid media, and set up robust outbound systems that allowed us to consistently reach and convert high-quality leads.',
      attribution: 'Muhammad Akif, CEO, Techling.ai',
    },
    featured: true,
  },
  {
    slug: 'techling-ceo-personal-brand',
    title: "Growing a Founder's LinkedIn to 8,000 Followers",
    client: 'Techling.ai (CEO Muhammad Akif)',
    industry: 'Software development / AI services, United States',
    engagementType: 'Personal brand strategy',
    categories: ['positioning'],
    thumbnail: '/images/placeholder-thumb.svg',
    videoUrl: '',
    oneLineResult: "Grew a founder's LinkedIn from near zero to 8,000 targeted followers and 1.4M impressions",
    stats: [
      { value: '8,000', label: 'Targeted followers grown' },
      { value: '1.4M', label: 'Impressions generated' },
    ],
    problem:
      'To position Techling as a thought leader in AI and software, the CEO needed a targeted audience and real engagement with decision-makers, starting from almost nothing.',
    solution:
      'I cleaned his connections to match the ICP, built a content calendar and posted daily across formats (stories, insights, carousels, case studies), iterated using data, and engaged strategically with influencers and ICP accounts.',
    result:
      'Grew the profile from near zero to 8,000 targeted followers in 12 months, with 1.4M total impressions, 14,000+ engagements, and some posts passing 750,000 impressions.',
    screenshot: '/images/placeholder-thumb.svg',
    testimonial: {
      quote:
        'Working with Ahmer at Techling has been an exceptional experience. As our Head of Growth, he played a crucial role in building our entire digital and marketing infrastructure from the ground up. He built and scaled our marketing channels across content, email, and paid media, and set up robust outbound systems that allowed us to consistently reach and convert high-quality leads.',
      attribution: 'Muhammad Akif, CEO, Techling.ai',
    },
    featured: true,
  },
  {
    slug: 'logeix-cold-email',
    title: 'A Multi Six-Figure Pipeline in Three Months',
    client: 'Logeix',
    industry: 'Shopify SEO agency, United Kingdom',
    engagementType: 'Cold email outbound',
    categories: ['outbound'],
    thumbnail: '/images/placeholder-thumb.svg',
    videoUrl: '',
    oneLineResult: 'Built a multi six-figure sales pipeline in three months through cold email',
    stats: [
      { value: 'Multi 6-figure', label: 'Sales pipeline built' },
      { value: '10%', label: 'Response rate' },
    ],
    problem:
      'Logeix needed a robust sales pipeline built through cold email, with deliverability as the central challenge in a landscape of strict spam filters.',
    solution:
      "I ran targeted cold email campaigns for their e-commerce ICP, researched market pain points to tailor messaging to Logeix's value proposition, maintained a clean prospect database, and tracked the pipeline in a CRM.",
    result:
      'Built a multi six-figure pipeline in three months with up to 70% open and 10% response rates, bringing in high-value clients and surpassing targets.',
    screenshot: '/images/placeholder-thumb.svg',
    testimonial: {
      quote:
        "Ahmer knows his stuff when it comes to cold emailing. We signed multiple clients while working together and fully delegated the work to him with minimal communication needed.",
      attribution: 'Daryl Rosser, Logeix',
    },
    featured: true,
  },
  {
    slug: 'syntech-cold-email',
    title: 'A Six-Figure Pipeline for a Local SEO Agency',
    client: 'Syntech Digital',
    industry: 'SEO / digital marketing agency',
    engagementType: 'Cold email outbound',
    categories: ['outbound'],
    thumbnail: '/images/placeholder-thumb.svg',
    videoUrl: '',
    oneLineResult: 'Built a six-figure pipeline and signed 10+ clients for a local SEO agency through cold email',
    stats: [
      { value: '6-figure', label: 'Sales pipeline built' },
      { value: '10+', label: 'Clients signed' },
    ],
    problem:
      'Syntech needed a reliable way to generate qualified leads and book meetings to grow its client base.',
    solution:
      'I set up the email infrastructure and records for deliverability, cleaned and segmented lead lists to prequalified prospects, loaded campaigns into automation tools, wrote the copy, and managed replies and follow-ups.',
    result:
      'Campaigns hit up to 70% open and 5% response rates with 15 to 25% positive replies, built a six-figure pipeline, and signed 10+ clients in six months.',
    screenshot: '/images/placeholder-thumb.svg',
    testimonial: null,
    featured: true,
  },
  {
    slug: 'hadley-watch-bands-seo',
    title: '5x Organic Traffic for a US Watch-Band Store',
    client: 'Hadley',
    industry: 'E-commerce (watch accessories), United States',
    engagementType: 'SEO strategy and execution',
    categories: ['seo'],
    thumbnail: '/images/placeholder-thumb.svg',
    videoUrl: '',
    oneLineResult: 'Grew organic traffic 5x and doubled organic keywords for a US watch-band store that relied entirely on paid ads',
    stats: [
      { value: '5x', label: 'Organic traffic growth' },
      { value: '2x', label: 'Organic keyword growth' },
    ],
    problem:
      'Hadley made good sales but every sale came from a single paid channel (Facebook Ads). They had almost no non-branded keywords ranking and very little organic traffic, leaving a large amount of potential untapped.',
    solution:
      'I audited the site (no prior SEO foundation existed), ran competitor and keyword research, then handled on-page work: keyword mapping, structure changes, meta and heading optimization, image alt tags, and content for thin category pages. I also fixed coverage issues, added a sitemap and schema, and managed the crawl budget.',
    result:
      'The store built an organic search presence for the first time, grew traffic 5x and keywords 2x, and reduced its dependence on paid ads.',
    screenshot: '/images/placeholder-thumb.svg',
    testimonial: null,
    featured: true,
  },
  {
    slug: 'mpm-google-penalty-recovery',
    title: 'Recovering a Real Estate Site from a Google Penalty',
    client: 'Metropolitan Property Management',
    industry: 'Real estate / property management, United States',
    engagementType: 'SEO audit and recovery',
    categories: ['seo', 'local-seo'],
    thumbnail: '/images/placeholder-thumb.svg',
    videoUrl: '',
    oneLineResult: 'Recovered a real estate site from a Google penalty and restored 400% of its organic traffic',
    stats: [
      { value: '400%', label: 'Organic traffic growth' },
      { value: '120%', label: 'Organic keyword growth' },
    ],
    problem:
      "MPM had lost up to 60% of its keyword base, with organic traffic on a continuous decline. The previous local SEO agency could not identify the cause, and the site kept losing rankings.",
    solution:
      "I diagnosed the drop as a hit from Google's December 2021 update, confirmed there was no manual penalty in Search Console, then ran a content audit (the update targeted content) and fixed the major content issues driving the decline.",
    result:
      'The site recovered from the update, regained 120% in organic keywords and 400% in organic traffic, and got de-indexed pages indexed again.',
    screenshot: '/images/placeholder-thumb.svg',
    testimonial: null,
    featured: true,
  },
  {
    slug: 'craft-online-ecommerce-seo',
    title: 'Organic SEO Growth for a Craft Superstore',
    client: 'Craft Online',
    industry: "E-commerce (arts and crafts), Australia",
    engagementType: 'SEO strategy and execution',
    categories: ['seo'],
    thumbnail: '/images/placeholder-thumb.svg',
    videoUrl: '',
    oneLineResult: "Grew organic traffic 40% and doubled organic keywords for Australia's largest online craft store",
    stats: [
      { value: '40%', label: 'Organic traffic growth' },
      { value: '2x', label: 'Organic keyword growth' },
    ],
    problem:
      'Craft Online was investing heavily in SEO with a previous agency but had a narrow keyword base, low organic traffic, and weak visibility. Their previous agency used outdated tactics and gave poor reporting, so they were not getting the ROI they expected.',
    solution:
      'I ran a full SEO audit and competitor analysis, then mapped keywords to every page, rebuilt meta tags and URL structures, fixed heading and image tags, and added content to thin pages. On the technical side I fixed coverage and crawl issues, optimized internal linking, added schema, and improved Core Web Vitals.',
    result:
      'Organic traffic and keyword rankings grew significantly, letting the client diversify their sales channels and reduce reliance on paid ads. Search visibility improved across the store.',
    screenshot: '/images/placeholder-thumb.svg',
    testimonial: null,
    featured: false,
  },
  {
    slug: 'techling-programmatic-seo',
    title: 'Building an Organic Channel from Scratch with Programmatic SEO',
    client: 'Techling.ai',
    industry: 'Software development / AI services, United States',
    engagementType: 'Programmatic SEO and local search',
    categories: ['seo', 'local-seo'],
    thumbnail: '/images/placeholder-thumb.svg',
    videoUrl: '',
    oneLineResult: 'Took organic impressions from near zero to 60,000+ by building an SEO channel from scratch',
    stats: [
      { value: '60,000+', label: 'Organic impressions' },
      { value: '700+', label: 'Organic clicks' },
    ],
    problem:
      'Techling ran on an outdated website with generic, borrowed content and relied on outbound alone. There was no organic acquisition channel and little search visibility.',
    solution:
      'After launching a new brand-aligned site, I fixed technical issues (speed, broken links, crawlability), set up local listings and Google Business Profiles across target US markets, and used programmatic SEO to generate pages for niche AI-related and local keywords.',
    result:
      'Organic impressions grew from near zero to 60,000+ with 700+ clicks, mostly from priority markets (US, UAE, Saudi Arabia), ranking for branded and non-branded terms.',
    screenshot: '/images/placeholder-thumb.svg',
    testimonial: {
      quote:
        'Working with Ahmer at Techling has been an exceptional experience. As our Head of Growth, he played a crucial role in building our entire digital and marketing infrastructure from the ground up. He built and scaled our marketing channels across content, email, and paid media, and set up robust outbound systems that allowed us to consistently reach and convert high-quality leads.',
      attribution: 'Muhammad Akif, CEO, Techling.ai',
    },
    featured: false,
  },
  {
    slug: 'arken-cold-email',
    title: 'Cold Outbound Built from Scratch for a UK SEO Agency',
    client: 'Arken Digital',
    industry: 'SEO agency, Bristol, United Kingdom',
    engagementType: 'Cold email outbound',
    categories: ['outbound'],
    thumbnail: '/images/placeholder-thumb.svg',
    videoUrl: '',
    oneLineResult: 'Built a cold outbound engine from scratch that delivered a steady stream of qualified leads',
    stats: [
      { value: '5–7%', label: 'Response rate' },
      { value: '15–25%', label: 'Positive reply rate' },
    ],
    problem:
      "Arken, an SEO agency for budget-conscious SMBs, needed to reach local UK businesses and book meetings to support sales growth, with no outbound system in place.",
    solution:
      'I built the outbound system end to end: set up email accounts and DNS records (SPF, DKIM, DMARC), built and segmented ICP lead lists, wrote personalized sequences, monitored inbox placement, and handled responses and handoffs.',
    result:
      'Campaigns achieved 5 to 7% response and 15 to 25% positive reply rates (around 1 positive reply per 80 emails), creating a scalable, repeatable system that produced steady qualified leads.',
    screenshot: '/images/placeholder-thumb.svg',
    testimonial: null,
    featured: false,
  },
  {
    slug: 'plus-social-cold-email',
    title: 'Cold Email for an Australian E-commerce Agency',
    client: 'Plus Social',
    industry: 'E-commerce marketing agency, Australia',
    engagementType: 'Cold email outbound',
    categories: ['outbound'],
    thumbnail: '/images/placeholder-thumb.svg',
    videoUrl: '',
    oneLineResult: 'Built a predictable cold email pipeline for an Australian e-commerce agency, with up to 70% open rates',
    stats: [
      { value: '70%', label: 'Email open rate' },
      { value: '15–25%', label: 'Positive reply rate' },
    ],
    problem:
      'Plus Social needed to connect with Australian e-commerce businesses and book meetings to fuel its sales pipeline, with no outbound system set up.',
    solution:
      'I built the cold outreach system from the ground up: email accounts and DNS records (SPF, DKIM, DMARC) for deliverability, cleaned and segmented lead lists, personalized copy, deliverability monitoring, and reply management.',
    result:
      'Campaigns reached up to 70% open, 5% response, and 15 to 25% positive reply rates, establishing a predictable and scalable outbound channel.',
    screenshot: '/images/placeholder-thumb.svg',
    testimonial: null,
    featured: false,
  },
  {
    slug: 'viralfire-outbound',
    title: 'Booking Meetings for a UGC Marketing Agency',
    client: 'Viral Fire',
    industry: 'UGC / TikTok marketing agency, United States',
    engagementType: 'Multi-channel outbound',
    categories: ['outbound'],
    thumbnail: '/images/placeholder-thumb.svg',
    videoUrl: '',
    oneLineResult: 'Booked 20+ meetings in a month for a UGC and TikTok marketing agency',
    stats: [
      { value: '20+', label: 'Meetings booked' },
      { value: '$33K', label: 'Pipeline generated' },
    ],
    problem:
      'Viral Fire needed qualified meetings booked through outbound to grow its client base.',
    solution:
      'I set up cold outreach across cold email, LinkedIn, and Twitter, built ICPs by niche, and ran the campaigns and infrastructure from scratch.',
    result:
      'Booked 20+ meetings in a month, generating around $33K in pipeline.',
    screenshot: '/images/placeholder-thumb.svg',
    testimonial: null,
    featured: false,
  },
  {
    slug: 'techling-cold-email',
    title: 'A Cold Email Engine for an AI Software Company',
    client: 'Techling.ai',
    industry: 'Software development / AI services, United States',
    engagementType: 'Cold email outbound',
    categories: ['outbound'],
    thumbnail: '/images/placeholder-thumb.svg',
    videoUrl: '',
    oneLineResult: 'Generated 24 qualified leads worth $30K in ACV from a cold email channel built from scratch',
    stats: [
      { value: '24', label: 'Qualified leads generated' },
      { value: '$30K', label: 'ACV of generated leads' },
    ],
    problem:
      'Techling relied on passive Upwork leads and had no outbound channel, limiting its ability to reach high-value clients in niche AI markets.',
    solution:
      'I set up the email infrastructure (domains, DNS, warm-up), built workflows in Smartlead integrated with Apollo and enrichment tools, scraped and verified leads (Reoon, Voila Norbert, BounceBan, LeadMagic), and A/B tested industry-specific offers.',
    result:
      'The channel hit a 5% reply rate with 7% positive replies and under 2% bounce, generating 24 qualified leads worth around $30K ACV and reducing dependence on Upwork.',
    screenshot: '/images/placeholder-thumb.svg',
    testimonial: {
      quote:
        'Working with Ahmer at Techling has been an exceptional experience. As our Head of Growth, he played a crucial role in building our entire digital and marketing infrastructure from the ground up. He built and scaled our marketing channels across content, email, and paid media, and set up robust outbound systems that allowed us to consistently reach and convert high-quality leads.',
      attribution: 'Muhammad Akif, CEO, Techling.ai',
    },
    featured: false,
  },
  {
    slug: 'techling-linkedin-outreach',
    title: '50+ Meetings from Founder-Led LinkedIn Outreach',
    client: 'Techling.ai',
    industry: 'Software development / AI services, United States',
    engagementType: 'LinkedIn outbound',
    categories: ['outbound'],
    thumbnail: '/images/placeholder-thumb.svg',
    videoUrl: '',
    oneLineResult: 'Held 50+ qualified meetings through founder-led LinkedIn outreach at a 27% reply rate',
    stats: [
      { value: '50+', label: 'Qualified meetings held' },
      { value: '27%', label: 'Reply rate' },
    ],
    problem:
      'Techling needed qualified, high-ticket AI and ML deals across EdTech, SaaS, retail, and healthcare, without relying on paid ads.',
    solution:
      "I designed and ran LinkedIn outreach from the CEO's profile, sourced high-intent leads via Sales Navigator and engagement data, automated outreach with HeyReach while keeping personalization, and aligned it with the content strategy.",
    result:
      'Reached 2,000+ qualified leads with a 30% connection acceptance rate and 27% reply rate, held 50+ qualified meetings, and closed multiple five-figure deals.',
    screenshot: '/images/placeholder-thumb.svg',
    testimonial: {
      quote:
        'Working with Ahmer at Techling has been an exceptional experience. As our Head of Growth, he played a crucial role in building our entire digital and marketing infrastructure from the ground up. He built and scaled our marketing channels across content, email, and paid media, and set up robust outbound systems that allowed us to consistently reach and convert high-quality leads.',
      attribution: 'Muhammad Akif, CEO, Techling.ai',
    },
    featured: false,
  },
  {
    slug: 'techling-healthcare-brand',
    title: 'Launching a Healthcare Sub-Brand on LinkedIn',
    client: 'Techling Healthcare (Director Muhammad Ammar)',
    industry: 'Healthcare AI, United States',
    engagementType: 'Brand launch and positioning',
    categories: ['positioning'],
    thumbnail: '/images/placeholder-thumb.svg',
    videoUrl: '',
    oneLineResult: 'Launched a healthcare sub-brand and drove 10+ qualified leads through a new director\'s LinkedIn',
    stats: [
      { value: '866', label: 'Followers grown from zero' },
      { value: '10+', label: 'Qualified healthcare leads' },
    ],
    problem:
      'To build credibility in healthcare AI, Techling needed a dedicated brand and a director\'s profile that could attract healthcare founders, CTOs, and innovation leads from scratch.',
    solution:
      'I created the brand identity and content voice, built a LinkedIn content strategy for healthcare decision-makers, posted consistent thought leadership, and directed engagement with the ICP and relevant creators.',
    result:
      'Built the director\'s profile from 0 to 866 followers in 90 days, with 35,000+ impressions, 1,400+ engagements, 1,200+ profile viewers, and 10+ qualified healthcare leads.',
    screenshot: '/images/placeholder-thumb.svg',
    testimonial: {
      quote:
        "What sets Ahmer apart is not just his expertise, but his work ethic and dedication. He's proactive, detail-oriented, and deeply committed to delivering results.",
      attribution: 'Muhammad Ammar, Director, Techling Healthcare',
    },
    featured: false,
  },
];

export default projects;
