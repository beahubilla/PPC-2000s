// ============================================================
// PHASE 1: PAST DATA (2000–2010)
// ------------------------------------------------------------
// Updated with MO-HUM080 Final Group Worksheet 3 (Chosen Decade: 2000–2010)
// across Social, Economic, Political, Cultural, Environmental, and Sports.
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
    "badge": "Nokia 3310, Friendster & Cafes",
    "tag": "SMS, FRIENDSTER & HANGOUTS",
    "thenTitle": "The Texting Capital & Early Social Networks",
    "thenBlurb": "Affordable SMS, Friendster & Multiply profiles, neighborhood internet cafes, SMS reality-TV voting, and Skype/Yahoo Messenger OFW calls.",
    "image": "./images/nokia.jpg",
    "alt": "Nokia 3310 showing a Filipino text message on its screen",
    "then": "Start of social media in the PH (Friendster, MySpace, Multiply, Facebook, YouTube, Twitter), the texting boom that made the PH the 'Texting Capital of the World', audience-driven SMS voting on reality shows (StarStruck, Star Circle Quest, Pinoy Big Brother), and Skype/Yahoo Messenger for OFWs.",
    "impact": "Texting culture and early social networks (Friendster, Multiply, Facebook) built the habit of staying constantly connected across separate devices and places.",
    "intro": "Communication evolved dramatically during 2000–2010 as affordable mobile phones dubbed the Philippines the 'Texting Capital of the World'. Friendster, MySpace, and Facebook—plus YouTube and Twitter—were all founded in this decade, while computer shops and internet cafes were how many Filipinos got online.",
    "facts": [
      "Start of social media in the PH: Friendster, MySpace, Multiply, and Facebook—plus YouTube and Twitter—were all founded in this decade, and neighborhood computer shops and internet cafes were how many Filipinos got online.",
      "Texting boom & interactive performance: affordable mobile phones made the PH the 'Texting Capital of the World' in the early to mid-2000s, powering audience-driven SMS voting on talent and reality shows (StarStruck, Star Circle Quest, Pinoy Big Brother) where viewers texted to save or evict contestants.",
      "Globalization & observable trend: Skype and Yahoo Messenger (and later Facebook) let OFWs video-chat and stay in touch with family abroad—meaning Filipinos were connected through separate channels where texting, desktop social media, SMS voting, and OFW calls each needed a different device or place (phone, computer, internet cafe)."
    ],
    "artifacts": [
      {
        "emoji": "📱",
        "name": "Nokia & SMS Voting",
        "note": "Made the PH the Texting Capital of the World and powered StarStruck, SCQ & PBB text votes."
      },
      {
        "emoji": "👥",
        "name": "Friendster, MySpace & Multiply",
        "note": "Early social networks accessed at home or in neighborhood internet cafes."
      },
      {
        "emoji": "💬",
        "name": "Skype & Yahoo! Messenger",
        "note": "Let OFWs video-chat and stay in touch with family members abroad."
      },
      {
        "emoji": "🖥️",
        "name": "Internet Cafe Desktops",
        "note": "Where many Filipinos went online for social networks, video calls, and YouTube."
      }
    ],
    "gallery": [
      {
        "src": "./images/phones.jpg",
        "caption": "Early 2000s mobile phones and texting culture",
        "year": "2000–2010"
      },
      {
        "src": "./images/phones-1.jpg",
        "caption": "Keypad phones that powered the Texting Capital of the World",
        "year": "2000–2010"
      },
      {
        "src": "./images/computer-shop.jpg",
        "caption": "Neighborhood computer shops were where many Filipinos first got online",
        "year": "2000–2010"
      },
      {
        "src": "./images/internet-cafe.jpg",
        "caption": "Internet cafe desktops used for social networks and video calls",
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
        "title": "The Medical City Celebrates its 50th Anniversary",
        "url": "https://www.themedicalcity.com/news/the-medical-city-celebrates-its-50th-anniversary",
        "publisher": "The Medical City",
        "era": "then",
        "note": "Healthcare infrastructure growth in Ortigas and developing business districts."
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
    "tag": "CALL CENTERS & MALL CULTURE",
    "thenTitle": "The BPO Boom, Mega-Malls & 24/7 Economy",
    "thenBlurb": "Declared the Call Center Capital of the World in 2010, overnight graveyard shifts, SM MOA & BGC High Street, and physical media.",
    "image": "./images/bpo-industry.jpg",
    "alt": "Rows of call-center workers at their desks in a BPO office",
    "then": "Boom of the BPO industry (PH declared Call Center Capital of the World in 2010), malls like SM MOA and Bonifacio High Street as spending and leisure hubs, media shift from cassettes/CRT TVs to burned CDs/MP3s/LCDs, entertainment earned via TV ratings and album/ticket sales, and OFW remittances.",
    "impact": "The BPO boom and OFW remittances tied the place-based Philippine economy to global clients and round-the-clock work.",
    "intro": "The rapid boom of the Business Process Outsourcing (BPO) industry culminated in the Philippines being declared the 'Call Center Capital of the World' in 2010. Serving Western clients overnight alongside OFW remittances linked the PH economy to the world and powered a 24/7 night economy (fast food, convenience stores, and transport open around the clock), while malls like SM MOA and Bonifacio High Street became major spending and leisure hubs.",
    "facts": [
      "Place-based economy with global links: work and spending happened in physical places (BPO offices, malls like SM MOA and Bonifacio High Street, record stores, concerts), while the country connected globally through overnight BPO clients and OFW remittances.",
      "Technology & gadget shift: how people consumed media and gadgets shifted from cassette tapes to burned CDs to MP3 players/iPods, and from bulky CRT TVs to LCD and plasma screens.",
      "Performance & media revenue: entertainment earned primarily through television ratings, physical CD/DVD album sales, and live concert ticket sales."
    ],
    "artifacts": [
      {
        "emoji": "🎧",
        "name": "BPO Graveyard Shift",
        "note": "Overnight call center agents serving Western clients powered a 24/7 night economy."
      },
      {
        "emoji": "🏬",
        "name": "SM MOA & Bonifacio High Street",
        "note": "Mega-malls and lifestyle hubs became primary spaces for spending and leisure."
      },
      {
        "emoji": "💿",
        "name": "CDs, iPods & LCD TVs",
        "note": "Hardware transition from cassettes and CRT TVs to MP3 players and flat screens."
      },
      {
        "emoji": "💸",
        "name": "OFW Remittances & Ticket Sales",
        "note": "Global remittances and physical album/concert sales drove consumer spending."
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
        "note": "Rise of SM MOA, Bonifacio High Street, Eastwood, Gateway, and TriNoma in the 2000s."
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
    ]
  },
  "political": {
    "badge": "EDSA II, Hello Garci & Press Freedom",
    "tag": "SMS BRIGADES & SCANDALS",
    "thenTitle": "Text-Driven Mobilization & Major Scandals",
    "thenBlurb": "EDSA II SMS chains, the Estrada impeachment trial, the Hello Garci controversy, and the 2009 Maguindanao massacre.",
    "image": "./images/people-power.jpg",
    "alt": "Large crowd of protesters with banners at a rally",
    "then": "Estrada impeachment trial, EDSA II SMS text chains and early political blogs, the 'Hello Garci' wiretapping controversy, primetime investigative news magazines and political satire shows, and the 2009 Maguindanao massacre drawing global attention to press freedom.",
    "impact": "SMS mobilization (EDSA II) and public outrage over scandals like Hello Garci set a lasting pattern of citizens organizing through communication technology.",
    "intro": "Politics in 2000–2010 was shaped by text-driven mass mobilization and major national controversies: the Estrada impeachment trial and EDSA II in 2001, the 'Hello Garci' wiretapping scandal in 2005, and the 2009 Maguindanao massacre, which drew global attention to press freedom in the Philippines.",
    "facts": [
      "Text-driven mass mobilization: SMS text chains and group messages gathered crowds for political action (such as EDSA II), alongside early political blogs.",
      "Prime-time political television: investigative news magazines, political satire programs, and fiery TV talk-show confrontations shaped public debate.",
      "Global attention on press freedom: the 2009 Maguindanao massacre—the deadliest attack on journalists in history—shocked the world and spotlighted press freedom in the Philippines."
    ],
    "artifacts": [
      {
        "emoji": "📩",
        "name": "EDSA II SMS Chains",
        "note": "Group text messages and early political blogs that gathered crowds for political action."
      },
      {
        "emoji": "💿",
        "name": "'Hello Garci' Wiretap Tapes",
        "note": "The 2005 election wiretapping controversy that sparked national outrage."
      },
      {
        "emoji": "📺",
        "name": "Investigative TV & Satire",
        "note": "Prime-time investigative news magazines, satire shows, and TV confrontations."
      },
      {
        "emoji": "📰",
        "name": "Press Freedom Watch",
        "note": "Global attention on journalist safety after the 2009 Maguindanao massacre."
      }
    ],
    "sources": [
      {
        "title": "The Ampatuan Massacre: Summary of case trial",
        "url": "https://pcij.org/2019/12/18/the-ampatuan-massacre-summary-of-case-trial/",
        "publisher": "Philippine Center for Investigative Journalism (PCIJ)",
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
    ]
  },
  "cultural": {
    "badge": "OPM Bands, Fantaseryes & Y2K Style",
    "tag": "OPM, SEXBOMB & BEBOT LOOK",
    "thenTitle": "Golden Era of OPM, Fantaseryes & Y2K Fashion",
    "thenBlurb": "OPM bands (Parokya ni Edgar, Sponge Cola, MYMP), fantaseryes (Mulawin, Encantadia), SexBomb craze, Emo/Jejemon fashion, and the first Hallyu wave.",
    "image": "./images/opm-albums.jpg",
    "alt": "OPM Albums and Pop Culture Icons",
    "then": "Golden era of OPM bands (Parokya ni Edgar, Sponge Cola, MYMP), fantaseryes (Mulawin, Encantadia), the SexBomb craze, Emo and Jejemon fashion, burned MP3 CDs/iPods/Friendster music widgets, SMS radio dedications, Western pop on MTV, MCU's Iron Man (2008), and the first Hallyu wave (Meteor Garden, early K-dramas).",
    "impact": "Fantaserye and TV dramas led to today's streaming series and micro-dramas, the SexBomb craze and SMS radio/TV led to TikTok dance trends, and the first Hallyu wave helped inspire P-pop groups like SB19 and BINI.",
    "intro": "The 2000–2010 decade was a golden era for OPM bands (Parokya ni Edgar, Sponge Cola, MYMP), primetime fantaseryes (Mulawin, Encantadia), the SexBomb dance craze, and Emo and Jejemon fashion—shaped by TV, radio, physical media, and the arrival of Western pop and the first Hallyu wave.",
    "facts": [
      "Technology & personal media: music traveled on burned MP3 CDs, iPods, MP3 phones, and embedded music player widgets on Friendster and Multiply profiles.",
      "Performance & broadcast culture: TV dramas, the SexBomb dance craze, and FM radio love shows with interactive SMS song requests and dedications defined everyday entertainment.",
      "Globalization & foreign waves: Western pop on MTV, Hollywood franchises (Iron Man in 2008 launched the MCU), and the first Hallyu and Asianovela wave (Meteor Garden and early K-dramas) blended with local pop culture."
    ],
    "artifacts": [
      {
        "emoji": "💿",
        "name": "Burned CDs, iPods & Widgets",
        "note": "Burned MP3 CDs, iPods, MP3 phones, and Friendster/Multiply profile music widgets."
      },
      {
        "emoji": "🎸",
        "name": "OPM Bands & SexBomb Craze",
        "note": "Parokya ni Edgar, Sponge Cola, MYMP, and iconic SexBomb dance hits."
      },
      {
        "emoji": "📺",
        "name": "Fantaseryes & SMS Radio",
        "note": "Mulawin, Encantadia, and radio love shows with SMS song requests and dedications."
      },
      {
        "emoji": "🌏",
        "name": "MTV, MCU & First Hallyu Wave",
        "note": "Western pop, Iron Man (2008), Meteor Garden, and early dubbed K-dramas."
      }
    ],
    "gallery": [
      {
        "src": "./images/opm-albums.jpg",
        "caption": "Greatest OPM band and pop hits of the 2000s",
        "year": "2000–2010"
      },
      {
        "src": "./images/opm-1.jpg",
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
        "note": "The 2000s Filipina 'Bebot' beauty aesthetic and its 2026 global viral revival."
      },
      {
        "title": "40 years of Filipino beauty: The trends and ideals that shaped us",
        "url": "https://lifestyle.inquirer.net/557165/40-years-of-filipino-beauty/",
        "publisher": "Lifestyle INQ (Asingian)",
        "year": "2025",
        "era": "then",
        "note": "2000s Filipino beauty ideals, hairstyles, and celebrity body standards."
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
      },
      {
        "title": "2000s Filipino childhood snacks that I miss",
        "url": "https://villagepipol.com/2000s-filipino-childhood-snacks-that-we-miss/",
        "publisher": "Village Pipol (B. S. Vicedo)",
        "year": "2022",
        "era": "then",
        "note": "Iconic 2000s snacks like E-Aji Dip Snax, Jungle Juice, and Nooda Crunch."
      },
      {
        "title": "13 early 2000s shoes that are still fashionable today",
        "url": "https://www.instyle.com/2000s-shoes-8407832",
        "publisher": "InStyle (S. Comroe)",
        "year": "2025",
        "era": "both",
        "note": "Early 2000s footwear trends and Y2K nostalgia."
      }
    ]
  },
  "environmental": {
    "badge": "Typhoon Ondoy & Health Scares",
    "tag": "ONDOY (2009) & SARS/H1N1",
    "thenTitle": "Typhoon Ondoy & Early Disaster Crowdsourcing",
    "thenBlurb": "Deadly 2009 Metro Manila flooding, early Facebook/Twitter/SMS rescue coordination, and the 2003 SARS & 2009 H1N1 scares.",
    "image": "./images/ondoy.jpg",
    "alt": "Residents wading through deep floodwaters during Typhoon Ondoy",
    "then": "Typhoon Ondoy (2009) caused deadly flooding in Metro Manila alongside the 2003 SARS outbreak and 2009 swine flu (H1N1) scare; TV/radio weather bulletins and documentaries were supplemented by stranded residents and volunteers using Facebook, Twitter, and SMS to coordinate rescue.",
    "impact": "Ondoy and the SARS/H1N1 scares raised awareness of disaster and health preparedness, while online crowdsourcing during Ondoy foreshadowed today's real-time alerts.",
    "intro": "Typhoon Ondoy (2009) caused deadly flooding across Metro Manila, while the decade also saw the 2003 SARS outbreak and 2009 swine flu (H1N1) scare. Broadcast-based warnings on TV and radio were supplemented during Ondoy by early social media crowdsourcing as stranded residents and volunteers used Facebook, Twitter, and text messages to ask for and coordinate rescue.",
    "facts": [
      "Technology & rescue crowdsourcing: TV and radio bulletins delivered weather alerts, and during Typhoon Ondoy (2009), stranded residents and volunteers used Facebook, Twitter, and SMS text messages to ask for and coordinate rescue.",
      "Public awareness & performance: TV weather forecasts, environmental documentaries, and public campaigns educated citizens on disaster preparedness.",
      "Globalization & cross-border health threats: growing awareness of global warming and climate change emerged alongside the 2003 SARS outbreak and 2009 H1N1 scare, showing how health and environmental threats cross borders."
    ],
    "artifacts": [
      {
        "emoji": "🆘",
        "name": "Ondoy SMS & Twitter Rescues",
        "note": "Stranded residents and volunteers used texts, Facebook, and Twitter to coordinate rescue."
      },
      {
        "emoji": "📻",
        "name": "TV & Radio Weather Bulletins",
        "note": "Broadcast weather forecasts, environmental documentaries, and public campaigns."
      },
      {
        "emoji": "😷",
        "name": "SARS (2003) & H1N1 (2009) Alerts",
        "note": "Cross-border health scares that raised awareness of pandemic preparedness."
      },
      {
        "emoji": "🛶",
        "name": "Community Relief Drives",
        "note": "Volunteer rescue maps and relief operations organized during Ondoy."
      }
    ],
    "gallery": [
      {
        "src": "./images/ondoy.jpg",
        "caption": "Residents navigating deep floodwaters during Typhoon Ondoy",
        "year": "2009"
      },
      {
        "src": "./images/ondoy-baha.jpg",
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
    "tag": "PACMAN, PBA & DOTA 1",
    "thenTitle": "Manny Pacquiao, PBA Finals & Global Pinoy Pride",
    "thenBlurb": "Pacquiao fights that emptied streets and lowered crime, packed PBA and NBA finals, analog CRT broadcasts in plazas, and global Pinoy icons.",
    "image": "./images/manny.jpg",
    "alt": "Manny Pacquiao in the ring during a 2000s world title bout",
    "then": "Manny Pacquiao's rise made boxing a national event (widely reported to empty streets and coincide with lower crime), PBA and NBA finals filled arenas and boosted TV ratings, millions watched via analog TV/radio and CRT screens in public gyms and plazas, and Charice and Arnel Pineda (Journey) won global recognition alongside LAN cafe gaming.",
    "impact": "Watching Pacquiao fights and PBA finals together built a collective, TV-centered habit of rallying behind Filipino athletes and talents on the world stage.",
    "intro": "Manny Pacquiao's rise made boxing a national event in 2000–2010: his fights were widely reported to empty the streets and even coincide with lower crime, while PBA and NBA finals filled arenas and boosted TV ratings. Millions of Filipinos watched together on analog CRT TVs, in public gyms and plazas, and via radio commentary to cheer on Pinoy icons.",
    "facts": [
      "Collective, TV-centered fandom: analog TV and radio sports broadcasts—with CRT screens in public gyms and plazas—united millions of Filipinos cheering on Manny Pacquiao and PBA/NBA finals.",
      "Global recognition of Pinoy talent: Pacquiao conquered world boxing divisions while Filipino vocalists like Charice and Arnel Pineda (frontman of Journey) earned international acclaim.",
      "Neighborhood LAN & console gaming: computer shops packed with CRT monitors popularized multiplayer games (Ragnarok Online, DotA 1, Counter-Strike, Special Force) alongside PS2, PSP, and Game Boy Advance consoles."
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
        "note": "Pacquiao in world boxing alongside Charice and Arnel Pineda (Journey) in music."
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
        "src": "./images/computer-shop.jpg",
        "caption": "Neighborhood computer shop packed with LAN gamers",
        "year": "2000–2010"
      },
      {
        "src": "./images/internet-cafe.jpg",
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
        "title": "Gadgets in the Philippines during the 2000s",
        "url": "https://pinoyy2khub.wordpress.com/2024/11/23/gadgets-in-the-philippines-during-the-2000/",
        "publisher": "Pinoy Y2K Culture Hub",
        "year": "2024",
        "era": "then",
        "note": "Evolution of TVs, PCs, gaming consoles (PS2, PSP, GBA), and mobile phones."
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
        "title": "Digital Pinoy: Philippine Pop Culture 2000-2010",
        "url": "https://prezi.com/@miriip3/12digital-pinoy-philippine-pop-culture-20002010/",
        "publisher": "Prezi (H. G. O.)",
        "year": "2025",
        "era": "then",
        "note": "Overview of 2000-2010 Philippine digital and gaming culture."
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

// Circa-2007 Friendster Profiles for Meet the Curators
const friendsterProfiles = [
  {
    "name": "Ysha Rose Beatrice Hubilla",
    "short": "Bea",
    "initials": "BH",
    "handle": "★彡 BeA_Coups_2002 彡★",
    "avatar": "./images/keep-calm.jpg",
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
    "avatar": "./images/domo.jpg",
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
