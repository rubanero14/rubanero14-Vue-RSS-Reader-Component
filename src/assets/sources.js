import util from "../util";

const sources = util.sources;

// Constructing and adding new source into sources array by calling the util.NewSource function by passing relevant params within it
util.NewSource("Investing.com", null, "in-logo.jpg", [
  ["Economy News", "https://www.investing.com/rss/news_14.rss"],
  ["Economic Indicators News", "https://www.investing.com/rss/news_95.rss"],
  ["Stock Market News", "https://www.investing.com/rss/news_25.rss"],
  ["ETF News", "https://www.investing.com/rss/stock_ETFs.rss"],
  ["Foreign Exchange News", "https://www.investing.com/rss/news_1.rss"],
]);

util.NewSource("Business Wire", null, "bw-logo.png", [
  [
    "Dividend News",
    "https://feed.businesswire.com/rss/home/?rss=G1QFDERJXkJeEF9ZVA==&_gl=1*z96yy4*_ga*OTYwNTQzODE4LjE2NjYwNzU0MTM.*_ga_ZQWF70T3FK*MTY2NjA4MTU2My4yLjEuMTY2NjA4MjAxOS4wLjAuMA..",
  ],
  [
    "IPO News",
    "https://feed.businesswire.com/rss/home/?rss=G1QFDERJXkJeEF9YXQ==&_gl=1*oudbjk*_ga*OTYwNTQzODE4LjE2NjYwNzU0MTM.*_ga_ZQWF70T3FK*MTY2NjA4MTU2My4yLjAuMTY2NjA4MTU2My4wLjAuMA..",
  ],
  [
    "Merger/Acquisition News",
    "https://feed.businesswire.com/rss/home/?rss=G1QFDERJXkJeEFtRWA==&_gl=1*ewsir6*_ga*OTYwNTQzODE4LjE2NjYwNzU0MTM.*_ga_ZQWF70T3FK*MTY2NjA3NDIwOS4xLjEuMTY2NjA3NTQxMi4wLjAuMA..",
  ],
  [
    "Share Issue News",
    "https://feed.businesswire.com/rss/home/?rss=G1QFDERJXkJeGVtWXA==&_gl=1*ji7i1m*_ga*OTYwNTQzODE4LjE2NjYwNzU0MTM.*_ga_ZQWF70T3FK*MTY2NjA3NDIwOS4xLjEuMTY2NjA3NTQzNC4wLjAuMA..",
  ],
  [
    "Stock Split News",
    "https://feed.businesswire.com/rss/home/?rss=G1QFDERJXkJeGVtWXg==&_gl=1*1ysdfcb*_ga*OTYwNTQzODE4LjE2NjYwNzU0MTM.*_ga_ZQWF70T3FK*MTY2NjA3NDIwOS4xLjEuMTY2NjA3NTQ0MS4wLjAuMA..",
  ],
  [
    "Stock Sale/Buyback News",
    "https://feed.businesswire.com/rss/home/?rss=G1QFDERJXkJeGVtWXw==&_gl=1*11xwt23*_ga*OTYwNTQzODE4LjE2NjYwNzU0MTM.*_ga_ZQWF70T3FK*MTY2NjA3NDIwOS4xLjEuMTY2NjA3NTQ0NS4wLjAuMA..",
  ],
  [
    "SPAC News",
    "https://feed.businesswire.com/rss/home/?rss=G1QFDERJXkJaF1hWXw==&_gl=1*9mr1pq*_ga*OTYwNTQzODE4LjE2NjYwNzU0MTM.*_ga_ZQWF70T3FK*MTY2NjA3NDIwOS4xLjEuMTY2NjA3NTQ1MS4wLjAuMA..",
  ],
  [
    "Closed End Fund News",
    "https://feed.businesswire.com/rss/home/?rss=G1QFDERJXkJeGVtYXg==&_gl=1*mau74y*_ga*OTYwNTQzODE4LjE2NjYwNzU0MTM.*_ga_ZQWF70T3FK*MTY2NjA4MTU2My4yLjEuMTY2NjA4MTczMC4wLjAuMA..",
  ],
]);

