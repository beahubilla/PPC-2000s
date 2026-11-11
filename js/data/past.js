// ============================================================
// PHASE 1: PAST DATA (2000–2010)
// ============================================================
const smsData = {
  "txt_clan": "\"Eow poh! Sali kau s clan nmin? Txt CLAN ON 2 2366! Gud am sa lhat!\"",
  "edsa2": "\"Go 2 EDSA! Wear blk. Pls pass 2 all. Overthrow corruption now!\"",
  "gm": "\"gud am Pipz.. Kain tau bfast.. Tc alwayz.. Send to many.\"",
  "jejemon": "\"eOw pOwhz mHuZtAh nAh pOwh kAyOw dItOwh? jEjeJejE! >:)\""
};
const smsDefault = "\"D2 na me, wer na u? txt bck asap! <3\"";
const nokiaAutoReplies = [
  "\"Fr: BeA_2002\nD2 na kmi sa SM MOA! Bilisan mo, unli-txt pa me! :)\"",
  "\"Fr: BEnz_DotA\nG! 5v5 DotA d2 sa comshop, 15 pesos/hr lng! Wer na u?\"",
  "\"Fr: Ingrid_07\nVoted 4 my bet sa StarStruck! Pasa mo 2 sa 10 friends! <3\"",
  "\"Fr: 2366-CLAN\nWelcome 2 Pinoy Txt Clan! Reply w/ ur ASL & YM ID!\""
];
const pastExhibits = {
  "social": {
    "badge": "Nokia 3310 & Friendster",
    "tag": "SMS & INTERNET CAFES",
    "thenTitle": "Texting Capital & Early Social Networks",
    "thenBlurb": "SMS clans, Friendster profiles in internet cafes, reality-TV text voting, and Skype OFW calls.",
    "image": "./images/nokia.png",
    "alt": "Nokia Mobile Phones",
    "then": "Filipinos connected through separate channels: keypad phones for texting and SMS voting, and desktop computers or internet cafes for Friendster, Multiply, and Skype OFW calls.",
    "impact": "Texting culture and early social networks (Friendster, Multiply, Facebook) built the habit of staying constantly connected. That habit moved from SMS and desktops to apps like Messenger, TikTok, and Instagram on smartphones.",
    "intro": "Between 2000 and 2010, affordable mobile phones made the Philippines the 'Texting Capital of the World' while neighborhood internet cafes introduced millions of Filipinos to early social networks and OFW video calls.",
    "categories": [
      {
        "icon": "✨",
        "label": "Key Events & Highlights",
        "text": "Start of social media in the PH: Friendster, MySpace, and Facebook, plus YouTube and Twitter, were all founded in this decade. Computer shops and internet cafes were how many Filipinos got online."
      },
      {
        "icon": "⚙️",
        "label": "Technology",
        "text": "Texting boom: affordable mobile phones made the PH the 'Texting Capital of the World' in the early to mid-2000s."
      },
      {
        "icon": "🎭",
        "label": "Performance",
        "text": "Audience-driven SMS voting on talent and reality shows (StarStruck, Star Circle Quest, Pinoy Big Brother): viewers texted to save or evict contestants."
      },
      {
        "icon": "🌐",
        "label": "Globalization",
        "text": "Skype and Yahoo Messenger (and later Facebook) let OFWs video-chat and stay in touch with family abroad."
      },
      {
        "icon": "📈",
        "label": "Observable Trend",
        "text": "Filipinos are connected but through separate channels: texting, desktop social media, SMS voting, and Skype calls with OFWs each needed a different device or place (phone, computer, internet cafe)."
      }
    ],
    "facts": [
      "Start of social media in the PH: Friendster, MySpace, and Facebook, plus YouTube and Twitter, were all founded in this decade. Computer shops and internet cafes were how many Filipinos got online.",
      "Texting boom: affordable mobile phones made the PH the 'Texting Capital of the World' in the early to mid-2000s, powering audience-driven SMS voting on StarStruck, Star Circle Quest, and Pinoy Big Brother.",
      "Skype and Yahoo Messenger (and later Facebook) let OFWs video-chat and stay in touch with family abroad across separate devices and places."
    ],
    "artifacts": [
      {
        "emoji": "📱",
        "name": "Nokia & SMS Voting",
        "note": "Powered the Texting Capital of the World and StarStruck/PBB text votes."
      },
      {
        "emoji": "👥",
        "name": "Friendster & Multiply",
        "note": "Early social networks customized with testimonials and profile widgets."
      },
      {
        "emoji": "💬",
        "name": "Skype & Yahoo! Messenger",
        "note": "Let OFWs video-chat and stay in touch with family abroad."
      },
      {
        "emoji": "🖥️",
        "name": "Internet Cafe Desktops",
        "note": "Neighborhood computer shops where many Filipinos got online."
      }
    ],
    "gallery": [
      {
        "src": "./images/phones.png",
        "caption": "Early 2000s mobile phones and texting culture",
        "year": "2000–2010"
      },
      {
        "src": "./images/phones 1.png",
        "caption": "Keypad phones that powered the Texting Capital of the World",
        "year": "2000–2010"
      }
    ],
    "sources": [
      {
        "title": "From 'Friendster' to 'Facebook': The Evolution of Social Media in the Philippines",
        "url": "https://taasnoopilipino.com/from-friendster-to-facebook-the-evolution-of-social-media-in-the-philippines/",
        "publisher": "Taas Noo Pilipino",
        "year": "2025",
        "era": "both",
        "note": "Evolution of social media platforms in the Philippines from the 2000s to today."
      },
      {
        "title": "Internet and social media during the 2000s",
        "url": "https://pinoyy2khub.wordpress.com/2024/11/23/internet-and-social-media-during-the-2000/",
        "publisher": "Pinoy Y2K Culture Hub",
        "year": "2024",
        "era": "then",
        "note": "Computer shops, early social media, and online connectivity in the 2000s."
      },
      {
        "title": "Public Spaces in the Philippines during the 2000s",
        "url": "https://pinoyy2khub.wordpress.com/2024/11/22/public-spaces-in-the-philippines-during-the-2000s/",
        "publisher": "Pinoy Y2K Culture Hub",
        "year": "2024",
        "era": "then",
        "note": "Coffee shops, parks, and public leisure destinations in the 2000s."
      },
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
        "note": "Statistical growth of SMS daily volume during the peak 2000s texting era."
      }
    ]
  },
  "economic": {
    "badge": "BPO Boom & Mega-Malls",
    "tag": "CALL CENTERS & MALLS",
    "thenTitle": "BPO Boom, Mega-Malls & 24/7 Economy",
    "thenBlurb": "Declared Call Center Capital in 2010, overnight BPO shifts, SM MOA & BGC hubs, and physical media sales.",
    "image": "./images/past-bgc.jpg",
    "alt": "Bonifacio High Street and 2000s business hubs",
    "then": "A place-based economy with global links: work and spending happened in physical places (BPO offices, malls like SM MOA and BGC, record stores, concerts), connected globally via BPO clients and OFW remittances.",
    "impact": "The BPO boom and OFW remittances tied the Philippine economy to global clients and round-the-clock work. That experience carried into today's freelancing, remote work, e-commerce, and mobile payments (GCash, Maya).",
    "intro": "The boom of the BPO industry led the Philippines to be declared the call-center capital of the world in 2010, powering a 24/7 night economy alongside OFW remittances and mega-malls like SM MOA and Bonifacio High Street.",
    "categories": [
      {
        "icon": "✨",
        "label": "Key Events & Highlights",
        "text": "Boom of the BPO industry; the PH was declared the call-center capital of the world in 2010. Malls like SM MOA and Bonifacio High Street became spending and leisure hubs."
      },
      {
        "icon": "⚙️",
        "label": "Technology",
        "text": "Shift in how people consumed media and gadgets: cassette tapes to burned CDs to MP3 players/iPods, and bulky CRT TVs to LCD/plasma."
      },
      {
        "icon": "🎭",
        "label": "Performance",
        "text": "Entertainment earned through TV ratings, physical album sales, and concert ticket sales."
      },
      {
        "icon": "🌐",
        "label": "Globalization",
        "text": "BPO serving Western clients overnight and OFW remittances linked the PH economy to the world and powered a 24/7 night economy (fast food, convenience stores, transport open around the clock)."
      },
      {
        "icon": "📈",
        "label": "Observable Trend",
        "text": "A place-based economy with global links: work and spending happened in physical places (BPO offices, malls, record stores, concerts), and the world connected through BPO clients and OFW remittances."
      }
    ],
    "facts": [
      "Boom of the BPO industry; the PH was declared the call-center capital of the world in 2010, while SM MOA and Bonifacio High Street became spending and leisure hubs.",
      "Media and gadgets shifted from cassette tapes to burned CDs to MP3 players/iPods, and from bulky CRT TVs to LCD/plasma, while entertainment earned through TV ratings, album sales, and concert tickets.",
      "BPO serving Western clients overnight and OFW remittances linked the PH economy to the world and powered a 24/7 night economy."
    ],
    "artifacts": [
      {
        "emoji": "🎧",
        "name": "BPO Graveyard Shift",
        "note": "Overnight call centers serving Western clients powered a 24/7 night economy."
      },
      {
        "emoji": "🏬",
        "name": "SM MOA & BGC High Street",
        "note": "Mega-malls and lifestyle hubs for shopping, dining, and leisure."
      },
      {
        "emoji": "💿",
        "name": "CDs, iPods & LCD TVs",
        "note": "Shift from cassettes and CRT TVs to MP3 players and flat screens."
      },
      {
        "emoji": "💸",
        "name": "OFW Remittances & Ticket Sales",
        "note": "Global remittances and physical album/concert sales drove spending."
      }
    ],
    "sources": [
      {
        "title": "A history of the BPO industry in numbers",
        "url": "https://www.rappler.com/brandrap/profiles-and-advocacies/98207-bpo-philippines-timeline/",
        "publisher": "Rappler (N. Natividad)",
        "year": "2015",
        "era": "then",
        "note": "BPO industry growth and the Philippines becoming the call center capital in 2010."
      },
      {
        "title": "Shopping malls: a popular destination for Filipinos",
        "url": "https://taasnoopilipino.com/shopping-malls-a-popular-destination-for-filipinos/",
        "publisher": "Taas Noo Pilipino",
        "year": "2024",
        "era": "then",
        "note": "Rise of SM MOA, Bonifacio High Street, Eastwood, Gateway, and TriNoma."
      },
      {
        "title": "History of Business Process Outsourcing (BPO) in the Philippines",
        "url": "https://www.codev.com/article/history-bpo-philippines",
        "publisher": "Codev",
        "era": "then",
        "note": "Economic zone law, call centers, and 24/7 work culture."
      },
      {
        "title": "GCash: 20 years of transformative financial inclusion in the Philippines",
        "url": "https://www.sunstar.com.ph/cebu/feature/gcash-20-years-of-transformative-financial-inclusion-in-the-philippines",
        "publisher": "SunStar",
        "era": "both",
        "note": "From early SMS money transfers in 2004 to mobile-money QR payments."
      }
    ],
    "gallery": [
      {
        "src": "./images/past-bgc.jpg",
        "caption": "Bonifacio High Street and emerging lifestyle hubs in the 2000s",
        "year": "2000–2010"
      },
      {
        "src": "./images/bpo.png",
        "caption": "24/7 BPO call center offices powering the night economy",
        "year": "2000–2010"
      }
    ]
  },
  "political": {
    "badge": "EDSA II & Hello Garci",
    "tag": "SMS BRIGADES & PRESS",
    "thenTitle": "Text Mobilization & National Controversies",
    "thenBlurb": "Estrada impeachment, EDSA II SMS chains, the Hello Garci scandal, and the 2009 Maguindanao massacre.",
    "image": "./images/people power.png",
    "alt": "Civic Protests",
    "then": "Text-driven mass mobilization: scandals and events were spread by TV news and text chains that gathered crowds (EDSA II), and the 2009 Maguindanao massacre drew global attention to press freedom.",
    "impact": "SMS mobilization (EDSA II) and public outrage over scandals like Hello Garci set a pattern of citizens organizing through communication tech. Today the same impulse runs through social media, livestreams, and online campaigns.",
    "intro": "During 2000–2010, SMS text chains and TV investigative journalism shaped political action across the Estrada impeachment trial, EDSA II, the 'Hello Garci' controversy, and the 2009 Maguindanao massacre.",
    "categories": [
      {
        "icon": "✨",
        "label": "Key Events & Highlights",
        "text": "Estrada impeachment trial, the 'Hello Garci' wiretapping controversy, and the 2009 Maguindanao massacre."
      },
      {
        "icon": "⚙️",
        "label": "Technology",
        "text": "SMS text chains and group messages gathered crowds for political action (e.g., EDSA II), alongside early political blogs."
      },
      {
        "icon": "🎭",
        "label": "Performance",
        "text": "Prime-time investigative news magazines, political satire programs, and TV talk-show confrontations."
      },
      {
        "icon": "🌐",
        "label": "Globalization",
        "text": "The Maguindanao massacre, the deadliest attack on journalists in history, drew global attention to press freedom in the PH."
      },
      {
        "icon": "📈",
        "label": "Observable Trend",
        "text": "Text-driven mass mobilization: scandals and events were spread by TV news and text chains that gathered crowds, and Maguindanao drew global attention to press freedom."
      }
    ],
    "facts": [
      "Estrada impeachment trial, the 'Hello Garci' wiretapping controversy, and the 2009 Maguindanao massacre defined the decade's political landscape.",
      "SMS text chains and group messages gathered crowds for political action (EDSA II) alongside early political blogs, investigative news magazines, and political satire shows.",
      "The 2009 Maguindanao massacre—the deadliest attack on journalists in history—drew global attention to press freedom in the Philippines."
    ],
    "artifacts": [
      {
        "emoji": "📩",
        "name": "EDSA II SMS Chains",
        "note": "Group text messages and early blogs that mobilized crowds at EDSA."
      },
      {
        "emoji": "💿",
        "name": "'Hello Garci' Recordings",
        "note": "The 2005 election wiretapping controversy that sparked national outrage."
      },
      {
        "emoji": "📺",
        "name": "Investigative TV & Satire",
        "note": "Prime-time news magazines, political satire, and talk-show debates."
      },
      {
        "emoji": "📰",
        "name": "Press Freedom Watch",
        "note": "Global spotlight on journalist safety after the 2009 Maguindanao massacre."
      }
    ],
    "sources": [
      {
        "title": "The Ampatuan Massacre: Summary of case trial",
        "url": "https://pcij.org/2019/12/18/the-ampatuan-massacre-summary-of-case-trial/",
        "publisher": "PCIJ",
        "year": "2019",
        "era": "then",
        "note": "Summary of the 2009 Maguindanao massacre and its impact on press freedom."
      },
      {
        "title": "The Cell Phone and the Crowd",
        "url": "https://doi.org/10.1215/08992363-15-3-399",
        "publisher": "Vicente L. Rafael, Public Culture",
        "year": "2003",
        "era": "then",
        "note": "People Power II and mobile SMS mobilization."
      },
      {
        "title": "What Went Before: Saga of the 'Hello Garci' tapes",
        "url": "https://newsinfo.inquirer.net/606445/what-went-before-saga-of-the-hello-garci-tapes",
        "publisher": "Philippine Daily Inquirer",
        "era": "then",
        "note": "Timeline of the 2005 Hello Garci wiretapping controversy."
      }
    ],
    "gallery": [
      {
        "src": "./images/people power.png",
        "caption": "Text-driven mass mobilization at EDSA II",
        "year": "2001"
      },
      {
        "src": "./images/people power 1.png",
        "caption": "Public rallies and civic action in the 2000s",
        "year": "2000–2010"
      }
    ]
  },
  "cultural": {
    "badge": "OPM Bands & Fantaseryes",
    "tag": "OPM, SEXBOMB & HALLYU",
    "thenTitle": "OPM Golden Era, Fantaseryes & First Hallyu Wave",
    "thenBlurb": "OPM bands (Parokya ni Edgar, Sponge Cola, MYMP), Mulawin & Encantadia, SexBomb, Emo/Jejemon style, and Meteor Garden.",
    "image": "./images/opm albums.png",
    "alt": "OPM Albums and Pop Culture Icons",
    "then": "TV, radio, and physical media shaped pop culture, with interactive SMS song dedications, burned MP3 CDs/iPods, Friendster music widgets, Western pop on MTV, and the first Hallyu wave.",
    "impact": "Fantaserye and TV dramas led to today's streaming series and micro-dramas. The SexBomb craze and SMS-interactive radio and TV led to TikTok dance trends, and the first Hallyu wave helped inspire P-pop groups like SB19 and BINI.",
    "intro": "The 2000s were a golden era for OPM bands, primetime fantaseryes, the SexBomb dance craze, and Emo and Jejemon fashion—powered by burned CDs, FM radio SMS requests, MTV, and early Asianovelas.",
    "categories": [
      {
        "icon": "✨",
        "label": "Key Events & Highlights",
        "text": "Golden era of OPM bands (Parokya ni Edgar, Sponge Cola, MYMP), fantaserye (Mulawin, Encantadia), the SexBomb craze, and Emo and Jejemon fashion."
      },
      {
        "icon": "⚙️",
        "label": "Technology",
        "text": "Burned MP3 CDs, iPods, MP3 phones, and music player widgets on Friendster and Multiply profiles."
      },
      {
        "icon": "🎭",
        "label": "Performance",
        "text": "TV dramas, the SexBomb dance craze, and radio love shows with SMS song requests and dedications."
      },
      {
        "icon": "🌐",
        "label": "Globalization",
        "text": "Western pop on MTV, Hollywood franchises (Iron Man in 2008 launched the MCU), and the first Hallyu wave (Meteor Garden, early K-dramas)."
      },
      {
        "icon": "📈",
        "label": "Observable Trend",
        "text": "TV, radio, and physical media shaped pop culture, with interactive SMS elements and influence from Western pop and the first Hallyu wave."
      }
    ],
    "facts": [
      "Golden era of OPM bands (Parokya ni Edgar, Sponge Cola, MYMP), fantaserye (Mulawin, Encantadia), the SexBomb craze, and Emo and Jejemon fashion.",
      "Music and media ran on burned MP3 CDs, iPods, MP3 phones, Friendster/Multiply music widgets, and radio love shows with SMS song requests.",
      "Western pop on MTV, Hollywood franchises (Iron Man in 2008), and the first Hallyu wave (Meteor Garden, early K-dramas) shaped local tastes."
    ],
    "artifacts": [
      {
        "emoji": "💿",
        "name": "Burned CDs, iPods & Widgets",
        "note": "Burned MP3 CDs, iPods, MP3 phones, and Friendster profile music widgets."
      },
      {
        "emoji": "🎸",
        "name": "OPM Bands & SexBomb",
        "note": "Parokya ni Edgar, Sponge Cola, MYMP, and iconic SexBomb dance hits."
      },
      {
        "emoji": "📺",
        "name": "Fantaseryes & SMS Radio",
        "note": "Mulawin, Encantadia, and radio love shows with SMS dedications."
      },
      {
        "emoji": "🌏",
        "name": "MTV, MCU & First Hallyu Wave",
        "note": "Western pop, Iron Man (2008), Meteor Garden, and early K-dramas."
      }
    ],
    "gallery": [
      {
        "src": "./images/opm albums.png",
        "caption": "Greatest OPM band and pop hits of the 2000s",
        "year": "2000–2010"
      },
      {
        "src": "./images/opm 1.png",
        "caption": "OPM compilation albums and burned CD culture",
        "year": "2000–2010"
      }
    ],
    "sources": [
      {
        "title": "Original Pilipino Music (OPM) in the 2000s",
        "url": "https://pinoyy2khub.wordpress.com/2024/11/19/original-pilipino-music-2000s/",
        "publisher": "Pinoy Y2K Culture Hub",
        "year": "2024",
        "era": "then",
        "note": "OPM bands, acoustic acts, and pop hits of the 2000s."
      },
      {
        "title": "Non-Filipino influencers embracing the 'bebot' trend: a 2000s beauty look goes mega-viral",
        "url": "https://www.tatlerasia.com/style/beauty/non-filipino-influencers-bebot-trend",
        "publisher": "Tatler Asia (C. Tibajia)",
        "year": "2026",
        "era": "both",
        "note": "The 2000s Filipina 'Bebot' beauty aesthetic and its 2026 viral revival."
      },
      {
        "title": "Telenovelas in the Philippines during the 2000s until the present",
        "url": "https://pinoyy2khub.wordpress.com/2024/11/23/telenovelas-in-the-philippines-2000s/",
        "publisher": "Pinoy Y2K Culture Hub",
        "year": "2024",
        "era": "both",
        "note": "Teleseryes, fantaseryes, and Asianovelas from the 2000s to today."
      },
      {
        "title": "Global music in the Philippines in the 2000s",
        "url": "https://pinoyy2khub.wordpress.com/2024/11/18/global-music-ph-2000s/",
        "publisher": "Pinoy Y2K Culture Hub",
        "year": "2024",
        "era": "then",
        "note": "Western pop, MTV, and the first Hallyu Wave in 2000s Philippines."
      }
    ]
  },
  "environmental": {
    "badge": "Typhoon Ondoy & SARS/H1N1",
    "tag": "ONDOY (2009) & RESCUES",
    "thenTitle": "Typhoon Ondoy & Early Rescue Crowdsourcing",
    "thenBlurb": "2009 Metro Manila flooding, Facebook/Twitter/SMS rescue calls, and the 2003 SARS & 2009 H1N1 scares.",
    "image": "./images/ondoy.png",
    "alt": "Storm & Heavy Rain",
    "then": "Broadcast-based warnings (TV and radio), supplemented by early social media and SMS crowdsourcing during Typhoon Ondoy (2009), alongside rising awareness of cross-border health threats (SARS, H1N1).",
    "impact": "Ondoy and the SARS/H1N1 scares raised awareness of disaster and health preparedness. Online crowdsourcing during Ondoy foreshadowed today's real-time alerts and social media reporting during typhoons and the pandemic.",
    "intro": "Typhoon Ondoy (2009) caused deadly flooding in Metro Manila while the 2003 SARS outbreak and 2009 H1N1 scare showed how health threats cross borders, prompting the first online rescue crowdsourcing via Facebook, Twitter, and SMS.",
    "categories": [
      {
        "icon": "✨",
        "label": "Key Events & Highlights",
        "text": "Typhoon Ondoy (2009) caused deadly flooding in Metro Manila; the decade also had the 2003 SARS outbreak and the 2009 swine flu (H1N1) scare."
      },
      {
        "icon": "⚙️",
        "label": "Technology",
        "text": "TV and radio bulletins for weather alerts. During Ondoy, stranded residents and volunteers also used Facebook, Twitter, and text messages to ask for and coordinate rescue."
      },
      {
        "icon": "🎭",
        "label": "Performance",
        "text": "TV weather forecasts, environmental documentaries, and public campaigns."
      },
      {
        "icon": "🌐",
        "label": "Globalization",
        "text": "Growing awareness of global warming and climate change; SARS and H1N1 showed how health threats cross borders."
      },
      {
        "icon": "📈",
        "label": "Observable Trend",
        "text": "Broadcast-based warnings (TV and radio), with early social media crowdsourcing during Ondoy, and rising awareness of disaster and health threats (Ondoy, SARS, H1N1)."
      }
    ],
    "facts": [
      "Typhoon Ondoy (2009) caused deadly flooding in Metro Manila alongside the 2003 SARS outbreak and 2009 swine flu (H1N1) scare.",
      "Stranded residents and volunteers used Facebook, Twitter, and text messages during Ondoy to ask for and coordinate rescue alongside TV/radio bulletins.",
      "Growing awareness of global warming and cross-border pandemics (SARS, H1N1) reshaped disaster and health preparedness."
    ],
    "artifacts": [
      {
        "emoji": "🆘",
        "name": "Ondoy SMS & Twitter Rescues",
        "note": "Stranded residents and volunteers coordinated rescues via SMS, Facebook & Twitter."
      },
      {
        "emoji": "📻",
        "name": "TV & Radio Weather Bulletins",
        "note": "Broadcast storm alerts, environmental documentaries, and public campaigns."
      },
      {
        "emoji": "😷",
        "name": "SARS (2003) & H1N1 (2009)",
        "note": "Cross-border health scares that raised pandemic awareness."
      },
      {
        "emoji": "🛶",
        "name": "Community Relief Drives",
        "note": "Volunteer rescue maps and relief packs organized online."
      }
    ],
    "gallery": [
      {
        "src": "./images/ondoy.png",
        "caption": "Residents navigating deep floodwaters during Typhoon Ondoy",
        "year": "2009"
      },
      {
        "src": "./images/ondoy baha.png",
        "caption": "Stranded residents awaiting rescue on rooftops during Ondoy",
        "year": "2009"
      }
    ],
    "sources": [
      {
        "title": "Remembering Ondoy, 10 years later",
        "url": "https://www.gmanetwork.com/news/specials/content/95/remembering-ondoy-10-years-later/",
        "publisher": "GMA News Online",
        "era": "then",
        "note": "Retrospective on Typhoon Ondoy's impact and citizen rescue efforts in 2009."
      },
      {
        "title": "Before COVID-19, there was SARS",
        "url": "https://newsinfo.inquirer.net/2152560/before-covid-19-there-was-sars",
        "publisher": "Inquirer.net (Y. Sotelo)",
        "year": "2025",
        "era": "both",
        "note": "How the 2003 SARS outbreak and 2009 H1N1 scare shaped Philippine public health response."
      },
      {
        "title": "Final Report on Tropical Storm Ondoy and Typhoon Pepeng",
        "url": "https://ndrrmc.gov.ph/index.php/2-uncategorised/1543-final-report-on-tropical-storm-ondoy-and-typhoon-pepeng",
        "publisher": "NDRRMC",
        "year": "2009",
        "era": "then",
        "note": "Official disaster report, 2009."
      }
    ]
  },
  "sports": {
    "badge": "Pacquiao, PBA & LAN Cafes",
    "tag": "PACMAN, PBA & GAMING",
    "thenTitle": "Pacquiao Fight Nights, PBA Finals & Global Pinoy Icons",
    "thenBlurb": "Streets emptied for Pacquiao bouts, packed PBA/NBA arenas, CRT plaza broadcasts, and global Pinoy pride.",
    "image": "./images/computer shop.png",
    "alt": "Esports Gaming Room",
    "then": "Collective, TV-centered sports fandom around Manny Pacquiao and the PBA—watched on CRT screens in homes, gyms, and plazas—with Filipino talents like Pacquiao, Charice, and Arnel Pineda earning global recognition.",
    "impact": "Watching Pacquiao fights and PBA finals together built a habit of rallying behind Pinoy athletes. Today that fandom has moved online through livestreams, real-time reactions, and athlete vlogs across more sports.",
    "intro": "Manny Pacquiao's rise made boxing a national event that emptied streets and coincided with lower crime, while PBA and NBA finals packed arenas and millions cheered together via analog CRT TVs and radio.",
    "categories": [
      {
        "icon": "✨",
        "label": "Key Events & Highlights",
        "text": "Manny Pacquiao's rise made boxing a national event; his fights were widely reported to empty the streets and even coincide with lower crime, and PBA and NBA finals filled arenas and boosted TV ratings."
      },
      {
        "icon": "⚙️",
        "label": "Technology",
        "text": "Analog TV and radio sports broadcasts, with CRT screens in public gyms and plazas."
      },
      {
        "icon": "🎭",
        "label": "Performance",
        "text": "Millions of Filipinos watched together on TV, in plazas, and via radio commentary to cheer on Pinoy sports icons."
      },
      {
        "icon": "🌐",
        "label": "Globalization",
        "text": "Pinoy talents won international recognition: Pacquiao in world boxing, and Charice and Arnel Pineda (Journey) in music."
      },
      {
        "icon": "📈",
        "label": "Observable Trend",
        "text": "Collective, TV-centered sports fandom around Pacquiao and the PBA, with Filipino talents earning international recognition."
      }
    ],
    "facts": [
      "Manny Pacquiao's rise made boxing a national event reported to empty streets and coincide with lower crime, while PBA and NBA finals boosted TV ratings.",
      "Millions watched together on analog CRT TVs, in public gyms and plazas, and via radio commentary.",
      "Pinoy talents won international recognition: Pacquiao in world boxing, and Charice and Arnel Pineda (Journey) in music."
    ],
    "artifacts": [
      {
        "emoji": "🥊",
        "name": "Pacquiao Fight Broadcasts",
        "note": "Watched on CRT TVs in plazas, gyms, and homes—emptying streets nationwide."
      },
      {
        "emoji": "🏀",
        "name": "PBA & NBA Arena Finals",
        "note": "Packed stadium finals and high-rating television broadcasts."
      },
      {
        "emoji": "🌟",
        "name": "Global Pinoy Icons",
        "note": "Pacquiao in world boxing alongside Charice and Arnel Pineda (Journey)."
      },
      {
        "emoji": "🖥️",
        "name": "LAN Cafes & Consoles",
        "note": "Neighborhood computer shops (DotA 1, Ragnarok, CS) and PS2/PSP gaming."
      }
    ],
    "gallery": [
      {
        "src": "./images/manny.jpg",
        "caption": "Manny Pacquiao in the ring during his iconic 2000s world title bouts",
        "year": "2000–2010"
      },
      {
        "src": "./images/computer shop.png",
        "caption": "Neighborhood computer shop packed with LAN gamers",
        "year": "2000–2010"
      },
      {
        "src": "./images/internetcafe.jpg",
        "caption": "Multiplayer gaming culture in 2000s internet cafes",
        "year": "2000–2010"
      }
    ],
    "sources": [
      {
        "title": "Gaming in the 2000s",
        "url": "https://pinoyy2khub.wordpress.com/2024/11/23/gaming-in-the-2000/",
        "publisher": "Pinoy Y2K Culture Hub",
        "year": "2024",
        "era": "then",
        "note": "Ragnarok Online, DotA, Counter-Strike, computer shops, and consoles in the 2000s."
      },
      {
        "title": "Legacy in motion",
        "url": "https://tribune.net.ph/2025/07/02/legacy-in-motion",
        "publisher": "Daily Tribune (J. Fernando)",
        "year": "2025",
        "era": "both",
        "note": "Philippine sports legacy from Pacquiao and the PBA to modern Filipino champions."
      },
      {
        "title": "Crime rate turns almost zilch on Pacquiao fight days - police",
        "url": "https://gmanetwork.com/news/topstories/nation/63607/crime-rate-turns-almost-zilch-on-pacquiao-fight-days-police/story",
        "publisher": "GMA News",
        "era": "then",
        "note": "Police reports on crime dropping to nearly zero during Pacquiao fights."
      }
    ]
  }
};
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
