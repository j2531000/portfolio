// Content below is sourced from Yi Chen Cheng's résumé, plus feature specifics
// confirmed against the live product at kolr.ai (she owns the whole product).
// Fields left empty / marked TODO are NOT verified from either source — replace
// them with real case-study detail (screenshots, process notes, specific
// metrics) once available. Do not fill them with invented numbers or claims.

const PROJECTS = [
  {
    id: "ai-search-llm-ux",
    title: "AI-Powered Search & LLM Response UX",
    category: "AI Product Design",
    company: "iKala — Kolr AI",
    year: "2022 – Present",
    role: "Senior Product Designer",
    description:
      "Redesigned the AI-powered influencer search experience — result presentation, query handling states, AI-generated influencer summaries, and LLM response interfaces — alongside the influencer resource library.",
    image: "assets/cover-search.webp",
    tags: ["AI SaaS", "Search UX", "LLM", "B2B"],
    // DRAFT — written from product features on kolr.ai, customer testimonials
    // and résumé facts. Review every line against what actually happened.
    challenge:
      "Brand marketers were searching a database of 300M+ influencer profiles. Finding the right creator often felt like looking for a needle in a haystack: results kept surfacing the same familiar faces, and judging whether someone fit a brief meant opening profile after profile. The challenge was to make a huge, filter-heavy search feel guided and trustworthy — including for marketers new to influencer marketing — without hiding the depth that agencies and power users rely on.",
    solution:
      "I redesigned search around intent rather than filters alone. Users can start from any keyword, competitor, or product, and AI suggests related keywords and predicts what they are likely to look for. They can also simply chat with an AI assistant, which sets the filter conditions for them and recommends creators from a natural-language request.\n\nThe search itself is the product of several redesigns. Using Amplitude data on which filters people actually use, I moved the few most important filters out into the main view and collapsed the rest, so the common path is fast while the full set of nearly 30 filters stays one click away. A post-level search also lets users research content, not just creators.",
    impact: [
      { metric: "Influencer profiles searchable", value: "300M+" },
      { metric: "Filter conditions available", value: "~30" },
      {
        metric: "Faster workflow, search to outreach (customer-reported)",
        value: "75%",
      },
    ],
    process: [],
    highlights: [
      {
        title: "Nearly 30 filters, so the right creator is never out of reach",
        text: "Quick search suggests creators and categories as you type, Boolean keyword search (AND, OR, exclude, exact match, grouping) handles precise briefs, and filters for platform, audience profile, engagement and growth narrow it further. However specific the brief, there is a way to express it, and the most-used filters stay one click away. I also designed the query-handling states (loading, empty, refined results) so every search, however broad or narrow, gets a clear response.",
        image: "",
        images: ["assets/search-boolean.png", "assets/search-audience.png", "assets/search-quick.png"],
      },
      {
        title: "Not sure how to set the conditions? Just chat with AI",
        text: "Describe what you need in plain language. The AI assistant sets the matching filter conditions for you through conversation, or recommends creators directly from your natural-language request, so first-time users get relevant results without learning every filter first. I designed the LLM response interface so answers feel clear, scannable, and easy to correct, and each recommended creator carries an AI-written summary so fit can be judged at a glance.",
        image: "",
        images: ["assets/search-ai-assistant.png", "assets/search-ai-recommend.png"],
      },
      {
        title: "Three result views for faster shortlisting",
        text: "Switch between list, grid, and table views depending on the task: scanning profiles, judging content at a glance, or comparing metrics side by side.",
        image: "",
        images: ["assets/search-view-list.png", "assets/search-view-grid.png", "assets/search-view-table.png"],
      },
      {
        title: "Search posts to find creators by content style",
        text: "Look beyond profile numbers. Search posts directly and discover creators through the look and feel of the content they actually publish.",
        image: "",
        images: ["assets/search-posts-v2.png"],
      },
    ],
    gallery: [],
    keyFeatures: [],
    beforeAfter: null,
  },
  {
    id: "ai-competitor-analysis",
    title: "AI Competitor Analysis",
    category: "AI Product Design",
    company: "iKala — Kolr AI",
    year: "2022 – Present",
    role: "Senior Product Designer",
    description:
      "Designed Kolr's AI-powered competitor analysis tool — brand account analysis and keyword-mention analysis that let clients benchmark competitors' social performance and influencer strategy in one view.",
    image: "assets/cover-competitor.webp",
    tags: ["AI SaaS", "Competitive Intelligence", "B2B"],
    challenge:
      "Brands and agencies want to know how competitors use influencers: who they work with, how much attention those posts earn, and which brands share the same creators. That information is scattered across social platforms and normally has to be collected by hand or bought as a separate report for each brand, which also makes cross-brand comparison impossible. The challenge was to bring it together in one place, and to present several competing brands side by side without turning the screen into a wall of overlapping charts.",
    solution:
      "I designed the competitor analysis around two entry points: a brand account analysis and a keyword-mention analysis. Users pick a country, platform, time range, and up to ten brands, then compare them in one view. A trend chart shows how much each brand is mentioned over time, and selecting a point reveals that period's top post. Supporting views break mentions down by influencer tier (nano to mega), by influencer type, by hashtag, and by the top ten most-engaged posts with the mentioned brands marked. Brand colors, a clear legend, and an option to exclude official accounts keep a dense comparison readable.",
    impact: [
      { metric: "Brand and competitors compared in one view, instead of one report per brand", value: "1 view" },
      { metric: "Facebook, Instagram, and YouTube analyzed together", value: "3 platforms" },
      { metric: "Competitor accounts and keywords set by the user, no commissioned report", value: "Self-serve" },
    ],
    process: [],
    keyFeaturesImage: "assets/competitor-mentions.png",
    keyFeatures: [
      {
        title: "Brand account analysis",
        text: "Compare your brand's social performance with competitors' accounts on Facebook, Instagram, and YouTube through post-level trend charts, indicator graphs, and a hashtag word cloud. A mentions view shows how often each brand is mentioned and by which influencers, so growth after a collaboration can be measured against competitors.",
      },
      {
        title: "Keyword mention analysis",
        text: "Combine keywords with exact match, intersection, and union (for example a brand name AND an ingredient) to see the buzz around a product or topic. Trend charts compare mention performance across platforms, and breakdowns of influencer tiers and content types guide future collaborations.",
      },
    ],
    beforeAfter: null,
  },
  {
    id: "subscription-onboarding-redesign",
    title: "Subscription Plans & Credit Model",
    category: "Growth & Conversion",
    company: "iKala — Kolr AI",
    year: "2022 – Present",
    role: "Senior Product Designer",
    description:
      "Moved Kolr from unlimited-viewing plans to a monthly credit model, and redesigned the plans, cart, and in-product unlock moments to improve UX and conversion — driving a 300% increase in product revenue.",
    image: "assets/cover-pricing.webp",
    tags: ["Growth", "Pricing", "Conversion"],
    challenge:
      "Kolr's original plans were all-you-can-view: subscribers could open unlimited creator data. With a database of 300M+ profiles, that meant spending data resources keeping huge numbers of creators up to date, most of whom no one ever opened. The business needed to move to a monthly credit model, where each unlock uses a credit, without making existing and new users feel restricted.\n\nA subscription flow also has to do two jobs at once: make the value of each plan obvious, and make paying feel safe and effortless. For a B2B product sold to companies, agencies, and individual users, that meant handling usage limits, optional add-ons, promo codes, company invoices with tax IDs, and recurring billing, without overwhelming people who just want to upgrade.",
    solution:
      "I redesigned the plans around monthly credits. Instead of unlimited viewing, each plan includes a number of creator unlocks per month, so data resources go to the creators clients actually need. An upgrade page presents the plans side by side with a monthly, quarterly, and annual toggle that surfaces the discount, so the saving is visible before the decision.\n\nI designed the cart and checkout as a guided path: change plan and billing period, add optional extras such as Insight Report project dashboards, apply a promo code, and see a clear price breakdown with tax and a confirm-payment step before being charged. Inside the account, a subscription page shows the current plan, next billing date, remaining unlocks with a one-click way to buy more, saved payment method, and billing info.\n\nBeyond the pricing screens, I looked for the moments in the product where users run into a limit or show clear intent, and designed them either as gentle gates or as creator recommendations that invite a paid unlock, so upgrading happens exactly where the value is visible.",
    impact: [{ metric: "Product revenue", value: "+300%" }],
    process: [],
    highlights: [
      {
        title: "From unlimited viewing to monthly credits",
        text: "Plans are built around a monthly number of creator unlocks. They sit side by side with a monthly, quarterly, and annual toggle that shows the saving up front, so the value of each tier is clear before anyone decides.",
        image: "",
        images: ["assets/pricing-plans.png"],
      },
      {
        title: "Unlock prompts and creator recommendations, right where the need appears",
        text: "Instead of a blunt paywall, I designed the moments where users hit a limit or show clear intent: locked details that explain what an unlock gives, remaining-credit hints, and creator recommendations that invite a paid unlock.",
        image: "",
        images: ["assets/pricing-unlock-profile.png", "assets/pricing-unlock-prompts.png"],
      },
      {
        title: "A cart that makes paying feel safe",
        text: "Choose a plan and billing period, add optional extras such as Insight Report project dashboards, apply a promo code, and review a clear price breakdown with tax before confirming payment. Company invoice and individual billing options are both covered. The cart is not one screen but a family of states: new subscription, add-on only, plan change, charged now or at the next cycle, and with or without an existing Insight Report subscription, each with its own rules and messaging.",
        image: "",
        video: "assets/pricing-checkout-v4.mp4",
      },
      {
        title: "Managing the plan is as clear as signing up",
        text: "The subscription page shows the current plan, next billing date, remaining unlocks with a one-click way to buy more, the saved payment method, and billing info.",
        image: "",
        video: "assets/pricing-manage.mp4",
      },
    ],
    keyFeatures: [],
    beforeAfter: null,
  },
  {
    id: "campaign-management",
    title: "Campaign Management: Brand & Influencer Sides",
    category: "B2B2C Platform Design",
    company: "iKala — Kolr AI",
    year: "2022 – Present",
    role: "Senior Product Designer",
    description:
      "Designed both sides of influencer collaboration on Kolr: a brand-side workspace that manages each campaign like a project, tracking outreach progress, contract signing, go-live, and payment in one place, and a creator-side experience for carrying a collaboration from first message through to payment.",
    image: "assets/cover-campaign.webp",
    tags: ["B2B2C", "CRM", "Workflow"],
    challenge:
      "Influencer collaborations usually run through spreadsheets, chat threads, and email. On the brand side, contact details, quotes, and past experiences with a creator live in different places and leave with whoever managed the project. On the creator side, the picture is just as fragmented: each campaign means juggling messages, schedules, and contracts.\n\nDesigning for two audiences at once meant each side had to feel native to its own job while staying in sync with the other.",
    solution:
      "On the brand side, I designed a campaign workspace where everyone on a project can view and edit each creator's collaboration record in real time: contact information, quotes, notes, evaluations, and collaboration history, so experience with a creator is shared across the team and reusable in future campaigns. Creators can be added by pasting a social profile URL or imported from existing lists, then filtered by attributes and engagement metrics, with configurable display fields. Outreach emails can be sent to many selected creators in one click.\n\nOn the creator side, I designed the experience around two questions: how do I get from a campaign to getting paid with as little back-and-forth as possible? Creators authorize their accounts through each platform's official flow. Both sides create and sign contracts online, connect payment, and talk in a built-in chat room, so a collaboration runs from first message to payout in one place.",
    impact: [
      { value: "15,000+", metric: "Creators using Campaign" },
      { value: "+30%", metric: "Brand-side efficiency" },
    ],
    process: [],
    highlights: [
      {
        title: "Brand side: track every creator from outreach to payment",
        text: "Each creator in a campaign has a status that moves from outreach to contract signing, go-live, and payment, so the team sees at a glance who is waiting on what. Contracts are created and signed online, and payment is connected to the platform, so a collaboration can go from agreement to payout without leaving it. Contact details, quotes, notes, and collaboration history sit in the same record and update in real time for everyone on the project, so experience with a creator carries over to the next campaign.",
        images: ["assets/campaign-track.webp", "assets/campaign-contract.webp"],
      },
      {
        title: "Both sides: a chat room for every collaboration",
        text: "Brands and creators discuss the collaboration directly in the platform, so the conversation no longer scatters across email, Instagram, and LINE. Each chat sits next to its campaign, so the details and decisions stay in one place and can be found again later. Keeping the conversation on the platform also gives both sides a record to refer back to, and the protection that comes with it.",
        image: "assets/campaign-chat.webp",
      },
    ],
    keyFeatures: [],
    beforeAfter: null,
  },
  {
    id: "insight-report-campaign-analytics",
    title: "Insight Report — Campaign Close-Out Analytics",
    category: "Data Visualization & Reporting",
    company: "iKala — Kolr AI",
    year: "2022 – Present",
    role: "Senior Product Designer",
    description:
      "Designed Insight Report, which turns campaign close-out from weeks of chasing creators for screenshots into a keyword: it collects post data automatically, analyzes campaign performance from several angles, writes an AI summary, and exports a ready-to-present report.",
    image: "assets/cover-insight-report.webp",
    tags: ["Data Visualization", "Reporting", "B2B", "Dashboard"],
    challenge:
      "Closing out an influencer campaign meant contacting every creator, asking for the performance data of their posts, and then typing it all into a report by hand. It was slow, easy to get wrong, and the numbers rarely came back at the same time. Marketers then had to turn the data into charts and a story that their manager or client would accept.\n\nThe challenge was to take the collection and the reporting off their hands entirely, while still giving them enough analysis to explain how the campaign actually performed.",
    solution:
      "Instead of asking creators for data, marketers import the list of collaborating creators and enter the campaign keywords, and the platform collects the posts and their performance automatically. From that data, Insight Report builds the analysis for them: performance across engagement, views, and reach, ranked by creator, creator type, and follower tier, with the project average as the benchmark.\n\nTo remove the writing as well, an AI summary compares the creators and highlights the campaign's key points, and comment analysis shows how audiences reacted. Everything can be exported in one click as a PPT or Excel file, with the content selectable, so a report can go straight to a manager or client.",
    impact: [
      { metric: "Typical campaign close-out time, from about a week to about a day (approx.)", value: "~1 week → ~1 day" },
      { metric: "Post data collected automatically from the campaign keyword, with no need to ask each creator", value: "Auto" },
      { metric: "Download as PPT or Excel, ready to present to a manager or client", value: "1 click" },
    ],
    process: [],
    highlights: [
      {
        title: "Import a list, enter a keyword, get the data",
        text: "Marketers import the collaborating creators and type in the campaign keywords. The platform finds the posts and gathers their performance, replacing rounds of messages asking creators for screenshots.",
        image: "",
        images: ["assets/insight-import.webp"],
      },
      {
        title: "Campaign performance, analyzed and summarized for you",
        text: "Engagement, views, and reach are shown as visual charts: creator performance ranking, ranking by creator type, and performance by follower range, across platforms and even against competitors' posts. The project average serves as the benchmark, so it is clear what counts as good and where to optimize. An AI summary then pulls together the campaign's highlights and compares each creator's results, so marketers get the key points of the report without starting from a blank page.",
        image: "",
        images: ["assets/insight-analysis-v3.webp"],
      },
      {
        title: "What audiences said, not just how many reacted",
        text: "Comment analysis turns audience feedback into word clouds and sentiment and topic insights, with top-5 rankings of posts by engagement and by views, and a ranking of creators by comment sentiment. Brands can judge the value of a post and the public mood around it, then adjust the next campaign.",
        image: "",
        images: ["assets/insight-sentiment-v2.webp"],
      },
      {
        title: "One click to a presentation-ready report",
        text: "Choose which sections to include and download the whole report as a PPT or Excel file in one click. The charts, rankings, and AI summary are already laid out, so marketers can take it straight into a meeting with a manager or client instead of rebuilding it slide by slide.",
        image: "",
        images: ["assets/insight-export-ppt.webp"],
      },
    ],
    keyFeatures: [],
    beforeAfter: null,
  },
  {
    id: "influencer-analytics-dashboard",
    title: "Influencer Analytics Dashboard",
    category: "Data Visualization & Dashboard Design",
    company: "iKala — Kolr AI",
    year: "2022 – Present",
    role: "Senior Product Designer",
    description:
      "Designed Kolr's influencer analytics dashboard — organizing a genuinely complex, multi-platform data set (audience profile, growth trends, content themes, and collaboration history across six social platforms) into a dashboard brands can actually read at a glance.",
    image: "assets/cover-analytics.webp",
    tags: ["Data Visualization", "Dashboard Design", "Information Architecture", "B2B"],
    challenge:
      "Behind every creator profile sits close to 150 data points across six platforms (Facebook, Instagram, YouTube, TikTok, X, Threads): audience profile, growth trends, content themes, collaboration history, and metrics Kolr computes itself with AI. Shown as they come, they are a wall of numbers. A brand marketer deciding whether to work with a creator needs the answer fast, while an agency analyst wants to keep digging.\n\nThe challenge was to decide what to show first, which chart suits which kind of data, and how to present Kolr's own AI-computed metrics so they are noticed and trusted rather than lost among the rest.",
    solution:
      "I started by grouping the ~150 data points into a handful of themes, then ordered them by importance. Interviews with enterprise clients showed what they look at when judging a creator, and Amplitude behavior data showed which parts of the page people actually used, so the most important metrics sit at the top and the deeper detail sits behind tabs.\n\nFor each group of data I decided which chart fits: gauges for performance against peers, trend lines for growth, bars and distributions for the audience, a radar for content types, and clear number cards for the headline metrics. Kolr's own AI-computed metrics, such as the K-Score influence rating, performance levels against similar-sized creators, and the collaboration value estimate, get their own emphasis and a short AI explanation, so users understand what a number means rather than just seeing it.",
    impact: [
      { metric: "Data points organized into clear groups with a defined order of importance", value: "~150" },
      { metric: "Platforms read in one dashboard: Facebook, Instagram, YouTube, TikTok, X, Threads", value: "6" },
      { metric: "Kolr's own AI-computed metrics surfaced and explained, not buried", value: "AI-first" },
    ],
    process: [],
    highlights: [
      {
        title: "One overview, and an AI-computed K-Score to read it by",
        text: "The overview gathers each platform's key data, with a switch between the last three and six months. Kolr's own K-Score condenses follower count, posting stability, follower growth, and engagement into a single influence rating, giving an instant read on a creator before anyone digs into the detail.",
        image: "",
        images: ["assets/analytics-overview-v2.webp"],
      },
      {
        title: "Know the audience, and how real it is",
        text: "Age, gender, and region distributions, plus a map of the topics the audience cares about, show whether a creator's audience matches the brand's target. An authentic-follower ratio, estimated by excluding suspicious and bot accounts, adds a trust check, so marketers can pick creators with confidence.",
        image: "",
        images: ["assets/analytics-audience.webp"],
      },
      {
        title: "Engagement made readable, down to word-of-mouth value",
        text: "Five engagement indicators per platform can be viewed by day, week, or month, with a ratio breakdown of likes, comments, and shares. On top of this, an estimated word-of-mouth value gives a reference for judging a creator's worth and collaboration cost, with settings that can be adapted to a team's own budget and media-buying experience.",
        image: "",
        images: ["assets/analytics-engagement-v3.webp"],
      },
      {
        title: "Browse a creator's real content, then share the analysis",
        text: "Instead of judging by numbers alone, brands can filter everything a creator has posted by platform, content type, period, and keyword, and see each post's engagement next to it. Posts are embedded directly in the page, so users do not have to leave for the social platform and lose their place. When the analysis is done, one click exports it as a PPT deck, ready for a manager or client.",
        image: "",
        images: ["assets/analytics-content-v2.webp", "assets/analytics-export-slide.webp"],
      },
    ],
    keyFeatures: [],
    beforeAfter: null,
  },
  {
    id: "kolr-design-system",
    title: "Kolr Rebrand & Design System",
    category: "Design Systems",
    company: "iKala — Kolr AI",
    year: "2022 – Present",
    role: "Senior Product Designer",
    description:
      "Led the product side of the Kolr rebrand: carried the new blue identity (replacing KOL Radar's red) through the interface, and rebuilt the components into a design system alongside a front-end framework upgrade.",
    image: "assets/cover-design-system.webp",
    tags: ["Rebrand", "Design Systems", "Component Library"],
    challenge:
      "The company was rebranding from KOL Radar, with its red palette, to Kolr, with a new blue identity, and the product interface had to follow. At the same time, the front end was moving to a new framework. Changing colors alone would have meant restyling more than 3,000 screens whose components had drifted apart over the years.\n\nThe rebrand and the framework upgrade landed together, which made it the right moment to fix the foundation instead of repainting on top of it.",
    solution:
      "I treated the rebrand and the framework upgrade as one project. Rather than swap colors screen by screen, I went through the existing components, consolidated them, and rebuilt them as a design system on the new blue identity, so the new look and the new codebase share the same source of truth. The new logo came from our lead designer; my part was turning the new identity into a working interface.\n\nThe system defines semantic color styles for brand, text, surface, border, and status roles, a bilingual type scale that pairs Roboto with Noto Sans TC, and the core components: buttons, dropdowns, forms, and the sidebar, each with its states documented. I also handled product copywriting, so the brand reads the same across the interface.",
    impact: [{ value: "3,000+", metric: "Screens migrated to the new system" }],
    process: [],
    keyFeatures: [],
    beforeAfter: null,
  },
  {
    id: "chrome-extension",
    title: "Cross-Platform Chrome Extension",
    category: "0→1 Feature",
    company: "iKala — Kolr AI",
    year: "2022 – Present",
    role: "Senior Product Designer",
    description:
      "A free Chrome Extension that shows influencer analytics right on Facebook, Instagram, and YouTube, so marketers can judge a creator while they browse and save them without leaving the page. It also works as an acquisition channel for Kolr, reaching 20,000+ downloads within three months of launch.",
    image: "assets/cover-chrome-extension.webp",
    tags: ["Chrome Extension"],
    challenge:
      "Influencer marketers spend every day browsing creators on Facebook, Instagram, and YouTube. But a social profile alone doesn't show whether a creator actually performs well, so they either guess from follower counts or copy numbers one by one into their own spreadsheets to compare.\n\nThe business side had its own question. Kolr is a paid SaaS with a high price point, which makes it hard for new users to try. We needed a way to reach potential customers inside their existing workflow, before they ever sign up.",
    solution:
      "Instead of asking marketers to open another tool, I designed the extension to sit inside the flow they already have. A side panel appears on a creator's profile and shows the numbers that answer \"is this creator a fit?\" at a glance: followers, engagement rate, view rate, main content tag, similar creators, audience gender, and sponsored post ratio, with a tab for each platform.\n\nMarketers can save a creator to a collection with one click, which replaces pasting data into spreadsheets. Because the extension is free, it lets people experience the value of Kolr's analytics first, and a path into the full product is one click away.",
    impact: [
      { metric: "Downloads within 3 months", value: "20,000+" },
      { metric: "Of installers signed up for Kolr", value: "7%" },
      { metric: "Revenue generated", value: "NT$3.6M+" },
    ],
    process: [],
    keyFeatures: [],
    beforeAfter: null,
  },
  {
    id: "frnci-0to1",
    title: "FRNCi — International Social Matching Platform",
    category: "0→1 Startup · Co-Founder",
    company: "Tripleasure Technology",
    year: "2015 – 2018",
    role: "Co-Founder & Product Designer",
    description:
      "Designed, built, and grew two international social brands from scratch — covering the full design process from discovery and user interviews to user flow planning, final UI, and front-end implementation.",
    image: "assets/cover-frnci.webp",
    tags: ["0→1 Startup", "Co-Founder", "Growth"],
    challenge:
      "Independent travelers coming to Taiwan mostly end up at the same landmarks, and rarely see the city the way locals do. Locals, in turn, are happy to share their city but have no easy way to meet travelers who match their interests. Meeting a stranger online also raises an obvious question: can I trust this person?\n\nAs a three-person founding team with limited resources, we had to design something people would trust enough to meet in person, and learn what they would actually pay for before spending on the wrong things.",
    solution:
      "FRNCi (Friends & City) matches travelers with local friends by what they like instead of by sightseeing spots. Each user builds a profile with an introduction, hobbies, and languages, and can search by city and by interest across six categories: arts, leisure, food, outdoors, sports, and humanities. After finding a good match, they message each other to settle on a time and place.\n\nTo build trust, we added verification beyond the usual email and Facebook checks. The FRNCi Story Box is an in-depth interview with a user, written up as a story on their profile, which both confirms who they are and shows a person rather than a form.\n\nOnline chat was only half of the experience. We partnered with the exchange student offices at NTU and NCCU to run in-person events where international students and Taiwanese members could meet, so the online matching and the offline meetups worked as one experience. We then extended the idea into a second brand, Glocal Click, which applies the same matching to language exchange and introduced free and paid plans.",
    impact: [
      { metric: "Users across two brands", value: "10,000+" },
      { metric: "Event participants", value: "2,000+ (50 countries)" },
    ],
    process: [
      {
        phase: "Product & UI",
        description: "Designed and developed the UI using Bootstrap.",
      },
      {
        phase: "Growth & Optimization",
        description:
          "Used Google Analytics, Hotjar, and Google Search Console to track user behavior and continuously optimize UX and SEO performance.",
      },
      {
        phase: "Partnerships & Community",
        description:
          "Established university partnerships (NTU, NCCU, NTNU) and organized 40 international events with 2,000+ participants from 50 countries.",
      },
    ],
    keyFeatures: [
      "Selected for AppWorks Accelerator Batch #13",
      "Taiwan Startup Stadium",
      "Top 5, Pitch Camp+ Startup Pitching Competition",
    ],
    beforeAfter: null,
  },
];

function getProjectById(id) {
  return PROJECTS.find((p) => p.id === id);
}

function mediaPlaceholder(label) {
  return `<div class="ph">Add screenshot<br>${label}</div>`;
}

// Graphic design image wall (Projects page). PLACEHOLDER DATA — replace each
// item's title / type / year / image with your real work. Set image to a path
// like "assets/graphic-01.jpg"; leave "" to show a placeholder frame.
const GRAPHICS = [
  { title: "Soft Cookie Brand One-Page Marketing Site", type: "Brand & web design", year: "2023", image: "assets/gfx-oatday.webp" },
  { title: "Kolr Brand in Use", type: "Brand applications", year: "2024 – 2026", desc: "One brand identity extended across presentations, event key visuals, ads, and social assets, so every medium still feels like the same brand.", image: "assets/gfx-kolr-brand-v3.webp" },
];
