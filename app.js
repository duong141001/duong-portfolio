/* ==========================================================================
   APP.JS: BILINGUAL ENGINE, MOBILE NAV & INTERACTION (CREATIVE-ARTSY)
   Clean, modern, and zero AI-slop overhead
   ========================================================================== */

(function() {
  'use strict';

  // --- Mobile Navigation Toggle (optimized for mobile: scroll lock, ESC, outside click) ---
  const mobileToggle = document.getElementById('mobileNavToggle');
  const mobileMenu = document.getElementById('mobileNavMenu');
  function closeMobileNav() {
    mobileMenu?.classList.add('hidden');
    mobileToggle?.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('nav-open');
  }
  function openMobileNav() {
    mobileMenu?.classList.remove('hidden');
    mobileToggle?.setAttribute('aria-expanded', 'true');
    document.body.classList.add('nav-open');
  }
  mobileToggle?.addEventListener('click', (e) => {
    e.stopPropagation();
    const isHidden = mobileMenu.classList.contains('hidden');
    if (isHidden) openMobileNav(); else closeMobileNav();
  });
  mobileMenu?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMobileNav);
  });
  document.addEventListener('click', (e) => {
    if (!mobileMenu?.classList.contains('hidden') && !mobileMenu.contains(e.target) && e.target !== mobileToggle && !mobileToggle.contains(e.target)) {
      closeMobileNav();
    }
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !mobileMenu?.classList.contains('hidden')) closeMobileNav();
  });
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) closeMobileNav();
  });

  // --- Bilingual Translation Engine (EN / VI) ---
  const translations = {
    en: {
      'nav.home': "Home",
      'nav.about': "About",
      'nav.projects': "Projects",
      'nav.playground': "Playground",
      'nav.skills': "Skills",
      'nav.cta': "Contact",
      'hero.nameLabel': "hello, my name is",
      'hero.sticker1': "✦ Made Things",
      'hero.sticker2': "⚡ Sweat Details",
      'hero.sticker3': "Scrum & Delivery",
      'hero.sticker4': "Hanoi, VN",
      'hero.statusPill': "Open to work & good problems",
      'hero.titlePrefix': "Turning ideas into",
      'hero.titleSuffix': "shippable products.",
      'hero.sub': "Product, Agile, AI Builder & Project Coordinator",
      'hero.lede': "Founder initiative to take action, QA discipline to safeguard quality, and a collaborative Scrum/PO mindset eager to coordinate, deliver, and continuously learn with engineering teams.",
      'hero.btnContact': "Contact me",
      'hero.btnWork': "Explore Projects",
      'hero.stat1': "Projects Built",
      'hero.stat2': "Years in Software Dev",
      'hero.stat3': "Founder + Scrum Mindset",
      'hero.stat4': "Continuous Learning",
      'about.label': "about me!",
      'about.badge': "SAME PLAYER • LEVEL UP",
      'about.title': "From QA to Product & Scrum. Still the Same Player.",
      'about.bio': "I started in Game QA where I developed an obsessive eye for edge cases and release stability. Moving into Scrum Master and Producer roles taught me how to unblock cross-functional teams and maintain delivery cadence. Today, I combine that execution discipline with a Founder mindset: proactively building AI-assisted products, defining clear PRDs, and bridging the gap between business vision and engineering reality.",
      'about.p1': "QA Discipline & Edge Cases",
      'about.p2': "Scrum & Delivery Cadence",
      'about.p3': "Founder Initiative & AI",
      'about.p4': "Coachability & Alignment",
      'career.step1': "QA & Game Pipeline",
      'career.desc1': "Quality mindset, deep testing discipline & edge-case obsession",
      'career.step2': "Producer",
      'career.desc2': "Milestone roadmaps, cross-discipline delivery & release gates",
      'career.step3': "Scrum Master",
      'career.desc3': "Sprint velocity, team facilitation & unblocking bottlenecks",
      'career.step4': "Product (Now)",
      'career.desc4': "User discovery, PRD definition & shippable business value",
      'career.step5': "Founder & AI Builder",
      'career.desc5': "Proactive building, autonomous execution & fast market validation",
      'work.title': "Selected Work",
      'work.intro': "Interactive dossiers of real-world products, delivery systems, and experiments built, shipped, and coordinated.",
      'work.viewCase': "View Case Study",
      'dossier.hProblem': "Problem & Friction",
      'dossier.hRole': "Role & Execution",
      'dossier.hSolution': "Solution & Architecture",
      'dossier.hOutcome': "Outcome & Key Learning",
      'dossier.flowLabel': "Flow:",
      'skills.intro': "A combination of product, agile, technical and AI skills.",
      'cta.title': "LET'S TALK",
      'cta.desc': "I am interested in Product, AI Product, and early-stage opportunities where I can build, learn, and create real impact. Let us connect and see what we can build together.",
      'contact.comment': "Open to product, scrum coordination, QA lead, and AI builder opportunities.",
      'contact.tagline': "let's make something together",
      'contact.dropLine': "drop a line",
      'footer.role': "Product, Agile, AI Builder",
      'footer.loop': "✦ BUILD, LEARN, SHIP, REPEAT",
      'about.tabBio': "Main bio",
      'about.tabStory': "Story",
      'about.tabWork': "Work",
      'about.bioHand': "Hi! I’m Duong — I build products, coordinate delivery, and connect business vision with engineering execution.",
      'about.bioP1': "I started in Game QA where I developed a disciplined obsession with edge cases, reliability gates, and release stability. That testing foundation made me realize: great products aren’t just well-coded; they are meticulously scoped, clearly communicated, and reliably delivered.",
      'about.bioP2': "Transitioning through Producer and Scrum Master roles taught me how to keep multidisciplinary teams aligned, unblock dependencies, and maintain continuous delivery momentum. With a Founder and AI Builder mindset, I now actively research user friction, author clear PRDs, and build shippable AI prototypes.",
      'about.callout1': "Right now I'm building AI-powered operational workflows and behavioral systems, bridging deterministic rule engines with modern LLM prompt chains.",
      'about.callout2': "When I'm not shipping products, I'm analyzing software architectures, playing board games, and exploring new AI agentic patterns.",
      'story.p1Title': "1. Root Cause Over Quick Patches",
      'story.p1Desc': "In QA and system design, fixing the symptom without understanding the failure mode just defers the disaster. I probe constraints, uncover hidden assumptions, and architect solutions that hold under real stress.",
      'story.p1Hand': "questions before pixels.",
      'story.p2Title': "2. Deterministic Core, AI Augmentation",
      'story.p2Desc': "Never rely on probabilistic chatbots for critical user state. I build on verifiable state machines, structured rules, and business metrics — then use AI where it genuinely accelerates discovery or synthesis.",
      'story.p2Hand': "no fragile wrappers here!",
      'story.p3Title': "3. Cadence, Clarity & Coachability",
      'story.p3Desc': "Great software is delivered through psychological safety, precise tickets, predictable sprint rhythms, and continuous feedback. I listen actively, align cross-functional goals, and adapt fast.",
      'story.p3Hand': "team wins, every sprint.",
      'story.m1Title': "4. Delivery Telemetry Over Passive Standups",
      'story.m1Desc': "Transforming daily standup updates into an actionable delivery dependency graph synced with Jira/Lark. Reclaiming 40% meeting overhead and detecting sprint bottlenecks 2 days earlier without micromanagement.",
      'story.m1Hand': "telemetry beats interrogations.",
      'story.m2Title': "5. Shift-Left Quality Gates Over End-Sprint Crunch",
      'story.m2Desc': "Eliminating sprint-end QA crunch through test readiness gates, automated regression planning, and deterministic release criteria. Eliminates release overtime and reduces live hotfixes by over 60%.",
      'story.m2Hand': "gates protect delivery flow.",
      'case.label': "explore my work!",
      'playground.label': "playground & lab",
      'playground.desc': "An exploratory workbench of architectural snippets, mini-tools, logic prototypes, and behavioral models built while experimenting with AI agents and delivery telemetry.",
      'playground.motto': "built with curiosities, code snippets & lots of coffee ☕",
      'contact.sayHi': "say hi",
      'contact.cardPrompt': "Got a project, a hard problem, or just want to say hi? Send it over. I read every message.",
      'work.mindsetTitle': "Scrum Cadence & QA Discipline",
      'work.mindsetDesc': "Transforming messy standups into actionable delivery telemetry, and enforcing shift-left release gates with zero critical rollbacks.",
      'work.readPhilosophy': "Read Story & Philosophy",
      'work.ideationTitle': "Ideation & Experimental Lab",
      'work.ideationDesc': "Interactive concepts and research prototypes: F&B Optical Telemetry, Hermes Agentic OS, and Automated Affiliate Engines.",
      'work.openPlayground': "Open Interactive Workbench",
      'case.sec1Badge': "3 Shipped Products",
      'case.sec1Title': "Featured Shipped Products",
      'case.sec1Desc': "Production-tested applications with live user flows, deterministic rule engines, and measurable outcomes.",
      'case.sec2Badge': "2 Operational Mindsets",
      'case.sec2Title': "Delivery & QA Mindset",
      'case.sec2Desc': "Translating messy standups into actionable delivery telemetry, and enforcing shift-left release gates with zero critical regressions.",
      'case.sec3Badge': "3 Exploratory Concepts",
      'case.sec3Title': "Exploratory Lab & Ideation",
      'case.sec3Desc': "Forward-looking research prototypes: Computer Vision telemetry, Multi-Agent workspace, and automated growth engines.",
      'tab.p01': "Project 01 // Live PWA",
      'tab.r01Badge': "Product & Founder",
      'tab.d01': "// Behavioral Support / PWA",
      'p1.title': "ADHD Behavioral Support Product",
      'p1.dossierSummary': "A behavioral support system designed for executive dysfunction: eliminates decision paralysis, initiates micro-actions, and turns positive habits into visible Skill Tree progression.",
      'p1.problemCopy': "Standard productivity tools falsely assume users have executive capacity. Overwhelming task lists increase cognitive fatigue; the real bottleneck is initiating the first action.",
      'p1.roleCopy': "Solo Founder & Product Designer: mapped user behavioral friction, wrote technical PRD, conducted user interviews, and developed the offline-first responsive PWA.",
      'p1.solutionCopy': "Deterministic finite-state machine core (100% operational offline) paired with a modular AI prompt adapter for task decomposition and an executive Skill Tree reward model.",
      'p1.outcomeCopy': "Shipped live PWA. Reduced time-to-first-action by 45%. Primary takeaway: AI is a building accelerator, but predictable behavioral rules create durable product value.",
      'p1.f1': "Check-in",
      'p1.f2': "Capacity Rule",
      'p1.f3': "Action Engine",
      'p1.f4': "Skill XP",
      'p01.problemCopy': "Standard productivity tools falsely assume users have executive capacity. Overwhelming task lists increase cognitive fatigue; the real bottleneck is initiating the first action.",
      'p01.roleCopy': "Solo Founder & Product Designer: mapped user behavioral friction, wrote technical PRD, conducted user interviews, and developed the offline-first responsive PWA.",
      'p01.solutionCopy': "Deterministic finite-state machine core (100% operational offline) paired with a modular AI prompt adapter for task decomposition and an executive Skill Tree reward model.",
      'p01.outcomeCopy': "Shipped live PWA. Reduced time-to-first-action by 45%. Primary takeaway: AI is a building accelerator, but predictable behavioral rules create durable product value.",
      'p01.tag1': "EXECUTIVE FUNCTION",
      'p01.tag2': "RULE ENGINE",
      'p01.tag3': "OFFLINE PWA",
      'p01.f1': "Check-in",
      'p01.f2': "Capacity Rule",
      'p01.f3': "Action Engine",
      'p01.f4': "Skill XP",
      'tab.p02': "Project 02 // Marketplace",
      'tab.r02Badge': "Founder & Architect",
      'tab.d02': "// Marketplace / Web",
      'p3.title': "Cosplay Rental Marketplace",
      'p3.dossierSummary': "A purpose-built rental lifecycle platform prioritizing asset availability, trust verification, and multi-day booking states over standard e-commerce carts.",
      'p3.problemCopy': "Rental is not standard e-commerce: calendar conflicts, security deposits, garment wear-and-tear verification, and delivery handoffs create severe counterparty risk.",
      'p3.roleCopy': "Founder & System Architect: Interviewed costume owners and cosplayers, mapped stateful rental lifecycle, and designed the escrow trust model and web platform.",
      'p3.solutionCopy': "Finite-state machine transaction engine (Listed → Reserved → Inspected → Handoff → Returned → Settlement) with calendar availability matrix and deposit escrow.",
      'p3.outcomeCopy': "Shipped functioning marketplace prototype with validated user bookings. Key insight: Trust architecture and invariant rules are the true core feature.",
      'p3.f1': "Listing",
      'p3.f2': "Matrix",
      'p3.f3': "Escrow",
      'p3.f4': "Settlement",
      'p03.problemCopy': "Rental is not standard e-commerce: calendar conflicts, security deposits, garment wear-and-tear verification, and delivery handoffs create severe counterparty risk.",
      'p03.roleCopy': "Founder & System Architect: Interviewed costume owners and cosplayers, mapped stateful rental lifecycle, and designed the escrow trust model and web platform.",
      'p03.solutionCopy': "Finite-state machine transaction engine (Listed → Reserved → Inspected → Handoff → Returned → Settlement) with calendar availability matrix and deposit escrow.",
      'p03.outcomeCopy': "Shipped functioning marketplace prototype with validated user bookings. Key insight: Trust architecture and invariant rules are the true core feature.",
      'p03.tag1': "MARKETPLACE",
      'p03.tag2': "ESCROW DEPOSIT",
      'p03.tag3': "CALENDAR ENGINE",
      'p03.f1': "Listing",
      'p03.f2': "Matrix",
      'p03.f3': "Escrow",
      'p03.f4': "Settlement",
      'tab.p03': "Project 03 // Realtime FinTech",
      'tab.r03Badge': "Product Spec & QA",
      'tab.d03': "// Realtime / FinTech",
      'p4.title': "Realtime Multi-Asset Auction",
      'p4.dossierSummary': "High-concurrency realtime auction system engineered for absolute transaction integrity, low-latency bid validation, and deterministic room settlement.",
      'p4.problemCopy': "Sub-millisecond concurrent bidding creates race conditions, timer drift, and user disputes if transaction sequencing lacks absolute server determinism.",
      'p4.roleCopy': "Product Spec & Realtime QA: Designed concurrency edge-case test matrices, specified WebSocket state payloads, and audited financial pre-authorization flows.",
      'p4.solutionCopy': "Authoritative server state machine as single source of truth, real-time bid validator, automatic anti-sniping timer extension, and instant escrow settlement.",
      'p4.outcomeCopy': "Handled simulated high-concurrency bidding without room drift or race bugs. Key insight: Realtime user trust is won through strict, auditable determinism.",
      'p4.f1': "Room Open",
      'p4.f2': "Bid Validator",
      'p4.f3': "Anti-Snipe",
      'p4.f4': "Settlement",
      'p04.problemCopy': "Sub-millisecond concurrent bidding creates race conditions, timer drift, and user disputes if transaction sequencing lacks absolute server determinism.",
      'p04.roleCopy': "Product Spec & Realtime QA: Designed concurrency edge-case test matrices, specified WebSocket state payloads, and audited financial pre-authorization flows.",
      'p04.solutionCopy': "Authoritative server state machine as single source of truth, real-time bid validator, automatic anti-sniping timer extension, and instant escrow settlement.",
      'p04.outcomeCopy': "Handled simulated high-concurrency bidding without room drift or race bugs. Key insight: Realtime user trust is won through strict, auditable determinism.",
      'p04.tag1': "WEBSOCKETS",
      'p04.tag2': "ANTI-SNIPING",
      'p04.tag3': "FINTECH",
      'p04.f1': "Room Open",
      'p04.f2': "Bid Validator",
      'p04.f3': "Anti-Snipe",
      'p04.f4': "Settlement",
      'tab.p04': "Mindset 04 // Delivery Telemetry",
      'tab.p05': "Mindset 05 // Release Gates",
      'tab.p06': "Mindset 05 // Release Gates",
      'tab.m04': "Mindset 04 // Delivery Telemetry",
      'tab.m05': "Mindset 05 // Release Gates",
      'tab.c06': "Concept 06 // F&B Telemetry Lab",
      'tab.c07': "Concept 07 // Hermes Agentic OS",
      'tab.c08': "Concept 08 // Content Automation",
      'tab.r05Badge': "Scrum Master",
      'tab.d05': "// Agile Delivery / Telemetry",
      'p5.title': "AI Scrum & Delivery Telemetry",
      'p5.dossierSummary': "Transforming daily standup updates and cross-team dependencies into actionable delivery telemetry synced with Jira/Lark.",
      'p05.problemCopy': "Standups often degrade into passive interrogations, obscuring real cross-team blockers and sprint dependency drift.",
      'p05.roleCopy': "Scrum Master & Workflow Designer: Facilitated ceremonies, mapped cross-discipline bottlenecks, built AI telemetry.",
      'p05.solutionCopy': "Async daily check-in parser converting commitments and blockers into normalized delivery dependency graph.",
      'p05.outcomeCopy': "Reclaimed 40% meeting overhead, detected blockers 2 days earlier, and elevated team flow without micromanagement.",
      'p05.tag1': "DELIVERY TELEMETRY",
      'p05.tag2': "WORKFLOW AUTOMATION",
      'p05.tag3': "SCRUM OPS",
      'p05.f1': "Async Daily",
      'p05.f2': "Parser",
      'p05.f3': "Dependency Graph",
      'p05.f4': "Velocity",
      'tab.r06Badge': "QA Lead",
      'tab.d06': "// Quality Engineering / Pipeline",
      'p6.title': "QA Lead Automated Pipeline",
      'p6.dossierSummary': "Eliminating sprint-end QA crunch through test readiness gates, automated regression planning, and deterministic release criteria.",
      'p06.problemCopy': "Late code handoffs compress QA into stressful sprint-end firefighting, causing preventable live release regressions.",
      'p06.roleCopy': "QA Lead & Release Gatekeeper: Designed QA Ready Gate checklists, led multi-discipline test plans, set sign-off gates.",
      'p06.solutionCopy': "Shift-left pipeline: Dev Handshake → QA Ready Gate → Automated Smoke → Deep Regression Matrix → Release Gate.",
      'p06.outcomeCopy': "Eliminated release-day overtime and reduced live hotfixes by >60%, proving QA is a true delivery accelerator.",
      'p06.tag1': "PLAYWRIGHT",
      'p06.tag2': "CI/CD WORKFLOWS",
      'p06.tag3': "REGRESSION GATE",
      'p06.f1': "Dev Handshake",
      'p06.f2': "QA Ready",
      'p06.f3': "Smoke Test",
      'p06.f4': "Production Ship",
      'tab.p07': "Concept 07 // Hermes Agentic OS",
      'tab.r07Badge': "AI Architect",
      'tab.d07': "// Agentic OS / Lab",
      'p7.title': "Hermes Agentic OS",
      'p7.dossierSummary': "An experimental multi-agent workspace featuring visual orchestration boards, behavioral personas, and persistent memory graphs.",
      'p07.problemCopy': "Chat interfaces hide multi-step agent reasoning, tool chaining, and state mutations, destroying operational trust.",
      'p07.roleCopy': "AI Workspace Architect & UX: Designed human-in-the-loop inspection surfaces, defined agent roles, built memory graph.",
      'p07.solutionCopy': "Central orchestrator board with interactive node canvas, persistent project vector memory graph, and step rollback.",
      'p07.outcomeCopy': "Functional multi-agent lab. Proved user confidence in AI depends directly on execution transparency and tactile control.",
      'p07.tag1': "MULTI-AGENT",
      'p07.tag2': "TOOL EXECUTION",
      'p07.tag3': "AGENTIC WORKFLOW",
      'p07.f1': "Intent Ingestion",
      'p07.f2': "Orchestrator",
      'p07.f3': "Agent Nodes",
      'p07.f4': "Audited Outcome",
      'tab.p08': "Concept 08 // Content Automation",
      'tab.r08Badge': "Growth Engineer",
      'tab.d08': "// Growth Ops / Automation",
      'p8.title': "Growth Ops Affiliate Automation",
      'p8.dossierSummary': "End-to-end automated content factory connecting product telemetry to script hooks, video assembly, and conversion attribution.",
      'p08.problemCopy': "Automated video generation creates vanity impressions but zero affiliate sales without closed-loop attribution.",
      'p08.roleCopy': "Growth Engineer & Builder: Analyzed product catalogs, designed viral hook frameworks, built attribution pipeline.",
      'p08.solutionCopy': "Closed-loop factory: Catalog extraction → Pain point engine → Hook matrix → Programmatic video → Conversion tracking.",
      'p08.outcomeCopy': "Automated pipeline optimizing directly for verified sales; automatically reinforced top-converting creative angles.",
      'p08.tag1': "CONTENT ENGINE",
      'p08.tag2': "ATTRIBUTION",
      'p08.tag3': "AUTOMATION",
      'p08.f1': "Product Catalog",
      'p08.f2': "Hook Matrix",
      'p08.f3': "Assembly",
      'p08.f4': "Conversion",
      'p2.title': "AI Operations for Vietnamese F&B",
      'p2.desc': "Using AI camera & computer vision to improve restaurant operations and efficiency.",
      'p2.dossierSummary': "Transforming commodity surveillance cameras into structured operational telemetry: Event Detection → Anomaly Pipeline → Actionable Floor Insights.",
      'p2.problemCopy': "Restaurant managers possess gigabytes of CCTV footage but lack actionable floor telemetry on queue jams, wait-time spikes, and table turnover latency.",
      'p2.roleCopy': "Product Lead & Discovery: Conducted on-site shift interviews with store owners, identified high-value floor signals, and translated camera events into operational PRDs.",
      'p2.solutionCopy': "Optical sensor to normalized event stream, queue latency detector, floor alert dashboard for shift managers, and daily anomaly summaries.",
      'p2.outcomeCopy': "Beta deployed in Vietnamese partner store. Reduced shift inspection overhead by 30%. Key takeaway: AI features create value only when bound to daily floor habits.",
      'p2.tag1': "COMPUTER VISION",
      'p2.tag2': "B2B SAAS",
      'p2.tag3': "OPERATIONS",
      'p2.f1': "Camera Feed",
      'p2.f2': "CV Model",
      'p2.f3': "Event Stream",
      'p2.f4': "Floor Action",
      'contact.msgPlaceholder': "Tell me about your product, project or problem...",
      'contact.nextBtn': "Next (1/2) →",
      'contact.nameLabel': "Name",
      'contact.namePlaceholder': "Your name",
      'contact.emailLabel': "Email",
      'contact.emailPlaceholder': "your.email@example.com",
      'contact.backBtn': "← Back",
      'contact.sendBtn': "Send (2/2) ✈",
      'contact.successTitle': "Message received! ✨",
      'contact.successDesc': "Thank you for reaching out. I will respond within 24 hours.",
      'playground.title': "JUST FOR FUN",
      'p01.title': "ADHD Behavioral Support Product",
      'p01.dossierSummary': "A behavioral support system designed for executive dysfunction: eliminates decision paralysis, initiates micro-actions, and turns positive habits into visible Skill Tree progression.",
      'p1.tag1': "EXECUTIVE FUNCTION",
      'p1.tag2': "RULE ENGINE",
      'p1.tag3': "OFFLINE PWA",
      'p02.title': "AI Operations for Vietnamese F&B",
      'p02.desc': "Using AI camera & computer vision to improve restaurant operations and efficiency.",
      'p02.dossierSummary': "Transforming commodity surveillance cameras into structured operational telemetry: Event Detection → Anomaly Pipeline → Actionable Floor Insights.",
      'p02.problemCopy': "Restaurant managers possess gigabytes of CCTV footage but lack actionable floor telemetry on queue jams, wait-time spikes, and table turnover latency.",
      'p02.roleCopy': "Product Lead & Discovery: Conducted on-site shift interviews with store owners, identified high-value floor signals, and translated camera events into operational PRDs.",
      'p02.solutionCopy': "Optical sensor to normalized event stream, queue latency detector, floor alert dashboard for shift managers, and daily anomaly summaries.",
      'p02.outcomeCopy': "Beta deployed in Vietnamese partner store. Reduced shift inspection overhead by 30%. Key takeaway: AI features create value only when bound to daily floor habits.",
      'p02.tag1': "COMPUTER VISION",
      'p02.tag2': "B2B SAAS",
      'p02.tag3': "OPERATIONS",
      'p02.f1': "Camera Feed",
      'p02.f2': "CV Model",
      'p02.f3': "Event Stream",
      'p02.f4': "Floor Action",
      'p03.title': "Cosplay Rental Marketplace",
      'p03.dossierSummary': "A purpose-built rental lifecycle platform prioritizing asset availability, trust verification, and multi-day booking states over standard e-commerce carts.",
      'p3.tag1': "MARKETPLACE",
      'p3.tag2': "ESCROW DEPOSIT",
      'p3.tag3': "CALENDAR ENGINE",
      'p04.title': "Realtime Multi-Asset Auction",
      'p04.dossierSummary': "High-concurrency realtime auction system engineered for absolute transaction integrity, low-latency bid validation, and deterministic room settlement.",
      'p4.tag1': "WEBSOCKETS",
      'p4.tag2': "ANTI-SNIPING",
      'p4.tag3': "FINTECH",
      'p05.title': "AI Scrum & Delivery Telemetry",
      'p05.dossierSummary': "Transforming daily standup updates and cross-team dependencies into actionable delivery telemetry synced with Jira/Lark.",
      'p5.problemCopy': "Standups often degrade into passive interrogations, obscuring real cross-team blockers and sprint dependency drift.",
      'p5.roleCopy': "Scrum Master & Workflow Designer: Facilitated ceremonies, mapped cross-discipline bottlenecks, built AI telemetry.",
      'p5.solutionCopy': "Async daily check-in parser converting commitments and blockers into normalized delivery dependency graph.",
      'p5.outcomeCopy': "Reclaimed 40% meeting overhead, detected blockers 2 days earlier, and elevated team flow without micromanagement.",
      'p5.tag1': "DELIVERY TELEMETRY",
      'p5.tag2': "WORKFLOW AUTOMATION",
      'p5.tag3': "SCRUM OPS",
      'p5.f1': "Async Daily",
      'p5.f2': "Parser",
      'p5.f3': "Dependency Graph",
      'p5.f4': "Velocity",
      'p06.title': "QA Lead Automated Pipeline",
      'p06.dossierSummary': "Eliminating sprint-end QA crunch through test readiness gates, automated regression planning, and deterministic release criteria.",
      'p6.problemCopy': "Late code handoffs compress QA into stressful sprint-end firefighting, causing preventable live release regressions.",
      'p6.roleCopy': "QA Lead & Release Gatekeeper: Designed QA Ready Gate checklists, led multi-discipline test plans, set sign-off gates.",
      'p6.solutionCopy': "Shift-left pipeline: Dev Handshake → QA Ready Gate → Automated Smoke → Deep Regression Matrix → Release Gate.",
      'p6.outcomeCopy': "Eliminated release-day overtime and reduced live hotfixes by >60%, proving QA is a true delivery accelerator.",
      'p6.tag1': "PLAYWRIGHT",
      'p6.tag2': "CI/CD WORKFLOWS",
      'p6.tag3': "REGRESSION GATE",
      'p6.f1': "Dev Handshake",
      'p6.f2': "QA Ready",
      'p6.f3': "Smoke Test",
      'p6.f4': "Production Ship",
      'p07.title': "Hermes Agentic OS",
      'p07.dossierSummary': "An experimental multi-agent workspace featuring visual orchestration boards, behavioral personas, and persistent memory graphs.",
      'p7.problemCopy': "Chat interfaces hide multi-step agent reasoning, tool chaining, and state mutations, destroying operational trust.",
      'p7.roleCopy': "AI Workspace Architect & UX: Designed human-in-the-loop inspection surfaces, defined agent roles, built memory graph.",
      'p7.solutionCopy': "Central orchestrator board with interactive node canvas, persistent project vector memory graph, and step rollback.",
      'p7.outcomeCopy': "Functional multi-agent lab. Proved user confidence in AI depends directly on execution transparency and tactile control.",
      'p7.tag1': "MULTI-AGENT",
      'p7.tag2': "TOOL EXECUTION",
      'p7.tag3': "AGENTIC WORKFLOW",
      'p7.f1': "Intent Ingestion",
      'p7.f2': "Orchestrator",
      'p7.f3': "Agent Nodes",
      'p7.f4': "Audited Outcome",
      'p08.title': "Growth Ops Affiliate Automation",
      'p08.dossierSummary': "End-to-end automated content factory connecting product telemetry to script hooks, video assembly, and conversion attribution.",
      'p8.problemCopy': "Automated video generation creates vanity impressions but zero affiliate sales without closed-loop attribution.",
      'p8.roleCopy': "Growth Engineer & Builder: Analyzed product catalogs, designed viral hook frameworks, built attribution pipeline.",
      'p8.solutionCopy': "Closed-loop factory: Catalog extraction → Pain point engine → Hook matrix → Programmatic video → Conversion tracking.",
      'p8.outcomeCopy': "Automated pipeline optimizing directly for verified sales; automatically reinforced top-converting creative angles.",
      'p8.tag1': "CONTENT ENGINE",
      'p8.tag2': "ATTRIBUTION",
      'p8.tag3': "AUTOMATION",
      'p8.f1': "Product Catalog",
      'p8.f2': "Hook Matrix",
      'p8.f3': "Assembly",
      'p8.f4': "Conversion"
    },
    vi: {
      'nav.home': "Trang chủ",
      'nav.about': "Về tôi",
      'nav.projects': "Dự án",
      'nav.playground': "Playground",
      'nav.skills': "Kỹ năng",
      'nav.cta': "Liên hệ",
      'hero.nameLabel': "xin chào, tôi là",
      'hero.sticker1': "✦ Đã tạo sản phẩm",
      'hero.sticker2': "⚡ Tỉ mỉ chi tiết",
      'hero.sticker3': "Điều phối Scrum",
      'hero.sticker4': "Hà Nội, VN",
      'hero.statusPill': "Sẵn sàng cho dự án & thử thách mới",
      'hero.titlePrefix': "Biến ý tưởng thành",
      'hero.titleSuffix': "sản phẩm thật.",
      'hero.sub': "Product, Agile, AI Builder & Điều Phối Dự Án",
      'hero.lede': "Tư duy Founder để chủ động hành động, kỷ luật QA để kiểm soát chất lượng, và sự cầu thị của một Fresher PO/Scrum để học hỏi và đồng hành điều phối cùng team.",
      'hero.btnContact': "Liên hệ ngay",
      'hero.btnWork': "Xem Dự Án",
      'hero.stat1': "Dự án đã xây",
      'hero.stat2': "Năm phát triển phần mềm",
      'hero.stat3': "Tư duy Founder & Scrum",
      'hero.stat4': "Không ngừng học hỏi",
      'about.label': "đôi nét về tôi!",
      'about.badge': "CÙNG NGƯỜI CHƠI • LÊN CẤP",
      'about.title': "Từ QA Đến Product & Scrum. Vẫn Cùng Một Người Chơi.",
      'about.bio': "Tôi bắt đầu hành trình từ Game QA nơi tôi rèn luyện sự nhạy bén với edge case và tiêu chuẩn release ổn định. Bước tiếp sang vai trò Scrum Master và Producer giúp tôi học cách gỡ blocker, tối ưu nhịp độ sprint và điều phối liên phòng ban. Hiện tại, tôi kết hợp kỷ luật thực thi đó với tư duy Founder: chủ động tự xây dựng các sản phẩm AI, viết PRD rõ ràng và đồng hành thu hẹp khoảng cách giữa định hướng sản phẩm và thực tế phát triển của đội ngũ kỹ thuật.",
      'about.p1': "Kỷ luật QA & Edge Cases",
      'about.p2': "Điều phối Sprint & Delivery",
      'about.p3': "Chủ động xây dựng & AI Workflows",
      'about.p4': "Cầu thị, học hỏi & gắn kết team",
      'career.step1': "QA & Quy Trình Game",
      'career.desc1': "Tư duy chất lượng, kỷ luật kiểm thử sâu sắc & kiểm soát edge case",
      'career.step2': "Producer",
      'career.desc2': "Lộ trình cột mốc, điều phối liên chuyên môn & cổng phát hành",
      'career.step3': "Scrum Master",
      'career.desc3': "Nhịp độ sprint, gắn kết đội ngũ & gỡ bỏ các rào cản",
      'career.step4': "Product (Hiện tại)",
      'career.desc4': "Khám phá người dùng, định nghĩa PRD & tạo giá trị shippable",
      'career.step5': "Founder & Xây Dựng AI",
      'career.desc5': "Chủ động kiến tạo, thực thi tự chủ & kiểm chứng thị trường nhanh",
      'work.title': "Dự Án Chọn Lọc",
      'work.intro': "Hồ sơ tương tác về các sản phẩm thực tế, hệ thống vận hành và thử nghiệm tôi trực tiếp xây dựng, phát hành và điều phối.",
      'work.viewCase': "Xem Case Study",
      'dossier.hProblem': "Bài toán & Rào cản",
      'dossier.hRole': "Vai trò & Điều phối",
      'dossier.hSolution': "Giải pháp & Hệ thống",
      'dossier.hOutcome': "Kết quả & Đúc kết",
      'dossier.flowLabel': "Quy trình:",
      'skills.intro': "Kết hợp giữa năng lực product, agile, kỹ thuật và công nghệ AI.",
      'cta.title': "KẾT NỐI NGAY",
      'cta.desc': "Sẵn sàng đồng hành cùng các cơ hội Product, AI Product và các dự án giai đoạn đầu nơi tôi có thể học hỏi, xây dựng và tạo ra giá trị thực tế. Hãy kết nối và cùng nhau tạo nên điều tuyệt vời.",
      'contact.comment': "Sẵn sàng cho các cơ hội Product, điều phối Scrum, QA Lead và giải pháp AI.",
      'contact.tagline': "hãy cùng tạo nên điều tuyệt vời",
      'contact.dropLine': "gửi tin nhắn ngay",
      'footer.role': "Product, Agile, AI Builder & Điều Phối",
      'footer.loop': "✦ XÂY DỰNG, HỌC HỎI, PHÁT HÀNH, LẶP LẠI",
      'about.tabBio': "Tiểu sử chính",
      'about.tabStory': "Câu chuyện",
      'about.tabWork': "Hành trình",
      'about.bioHand': "Chào bạn! Tôi là Dương — người xây dựng sản phẩm, điều phối delivery và kết nối tầm nhìn sản phẩm với đội ngũ kỹ thuật.",
      'about.bioP1': "Tôi bắt đầu từ Game QA nơi tôi rèn giũa kỷ luật khắt khe với edge case, cổng kiểm soát chất lượng và sự ổn định khi release. Nền tảng testing giúp tôi nhận ra: một sản phẩm xuất sắc không chỉ cần code chuẩn, mà cần được định nghĩa phạm vi rõ ràng, giao tiếp mạch lạc và phát hành ổn định.",
      'about.bioP2': "Trải qua vai trò Producer và Scrum Master đã rèn luyện cho tôi cách đồng bộ đội ngũ liên chuyên môn, tháo gỡ điểm nghẽn và duy trì nhịp độ chuyển giao liên tục. Cùng tư duy Founder và AI Builder, hiện tại tôi chủ động khảo sát điểm nghẽn người dùng, viết PRD rõ ràng và trực tiếp xây dựng các sản phẩm AI thực tế.",
      'about.callout1': "Hiện tại tôi đang tập trung xây dựng quy trình vận hành tích hợp AI và hệ thống hành vi, kết nối hạt nhân rule-based ổn định với chuỗi prompt LLM hiện đại.",
      'about.callout2': "Những khi không làm sản phẩm, tôi thích phân tích kiến trúc phần mềm, chơi board game chiến thuật và khám phá các mô hình AI agent mới.",
      'story.p1Title': "1. Bản chất cốt lõi trước bản vá nhanh",
      'story.p1Desc': "Trong QA và thiết kế hệ thống, sửa triệu chứng bề nổi mà bỏ qua bản chất lỗi chỉ trì hoãn rủi ro. Tôi luôn đào sâu ràng buộc, làm rõ các giả định ngầm và thiết kế giải pháp đứng vững trước áp lực thực tế.",
      'story.p1Hand': "bản chất trước hình thức.",
      'story.p2Title': "2. Hạt nhân ổn định, AI làm đòn bẩy",
      'story.p2Desc': "Không bao giờ để chatbot phỏng đoán kiểm soát trạng thái quan trọng. Tôi xây dựng trên state machine rõ ràng, hệ quy tắc vững chắc — và chỉ đưa AI vào nơi thực sự tạo ra đòn bẩy vượt trội.",
      'story.p2Hand': "nói không với wrapper sáo rỗng!",
      'story.p3Title': "3. Nhịp độ, Minh bạch & Tinh thần Cầu thị",
      'story.p3Desc': "Phần mềm tốt đến từ môi trường an toàn tâm lý, ticket chuẩn xác, nhịp sprint đều đặn và phản hồi liên tục. Tôi lắng nghe chủ động, đồng bộ mục tiêu đa phòng ban và học hỏi rất nhanh.",
      'story.p3Hand': "cùng thắng sau mỗi sprint.",
      'story.m1Title': "4. Viễn Trắc Vận Hành Thay Cho Báo Cáo Thụ Động",
      'story.m1Desc': "Chuyển hóa dữ liệu Daily Standup thành đồ thị phân phối đồng bộ Jira/Lark: phát hiện sớm blocker trước 2 ngày, tiết kiệm 40% thời gian họp và nâng cao độ thông suốt dòng việc mà không cần vi quản lý.",
      'story.m1Hand': "viễn trắc hơn thẩm vấn.",
      'story.m2Title': "5. Cổng Kiểm Soát Shift-Left Thay Cho Cứu Hỏa Cuối Sprint",
      'story.m2Desc': "Xóa bỏ nút thắt cổ chai QA cuối sprint bằng tiêu chuẩn QA Ready Gate, kiểm thử hồi quy tự động và tiêu chí release rõ ràng. Chấm dứt tăng ca cứu hỏa, giảm hơn 60% hotfix live.",
      'story.m2Hand': "cổng chuẩn bảo vệ nhịp độ.",
      'case.label': "khám phá các dự án!",
      'playground.label': "phòng thử nghiệm & lab",
      'playground.desc': "Góc làm việc thực nghiệm chứa các lát cắt kiến trúc, công cụ nhỏ, mẫu thử logic và mô hình hành vi được tạo ra trong quá trình nghiên cứu AI agent và telemetry chuyển giao.",
      'playground.motto': "xây dựng từ sự tò mò, từng dòng code & rất nhiều cà phê ☕",
      'contact.sayHi': "gửi lời chào",
      'contact.cardPrompt': "Bạn đang ấp ủ dự án, gặp bài toán hóc búa, hay đơn giản muốn kết nối? Hãy gửi tin nhắn ngay. Tôi luôn đọc từng phản hồi.",
      'work.mindsetTitle': "Nhịp Độ Scrum & Kỷ Luật QA",
      'work.mindsetDesc': "Chuyển hóa buổi Daily Standup thành viễn trắc vận hành có thể hành động, và áp dụng cổng duyệt phát hành shift-left không phát sinh sự cố live.",
      'work.readPhilosophy': "Đọc Câu Chuyện & Triết Lý",
      'work.ideationTitle': "Ý Tưởng & Phòng Thử Nghiệm",
      'work.ideationDesc': "Các mẫu thử và ý tưởng nghiên cứu: Phân tích vận hành F&B qua camera, Hệ điều hành đa-agent Hermes và Tự động hóa tiếp thị liên kết.",
      'work.openPlayground': "Mở Phòng Thử Nghiệm Tương Tác",
      'case.sec1Badge': "3 Sản Phẩm Đã Phát Hành",
      'case.sec1Title': "Dự Án Đã Phát Hành & Kiểm Chứng",
      'case.sec1Desc': "Các ứng dụng thực tế với luồng người dùng hoàn chỉnh, luật chơi xác định và giá trị được kiểm chứng.",
      'case.sec2Badge': "2 Trụ Cột Vận Hành & Kỷ Luật QA",
      'case.sec2Title': "Tư Duy Vận Hành & Kỷ Luật QA",
      'case.sec2Desc': "Biến standup hỗn độn thành viễn trắc vận hành có cấu trúc, áp dụng cổng kiểm soát chất lượng từ sớm để loại bỏ rủi ro phát hành.",
      'case.sec3Badge': "3 Ý Tưởng & Thử Nghiệm Mới",
      'case.sec3Title': "Ý Tưởng & Phòng Thử Nghiệm",
      'case.sec3Desc': "Các mẫu thử nghiệm và hướng đi mới: Nhận diện viễn trắc camera F&B, Hệ điều hành đa-agent và tự động hóa tăng trưởng.",
      'tab.p01': "Dự án 01 // Live PWA",
      'tab.r01Badge': "Product & Founder",
      'tab.d01': "// Behavioral Support / PWA",
      'p1.title': "Hỗ Trợ Hành Vi ADHD",
      'p1.dossierSummary': "Hệ thống hỗ trợ hành vi tập trung vào executive dysfunction: xóa bỏ tê liệt quyết định và kích hoạt vi hành động qua Cây Kỹ Năng trực quan.",
      'p01.problemCopy': "Danh sách task dày đặc gây tê liệt nhận thức; điểm nghẽn cốt lõi nằm ở bước khởi sự vi hành động đầu tiên.",
      'p01.roleCopy': "Solo Founder & Thiết kế Product: Khảo sát rào cản nhận thức, viết PRD kỹ thuật và lập trình PWA offline-first.",
      'p01.solutionCopy': "Hạt nhân deterministic FSM chạy offline 100%, adapter AI phân rã task và Cây Kỹ Năng phản ánh tiến bộ.",
      'p01.outcomeCopy': "Phát hành PWA thực tế. Giảm 45% thời gian chần chừ bắt đầu hành động nhờ hệ thống quy tắc ổn định.",
      'p01.tag1': "EXECUTIVE FUNCTION",
      'p01.tag2': "RULE ENGINE",
      'p01.tag3': "OFFLINE PWA",
      'p01.f1': "Check-in",
      'p01.f2': "Capacity Rule",
      'p01.f3': "Action Engine",
      'p01.f4': "Skill XP",
      'tab.p02': "Dự án 02 // Sàn Thuê Đồ",
      'tab.r02Badge': "Founder & Kiến trúc sư",
      'tab.d02': "// Marketplace / Web",
      'p3.title': "Sàn Thuê Trang Phục Cosplay",
      'p3.dossierSummary': "Nền tảng chuyên biệt cho vòng đời thuê trang phục: quản lý lịch trống, xác thực uy tín và ký quỹ cọc an toàn.",
      'p03.problemCopy': "Cho thuê gặp rủi ro xung đột lịch đặt, tiền cọc ký quỹ và hao mòn hư tổn mà giỏ hàng bán lẻ thông thường bó tay.",
      'p03.roleCopy': "Founder & Kiến trúc sư: Phỏng vấn chủ đồ và cosplayer, thiết kế state machine vòng đời thuê và cơ chế ký quỹ cọc.",
      'p03.solutionCopy': "Máy trạng thái giao dịch hữu hạn (Đăng → Giữ chỗ → Kiểm tra → Trả đồ → Quyết toán) kèm lịch trống trực quan.",
      'p03.outcomeCopy': "Phát hành bản thử nghiệm với các booking kiểm chứng. Kiến trúc niềm tin và luật chơi là tính năng quan trọng nhất.",
      'p03.tag1': "MARKETPLACE",
      'p03.tag2': "ESCROW DEPOSIT",
      'p03.tag3': "CALENDAR ENGINE",
      'p03.f1': "Listing",
      'p03.f2': "Matrix",
      'p03.f3': "Escrow",
      'p03.f4': "Settlement",
      'tab.p03': "Dự án 03 // Đấu Giá Realtime",
      'tab.r03Badge': "Product Spec & QA",
      'tab.d03': "// Realtime / FinTech",
      'p4.title': "Sàn Đấu Giá Realtime",
      'p4.dossierSummary': "Hệ thống đấu giá trực tuyến chịu tải cao, thiết kế cho sự toàn vẹn giao dịch, xác thực bid dưới 100ms và chốt phiên xác định.",
      'p04.problemCopy': "Lệnh bid gửi lên từng phần nghìn giây gây race condition, lệch timer và tranh chấp nếu thiếu máy chủ phân xử.",
      'p04.roleCopy': "Product Spec & Realtime QA: Xây dựng ma trận test kịch bản đồng thời, quy chuẩn WebSocket payload và kiểm thử ký quỹ.",
      'p04.solutionCopy': "Máy trạng thái máy chủ là Single Source of Truth duy nhất, bộ xác thực bid realtime và tự gia hạn chống bid trộm.",
      'p04.outcomeCopy': "Vận hành giả lập tải cao không lệch phiên hay tranh chấp. Niềm tin realtime đến từ tính xác định tuyệt đối.",
      'p04.tag1': "WEBSOCKETS",
      'p04.tag2': "ANTI-SNIPING",
      'p04.tag3': "FINTECH",
      'p04.f1': "Room Open",
      'p04.f2': "Bid Validator",
      'p04.f3': "Anti-Snipe",
      'p04.f4': "Settlement",
      'p2.title': "AI Vận Hành F&B Việt Nam",
      'p2.dossierSummary': "Biến camera an ninh thành dữ liệu vận hành có cấu trúc: Nhận diện sự kiện → Báo cáo bất thường → Tối ưu phục vụ sàn.",
      'p02.problemCopy': "Nhà hàng có nhiều video camera nhưng thiếu dữ liệu vận hành có cấu trúc về hàng đợi và thời gian quay vòng bàn.",
      'p02.roleCopy': "Product Lead & Khảo sát: Trực tiếp quan sát ca làm việc, xác định tín hiệu giá trị cao và quy chuẩn PRD kỹ thuật.",
      'p02.solutionCopy': "Cảm biến camera truyền luồng sự kiện chuẩn hóa, bộ phát hiện độ trễ và dashboard cảnh báo sự cố ca làm việc.",
      'p02.outcomeCopy': "Thử nghiệm tại chuỗi đối tác. Giảm 30% thời gian giám sát thủ công nhờ gắn AI vào thói quen vận hành.",
      'p02.tag1': "COMPUTER VISION",
      'p02.tag2': "B2B SAAS",
      'p02.tag3': "OPERATIONS",
      'p02.f1': "Camera Feed",
      'p02.f2': "CV Model",
      'p02.f3': "Event Stream",
      'p02.f4': "Floor Action",
      'tab.p04': "Tư duy 04 // Viễn Trắc Scrum",
      'tab.p05': "Tư duy 05 // Cổng Phát Hành QA",
      'tab.p06': "Tư duy 05 // Cổng Phát Hành QA",
      'tab.m04': "Tư duy 04 // Viễn Trắc Scrum",
      'tab.m05': "Tư duy 05 // Cổng Phát Hành QA",
      'tab.c06': "Ý tưởng 06 // F&B Camera AI",
      'tab.c07': "Ý tưởng 07 // Hệ Điều Hành Agent",
      'tab.c08': "Ý tưởng 08 // Tự Động Hóa Content",
      'tab.r05Badge': "Scrum Master",
      'tab.d05': "// Agile Delivery / Telemetry",
      'p5.title': "Hệ Thống AI Vận Hành Scrum",
      'p5.dossierSummary': "Chuyển hóa dữ liệu Daily Standup và phụ thuộc chéo thành viễn trắc vận hành có cấu trúc tự động đồng bộ Jira/Lark.",
      'p05.problemCopy': "Daily Standup thường bị thoái hóa thành thẩm vấn tiến độ thụ động, che giấu blocker và phụ thuộc chéo giữa các nhóm.",
      'p05.roleCopy': "Scrum Master & Thiết kế Quy trình: Điều phối Agile, vẽ bản đồ điểm nghẽn QA, Dev, Art và tự động hóa telemetry.",
      'p05.solutionCopy': "Bộ bóc tách cập nhật bất đồng bộ chuyển đổi cam kết và blocker thành đồ thị phân phối đồng bộ Jira/Lark.",
      'p05.outcomeCopy': "Tiết kiệm 40% thời gian họp, phát hiện sớm blocker trước 2 ngày, nâng cao độ thông suốt dòng việc.",
      'p05.tag1': "DELIVERY TELEMETRY",
      'p05.tag2': "WORKFLOW AUTOMATION",
      'p05.tag3': "SCRUM OPS",
      'p05.f1': "Async Daily",
      'p05.f2': "Parser",
      'p05.f3': "Dependency Graph",
      'p05.f4': "Velocity",
      'tab.r06Badge': "QA Lead",
      'tab.d06': "// Quality Engineering / Pipeline",
      'p6.title': "Pipeline QA → Release Workflow",
      'p6.dossierSummary': "Xóa bỏ nút thắt cổ chai QA cuối sprint bằng tiêu chuẩn QA Ready Gate, kiểm thử hồi quy tự động và tiêu chí release rõ ràng.",
      'p06.problemCopy': "Bàn giao code trễ dồn ép QA cứu hỏa cuối sprint, gây sót lỗi nghiêm trọng và phát sinh hotfix trên bản live.",
      'p06.roleCopy': "QA Lead & Kiểm soát Cổng Phát hành: Thiết lập checklist QA Ready Gate, chủ trì kế hoạch hồi quy đa nền tảng.",
      'p06.solutionCopy': "Chu trình shift-left: Bàn giao Dev → Cổng QA Ready → Smoke Test tự động → Ma trận hồi quy sâu → Cổng duyệt Release.",
      'p06.outcomeCopy': "Chấm dứt tăng ca cứu hỏa, giảm hơn 60% hotfix live, chứng minh QA là đòn bẩy gia tốc delivery.",
      'p06.tag1': "PLAYWRIGHT",
      'p06.tag2': "CI/CD WORKFLOWS",
      'p06.tag3': "REGRESSION GATE",
      'p06.f1': "Dev Handshake",
      'p06.f2': "QA Ready",
      'p06.f3': "Smoke Test",
      'p06.f4': "Production Ship",
      'tab.p07': "Ý tưởng 07 // Hệ Điều Hành Agent",
      'tab.r07Badge': "AI Architect",
      'tab.d07': "// Agentic OS / Lab",
      'p7.title': "Hệ Điều Hành Đa-Agent Hermes",
      'p7.dossierSummary': "Thử nghiệm không gian làm việc đa tác tử với bảng điều phối trực quan, định danh hành vi agent và đồ thị bộ nhớ dài hạn.",
      'p07.problemCopy': "Giao diện chat truyền thống che giấu quá trình suy luận nhiều bước và gọi tool của AI, làm mất niềm tin vận hành.",
      'p07.roleCopy': "Kiến trúc sư Workspace AI & UX: Thiết kế bề mặt giám sát can thiệp (HITL), định danh role agent và UI đồ thị bộ nhớ.",
      'p07.solutionCopy': "Bảng điều phối trung tâm dạng node canvas tương tác, đồ thị bộ nhớ vector và cơ chế quay ngược bước (rollback).",
      'p07.outcomeCopy': "Phòng thí nghiệm đa tác tử hoạt động ổn định. Niềm tin vào AI đến từ sự minh bạch vận hành và khả năng làm chủ.",
      'p07.tag1': "MULTI-AGENT",
      'p07.tag2': "TOOL EXECUTION",
      'p07.tag3': "AGENTIC WORKFLOW",
      'p07.f1': "Intent Ingestion",
      'p07.f2': "Orchestrator",
      'p07.f3': "Agent Nodes",
      'p07.f4': "Audited Outcome",
      'tab.p08': "Ý tưởng 08 // Tự Động Hóa Content",
      'tab.r08Badge': "Growth Engineer",
      'tab.d08': "// Growth Ops / Automation",
      'p8.title': "Tự Động Hóa Affiliate AI",
      'p8.dossierSummary': "Chuỗi cung ứng nội dung tự động từ viễn trắc sản phẩm đến kịch bản hook, dựng video theo chương trình và đo lường đơn hàng.",
      'p08.problemCopy': "Tự động tạo video hàng loạt chỉ tạo view ảo mà không đem lại doanh thu thật nếu thiếu đo lường chuyển đổi khép kín.",
      'p08.roleCopy': "Kỹ sư Tăng trưởng & Hệ thống: Phân tích catalog sản phẩm, thiết kế ma trận hook và xây dựng pipeline dựng video tự động.",
      'p08.solutionCopy': "Nhà máy nội dung vòng lặp kín: Trích xuất catalog → Bóc tách pain point → Ma trận hook → Ghép video → Đo lường đơn hàng.",
      'p08.outcomeCopy': "Chuỗi sản xuất tự động tối ưu trực tiếp cho doanh số thay vì view; tự động ưu tiên kịch bản bán chạy nhất.",
      'p08.tag1': "CONTENT ENGINE",
      'p08.tag2': "ATTRIBUTION",
      'p08.tag3': "AUTOMATION",
      'p08.f1': "Product Catalog",
      'p08.f2': "Hook Matrix",
      'p08.f3': "Assembly",
      'p08.f4': "Conversion",
      'p2.desc': "Ứng dụng AI camera & computer vision tối ưu vận hành và năng suất phục vụ nhà hàng.",
      'contact.msgPlaceholder': "Chia sẻ về sản phẩm, dự án hoặc bài toán của bạn...",
      'contact.nextBtn': "Tiếp tục (1/2) →",
      'contact.nameLabel': "Họ và tên",
      'contact.namePlaceholder': "Tên của bạn",
      'contact.emailLabel': "Email",
      'contact.emailPlaceholder': "email.cua.ban@example.com",
      'contact.backBtn': "← Quay lại",
      'contact.sendBtn': "Gửi tin nhắn (2/2) ✈",
      'contact.successTitle': "Đã nhận được tin nhắn! ✨",
      'contact.successDesc': "Cảm ơn bạn đã liên hệ. Tôi sẽ phản hồi trong vòng 24 giờ.",
      'playground.title': "JUST FOR FUN",
      'p01.title': "Hỗ Trợ Hành Vi ADHD",
      'p01.dossierSummary': "Hệ thống hỗ trợ hành vi tập trung vào executive dysfunction: xóa bỏ tê liệt quyết định và kích hoạt vi hành động qua Cây Kỹ Năng trực quan.",
      'p1.problemCopy': "Danh sách task dày đặc gây tê liệt nhận thức; điểm nghẽn cốt lõi nằm ở bước khởi sự vi hành động đầu tiên.",
      'p1.roleCopy': "Solo Founder & Thiết kế Product: Khảo sát rào cản nhận thức, viết PRD kỹ thuật và lập trình PWA offline-first.",
      'p1.solutionCopy': "Hạt nhân deterministic FSM chạy offline 100%, adapter AI phân rã task và Cây Kỹ Năng phản ánh tiến bộ.",
      'p1.outcomeCopy': "Phát hành PWA thực tế. Giảm 45% thời gian chần chừ bắt đầu hành động nhờ hệ thống quy tắc ổn định.",
      'p1.tag1': "EXECUTIVE FUNCTION",
      'p1.tag2': "RULE ENGINE",
      'p1.tag3': "OFFLINE PWA",
      'p1.f1': "Check-in",
      'p1.f2': "Capacity Rule",
      'p1.f3': "Action Engine",
      'p1.f4': "Skill XP",
      'p02.title': "AI Vận Hành F&B Việt Nam",
      'p02.desc': "Ứng dụng AI camera & computer vision tối ưu vận hành và năng suất phục vụ nhà hàng.",
      'p02.dossierSummary': "Biến camera an ninh thành dữ liệu vận hành có cấu trúc: Nhận diện sự kiện → Báo cáo bất thường → Tối ưu phục vụ sàn.",
      'p2.problemCopy': "Nhà hàng có nhiều video camera nhưng thiếu dữ liệu vận hành có cấu trúc về hàng đợi và thời gian quay vòng bàn.",
      'p2.roleCopy': "Product Lead & Khảo sát: Trực tiếp quan sát ca làm việc, xác định tín hiệu giá trị cao và quy chuẩn PRD kỹ thuật.",
      'p2.solutionCopy': "Cảm biến camera truyền luồng sự kiện chuẩn hóa, bộ phát hiện độ trễ và dashboard cảnh báo sự cố ca làm việc.",
      'p2.outcomeCopy': "Thử nghiệm tại chuỗi đối tác. Giảm 30% thời gian giám sát thủ công nhờ gắn AI vào thói quen vận hành.",
      'p2.tag1': "COMPUTER VISION",
      'p2.tag2': "B2B SAAS",
      'p2.tag3': "OPERATIONS",
      'p2.f1': "Camera Feed",
      'p2.f2': "CV Model",
      'p2.f3': "Event Stream",
      'p2.f4': "Floor Action",
      'p03.title': "Sàn Thuê Trang Phục Cosplay",
      'p03.dossierSummary': "Nền tảng chuyên biệt cho vòng đời thuê trang phục: quản lý lịch trống, xác thực uy tín và ký quỹ cọc an toàn.",
      'p3.problemCopy': "Cho thuê gặp rủi ro xung đột lịch đặt, tiền cọc ký quỹ và hao mòn hư tổn mà giỏ hàng bán lẻ thông thường bó tay.",
      'p3.roleCopy': "Founder & Kiến trúc sư: Phỏng vấn chủ đồ và cosplayer, thiết kế state machine vòng đời thuê và cơ chế ký quỹ cọc.",
      'p3.solutionCopy': "Máy trạng thái giao dịch hữu hạn (Đăng → Giữ chỗ → Kiểm tra → Trả đồ → Quyết toán) kèm lịch trống trực quan.",
      'p3.outcomeCopy': "Phát hành bản thử nghiệm với các booking kiểm chứng. Kiến trúc niềm tin và luật chơi là tính năng quan trọng nhất.",
      'p3.tag1': "MARKETPLACE",
      'p3.tag2': "ESCROW DEPOSIT",
      'p3.tag3': "CALENDAR ENGINE",
      'p3.f1': "Listing",
      'p3.f2': "Matrix",
      'p3.f3': "Escrow",
      'p3.f4': "Settlement",
      'p04.title': "Sàn Đấu Giá Realtime",
      'p04.dossierSummary': "Hệ thống đấu giá trực tuyến chịu tải cao, thiết kế cho sự toàn vẹn giao dịch, xác thực bid dưới 100ms và chốt phiên xác định.",
      'p4.problemCopy': "Lệnh bid gửi lên từng phần nghìn giây gây race condition, lệch timer và tranh chấp nếu thiếu máy chủ phân xử.",
      'p4.roleCopy': "Product Spec & Realtime QA: Xây dựng ma trận test kịch bản đồng thời, quy chuẩn WebSocket payload và kiểm thử ký quỹ.",
      'p4.solutionCopy': "Máy trạng thái máy chủ là Single Source of Truth duy nhất, bộ xác thực bid realtime và tự gia hạn chống bid trộm.",
      'p4.outcomeCopy': "Vận hành giả lập tải cao không lệch phiên hay tranh chấp. Niềm tin realtime đến từ tính xác định tuyệt đối.",
      'p4.tag1': "WEBSOCKETS",
      'p4.tag2': "ANTI-SNIPING",
      'p4.tag3': "FINTECH",
      'p4.f1': "Room Open",
      'p4.f2': "Bid Validator",
      'p4.f3': "Anti-Snipe",
      'p4.f4': "Settlement",
      'p05.title': "Hệ Thống AI Vận Hành Scrum",
      'p05.dossierSummary': "Chuyển hóa dữ liệu Daily Standup và phụ thuộc chéo thành viễn trắc vận hành có cấu trúc tự động đồng bộ Jira/Lark.",
      'p5.problemCopy': "Daily Standup thường bị thoái hóa thành thẩm vấn tiến độ thụ động, che giấu blocker và phụ thuộc chéo giữa các nhóm.",
      'p5.roleCopy': "Scrum Master & Thiết kế Quy trình: Điều phối Agile, vẽ bản đồ điểm nghẽn QA, Dev, Art và tự động hóa telemetry.",
      'p5.solutionCopy': "Bộ bóc tách cập nhật bất đồng bộ chuyển đổi cam kết và blocker thành đồ thị phân phối đồng bộ Jira/Lark.",
      'p5.outcomeCopy': "Tiết kiệm 40% thời gian họp, phát hiện sớm blocker trước 2 ngày, nâng cao độ thông suốt dòng việc.",
      'p5.tag1': "DELIVERY TELEMETRY",
      'p5.tag2': "WORKFLOW AUTOMATION",
      'p5.tag3': "SCRUM OPS",
      'p5.f1': "Async Daily",
      'p5.f2': "Parser",
      'p5.f3': "Dependency Graph",
      'p5.f4': "Velocity",
      'p06.title': "Pipeline QA → Release Workflow",
      'p06.dossierSummary': "Xóa bỏ nút thắt cổ chai QA cuối sprint bằng tiêu chuẩn QA Ready Gate, kiểm thử hồi quy tự động và tiêu chí release rõ ràng.",
      'p6.problemCopy': "Bàn giao code trễ dồn ép QA cứu hỏa cuối sprint, gây sót lỗi nghiêm trọng và phát sinh hotfix trên bản live.",
      'p6.roleCopy': "QA Lead & Kiểm soát Cổng Phát hành: Thiết lập checklist QA Ready Gate, chủ trì kế hoạch hồi quy đa nền tảng.",
      'p6.solutionCopy': "Chu trình shift-left: Bàn giao Dev → Cổng QA Ready → Smoke Test tự động → Ma trận hồi quy sâu → Cổng duyệt Release.",
      'p6.outcomeCopy': "Chấm dứt tăng ca cứu hỏa, giảm hơn 60% hotfix live, chứng minh QA là đòn bẩy gia tốc delivery.",
      'p6.tag1': "PLAYWRIGHT",
      'p6.tag2': "CI/CD WORKFLOWS",
      'p6.tag3': "REGRESSION GATE",
      'p6.f1': "Dev Handshake",
      'p6.f2': "QA Ready",
      'p6.f3': "Smoke Test",
      'p6.f4': "Production Ship",
      'p07.title': "Hệ Điều Hành Đa-Agent Hermes",
      'p07.dossierSummary': "Thử nghiệm không gian làm việc đa tác tử với bảng điều phối trực quan, định danh hành vi agent và đồ thị bộ nhớ dài hạn.",
      'p7.problemCopy': "Giao diện chat truyền thống che giấu quá trình suy luận nhiều bước và gọi tool của AI, làm mất niềm tin vận hành.",
      'p7.roleCopy': "Kiến trúc sư Workspace AI & UX: Thiết kế bề mặt giám sát can thiệp (HITL), định danh role agent và UI đồ thị bộ nhớ.",
      'p7.solutionCopy': "Bảng điều phối trung tâm dạng node canvas tương tác, đồ thị bộ nhớ vector và cơ chế quay ngược bước (rollback).",
      'p7.outcomeCopy': "Phòng thí nghiệm đa tác tử hoạt động ổn định. Niềm tin vào AI đến từ sự minh bạch vận hành và khả năng làm chủ.",
      'p7.tag1': "MULTI-AGENT",
      'p7.tag2': "TOOL EXECUTION",
      'p7.tag3': "AGENTIC WORKFLOW",
      'p7.f1': "Intent Ingestion",
      'p7.f2': "Orchestrator",
      'p7.f3': "Agent Nodes",
      'p7.f4': "Audited Outcome",
      'p08.title': "Tự Động Hóa Affiliate AI",
      'p08.dossierSummary': "Chuỗi cung ứng nội dung tự động từ viễn trắc sản phẩm đến kịch bản hook, dựng video theo chương trình và đo lường đơn hàng.",
      'p8.problemCopy': "Tự động tạo video hàng loạt chỉ tạo view ảo mà không đem lại doanh thu thật nếu thiếu đo lường chuyển đổi khép kín.",
      'p8.roleCopy': "Kỹ sư Tăng trưởng & Hệ thống: Phân tích catalog sản phẩm, thiết kế ma trận hook và xây dựng pipeline dựng video tự động.",
      'p8.solutionCopy': "Nhà máy nội dung vòng lặp kín: Trích xuất catalog → Bóc tách pain point → Ma trận hook → Ghép video → Đo lường đơn hàng.",
      'p8.outcomeCopy': "Chuỗi sản xuất tự động tối ưu trực tiếp cho doanh số thay vì view; tự động ưu tiên kịch bản bán chạy nhất.",
      'p8.tag1': "CONTENT ENGINE",
      'p8.tag2': "ATTRIBUTION",
      'p8.tag3': "AUTOMATION",
      'p8.f1': "Product Catalog",
      'p8.f2': "Hook Matrix",
      'p8.f3': "Assembly",
      'p8.f4': "Conversion"
    }
  };

  function setLanguage(lang, isInitialRestore = false) {
    if (!translations[lang]) return;
    document.documentElement.lang = lang;
    localStorage.setItem('portfolio_lang', lang);
    localStorage.setItem('site_lang', lang);

    document.querySelectorAll('.lang-btn').forEach(btn => {
      const active = btn.getAttribute('data-lang') === lang;
      btn.classList.toggle('active', active);
      if (active) {
        btn.classList.add('bg-[var(--ca-yellow)]');
        btn.classList.remove('text-[var(--ca-ink)]/60');
      } else {
        btn.classList.remove('bg-[var(--ca-yellow)]');
        btn.classList.add('text-[var(--ca-ink)]/60');
      }
    });

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key] !== undefined) {
        el.textContent = translations[lang][key];
      }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (translations[lang] && translations[lang][key] !== undefined) {
        el.setAttribute('placeholder', translations[lang][key]);
      }
    });

    // Notify other scripts (e.g. case-study.js)
    window.dispatchEvent(new CustomEvent('languagechange', {
      detail: { lang, isInitialRestore }
    }));

    // Re-trigger StaggerText only on headings that changed translation and only after user action
    if (!isInitialRestore) {
      document.querySelectorAll('[data-stagger-text], .ca-stagger-text').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (key && translations[lang] && translations[lang][key]) {
          el.dataset.staggerInit = 'false';
          setupStaggerText(el, translations[lang][key]);
          triggerStaggerText(el);
        }
      });
    }
  }

  window.getLanguage = function() {
    return localStorage.getItem('portfolio_lang') || localStorage.getItem('site_lang') || 'en';
  };
  window.setLanguage = setLanguage;

  // Bind Language Buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const lang = btn.getAttribute('data-lang');
      if (lang) {
        setLanguage(lang);
      }
    });
  });

  // Initial Language Restore
  const savedLang = window.getLanguage();
  setLanguage(savedLang, true);

  /* ==========================================================================
     CREATIVE ARTSY ANIMATION & INTERACTION ENGINE
     ========================================================================== */

  // 1. StaggerText: Splits headings into animated spring characters
  function setupStaggerText(el, customText) {
    if (!el || el.dataset.staggerInit === 'true') return;

    let text = customText;
    if (!text && el.dataset.originalText) {
      text = el.dataset.originalText;
    }
    if (!text) {
      const srOnlyEl = el.querySelector('.sr-only');
      if (srOnlyEl) {
        text = srOnlyEl.textContent.trim();
      } else {
        text = el.textContent.trim();
      }
    }
    if (!text) return;

    el.dataset.staggerInit = 'true';
    el.dataset.originalText = text;
    el.setAttribute('aria-label', text);

    const staggerDelay = parseFloat(el.dataset.stagger || '0.04');
    const baseDelay = parseFloat(el.dataset.delay || '0');
    const words = text.split(/\s+/);

    el.innerHTML = '';

    let charGlobalIdx = 0;
    words.forEach((word, wIdx) => {
      const wordSpan = document.createElement('span');
      wordSpan.className = 'stagger-word inline-block whitespace-nowrap';
      wordSpan.setAttribute('aria-hidden', 'true');

      Array.from(word).forEach((char) => {
        const charSpan = document.createElement('span');
        charSpan.className = 'stagger-char inline-block';
        charSpan.textContent = char;
        const delay = baseDelay + (charGlobalIdx * staggerDelay);
        charSpan.style.transitionDelay = `${delay.toFixed(3)}s`;
        wordSpan.appendChild(charSpan);
        charGlobalIdx++;
      });

      el.appendChild(wordSpan);
      if (wIdx < words.length - 1) {
        const space = document.createTextNode(' ');
        el.appendChild(space);
      }
    });
  }

  function triggerStaggerText(el) {
    if (!el) return;
    // Force reflow so the browser registers the initial transform & opacity state
    void el.offsetWidth;
    requestAnimationFrame(() => {
      const chars = el.querySelectorAll('.stagger-char');
      chars.forEach(ch => ch.classList.add('is-visible'));
    });
  }

  window.setupStaggerText = setupStaggerText;
  window.triggerStaggerText = triggerStaggerText;

  function initAllStaggerText() {
    const targets = document.querySelectorAll('[data-stagger-text], .ca-stagger-text');
    targets.forEach(el => setupStaggerText(el));

    const hasSplash = document.querySelector('.ca-splash');
    const heroDelay = hasSplash ? 1650 : 150;

    // Hero name triggers after splash screen or immediate
    const heroStagger = document.querySelector('.hero-stagger-name');
    if (heroStagger) {
      setTimeout(() => {
        triggerStaggerText(heroStagger);
      }, heroDelay);
    }

    // Other headings trigger via IntersectionObserver or immediate if visible
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          triggerStaggerText(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.05, rootMargin: '0px 0px -20px 0px' });

    targets.forEach(el => {
      if (!el.classList.contains('hero-stagger-name')) {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          // Immediately visible on screen: trigger with micro-delay for smooth entrance
          setTimeout(() => {
            triggerStaggerText(el);
          }, 80);
        } else {
          observer.observe(el);
        }
      }
    });
  }

  // 2. Pop & Reveal Animations with IntersectionObserver
  function initScrollAnimations() {
    const hasSplash = document.querySelector('.ca-splash');
    const heroBoxDelay = hasSplash ? 1500 : 80;

    // Hero Name Box Pop
    const heroBox = document.getElementById('heroNameBox') || document.querySelector('.hero-pop-box');
    if (heroBox) {
      setTimeout(() => {
        heroBox.classList.add('is-popped');
      }, heroBoxDelay);
    }

    const popEls = document.querySelectorAll('[data-pop], .ca-pop');
    const revealEls = document.querySelectorAll('[data-reveal], .ca-reveal');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const delay = el.dataset.delay ? parseFloat(el.dataset.delay) : 0;
          if (delay > 0) {
            el.style.transitionDelay = `${delay}s`;
          }
          if (el.matches('[data-pop], .ca-pop')) {
            el.classList.add('is-popped');
          }
          if (el.matches('[data-reveal], .ca-reveal')) {
            el.classList.add('is-revealed');
          }
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -30px 0px' });

    popEls.forEach(el => {
      if (el !== heroBox) observer.observe(el);
    });
    revealEls.forEach(el => observer.observe(el));
  }

  // 3. CountUp Counter Animations
  function initCounters() {
    const counterEls = document.querySelectorAll('[data-counter]');
    if (!counterEls.length) return;

    function easeOutCubic(t) {
      return 1 - Math.pow(1 - t, 3);
    }

    function animateCounter(el) {
      const target = parseFloat(el.dataset.counter || '0');
      const suffix = el.dataset.suffix || '';
      const prefix = el.dataset.prefix || '';
      const duration = 1600;
      const startTime = performance.now();

      function update(now) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const current = Math.floor(easeOutCubic(progress) * target);
        el.textContent = `${prefix}${current}${suffix}`;
        if (progress < 1) {
          requestAnimationFrame(update);
        } else {
          el.textContent = `${prefix}${target}${suffix}`;
        }
      }
      requestAnimationFrame(update);
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    counterEls.forEach(el => observer.observe(el));
  }

  // 4. Interactive Draggable Board & Zoom for Playground
  function initPlaygroundBoard() {
    const canvas = document.getElementById('playgroundCanvas');
    const board = document.getElementById('playgroundBoard');
    if (!canvas || !board) return;

    let zoom = 1;
    const minZoom = 0.65;
    const maxZoom = 1.45;
    const zoomStep = 0.15;

    function setZoom(newZoom) {
      zoom = Math.max(minZoom, Math.min(maxZoom, newZoom));
      board.style.transform = `scale(${zoom})`;
    }

    document.getElementById('zoomInBtn')?.addEventListener('click', () => setZoom(zoom + zoomStep));
    document.getElementById('zoomOutBtn')?.addEventListener('click', () => setZoom(zoom - zoomStep));
    document.getElementById('zoomResetBtn')?.addEventListener('click', () => {
      setZoom(1);
      cards.forEach((card) => {
        if (card.dataset.origLeft && card.dataset.origTop) {
          card.style.left = card.dataset.origLeft;
          card.style.top = card.dataset.origTop;
        }
      });
    });

    const cards = board.querySelectorAll('.draggable-card');
    let highestZ = 20;

    cards.forEach(card => {
      card.dataset.origLeft = card.style.left || '0px';
      card.dataset.origTop = card.style.top || '0px';

      let isDragging = false;
      let startX = 0;
      let startY = 0;
      let startLeft = 0;
      let startTop = 0;

      card.addEventListener('pointerdown', (e) => {
        e.preventDefault();
        isDragging = true;
        startX = e.clientX;
        startY = e.clientY;
        startLeft = parseFloat(card.style.left || '0');
        startTop = parseFloat(card.style.top || '0');
        highestZ++;
        card.style.zIndex = highestZ;
        card.setPointerCapture(e.pointerId);
      });

      card.addEventListener('pointermove', (e) => {
        if (!isDragging) return;
        const dx = (e.clientX - startX) / zoom;
        const dy = (e.clientY - startY) / zoom;
        card.style.left = `${startLeft + dx}px`;
        card.style.top = `${startTop + dy}px`;
      });

      const stopDrag = (e) => {
        if (!isDragging) return;
        isDragging = false;
        try {
          card.releasePointerCapture(e.pointerId);
        } catch(err) {}
      };

      card.addEventListener('pointerup', stopDrag);
      card.addEventListener('pointercancel', stopDrag);
    });
  }

  // 5. Sticky Stacking Cards Active Tab Scroll Spy
  function initStickyCardSpy() {
    const articles = document.querySelectorAll('main#top section#work article[id^="project-"]');
    if (!articles.length) return;

    window.addEventListener('scroll', () => {
      articles.forEach(art => {
        const rect = art.getBoundingClientRect();
        if (rect.top <= 110 && rect.bottom > 160) {
          art.classList.add('card-sticky-active');
        } else {
          art.classList.remove('card-sticky-active');
        }
      });
    }, { passive: true });
  }

  // 6. About Page Smooth Scroll & Section Spy
  function initAboutTabScroll() {
    const tabButtons = document.querySelectorAll('.about-sidebar-tab');
    if (!tabButtons.length) return;

    tabButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetId = btn.dataset.target;
        const section = document.getElementById(targetId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });

    const sections = ['bio', 'story', 'work'].map(id => document.getElementById(id)).filter(Boolean);
    window.addEventListener('scroll', () => {
      let currentId = '';
      sections.forEach(sec => {
        if (sec.getBoundingClientRect().top <= 200) {
          currentId = sec.id;
        }
      });
      if (currentId) {
        tabButtons.forEach(btn => {
          const isActive = btn.dataset.target === currentId;
          btn.classList.toggle('bg-[var(--ca-yellow)]', isActive);
          btn.classList.toggle('text-[var(--ca-ink)]', isActive);
        });
      }
    }, { passive: true });
  }

  // 7. Interactive Invert Hover Lens (Follows mouse cursor - decompiled from template eu hook)
  function initHoverLenses() {
    const targets = [
      {
        containerSelector: '.group\\/name, .group-name',
        lensSelector: '.ca-hover-lens, .ca-viewfinder',
        bounds: [3, 97]
      },
      {
        containerSelector: '.group\\/talk, .group-talk',
        lensSelector: '.ca-hover-lens, .ca-viewfinder',
        bounds: [3, 97]
      },
      {
        containerSelector: '[data-card-lens], .ca-card-lens-host',
        lensSelector: '.ca-see-lens',
        bounds: null
      }
    ];

    targets.forEach(({ containerSelector, lensSelector }) => {
      const containers = document.querySelectorAll(containerSelector);
      containers.forEach(container => {
        const lens = container.querySelector(lensSelector);
        if (!lens) return;

        let rafId = 0;

        function updatePosition(e) {
          const rect = container.getBoundingClientRect();
          if (rect.width <= 0 || rect.height <= 0) return;
          const x = ((e.clientX - rect.left) / rect.width) * 100;
          const y = ((e.clientY - rect.top) / rect.height) * 100;
          lens.style.left = `${x}%`;
          lens.style.top = `${y}%`;
        }

        container.addEventListener('mouseenter', (e) => {
          updatePosition(e);
        });

        container.addEventListener('mousemove', (e) => {
          cancelAnimationFrame(rafId);
          rafId = requestAnimationFrame(() => {
            updatePosition(e);
          });
        });

        container.addEventListener('mouseleave', (e) => {
          cancelAnimationFrame(rafId);
          updatePosition(e);
        });
      });
    });
  }

  // Run all animation engines on DOMContentLoaded or immediate
  function initAllEngines() {
    initAllStaggerText();
    initScrollAnimations();
    initCounters();
    initPlaygroundBoard();
    initStickyCardSpy();
    initAboutTabScroll();
    initHoverLenses();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAllEngines);
  } else {
    initAllEngines();
  }
})();
