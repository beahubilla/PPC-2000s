// ============================================================
// SHARED MUSEUM DATA & PHASE ASSEMBLER (js/data/shared.js)
// ============================================================

const playlistStations = [
  {
    "tab": "▶ 2000s OPM",
    "title": "🎸 OPM 2000–2009: Best Pinoy Songs",
    "type": "embed",
    "url": "https://www.youtube.com/playlist?list=PLiy0XOfUv4hGbDDI0gx6sFqsYdcQ6zMWx"
  },
  {
    "tab": "☀️ Summer Hits",
    "title": "☀️ '00s Summer Hits",
    "type": "embed",
    "url": "https://www.youtube.com/playlist?list=PLz8cxnYPx0tkfCi6drRRKALyIl2sJjEwq"
  },
  {
    "tab": "🚀 Future Wave",
    "title": "🌌 P-Pop & Future Pinoy Synthwave",
    "type": "link",
    "url": "https://music.youtube.com/search?q=P-Pop+SB19+BINI+ALAMAT+VXON+playlist"
  }
];

const playlistSearch = {
  "youtube": "https://www.youtube.com/results?search_query=2000s+OPM+hits+playlist",
  "music": "https://music.youtube.com/search?q=2000s+OPM+hits"
};

const imageCredits = [
  {
    "item": "2000s Nokia 3310 & Keypad Phones (nokia.png, phones.png, phones 1.png)",
    "credit": "Pinoy Y2K Culture Hub / Wikimedia Commons Mobile Phone Archive",
    "url": "https://pinoyy2khub.wordpress.com/2024/11/23/gadgets-in-the-philippines-during-the-2000/"
  },
  {
    "item": "Present 5G Smartphones & Social Apps (present-phones.png, modernphones.jpg, today-wing-hero.png)",
    "credit": "DataReportal Digital 2026 Philippines / Museum Digital Collection",
    "url": "https://datareportal.com/reports/digital-2026-philippines"
  },
  {
    "item": "2000s & Present BGC / BPO Hubs (past-bgc.jpg, bpo.png, present-bgc.jpg, bpo industry.png)",
    "credit": "Taas Noo Pilipino & Rappler BPO Industry Archive",
    "url": "https://www.rappler.com/brandrap/profiles-and-advocacies/98207-bpo-philippines-timeline/"
  },
  {
    "item": "EDSA II & Civic Protests (people power.png, people power 1.png, presentpolitical.png)",
    "credit": "Philippine Daily Inquirer / PCIJ & VERA Files Civic Archive",
    "url": "https://pcij.org/2019/12/18/the-ampatuan-massacre-summary-of-case-trial/"
  },
  {
    "item": "2000s OPM Albums & Present P-Pop Wave (opm albums.png, opm 1.png, ppop.png)",
    "credit": "Pinoy Y2K Culture Hub / Billboard Philippines P-Pop Archive",
    "url": "https://pinoyy2khub.wordpress.com/2024/11/19/original-pilipino-music-2000s/"
  },
  {
    "item": "Typhoon Ondoy (2009) & Modern Flood Alerts (ondoy.png, ondoy baha.png, present-environmental.jpg)",
    "credit": "GMA News Online / DOST Project NOAH Archive",
    "url": "https://www.gmanetwork.com/news/specials/content/95/remembering-ondoy-10-years-later/"
  },
  {
    "item": "Pacquiao, LAN Cafes, Olympic Golds & Esports (manny.jpg, computer shop.png, internetcafe.jpg, recentsports.png, sports.png, esports.png)",
    "credit": "GMA News Sports / Pinoy Y2K Gaming Hub & Olympics.com",
    "url": "https://gmanetwork.com/news/sports/content/916438/carlos-yulo-and-hidilyn-diaz-in-paris-olympics/story"
  },
  {
    "item": "2030s+ Future Wing Visualizations (future-wing-hero.jpg, future-social.jpg, future-economic.jpg, future-political.jpg, future-cultural.jpg, future-environmental.jpg, future-sports.jpg)",
    "credit": "MMDC Group 3 Digital Museum Concept Visualizations (2030 Horizon)",
    "url": "https://github.com/beahubilla/PPC-2000s"
  }
];