util.NewSource("GlobeNewswire", null, "gnw.jpg", [
  [
    "Dividend Reports",
    "https://www.globenewswire.com/RssFeed/subjectcode/12-Dividend%20Reports%20and%20Estimates/feedTitle/GlobeNewswire%20-%20Dividend%20Reports%20and%20Estimates",
  ],
  [
    "Company Announcement",
    "https://www.globenewswire.com/RssFeed/subjectcode/9-Company%20Announcement/feedTitle/GlobeNewswire%20-%20Company%20Announcement",
  ],
  [
    "Conference Calls",
    "https://www.globenewswire.com/RssFeed/subjectcode/89-Conference%20Calls%202f%20Webcasts/feedTitle/GlobeNewswire%20-%20Conference%20Calls,%20Webcasts",
  ],
  [
    "Initial Public Offerings",
    "https://www.globenewswire.com/RssFeed/subjectcode/21-Initial%20Public%20Offerings/feedTitle/GlobeNewswire%20-%20Initial%20Public%20Offerings",
  ],
  [
    "Earnings Releases",
    "https://www.globenewswire.com/RssFeed/subjectcode/13-Earnings%20Releases%20And%20Operating%20Results/feedTitle/GlobeNewswire%20-%20Earnings%20Releases%20And%20Operating%20Results",
  ],
  [
    "Directors And Officers",
    "https://www.globenewswire.com/RssFeed/subjectcode/11-Directors%20And%20Officers/feedTitle/GlobeNewswire%20-%20Directors%20And%20Officers",
  ],
  [
    "Insider's Buy & Sell",
    "https://www.globenewswire.com/RssFeed/subjectcode/22-Insider%2027s%20Buy%202fSell/feedTitle/GlobeNewswire%20-%20Insider%20s%20Buy,%20Sell",
  ],
  [
    "Interim Information",
    "https://www.globenewswire.com/RssFeed/subjectcode/66-Interim%20Information/feedTitle/GlobeNewswire%20-%20Interim%20Information",
  ],
  [
    "Funds Information",
    "https://www.globenewswire.com/RssFeed/subjectcode/80-Investment%20Fund%20Information/feedTitle/GlobeNewswire%20-%20Investment%20Fund%20Information",
  ],
  [
    "Net Asset Value",
    "https://www.globenewswire.com/RssFeed/subjectcode/62-Net%20Asset%20Value/feedTitle/GlobeNewswire%20-%20Net%20Asset%20Value",
  ],
  [
    "Press Releases",
    "https://www.globenewswire.com/RssFeed/subjectcode/72-Press%20Releases/feedTitle/GlobeNewswire%20-%20Press%20Releases",
  ],
]);

util.NewSource(
  "Finance Asia",
  null,
  "fa-logo.jpg",
  null,
  ["Markets", "Debt", "Equity", "Debt-Research"],
  ["https://www.financeasia.com/rss/category/", "item"]
);

util.NewSource(
  "Trading Economics",
  null,
  "te-logo.jfif",
  null,
  [
    "Consumer Price Index CPI",
    "GDP Annual Growth Rate",
    "Core Inflation Rate",
    "Unemployment Change",
    "Retail Sales MoM",
    "NonFarm Payrolls Private",
    "Interest Rate",
    "Weapons Sales",
  ],
  [
    "https://tradingeconomics.com/rss/news.aspx?i=",
    "item.replaceAll(' ','+')",
    "",
  ]
);

util.NewSource(
  "Seeking Alpha",
  "https://seekingalpha.com/samw/static/images/favicon-32x32.png",
  "sa-logo.webp",
  [
    ["Market Currents", "https://seekingalpha.com/market_currents.xml"],
    ["Editors Picks", "https://seekingalpha.com/tag/editors-picks.xml"],
    ["IPO Analysis", "https://seekingalpha.com/tag/ipo-analysis.xml"],
    ["Transcripts", "https://seekingalpha.com/sector/transcripts.xml"],
    ["Wall St Breakfast", "https://seekingalpha.com/tag/wall-st-breakfast.xml"],
    [
      "ETF Portfolio Strategy",
      "https://seekingalpha.com/tag/etf-portfolio-strategy.xml",
    ],
  ]
);

util.NewSource("Zacks", null, "zk-logo.png", [
  ["Press Release", "https://scr.zacks.com/rss/pressrelease.aspx"],
]);

util.NewSource(
  "S&P Global",
  "https://www.spglobal.com/_assets/images/icons/SPG_favicon_wht_32x32.ico",
  "sp-logo.png",
  [
    [
      "Corporate News",
      "https://www.spglobal.com/spdji/en/rss/rss-details/?rssFeedName=corporate-news",
    ],
  ]
);

util.NewSource("CNBC", null, "cnbc-logo.png", [
  [
    "Investing News",
    "https://search.cnbc.com/rs/search/combinedcms/view.xml?partnerId=wrss01&id=15839069",
  ],
]);

util.NewSource("Yahoo Finance", null, "yf-logo.jpg", [
  ["Finance News", "https://finance.yahoo.com/news/rssindex"],
]);

