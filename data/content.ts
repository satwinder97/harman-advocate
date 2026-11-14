export interface PracticeArea {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  sections: string[];
  keyProvisions: string[];
  image: string;
  badge?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  author: string;
  readTime: string;
  summary: string;
  image: string;
  content: string[];
}

export interface OfficeLocation {
  name: string;
  tag: string;
  line1: string;
  line2: string;
  city: string;
  pin: string;
  mapEmbed: string;
  mapQuery: string;
}

export const FIRM_INFO = {
  name: "ADV. HARMANJEET SINGH SAINI",
  advocateName: "Adv. Harmanjeet Singh Saini",
  role: "Advocate | Corporate & Civil | Criminal & Divorce Lawyer",
  barCouncil: "Member of Punjab and Haryana Bar",
  tagline: "Advocate | Corporate & Civil | Criminal & Divorce Lawyer | Member of Punjab and Haryana Bar",
  experience: "Contract Drafting & Corporate Meetings | Arbitration | Experience of Years",
  phone: "+91 95929 21930",
  phoneDisplay: "+91 95929 21930",
  phoneRaw: "9592921930",
  email: "Adv.HSsaini1930@gmail.com",
  whatsapp: "919592921930",
  jurisdiction: "Practicing at Punjab & Haryana High Court, District & Sessions Court, MOHALI & CHANDIGARH",
  office1: {
    name: "Main Chamber Office",
    tag: "Chamber Office (Wave Estate)",
    line1: "KLC, SCO 14, 2nd Floor",
    line2: "Sector - 85, Wave Estate",
    city: "Mohali",
    pin: "140308",
    mapQuery: "SCO 14 Sector 85 Wave Estate Mohali 140308",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.7324546598!2d76.712!3d30.686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fe5b94f1c9d2f%3A0x6b1f286e10714b6!2sSector%2085%2C%20Wave%20Estate%2C%20Sahibzada%20Ajit%20Singh%20Nagar%2C%20Punjab%20140308!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
  },
  office2: {
    name: "Office-cum-Residence",
    tag: "Office-cum-Residence (Silver Enclave)",
    line1: "#529, Silver Enclave",
    line2: "Sector 125, Kharar",
    city: "Dist. Mohali",
    pin: "140301",
    mapQuery: "529 Silver Enclave Sector 125 Kharar Dist Mohali 140301",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3428.6189582737667!2d76.6437199!3d30.7441549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ffaa060018f3d%3A0xb355152faea380cb!2sSector%20125%2C%20Sunny%20Enclave%2C%20Kharar%2C%20Punjab%20140301!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
  },
  disclaimer: `As per the rules of the Bar Council of India, advocates are not permitted to solicit work or advertise. The user acknowledges that this website is intended solely to provide general legal information and contact details of Adv. Harmanjeet Singh Saini at the user's voluntary request. Any transmission, receipt, or use of this site does not constitute or create an advocate-client relationship. In cases of legal disputes, independent legal advice from an advocate must be sought.`,
  copyright: `COPYRIGHT © ADV. HARMANJEET SINGH SAINI | ALL RIGHTS RESERVED`
};

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: "stay-matters",
    title: "Stay Matters & Injunctions",
    shortDesc: "Urgent interim stay orders, status quo, temporary injunctions (Order 39 CPC) and stay petitions before District Courts & High Court.",
    fullDesc: "Stay matters require rapid legal intervention to prevent irreparable loss. Adv. Harmanjeet Singh Saini represents clients before District Courts, Sessions Courts, and the Punjab & Haryana High Court to obtain urgent interim stays, status quo directives, temporary injunctions, and stay of illegal demolition, dispossession, or execution orders.",
    sections: [
      "Order 39 Rules 1 & 2 CPC (Temporary Injunctions)",
      "Section 151 CPC (Inherent Powers for Injunctions)",
      "High Court Civil Revisions against Refusal/Grant of Stay"
    ],
    keyProvisions: ["Prima Facie Case Establishing", "Balance of Convenience Assessment", "Irreparable Loss Proof", "Urgent Motion Listings"],
    image: "https://static.wixstatic.com/media/475495_84942d6d7923460788e470336afc473f~mv2.png"
  },
  {
    id: "cheque-bounce",
    title: "Cheque Bounce (138 NI Act)",
    shortDesc: "Statutory demand notices, trial defense, complaint filings, summary trials, and appellate proceedings under Section 138 Negotiable Instruments Act.",
    fullDesc: "Handling comprehensive Section 138 Negotiable Instruments Act matters in Mohali, Chandigarh, and appellate courts. We represent both complainants recovering dishonoured cheque sums and accused persons defending against false claims, technical defects, or lack of legally enforceable debt.",
    sections: [
      "Section 138 NI Act (Statutory 15-Day Legal Demand Notice)",
      "Section 139 & 118 Presumptions & Rebuttal Strategy",
      "Section 143A Interim Compensation Applications",
      "Compounding of Offences & Settlement Agreements"
    ],
    keyProvisions: ["Statutory Notice Compliance", "Cross-examination on Financial Capacity", "Bank Memo Audit", "Appeals against 138 Convictions"],
    image: "https://static.wixstatic.com/media/475495_a90b5fb3a9334ee48b54334a0f850419~mv2.png"
  },
  {
    id: "regular-anticipatory-bails",
    title: "Regular & Anticipatory Bails",
    shortDesc: "Pre-arrest protective bails under Section 438 Cr.P.C. and custody bails under Sections 437 & 439 Cr.P.C. in Sessions & High Court.",
    fullDesc: "Protecting personal liberty is paramount in criminal jurisprudence. Adv. Harmanjeet Singh Saini files and argues regular bails for undertrials and anticipatory bail petitions for individuals facing apprehending arrest across Chandigarh, Mohali, and Punjab & Haryana High Court.",
    sections: [
      "Anticipatory Bail (Sec 438 Cr.P.C. / Sec 482 BNSS)",
      "Regular Bail (Sec 439 Cr.P.C. / Sec 483 BNSS)",
      "Default Bail under Sec 167(2) Cr.P.C.",
      "Interim Protection & Compliance in Police Investigation"
    ],
    keyProvisions: ["Arnesh Kumar Compliance Verification", "Parity Grounds Presentation", "Absence of Flight Risk", "False Implication Substantiation"],
    image: "https://static.wixstatic.com/media/475495_6e9b16a349c9484b94ae73f51898ca20~mv2.png"
  },
  {
    id: "criminal-trial",
    title: "Criminal Trial Defense",
    shortDesc: "Full-scale trial representation under IPC / BNS across District & Sessions Courts in Mohali & Chandigarh, with rigorous cross-examination.",
    fullDesc: "Meticulous defense representation throughout every phase of a criminal trial: opposing charge framing, rigorous cross-examination of prosecution and police witnesses, recording Section 313 Cr.P.C. defense statements, producing defense evidence, and delivering comprehensive final arguments.",
    sections: [
      "Trial Defense before Magistrates & Sessions Courts",
      "Discharge Petitions & Opposition to Charge Framing",
      "Forensic & Electronic Evidence Scrutiny (Sec 65B)",
      "Cross-examination of Investigating Officers & Eye Witnesses"
    ],
    keyProvisions: ["Chain of Custody Scrutiny", "Medical & Forensic Contradictions", "Benefit of Doubt Doctrine", "Criminal Jurisprudence Precedents"],
    image: "https://static.wixstatic.com/media/475495_58c5aff468a4420ba86849c563957c7b~mv2.png"
  },
  {
    id: "revision-appeals",
    title: "Revision & Appeals",
    shortDesc: "Criminal & Civil appeals, revision petitions before Sessions Courts, High Court, challenging conviction, acquittal, or interlocutory orders.",
    fullDesc: "Specialized appellate practice challenging lower court verdicts and procedural errors. We audit trial records, evaluate evidence misinterpretation, and formulate robust legal grounds for Criminal Appeals (Sec 374/378), Criminal Revisions (Sec 397/401), and Civil First/Second Appeals.",
    sections: [
      "Appeals against Conviction (Section 374 Cr.P.C.)",
      "Criminal Revision Petitions (Sections 397/401 Cr.P.C.)",
      "Civil Appeals (Section 96 & Section 100 CPC)",
      "Appeals against Acquittal Orders (Section 378 Cr.P.C.)"
    ],
    keyProvisions: ["Re-appreciation of Trial Evidence", "Substantive Question of Law Formulations", "Appellate Stay & Relief"],
    image: "https://static.wixstatic.com/media/475495_2c426e09f7d34a158066319f57b8ec32~mv2.png"
  },
  {
    id: "divorce-cases",
    title: "Divorce Cases & Matrimonial Law",
    shortDesc: "Mutual consent divorce, contested divorce grounds (cruelty, desertion), child custody, alimony, and NRI matrimonial disputes.",
    fullDesc: "Compassionate yet assertive representation in family and matrimonial law. From fast-tracked Mutual Consent Divorce under Section 13-B of the Hindu Marriage Act to contested divorce proceedings, child custody battles, and permanent alimony settlements.",
    sections: [
      "Mutual Consent Divorce (Sec 13-B HMA / Special Marriage Act)",
      "Contested Divorce on Grounds of Cruelty, Desertion, Adultery",
      "Child Custody & Guardianship Petitions",
      "NRI Marriages & Inter-state Matrimonial Disputes"
    ],
    keyProvisions: ["Cooling-off Period Waiver Petitions", "One-Time Settlement (OTS) Deeds", "Child Visitation Schedules", "Mediation & Reconciliation"],
    image: "https://static.wixstatic.com/media/475495_98f5196ec5844cb7a06f1e4ca4ca3ad5~mv2.png"
  },
  {
    id: "maintenance-domestic-violence",
    title: "Maintenance & Domestic Violence Cases",
    shortDesc: "Petitions under Section 125 Cr.P.C., interim maintenance, execution of awards, and Protection of Women from Domestic Violence Act (PWDVA).",
    fullDesc: "Handling sensitive maintenance and domestic violence proceedings in family and magistrate courts. We represent claimants seeking fair maintenance and residence rights, as well as respondents safeguarding against arbitrary or exaggerated monetary claims.",
    sections: [
      "Section 125 Cr.P.C. / BNSS Maintenance Claims",
      "Section 24 & 26 Hindu Marriage Act Maintenance",
      "PWDVA 2005 Protection & Residence Orders",
      "Execution and Arrears Recovery Petitions"
    ],
    keyProvisions: ["Rajnesh v. Neha Disclosure Formats", "Income & Asset Verification", "DIR (Domestic Incident Report) Challenges"],
    image: "https://static.wixstatic.com/media/475495_857305644338470cbf9b9901bc0114a2~mv2.png"
  },
  {
    id: "dowry-matters",
    title: "Dowry Matters (498-A IPC)",
    shortDesc: "Defense & representation in Section 498-A IPC, 406 IPC (Stridhan), Dowry Prohibition Act, and anticipatory bails for family members.",
    fullDesc: "Strategic legal defense in matrimonial criminal cases involving Section 498-A IPC (cruelty by husband or relatives) and Section 406 IPC. We secure pre-arrest bail for distant in-laws, seek FIR quashing on merits, and facilitate amicable mediation settlements.",
    sections: [
      "Section 498-A IPC & Section 406 IPC Defense",
      "Dowry Prohibition Act Provisions (Sections 3 & 4)",
      "Anticipatory Bail for Distant Relatives & In-Laws",
      "Settlement & Compromise Mediation Proceedings"
    ],
    keyProvisions: ["Arnesh Kumar Safeguards Enforcement", "Stridhan Inventory Scrutiny", "Mutual Settlement Formalization"],
    image: "https://static.wixstatic.com/media/475495_19d89f1f59514ed4b4c40ea722de468a~mv2.png"
  },
  {
    id: "fir-quashing",
    title: "FIR Quashing",
    shortDesc: "High Court petitions under Section 482 Cr.P.C. / Sec 528 BNSS to quash false, frivolous, or compromise-settled criminal FIRs.",
    fullDesc: "When an FIR is registered without prima facie evidence, purely for civil disputes, or has been resolved amicably between parties, we petition the Punjab & Haryana High Court under Section 482 Cr.P.C. to annul the FIR, charge-sheet, and all consequential proceedings.",
    sections: [
      "Quashing based on Compromise / Mutual Settlement",
      "Quashing on Merits (Absence of Prima Facie Offence)",
      "Commercial & Matrimonial Dispute FIR Quashing",
      "Annulment of Frivolous Cross-FIRs"
    ],
    keyProvisions: ["State of Haryana v. Bhajan Lal Criteria", "Compromise Statements before Illaqa Magistrate", "Inherent High Court Jurisdiction"],
    image: "https://static.wixstatic.com/media/475495_b09f67a45568483e96baffb792a100f3~mv2.png"
  },
  {
    id: "suspension-remission",
    title: "Suspension & Remission of Sentences",
    shortDesc: "Sentence suspension during appeal pendency (Section 389 Cr.P.C.), premature release petitions, parole, and executive remission.",
    fullDesc: "Convicted individuals filing appeals are entitled to seek suspension of sentence and bail pending appeal under Section 389 Cr.P.C. We also handle premature release and remission cases for convicts who have served qualifying prison terms under government policies.",
    sections: [
      "Section 389(1) Cr.P.C. Suspension of Sentence Pending Appeal",
      "Parole & Furlough Legal Applications",
      "Premature Release & Remission Policy Enforcement",
      "Medical & Compassionate Bail Petitions"
    ],
    keyProvisions: ["Period of Custody Undergone", "Short Term Sentence Precedents", "Constitutional Remission Writs"],
    image: "https://static.wixstatic.com/media/475495_86fb2dc774e94ac3a3af42637739a60b~mv2.png"
  },
  {
    id: "direction-petitions",
    title: "Direction Petitions",
    shortDesc: "High Court petitions under Section 482 Cr.P.C. & Article 226 for protection of life & liberty, fair investigation, and police inaction.",
    fullDesc: "When police fail to register FIRs, conduct biased investigations, or citizens face immediate threats to life and liberty, Adv. Harmanjeet Singh Saini files Direction Petitions before the Punjab & Haryana High Court demanding judicial oversight and protective orders.",
    sections: [
      "Protection of Life and Liberty Petitions",
      "Directions for Fair & Impartial Police Investigation",
      "Writ Petitions for Police Inaction (Mandamus)",
      "Transfer of Investigation to Independent Agencies"
    ],
    keyProvisions: ["Article 21 Constitutional Guarantees", "Lalita Kumari Mandate Enforcement", "High Court Monitoring Directions"],
    image: "https://static.wixstatic.com/media/475495_dd266fb76839479cbe14bcb7a8176327~mv2.png"
  },
  {
    id: "contract-drafting-corporate",
    title: "Contract Drafting & Corporate Meetings",
    shortDesc: "Commercial contracts, corporate meeting advisory, board resolutions, shareholder pacts, vendor agreements, and statutory compliance.",
    fullDesc: "Robust corporate and transactional legal services. Adv. Harmanjeet Singh Saini advises corporate clients, businesses, and startups on drafting ironclad commercial contracts, conducting formal board/shareholder meetings, drafting legal notices, and ensuring regulatory compliance.",
    sections: [
      "Commercial Contracts, SLAs, NDAs & Employment Pacts",
      "Corporate Board & Shareholder Meeting Guidance",
      "Partnership Deeds & Joint Venture Agreements",
      "Corporate Due Diligence & Statutory Filings"
    ],
    keyProvisions: ["Indemnity & Liability Clauses", "Dispute Resolution Mechanism Structuring", "Corporate Governance Compliance"],
    image: "https://static.wixstatic.com/media/475495_9321ccce908c40e39660f24875be8bca~mv2.png"
  },
  {
    id: "arbitration-dispute-resolution",
    title: "Arbitration & Dispute Resolution",
    shortDesc: "Domestic arbitration proceedings under the Arbitration & Conciliation Act 1996, Section 9 interim relief, and Section 34 award challenges.",
    fullDesc: "Expert legal representation in arbitration proceedings across corporate, infrastructure, commercial, and contractual disputes. Handling arbitrator appointments under Section 11, seeking urgent interim protection under Section 9, and filing Section 34 challenges against arbitral awards.",
    sections: [
      "Section 9 Interim Measures Applications",
      "Section 11 Arbitrator Appointment Petitions before High Court",
      "Statement of Claim & Statement of Defense Drafting",
      "Section 34 & Section 37 Arbitral Award Challenges"
    ],
    keyProvisions: ["Arbitration Clause Enforceability", "Commercial Court Rules Compliance", "Cost-Effective Speedy Disposal"],
    image: "https://static.wixstatic.com/media/475495_3c4b4e84f4e14ba0bfb576a573b61aa3~mv2.png"
  },
  {
    id: "corporate-civil-litigation",
    title: "Corporate & Civil Litigation",
    shortDesc: "Property dispute suits, recovery proceedings, specific performance, title declaration, partition suits, and commercial litigation.",
    fullDesc: "Extensive civil litigation practice in Chandigarh, Mohali, and High Court. Representing individuals and enterprises in suits for possession, declaration of property title, recovery of commercial dues, specific performance of contract, partition, and revenue matters.",
    sections: [
      "Civil Suits for Declaration, Possession & Partition",
      "Commercial Recovery & Summary Suits (Order 37 CPC)",
      "Specific Performance of Sale Agreements",
      "Execution of Civil Decrees & Revenue Appeals"
    ],
    keyProvisions: ["Title Verification & Revenue Records Audit", "Law of Limitation Compliance", "Court Fee & Jurisdiction Strategy"],
    image: "https://static.wixstatic.com/media/475495_79a73d53878c40b5b95b92ecff67b856~mv2.png"
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "stay-matters-principles",
    title: "Obtaining Interim Stay in Property & Civil Disputes: The Three Golden Rules",
    date: "Aug 10, 2026",
    author: "Adv. Harmanjeet Singh Saini",
    readTime: "5 min read",
    summary: "Understanding the vital requirements of Prima Facie Case, Balance of Convenience, and Irreparable Injury under Order 39 CPC in High Court & District Courts.",
    image: "https://static.wixstatic.com/media/a27d24_4422eed63fdf4fb78b0f455fb456a8e7~mv2_d_2500_1667_s_2.jpg/v1/fill/w_600,h_400,q_90/nri-marriage.jpg",
    content: [
      "Interim stay orders and injunctions under Order 39 Rules 1 and 2 of CPC are discretionary reliefs granted by courts to preserve the status quo.",
      "The applicant must demonstrate a strong prima facie case with undisputed documentary revenue or contractual title.",
      "Balance of convenience must tilt in favour of the applicant, showing that non-grant of stay would cause irremediable loss that cannot be compensated in monetary terms.",
      "In urgent situations, High Courts exercise supervisory and revisional jurisdiction to overturn arbitrary rejections of interim protection."
    ]
  },
  {
    id: "cheque-bounce-remedies",
    title: "Section 138 NI Act: Critical Timelines for Demand Notices & Statutory Defenses",
    date: "Jul 28, 2026",
    author: "Adv. Harmanjeet Singh Saini",
    readTime: "7 min read",
    summary: "A practical guide to the 30-day statutory legal demand notice, calculating limitation periods, and rebutting Section 139 legal debt presumptions.",
    image: "https://static.wixstatic.com/media/a27d24_9af216f7c7164590a8e6e1627e3f4f93~mv2_d_7396_4160_s_4_2.jpg/v1/fill/w_600,h_400,q_90/triple-talaq.jpg",
    content: [
      "Under Section 138 of the Negotiable Instruments Act, the legal demand notice must be dispatched within 30 days of receiving the bank memo of dishonour.",
      "The drawer is given 15 statutory days from notice receipt to clear the outstanding payment before a criminal complaint can be instituted.",
      "Accused persons can rebut the statutory presumption under Section 139 by demonstrating absence of enforceable debt through standard cross-examination.",
      "Courts encourage compounding of cheque bounce offences at any stage upon full commercial settlement."
    ]
  },
  {
    id: "anticipatory-bail-guidelines",
    title: "Anticipatory Bail & FIR Quashing: Landmark Rulings by Punjab & Haryana High Court",
    date: "Jun 15, 2026",
    author: "Adv. Harmanjeet Singh Saini",
    readTime: "6 min read",
    summary: "How innocent citizens can protect their liberty under Section 438 Cr.P.C. and achieve quashing of motivated criminal proceedings under Section 482 Cr.P.C.",
    image: "https://static.wixstatic.com/media/a27d24_afa58eb83e394f0d8698904e02183ef9~mv2_d_5607_3738_s_4_2.jpg/v1/fill/w_600,h_400,q_90/live-in-relationships.jpg",
    content: [
      "Anticipatory bail provides pre-arrest protection to shield citizens from arbitrary detention and societal ignominy.",
      "The Supreme Court in Arnesh Kumar emphasized that arrest should not be automatic for offences punishable with imprisonment up to seven years.",
      "High Courts routinely invoke Section 482 Cr.P.C. to quash criminal proceedings when disputes are purely civil or when parties have settled mutually.",
      "Prompt legal advice and timely petition drafting are essential to prevent police overreach and protect constitutional liberty."
    ]
  }
];
