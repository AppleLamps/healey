// Opposition Research Data for Governor Maura Healey

export const siteConfig = {
  title: "Follow The Money",
  subtitle: "Massachusetts Accountability Project",
  subject: "Governor Maura Healey",
  tagline: "Governance by emergency. Accountability by avoidance.",
  period: "January 2023 – January 2026",
}

export const keyStats = [
  {
    value: 1.8,
    prefix: "$",
    suffix: "B",
    label: "Shelter Crisis Costs",
    description: "Total projected spend FY24-FY25",
    color: "danger" as const,
  },
  {
    value: 700,
    prefix: "$",
    suffix: "M",
    label: "Steward Bailout",
    description: "Taxpayer cost to rescue failed hospitals",
    color: "danger" as const,
  },
  {
    value: 921,
    prefix: "",
    suffix: "%",
    label: "HomeBASE Surge",
    description: "Spending increase to hide shelter numbers",
    color: "money" as const,
  },
  {
    value: 108,
    prefix: "$",
    suffix: "M+",
    label: "Wind Penalties",
    description: "Forfeited from failed offshore contracts",
    color: "money" as const,
  },
]

export const players = [
  {
    id: "healey",
    name: "Maura Healey",
    initials: "MH",
    title: "Governor of Massachusetts",
    role: "Primary Subject",
    points: [
      "Former Attorney General (2015-2023)",
      "Declared emergency to bypass procurement laws",
      "Presided over $1.8B shelter spending surge",
      "Fighting transparency audits despite voter mandate",
      "Net worth disclosure shows significant growth",
    ],
    color: "danger" as const,
  },
  {
    id: "gorzkowicz",
    name: "Matthew Gorzkowicz",
    initials: "MG",
    title: "Secretary of Administration & Finance",
    role: "Budget Controller",
    points: [
      "Controls state budget allocations",
      "Former UMass lobbying arm VP",
      "Long-time aide to State Senator Montigny",
      "Deep ties to legislative machinery",
      "Questions about budget independence",
    ],
    color: "money" as const,
  },
  {
    id: "obrien",
    name: "Thomas O'Brien",
    initials: "TO",
    title: "CEO, HYM Investment Group",
    role: "Developer & Advisor",
    points: [
      "Major real estate developer",
      "Registered lobbyist and donor",
      "Appointed to key advisory roles",
      "Suffolk Downs mega-project beneficiary",
      "Position to influence development policy",
    ],
    color: "money" as const,
  },
  {
    id: "dizoglio",
    name: "Diana DiZoglio",
    initials: "DD",
    title: "State Auditor",
    role: "Blocked Watchdog",
    points: [
      "Attempting to audit legislature & executive",
      "Blocked by Healey administration",
      "Won Ballot Question 1 with bipartisan support",
      "Compliance still being stonewalled in 2025",
      "Exposed $41M in NDA settlements",
    ],
    color: "muted" as const,
  },
]

export const shelterCrisis = {
  title: "The Shelter Crisis",
  subtitle: "A $1.8 Billion Fiscal & Operational Failure",
  overview: "The administration's handling of the migrant shelter crisis represents the most significant fiscal and operational failure of the term. The investigation reveals a systematic failure to plan, followed by an unlawful reliance on emergency powers to award lucrative contracts to political donors.",
  timeline: [
    {
      date: "January 2023",
      event: "Data showed shelter demand exceeded 3,600 unit capacity",
      type: "warning" as const,
    },
    {
      date: "Jan-Aug 2023",
      event: "8 months of inaction despite clear data",
      type: "failure" as const,
    },
    {
      date: "August 8, 2023",
      event: "Emergency declared to bypass procurement laws",
      type: "action" as const,
    },
    {
      date: "Aug 2023 - Mar 2024",
      event: "$10M no-bid contract to Spinelli Ravioli",
      type: "contract" as const,
    },
    {
      date: "August 2025",
      event: "State of Emergency formally ended",
      type: "action" as const,
    },
  ],
  contracts: [
    {
      vendor: "Spinelli Ravioli Mfg.",
      amount: "$10,000,000",
      issue: "No-bid; Overcharged 9.6%; Flat rate offer ignored",
      connection: "Owner donated $10k+ to Healey/Driscoll campaigns",
    },
    {
      vendor: "Mercedes Cab / Pilgrim Transit",
      amount: "$6,800,000+",
      issue: "Initial $2.8M + serial amendments without competitive bid",
      connection: "Monopoly on transport awarded under emergency pretext",
    },
    {
      vendor: "Valley Opportunity Council",
      amount: "Multi-Million",
      issue: "Subcontracted $945k to Key Food Marketplace",
      connection: "Key Food owner sits on Valley Opp. Council Board",
    },
  ],
  homebase: {
    title: "The HomeBASE Shell Game",
    description: "Families are moved from emergency shelters to rental assistance, hiding costs in a different budget line while committing to long-term subsidies.",
    data: [
      { year: "FY 2022", spending: "$9.5M", caseload: "~1,400" },
      { year: "FY 2025", spending: "$97.0M", caseload: "7,767" },
    ],
    increase: "921%",
  },
  costs: {
    nationalGuard: {
      fy2024: "$9.7M",
      fy2025partial: "$7.7M",
    },
    perFamily: "$3,870/week (~$200,000 annualized)",
    communities: "100+",
  },
}