util.NewSource("MarketWatch", null, "mw-logo.png", [
  [
    "Real-time Headlines",
    "http://feeds.marketwatch.com/marketwatch/realtimeheadlines",
  ],
]);

util.NewSource("Reuters", null, "reuters-logo.png", [
  [
    "Market Impact",
    "https://www.reutersagency.com/feed/?best-customer-impacts=market-impact&post_type=best",
  ],
  [
    "Energy & Commodities",
    "https://www.reutersagency.com/feed/?best-sectors=commodities-energy&post_type=best",
  ],
  [
    "Economy",
    "https://www.reutersagency.com/feed/?best-sectors=economy&post_type=best",
  ],
  [
    "Equities",
    "https://www.reutersagency.com/feed/?best-sectors=equities&post_type=best",
  ],
  [
    "FX & Fixed Income",
    "https://www.reutersagency.com/feed/?best-sectors=foreign-exchange-fixed-income&post_type=best",
  ],
]);

util.NewSource("CNN", null, "cnn-logo.png", [
  ["CNN World", "http://rss.cnn.com/rss/cnn_latest.rss"],
]);

util.NewSource("Podnews.net", null, "pod-logo.png", [
  ["Podnews Lofi Radio", "http://feeds.feedburner.com/lofibeatsradiopodcast"],
]);

util.NewSource("Game Informer", null, "gi-logo.jpg", [
  ["All News", "https://www.gameinformer.com/rss.xml"],
]);

util.NewSource("Real Wire", null, "rw-logo.jpg", [
  ["Aerospace", "https://www.realwire.com/rss/?id=582&row=&view=Synopsis"],
  ["Automotive", "https://www.realwire.com/rss/?id=451&row=&view=Synopsis"],
  ["Defence", "https://www.realwire.com/rss/?id=586&row=&view=Synopsis"],
  ["Finance", "https://www.realwire.com/rss/?id=337&row=&view=Synopsis"],
  ["IT", "https://www.realwire.com/rss/?id=352&row=&view=Synopsis"],
  ["Science", "https://www.realwire.com/rss/?id=418&row=&view=Synopsis"],
  [
    "Software Development",
    "https://www.realwire.com/rss/?id=382&row=&view=Synopsis",
  ],
]);

util.NewSource("CSS-Tricks", null, "csst-logo.jpg", [
  ["CSS-Tricks", "https://css-tricks.com/feed/"],
]);

util.NewSource("Codepen.io", null, "cdpn-logo.png", [
  ["CodePen Blog", "https://blog.codepen.io/feed/"],
]);

util.NewSource(
  "InfoQ",
  null,
  "infoq-logo.png",
  null,
  ["articles", "news", "podcasts", "presentations"],
  ["https://feed.infoq.com/", "item", ""]
);

util.NewSource("TechLeadJournal.dev", null, "tlj-logo.png", [
  ["Podcasts", "https://techleadjournal.dev/index.xml"],
]);

util.NewSource("TechCabal", "tc-logo.png", "tc-logo.png", [
  [
    "Entering Tech",
    "https://techcabal.com/category/newsletters/entering-tech/feed/",
  ],
]);

util.NewSource("CodeMaze", "cm-logo.png", "cm-logo.png", [
  ["Articles", "https://code-maze.com/feed/"],
]);

util.NewSource(
  "TheNewStack.io",
  null,
  "tns-logo.png",
  null,
  [
    "frontend-development",
    "software-development",
    "typescript",
    "webassembly",
    "microservices",
    "serverless",
    "machine-learning",
    "platform-engineering",
    "devops",
    "security",
    "data",
  ],
  ["https://thenewstack.io/", "item", "/feed"]
);

util.NewSource("Reactjs.org", null, "react-logo.png", [
  ["React Updates", "https://legacy.reactjs.org/feed.xml"],
]);

util.NewSource("Nodejs.org", null, "node-logo.png", [
  ["Node.js Blog", "https://nodejs.org/en/feed/blog.xml"],
]);

util.NewSource("Nextjs.org", null, "nextjs-logo.jpeg", [
  ["Next.js Updates", "https://nextjs.org/feed.xml"],
]);

util.NewSource("Vuejs.org", "vue-logo.png", "vue-logo.png", [
  ["Vue.js Updates", "https://news.vuejs.org/feed.xml"],
]);

util.NewSource(
  "Angular.io",
  "https://angular.io/assets/images/favicons/favicon-32x32.png",
  "ang-logo.svg",
  [["Angular Blog", "https://blog.angular.io/feed"]]
);

