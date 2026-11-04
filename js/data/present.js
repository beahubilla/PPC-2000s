// ============================================================
// PHASE 2: PRESENT DATA (TODAY / 2020s)
// ------------------------------------------------------------
// Updated with MO-HUM080 Final Group Worksheet 3 (Present Time &
// Impact of the Past to Present Trend) across all 6 domains.
// ============================================================

// Today (2020s) Exhibit Content (keyed by exhibit ID)
const presentExhibits = {
  "social": {
    "now": "Everything in one device: Facebook, Messenger, Instagram, and TikTok dominate as the main public space with short-form video as the leading format; mobile-first messaging (Messenger, Viber, Instagram DMs), live fan engagement, global fandoms (Discord, Instagram), and OFW calls all run on smartphones with mobile data and growing 5G coverage.",
    "today": {
      "icon": "📲",
      "badge": "Smartphones, TikTok & Global Fandoms",
      "tag": "5G, SHORT VIDEO & DISCORD",
      "title": "Everything in One Device: Feeds, Reels & Global Fandoms",
      "blurb": "Facebook, Messenger, Instagram, and TikTok serve as the main public space—running messaging, fan voting, global fandoms, and OFW calls on one smartphone.",
      "image": "./images/modernphones.jpg",
      "alt": "Modern smartphones",
      "impact": "Texting culture and early social networks (Friendster, Multiply, Facebook) built the habit of staying constantly connected. That habit moved from SMS and desktops to apps like Messenger, TikTok, and Instagram on smartphones.",
      "intro": "Today, social media is the Philippines' main public space: Facebook, Messenger, Instagram, and TikTok dominate daily life, and short-form video is the leading content format. Instead of needing separate devices or internet cafes, everything now runs in one smartphone anytime and anywhere.",
      "facts": [
        "Mobile-first messaging (Messenger, Viber, Instagram DMs) runs on smartphones with mobile data and growing 5G coverage, though access and speed remain uneven outside urban areas.",
        "Online voting and fan engagement happen on social media: viewers react live in comment sections and creators build audiences directly on TikTok and Facebook.",
        "OFW families connect daily through Messenger and Viber calls, while Filipinos join global online communities and fandoms on Discord and Instagram."
      ],
      "artifacts": [
        {
          "emoji": "📱",
          "name": "5G Smartphones & Short Video",
          "note": "All-in-one device where Facebook, TikTok, Instagram, and Reels dominate."
        },
        {
          "emoji": "💬",
          "name": "Messenger, Viber & IG DMs",
          "note": "Mobile-first messaging and daily video calls keeping OFW families close."
        },
        {
          "emoji": "🗳️",
          "name": "Live Comments & Online Voting",
          "note": "Real-time fan engagement and audience building on TikTok and Facebook."
        },
        {
          "emoji": "🌐",
          "name": "Discord & Global Fandoms",
          "note": "Global online communities connecting Filipino fans worldwide."
        }
      ]
    },
    "sources": [
      {
        "title": "Digital 2026: The Philippines",
        "url": "https://datareportal.com/reports/digital-2026-philippines",
        "publisher": "DataReportal",
        "year": "2026",
        "era": "now",
        "note": "Recent digital and social media context."
      },
      {
        "title": "Filipinos spend more time than global average on social media",
        "url": "https://campaignasia.com/article/filipinos-spend-more-time-than-global-average-on-social-media/500622",
        "publisher": "Campaign Asia",
        "year": "2025",
        "era": "now",
        "note": "Digital 2025 social media time."
      },
      {
        "title": "Filipinos spend nearly equal time on TikTok, Facebook, report shows",
        "url": "https://www.gmanetwork.com/news/topstories/nation/991811/filipinos-time-tiktok-facebook-report/story/",
        "publisher": "GMA News",
        "era": "now",
        "note": "Digital 2026 Philippines platform time."
      },
      {
        "title": "Pinoys remain among world's most internet-savvy users — 2025 report",
        "url": "https://interaksyon.philstar.com/trends-spotlights/2025/02/26/292410/pinoys-among-worlds-internet-savvy-users-2025-report/",
        "publisher": "Interaksyon",
        "year": "2025",
        "era": "now",
        "note": "Mobile video calling and internet use."
      }
    ]
  },
  "economic": {
    "now": "A platform-based economy: COVID-19 accelerated e-commerce and e-wallet use (GCash, Maya, Shopee, Lazada, delivery apps) while BPO remains a major employer; entertainment earns via streaming royalties, monetized YouTube/TikTok content, and influencer sponsorships; and Filipinos serve global clients through freelancing and remote work.",
    "today": {
      "icon": "💳",
      "badge": "Platform Economy, E-Wallets & Remote Work",
      "tag": "GCASH, SHOPEE & FREELANCING",
      "title": "Platform-Based Economy: E-Wallets, E-Commerce & Global Remote Work",
      "blurb": "Work, shopping, payments, and entertainment income run through apps—from GCash, Maya, Shopee, and Lazada to global freelancing and BPO.",
      "image": "./images/bpo industry.png",
      "alt": "Modern Philippine digital economy",
      "impact": "The BPO boom and OFW remittances tied the Philippine economy to global clients and round-the-clock work. That experience carried into today's freelancing, remote work, e-commerce, and mobile payments (GCash, Maya), so Filipinos still earn and spend through global connections, now through apps instead of offices and malls.",
      "intro": "The COVID-19 pandemic accelerated e-commerce and e-wallet use across the Philippines, making GCash, Maya, Shopee, Lazada, and delivery apps everyday tools while BPO continued as a major employer. Today's economy is platform-based: work, shopping, payments, and creator income all run through digital apps.",
      "facts": [
        "Cashless, app-based services: e-wallet payments (GCash, Maya) and online shopping and delivery apps (Shopee, Lazada) are everyday tools.",
        "Creator & streaming revenue: entertainment earns through streaming royalties, monetized YouTube and TikTok content, and brand sponsorships from influencer marketing.",
        "Global remote work & cross-border trade: Filipinos serve global clients through freelancing and remote work alongside BPO, and buy and sell across borders on e-commerce platforms."
      ],
      "artifacts": [
        {
          "emoji": "📲",
          "name": "GCash & Maya E-Wallets",
          "note": "Cashless app-based payments replacing cash-only transactions."
        },
        {
          "emoji": "🛍️",
          "name": "Shopee, Lazada & Delivery Apps",
          "note": "Everyday e-commerce and on-demand delivery platforms accelerated by COVID-19."
        },
        {
          "emoji": "💻",
          "name": "Freelancing, Remote Work & BPO",
          "note": "Serving global clients from home or office hubs across borders."
        },
        {
          "emoji": "🎥",
          "name": "Streaming & Influencer Income",
          "note": "Earnings from streaming royalties, YouTube/TikTok monetization, and brand deals."
        }
      ]
    },
    "sources": [
      {
        "title": "More Pinoys use fintech apps, study says",
        "url": "https://malaya.com.ph/info-tech/fintech/more-pinoys-use-fintech-apps-study-says",
        "publisher": "Malaya Business Insight",
        "year": "2025",
        "era": "now",
        "note": "Digital 2025 fintech findings."
      }
    ]
  },
  "political": {
    "now": "Online-networked participation: the 2025 flood-control corruption scandal sparked nationwide protests and leadership changes in both houses of Congress; events are amplified by social media algorithms, political vloggers, viral memes, podcasts, TikTok campaign videos, and live-streamed hearings, while Maria Ressa's 2021 Nobel Peace Prize spotlights press freedom.",
    "today": {
      "icon": "🗳️",
      "badge": "Online Mobilization, Hearings & Press Freedom",
      "tag": "2025 PROTESTS & LIVESTREAMS",
      "title": "Online-Networked Politics: 2025 Protests, Livestreams & Press Freedom",
      "blurb": "The 2025 flood-control corruption protests, live-streamed Congressional hearings, political vloggers, podcasts, and Maria Ressa's 2021 Nobel Peace Prize.",
      "image": "./images/people power 1.png",
      "alt": "Modern civic discourse",
      "impact": "SMS mobilization (EDSA II) and public outrage over scandals like Hello Garci set a pattern of citizens organizing through communication tech. Today the same impulse runs through social media, livestreams, and online campaigns, as seen in the 2025 flood-control protests.",
      "intro": "Today's political participation is online-networked: the 2025 flood-control corruption scandal sparked nationwide protests and leadership changes in both houses of Congress, with marches organized and amplified across social media, political vlogs, podcasts, and live-streamed hearings.",
      "facts": [
        "2025 flood-control corruption scandal: nationwide protests and leadership changes in both houses of Congress were organized and amplified online through social media algorithms, political vloggers, viral memes, and live-streamed hearings.",
        "Digital political performance: political podcasts, livestream commentary, and short-form campaign videos on TikTok shape public opinion.",
        "Global press freedom & advocacy: international attention on press freedom and disinformation (highlighted by Maria Ressa's 2021 Nobel Peace Prize) connects with cross-border online advocacy."
      ],
      "artifacts": [
        {
          "emoji": "📢",
          "name": "2025 Flood-Control Protests",
          "note": "Nationwide anti-corruption marches organized and amplified online."
        },
        {
          "emoji": "🎙️",
          "name": "Live-Streamed Hearings & Podcasts",
          "note": "Congressional hearings, political podcasts, and livestream commentary."
        },
        {
          "emoji": "📱",
          "name": "Political Vloggers & TikTok",
          "note": "Social media algorithms, viral memes, and short-form campaign videos."
        },
        {
          "emoji": "🕊️",
          "name": "Maria Ressa's 2021 Nobel Prize",
          "note": "International spotlight on press freedom, disinformation, and online advocacy."
        }
      ]
    },
    "sources": [
      {
        "title": "[B-SIDE Podcast] Trolls, TikTok, and the 2022 elections",
        "url": "https://www.bworldonline.com/?p=450089",
        "publisher": "BusinessWorld",
        "year": "2022",
        "era": "now",
        "note": "Campaigning on TikTok, Instagram, and YouTube; influencers."
      },
      {
        "title": "From Likes to Lies: Disinformation in the Philippines and Thailand",
        "url": "https://fulcrum.sg/from-likes-to-lies-disinformation-in-the-philippines-and-thailand/",
        "publisher": "Fulcrum (ISEAS)",
        "era": "now",
        "note": "Influencers and Tsek.ph in the 2022 election."
      },
      {
        "title": "VERA Files Fact Check Yearender: Dahil hari ang video, misinformation ang nasa trono sa panahon ng TikTok",
        "url": "https://verafiles.org/articles/vera-files-fact-check-yearender-dahil-hari-ang-video-misinformation-ang-nasa-trono-sa-panahon-ng-tiktok",
        "publisher": "VERA Files",
        "year": "2022",
        "era": "now",
        "note": "Election fact-checks and Tsek.ph growth."
      }
    ]
  },
  "cultural": {
    "now": "Streaming- and creator-driven culture: P-pop surge (SB19, BINI), widespread K-culture, and Y2K nostalgia revivals (the 2000s 'bebot' makeup look went viral again in 2026); music and video streaming (Spotify, Netflix, YouTube), AI-assisted content creation, TikTok dance trends, micro-dramas, and livestreamed performances reach global audiences.",
    "today": {
      "icon": "🎧",
      "badge": "P-Pop Surge, Streaming & Y2K Revival",
      "tag": "SB19, BINI & BEBOT REVIVAL",
      "title": "P-Pop Global Surge, Streaming & 2000s 'Bebot' Y2K Revival",
      "blurb": "SB19 and BINI take P-Pop global, the 2000s 'bebot' makeup look goes viral again in 2026, and Spotify, Netflix, micro-dramas, and TikTok dance trends thrive.",
      "image": "./images/ppop.png",
      "alt": "P-Pop and music streaming",
      "impact": "Fantaserye and TV dramas led to today's streaming series and micro-dramas. The SexBomb craze and SMS-interactive radio and TV led to TikTok dance trends and online fan engagement. The first Hallyu wave helped open the door to K-culture and inspired P-pop groups like SB19 and BINI.",
      "intro": "Today's pop culture is streaming- and creator-driven: the P-pop surge led by SB19 and BINI, widespread K-culture, and Y2K nostalgia revivals—highlighted by the 2000s 'bebot' makeup look going viral again in 2026—spread across borders through global social media and streaming platforms.",
      "facts": [
        "P-pop surge & Y2K nostalgia: SB19 and BINI gain international followings alongside strong K-pop and K-drama fandoms, while the 2000s Filipina 'bebot' makeup look went viral again in 2026.",
        "Streaming & AI tools: music and video streaming on Spotify, Netflix, and YouTube—paired with AI-assisted content creation—replaced physical CDs.",
        "Creator-driven performance: TikTok dance trends, vertical micro-dramas, livestreamed performances, and online creators/influencers drive daily entertainment."
      ],
      "artifacts": [
        {
          "emoji": "🎤",
          "name": "P-Pop Surge (SB19 & BINI)",
          "note": "Filipino pop groups gaining international followings alongside K-culture."
        },
        {
          "emoji": "💄",
          "name": "2026 'Bebot' & Y2K Revival",
          "note": "The 2000s Filipina makeup look and Y2K nostalgia going viral again in 2026."
        },
        {
          "emoji": "🎧",
          "name": "Spotify, Netflix & AI Creation",
          "note": "On-demand music/video streaming and AI-assisted content creation."
        },
        {
          "emoji": "💃",
          "name": "TikTok Dances & Micro-Dramas",
          "note": "Viral dance trends, short micro-dramas, and livestreamed performances."
        }
      ]
    },
    "sources": [
      {
        "title": "Non-Filipino influencers embracing the 'bebot' trend: a 2000s beauty look goes mega-viral",
        "url": "https://www.tatlerasia.com/style/beauty/non-filipino-influencers-bebot-trend",
        "publisher": "Tatler Asia (C. Tibajia)",
        "year": "2026",
        "era": "now",
        "note": "The 2000s Filipina 'Bebot' beauty look going viral in 2026."
      },
      {
        "title": "SB19 (artist page)",
        "url": "https://billboard.com/music/sb19",
        "publisher": "Billboard",
        "era": "now",
        "note": "Debut single and Social 50 chart history."
      },
      {
        "title": "ABS-CBN officially launches P-pop girl group BINI",
        "url": "https://abs-cbn.com/2021/6/12/fresh-scoops/abs-cbn-officially-launches-p-pop-girl-group-bini-193975",
        "publisher": "ABS-CBN",
        "year": "2021",
        "era": "now",
        "note": "BINI's 2021 launch and Blooms fandom."
      },
      {
        "title": "Meet Bini, a P-pop girl group introducing the 'modern Filipina' to the world",
        "url": "https://ca.news.yahoo.com/meet-bini-p-pop-girl-004906214.html",
        "publisher": "NextShark via Yahoo News",
        "year": "2024",
        "era": "now",
        "note": "Teen Vogue's 2024 'Girl Groups to Watch' list."
      }
    ]
  },
  "environmental": {
    "now": "Real-time disaster and health updates on apps and social media: more frequent super typhoons and severe flooding (Yolanda in 2013 and the July 2025 floods that exposed flood-control corruption), the COVID-19 pandemic, weather apps, online environmental campaigns, and stronger links to global climate discussions.",
    "today": {
      "icon": "⛈️",
      "badge": "Super Typhoons, Apps & Climate Action",
      "tag": "REAL-TIME ALERTS & CLIMATE",
      "title": "Real-Time Disaster Alerts, 2025 Floods & Climate Advocacy",
      "blurb": "From Super Typhoon Yolanda (2013), COVID-19, and the July 2025 floods to weather apps, social media alerts, and global climate campaigns.",
      "image": "./images/ondoy baha.png",
      "alt": "Flood monitoring and community resilience",
      "impact": "Ondoy and the SARS/H1N1 scares raised awareness of disaster and health preparedness. Online crowdsourcing during Ondoy foreshadowed today's real-time alerts and social media reporting during typhoons and the pandemic.",
      "intro": "Today, the Philippines faces more frequent super typhoons and severe flooding—including Super Typhoon Yolanda (2013) and the July 2025 floods that exposed flood-control corruption—alongside the COVID-19 pandemic. Communities rely on weather apps, social media alerts, and real-time online disaster and health updates connected to global climate discussions.",
      "facts": [
        "Super typhoons, 2025 floods & COVID-19: Yolanda (2013), the July 2025 floods that exposed flood-control corruption, and the COVID-19 pandemic underscored the urgency of disaster and health resilience.",
        "Real-time mobile technology: weather apps, social media alerts, and real-time online disaster updates keep citizens informed as storms unfold.",
        "Online climate advocacy: environmental awareness spreads through social media, online campaigns, communities, videos, and posts tied to global climate campaigns."
      ],
      "artifacts": [
        {
          "emoji": "⛈️",
          "name": "Weather Apps & Real-Time Alerts",
          "note": "Mobile weather apps, hazard maps, and instant social media disaster updates."
        },
        {
          "emoji": "🌊",
          "name": "Yolanda & July 2025 Floods",
          "note": "Severe flooding events that drove public demand for climate and flood-control accountability."
        },
        {
          "emoji": "🌍",
          "name": "Online Climate Campaigns",
          "note": "Social media communities, videos, and posts linked to global climate movements."
        },
        {
          "emoji": "😷",
          "name": "COVID-19 Real-Time Updates",
          "note": "Global health crisis tracked through real-time online updates and community alerts."
        }
      ]
    },
    "sources": [
      {
        "title": "Before COVID-19, there was SARS",
        "url": "https://newsinfo.inquirer.net/2152560/before-covid-19-there-was-sars",
        "publisher": "Inquirer.net (Y. Sotelo)",
        "year": "2025",
        "era": "both",
        "note": "How the 2003 SARS outbreak and 2009 H1N1 scare shaped Philippine public health response."
      },
      {
        "title": "Weather forecasting in Philippines enters 21st century",
        "url": "https://newsinfo.inquirer.net/252662/weather-forecasting-in-philippines-enters-21st-century",
        "publisher": "Philippine Daily Inquirer",
        "year": "2012",
        "era": "now",
        "note": "Project NOAH's monitoring tools built after Ondoy."
      },
      {
        "title": "Project NOAH is our reliable partner: Marikina City",
        "url": "https://dost.gov.ph/knowledge-resources/news/34-2014-news/572-project-noah-is-our-reliable-partner-marikina-city.html",
        "publisher": "DOST",
        "year": "2014",
        "era": "now",
        "note": "Marikina City's flood warning partnership."
      }
    ]
  },
  "sports": {
    "now": "Digitally connected, multi-sport fandom: Olympic golds by Hidilyn Diaz (Tokyo 2020) and Carlos Yulo (two golds, Paris 2024), tennis star Alex Eala, growing volleyball (PVL) followings, and Filipinos competing in foreign leagues (Japan's B.League), followed via HD livestreaming apps, instant phone highlights, fan edits, and athlete vlogs.",
    "today": {
      "icon": "🥇",
      "badge": "Olympic Golds, PVL, Alex Eala & Livestreams",
      "tag": "OLYMPICS, PVL & B.LEAGUE",
      "title": "Multi-Sport Golden Era: Olympic Golds, PVL, Alex Eala & Athlete Vlogs",
      "blurb": "Hidilyn Diaz and Carlos Yulo's Olympic golds, tennis star Alex Eala, booming PVL volleyball, Filipinos in Japan's B.League, and HD mobile livestreams.",
      "image": "./images/recentsports.png",
      "alt": "Today's Filipino champions",
      "impact": "Watching Pacquiao fights and PBA finals together built a habit of rallying behind Pinoy athletes. Today that fandom has moved online through livestreams, real-time reactions, and athlete vlogs, and it covers more sports, such as volleyball, tennis, gymnastics, and weightlifting.",
      "intro": "Philippine sports fandom is now a digitally connected, multi-sport movement: Olympic golds by Hidilyn Diaz (Tokyo 2020) and Carlos Yulo (two golds, Paris 2024), tennis star Alex Eala, and growing Premier Volleyball League (PVL) followings inspire millions, while Filipino athletes compete in foreign leagues like Japan's B.League.",
      "facts": [
        "Multi-sport breakthroughs: Olympic gold medals by Hidilyn Diaz (Tokyo 2020 weightlifting) and Carlos Yulo (two golds in Paris 2024 gymnastics), tennis star Alex Eala, and booming PVL volleyball followings.",
        "Mobile livestreams & fan engagement: livestreaming apps with HD video, instant online highlights on phones, real-time social media reactions, live commentary, fan edits, and athlete vlog channels.",
        "Global leagues & tournaments: Filipino athletes compete in foreign leagues (such as Japan's B.League) and international tournaments across sports and esports."
      ],
      "artifacts": [
        {
          "emoji": "🥇",
          "name": "Olympic Golds (Diaz & Yulo)",
          "note": "Hidilyn Diaz (Tokyo 2020) and Carlos Yulo (two golds, Paris 2024)."
        },
        {
          "emoji": "🏐",
          "name": "PVL & Alex Eala",
          "note": "Booming Premier Volleyball League crowds and Alex Eala's international tennis rise."
        },
        {
          "emoji": "🏀",
          "name": "Japan's B.League & Global Play",
          "note": "Filipino athletes competing in overseas leagues and international tournaments."
        },
        {
          "emoji": "📱",
          "name": "HD Livestreams & Athlete Vlogs",
          "note": "Instant mobile highlights, real-time reactions, fan edits, and athlete vlogs."
        }
      ],
      "gallery": [
        {
          "src": "./images/recentsports.png",
          "caption": "Filipino multi-sport champions on the Olympic and international stage",
          "year": "2020s"
        },
        {
          "src": "./images/sports.png",
          "caption": "Philippine athletes celebrating international victories across multiple sports",
          "year": "2020s"
        },
        {
          "src": "./images/esports.png",
          "caption": "Professional Filipino mobile esports players on the tournament stage",
          "year": "2020s"
        }
      ]
    },
    "sources": [
      {
        "title": "Legacy in motion",
        "url": "https://tribune.net.ph/2025/07/02/legacy-in-motion",
        "publisher": "Daily Tribune (J. Fernando)",
        "year": "2025",
        "era": "both",
        "note": "Evolution of Philippine sports from Pacquiao to modern multi-sport champions."
      },
      {
        "title": "Hidilyn Diaz (athlete profile)",
        "url": "https://olympics.com/en/athletes/hidilyn-diaz",
        "publisher": "Olympics.com",
        "era": "now",
        "note": "Official Olympic results (Tokyo 2020 gold medalist)."
      },
      {
        "title": "Carlos Yulo and Hidilyn Diaz in Paris",
        "url": "https://gmanetwork.com/news/sports/content/916438/carlos-yulo-and-hidilyn-diaz-in-paris-olympics/story",
        "publisher": "GMA News",
        "year": "2024",
        "era": "now",
        "note": "The Philippines' Olympic gold medalists in Tokyo 2020 and Paris 2024."
      },
      {
        "title": "Blacklist International capture M3 title in historic showdown with Onic PH",
        "url": "https://news.codashop.com/bd/blacklist-international-capture-m3-title-in-historic-showdown-with-onic-ph/",
        "publisher": "Codashop News",
        "year": "2021",
        "era": "now",
        "note": "International esports championships won by Filipino teams."
      }
    ]
  }
};

