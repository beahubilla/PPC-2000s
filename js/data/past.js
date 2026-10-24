// ============================================================
// PHASE 1: PAST DATA (2000–2010)
// ------------------------------------------------------------
// Edit this file to update all 2000s Wing exhibits, Nokia 3310
// preset SMS messages, and circa-2007 Friendster curator profiles.
// ============================================================

// Nokia 3310 Preset SMS Messages
const smsData = {
  "txt_clan": "\"Eow poh! Sali kau s clan nmin? Txt CLAN ON 2 2366! Gud am sa lhat!\"",
  "edsa2": "\"Go 2 EDSA! Wear blk. Pls pass 2 all. Overthrow corruption now!\"",
  "gm": "\"gud am Pipz.. Kain tau bfast.. Tc alwayz.. Send to many.\"",
  "jejemon": "\"eOw pOwhz mHuZtAh nAh pOwh kAyOw dItOwh? jEjeJejE! >:)\""
};

// Message shown on the Nokia screen when the page first loads
const smsDefault = "\"D2 na me, wer na u? txt bck asap! <3\"";

// 2000–2010 Exhibit Content (keyed by exhibit ID)
const pastExhibits = {
  "social": {
    "badge": "Nokia 3310 & Friendster",
    "tag": "SMS CLANS & OFWS",
    "thenTitle": "The Texting Capital of the World",
    "thenBlurb": "160-character SMS clans, prepaid load, Friendster testimonials, and early OFW video calls.",
    "image": "./images/nokia.png",
    "alt": "Nokia Mobile Phones",
    "then": "Nokia 3310 keypad texting, SMS clans, Friendster testimonials, and Yahoo Messenger video calls for OFW families.",
    "impact": "Turned the Philippines into the 'texting capital of the world'",
    "intro": "In the early 2000s the Philippines became known as the 'texting capital of the world'. Phones were small, load was precious, and every character counted. Filipinos squeezed whole conversations into tiny messages.",
    "facts": [
      "A single SMS was capped at 160 characters, and texting grew its own lingo, which is why 'txt speak' like 'u', '2', and 'gud am' took off.",
      "Texting took off because it was far cheaper than phone calls or going online at home.",
      "Friendster was founded in the US in 2002 and opened to the public in 2003. Its biggest audience was in Southeast Asia, and by 2008 the Philippines made up about 39% of its traffic."
    ],
    "artifacts": [
      {
        "emoji": "📱",
        "name": "Nokia 3310",
        "note": "Remembered for its toughness, the Snake game, and the multi-tap keypad."
      },
      {
        "emoji": "💳",
        "name": "Prepaid 'load'",
        "note": "Small top-ups and unli-text promos powered the texting craze."
      },
      {
        "emoji": "👥",
        "name": "Friendster testimonials",
        "note": "Public messages on your profile were a social currency."
      },
      {
        "emoji": "💬",
        "name": "Yahoo! Messenger",
        "note": "Buzz, nudges, and webcam calls kept families connected."
      }
    ],
    "sources": [
      {
        "title": "3GPP TS 23.040",
        "url": "https://www.3gpp.org/dynareport/23040.htm",
        "publisher": "3GPP",
        "era": "then",
        "note": "Short Message Service technical specification."
      },
      {
        "title": "The Philippine text messaging phenomenon",
        "url": "https://www.philstar.com/lifestyle/business-life/2001/05/15/85823/philippine-text-messaging-phenomenon/amp/",
        "publisher": "The Philippine STAR",
        "year": "2001",
        "era": "then",
        "note": "Texting culture, low cost versus the internet, and 'Generation Txt'."
      },
      {
        "title": "There was a time when SMS was free",
        "url": "https://gmanetwork.com/news/opinion/content/101788/there-was-a-time-when-sms-was-free/story",
        "publisher": "GMA News",
        "era": "then",
        "note": "The Philippines as the SMS capital of the world."
      },
      {
        "title": "Applying the Digital Opportunity Index to the Philippines (presentation)",
        "url": "https://itu.int/osg/spuold/digitalbridges/materials/salazar-ppt.pdf",
        "publisher": "ITU / LIRNEasia",
        "era": "then",
        "note": "Why the SMS explosion happened and what people used it for."
      },
      {
        "title": "Friendster",
        "url": "https://en.wikipedia.org/wiki/Friendster",
        "publisher": "Wikipedia",
        "era": "then",
        "note": "Founding, 2003 launch, and the shift to Southeast Asia."
      },
      {
        "title": "Social media use in the Philippines",
        "url": "https://en.wikipedia.org/wiki/Social_media_use_in_the_Philippines",
        "publisher": "Wikipedia",
        "era": "both",
        "note": "Friendster's Philippine traffic share and social media use over time."
      }
    ]
  },
  "economic": {
    "badge": "BPO Nightshifts & Piracy",
    "tag": "CALL CENTERS & DVDS",
    "thenTitle": "Call Centers & Quiapo DVDs",
    "thenBlurb": "Night-shift BPO offices, pirated DVD stalls, and TV rating wars.",
    "image": "./images/bpo.png",
    "alt": "Urban Business District",
    "then": "Explosion of call centers creating the 24/7 night economy, Quiapo pirated DVD stalls, and TV rating wars.",
    "impact": "Created a night-shift workforce and a city that never slept",
    "intro": "As call centers grew in the 2000s, whole districts stayed awake at night to serve customers overseas. Cities adapted with 24-hour food spots, shuttle services, and late-night shopping.",
    "facts": [
      "Call centers served overseas customers, so many agents worked at night in Manila.",
      "GCash launched in October 2004 as an SMS-based money-transfer service, years before smartphone apps (the GCash app arrived in 2012).",
      "Pirated CDs and DVDs sold in places like Quiapo were a part of everyday entertainment."
    ],
    "artifacts": [
      {
        "emoji": "🎧",
        "name": "Agent headset",
        "note": "The uniform of the night-shift workforce."
      },
      {
        "emoji": "🌙",
        "name": "24/7 eateries",
        "note": "Late-night meals for the BPO crowd."
      },
      {
        "emoji": "📀",
        "name": "Pirated DVD",
        "note": "Blockbusters before streaming existed."
      },
      {
        "emoji": "📲",
        "name": "E-wallets",
        "note": "From SMS cash-in to QR payments."
      }
    ],
    "sources": [
      {
        "title": "History of Business Process Outsourcing (BPO) in the Philippines",
        "url": "https://www.codev.com/article/history-bpo-philippines",
        "publisher": "Codev",
        "era": "then",
        "note": "1995 economic zone law, first call centers, 24/7 work culture."
      },
      {
        "title": "Philippines BPO",
        "url": "https://www.outsourceaccelerator.com/glossary/philippines-bpo/",
        "publisher": "Outsource Accelerator",
        "era": "then",
        "note": "Night-shift work for North American clients."
      },
      {
        "title": "The Philippines is further widening its portfolio of business process outsourcing",
        "url": "https://oxfordbusinessgroup.com/reports/philippines/2018-report/economy/one-call-away-moves-undertaken-to-offer-a-wider-range-of-services-amid-strong-competition-and-reform-to-taxes-and-incentives",
        "publisher": "Oxford Business Group",
        "year": "2018",
        "era": "then",
        "note": "First contact centre (1992) and early-2000s growth."
      },
      {
        "title": "Pirate hunters strike",
        "url": "https://philstar.com/metro/2003/07/16/213833/pirate-hunters-strike",
        "publisher": "The Philippine STAR",
        "year": "2003",
        "era": "then",
        "note": "Quiapo's role in the pirated disc trade."
      },
      {
        "title": "The Secret Lives of DVD Bootleggers",
        "url": "https://nextcity.org/informalcity/entry/the-secret-lives-of-manilas-dvd-bootleggers",
        "publisher": "Next City",
        "era": "then",
        "note": "Quiapo as the hub of Manila's pirated-film trade."
      },
      {
        "title": "GCash",
        "url": "https://en.wikipedia.org/wiki/GCash",
        "publisher": "Wikipedia",
        "era": "both",
        "note": "2004 SMS launch, 2012 app, QR payments."
      },
      {
        "title": "GCash: 20 years of transformative financial inclusion in the Philippines",
        "url": "https://www.sunstar.com.ph/cebu/feature/gcash-20-years-of-transformative-financial-inclusion-in-the-philippines",
        "publisher": "SunStar",
        "era": "both",
        "note": "From SMS transfers to the first mobile-money QR payment."
      }
    ]
  },
  "political": {
    "badge": "EDSA II & Text Brigades",
    "tag": "GMS & HELLO GARCI",
    "thenTitle": "Text Brigades & Hello Garci",
    "thenBlurb": "Chain texts, wiretap scandals, and satire shows shaped how Filipinos talked politics.",
    "image": "./images/people power.png",
    "alt": "Civic Protests",
    "then": "\"Go 2 EDSA, wear black\" SMS chains that toppled Estrada, the Hello Garci scandal, and political satire shows (Wazzup Wazzup).",
    "impact": "Showed that a forwarded text could help gather a crowd",
    "intro": "Politics moved at the speed of forwarded texts. In January 2001, messages spread calls to gather at EDSA, and the 'text brigade' became part of the story of how crowds were mobilized.",
    "facts": [
      "Text volume reportedly jumped from about 30 million to about 70 million messages a day during the final days of Estrada's impeachment trial and EDSA 2.",
      "The 'Hello Garci' scandal began in June 2005, when audio recordings allegedly of a phone call between President Arroyo and election official Virgilio Garcillano about the 2004 election were released.",
      "Texting was also used for everyday services, like booking movie tickets and reaching government agencies."
    ],
    "artifacts": [
      {
        "emoji": "📩",
        "name": "Chain text",
        "note": "'Pls pass 2 all' spread news and rumors alike."
      },
      {
        "emoji": "💿",
        "name": "'Hello Garci' CDs",
        "note": "Copies of the alleged recordings were played for reporters on CDs."
      },
      {
        "emoji": "📺",
        "name": "Satire shows",
        "note": "Comedy as a way to talk about power."
      },
      {
        "emoji": "📣",
        "name": "EDSA gatherings",
        "note": "Crowds gathered at EDSA in January 2001 (EDSA II)."
      }
    ],
    "sources": [
      {
        "title": "The Cell Phone and the Crowd",
        "url": "https://doi.org/10.1215/08992363-15-3-399",
        "publisher": "Vicente L. Rafael, Public Culture",
        "year": "2003",
        "era": "then",
        "note": "People Power II and mobile communication."
      },
      {
        "title": "The Philippine text messaging phenomenon",
        "url": "https://www.philstar.com/lifestyle/business-life/2001/05/15/85823/philippine-text-messaging-phenomenon/amp/",
        "publisher": "The Philippine STAR",
        "year": "2001",
        "era": "then",
        "note": "SMS volume during EDSA 2."
      },
      {
        "title": "Applying the Digital Opportunity Index to the Philippines (presentation)",
        "url": "https://itu.int/osg/spuold/digitalbridges/materials/salazar-ppt.pdf",
        "publisher": "ITU / LIRNEasia",
        "era": "then",
        "note": "Everyday uses of SMS."
      },
      {
        "title": "Hello Garci scandal",
        "url": "https://en.wikipedia.org/wiki/Hello_Garci_scandal",
        "publisher": "Wikipedia",
        "era": "then",
        "note": "Timeline and background of the scandal."
      },
      {
        "title": "What Went Before: Saga of the 'Hello Garci' tapes",
        "url": "https://newsinfo.inquirer.net/606445/what-went-before-saga-of-the-hello-garci-tapes",
        "publisher": "Philippine Daily Inquirer",
        "era": "then",
        "note": "Timeline of the 2005 tapes."
      }
    ]
  },
  "cultural": {
    "badge": "OPM Rock & P-Pop",
    "tag": "MP3 CDS & FANTASERYES",
    "thenTitle": "OPM Rock, Burned CDs & Fantaseryes",
    "thenBlurb": "Band mania on the radio, MP3 CDs from Quiapo, SexBomb dance crazes, and primetime fantaseryes.",
    "image": "./images/opm albums.png",
    "alt": "Audio & Stage Music",
    "then": "OPM rock explosion (Parokya ni Edgar, Kamikazee), Quiapo burned MP3 CDs, SexBomb dance hits, and primetime fantaseryes (Mulawin).",
    "impact": "Made band mania, burned CDs, and dance crazes part of everyday life",
    "intro": "The 2000s were a golden age for Pinoy rock and a wild mix of dance crazes and fantasy TV. Music traveled on burned CDs and radio requests.",
    "facts": [
      "Bands like Parokya ni Edgar (nicknamed 'The National Band of the Philippines' by local media), Kamikazee, and Sponge Cola were part of the early-2000s Pinoy rock scene, and FM radio and TV helped make them popular.",
      "The SexBomb Girls began as backup dancers on Eat Bulaga! (the group formed in 1999) and grew into multi-platinum recording stars.",
      "Mulawin premiered on GMA Network on August 2, 2004, as a primetime fantasy series."
    ],
    "artifacts": [
      {
        "emoji": "💿",
        "name": "Burned MP3 CD",
        "note": "Dozens of songs on one disc, often bought in Quiapo."
      },
      {
        "emoji": "📻",
        "name": "Radio requests",
        "note": "Text-in dedications shaped the hit parade."
      },
      {
        "emoji": "🎤",
        "name": "Videoke",
        "note": "The family karaoke machine at every party."
      },
      {
        "emoji": "📺",
        "name": "Primetime fantaserye",
        "note": "Capes, creatures, and dramatic cliffhangers."
      }
    ],
    "sources": [
      {
        "title": "Pogi rock",
        "url": "https://en.wikipedia.org/wiki/Pogi_rock",
        "publisher": "Wikipedia",
        "era": "then",
        "note": "Early-2000s Pinoy rock bands on FM radio and TV."
      },
      {
        "title": "Parokya ni Edgar",
        "url": "https://en.wikipedia.org/wiki/Parokya_ni_Edgar",
        "publisher": "Wikipedia",
        "era": "then",
        "note": "The band and its 'National Band' nickname."
      },
      {
        "title": "Kamikazee",
        "url": "https://en.wikipedia.org/wiki/Kamikazee",
        "publisher": "Wikipedia",
        "era": "then",
        "note": "First album in 2002."
      },
      {
        "title": "SexBomb Girls",
        "url": "https://en.wikipedia.org/wiki/SexBomb_Girls",
        "publisher": "Wikipedia",
        "era": "then",
        "note": "From Eat Bulaga! backup dancers to recording stars."
      },
      {
        "title": "Mulawin",
        "url": "https://en.wikipedia.org/wiki/Mulawin",
        "publisher": "Wikipedia",
        "era": "then",
        "note": "2004 GMA fantasy series."
      },
      {
        "title": "Pirate hunters strike",
        "url": "https://philstar.com/metro/2003/07/16/213833/pirate-hunters-strike",
        "publisher": "The Philippine STAR",
        "year": "2003",
        "era": "then",
        "note": "Quiapo and the pirated CD trade."
      }
    ]
  },
  "environmental": {
    "badge": "Typhoon Ondoy (2009)",
    "tag": "DISASTER RESCUE TWEETS",
    "thenTitle": "Typhoon Ondoy, 2009",
    "thenBlurb": "The flood that pushed Filipinos to rescue each other online.",
    "image": "./images/ondoy.png",
    "alt": "Storm & Heavy Rain",
    "then": "Broadcast TV and radio storm signals; Typhoon Ondoy (2009) prompted the first viral online rescue calls and donation drives.",
    "impact": "Showed how quickly people could ask for help and organize relief online",
    "intro": "On September 26, 2009, Typhoon Ondoy (Ketsana) flooded much of Metro Manila. As phone lines and roads failed, people turned to texts and social media to share locations, request rescue, and organize donations. It showed how quickly people could ask for help and organize relief online.",
    "facts": [
      "More than a month's worth of rain fell on Metro Manila in just 12 hours.",
      "People used Twitter, Facebook, online maps, and shared spreadsheets to pass along rescue requests.",
      "Online groups collected donations for flood victims within days."
    ],
    "artifacts": [
      {
        "emoji": "🆘",
        "name": "Online rescue map",
        "note": "Volunteers compiled flood victims' addresses and a situation map online."
      },
      {
        "emoji": "📻",
        "name": "Battery radio",
        "note": "A lifeline when power went out."
      },
      {
        "emoji": "🛶",
        "name": "Rescue boats",
        "note": "Neighbors and volunteers helping neighbors."
      },
      {
        "emoji": "🥫",
        "name": "Relief packs",
        "note": "Community-packed goods organized online."
      }
    ],
    "sources": [
      {
        "title": "Final Report on Tropical Storm Ondoy and Typhoon Pepeng",
        "url": "https://ndrrmc.gov.ph/index.php/2-uncategorised/1543-final-report-on-tropical-storm-ondoy-and-typhoon-pepeng",
        "publisher": "NDRRMC",
        "year": "2009",
        "era": "then",
        "note": "Official disaster report, 2009."
      },
      {
        "title": "'Ondoy' leaves 75 dead and missing",
        "url": "https://www.philstar.com/headlines/2009/09/27/508736/ondoy-leaves-75-dead-and-missing",
        "publisher": "The Philippine STAR",
        "year": "2009",
        "era": "then",
        "note": "Rainfall in 12 hours and the early rescue effort."
      },
      {
        "title": "Philippines: Worst Flooding in 40 Years",
        "url": "https://globalvoices.org/2009/09/27/philippines-worst-flooding-in-40-years/",
        "publisher": "Global Voices",
        "year": "2009",
        "era": "then",
        "note": "Social media, rescue maps, and donation drives during Ondoy."
      },
      {
        "title": "Ondoy's Onslaught: Philippines Battered By Typhoon",
        "url": "https://asiafoundation.org/?p=2645",
        "publisher": "The Asia Foundation",
        "year": "2009",
        "era": "then",
        "note": "Texting and social networks during the storm."
      }
    ]
  }
  "sports and gaming": {
    "badge": "Pacquiao & LAN Shops",
    "tag": "DOTA 1 & CRIME DROPS",
    "thenTitle": "Fight Nights & LAN Cafes",
    "thenBlurb": "Streets that went quiet for Pacquiao fights, and computer shops packed for all-night DotA.",
    "image": "./images/computer shop.png",
    "alt": "Esports Gaming Room",
    "then": "Crime reportedly fell to almost zero during Pacquiao boxing broadcasts, plus PBA arena finals and bulky CRT computer shops playing DotA 1 and Counter-Strike.",
    "impact": "Fight nights and LAN shops became shared neighborhood rituals",
    "intro": "Sports and games brought neighborhoods together. In the 2000s that meant crowding around one TV for a Pacquiao fight or packing a computer shop for an all-night DotA match.",
    "facts": [
      "Pacquiao fight nights became famous for quiet streets, and police often reported close to zero crime while the fights were on.",
      "DotA started as a Warcraft III mod and was a staple of internet cafes across the country.",
      "Internet cafes rented computers by the hour, so a few pesos could buy an afternoon of games."
    ],
    "artifacts": [
      {
        "emoji": "🥊",
        "name": "Fight-night TV",
        "note": "Whole barangays watching one screen."
      },
      {
        "emoji": "🖥️",
        "name": "CRT monitor rows",
        "note": "Pay-per-hour computer shops after school."
      },
      {
        "emoji": "🎧",
        "name": "Headset & Mouse",
        "note": "Essential gear for a late-night match."
      },
      {
        "emoji": "🏀",
        "name": "PBA finals",
        "note": "Basketball nights filled arenas and living rooms."
      }
    ],
    "sources": [
      {
        "title": "Crime rate turns almost zilch on Pacquiao fight days - police",
        "url": "https://gmanetwork.com/news/topstories/nation/63607/crime-rate-turns-almost-zilch-on-pacquiao-fight-days-police/story",
        "publisher": "GMA News",
        "era": "then",
        "note": "Police reports on crime during Pacquiao fights."
      },
      {
        "title": "Police on alert Sunday despite almost no crime during Pacquiao fights",
        "url": "https://newsinfo.inquirer.net/92331/police-on-alert-sunday-despite-almost-no-crime-during-pacquiao-fights/amp",
        "publisher": "Philippine Daily Inquirer",
        "era": "then",
        "note": "Crime was usually close to zero on fight days."
      },
      {
        "title": "13 Top PC Games in Computer Cafes in the Philippines",
        "url": "https://news.yahoo.com/13-top-pc-games-computer-200034195.html",
        "publisher": "Tech in Asia via Yahoo News",
        "era": "then",
        "note": "DotA as a Warcraft III map; popular computer cafe games."
      },
      {
        "title": "In Response to IGN Asia Pacific's 'Overview: Gaming in the Philippines'",
        "url": "https://www.gamedeveloper.com/game-platforms/in-response-to-ign-asia-pacific-s-overview-gaming-in-the-philippines-",
        "publisher": "Game Developer",
        "era": "then",
        "note": "Computer shops and cheap hourly PC rental."
      },
      {
        "title": "Lakad matatag",
        "url": "https://gameindustry.ph/article/lakad-matatag",
        "publisher": "GameIndustry.ph",
        "era": "then",
        "note": "DotA culture in Philippine internet cafes."
      }
    ]
  },
};

