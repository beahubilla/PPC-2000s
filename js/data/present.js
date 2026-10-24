// ============================================================
// PHASE 2: PRESENT DATA (TODAY / 2020s)
// ------------------------------------------------------------
// Edit this file to update all Today Wing exhibits and the
// Then vs. Now interactive comparison slider pairs.
// ============================================================

// Today (2020s) Exhibit Content (keyed by exhibit ID)
const presentExhibits = {
  "social": {
    "now": "Social media is the main public space (Facebook, Messenger, Instagram, TikTok) with short-form video as the leading content format; mobile-first messaging on 5G smartphones, live viewer reactions, and global fandoms/OFW calls on Discord, Messenger, and Viber.",
    "today": {
      "icon": "📲",
      "badge": "Smartphones, TikTok & Global Fandoms",
      "tag": "5G, SHORT VIDEO & DISCORD",
      "title": "Everything in One Device: Feeds, Reels & Global Fandoms",
      "blurb": "Facebook, Messenger, Instagram, and TikTok serve as the main public space—uniting messaging, live fan engagement, and OFW video calls on one smartphone.",
      "image": "./images/modernphones.jpg",
      "alt": "Modern smartphones",
      "impact": "Texting culture and early social networks (Friendster, Multiply, Facebook) built the habit of staying constantly connected—moving from SMS and desktops to Messenger, TikTok, and Instagram on smartphones anytime and anywhere.",
      "intro": "Today, social media is the Philippines' main public space: Facebook, Messenger, Instagram, and TikTok dominate daily life, with short-form video as the leading content format. Whereas 2000s connectivity required separate devices and places (a keypad phone for SMS, a desktop at an internet cafe for Friendster, or Skype for OFW calls), everything now runs through smartphone apps anytime and anywhere—from mobile-first messaging (Messenger, Viber, Instagram DMs) on mobile data and growing 5G coverage (though access and speed remain uneven outside urban areas) to global online communities on Discord.",
      "facts": [
        "Mobile-first messaging (Messenger, Viber, Instagram DMs) runs on smartphones with mobile data and growing 5G coverage, though access and speed remain uneven outside urban areas.",
        "Online voting and fan engagement happen live on social media: viewers react in real time in comment sections while creators build audiences directly on TikTok and Facebook.",
        "OFW families stay in touch daily through Messenger and Viber video calls, while Filipinos join global online communities and fandoms on Discord, Instagram, and TikTok."
      ],
      "artifacts": [
        {
          "emoji": "📱",
          "name": "All-in-One Smartphone",
          "note": "Messaging, social media, fan voting, global fandoms, and OFW calls in one device."
        },
        {
          "emoji": "🎬",
          "name": "Short-Form Video (TikTok/Reels)",
          "note": "The leading content format where creators build audiences and viewers react live."
        },
        {
          "emoji": "💬",
          "name": "Messenger, Viber & IG DMs",
          "note": "Mobile-first messaging and daily video calls with OFW family members."
        },
        {
          "emoji": "🌐",
          "name": "Discord & Global Fandoms",
          "note": "Borderless online communities where Filipinos connect with fans worldwide."
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
    "now": "A platform-based economy: COVID-19 accelerated cashless e-wallets (GCash, Maya) and e-commerce/delivery apps (Shopee, Lazada), entertainment earns via streaming royalties and influencer sponsorships, and Filipinos serve global clients through freelancing, remote work, and BPO.",
    "today": {
      "icon": "💳",
      "badge": "Platform Economy, E-Wallets & Remote Work",
      "tag": "GCASH, SHOPEE & FREELANCING",
      "title": "Platform-Based Economy: E-Wallets, E-Commerce & Global Remote Work",
      "blurb": "Work, shopping, payments, and creator income now run through apps—from GCash, Maya, Shopee, and Lazada to global freelancing.",
      "image": "./images/bpo industry.png",
      "alt": "Modern Philippine digital economy",
      "impact": "The 2000s BPO boom and OFW remittances tied the Philippine economy to global clients and 24/7 work—an experience that carried into today's freelancing, remote work, e-commerce, and mobile payments (GCash, Maya) through apps instead of offices and malls.",
      "intro": "The COVID-19 pandemic accelerated e-commerce and e-wallet adoption across the Philippines, making GCash, Maya, Shopee, Lazada, and food/parcel delivery apps everyday tools while the BPO industry continues as a major employer. Unlike the place-based economy of the 2000s—where work and spending happened in physical offices, malls, and record stores—today's Philippines operates as a platform-based economy where Filipinos serve global clients through freelancing and remote work, buy and sell across borders via e-commerce platforms, and monetize entertainment through streaming and creator sponsorships.",
      "facts": [
        "Cashless, app-based services: e-wallet payments (GCash, Maya) and online shopping and delivery apps (Shopee, Lazada) became everyday necessities accelerated by the COVID-19 pandemic.",
        "Entertainment now earns through streaming royalties (Spotify, YouTube, Netflix), monetized YouTube/TikTok content, and brand sponsorships from influencer marketing rather than physical CDs or TV ratings alone.",
        "Filipinos serve global clients from home or anywhere through online freelancing and remote work alongside BPO hubs, while buying and selling across borders on e-commerce platforms."
      ],
      "artifacts": [
        {
          "emoji": "📲",
          "name": "GCash & Maya E-Wallets",
          "note": "Cashless QR payments, transfers, and bills settled on an app."
        },
        {
          "emoji": "🛍️",
          "name": "Shopee, Lazada & Delivery Apps",
          "note": "Cross-border e-commerce and on-demand delivery replacing physical mall trips."
        },
        {
          "emoji": "💻",
          "name": "Global Freelancing & BPO",
          "note": "Remote work and digital services connecting Filipino talent to global clients."
        },
        {
          "emoji": "🎥",
          "name": "Creator Monetization",
          "note": "Streaming royalties, YouTube/TikTok monetization, and influencer brand deals."
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
    "now": "Online-networked political participation: the 2025 flood-control corruption scandal sparked nationwide protests and Congressional leadership changes, amplified by social media algorithms, political vloggers, viral memes, podcasts, TikTok campaign clips, live-streamed hearings, and global press freedom advocacy (Maria Ressa's 2021 Nobel Peace Prize).",
    "today": {
      "icon": "🗳️",
      "badge": "Online Mobilization, Hearings & Press Freedom",
      "tag": "2025 PROTESTS & LIVESTREAMS",
      "title": "Online-Networked Politics: Livestreams, Vloggers & Civic Protests",
      "blurb": "From the 2025 flood-control corruption protests and live-streamed Congressional hearings to political vloggers, TikTok campaigns, and Maria Ressa's Nobel Peace Prize.",
      "image": "./images/people power 1.png",
      "alt": "Modern civic discourse",
      "impact": "SMS mobilization (EDSA II) and public outrage over scandals like Hello Garci set a pattern of citizens organizing through communication tech; today that same impulse runs through social media, livestreams, and online campaigns, as seen in the 2025 flood-control protests.",
      "intro": "Today's political participation is online-networked: events and scandals are amplified in real time by social media algorithms, political vloggers, viral memes, podcasts, and live-streamed Congressional hearings. In 2025, the flood-control corruption scandal—exposed after severe July 2025 flooding—sparked nationwide protests and leadership changes in both houses of Congress, organized and amplified online. At the same time, short-form campaign videos on TikTok and international attention on Philippine press freedom and disinformation (highlighted by journalist Maria Ressa's 2021 Nobel Peace Prize) connect local civic struggles to cross-border online advocacy.",
      "facts": [
        "The 2025 flood-control corruption scandal sparked nationwide protests and leadership changes in both houses of Congress, with marches organized and amplified across social media.",
        "Social media algorithms, political vloggers, viral memes, podcasts, live-streamed Congressional hearings, and short-form campaign videos on TikTok shape public debate and election campaigning.",
        "International attention on press freedom and disinformation—anchored by Maria Ressa's 2021 Nobel Peace Prize—drives cross-border online advocacy and fact-checking initiatives like Tsek.ph."
      ],
      "artifacts": [
        {
          "emoji": "📢",
          "name": "2025 Flood-Control Protests",
          "note": "Nationwide anti-corruption marches organized and amplified on social media."
        },
        {
          "emoji": "📡",
          "name": "Live-Streamed Hearings",
          "note": "Congressional inquiries watched, clipped, and debated live online."
        },
        {
          "emoji": "🤳",
          "name": "Political Vloggers & TikTok",
          "note": "Algorithmic feeds, viral memes, podcasts, and short-form campaign clips."
        },
        {
          "emoji": "🕊️",
          "name": "2021 Nobel Peace Prize",
          "note": "Maria Ressa's global recognition spotlighting press freedom and disinformation."
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
    "now": "Streaming- and creator-driven culture: the P-Pop surge (SB19, BINI) and K-culture reach global audiences, Y2K nostalgia and the 2000s 'Bebot' makeup look went mega-viral again in 2026, and Spotify, Netflix, YouTube, micro-dramas, TikTok dance trends, and AI-assisted creation dominate.",
    "today": {
      "icon": "🎧",
      "badge": "P-Pop Surge, Streaming & Y2K Revival",
      "tag": "SB19, BINI & BEBOT REVIVAL",
      "title": "P-Pop Global Surge, Streaming & 2000s Y2K Revival",
      "blurb": "SB19 and BINI take P-Pop global, the 2000s 'Bebot' makeup look goes viral again in 2026, and streaming series, micro-dramas, and TikTok dance trends thrive.",
      "image": "./images/ppop.png",
      "alt": "P-Pop and music streaming",
      "impact": "2000s fantaseryes and TV dramas led to today's streaming series and micro-dramas; the SexBomb craze and SMS radio/TV led to TikTok dance trends and online fan engagement; and the first Hallyu wave helped inspire global P-Pop groups like SB19 and BINI.",
      "intro": "Today's Philippine pop culture is streaming- and creator-driven. Music and video streaming on Spotify, Netflix, and YouTube—alongside bite-sized micro-dramas, live-streamed performances, and AI-assisted content creation—have replaced burned MP3 CDs and appointment TV. P-Pop groups like SB19 and BINI command massive international followings alongside widespread K-pop and K-drama fandoms, while TikTok dance trends and online creators drive viral culture. At the same time, 2000s Y2K nostalgia has come full circle, with the Filipina 'Bebot' makeup look going mega-viral globally in 2026.",
      "facts": [
        "The P-Pop surge led by SB19 and BINI has gained international followings and global chart placements alongside strong K-pop and K-drama fandoms.",
        "Y2K nostalgia revivals are thriving across social media—most notably the 2000s Filipina 'Bebot' makeup look, which went viral worldwide again in 2026.",
        "On-demand streaming (Spotify, Netflix, YouTube), vertical micro-dramas, TikTok dance challenges, live-streamed performances, and AI-assisted content creation empower online creators and fandoms."
      ],
      "artifacts": [
        {
          "emoji": "🎤",
          "name": "P-Pop Icons (SB19 & BINI)",
          "note": "Homegrown P-Pop groups reaching global stages and international fandoms."
        },
        {
          "emoji": "💄",
          "name": "2026 'Bebot' & Y2K Revival",
          "note": "The iconic 2000s Filipina makeup aesthetic and Y2K fashion going viral globally."
        },
        {
          "emoji": "🎧",
          "name": "Spotify, Netflix & Micro-Dramas",
          "note": "On-demand music, streaming series, and short-form vertical micro-dramas."
        },
        {
          "emoji": "💃",
          "name": "TikTok Dance & AI Creation",
          "note": "Viral dance trends, influencer live streams, and AI-assisted content tools."
        }
      ]
    },
    "sources": [
      {
        "title": "Non-Filipino influencers embracing the 'bebot' trend: a 2000s beauty look goes mega-viral",
        "url": "https://www.tatlerasia.com/style/beauty/non-filipino-influencers-bebot-trend",
        "publisher": "Tatler Asia (C. Tibajia)",
        "year": "2026",
        "era": "both",
        "note": "2000s Filipina 'Bebot' makeup look going viral worldwide in 2026."
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
    "now": "More frequent super typhoons and severe flooding (e.g., Yolanda in 2013 and the July 2025 floods that exposed flood-control corruption), the COVID-19 pandemic, weather apps, real-time social media disaster updates, and stronger links to global climate campaigns.",
    "today": {
      "icon": "🌦️",
      "badge": "Super Typhoons, Apps & Climate Action",
      "tag": "REAL-TIME ALERTS & CLIMATE",
      "title": "Real-Time Disaster Alerts, Super Typhoons & Climate Advocacy",
      "blurb": "From Super Typhoon Yolanda (2013), COVID-19, and the July 2025 floods to real-time weather apps and online climate campaigns.",
      "image": "./images/ondoy baha.png",
      "alt": "Flood monitoring and community resilience",
      "impact": "Ondoy and the 2000s SARS/H1N1 scares raised awareness of disaster and health preparedness; online crowdsourcing during Ondoy foreshadowed today's real-time weather apps and social media reporting during typhoons and the COVID-19 pandemic.",
      "intro": "In the years since Typhoon Ondoy (2009), the Philippines has faced more frequent super typhoons and severe flooding—most notably Super Typhoon Yolanda in 2013 and the devastating July 2025 floods that exposed widespread flood-control corruption—alongside the global COVID-19 pandemic. Broadcast warnings have evolved into real-time disaster and health updates on mobile weather apps and social media, while online communities, viral videos, and youth advocates connect local resilience to global climate discussions.",
      "facts": [
        "More frequent super typhoons and severe flooding—including Yolanda (2013) and the July 2025 floods that exposed flood-control corruption—plus the COVID-19 pandemic have tested national resilience.",
        "Weather apps, social media alerts, and real-time online disaster updates allow communities to track storms, share rescue locations, and coordinate relief instantaneously.",
        "Environmental awareness spreads through social media campaigns, online communities, and videos, forging a stronger connection to global climate discussions and pandemic preparedness."
      ],
      "artifacts": [
        {
          "emoji": "🌦️",
          "name": "Weather Apps & Hazard Maps",
          "note": "Real-time mobile weather forecasts, radar, and flood alerts."
        },
        {
          "emoji": "📲",
          "name": "Crowdsourced Social Alerts",
          "note": "Real-time citizen reporting and rescue coordination during the 2025 floods."
        },
        {
          "emoji": "🌍",
          "name": "Online Climate Campaigns",
          "note": "Social media advocacy connecting Philippine typhoons to global climate action."
        },
        {
          "emoji": "😷",
          "name": "COVID-19 Digital Updates",
          "note": "Real-time online health tracking during the global pandemic."
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
        "note": "Pandemic response evolution from SARS (2003) and H1N1 (2009) to COVID-19."
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
        "note": "Mobile apps, flood maps, and Marikina's preparedness."
      }
    ]
  },
  "sports": {
    "now": "Digitally connected, multi-sport & esports fandom: Olympic golds by Hidilyn Diaz (Tokyo 2020) and Carlos Yulo (two golds, Paris 2024), tennis star Alex Eala, growing PVL volleyball followings, Filipinos competing in foreign leagues (Japan's B.League) and global esports, watched via HD livestreams, instant phone highlights, fan edits, and athlete vlogs.",
    "today": {
      "icon": "🥇",
      "badge": "Olympic Golds, PVL, Alex Eala & Esports",
      "tag": "OLYMPICS, PVL & LIVESTREAMS",
      "title": "Multi-Sport Golden Era, Athlete Vlogs & Global Leagues",
      "blurb": "Olympic golds from Hidilyn Diaz and Carlos Yulo, tennis star Alex Eala, booming PVL volleyball, Filipinos in Japan's B.League, and mobile esports livestreams.",
      "image": "./images/recentsports.png",
      "alt": "Today's Filipino champions",
      "impact": "Watching Pacquiao fights and PBA finals together built a habit of rallying behind Pinoy athletes; today that fandom has moved online through livestreams, real-time reactions, and athlete vlogs, expanding to weightlifting, gymnastics, tennis, volleyball, and esports.",
      "intro": "Today's Philippine sports and gaming culture is a digitally connected, multi-sport phenomenon. National pride has expanded beyond boxing and basketball to historic Olympic gold medals by Hidilyn Diaz (weightlifting, Tokyo 2020) and Carlos Yulo (two gymnastics golds, Paris 2024), international tennis breakthroughs by Alex Eala, booming Premier Volleyball League (PVL) followings, and Filipino athletes competing in foreign leagues like Japan's B.League and international esports tournaments. Instead of gathering around a single analog CRT TV, fans watch HD livestreams and instant highlights on their phones, follow athlete vlog channels, and share real-time social media reactions and fan edits.",
      "facts": [
        "Historic multi-sport breakthroughs: Hidilyn Diaz won the country's first Olympic gold (Tokyo 2020), Carlos Yulo captured two Olympic golds in gymnastics (Paris 2024), Alex Eala rose on the global tennis stage, and the Premier Volleyball League (PVL) drew massive arena and online crowds.",
        "Live-streaming apps, HD video, instant online highlights on smartphones, real-time social media reactions, live commentary, fan edits, and athlete vlog channels keep fans connected anywhere.",
        "Filipino athletes and esports pros compete on the world stage in foreign leagues—such as basketball players in Japan's B.League—and international esports championships like Mobile Legends (MLBB)."
      ],
      "artifacts": [
        {
          "emoji": "🏅",
          "name": "Olympic Golds (Diaz & Yulo)",
          "note": "Tokyo 2020 weightlifting gold and Paris 2024 double gymnastics golds."
        },
        {
          "emoji": "🏐",
          "name": "PVL, Alex Eala & B.League",
          "note": "Booming volleyball fandom, global tennis milestones, and Filipinos in overseas leagues."
        },
        {
          "emoji": "📱",
          "name": "Livestreams, Vlogs & Fan Edits",
          "note": "HD mobile highlights, athlete vlog channels, and real-time social media commentary."
        },
        {
          "emoji": "🎮",
          "name": "Global Esports Tournaments",
          "note": "Filipino teams competing in international mobile and PC esports arenas."
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
    "tab": "🥊 Sports & Gaming",
    "title": "Pacquiao & LAN Computer Shops → Olympic Golds, PVL, Alex Eala & Esports",
    "caption": "From crowding around CRT TVs for Pacquiao fights and playing DotA/Ragnarok in LAN shops to celebrating Hidilyn Diaz, Carlos Yulo, Alex Eala, PVL, B.League, and mobile esports.",
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
  },
  {
    "tab": "📢 Politics",
    "title": "EDSA II SMS Chains & Hello Garci → 2025 Flood-Control Protests & Livestreams",
    "caption": "From EDSA II text brigades, Hello Garci, and the 2009 Maguindanao massacre to live-streamed hearings, vloggers, Maria Ressa's Nobel Prize, and the 2025 anti-corruption protests.",
    "before": {
      "img": "./images/people power.png",
      "emoji": "📩",
      "label": "EDSA II Text Brigades, 2001"
    },
    "after": {
      "img": "./images/people power 1.png",
      "emoji": "🗳️",
      "label": "Networked Protests, Today"
    }
  },
  {
    "tab": "🌧️ Environment",
    "title": "Typhoon Ondoy Broadcasts & Rescues → Real-Time Weather Apps & Climate Action",
    "caption": "From TV/radio bulletins and early Facebook/Twitter rescue calls during Ondoy (2009) and SARS/H1N1 to real-time weather apps, Yolanda/2025 flood response, and COVID-19 updates.",
    "before": {
      "img": "./images/ondoy.png",
      "emoji": "📻",
      "label": "Typhoon Ondoy, 2009"
    },
    "after": {
      "img": "./images/ondoy baha.png",
      "emoji": "🌦️",
      "label": "Real-Time Alerts, Today"
    }
  }
];