util.NewSource(
  "Svelte.dev",
  "https://svelte.dev/favicon.png",
  "svlt-logo.png",
  [["Svelte blog", "https://svelte.dev/blog/rss.xml"]]
);

util.NewSource(
  "Javascript Updates",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/600px-JavaScript-logo.png?20120221235433",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/600px-JavaScript-logo.png?20120221235433",
  [["ECMA Updates", "https://ecmascript-daily.github.io/atom.xml"]]
);

util.NewSource(
  ".NET",
  "dotnet-logo.png",
  "dotnet-logo.png",
  null,
  [
    "c-corner",
    "news",
    "features",
    "data-driver-blog",
    "blogs",
    "tech-library-webcasts",
    "onward-and-upward",
    "columns",
    "agile-advisor",
    "open-source-net",
    "features",
    "tech-library",
  ],
  ["https://visualstudiomagazine.com/rss-feeds/", "item", ".aspx"]
);

util.NewSource(
  "HackerNoon",
  null,
  "hckrnoon-logo.jpg",
  null,
  [
    "javascript",
    "html",
    "css",
    "csharp",
    "java",
    "go",
    "react",
    "reactjs",
    "react-native",
    "nodejs",
    "angularjs",
    "dotnet",
    "api",
    "frontend",
    "backend",
    "programming",
    "learning",
    "github",
    "seo",
    "cms",
    "web-scraping",
    "coding",
    "database",
    "testing",
    "test-automation",
    "software-architecture",
    "front-end-development",
    "best-practices",
    "design",
    "ux",
    "design-patterns",
    "tutorial",
    "learning-to-code",
    "refactoring",
    "debugging",
    "mvp",
    "careers",
    "web-development",
    "website-design",
    "ios",
    "flutter",
    "web3",
    "automation",
    "serverless",
    "microservices",
    "remote-work",
    "agile",
    "ai",
    "data",
    "data-engineering",
    "saas",
    "hacking",
    "security-token",
    "cyber-security",
    "webpack",
    "developers",
    "hacker",
    "side-project",
    "functional-programming",
    "object-oriented-programming",
    "multithreading",
  ],
  ["https://hackernoon.com/tagged/", "item", "/feed"]
);

util.NewSource("Mozilla.org", null, "mzla-logo.webp", [
  ["Hacks", "https://hacks.mozilla.org/feed/"],
  ["Blog", "https://blog.mozilla.org/feed/"],
  ["Accessibility", "https://blog.mozilla.org/accessibility/feed/"],
]);