const exhibitMeta = [
  {
    "id": "social",
    "wing": "Social",
    "icon": "📱",
    "color": "#3aa7ff",
    "domain": "Social Aspect",
    "title": "Texting Capital to Smartphones & 6G AI Communication",
    "blurb": "From 2000s SMS & Friendster cafes to all-in-one 5G smartphones and 2030 6G AI communities.",
    "change": "Texting culture and early social networks (Friendster, Multiply, Facebook) built the habit of staying constantly connected—moving from separate 2000s devices to all-in-one smartphone apps today, and 6G AI-powered virtual communication by 2030."
  },
  {
    "id": "economic",
    "wing": "Economic",
    "icon": "💼",
    "color": "#12b886",
    "domain": "Economic Aspect",
    "title": "BPO & Mega-Malls to E-Wallets & AI Digital Business",
    "blurb": "From 24/7 BPO offices & mega-malls to GCash, Shopee, remote work, and 2030 AI digital banking.",
    "change": "The BPO boom and OFW remittances tied the Philippine economy to global clients and 24/7 work, carrying into today's freelancing, e-commerce, and e-wallets (GCash, Maya), and advancing toward 2030 AI automation and digital banking."
  },
  {
    "id": "political",
    "wing": "Political",
    "icon": "📢",
    "color": "#ff4f6d",
    "domain": "Political Aspect",
    "title": "EDSA II SMS Chains to Networked Protests & AI Fact-Checking",
    "blurb": "From EDSA II texts, Hello Garci & Maguindanao to 2025 protests, livestreams, and 2030 AI civic tools.",
    "change": "SMS mobilization (EDSA II) and public outrage over scandals like Hello Garci set a pattern of citizens organizing through tech—seen today in the 2025 flood-control protests and livestreams, and expanding by 2030 through digital governance and AI fact-checking."
  },
  {
    "id": "cultural",
    "wing": "Cultural",
    "icon": "🎸",
    "color": "#8b5cf6",
    "domain": "Cultural Aspect",
    "title": "OPM Bands & Fantaseryes to P-Pop, Streaming & Virtual Stages",
    "blurb": "From OPM rock, SexBomb, Mulawin & burned CDs to SB19, BINI, the 2026 'Bebot' revival, and 2030 virtual concerts.",
    "change": "Fantaseryes, the SexBomb craze, SMS radio, and the first Hallyu wave paved the way for today's streaming micro-dramas, TikTok dance trends, and P-pop (SB19, BINI)—while 2030 digital platforms and virtual concerts preserve and share Filipino culture globally."
  },
  {
    "id": "environmental",
    "wing": "Environmental",
    "icon": "🌧️",
    "color": "#14b8c6",
    "domain": "Environmental Aspect",
    "title": "Ondoy Rescues to Real-Time Alerts & AI Weather Forecasting",
    "blurb": "From Typhoon Ondoy (2009) & SARS/H1N1 to Yolanda, July 2025 floods, weather apps, and 2030 AI satellite forecasts.",
    "change": "Ondoy and the SARS/H1N1 scares raised awareness of disaster and health preparedness, foreshadowing today's real-time weather apps and pandemic updates, while 2030 AI-powered weather forecasting and satellite monitoring strengthen climate resilience."
  },
  {
    "id": "sports",
    "wing": "Sports & Gaming",
    "icon": "🥊",
    "color": "#ff8a3d",
    "domain": "Sports & Gaming Aspect",
    "title": "Pacquiao & PBA to Olympic Golds, PVL & Virtual Fan Hubs",
    "blurb": "From Pacquiao bouts, PBA finals & LAN shops to Hidilyn Diaz, Carlos Yulo, Alex Eala, PVL, and 2030 global leagues.",
    "change": "Watching Pacquiao fights and PBA finals together built a habit of rallying behind Pinoy athletes—moving online today via livestreams and vlogs across gymnastics, weightlifting, tennis, and volleyball, and expanding in 2030 through international leagues and virtual viewing."
  }
];

const exhibits = exhibitMeta.map(meta => {
  const past = (typeof pastExhibits !== 'undefined' && pastExhibits[meta.id]) || {};
  const present = (typeof presentExhibits !== 'undefined' && presentExhibits[meta.id]) || {};
  const future = (typeof futureExhibits !== 'undefined' && futureExhibits[meta.id]) || {};

  return {
    id: meta.id,
    wing: meta.wing,
    icon: meta.icon,
    color: meta.color,
    domain: meta.domain,
    badge: past.badge || '',
    tag: past.tag || '',
    title: meta.title,
    blurb: meta.blurb,
    thenTitle: past.thenTitle || meta.title,
    thenBlurb: past.thenBlurb || meta.blurb,
    image: past.image || '',
    alt: past.alt || '',
    then: past.then || '',
    now: present.now || '',
    futureSummary: future.futureSummary || (future.future && future.future.summary) || '',
    change: meta.change || '',
    impact: past.impact || '',
    intro: past.intro || '',
    categories: past.categories || [],
    facts: past.facts || [],
    artifacts: past.artifacts || [],
    ...(past.gallery ? { gallery: past.gallery } : {}),
    today: present.today || {},
    future: future.future || {},
    sources: [
      ...(past.sources || []),
      ...(present.sources || []),
      ...(future.sources || [])
    ]
  };
});