// Circa-2007 Friendster Profiles for Meet the Curators
const friendsterProfiles = [
  {
    "name": "Ysha Rose Beatrice Hubilla",
    "short": "Bea",
    "initials": "BH",
    "handle": "★彡 BeA_Coups_2002 彡★",
    "avatar": "./images/Keep Calm.jpg",
    "quote": "KEEP CALM AND PLAY HARD",
    "status": "Single (but txtmates 24/7)",
    "memberSince": "November 2002",
    "hometown": "Marikina, Philippines",
    "about": "Certified Friendster addict. Collects sticker pages, burned CDs, and unli-text promos. Will reply to your testimonial within 3-5 business days.",
    "interests": [
      "Texting",
      "Friendster",
      "OPM Rock",
      "Sticker pages",
      "Yahoo Messenger"
    ],
    "testimonials": [
      {
        "from": "BEnzzzz",
        "text": "wer na u, d2 na me comshop"
      },
      {
        "from": "ingridientZz1230__",
        "text": "accpt mu frend req q"
      }
    ]
  },
  {
    "name": "Benz Buluran",
    "short": "Benz",
    "initials": "BB",
    "handle": " BEnzzzz ",
    "avatar": "./images/deku.jpg",
    "quote": "gg ez.. 1 more game",
    "status": "In a Relationship (with DotA 1)",
    "memberSince": "June 2005",
    "hometown": "Metro Manila, Philippines",
    "about": "Lives in the computer shop from after class until the 12 midnight closing. Owns 3 mouse pads. Knows every Pacquiao fight date by heart.",
    "interests": [
      "DotA 1",
      "Counter-Strike",
      "Pacquiao fights",
      "PBA",
      "Burned game CDs"
    ],
    "testimonials": [
      {
        "from": "★彡 BeA_Coups_2002 彡★",
        "text": "uwi na! Hinahanap ka na ni Mama, 5 hrs ka na sa cafe! Txt mo naman ako."
      },
      {
        "from": "♪♫ ingridientZz1230__ ♫♪",
        "text": "Thanks sa pag-add! Penge naman ng tips sa game master, noob pa me hehe."
      }
    ]
  },
  {
    "name": "Ingrid Mary Sacramento",
    "short": "Ingrid",
    "initials": "IS",
    "handle": "♪♫ ingridientZz1230__ ♫♪",
    "avatar": "./images/domo.png",
    "quote": "gusto ko lang matulog‎꜀( ꜆-ࡇ-)꜆ ᶻ 𝗓 𐰁",
    "status": "single ayee",
    "memberSince": "December 2007",
    "hometown": "Pasig, Philippines",
    "about": "Burns her own MP3 CDs, watches every primetime fantaserye, and forwards every chain text she receives. Yes, even the ones that say 'pass to 10 people'.",
    "interests": [
      "OPM bands",
      "MP3 CDs",
      "Fantaseryes",
      "Chain texts",
      "SexBomb dance steps"
    ],
    "testimonials": [
      {
        "from": "★彡 BeA_Coups_2002 彡★",
        "text": "friend request accepted, pahiram naman ng CD mo"
      },
      {
        "from": "BEnzzzz",
        "text": "dati din akong noob, tara DOTA"
      }
    ]
  }
];
