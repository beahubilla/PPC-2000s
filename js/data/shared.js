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
    "title": "Texting Capital to All-in-One Smartphones & Spatial Holo-Links",
    "blurb": "From 2000s SMS voting, Friendster cafes, and Skype OFW calls to today's 5G smartphones (TikTok, Messenger, Discord) and 2030s+ holographic telepresence.",
    "change": "Texting culture and early social networks (Friendster, Multiply, Facebook) built the habit of staying constantly connected—moving from separate 2000s devices (keypad phones, internet cafe desktops, Skype) to all-in-one smartphone apps (Messenger, TikTok, Instagram, Discord) today, and full 3D holographic telepresence in the 2030s+.",
    "curator": 0
  },
  {
    "id": "economic",
    "wing": "Economic",
    "icon": "💼",
    "color": "#12b886",
    "domain": "Economic Aspect",
    "title": "BPO & Mega-Malls to Platform Economy & AI Orchestration",
    "blurb": "From the 2000s BPO boom (Call Center Capital in 2010) and mega-malls (SM MOA, BGC) to cashless e-wallets (GCash, Maya), Shopee/Lazada, and global freelancing.",
    "change": "The 2000s BPO boom and OFW remittances tied a place-based Philippine economy (offices, malls, physical albums) to global clients and 24/7 work—carrying into today's platform-based economy of remote work, e-commerce (Shopee, Lazada), streaming royalties, and e-wallets (GCash, Maya), and 2030s+ AI orchestration hubs.",
    "curator": null
  },
  {
    "id": "political",
    "wing": "Political",
    "icon": "📢",
    "color": "#ff4f6d",
    "domain": "Political Aspect",
    "title": "EDSA II SMS Chains to Networked Protests & Civic Shields",
    "blurb": "From Estrada's impeachment, EDSA II text brigades, Hello Garci, and Maguindanao (2009) to the 2025 flood-control protests, livestreams, and Maria Ressa's Nobel Prize.",
    "change": "SMS mobilization (EDSA II) and public outrage over scandals like Hello Garci and the 2009 Maguindanao massacre set a pattern of citizens organizing through communication tech—running today through social media, vloggers, live-streamed hearings, and the 2025 flood-control protests, toward 2030s+ cryptographic truth shields.",
    "curator": 2
  },
  {
    "id": "cultural",
    "wing": "Cultural",
    "icon": "🎸",
    "color": "#8b5cf6",
    "domain": "Cultural Aspect",
    "title": "OPM Bands, Fantaseryes & 'Bebot' to P-Pop & Streaming",
    "blurb": "From Parokya ni Edgar, SexBomb, Mulawin, Emo/Jejemon, and the 1st Hallyu wave to SB19, BINI, Spotify/Netflix, micro-dramas, and the 2026 'Bebot' revival.",
    "change": "2000s fantaseryes (Mulawin, Encantadia) and TV dramas led to today's streaming series and micro-dramas; the SexBomb craze and SMS-interactive radio/TV led to TikTok dance trends; and the first Hallyu wave and OPM bands inspired global P-Pop (SB19, BINI) and the 2026 'Bebot' Y2K revival, evolving into 2030s+ volumetric concerts.",
    "curator": 2
  },
  {
    "id": "environmental",
    "wing": "Environmental",
    "icon": "🌧️",
    "color": "#14b8c6",
    "domain": "Environmental Aspect",
    "title": "Typhoon Ondoy Rescues to Real-Time Alerts & Digital Twins",
    "blurb": "From Typhoon Ondoy (2009) Facebook/Twitter rescues and SARS/H1N1 scares to Yolanda (2013), COVID-19, the July 2025 floods, and real-time weather apps.",
    "change": "Typhoon Ondoy (2009) and the 2003 SARS / 2009 H1N1 scares raised awareness of disaster and health preparedness; early online crowdsourcing during Ondoy foreshadowed today's real-time weather apps and social media reporting during Yolanda, COVID-19, and the July 2025 floods, leading to 2030s+ AI watershed digital twins.",
    "curator": null
  },
  {
    "id": "sports",
    "wing": "Sports & Gaming",
    "icon": "🥊",
    "color": "#ff8a3d",
    "domain": "Sports & Gaming Aspect",
    "title": "Pacquiao, PBA & LAN Shops to Olympic Golds, PVL & Esports",
    "blurb": "From Pacquiao bouts, PBA finals, and DotA/Ragnarok LAN cafes to Hidilyn Diaz & Carlos Yulo's Olympic golds, Alex Eala, PVL, Japan's B.League, and mobile esports.",
    "change": "Watching Pacquiao fights and PBA finals together—plus competing in neighborhood computer shops (DotA, Ragnarok, Counter-Strike) and on PS2/PSP—built a habit of rallying behind Pinoy icons. Today that fandom thrives online via livestreams, athlete vlogs, and esports across weightlifting, gymnastics, tennis, and volleyball, heading toward 2030s+ VR cyber-arenas.",
    "curator": 1
  }
];

// Merge Past (2000s), Present (Today), and Future (2030s+) into the unified exhibits list
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
