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
    "wing": "Social & Tech",
    "icon": "📱",
    "color": "#3aa7ff",
    "domain": "Social Domain",
    "title": "Texting Capital to Spatial Holo-Links",
    "blurb": "From 160-character SMS clans and 5G feeds to wearable AR optics and volumetric OFW telepresence.",
    "change": "From 160-character texts and paid load in the 2000s, to 5G group chats today, and full 3D holographic telepresence in the 2030s+.",
    "curator": 0
  },
  {
    "id": "cultural",
    "wing": "Culture & P-Pop",
    "icon": "🎸",
    "color": "#8b5cf6",
    "domain": "Cultural Domain",
    "title": "OPM Band Craze to Volumetric P-Pop",
    "blurb": "From burned MP3 CDs and global P-Pop streaming to holographic world tours and interactive spatial lore.",
    "change": "From burned MP3 CDs and radio requests to global streaming fandoms today, and borderless volumetric concert domes in the 2030s+.",
    "curator": 2
  },
  {
    "id": "sports",
    "wing": "Sports & Cyberculture",
    "icon": "🥊",
    "color": "#ff8a3d",
    "domain": "Sports & Cyberculture",
    "title": "LAN Cafes to Haptic Cyber-Arenas",
    "blurb": "From Pacquiao fight days and DotA 1 cafes to Olympic golds, mobile esports, and 2030s VR cyber-athletics.",
    "change": "From one neighborhood TV and CRT LAN shops, to Olympic podiums and mobile esports today, to full-body VR cyber-athletics in the 2030s+.",
    "curator": 1
  },
  {
    "id": "political",
    "wing": "Politics & EDSA II",
    "icon": "📢",
    "color": "#ff4f6d",
    "domain": "Political Domain",
    "title": "Text Revolutions to Cryptographic Civic Halls",
    "blurb": "From EDSA Dos SMS chains and viral video campaigns to deepfake provenance shields and open-ledger governance.",
    "change": "From forwarded chain texts in 2001, to viral feeds and fact-checks today, to cryptographic truth shields and digital town halls in the 2030s+.",
    "curator": 2
  },
  {
    "id": "economic",
    "wing": "BPO & Economy",
    "icon": "💼",
    "color": "#12b886",
    "domain": "Economic Domain",
    "title": "Call Center Boom to AI Orchestration Hubs",
    "blurb": "From 24/7 BPO nightshifts and pirated DVDs to cashless e-wallets, AI co-pilots, and the Digital Peso.",
    "change": "From night-shift call centers and pirated DVDs, to QR e-wallets and gig work today, to AI orchestration hubs and Digital Peso rails in the 2030s+.",
    "curator": null
  },
  {
    "id": "environmental",
    "wing": "Environment (Ondoy)",
    "icon": "🌧️",
    "color": "#14b8c6",
    "domain": "Environmental Domain",
    "title": "Rescue Tweets to AI Weather Digital Twins",
    "blurb": "From Typhoon Ondoy's first online rescue maps and Project NOAH to 2030s predictive watershed digital twins.",
    "change": "From TV storm signals and emergency tweets during Ondoy, to mobile hazard maps today, to predictive AI digital twins and sponge cities in the 2030s+.",
    "curator": null
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
