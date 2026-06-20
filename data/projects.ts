import type { Project } from '@/lib/types';

const projects: Project[] = [
  {
    slug: 'b2b-saas-cold-email-rebuild',
    title: 'B2B SaaS cold email rebuild',
    client: 'Series A SaaS company',
    industry: 'B2B software',
    engagementType: 'Outbound strategy and execution',
    categories: ['outbound', 'gtm'],
    thumbnail: '/images/placeholder-thumb.svg',
    videoUrl: '',
    oneLineResult: 'Reply rate from 1.2% to 4.8%',
    stats: [
      { value: '4.8%', label: 'Reply rate' },
      { value: '3.2×', label: 'Pipeline growth' },
    ],
    problem:
      'The sales team was sending hundreds of cold emails a week and getting almost no replies. Opens were decent but conversions to reply were below 1.5%. The sequences were generic — same message to everyone regardless of company size, role, or buying signals. Leadership was starting to question whether cold email worked at all.',
    solution:
      'Rebuilt the segmentation from scratch around three distinct ICP tiers, each with its own messaging hierarchy and call to action. Introduced a buying-signal trigger system using job postings and funding announcements to time outreach. Rewrote the sequence structure from five generic touches to a three-touch relevance-first approach. Trained the SDR team on personalisation at scale.',
    result:
      'Reply rate climbed from 1.2% to 4.8% in the first month of the new sequences going live. Pipeline from cold outbound more than tripled over the following quarter. The team is now running the updated system independently and the playbook has become the internal standard for all new SDR onboarding.',
    screenshot: '/images/placeholder-thumb.svg',
    testimonial: {
      quote:
        'Ahmer rebuilt our entire outbound motion in three weeks and it actually worked. We went from dreading the weekly pipeline review to having too many meetings on the calendar.',
      attribution: 'VP of Marketing, Series A SaaS company',
    },
    featured: true,
  },
  {
    slug: 'hvac-local-seo',
    title: 'Local SEO for a multi-location HVAC company',
    client: 'Multi-location HVAC company',
    industry: 'Home services',
    engagementType: 'Local SEO strategy and execution',
    categories: ['seo', 'local-seo'],
    thumbnail: '/images/placeholder-thumb.svg',
    videoUrl: '',
    oneLineResult: '+140% organic leads in six months',
    stats: [
      { value: '+140%', label: 'Organic leads' },
      { value: '#1', label: 'Map pack — primary service area' },
    ],
    problem:
      'A five-location HVAC company was invisible in local search. Their Google Business Profiles were unclaimed or badly maintained, they had zero local content, and their citations were riddled with NAP inconsistencies across directories. Competitors with weaker services were consistently outranking them in the map pack.',
    solution:
      'Audited and corrected all five GBP listings, standardised NAP data across 40+ citation sources, and built a location-page strategy with unique content for each service area. Implemented a review generation system and created a monthly GBP post schedule to signal activity. Layered in local schema markup across all location pages.',
    result:
      'Organic leads increased 140% in the first six months. The primary service area location reached the number one spot in the local map pack for their highest-value search terms and held it. The company has since expanded to a seventh location using the same local SEO framework built during this engagement.',
    screenshot: '/images/placeholder-thumb.svg',
    testimonial: {
      quote:
        "We were getting calls from the internet before, but nothing like this. Ahmer cleaned up our entire local presence and the phones haven't stopped since.",
      attribution: 'Owner, multi-location HVAC company',
    },
    featured: true,
  },
  {
    slug: 'hr-tech-content-seo',
    title: 'Content-led SEO for an HR tech platform',
    client: 'HR technology SaaS',
    industry: 'HR software',
    engagementType: 'SEO strategy and content programme',
    categories: ['seo'],
    thumbnail: '/images/placeholder-thumb.svg',
    videoUrl: '',
    oneLineResult: '+310% organic traffic, 47 first-page rankings',
    stats: [
      { value: '+310%', label: 'Organic traffic' },
      { value: '47', label: 'First-page rankings' },
    ],
    problem:
      "The platform had been publishing blog content for two years with almost nothing to show for it in search. The site had under 200 monthly organic visitors. Content was being written without keyword research, targeting broad head terms the company had no chance of ranking for, and there was no internal linking strategy connecting any of it.",
    solution:
      'Ran a full content audit and pruned or consolidated 30+ underperforming articles. Built a topic cluster model around the five core pain points the platform solves, with pillar pages targeting category-level terms and supporting articles targeting long-tail variants. Introduced a product-led content layer covering comparison and alternative queries. Set up a proper internal linking structure across all existing and new content.',
    result:
      'Organic traffic grew 310% over 9 months. The site now holds 47 first-page rankings across its core topic clusters, including the number one position for three high-intent category terms. The content programme is now run in-house using the framework and editorial calendar built during the engagement.',
    screenshot: '/images/placeholder-thumb.svg',
    testimonial: {
      quote:
        "Before Ahmer, our blog felt like shouting into a void. He completely changed how we think about content — it's a growth channel now, not just a marketing cost.",
      attribution: 'Head of Marketing, HR tech SaaS',
    },
    featured: true,
  },
  {
    slug: 'msp-outbound-gtm',
    title: 'Outbound GTM programme for a managed services provider',
    client: 'Managed services provider',
    industry: 'IT managed services',
    engagementType: 'GTM strategy and outbound programme build',
    categories: ['outbound', 'gtm'],
    thumbnail: '/images/placeholder-thumb.svg',
    videoUrl: '',
    oneLineResult: '2.1× meeting rate, 18 new enterprise clients',
    stats: [
      { value: '2.1×', label: 'Meeting rate' },
      { value: '18', label: 'New enterprise clients' },
    ],
    problem:
      'A 50-person MSP had grown entirely through referrals and had never built a proactive outbound motion. They wanted to expand into mid-market accounts but had no ICP definition, no sequences, and no experience with cold outreach. The founder was personally handling all sales conversations with no system behind them.',
    solution:
      'Defined three ICP tiers by company size, industry verticals with high MSP dependency, and tech stack signals indicating underservice. Built a multi-touch outbound sequence for each tier with LinkedIn, email, and direct mail touchpoints. Set up Apollo for prospecting and HubSpot for pipeline tracking. Ran four weeks of live coaching with the founder on discovery calls and objection handling.',
    result:
      "18 new enterprise clients signed over the following two quarters, representing the largest revenue expansion in the company's history. The meeting booking rate more than doubled. The founder handed off day-to-day sales management to a dedicated account executive hired to run the new pipeline using the built playbook.",
    screenshot: '/images/placeholder-thumb.svg',
    testimonial: {
      quote:
        'We had never done outbound before and honestly were scared to try. Ahmer built the whole thing for us and coached us through it. The results spoke for themselves.',
      attribution: 'Founder, managed services provider',
    },
    featured: true,
  },
  {
    slug: 'plumbing-seo-recovery',
    title: 'Algorithm recovery for a regional plumbing franchise',
    client: 'Regional plumbing franchise',
    industry: 'Home services',
    engagementType: 'Technical SEO audit and recovery',
    categories: ['seo'],
    thumbnail: '/images/placeholder-thumb.svg',
    videoUrl: '',
    oneLineResult: '+85% traffic recovered, 2.4× lead volume',
    stats: [
      { value: '+85%', label: 'Traffic recovered' },
      { value: '2.4×', label: 'Lead volume' },
    ],
    problem:
      'A plumbing franchise dropped 60% of its organic traffic in a single Google core update. The loss wiped out the majority of their inbound leads and the team had no idea why it had happened or where to start fixing it.',
    solution:
      'Ran a full technical and content audit. Identified thin content on 40+ service pages, aggressive keyword stuffing in title tags and headers, and a pattern of duplicate content across franchise location pages that was confusing crawlers. Rewrote the top 20 highest-traffic pages to E-E-A-T standards, built proper canonicalisation across location pages, and fixed crawlability issues flagged in Search Console.',
    result:
      'Traffic recovered 85% over five months and exceeded the pre-update baseline by the seventh month. Lead volume from organic search grew 2.4× compared to the period before the update, in part because the new content had stronger conversion signals throughout.',
    screenshot: '/images/placeholder-thumb.svg',
    testimonial: {
      quote:
        "The drop felt catastrophic at the time. Ahmer diagnosed what happened, fixed it methodically, and got us back stronger than we were before. It was the best decision we made that year.",
      attribution: 'Marketing manager, regional plumbing franchise',
    },
    featured: false,
  },
  {
    slug: 'b2b-positioning-overhaul',
    title: 'Positioning overhaul for a B2B software company',
    client: 'B2B software company',
    industry: 'B2B software',
    engagementType: 'Positioning and messaging strategy',
    categories: ['positioning', 'gtm'],
    thumbnail: '/images/placeholder-thumb.svg',
    videoUrl: '',
    oneLineResult: '+28% close rate, 3 new enterprise logos',
    stats: [
      { value: '+28%', label: 'Close rate improvement' },
      { value: '3', label: 'New enterprise logos' },
    ],
    problem:
      'The company had a strong product but was losing deals to competitors with weaker feature sets. Exit interviews with lost prospects consistently mentioned confusion about what the product actually did versus alternatives. Sales reps were describing it differently in every call. The website home page could have been copied from any of twelve competitors.',
    solution:
      'Ran a three-week discovery sprint: interviewed eight current customers on why they bought, reviewed six months of lost deal notes, and audited the positioning of the top five competitors. From this, developed a category POV, a three-layer messaging hierarchy (company/product/feature), and a revised homepage narrative. Ran two rounds of message testing with the existing customer base before finalising.',
    result:
      "Close rate improved 28% in the quarter after the new positioning went live. Three enterprise-tier deals that had stalled were re-engaged with the new narrative and closed. The sales team reported more consistent, confident conversations and a clear reduction in 'we'll think about it' responses.",
    screenshot: '/images/placeholder-thumb.svg',
    testimonial: {
      quote:
        'We knew something was wrong with our messaging but could not put our finger on it. Ahmer ran the research, found the problem, and built us something the whole team could actually use. The impact was immediate.',
      attribution: 'CEO, B2B software company',
    },
    featured: true,
  },
  {
    slug: 'franchise-local-seo-expansion',
    title: 'Local SEO for a franchise expanding into new markets',
    client: 'Franchise home services brand',
    industry: 'Home services',
    engagementType: 'Local SEO — new market launch',
    categories: ['seo', 'local-seo'],
    thumbnail: '/images/placeholder-thumb.svg',
    videoUrl: '',
    oneLineResult: '11 of 14 new locations in top-3 map pack',
    stats: [
      { value: '+190%', label: 'Calls from Google' },
      { value: '11/14', label: 'Locations in top-3 map pack' },
    ],
    problem:
      'A franchise brand opened 14 new locations in one calendar year and none of them were showing up in local search. Each new location was essentially invisible online for their first three to four months, losing the early momentum that matters most for a new market entry.',
    solution:
      "Built a repeatable local launch playbook: new GBP claimed and optimised on day one of opening, location page live before the doors opened, citations submitted to the top 40 directories within the first week, and a review acquisition campaign targeting the first 30 customers. Trained the franchise operations team to run the playbook independently for each new opening.",
    result:
      '11 of the 14 new locations reached a top-3 map pack position within the first 90 days, compared to the historical average of 6–9 months. Calls from Google increased 190% across the new location portfolio compared to equivalent locations launched in the prior year.',
    screenshot: '/images/placeholder-thumb.svg',
    testimonial: {
      quote:
        "We've opened dozens of new locations over the years and always struggled with the 'invisible period' at the start. Ahmer's playbook cut that down to almost nothing.",
      attribution: 'VP of Operations, franchise home services brand',
    },
    featured: false,
  },
  {
    slug: 'enterprise-sdr-programme',
    title: 'Enterprise SDR programme for a SaaS company',
    client: 'Enterprise SaaS, 200+ employee target accounts',
    industry: 'B2B software',
    engagementType: 'Outbound programme design and SDR coaching',
    categories: ['outbound'],
    thumbnail: '/images/placeholder-thumb.svg',
    videoUrl: '',
    oneLineResult: '+41% qualified pipeline, 4.2× SDR productivity',
    stats: [
      { value: '+41%', label: 'Qualified pipeline' },
      { value: '4.2×', label: 'SDR productivity' },
    ],
    problem:
      'A five-person SDR team was hitting activity metrics but generating very little qualified pipeline. Each rep was running their own improvised outreach with no standardised approach to ICP targeting, sequencing, or call frameworks. Ramp time for new SDRs was four to five months and manager coaching was ad hoc.',
    solution:
      'Designed a structured SDR playbook covering ICP definition, territory assignment, sequence library (six approved templates by persona), call talk tracks, and objection-handling guides. Set up a weekly coaching cadence with listening sessions and live call reviews. Rebuilt the qualification criteria in HubSpot to distinguish between MQLs and genuinely sales-ready SQLs.',
    result:
      'Qualified pipeline increased 41% over the following quarter without adding headcount. SDR-to-meeting conversion improved 4.2× from baseline. New reps now ramp in under six weeks using the standardised playbook. Two of the five SDRs were promoted to account executive roles using skills developed during the coaching engagement.',
    screenshot: '/images/placeholder-thumb.svg',
    testimonial: {
      quote:
        "Ahmer figured out in two weeks what we couldn't figure out in two years — our SDRs weren't the problem, the system was. He fixed the system.",
      attribution: 'Sales Director, enterprise SaaS company',
    },
    featured: false,
  },
  {
    slug: 'marketing-automation-saas-seo',
    title: 'SEO and content engine for a marketing automation SaaS',
    client: 'Marketing automation SaaS',
    industry: 'Martech',
    engagementType: 'SEO strategy and content programme',
    categories: ['seo', 'gtm'],
    thumbnail: '/images/placeholder-thumb.svg',
    videoUrl: '',
    oneLineResult: '+220% trial signups from organic, 62% conversion lift',
    stats: [
      { value: '+220%', label: 'Trial signups from organic' },
      { value: '+62%', label: 'Conversion rate from organic' },
    ],
    problem:
      'The company was generating a lot of organic traffic from top-of-funnel informational content but almost none of it was converting to trials. Visitors would read a blog post and leave. The site had no bottom-of-funnel content, no comparison pages, and no content designed to support a buying decision.',
    solution:
      "Ran a full funnel content audit and mapped each piece of existing content to a stage in the buyer journey. Built out a bottom-of-funnel content layer: alternative pages targeting competitor brand terms, comparison pages for the top five competing tools, and use-case pages targeting high-intent queries. Implemented strategic CTAs and in-content trial prompts calibrated to each content type. Introduced internal linking from top-of-funnel content to the new conversion-focused pages.",
    result:
      'Organic trial signups increased 220% over 8 months. Conversion rate from organic visitors improved 62%, meaning the traffic the company already had was being used more effectively. The alternative and comparison pages now account for 34% of all trial signups from the site despite representing under 10% of total page count.',
    screenshot: '/images/placeholder-thumb.svg',
    testimonial: {
      quote:
        "We were generating traffic but it wasn't doing anything for the business. Ahmer built the content that actually converts and it transformed how we think about SEO as a channel.",
      attribution: 'Growth Lead, marketing automation SaaS',
    },
    featured: false,
  },
];

export default projects;
