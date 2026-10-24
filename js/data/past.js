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
    "badge": "Nokia 3310, Friendster & Cafes",
    "tag": "SMS, FRIENDSTER & HANGOUTS",
    "thenTitle": "The Texting Capital & Early Social Networks",
    "thenBlurb": "Affordable SMS, Friendster & Multiply profiles, neighborhood internet cafes, coffee shop culture, and OFW video calls.",
    "image": "./images/nokia.png",
    "alt": "Nokia Mobile Phones",
    "then": "Start of social media in the PH (Friendster, MySpace, Multiply, Facebook, YouTube, Twitter), the texting boom that made the PH the 'Texting Capital of the World', audience-driven SMS voting on reality shows (StarStruck, Star Circle Quest, Pinoy Big Brother), and Skype/Yahoo Messenger video calls with OFW families.",
    "impact": "Texting culture and early social networks (Friendster, Multiply, Facebook) built the habit of staying constantly connected across separate devices and places.",
    "intro": "Communication evolved dramatically during the early 2000s as mobile phones became affordable and accessible, dubbing the Philippines the 'Texting Capital of the World'. Filipinos connected online via neighborhood computer shops and internet cafes to build digital personas on Friendster, MySpace, Multiply, and Facebook, while using Skype and Yahoo Messenger to stay close to Overseas Filipino Worker (OFW) family members. Offline, coffee chains (Starbucks, Bo's Coffee, The Coffee Bean & Tea Leaf, Seattle's Best), public leisure parks (Zoobic Safari, Ocean Adventure, Manila Ocean Park), and modern hospitals (The Medical City in Ortigas, St. Luke's Medical Center-Global City) reshaped social life.",
    "facts": [
      "Start of social media in the PH: Friendster, MySpace, Multiply, and Facebook—plus YouTube, Twitter, and Tumblr—redefined online interaction as computer shops and internet cafes brought Filipinos online.",
      "Everyday media anticipation revolved around interactive SMS voting on talent and reality shows (StarStruck, Star Circle Quest, Pinoy Big Brother), tuning into MYX's top 10 hits, and texting song requests or love-advice dedications to FM radio stations.",
      "Filipinos stayed connected across separate channels—texting on mobile phones, updating desktop social media at internet cafes, and video-chatting with OFWs on Skype and Yahoo Messenger—while navigating major health scares like the 2003 SARS outbreak and 2009 swine flu (H1N1) pandemic."
    ],
    "artifacts": [
      {
        "emoji": "📱",
        "name": "Nokia & SMS Voting",
        "note": "Made the PH the Texting Capital of the World and powered reality TV voting."
      },
      {
        "emoji": "👥",
        "name": "Friendster & Multiply",
        "note": "Early social networks where Filipinos built digital personas and online identities."
      },
      {
        "emoji": "💬",
        "name": "Skype & Yahoo! Messenger",
        "note": "Let OFWs video-chat and stay in touch with family members abroad."
      },
      {
        "emoji": "☕",
        "name": "Coffee Shops & Leisure Parks",
        "note": "Starbucks, Bo's Coffee, and Manila Ocean Park became go-to social hubs."
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
        "note": "Texting culture, low cost versus the internet, and 'Generation Txt'."
      }
    ]
  },
  "economic": {
    "badge": "BPO Boom & Mega-Malls",
    "tag": "CALL CENTERS & MALL CULTURE",
    "thenTitle": "The BPO Boom, Mega-Malls & 24/7 Economy",
    "thenBlurb": "Declared the Call Center Capital of the World in 2010, overnight graveyard shifts, and iconic lifestyle malls.",
    "image": "./images/bpo.png",
    "alt": "Urban Business District",
    "then": "Boom of the BPO industry (PH declared Call Center Capital of the World in 2010), malls like SM MOA, Bonifacio High Street, Eastwood, Gateway, and TriNoma as leisure hubs, entertainment earned through TV ratings, physical albums, and concert tickets, and OFW remittances + overnight BPO shifts powering a 24/7 night economy.",
    "impact": "The BPO boom and OFW remittances tied the place-based Philippine economy to global clients and round-the-clock work.",
    "intro": "The rapid boom of the Business Process Outsourcing (BPO) industry improved employment and economic growth, culminating in the Philippines being declared the 'Call Center Capital of the World' in 2010. Because agents served Western clients across time zones, thousands worked overnight graveyard shifts, giving rise to a bustling 24/7 night economy where fast-food chains, convenience stores, and public transit operated around the clock in IT cyberparks. Meanwhile, prominent shopping malls like SM Mall of Asia (MOA), Bonifacio High Street, Eastwood Mall, Gateway Mall, and TriNoma turned into primary leisure and spending destinations.",
    "facts": [
      "A place-based economy with global links: work and spending happened in physical spaces (BPO offices, IT cyberparks, malls, record stores, concert venues), while BPO clients and OFW remittances connected the Philippine economy to the world.",
      "Entertainment earned revenue through television ratings, physical CD/DVD album sales, and live concert ticket sales, alongside a hardware shift from cassette tapes to burned CDs, MP3 players/iPods, and CRT TVs to LCD and plasma screens.",
      "Prominent malls built in this decade—including SM Mall of Asia (MOA), Bonifacio High Street, Eastwood Mall, Gateway Mall, and TriNoma—shaped how Filipinos developed a mall culture centered on leisurely hanging out."
    ],
    "artifacts": [
      {
        "emoji": "🎧",
        "name": "BPO Graveyard Shift",
        "note": "Overnight call center agents serving Western clients powered a 24/7 night economy."
      },
      {
        "emoji": "🏬",
        "name": "SM MOA & BGC High Street",
        "note": "Mega-malls and IT cyberparks became the primary hubs for spending and leisure."
      },
      {
        "emoji": "💿",
        "name": "Physical Albums & Tickets",
        "note": "Entertainment earned through TV ratings, physical album sales, and concert tickets."
      },
      {
        "emoji": "💸",
        "name": "OFW Remittances",
        "note": "Global remittances linked Filipino households to the world economy."
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
    "image": "./images/people power.png",
    "alt": "Civic Protests",
    "then": "Estrada impeachment trial, EDSA II SMS text chains and early political blogs, the 'Hello Garci' wiretapping controversy, primetime investigative news magazines and political satire shows, and the 2009 Maguindanao massacre drawing global attention to press freedom.",
    "impact": "SMS mobilization (EDSA II) and public outrage over scandals like Hello Garci set a lasting pattern of citizens organizing through communication technology.",
    "intro": "Filipinos were no strangers to political controversy in the 2000s, as major events deeply shocked the nation and tested Philippine democracy. During the impeachment trial of former President Joseph Estrada in 2001, SMS text chains and group messages ('Go 2 EDSA, wear black') gathered massive crowds for political action alongside early political blogs. Later in the decade, the 2005 'Hello Garci' wiretapping scandal and the tragic 2009 Maguindanao massacre—recognized as the single deadliest attack on journalists in history—became defining moments that drew international attention to press freedom in the Philippines.",
    "facts": [
      "Text-driven mass mobilization: scandals and civic protests were spread by TV news and SMS text chains that gathered crowds at EDSA II, complemented by early political blogs.",
      "Primetime investigative news magazines, political satire programs, and fiery TV talk-show confrontations served as key platforms for public accountability.",
      "The 2009 Maguindanao (Ampatuan) massacre, the deadliest attack on journalists in history, shocked the nation and drew global attention to press freedom in the Philippines."
    ],
    "artifacts": [
      {
        "emoji": "📩",
        "name": "EDSA II SMS Chains",
        "note": "Group text messages and chains that mobilized crowds for political action."
      },
      {
        "emoji": "💿",
        "name": "'Hello Garci' Wiretap Tapes",
        "note": "The 2005 electoral wiretapping controversy that tested Philippine democracy."
      },
      {
        "emoji": "📺",
        "name": "Investigative TV & Satire",
        "note": "Primetime investigative news magazines and political satire shows."
      },
      {
        "emoji": "📰",
        "name": "Press Freedom Watch",
        "note": "Global outrage and solidarity following the 2009 Maguindanao massacre."
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
    "thenBlurb": "OPM bands, SexBomb craze, fantaseryes, 'Bebot' makeup, Emo/Jejemon styles, Hollywood blockbusters, and the first Hallyu wave.",
    "image": "./images/opm albums.png",
    "alt": "Audio & Stage Music",
    "then": "Golden era of OPM bands (Parokya ni Edgar, Sponge Cola, MYMP, Nina), the SexBomb Girls craze, CGI fantaseryes (Mulawin, Encantadia, Darna), Emo/Jejemon fashion and the 'Bebot' makeup look, burned MP3 CDs/iPods/Friendster music widgets, Hollywood franchises (MCU's Iron Man, Harry Potter), and the first Hallyu wave (Meteor Garden, early K-dramas).",
    "impact": "Fantaseryes, OPM bands, the SexBomb dance craze, and the first Hallyu wave blended foreign influences with classic Pinoy flair to shape modern streaming and P-Pop culture.",
    "intro": "Original Pilipino Music (OPM) experienced a golden era in the 2000s with icons like Parokya ni Edgar, Sponge Cola, MYMP, Nina, and the SexBomb Girls ('The Spageti Song', 'Bakit Papa?'), while Charice Pempengco (Jake Zyrus) and Arnel Pineda (Journey) earned global acclaim. Philippine television pioneered CGI fantaseryes (Mulawin, Encantadia, Captain Barbell, Darna) alongside hit dramas (MariMar, May Bukas Pa) and showbiz talk shows (Startalk, The Buzz, Showbiz News Ngayon). Self-expression flourished through Y2K low-rise jeans, Emo fringes, Jejemon subculture, Havaianas/Converse/Vans footwear, the Filipina 'Bebot' makeup look, celebrity fitness magazines (Angel Locsin, Marian Rivera, Piolo Pascual, Derek Ramsay), and childhood snacks (E-Aji Dip Snax, Jungle Juice, Nooda Crunch)—all while absorbing MTV Western pop, Hollywood franchises (Iron Man, Transformers, Twilight, Lord of the Rings, Harry Potter), and the first Hallyu Wave (Meteor Garden, early K-dramas).",
    "facts": [
      "Music and media transitioned from cassette tapes to custom burned MP3 CDs, Apple iPods, Sony Ericsson/Nokia microSD music phones, and music player widgets embedded on Friendster and Multiply profiles.",
      "Fashion and beauty blended Western Y2K and East Asian trends (Meteor Garden's F4 and early K-dramas) with the local 'Bebot' makeup look (thin arched eyebrows, glossy lips, frosted eyeshadow), rockstar spikes, rebonded hair, Emo fringes, and Jejemon streetwear.",
      "TV, radio, and physical media shaped pop culture: fantaseryes (Mulawin, Encantadia), showbiz talk shows (The Buzz, Startalk), interactive SMS radio love-advice shows, Hollywood blockbusters (Iron Man in 2008), and dubbed Korean dramas captivated Filipino households."
    ],
    "artifacts": [
      {
        "emoji": "💿",
        "name": "Burned CDs, iPods & Widgets",
        "note": "Custom MP3 CDs, iPods, MP3 phones, and Friendster/Multiply profile music players."
      },
      {
        "emoji": "🎸",
        "name": "OPM Bands & SexBomb",
        "note": "Parokya ni Edgar, Sponge Cola, MYMP, Nina, and iconic SexBomb Girls dance hits."
      },
      {
        "emoji": "💄",
        "name": "'Bebot' Look & Emo/Jejemon",
        "note": "Thin arched brows, frosted eyeshadow, Y2K low-rise denim, Emo fringes, and Jejemon caps."
      },
      {
        "emoji": "📺",
        "name": "Fantaseryes & 1st Hallyu Wave",
        "note": "Mulawin and Encantadia alongside Meteor Garden (F4) and dubbed early K-dramas."
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
    "image": "./images/ondoy.png",
    "alt": "Storm & Heavy Rain",
    "then": "Typhoon Ondoy (2009) caused deadly flooding in Metro Manila alongside the 2003 SARS outbreak and 2009 swine flu (H1N1) scare; TV/radio weather bulletins were supplemented by stranded residents and volunteers using Facebook, Twitter, and SMS to coordinate rescue.",
    "impact": "Ondoy and the SARS/H1N1 scares raised awareness of disaster and health preparedness, while online crowdsourcing during Ondoy foreshadowed today's real-time alerts.",
    "intro": "From 2000 through 2010, the Philippines experienced numerous destructive typhoons, culminating in Typhoon Ondoy in September 2009, which caused deadly flooding across Metro Manila and left the nation grieving widespread damage. While traditional warnings relied on TV weather forecasts, radio bulletins, and environmental documentaries, stranded residents and volunteers during Ondoy turned to SMS text messages, Facebook, and Twitter to ask for help and coordinate rescue—pioneering digital bayanihan. The decade was also marked by border-crossing health scares, notably the 2003 SARS outbreak and the 2009 swine flu (H1N1) pandemic.",
    "facts": [
      "Broadcast-based warnings (TV and radio bulletins, environmental documentaries, and public campaigns) were the primary channels for storm alerts, supplemented by early social media crowdsourcing on Facebook, Twitter, and SMS during Typhoon Ondoy (2009).",
      "More than a month's worth of rain fell on Metro Manila during Typhoon Ondoy, prompting volunteers to compile online rescue maps and relief drives.",
      "Growing awareness of global warming and climate change emerged alongside the 2003 SARS outbreak and 2009 H1N1 swine flu pandemic, showing how environmental and health threats cross borders."
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
        "note": "Traditional broadcast storm signals and public disaster campaigns."
      },
      {
        "emoji": "😷",
        "name": "SARS (2003) & H1N1 (2009) Alerts",
        "note": "Major contagious health scares that heightened public health vigilance."
      },
      {
        "emoji": "🛶",
        "name": "Bayanihan Relief Drives",
        "note": "Collective grief and community-organized relief packs for flood victims."
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
    "tag": "PACMAN, PBA & DOTA 1",
    "thenTitle": "Manny Pacquiao, PBA Finals & LAN Cafe Gaming",
    "thenBlurb": "Pacquiao fights that emptied streets, sold-out PBA/NBA finals, neighborhood computer shops, and PS2/PSP consoles.",
    "image": "./images/computer shop.png",
    "alt": "Esports Gaming Room",
    "then": "Manny Pacquiao's rise made boxing a national event (emptying streets and dropping crime rates to nearly zero), PBA and NBA finals filled arenas and boosted analog CRT TV and radio ratings, computer shops popularized LAN/online multiplayer games (Ragnarok Online, DotA, Counter-Strike, Special Force, GTA), and home/portable consoles boomed (PS2, Xbox 360, PS3, Game Boy Advance, PSP).",
    "impact": "Watching Pacquiao fights and PBA finals together—and competing for hours in neighborhood computer shops—built a collective fandom and gaming culture.",
    "intro": "Filipinos have always been passionate about sports and gaming. In the 2000s, Manny Pacquiao's world boxing victories turned his bouts into national events—millions watched together on analog CRT TVs, in public gyms and plazas, or via radio commentary, emptying the streets and dropping the national crime rate to nearly zero. Basketball remained the national obsession, with PBA and NBA finals resulting in sold-out arenas and soaring television ratings. At the same time, neighborhood computer shops and internet cafes fueled a massive multiplayer gaming boom with Ragnarok Online, DotA, Counter-Strike, Special Force, and Grand Theft Auto, alongside home and handheld consoles like the PlayStation 2, Xbox 360, PlayStation 3, Game Boy Advance, and Sony PSP.",
    "facts": [
      "Collective, TV-centered sports fandom: millions of Filipinos watched Manny Pacquiao's fights and PBA/NBA finals together on analog TVs, in public gyms and plazas, and via radio commentary, while Filipino talents like Pacquiao, Charice, and Arnel Pineda earned global recognition.",
      "Computer shops and internet cafes became the heart of Filipino multiplayer gaming, where players spent hours competing in Ragnarok Online, DotA, Counter-Strike, Special Force, and Grand Theft Auto.",
      "Between 2000 and 2010, gaming hardware leaped forward with Sony and Microsoft's PlayStation 2, Xbox 360, and PlayStation 3, while portable gaming thrived everywhere from living rooms to school hallways with the Game Boy Advance and PlayStation Portable (PSP)."
    ],
    "artifacts": [
      {
        "emoji": "🥊",
        "name": "Pacquiao Fight Broadcasts",
        "note": "Watched in plazas, gyms, and living rooms—emptying streets across the nation."
      },
      {
        "emoji": "🖥️",
        "name": "Internet Cafe LAN PCs",
        "note": "Neighborhood computer shops running Ragnarok Online, DotA, Counter-Strike, and Special Force."
      },
      {
        "emoji": "🎮",
        "name": "PS2, Xbox 360, GBA & PSP",
        "note": "Home consoles and handhelds that brought gaming from living rooms to school hallways."
      },
      {
        "emoji": "🏀",
        "name": "PBA & NBA Finals",
        "note": "Basketball mania that packed arenas and drove soaring television ratings."
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
        "note": "Overview of 2000–2010 Philippine digital and gaming culture."
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