// Before / After Comparison Slider Pairs (2000–2010 vs. Present)
const beforeAfterPairs = [
  {
    "tab": "📱 Social & Tech",
    "title": "Separate Channels (Nokia & Friendster) → Everything in One Smartphone",
    "caption": "From 160-character SMS voting, internet cafe Friendster profiles, and Skype OFW calls to 5G smartphones running Messenger, TikTok, and Discord anywhere.",
    "before": {
      "img": "./images/phones 1.png",
      "emoji": "📟",
      "label": "Nokia 3310 & SMS, 2000s"
    },
    "after": {
      "img": "./images/modernphones.jpg",
      "emoji": "📱",
      "label": "All-in-One Smartphone, Today"
    }
  },
  {
    "tab": "💼 Economy & Work",
    "title": "Place-Based BPO & Malls → Platform-Based E-Wallets & Remote Work",
    "caption": "From overnight BPO offices and mega-malls (SM MOA, Bonifacio High Street) to GCash, Maya, Shopee, Lazada, creator monetization, and global freelancing.",
    "before": {
      "img": "./images/bpo.png",
      "emoji": "🏢",
      "label": "24/7 BPO Offices, 2000s"
    },
    "after": {
      "img": "./images/bpo industry.png",
      "emoji": "💳",
      "label": "Platform Economy & BPO, Today"
    }
  },
  {
    "tab": "📢 Politics",
    "title": "EDSA II SMS Chains & Hello Garci → 2025 Flood-Control Protests & Livestreams",
    "caption": "From EDSA II text brigades, Hello Garci, and the 2009 Maguindanao massacre to live-streamed hearings, vloggers, Maria Ressa's Nobel Prize, and the 2025 anti-corruption movement.",
    "before": {
      "img": "./images/people power.png",
      "emoji": "📨",
      "label": "EDSA II Text Brigades, 2001"
    },
    "after": {
      "img": "./images/people power 1.png",
      "emoji": "🗳️",
      "label": "Networked Protests, Today"
    }
  },
  {
    "tab": "🎸 Culture & Music",
    "title": "OPM Bands, Burned CDs & Fantaseryes → P-Pop, Streaming & 'Bebot' Revival",
    "caption": "From Parokya ni Edgar, SexBomb, Mulawin, and burned MP3 CDs to SB19, BINI, Spotify/Netflix, TikTok trends, and the 2026 'Bebot' makeup revival.",
    "before": {
      "img": "./images/opm 1.png",
      "emoji": "💿",
      "label": "OPM & Burned CDs, 2000s"
    },
    "after": {
      "img": "./images/ppop.png",
      "emoji": "🎧",
      "label": "P-Pop & Streaming, Today"
    }
  },
  {
    "tab": "🌧️ Environment",
    "title": "Typhoon Ondoy Broadcasts & Rescues → Real-Time Weather Apps & Climate Action",
    "caption": "From TV/radio bulletins and early Facebook/Twitter rescue calls during Ondoy (2009) and SARS/H1N1 to real-time weather apps, Yolanda/2025 flood response, and global climate advocacy.",
    "before": {
      "img": "./images/ondoy.png",
      "emoji": "📻",
      "label": "Ondoy TV Alerts, 2009"
    },
    "after": {
      "img": "./images/ondoy baha.png",
      "emoji": "⛈️",
      "label": "Real-Time Disaster Apps, Today"
    }
  },
  {
    "tab": "🥊 Sports & Gaming",
    "title": "Pacquiao & LAN Computer Shops → Olympic Golds, PVL, Alex Eala & Livestreams",
    "caption": "From crowding around CRT TVs for Pacquiao fights and playing DotA/Ragnarok in LAN shops to celebrating Hidilyn Diaz, Carlos Yulo, Alex Eala, PVL, and B.League on mobile livestreams.",
    "before": {
      "img": "./images/manny.jpg",
      "emoji": "🥊",
      "label": "Pacquiao & PBA, 2000s"
    },
    "after": {
      "img": "./images/recentsports.png",
      "emoji": "🥇",
      "label": "Multi-Sport Champions, Today"
    }
  }
];