export const stewardBailout = {
  title: "Steward Health Care Collapse",
  subtitle: "A $700 Million Regulatory Failure",
  overview: "The collapse of Steward Health Care is perhaps the most damning indictment of the administration's regulatory negligence. Warning signs were ignored since 2015, and taxpayers are now funding a $700M bailout.",
  timeline: [
    {
      date: "2015",
      event: "AG Healey's office issued compliance report showing financial instability",
      type: "warning" as const,
    },
    {
      date: "2015-2024",
      event: "State allowed aggressive sale-leaseback transactions stripping hospital assets",
      type: "failure" as const,
    },
    {
      date: "May 2024",
      event: "Steward files for bankruptcy",
      type: "action" as const,
    },
    {
      date: "Aug-Sep 2024",
      event: "State advances $30M + $42M emergency funds",
      type: "contract" as const,
    },
    {
      date: "August 2024",
      event: "Carney Hospital and Nashoba Valley close despite rescue efforts",
      type: "failure" as const,
    },
  ],
  costs: [
    { item: "Total Projected Cost", amount: "$700M", note: "By 2027" },
    { item: "Direct State Commitments", amount: "$417M", note: "Over 3 years" },
    { item: "Emergency Cash Advances", amount: "$72M", note: "Aug-Sep 2024" },
    { item: "St. Elizabeth's Seizure", amount: "$66M", note: "Eminent domain settlement to Apollo" },
  ],
  closures: ["Carney Hospital (Dorchester)", "Nashoba Valley Medical Center"],
}

export const transparencyWar = {
  title: "The Transparency War",
  subtitle: "Campaign Promises vs. Governing Reality",
  overview: "Governor Healey campaigned on transparency, yet her administration has engaged in an aggressive legal and political war to prevent independent oversight by State Auditor Diana DiZoglio.",
  conflicts: [
    {
      title: "Audit Resistance",
      description: "When DiZoglio initiated audits, the administration blocked access to documents citing 'Separation of Powers.' AG Andrea Campbell refused to support the Auditor's lawsuit.",
    },
    {
      title: "Ballot Question 1",
      description: "Voters overwhelmingly passed a 2024 ballot initiative explicitly authorizing legislative audits. The administration continues to stall compliance in 2025.",
    },
    {
      title: "NDA Cover-Up",
      description: "Between 2010-2022, state agencies spent $41 Million on settlements with 159+ confidentiality agreements. The administration fights full disclosure.",
    },
    {
      title: "Public Records Hypocrisy",
      description: "Despite campaign promises, Healey claims the 'governor's exemption' from public records, releasing only heavily redacted calendars after events conclude.",
    },
  ],
  ndaStats: {
    amount: "$41 Million",
    cases: "159+",
    period: "2010-2022",
  },
}

export const statePoliceScandale = {
  title: "State Police Scandal",
  subtitle: "The Karen Read Fallout",
  overview: "The administration's handling of the Massachusetts State Police scandal has revealed deep cultural rot and a lack of executive accountability.",
  timeline: [
    {
      date: "2024 Trial",
      event: "Lead Investigator Proctor's misogynistic texts exposed in court",
      type: "failure" as const,
    },
    {
      date: "During Trial",
      event: "Healey finally comments she is 'disgusted' after public outcry",
      type: "action" as const,
    },
    {
      date: "March 2025",
      event: "Proctor fired nearly a year after conduct exposed",
      type: "action" as const,
    },
  ],
  issues: [
    "Lead investigator sent texts calling defendant 'wack job' and slurs",
    "Proctor texted his sister hoping Read would 'kill herself'",
    "Supervisor Bukhenik merely reassigned to desk job, not terminated",
    "Misconduct tainted prosecution, leading to mistrial",
    "Connection to Sandra Birchmore case and federal investigation",
  ],
}

export const energyCollapse = {
  title: "Energy Policy Collapse",
  subtitle: "Offshore Wind Failures",
  overview: "The administration's signature 'Commonwealth Wind' initiatives have crumbled under economic pressure, leading to contract terminations, massive penalty payments, and federal suspensions.",
  failures: [
    {
      project: "Commonwealth Wind (Avangrid)",
      capacity: "1,200 MW",
      penalty: "$48 Million",
      status: "Terminated",
    },
    {
      project: "SouthCoast Wind",
      capacity: "N/A",
      penalty: "$60 Million",
      status: "Terminated",
    },
    {
      project: "Vineyard Wind",
      capacity: "N/A",
      penalty: "Federal Suspension",
      status: "Suspended Dec 2025",
    },
  ],
  issues: [
    "July 2024: Turbine blade disintegrated, debris scattered across Nantucket beaches",
    "GE Vernova settled for $10.5M over blade failure",
    "Trump administration suspended leases citing 'national security concerns'",
    "Next procurement delayed until 2026",
    "2030 climate mandates effectively out of reach",
  ],
}

