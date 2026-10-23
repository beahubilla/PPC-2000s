// ============================================================
// PHASE 2: PRESENT DATA (TODAY / 2020s)
// ------------------------------------------------------------
// Edit this file to update all Today Wing exhibits and the
// Then vs. Now interactive comparison slider pairs.
// ============================================================

// Today (2020s) Exhibit Content (keyed by exhibit ID)
const presentExhibits = {
  "social": {
    "now": "5G mobile smartphones, TikTok algorithms, Instagram Reels, Messenger, and live-streaming online communities.",
    "today": {
      "icon": "📲",
      "badge": "Smartphones & Social Apps",
      "tag": "5G & SHORT VIDEO",
      "title": "Always-On: Feeds, Reels & Group Chats",
      "blurb": "Your whole social life now runs through one pocket-sized screen.",
      "image": "./images/modernphones.jpg",
      "alt": "Modern smartphones",
      "impact": "Everyone is now a creator, broadcaster, and audience at once.",
      "intro": "Today a single smartphone handles texting, calls, video, shopping, and school. Social life happens in group chats, short videos, and live streams, and news can reach millions of people in minutes.",
      "facts": [
        "In the Digital 2025 report, Filipinos ranked fourth in the world for daily time on social media, at about 3.5 hours a day.",
        "Facebook, YouTube, Messenger, and Instagram take much of that time, and TikTok now competes closely with Facebook (Digital 2026 Philippines report).",
        "About half of Filipino internet users use mobile video calling every month (Digital 2025 report)."
      ],
      "artifacts": [
        {
          "emoji": "📱",
          "name": "Smartphone",
          "note": "Camera, maps, wallet, and chat in one device."
        },
        {
          "emoji": "🎬",
          "name": "Short videos",
          "note": "Reels, Shorts, and TikTok-style clips set trends."
        },
        {
          "emoji": "👥",
          "name": "Group chats",
          "note": "Class, family, and barkada chats run daily life."
        },
        {
          "emoji": "📡",
          "name": "5G & Wi-Fi",
          "note": "Faster data replaced counting texts and load."
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
  "cultural": {
    "now": "P-Pop international wave (SB19, BINI), Spotify streaming royalties, TikTok dance challenges, and Netflix adaptations.",
    "today": {
      "icon": "🎧",
      "badge": "P-Pop & Streaming",
      "tag": "SPOTIFY & FANDOMS",
      "title": "Streams, Fandoms & P-Pop",
      "blurb": "Music is now streamed on demand, and fan communities help new artists go global.",
      "image": "./images/ppop.png",
      "alt": "P-Pop and music streaming",
      "impact": "Fans and streams, not record stores, decide what becomes a hit.",
      "intro": "Burned CDs gave way to playlists you can stream anywhere. P-Pop groups and their fandoms use social media to reach audiences at home and abroad.",
      "facts": [
        "SB19 debuted in October 2018 and entered Billboard's Social 50 chart in December 2019, helped by a growing international fanbase on social media.",
        "BINI debuted in June 2021 and was listed by Teen Vogue among its '12 Girl Groups to Watch in 2024'.",
        "BINI's fans call themselves 'Blooms', and the group's 2021 launch was held as a virtual event for fans and the press."
      ],
      "artifacts": [
        {
          "emoji": "🎧",
          "name": "Streaming playlists",
          "note": "Millions of songs, one tap away."
        },
        {
          "emoji": "💃",
          "name": "Dance challenges",
          "note": "Short clips that turn songs into trends."
        },
        {
          "emoji": "💬",
          "name": "Fan communities",
          "note": "Fans organize streams, projects, and meet-ups online."
        },
        {
          "emoji": "📺",
          "name": "Streaming series",
          "note": "Shows on demand instead of waiting for primetime."
        }
      ]
    },
    "sources": [
      {
        "title": "SB19 (artist page)",
        "url": "https://billboard.com/music/sb19",
        "publisher": "Billboard",
        "era": "now",
        "note": "Debut single and Social 50 chart history."
      },
      {
        "title": "SB19 ranks as mainstay in Billboard's Social 50 chart",
        "url": "https://gmanetwork.com/entertainment/showbiznews/news/59180/sb19-ranks-as-mainstay-in-billboards-social-50-chart/story",
        "publisher": "GMA Network",
        "era": "now",
        "note": "International fanbase on social media."
      },
      {
        "title": "ABS-CBN officially launches P-pop girl group BINI",
        "url": "https://abs-cbn.com/2021/6/12/fresh-scoops/abs-cbn-officially-launches-p-pop-girl-group-bini-193975",
        "publisher": "ABS-CBN",
        "year": "2021",
        "era": "now",
        "note": "BINI's 2021 launch and fandom."
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
  "sports": {
    "now": "Olympic gold medals (Carlos Yulo, Hidilyn Diaz), professional Esports championships (MPL/MLBB), and mobile game streaming.",
    "today": {
      "icon": "🥇",
      "badge": "Olympians & Esports",
      "tag": "MLBB & OLYMPIC GOLD",
      "title": "Olympic Gold & Esports Arenas",
      "blurb": "National pride now comes from Olympic medals, esports stages, and highlights anyone can watch on a phone.",
      "image": "./images/recentsports.png",
      "alt": "Today's champions",
      "impact": "National pride is now shared live, from stadiums to phone screens.",
      "intro": "Sports fandom has moved from one TV to every screen. Filipino athletes win on the world stage, and mobile esports fill arenas and live streams.",
      "facts": [
        "Hidilyn Diaz won the Philippines' first Olympic gold (weightlifting, Tokyo 2020).",
        "Carlos Yulo won the men's floor exercise on August 3, 2024 and the vault the next day, becoming the first Filipino to win two Olympic golds.",
        "Bren Esports won the Mobile Legends world title in January 2021 (M2), and Blacklist International followed in December 2021 (M3) in an all-Filipino final."
      ],
      "artifacts": [
        {
          "emoji": "🏅",
          "name": "Olympic gold",
          "note": "A new era of national sports pride."
        },
        {
          "emoji": "🎮",
          "name": "Mobile Legends",
          "note": "Esports tournaments with huge online audiences."
        },
        {
          "emoji": "📺",
          "name": "Live streams",
          "note": "Watch matches and highlights anywhere."
        },
        {
          "emoji": "🤸",
          "name": "Home-grown champions",
          "note": "Athletes who are also social media stars."
        }
      ],
      "gallery": [
        {
          "src": "./images/esports.png",
          "caption": "Mobile esports on stage"
        }
      ]
    },
    "sources": [
      {
        "title": "Hidilyn Diaz (athlete profile)",
        "url": "https://olympics.com/en/athletes/hidilyn-diaz",
        "publisher": "Olympics.com",
        "era": "now",
        "note": "Official Olympic results."
      },
      {
        "title": "Carlos Yulo and Hidilyn Diaz in Paris",
        "url": "https://gmanetwork.com/news/sports/content/916438/carlos-yulo-and-hidilyn-diaz-in-paris-olympics/story",
        "publisher": "GMA News",
        "year": "2024",
        "era": "now",
        "note": "The Philippines' two Olympic gold medalists."
      },
      {
        "title": "Meet Carlos Yulo, the Philippines' two-time Olympic gold medalist",
        "url": "https://www.gmanetwork.com/entertainment/photos/meet-carlos-yulo-the-philippines-two-time-olympic-gold-medalist/11728/",
        "publisher": "GMA Network",
        "year": "2024",
        "era": "now",
        "note": "Floor exercise (Aug 3) and vault (Aug 4), 2024."
      },
      {
        "title": "Blacklist International capture M3 title in historic showdown with Onic PH",
        "url": "https://news.codashop.com/bd/blacklist-international-capture-m3-title-in-historic-showdown-with-onic-ph/",
        "publisher": "Codashop News",
        "year": "2021",
        "era": "now",
        "note": "M3 all-Filipino final; Bren Esports won M2."
      }
    ]
  },
  "political": {
    "now": "TikTok viral campaigns, political podcasts, algorithmic influencer endorsements, and live-streamed hearings.",
    "today": {
      "icon": "🗳️",
      "badge": "Social Media & Fact-Checks",
      "tag": "VIRAL & FACT-CHECKED",
      "title": "Viral Politics & Fact-Checks",
      "blurb": "Campaigns now play out on video feeds and influencer posts, and fact-checkers work to verify claims.",
      "image": "./images/people power 1.png",
      "alt": "Modern civic discourse",
      "impact": "Political conversation is faster, louder, and harder to verify.",
      "intro": "Political conversation today lives on video platforms and group chats. In the 2022 elections, campaigns spread to TikTok, Instagram, and YouTube, and fact-checkers worked to verify claims before they spread.",
      "facts": [
        "In 2022, political campaigning spread to TikTok, Instagram, and YouTube, and social media influencers and celebrities helped amplify political messages.",
        "Tsek.ph, an election fact-checking collaboration of media, academe, and civil society, grew from 14 partners in 2019 to 34.",
        "Most of the election content that VERA Files fact-checked in 2022 came from Facebook."
      ],
      "artifacts": [
        {
          "emoji": "📹",
          "name": "Campaign videos",
          "note": "Short clips built for sharing."
        },
        {
          "emoji": "🤳",
          "name": "Influencer posts",
          "note": "Creators and celebrities amplify messages."
        },
        {
          "emoji": "🔍",
          "name": "Fact-checks",
          "note": "Checking claims before they spread."
        },
        {
          "emoji": "💬",
          "name": "Group-chat forwards",
          "note": "The modern chain text."
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
      },
      {
        "title": "Digital News Report 2022: Philippines",
        "url": "https://reutersinstitute.politics.ox.ac.uk/digital-news-report/2022/philippines",
        "publisher": "Reuters Institute",
        "year": "2022",
        "era": "now",
        "note": "News, social media, and fact-checking in the 2022 election."
      }
    ]
  },
  "economic": {
    "now": "Cashless e-wallets (GCash, Maya), platform e-commerce (Shopee, TikTok Shop), and digital content monetization.",
    "today": {
      "icon": "💳",
      "badge": "Cashless & Online",
      "tag": "GCASH & E-COMMERCE",
      "title": "E-Wallets, Online Shops & Gig Work",
      "blurb": "Payments, shopping, and side hustles now happen on an app.",
      "image": "./images/bpo industry.png",
      "alt": "Modern Philippine digital economy",
      "impact": "Money, shopping, and work now move through apps.",
      "intro": "Many everyday purchases now happen through e-wallets and online marketplaces, and freelancing or gig work lets people earn from home or on the road.",
      "facts": [
        "GCash launched its mobile app in 2012 and now offers QR payments, bills payment, and online checkout.",
        "GCash introduced the Philippines' first mobile-money QR payment in 2017, according to a SunStar feature on its 20th anniversary.",
        "The 2025 Digital Report from Meltwater and We Are Social points to growing use of fintech apps among Filipinos."
      ],
      "artifacts": [
        {
          "emoji": "📲",
          "name": "E-wallet",
          "note": "Pay, send, and cash in from your phone."
        },
        {
          "emoji": "🛍️",
          "name": "Online marketplaces",
          "note": "Shop and sell without a physical store."
        },
        {
          "emoji": "🛵",
          "name": "Delivery riders",
          "note": "Food and parcels at your door."
        },
        {
          "emoji": "💻",
          "name": "Freelance work",
          "note": "Earn from home or from anywhere."
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
  "environmental": {
    "now": "Real-time mobile weather apps, crowd-sourced flood rescue maps, and social media youth climate advocacy.",
    "today": {
      "icon": "🌦️",
      "badge": "Real-Time Alerts",
      "tag": "APPS & EARLY WARNINGS",
      "title": "Weather Apps & Early Warnings",
      "blurb": "Forecasts, flood maps, and early warnings now reach people in near real time.",
      "image": "./images/ondoy baha.png",
      "alt": "Flood monitoring and community resilience",
      "impact": "Communities can prepare and respond with earlier, clearer warnings.",
      "intro": "Today people check weather and flood information on their phones, and agencies publish hazard maps and early warnings online. The government launched Project NOAH in 2012 in response to the lessons of Ondoy.",
      "facts": [
        "Project NOAH, launched in July 2012 in Marikina City, a city that Ondoy flooded, provides online flood hazard maps and near real-time weather information.",
        "Marikina's city government receives real-time weather and flood information through mobile apps such as PAGASA, Project NOAH, and ARKO.",
        "Marikina City recorded zero deaths when heavy monsoon rains flooded Metro Manila in August 2012, a month after Project NOAH launched, and the city credits improved preparedness and NOAH."
      ],
      "artifacts": [
        {
          "emoji": "🌦️",
          "name": "Weather apps",
          "note": "Real-time weather and flood updates on your phone."
        },
        {
          "emoji": "🗺️",
          "name": "Flood hazard maps",
          "note": "Online maps show which areas are most at risk."
        },
        {
          "emoji": "📡",
          "name": "Rain gauges & sensors",
          "note": "Automated stations feed near real-time data."
        },
        {
          "emoji": "🔔",
          "name": "Early warnings",
          "note": "Project NOAH aimed for a six-hour lead time warning."
        }
      ]
    },
    "sources": [
      {
        "title": "Weather forecasting in Philippines enters 21st century",
        "url": "https://newsinfo.inquirer.net/252662/weather-forecasting-in-philippines-enters-21st-century",
        "publisher": "Philippine Daily Inquirer",
        "year": "2012",
        "era": "now",
        "note": "Project NOAH's monitoring tools built after Ondoy."
      },
      {
        "title": "'Noah' vs floods launched",
        "url": "https://www.philstar.com/headlines/2012/07/07/825252/noah-vs-floods-launched",
        "publisher": "The Philippine STAR",
        "year": "2012",
        "era": "now",
        "note": "Project NOAH's launch in Marikina City."
      },
      {
        "title": "Project NOAH is our reliable partner: Marikina City",
        "url": "https://dost.gov.ph/knowledge-resources/news/34-2014-news/572-project-noah-is-our-reliable-partner-marikina-city.html",
        "publisher": "DOST",
        "year": "2014",
        "era": "now",
        "note": "Mobile apps, flood maps, and Marikina's 2012 results."
      }
    ]
  }
};

// Before / After Comparison Slider Pairs (2000–2010 vs. Present)
const beforeAfterPairs = [
  {
    "tab": " Phones",
    "title": "Nokia 3310 → 5G Smartphone",
    "caption": "From 160-character texts and Snake to video calls, feeds, and live streams in one pocket-sized screen.",
    "before": {
      "img": "./images/phones 1.png",
      "emoji": "📟",
      "label": "Nokia 3310, 2002"
    },
    "after": {
      "img": "./images/modernphones.jpg",
      "emoji": "📱",
      "label": "5G Smartphone, Today"
    }
  },
  {
    "tab": " Music",
    "title": "Burned MP3 CDs → Streaming",
    "caption": "Quiapo burned CDs and bulky CD players gave way to Spotify, YouTube Music, and global P-Pop fandoms.",
    "before": {
      "img": "./images/opm 1.png",
      "emoji": "💿",
      "label": "Burned MP3 CD, 2005"
    },
    "after": {
      "img": "./images/ppop.png",
      "emoji": "🎧",
      "label": "Spotify & P-Pop, Today"
    }
  },
  {
    "tab": " Gaming",
    "title": "LAN Shops → Mobile Esports",
    "caption": "Rows of bulky CRT monitors running DotA 1 became pro Mobile Legends tournaments watched by millions.",
    "before": {
      "img": "./images/internetcafe.jpg",
      "emoji": "🖥️",
      "label": "LAN Shop, 2006"
    },
    "after": {
      "img": "./images/esports.png",
      "emoji": "🏆",
      "label": "Mobile Esports, Today"
    }
  },
  {
    "tab": " Sports",
    "title": "From One Boxing Icon to a Multi-Sport Golden Era",
    "caption": "From halting a nation during Pacquiao's fights to celebrating Olympic golds across gymnastics, weightlifting, and athletics.",
    "before": {
      "img": "./images/manny.jpg",
      "emoji": "🥊",
      "label": "Boxing, 2008"
    },
    "after": {
      "img": "./images/recentsports.png",
      "emoji": "🥇",
      "label": "Sports, Today"
    }
  }
];