util.NewSource(
  "freeCodeCamp",
  "https://cdn.freecodecamp.org/universal/favicons/favicon.ico",
  "fcc-logo.png",
  null,
  [
    "Accessibility",
    "Algorithms",
    "Android App Development",
    "Angular",
    "Animation",
    "API",
    "Application Security",
    "ASCII",
    "Assembly Language",
    "Back End Development",
    "Bash",
    "Beginner",
    "Beginners Guide",
    "Big O Notation",
    "Binary Search",
    "Blazor",
    "Blockchain",
    "Blogging",
    "Bootstrap",
    "Bots",
    "Branding",
    "Business",
    "C 2",
    "C Programming",
    "Career Advice",
    "Career Change",
    "Certification",
    "Charts",
    "Chrome Extension",
    "Class",
    "Closure",
    "Cloud Computing",
    "Coding",
    "Coding Challenge",
    "Coding Interview",
    "Command Line",
    "Community",
    "Compilers",
    "Computer Networking",
    "Computer Science",
    "Containers",
    "CRUD",
    "Cryptography",
    "CSharp",
    "CSS",
    "CSS Grid",
    "Cybersecurity",
    "D3",
    "Data Analysis",
    "Data Analytics",
    "Data Science",
    "Data Structures",
    "Data Visualization",
    "Database",
    "Debugging",
    "Deno",
    "Design",
    "Developer Tools",
    "Devops",
    "Django",
    "Docker",
    "DOM",
    "Domain Names",
    "ECommerce",
    "Email",
    "Encryption",
    "Error",
    "Error Handling",
    "Ethical Hacking",
    "Excel",
    "FastAPI",
    "Figma",
    "Firebase",
    "Flexbox",
    "Flutter",
    "Framework",
    "freeCodeCamp",
    "Freecodecamp Curriculum",
    "Freelancing",
    "Front End Development",
    "Full Stack",
    "Functional Programming",
    "Git",
    "Github",
    "Gitpod",
    "Go",
    "Golang",
    "Google",
    "Google Cloud Platform",
    "Google Sheets",
    "Hacking",
    "Hacktoberfest",
    "Hardware",
    "Heroku",
    "HTML",
    "HTML5",
    "HTTP",
    "Image Compression",
    "Information Security",
    "Infrastructure as Code",
    "Interview Tips",
    "Interviews",
    "IOS",
    "Java",
    "Javascript",
    "Jenkins",
    "Job Hunting",
    "Julia",
    "Junior Developer",
    "Kotlin",
    "Kubernetes",
    "Laravel",
    "Learning To Code",
    "Life Lessons",
    "Linux",
    "Low Code",
    "MAC",
    "Machine Learning",
    "Markdown",
    "Math",
    "Microservices",
    "Microsoft",
    "NestJS",
    "Network Engineering",
    "Neural Networks",
    "NextJS",
    "Node",
    "Node JS",
    "NodeJS",
    "NPM",
    "Object Oriented Programming",
    "Online Courses",
    "Open Source",
    "OpenGL",
    "Pair Programming",
    "PHP",
    "Portfolio",
    "Postgres",
    "Problem Solving",
    "Product Design",
    "Productivity",
    "Programming",
    "Programming Languages",
    "Project Management",
    "Projects",
    "PWA",
    "Python",
    "Pytorch",
    "Quality Assurance",
    "React",
    "React Context",
    "React Hooks",
    "React Router",
    "ReactJS",
    "Redis",
    "Redux",
    "Regex",
    "Remote Work",
    "Responsive Design",
    "Rest API",
    "Resume",
    "Rust",
    "SASS",
    "Security",
    "Self Improvement",
    "SEO",
    "Serverless",
    "Smart Contracts",
    "Software",
    "Software Architecture",
    "Software Development",
    "Software Engineering",
    "Software Testing",
    "Solana",
    "SQL",
    "Startup",
    "Storage",
    "Svelte",
    "SVG",
    "Swift",
    "Systems",
    "Systems Engineering",
    "Tableau",
    "Tailwind",
    "Tech",
    "Technical Writing",
    "Technology",
    "Tensorflow",
    "Terraform",
    "Test Driven Development",
    "Testing",
    "Typescript",
    "UI Design",
    "Unicode",
    "University",
    "Unreal Engine",
    "User Experience",
    "Vim",
    "Visual Basic",
    "VSCode",
    "Vue",
    "Web",
    "Web Design",
    "Web Development",
    "Web Performance",
    "Web Scraping",
    "Web Security",
    "Web3",
    "WebGPU",
    "Windows",
    "Windows 10",
    "Wordpress",
    "XML",
    "Youtube",
  ],
  ["https://www.freecodecamp.org/news/tag/", "item", "/rss"]
);

util.NewSource("Dev.to", null, "dev-logo.png", [
  ["Latest News", "https://dev.to/feed"],
]);

util.NewSource("The Diplomat", null, "td-logo.png", [
  ["Current Affairs", "https://thediplomat.com/feed/"],
]);

util.NewSource(
  "DefenseNews",
  "https://www.defensenews.com/pf/resources/img/favicons/def/favicon-32x32.png?d=104",
  "dn-logo.jpg",
  null,
  ["Global", "Air", "Land", "Naval", "Space", "Unmanned", "Industry"],
  [
    "https://www.defensenews.com/arc/outboundfeeds/rss/category/",
    "item",
    "/?outputType=xml",
  ]
);

util.NewSource("Janes", null, "janes-logo.png", [
  ["Janes News", "https://www.janes.com/feeds/news"],
]);

util.NewSource("GlobalSecurity.org", null, "gs-logo.png", [
  ["Defence News", "https://www.globalsecurity.org/globalsecurity-org.xml"],
]);

util.NewSource("Football Updates", "epl-logo.png", "epl-logo.png", [
  ["World", "https://www.espn.co.uk/espn/rss/football/news"],
  ["EPL", "https://www.football.london/?service=rss"],
]);

util.NewSource("Science Daily", null, "scd-logo.jpg", [
  ["All News", "https://www.sciencedaily.com/rss/all.xml"],
  ["Top Science", "https://www.sciencedaily.com/rss/top/science.xml"],
  ["Top Technology", "https://www.sciencedaily.com/rss/top/technology.xml"],
]);

util.NewSource(
  "SpaceNews",
  "https://spacenews.com/wp-content/themes/spacenews/favicon-32x32.png",
  "spn-logo.png",
  [["SpaceNews", "https://spacenews.com/feed/"]]
);

// Exporting the variable to any file
export default sources;