export const connections = [
  {
    from: "Maura Healey",
    to: "Emergency Declaration",
    label: "Declared Aug 2023",
  },
  {
    from: "Emergency Declaration",
    to: "No-Bid Contracts",
    label: "Bypassed procurement",
  },
  {
    from: "No-Bid Contracts",
    to: "Spinelli Ravioli",
    label: "$10M contract",
  },
  {
    from: "Spinelli Ravioli",
    to: "Healey Campaign",
    label: "$10k+ donations",
  },
  {
    from: "No-Bid Contracts",
    to: "Valley Opp. Council",
    label: "Multi-million",
  },
  {
    from: "Valley Opp. Council",
    to: "Key Food Marketplace",
    label: "$945k subcontract",
  },
  {
    from: "Key Food Marketplace",
    to: "Valley Opp. Council",
    label: "Owner on Board",
  },
  {
    from: "Thomas O'Brien",
    to: "HYM Investment Group",
    label: "CEO",
  },
  {
    from: "Thomas O'Brien",
    to: "Healey Administration",
    label: "Advisory roles",
  },
  {
    from: "HYM Investment Group",
    to: "Suffolk Downs",
    label: "Major project",
  },
]

export const quotes = [
  {
    text: "Taxpayers are footing a nearly $100 million bill with little transparency, no measurable outcomes and no end in sight.",
    source: "MassGOP Statement",
    topic: "Migrant Costs",
  },
  {
    text: "Instead of ending this program, they're simply moving illegal migrants from one taxpayer-funded program to another and calling it reform.",
    source: "Paul Diego Craney, MassFiscal",
    topic: "HomeBASE Shell Game",
  },
  {
    text: "Healey's plan to rescue five bankrupt Steward Health Care hospitals could cost Massachusetts taxpayers $700 million by 2027.",
    source: "Boston Globe Report",
    topic: "Steward Bailout",
  },
  {
    text: "The audit notes there was missing evidence and insufficient documentation to support EOHLC's decision to enter into a no-bid contract with Spinelli.",
    source: "Office of the State Auditor",
    topic: "No-Bid Contracts",
  },
  {
    text: "It does harm, frankly, to the dignity and the integrity of the work of men and women across the State Police... I am disgusted by that.",
    source: "Gov. Maura Healey",
    topic: "State Police Scandal",
  },
  {
    text: "It's as if you purchased a car from a dealership and a year later, they came to your house looking to take it back and resell it to you at a higher price.",
    source: "Paul Craney, MassFiscal",
    topic: "Offshore Wind",
  },
]

export const sources = [
  { id: 1, title: "Fox News - $30K in migrant housing aid", url: "https://www.foxnews.com/politics/30k-migrant-housing-aid-has-dem-gov-hot-seat-revolving-door-policy" },
  { id: 4, title: "Boston Globe - Steward hospitals $700M cost", url: "https://wbjournal.com/article/the-boston-globe-states-plan-to-save-six-steward-hospitals-could-cost-taxpayers-700m/" },
  { id: 6, title: "CommonWealth Beacon - DiZoglio audit stalled", url: "https://commonwealthbeacon.org/politics/public-records/dizoglios-effort-to-audit-the-legislature-remains-stalled-so-she-wants-voters-to-change-the-law-again/" },
  { id: 8, title: "Gov. Healey 'disgusted' by Trooper texts", url: "https://www.youtube.com/watch?v=7Tbo5iWc7yg" },
  { id: 17, title: "Mass.gov - Emergency Shelter Finding", url: "https://www.mass.gov/info-details/executive-office-of-housing-and-livable-communities-emergency-shelter-finding-1" },
  { id: 19, title: "Mass.gov - Shelter Audit Findings", url: "https://www.mass.gov/news/shelter-audit-finds-contract-mismanagement-improper-and-unlawful-use-of-emergency-procurements" },
  { id: 21, title: "MassGOP - No-Bid Migrant Contracts", url: "https://massgop.com/massgop-healey-failed-to-disclose-knowledge-of-more-no-bid-migrant-contracts/" },
  { id: 33, title: "CommonWealth Beacon - Steward Health bankruptcy", url: "https://commonwealthbeacon.org/health-care/when-communities-lose-trust-one-year-after-steward-healths-bankruptcy-and-the-death-of-two-hospitals/" },
  { id: 54, title: "MASSterList - Inaugural fundraising", url: "https://massterlist.com/2023/01/06/healey-raises-1-8-mil-to-pay-for-inaugural-party/" },
]
