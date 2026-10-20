import { IListing } from "./models/Listing";

export interface SeedItem {
  title: string;
  description: string;
  image: { url: string; filename: string };
  gallery: string[];
  price: number;
  category: IListing["category"];
  location: string;
  country: string;
  amenities: string[];
  host: {
    name: string;
    isSuperhost: boolean;
    avatar: string;
  };
  reviews: Array<{
    comment: string;
    rating: number;
    author: { name: string; avatar: string };
  }>;
}

export const INITIAL_LISTINGS: SeedItem[] = [
  {
    title: "Modern Glass Villa with Infinity Ocean View",
    description: "Experience luxury living in this architectural masterpiece overlooking the Pacific Ocean. Features floor-to-ceiling glass walls, an heated infinity pool, private sauna, and modern Italian furniture. Perfectly situated just 5 minutes from Malibu beaches.",
    image: {
      url: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80",
      filename: "villa_malibu",
    },
    gallery: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80"
    ],
    price: 650,
    category: "Trending",
    location: "Malibu, California",
    country: "United States",
    amenities: ["Infinity Pool", "Wifi", "Chef Kitchen", "Hot tub", "Ocean View", "Free parking", "EV Charger"],
    host: {
      name: "Elena Rostova",
      isSuperhost: true,
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80"
    },
    reviews: [
      { comment: "Absolutely breathtaking views and top notch luxury! We watched whales right from the living room.", rating: 5, author: { name: "Marcus Brody", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80" } },
      { comment: "Host was incredibly attentive. The heated pool at night under the stars is unforgettable.", rating: 5, author: { name: "Sarah Jenkins", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80" } }
    ]
  },
  {
    title: "Luxury Loft in Heart of Paris Near Eiffel Tower",
    description: "Sun-drenched Haussmannian apartment featuring original crown moldings, chevron hardwood floors, marble fireplace, and a romantic balcony overlooking classic Parisian streetscapes. Walking distance to Champ de Mars and fine dining.",
    image: {
      url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
      filename: "paris_loft",
    },
    gallery: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=80"
    ],
    price: 320,
    category: "Iconic Cities",
    location: "Paris, Île-de-France",
    country: "France",
    amenities: ["Balcony", "High-speed Wifi", "Nespresso Machine", "Elevator", "Air conditioning", "Washer"],
    host: {
      name: "Antoine Laurent",
      isSuperhost: true,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
    },
    reviews: [
      { comment: "Dream Parisian stay! Morning coffee on the balcony with bakery fresh croissants was magical.", rating: 5, author: { name: "Emily Watson", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80" } }
    ]
  },
  {
    title: "Secluded Cedar Treehouse with Hot Tub & Creek",
    description: "Nestled 30 feet high in ancient Douglas fir trees, this eco-luxury treehouse features a cedar wood hot tub, suspended outdoor hammock net, wood-burning stove, and floor-to-ceiling forest windows.",
    image: {
      url: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80",
      filename: "treehouse_oregon",
    },
    gallery: [
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80"
    ],
    price: 275,
    category: "Treehouses",
    location: "Portland, Oregon",
    country: "United States",
    amenities: ["Wood-fired Hot Tub", "Fireplace", "Outdoor Shower", "Star-gazing skylight", "Hiking trails"],
    host: {
      name: "Jasper Thorne",
      isSuperhost: true,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80"
    },
    reviews: [
      { comment: "Pure magic. Waking up in the tree canopy listened to rain on the roof was peace redefined.", rating: 5, author: { name: "Liam Miller", avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&q=80" } }
    ]
  },
  {
    title: "16th-Century Highland Castle Estate",
    description: "Live like royalty in a meticulously restored Scottish castle surrounded by 50 acres of private gardens and loch access. Includes grand dining hall, antique furnishings, stone fireplaces, and billiard room.",
    image: {
      url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?auto=format&fit=crop&w=1200&q=80",
      filename: "scottish_castle",
    },
    gallery: [
      "https://images.unsplash.com/photo-1541971875076-8f970d573be6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80"
    ],
    price: 890,
    category: "Castles",
    location: "Inverness, Scottish Highlands",
    country: "United Kingdom",
    amenities: ["Grand Fireplace", "Private Grounds", "Billiard Room", "Whisky Tasting Bar", "Wifi", "Breakfast Included"],
    host: {
      name: "Lord Alistair MacLeod",
      isSuperhost: true,
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80"
    },
    reviews: [
      { comment: "Unbelievable experience! The history, hospitality, and serene Highland scenery were spectacular.", rating: 5, author: { name: "Charlotte Roy", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80" } }
    ]
  },
  {
    title: "Lakefront A-Frame Cabin with Kayaks",
    description: "Cozy timber A-Frame on the edge of Lake Louise. Features private dock, complimentary kayaks, outdoor firepit, floor-to-ceiling lakefront glass, and cozy wood stove for cool mountain evenings.",
    image: {
      url: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200&q=80",
      filename: "aframe_lake",
    },
    gallery: [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
    ],
    price: 240,
    category: "Lakefront",
    location: "Banff, Alberta",
    country: "Canada",
    amenities: ["Private Dock", "Kayaks Included", "Firepit", "Wood Stove", "Lake View", "BBQ Grill"],
    host: {
      name: "Hannah Vance",
      isSuperhost: true,
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80"
    },
    reviews: [
      { comment: "Paddling out on the clear lake at sunrise was the highlight of our trip. 10/10!", rating: 5, author: { name: "David Chen", avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=150&q=80" } }
    ]
  },
  {
    title: "Santorini Cliffside Cave Villa with Heated Pool",
    description: "Iconic whitewashed Cycladic cave house carved into the caldera cliffs of Oia. Sunbathe on your private terrace overlooking the Aegean Sea, and dip into your private cliffside plunge pool.",
    image: {
      url: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1200&q=80",
      filename: "santorini_villa",
    },
    gallery: [
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?auto=format&fit=crop&w=800&q=80"
    ],
    price: 520,
    category: "Amazing Pools",
    location: "Oia, Santorini",
    country: "Greece",
    amenities: ["Heated Plunge Pool", "Caldera Sunset View", "Daily Breakfast", "Air conditioning", "Wifi"],
    host: {
      name: "Nikolai Doukas",
      isSuperhost: true,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
    },
    reviews: [
      { comment: "The sunset from our private terrace beat every crowded public spot in Oia!", rating: 5, author: { name: "Jessica Alba", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80" } }
    ]
  },
  {
    title: "Nordic Glass Igloo for Northern Lights",
    description: "Sleep beneath the Arctic sky in a heated glass-roofed dome dome surrounded by snow-covered pine forest. Includes private sauna, aurora alarm system, and reindeer safari opportunities.",
    image: {
      url: "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=1200&q=80",
      filename: "arctic_igloo",
    },
    gallery: [
      "https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1491557345352-5929e343eb89?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80"
    ],
    price: 450,
    category: "Arctic",
    location: "Rovaniemi, Lapland",
    country: "Finland",
    amenities: ["Glass Roof", "Private Finnish Sauna", "Aurora Alarm", "Floor Heating", "Thermal Suit Rental"],
    host: {
      name: "Mikael Lindqvist",
      isSuperhost: true,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80"
    },
    reviews: [
      { comment: "We saw green & purple Northern Lights dancing above us while warm in bed. Unsurpassed bucket list moment!", rating: 5, author: { name: "Sophia Martinez", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80" } }
    ]
  },
  {
    title: "Organic Lavender Farmhouse & Vineyard",
    description: "Charming stone farmhouse nestled amidst rolling lavender fields and private olive groves. Taste organic estate wines, pick fresh figs from the garden, and relax by the stone swimming pool.",
    image: {
      url: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
      filename: "farmhouse_provence",
    },
    gallery: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80"
    ],
    price: 280,
    category: "Farms",
    location: "Gordes, Provence",
    country: "France",
    amenities: ["Wine Tasting", "Pool", "Organic Garden", "Pet Friendly", "Kitchen", "Fireplace"],
    host: {
      name: "Camille Moreau",
      isSuperhost: true,
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80"
    },
    reviews: [
      { comment: "The smell of fresh lavender in summer breezes is intoxicating. Heavenly estate!", rating: 5, author: { name: "Oliver Smith", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80" } }
    ]
  },
  {
    title: "Glamping Safari Dome with Private Stargazing Deck",
    description: "Luxury geodesic dome retreat situated on a private ridge in Joshua Tree National Park. Complete with king plush bed, climate control, outdoor rainfall shower, and telescope for night sky gazing.",
    image: {
      url: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1200&q=80",
      filename: "glamping_dome",
    },
    gallery: [
      "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80"
    ],
    price: 195,
    category: "Camping",
    location: "Joshua Tree, California",
    country: "United States",
    amenities: ["Stargazing Telescope", "Outdoor Rainfall Shower", "Firepit", "AC & Heating", "Wifi"],
    host: {
      name: "Skye Wilder",
      isSuperhost: true,
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
    },
    reviews: [
      { comment: "Milky way photography right outside our dome! Super comfortable bed and pristine location.", rating: 5, author: { name: "Nathan Drake", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80" } }
    ]
  },
  {
    title: "Kyoto Machiya Townhouse with Zen Garden",
    description: "Authentic 100-year-old wooden Machiya renovated with modern Japanese luxury. Features tatami tea room, cypress hinoki wood soaking tub, and a private moss & stone Zen courtyard garden.",
    image: {
      url: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80",
      filename: "kyoto_machiya",
    },
    gallery: [
      "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1492571350019-22de08371fd3?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1528164344705-47542687990d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=800&q=80"
    ],
    price: 360,
    category: "Rooms",
    location: "Kyoto, Kansai",
    country: "Japan",
    amenities: ["Zen Courtyard", "Hinoki Wood Bath", "Tea Ceremony Set", "Futon & Western Beds", "High-speed Wifi"],
    host: {
      name: "Kenji Takahashi",
      isSuperhost: true,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
    },
    reviews: [
      { comment: "Soaking in the aroma of cypress wood after walking through Kyoto shrines was unforgettable.", rating: 5, author: { name: "Amelia Earhart", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80" } }
    ]
  },
  {
    title: "Chalet with Private Ski-in/Ski-out Access",
    description: "Alpine luxury chalet situated directly on the Zermatt pistes. Marvel at panoramic Matterhorn mountain views while unwinding in your outdoor jacuzzi or beside the floor-to-ceiling stone fireplace.",
    image: {
      url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
      filename: "zermatt_chalet",
    },
    gallery: [
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
    ],
    price: 780,
    category: "Trending",
    location: "Zermatt, Valais",
    country: "Switzerland",
    amenities: ["Ski-in/Ski-out", "Outdoor Jacuzzi", "Matterhorn View", "Sauna", "Ski Locker & Boot Warmers"],
    host: {
      name: "Heidi Sommer",
      isSuperhost: true,
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80"
    },
    reviews: [
      { comment: "Direct ski access to the slopes! The view of the Matterhorn from the hot tub is once in a lifetime.", rating: 5, author: { name: "Benjamin Vance", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80" } }
    ]
  },
  {
    title: "Game Lodge Villa with Private Cinema & Bowling Alley",
    description: "Ultimate entertainment estate featuring private 12-seat Dolby Atmos movie theater, 2-lane bowling alley, arcade hall, resort pool with water slide, and indoor basketball court.",
    image: {
      url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
      filename: "game_villa",
    },
    gallery: [
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80"
    ],
    price: 950,
    category: "Play",
    location: "Orlando, Florida",
    country: "United States",
    amenities: ["Private Cinema", "Bowling Alley", "Arcade Games", "Resort Pool & Slide", "Basketball Court"],
    host: {
      name: "Marcus Vance",
      isSuperhost: true,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80"
    },
    reviews: [
      { comment: "Our kids and entire family were blown away! We barely left the house all week.", rating: 5, author: { name: "Kelly Johnson", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80" } }
    ]
  }
];
