// ============================================================
// SHARED MUSEUM DATA & PHASE ASSEMBLER
// ------------------------------------------------------------
// Holds shared soundtrack stations, image credits, room metadata,
// and automatically merges pastExhibits (js/data/past.js),
// presentExhibits (js/data/present.js), and futureExhibits (js/data/future.js)
// into the unified `exhibits` array used by the museum.
// ============================================================

const playlistStations = [
  {
    "tab": "▶ 2000s OPM",
    "title": "🎸 OPM 2000–2009: Best Pinoy Songs",
    "type": "embed",
    "url": "https://www.youtube.com/playlist?list=PLiy0XOfUv4hGbDDI0gx6sFqsYdcQ6zMWx"
  },
  {
    "tab": "🎵 YT Music",
    "title": "☀️ '00s Summer Hits",
    "type": "link",
    "url": "https://music.youtube.com/playlist?list=RDCLAK5uy_mZ0IsRBiplkwK-nuyY63tYi9TerQRQJc4"
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

const imageCredits = [];

const exhibitMeta = [
  {
    "id": "social",
    "wing": "Social",
    "icon": "📱",
    "color": "#3aa7ff",
    "domain": "Social Aspect",
    "title": "Texting Capital to All-in-One Smartphones & 8G AI Communication",
    "blurb": "From 2000s SMS voting, Friendster cafes, and Skype OFW calls to today's 5G smartphones (TikTok, Messenger, Discord) and 2030 8G AI-powered communication.",
    "change": "Texting culture and early social networks (Friendster, Multiply, Facebook) built the habit of staying constantly connected. That habit moved from SMS and desktops to apps like Messenger, TikTok, and Instagram on smartphones—and by 2030, AI, 8G networks, and virtual communication continue to strengthen global connections.",
    "curator": 0
  },
  {
    "id": "economic",
    "wing": "Economic",
    "icon": "💼",
    "color": "#12b886",
    "domain": "Economic Aspect",
    "title": "BPO & Mega-Malls to Platform Economy & AI Digital Business",
    "blurb": "From the 2000s BPO boom (Call Center Capital in 2010) and mega-malls (SM MOA, BGC) to cashless e-wallets (GCash, Maya), Shopee/Lazada, and 2030 AI digital banking and remote work.",
    "change": "The BPO boom and OFW remittances tied the Philippine economy to global clients and round-the-clock work, carrying into today's freelancing, remote work, e-commerce, and mobile payments (GCash, Maya). Moving toward 2030, an advanced digital economy creates new global income sources while AI brings automation and stronger competition.",
    "curator": null
  },
  {
    "id": "political",
    "wing": "Political",
    "icon": "📢",
    "color": "#ff4f6d",
    "domain": "Political Aspect",
    "title": "EDSA II SMS Chains to Networked Protests & AI Civic Transparency",
    "blurb": "From Estrada's impeachment, EDSA II text brigades, Hello Garci, and Maguindanao (2009) to the 2025 flood-control protests, livestreams, and 2030 AI fact-checking and digital governance.",
    "change": "SMS mobilization (EDSA II) and public outrage over scandals like Hello Garci set a pattern of citizens organizing through communication tech—running today through social media, livestreams, and the 2025 flood-control protests, while 2030 digital platforms and AI fact-checking strengthen participation and government transparency.",
    "curator": 2
  },
  {
    "id": "cultural",
    "wing": "Cultural",
    "icon": "🎸",
    "color": "#8b5cf6",
    "domain": "Cultural Aspect",
    "title": "OPM Bands, Fantaseryes & 'Bebot' to P-Pop, Streaming & Virtual Stages",
    "blurb": "From Parokya ni Edgar, SexBomb, Mulawin, Emo/Jejemon, and the 1st Hallyu wave to SB19, BINI, Spotify/Netflix, the 2026 'Bebot' revival, and 2030 AI-assisted immersive media.",
    "change": "Fantaserye and TV dramas led to today's streaming series and micro-dramas; the SexBomb craze and SMS-interactive radio/TV led to TikTok dance trends; and the first Hallyu wave inspired P-pop groups like SB19 and BINI—while by 2030, digital platforms and virtual concerts help preserve and share Filipino culture globally.",
    "curator": 2
  },
  {
    "id": "environmental",
    "wing": "Environmental",
    "icon": "🌧️",
    "color": "#14b8c6",
    "domain": "Environmental Aspect",
    "title": "Typhoon Ondoy Rescues to Real-Time Alerts & AI Weather Forecasting",
    "blurb": "From Typhoon Ondoy (2009) Facebook/Twitter rescues and SARS/H1N1 scares to Yolanda (2013), COVID-19, the July 2025 floods, and 2030 AI weather forecasting and satellite monitoring.",
    "change": "Ondoy and the SARS/H1N1 scares raised awareness of disaster and health preparedness, and online crowdsourcing during Ondoy foreshadowed today's real-time alerts during typhoons and the pandemic. By 2030, improved AI-assisted weather forecasting, satellites, and international collaboration increase disaster preparedness and environmental awareness.",
    "curator": null
  },
  {
    "id": "sports",
    "wing": "Sports & Gaming",
    "icon": "🥊",
    "color": "#ff8a3d",
    "domain": "Sports & Gaming Aspect",
    "title": "Pacquiao & PBA to Olympic Golds, PVL, Alex Eala & Global Virtual Fandoms",
    "blurb": "From Pacquiao bouts, PBA finals, and LAN cafes to Hidilyn Diaz & Carlos Yulo's Olympic golds, Alex Eala, PVL, Japan's B.League, and 2030 global sponsorships and virtual viewing.",
    "change": "Watching Pacquiao fights and PBA finals together built a habit of rallying behind Pinoy athletes. Today that fandom has moved online through livestreams, real-time reactions, and athlete vlogs across volleyball, tennis, gymnastics, and weightlifting—and by 2030, digitally connected fandoms and international leagues help Filipino athletes reach wider global audiences.",
    "curator": 1
  }
];

// Merge Past (2000s), Present (Today), and Future (2030) into the unified exhibits list
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
    facts: past.facts || [],
    artifacts: past.artifacts || [],
    ...(past.gallery ? { gallery: past.gallery } : {}),
    curator: meta.curator,
    today: present.today || {},
    future: future.future || {},
    sources: [
      ...(past.sources || []),
      ...(present.sources || []),
      ...(future.sources || [])
    ]
  };
});
