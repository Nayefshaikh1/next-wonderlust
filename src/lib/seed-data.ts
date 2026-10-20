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
  coordinates?: {
    lat: number;
    lng: number;
  };
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
    "title": "Modern Glass Villa with Infinity Ocean View",
    "description": "Experience unforgettable luxury at this premier trending stay located in Oia, Santorini. Features curated interior aesthetics, five-star guest amenities, and exceptional natural surroundings for the perfect getaway.",
    "image": {
      "url": "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80",
      "filename": "listing_1"
    },
    "gallery": [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80"
    ],
    "price": 190,
    "category": "Trending",
    "location": "Oia, Santorini",
    "country": "Greece",
    "coordinates": {
      "lat": 36.4318,
      "lng": 25.3753
    },
    "amenities": [
      "Wifi",
      "Air conditioning",
      "Chef Kitchen",
      "Free parking",
      "Infinity Pool",
      "Hot tub",
      "Ocean View"
    ],
    "host": {
      "name": "Jean-Pierre Laurent",
      "isSuperhost": false,
      "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
    },
    "reviews": [
      {
        "comment": "Spotlessly clean, flawless design, and warm hospitality. 10/10 recommendation!",
        "rating": 5,
        "author": {
          "name": "Sarah J.",
          "avatar": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
        }
      },
      {
        "comment": "Incredible attention to detail. The sunset from the terrace was the highlight of our vacation.",
        "rating": 4.9,
        "author": {
          "name": "David K.",
          "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
        }
      }
    ]
  },
  {
    "title": "Architectural Marvel with Heated Horizon Spa",
    "description": "Experience unforgettable luxury at this premier trending stay located in Ubud, Bali. Features curated interior aesthetics, five-star guest amenities, and exceptional natural surroundings for the perfect getaway.",
    "image": {
      "url": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
      "filename": "listing_2"
    },
    "gallery": [
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80"
    ],
    "price": 230,
    "category": "Trending",
    "location": "Ubud, Bali",
    "country": "Indonesia",
    "coordinates": {
      "lat": -8.5219,
      "lng": 115.3075
    },
    "amenities": [
      "Wifi",
      "Air conditioning",
      "Chef Kitchen",
      "Free parking",
      "Infinity Pool",
      "Hot tub",
      "Ocean View"
    ],
    "host": {
      "name": "Kenji Sato",
      "isSuperhost": true,
      "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
    },
    "reviews": [
      {
        "comment": "Incredible attention to detail. The sunset from the terrace was the highlight of our vacation.",
        "rating": 4.9,
        "author": {
          "name": "David K.",
          "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
        }
      },
      {
        "comment": "Exceeded all expectations! The photos do not do this stunning property justice.",
        "rating": 5,
        "author": {
          "name": "Emma W.",
          "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
        }
      }
    ]
  },
  {
    "title": "Contemporary Minimalist Oasis in Hills",
    "description": "Experience unforgettable luxury at this premier trending stay located in Gordes, Provence. Features curated interior aesthetics, five-star guest amenities, and exceptional natural surroundings for the perfect getaway.",
    "image": {
      "url": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "filename": "listing_3"
    },
    "gallery": [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&w=800&q=80"
    ],
    "price": 280,
    "category": "Trending",
    "location": "Gordes, Provence",
    "country": "France",
    "coordinates": {
      "lat": 43.9114,
      "lng": 5.1853
    },
    "amenities": [
      "Wifi",
      "Air conditioning",
      "Chef Kitchen",
      "Free parking",
      "Infinity Pool",
      "Hot tub",
      "Ocean View"
    ],
    "host": {
      "name": "Sophie Van Dijk",
      "isSuperhost": false,
      "avatar": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80"
    },
    "reviews": [
      {
        "comment": "Exceeded all expectations! The photos do not do this stunning property justice.",
        "rating": 5,
        "author": {
          "name": "Emma W.",
          "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
        }
      },
      {
        "comment": "A sanctuary of peace and modern architectural luxury. Waking up to these views is unforgettable.",
        "rating": 5,
        "author": {
          "name": "Marcus B.",
          "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
        }
      }
    ]
  },
  {
    "title": "Skyline View Luxury Penthouse Suite",
    "description": "Experience unforgettable luxury at this premier trending stay located in Inverness, Scottish Highlands. Features curated interior aesthetics, five-star guest amenities, and exceptional natural surroundings for the perfect getaway.",
    "image": {
      "url": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
      "filename": "listing_4"
    },
    "gallery": [
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80"
    ],
    "price": 330,
    "category": "Trending",
    "location": "Inverness, Scottish Highlands",
    "country": "United Kingdom",
    "coordinates": {
      "lat": 57.4928,
      "lng": -4.1947
    },
    "amenities": [
      "Wifi",
      "Air conditioning",
      "Chef Kitchen",
      "Free parking",
      "Infinity Pool",
      "Hot tub",
      "Ocean View"
    ],
    "host": {
      "name": "Marcus Vance",
      "isSuperhost": true,
      "avatar": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80"
    },
    "reviews": [
      {
        "comment": "A sanctuary of peace and modern architectural luxury. Waking up to these views is unforgettable.",
        "rating": 5,
        "author": {
          "name": "Marcus B.",
          "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
        }
      },
      {
        "comment": "Spotlessly clean, flawless design, and warm hospitality. 10/10 recommendation!",
        "rating": 5,
        "author": {
          "name": "Sarah J.",
          "avatar": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
        }
      }
    ]
  },
  {
    "title": "Pacific Vista Villa with Private Helipad",
    "description": "Experience unforgettable luxury at this premier trending stay located in London, England. Features curated interior aesthetics, five-star guest amenities, and exceptional natural surroundings for the perfect getaway.",
    "image": {
      "url": "https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&w=1200&q=80",
      "filename": "listing_5"
    },
    "gallery": [
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
    ],
    "price": 380,
    "category": "Trending",
    "location": "London, England",
    "country": "United Kingdom",
    "coordinates": {
      "lat": 51.5374,
      "lng": -0.1578
    },
    "amenities": [
      "Wifi",
      "Air conditioning",
      "Chef Kitchen",
      "Free parking",
      "Infinity Pool",
      "Hot tub",
      "Ocean View"
    ],
    "host": {
      "name": "Heidi Sommer",
      "isSuperhost": false,
      "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
    },
    "reviews": [
      {
        "comment": "Spotlessly clean, flawless design, and warm hospitality. 10/10 recommendation!",
        "rating": 5,
        "author": {
          "name": "Sarah J.",
          "avatar": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
        }
      },
      {
        "comment": "Incredible attention to detail. The sunset from the terrace was the highlight of our vacation.",
        "rating": 4.9,
        "author": {
          "name": "David K.",
          "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
        }
      }
    ]
  },
  {
    "title": "Designer Coastal Sanctuary with Lap Pool",
    "description": "Experience unforgettable luxury at this premier trending stay located in Cape Town, Western Cape. Features curated interior aesthetics, five-star guest amenities, and exceptional natural surroundings for the perfect getaway.",
    "image": {
      "url": "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80",
      "filename": "listing_6"
    },
    "gallery": [
      "https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80"
    ],
    "price": 420,
    "category": "Trending",
    "location": "Cape Town, Western Cape",
    "country": "South Africa",
    "coordinates": {
      "lat": -33.8799,
      "lng": 18.4391
    },
    "amenities": [
      "Wifi",
      "Air conditioning",
      "Chef Kitchen",
      "Free parking",
      "Infinity Pool",
      "Hot tub",
      "Ocean View"
    ],
    "host": {
      "name": "Aria Thorne",
      "isSuperhost": true,
      "avatar": "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80"
    },
    "reviews": [
      {
        "comment": "Incredible attention to detail. The sunset from the terrace was the highlight of our vacation.",
        "rating": 4.9,
        "author": {
          "name": "David K.",
          "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
        }
      },
      {
        "comment": "Exceeded all expectations! The photos do not do this stunning property justice.",
        "rating": 5,
        "author": {
          "name": "Emma W.",
          "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
        }
      }
    ]
  },
  {
    "title": "Cliffside Sunset Residence with Private Beach Access",
    "description": "Experience unforgettable luxury at this premier trending stay located in Maui, Hawaii. Features curated interior aesthetics, five-star guest amenities, and exceptional natural surroundings for the perfect getaway.",
    "image": {
      "url": "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80",
      "filename": "listing_7"
    },
    "gallery": [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80"
    ],
    "price": 470,
    "category": "Trending",
    "location": "Maui, Hawaii",
    "country": "United States",
    "coordinates": {
      "lat": 20.7534,
      "lng": -156.3769
    },
    "amenities": [
      "Wifi",
      "Air conditioning",
      "Chef Kitchen",
      "Free parking",
      "Infinity Pool",
      "Hot tub",
      "Ocean View"
    ],
    "host": {
      "name": "Liam Sterling",
      "isSuperhost": false,
      "avatar": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80"
    },
    "reviews": [
      {
        "comment": "Exceeded all expectations! The photos do not do this stunning property justice.",
        "rating": 5,
        "author": {
          "name": "Emma W.",
          "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
        }
      },
      {
        "comment": "A sanctuary of peace and modern architectural luxury. Waking up to these views is unforgettable.",
        "rating": 5,
        "author": {
          "name": "Marcus B.",
          "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
        }
      }
    ]
  },
  {
    "title": "High-Desert Modernist Villa with Fire Lounge",
    "description": "Experience unforgettable luxury at this premier trending stay located in Sydney, New South Wales. Features curated interior aesthetics, five-star guest amenities, and exceptional natural surroundings for the perfect getaway.",
    "image": {
      "url": "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80",
      "filename": "listing_8"
    },
    "gallery": [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80"
    ],
    "price": 520,
    "category": "Trending",
    "location": "Sydney, New South Wales",
    "country": "Australia",
    "coordinates": {
      "lat": -33.8988,
      "lng": 151.2093
    },
    "amenities": [
      "Wifi",
      "Air conditioning",
      "Chef Kitchen",
      "Free parking",
      "Infinity Pool",
      "Hot tub",
      "Ocean View"
    ],
    "host": {
      "name": "Elena Rostova",
      "isSuperhost": true,
      "avatar": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80"
    },
    "reviews": [
      {
        "comment": "A sanctuary of peace and modern architectural luxury. Waking up to these views is unforgettable.",
        "rating": 5,
        "author": {
          "name": "Marcus B.",
          "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
        }
      },
      {
        "comment": "Spotlessly clean, flawless design, and warm hospitality. 10/10 recommendation!",
        "rating": 5,
        "author": {
          "name": "Sarah J.",
          "avatar": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
        }
      }
    ]
  },
  {
    "title": "Exclusive Oceanfront Retreat with Butler Service",
    "description": "Experience unforgettable luxury at this premier trending stay located in Kyoto, Kansai. Features curated interior aesthetics, five-star guest amenities, and exceptional natural surroundings for the perfect getaway.",
    "image": {
      "url": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
      "filename": "listing_9"
    },
    "gallery": [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80"
    ],
    "price": 560,
    "category": "Trending",
    "location": "Kyoto, Kansai",
    "country": "Japan",
    "coordinates": {
      "lat": 34.9966,
      "lng": 135.8131
    },
    "amenities": [
      "Wifi",
      "Air conditioning",
      "Chef Kitchen",
      "Free parking",
      "Infinity Pool",
      "Hot tub",
      "Ocean View"
    ],
    "host": {
      "name": "Jean-Pierre Laurent",
      "isSuperhost": false,
      "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
    },
    "reviews": [
      {
        "comment": "Spotlessly clean, flawless design, and warm hospitality. 10/10 recommendation!",
        "rating": 5,
        "author": {
          "name": "Sarah J.",
          "avatar": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
        }
      },
      {
        "comment": "Incredible attention to detail. The sunset from the terrace was the highlight of our vacation.",
        "rating": 4.9,
        "author": {
          "name": "David K.",
          "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
        }
      }
    ]
  },
  {
    "title": "Iconic Palm Grove Estate with Lagoon Pool",
    "description": "Experience unforgettable luxury at this premier trending stay located in Banff, Alberta. Features curated interior aesthetics, five-star guest amenities, and exceptional natural surroundings for the perfect getaway.",
    "image": {
      "url": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "filename": "listing_10"
    },
    "gallery": [
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80"
    ],
    "price": 610,
    "category": "Trending",
    "location": "Banff, Alberta",
    "country": "Canada",
    "coordinates": {
      "lat": 51.1784,
      "lng": -115.5858
    },
    "amenities": [
      "Wifi",
      "Air conditioning",
      "Chef Kitchen",
      "Free parking",
      "Infinity Pool",
      "Hot tub",
      "Ocean View"
    ],
    "host": {
      "name": "Kenji Sato",
      "isSuperhost": true,
      "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
    },
    "reviews": [
      {
        "comment": "Incredible attention to detail. The sunset from the terrace was the highlight of our vacation.",
        "rating": 4.9,
        "author": {
          "name": "David K.",
          "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
        }
      },
      {
        "comment": "Exceeded all expectations! The photos do not do this stunning property justice.",
        "rating": 5,
        "author": {
          "name": "Emma W.",
          "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
        }
      }
    ]
  },
  {
    "title": "Designer Suite with Sunlit Garden Balcony",
    "description": "Experience unforgettable luxury at this premier rooms stay located in Rovaniemi, Lapland. Features curated interior aesthetics, five-star guest amenities, and exceptional natural surroundings for the perfect getaway.",
    "image": {
      "url": "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80",
      "filename": "listing_11"
    },
    "gallery": [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&w=800&q=80"
    ],
    "price": 660,
    "category": "Rooms",
    "location": "Rovaniemi, Lapland",
    "country": "Finland",
    "coordinates": {
      "lat": 66.5189,
      "lng": 25.7594
    },
    "amenities": [
      "Wifi",
      "Air conditioning",
      "Chef Kitchen",
      "Free parking"
    ],
    "host": {
      "name": "Sophie Van Dijk",
      "isSuperhost": false,
      "avatar": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80"
    },
    "reviews": [
      {
        "comment": "Exceeded all expectations! The photos do not do this stunning property justice.",
        "rating": 5,
        "author": {
          "name": "Emma W.",
          "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
        }
      },
      {
        "comment": "A sanctuary of peace and modern architectural luxury. Waking up to these views is unforgettable.",
        "rating": 5,
        "author": {
          "name": "Marcus B.",
          "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
        }
      }
    ]
  },
  {
    "title": "Serene Minimalist Master Suite with Soaking Tub",
    "description": "Experience unforgettable luxury at this premier rooms stay located in Portland, Oregon. Features curated interior aesthetics, five-star guest amenities, and exceptional natural surroundings for the perfect getaway.",
    "image": {
      "url": "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
      "filename": "listing_12"
    },
    "gallery": [
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80"
    ],
    "price": 700,
    "category": "Rooms",
    "location": "Portland, Oregon",
    "country": "United States",
    "coordinates": {
      "lat": 45.5452,
      "lng": -122.7084
    },
    "amenities": [
      "Wifi",
      "Air conditioning",
      "Chef Kitchen",
      "Free parking"
    ],
    "host": {
      "name": "Marcus Vance",
      "isSuperhost": true,
      "avatar": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80"
    },
    "reviews": [
      {
        "comment": "A sanctuary of peace and modern architectural luxury. Waking up to these views is unforgettable.",
        "rating": 5,
        "author": {
          "name": "Marcus B.",
          "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
        }
      },
      {
        "comment": "Spotlessly clean, flawless design, and warm hospitality. 10/10 recommendation!",
        "rating": 5,
        "author": {
          "name": "Sarah J.",
          "avatar": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
        }
      }
    ]
  },
  {
    "title": "Historic Machiya Garden Guest Suite",
    "description": "Experience unforgettable luxury at this premier rooms stay located in New York, New York. Features curated interior aesthetics, five-star guest amenities, and exceptional natural surroundings for the perfect getaway.",
    "image": {
      "url": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
      "filename": "listing_13"
    },
    "gallery": [
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
    ],
    "price": 750,
    "category": "Rooms",
    "location": "New York, New York",
    "country": "United States",
    "coordinates": {
      "lat": 40.7578,
      "lng": -73.991
    },
    "amenities": [
      "Wifi",
      "Air conditioning",
      "Chef Kitchen",
      "Free parking"
    ],
    "host": {
      "name": "Heidi Sommer",
      "isSuperhost": false,
      "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
    },
    "reviews": [
      {
        "comment": "Spotlessly clean, flawless design, and warm hospitality. 10/10 recommendation!",
        "rating": 5,
        "author": {
          "name": "Sarah J.",
          "avatar": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
        }
      },
      {
        "comment": "Incredible attention to detail. The sunset from the terrace was the highlight of our vacation.",
        "rating": 4.9,
        "author": {
          "name": "David K.",
          "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
        }
      }
    ]
  },
  {
    "title": "Boutique Bedroom with Panoramic City Skyline",
    "description": "Experience unforgettable luxury at this premier rooms stay located in Queenstown, Otago. Features curated interior aesthetics, five-star guest amenities, and exceptional natural surroundings for the perfect getaway.",
    "image": {
      "url": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80",
      "filename": "listing_14"
    },
    "gallery": [
      "https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80"
    ],
    "price": 800,
    "category": "Rooms",
    "location": "Queenstown, Otago",
    "country": "New Zealand",
    "coordinates": {
      "lat": -45.0762,
      "lng": 168.6176
    },
    "amenities": [
      "Wifi",
      "Air conditioning",
      "Chef Kitchen",
      "Free parking"
    ],
    "host": {
      "name": "Aria Thorne",
      "isSuperhost": true,
      "avatar": "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80"
    },
    "reviews": [
      {
        "comment": "Incredible attention to detail. The sunset from the terrace was the highlight of our vacation.",
        "rating": 4.9,
        "author": {
          "name": "David K.",
          "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
        }
      },
      {
        "comment": "Exceeded all expectations! The photos do not do this stunning property justice.",
        "rating": 5,
        "author": {
          "name": "Emma W.",
          "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
        }
      }
    ]
  },
  {
    "title": "Artisan Studio with Private Courtyard",
    "description": "Experience unforgettable luxury at this premier rooms stay located in Reykjavik, Capital Region. Features curated interior aesthetics, five-star guest amenities, and exceptional natural surroundings for the perfect getaway.",
    "image": {
      "url": "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80",
      "filename": "listing_15"
    },
    "gallery": [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80"
    ],
    "price": 850,
    "category": "Rooms",
    "location": "Reykjavik, Capital Region",
    "country": "Iceland",
    "coordinates": {
      "lat": 64.1166,
      "lng": -21.9426
    },
    "amenities": [
      "Wifi",
      "Air conditioning",
      "Chef Kitchen",
      "Free parking"
    ],
    "host": {
      "name": "Liam Sterling",
      "isSuperhost": false,
      "avatar": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80"
    },
    "reviews": [
      {
        "comment": "Exceeded all expectations! The photos do not do this stunning property justice.",
        "rating": 5,
        "author": {
          "name": "Emma W.",
          "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
        }
      },
      {
        "comment": "A sanctuary of peace and modern architectural luxury. Waking up to these views is unforgettable.",
        "rating": 5,
        "author": {
          "name": "Marcus B.",
          "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
        }
      }
    ]
  },
  {
    "title": "Loft Bedroom with Clawfoot Tub & Skylight",
    "description": "Experience unforgettable luxury at this premier rooms stay located in Aspen, Colorado. Features curated interior aesthetics, five-star guest amenities, and exceptional natural surroundings for the perfect getaway.",
    "image": {
      "url": "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
      "filename": "listing_16"
    },
    "gallery": [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80"
    ],
    "price": 890,
    "category": "Rooms",
    "location": "Aspen, Colorado",
    "country": "United States",
    "coordinates": {
      "lat": 39.1761,
      "lng": -106.7725
    },
    "amenities": [
      "Wifi",
      "Air conditioning",
      "Chef Kitchen",
      "Free parking"
    ],
    "host": {
      "name": "Elena Rostova",
      "isSuperhost": true,
      "avatar": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80"
    },
    "reviews": [
      {
        "comment": "A sanctuary of peace and modern architectural luxury. Waking up to these views is unforgettable.",
        "rating": 5,
        "author": {
          "name": "Marcus B.",
          "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
        }
      },
      {
        "comment": "Spotlessly clean, flawless design, and warm hospitality. 10/10 recommendation!",
        "rating": 5,
        "author": {
          "name": "Sarah J.",
          "avatar": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
        }
      }
    ]
  },
  {
    "title": "Cozy Alpine Room with Cedar Fireplace",
    "description": "Experience unforgettable luxury at this premier rooms stay located in Paris, Île-de-France. Features curated interior aesthetics, five-star guest amenities, and exceptional natural surroundings for the perfect getaway.",
    "image": {
      "url": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
      "filename": "listing_17"
    },
    "gallery": [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80"
    ],
    "price": 160,
    "category": "Rooms",
    "location": "Paris, Île-de-France",
    "country": "France",
    "coordinates": {
      "lat": 48.8566,
      "lng": 2.3372
    },
    "amenities": [
      "Wifi",
      "Air conditioning",
      "Chef Kitchen",
      "Free parking"
    ],
    "host": {
      "name": "Jean-Pierre Laurent",
      "isSuperhost": false,
      "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
    },
    "reviews": [
      {
        "comment": "Spotlessly clean, flawless design, and warm hospitality. 10/10 recommendation!",
        "rating": 5,
        "author": {
          "name": "Sarah J.",
          "avatar": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
        }
      },
      {
        "comment": "Incredible attention to detail. The sunset from the terrace was the highlight of our vacation.",
        "rating": 4.9,
        "author": {
          "name": "David K.",
          "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
        }
      }
    ]
  },
  {
    "title": "Bohemian Terracotta Suite with Sea Breeze",
    "description": "Experience unforgettable luxury at this premier rooms stay located in Zermatt, Valais. Features curated interior aesthetics, five-star guest amenities, and exceptional natural surroundings for the perfect getaway.",
    "image": {
      "url": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80",
      "filename": "listing_18"
    },
    "gallery": [
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80"
    ],
    "price": 210,
    "category": "Rooms",
    "location": "Zermatt, Valais",
    "country": "Switzerland",
    "coordinates": {
      "lat": 45.9913,
      "lng": 7.7791
    },
    "amenities": [
      "Wifi",
      "Air conditioning",
      "Chef Kitchen",
      "Free parking"
    ],
    "host": {
      "name": "Kenji Sato",
      "isSuperhost": true,
      "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
    },
    "reviews": [
      {
        "comment": "Incredible attention to detail. The sunset from the terrace was the highlight of our vacation.",
        "rating": 4.9,
        "author": {
          "name": "David K.",
          "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
        }
      },
      {
        "comment": "Exceeded all expectations! The photos do not do this stunning property justice.",
        "rating": 5,
        "author": {
          "name": "Emma W.",
          "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
        }
      }
    ]
  },
  {
    "title": "Zen Heritage Suite with Bamboo Terrace",
    "description": "Experience unforgettable luxury at this premier rooms stay located in Amalfi Coast, Campania. Features curated interior aesthetics, five-star guest amenities, and exceptional natural surroundings for the perfect getaway.",
    "image": {
      "url": "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80",
      "filename": "listing_19"
    },
    "gallery": [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&w=800&q=80"
    ],
    "price": 250,
    "category": "Rooms",
    "location": "Amalfi Coast, Campania",
    "country": "Italy",
    "coordinates": {
      "lat": 40.664,
      "lng": 14.5727
    },
    "amenities": [
      "Wifi",
      "Air conditioning",
      "Chef Kitchen",
      "Free parking"
    ],
    "host": {
      "name": "Sophie Van Dijk",
      "isSuperhost": false,
      "avatar": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80"
    },
    "reviews": [
      {
        "comment": "Exceeded all expectations! The photos do not do this stunning property justice.",
        "rating": 5,
        "author": {
          "name": "Emma W.",
          "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
        }
      },
      {
        "comment": "A sanctuary of peace and modern architectural luxury. Waking up to these views is unforgettable.",
        "rating": 5,
        "author": {
          "name": "Marcus B.",
          "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
        }
      }
    ]
  },
  {
    "title": "Luxury Loft in Heart of Paris Near Eiffel Tower",
    "description": "Experience unforgettable luxury at this premier iconic cities stay located in Joshua Tree, California. Features curated interior aesthetics, five-star guest amenities, and exceptional natural surroundings for the perfect getaway.",
    "image": {
      "url": "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80",
      "filename": "listing_20"
    },
    "gallery": [
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80"
    ],
    "price": 300,
    "category": "Iconic Cities",
    "location": "Joshua Tree, California",
    "country": "United States",
    "coordinates": {
      "lat": 34.1797,
      "lng": -116.2981
    },
    "amenities": [
      "Wifi",
      "Air conditioning",
      "Chef Kitchen",
      "Free parking"
    ],
    "host": {
      "name": "Marcus Vance",
      "isSuperhost": true,
      "avatar": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80"
    },
    "reviews": [
      {
        "comment": "A sanctuary of peace and modern architectural luxury. Waking up to these views is unforgettable.",
        "rating": 5,
        "author": {
          "name": "Marcus B.",
          "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
        }
      },
      {
        "comment": "Spotlessly clean, flawless design, and warm hospitality. 10/10 recommendation!",
        "rating": 5,
        "author": {
          "name": "Sarah J.",
          "avatar": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
        }
      }
    ]
  },
  {
    "title": "Tribeca Architectural Penthouse with Rooftop Deck",
    "description": "Experience unforgettable luxury at this premier iconic cities stay located in Orlando, Florida. Features curated interior aesthetics, five-star guest amenities, and exceptional natural surroundings for the perfect getaway.",
    "image": {
      "url": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
      "filename": "listing_21"
    },
    "gallery": [
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
    ],
    "price": 350,
    "category": "Iconic Cities",
    "location": "Orlando, Florida",
    "country": "United States",
    "coordinates": {
      "lat": 28.4933,
      "lng": -81.4242
    },
    "amenities": [
      "Wifi",
      "Air conditioning",
      "Chef Kitchen",
      "Free parking"
    ],
    "host": {
      "name": "Heidi Sommer",
      "isSuperhost": false,
      "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
    },
    "reviews": [
      {
        "comment": "Spotlessly clean, flawless design, and warm hospitality. 10/10 recommendation!",
        "rating": 5,
        "author": {
          "name": "Sarah J.",
          "avatar": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
        }
      },
      {
        "comment": "Incredible attention to detail. The sunset from the terrace was the highlight of our vacation.",
        "rating": 4.9,
        "author": {
          "name": "David K.",
          "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
        }
      }
    ]
  },
  {
    "title": "Mayfair Elegant Residence Overlooking Park",
    "description": "Experience unforgettable luxury at this premier iconic cities stay located in Rome, Lazio. Features curated interior aesthetics, five-star guest amenities, and exceptional natural surroundings for the perfect getaway.",
    "image": {
      "url": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "filename": "listing_22"
    },
    "gallery": [
      "https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80"
    ],
    "price": 390,
    "category": "Iconic Cities",
    "location": "Rome, Lazio",
    "country": "Italy",
    "coordinates": {
      "lat": 41.8728,
      "lng": 12.4964
    },
    "amenities": [
      "Wifi",
      "Air conditioning",
      "Chef Kitchen",
      "Free parking"
    ],
    "host": {
      "name": "Aria Thorne",
      "isSuperhost": true,
      "avatar": "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80"
    },
    "reviews": [
      {
        "comment": "Incredible attention to detail. The sunset from the terrace was the highlight of our vacation.",
        "rating": 4.9,
        "author": {
          "name": "David K.",
          "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
        }
      },
      {
        "comment": "Exceeded all expectations! The photos do not do this stunning property justice.",
        "rating": 5,
        "author": {
          "name": "Emma W.",
          "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
        }
      }
    ]
  },
  {
    "title": "Kyoto Riverside Heritage Townhouse",
    "description": "Experience unforgettable luxury at this premier iconic cities stay located in Tulum, Quintana Roo. Features curated interior aesthetics, five-star guest amenities, and exceptional natural surroundings for the perfect getaway.",
    "image": {
      "url": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
      "filename": "listing_23"
    },
    "gallery": [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80"
    ],
    "price": 440,
    "category": "Iconic Cities",
    "location": "Tulum, Quintana Roo",
    "country": "Mexico",
    "coordinates": {
      "lat": 20.1964,
      "lng": -87.4204
    },
    "amenities": [
      "Wifi",
      "Air conditioning",
      "Chef Kitchen",
      "Free parking"
    ],
    "host": {
      "name": "Liam Sterling",
      "isSuperhost": false,
      "avatar": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80"
    },
    "reviews": [
      {
        "comment": "Exceeded all expectations! The photos do not do this stunning property justice.",
        "rating": 5,
        "author": {
          "name": "Emma W.",
          "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
        }
      },
      {
        "comment": "A sanctuary of peace and modern architectural luxury. Waking up to these views is unforgettable.",
        "rating": 5,
        "author": {
          "name": "Marcus B.",
          "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
        }
      }
    ]
  },
  {
    "title": "Rome Piazza Panoramic Terrace Apartment",
    "description": "Experience unforgettable luxury at this premier iconic cities stay located in Lake Como, Lombardy. Features curated interior aesthetics, five-star guest amenities, and exceptional natural surroundings for the perfect getaway.",
    "image": {
      "url": "https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&w=1200&q=80",
      "filename": "listing_24"
    },
    "gallery": [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80"
    ],
    "price": 490,
    "category": "Iconic Cities",
    "location": "Lake Como, Lombardy",
    "country": "Italy",
    "coordinates": {
      "lat": 45.9897,
      "lng": 9.2422
    },
    "amenities": [
      "Wifi",
      "Air conditioning",
      "Chef Kitchen",
      "Free parking"
    ],
    "host": {
      "name": "Elena Rostova",
      "isSuperhost": true,
      "avatar": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80"
    },
    "reviews": [
      {
        "comment": "A sanctuary of peace and modern architectural luxury. Waking up to these views is unforgettable.",
        "rating": 5,
        "author": {
          "name": "Marcus B.",
          "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
        }
      },
      {
        "comment": "Spotlessly clean, flawless design, and warm hospitality. 10/10 recommendation!",
        "rating": 5,
        "author": {
          "name": "Sarah J.",
          "avatar": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
        }
      }
    ]
  },
  {
    "title": "Sydney Harbour Waterfront Executive Suite",
    "description": "Experience unforgettable luxury at this premier iconic cities stay located in Malibu, California. Features curated interior aesthetics, five-star guest amenities, and exceptional natural surroundings for the perfect getaway.",
    "image": {
      "url": "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80",
      "filename": "listing_25"
    },
    "gallery": [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80"
    ],
    "price": 540,
    "category": "Iconic Cities",
    "location": "Malibu, California",
    "country": "United States",
    "coordinates": {
      "lat": 34.0409,
      "lng": -118.7498
    },
    "amenities": [
      "Wifi",
      "Air conditioning",
      "Chef Kitchen",
      "Free parking"
    ],
    "host": {
      "name": "Jean-Pierre Laurent",
      "isSuperhost": false,
      "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
    },
    "reviews": [
      {
        "comment": "Spotlessly clean, flawless design, and warm hospitality. 10/10 recommendation!",
        "rating": 5,
        "author": {
          "name": "Sarah J.",
          "avatar": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
        }
      },
      {
        "comment": "Incredible attention to detail. The sunset from the terrace was the highlight of our vacation.",
        "rating": 4.9,
        "author": {
          "name": "David K.",
          "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
        }
      }
    ]
  },
  {
    "title": "Tokyo Shibuya High-Floor Designer Flat",
    "description": "Experience unforgettable luxury at this premier iconic cities stay located in Oia, Santorini. Features curated interior aesthetics, five-star guest amenities, and exceptional natural surroundings for the perfect getaway.",
    "image": {
      "url": "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80",
      "filename": "listing_26"
    },
    "gallery": [
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80"
    ],
    "price": 580,
    "category": "Iconic Cities",
    "location": "Oia, Santorini",
    "country": "Greece",
    "coordinates": {
      "lat": 36.4918,
      "lng": 25.3453
    },
    "amenities": [
      "Wifi",
      "Air conditioning",
      "Chef Kitchen",
      "Free parking"
    ],
    "host": {
      "name": "Kenji Sato",
      "isSuperhost": true,
      "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
    },
    "reviews": [
      {
        "comment": "Incredible attention to detail. The sunset from the terrace was the highlight of our vacation.",
        "rating": 4.9,
        "author": {
          "name": "David K.",
          "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
        }
      },
      {
        "comment": "Exceeded all expectations! The photos do not do this stunning property justice.",
        "rating": 5,
        "author": {
          "name": "Emma W.",
          "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
        }
      }
    ]
  },
  {
    "title": "Barcelona Eixample Heritage Residence",
    "description": "Experience unforgettable luxury at this premier iconic cities stay located in Ubud, Bali. Features curated interior aesthetics, five-star guest amenities, and exceptional natural surroundings for the perfect getaway.",
    "image": {
      "url": "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80",
      "filename": "listing_27"
    },
    "gallery": [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&w=800&q=80"
    ],
    "price": 630,
    "category": "Iconic Cities",
    "location": "Ubud, Bali",
    "country": "Indonesia",
    "coordinates": {
      "lat": -8.4619,
      "lng": 115.2775
    },
    "amenities": [
      "Wifi",
      "Air conditioning",
      "Chef Kitchen",
      "Free parking"
    ],
    "host": {
      "name": "Sophie Van Dijk",
      "isSuperhost": false,
      "avatar": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80"
    },
    "reviews": [
      {
        "comment": "Exceeded all expectations! The photos do not do this stunning property justice.",
        "rating": 5,
        "author": {
          "name": "Emma W.",
          "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
        }
      },
      {
        "comment": "A sanctuary of peace and modern architectural luxury. Waking up to these views is unforgettable.",
        "rating": 5,
        "author": {
          "name": "Marcus B.",
          "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
        }
      }
    ]
  },
  {
    "title": "Amsterdam Canal House with Private Mooring",
    "description": "Experience unforgettable luxury at this premier iconic cities stay located in Gordes, Provence. Features curated interior aesthetics, five-star guest amenities, and exceptional natural surroundings for the perfect getaway.",
    "image": {
      "url": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
      "filename": "listing_28"
    },
    "gallery": [
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80"
    ],
    "price": 680,
    "category": "Iconic Cities",
    "location": "Gordes, Provence",
    "country": "France",
    "coordinates": {
      "lat": 43.8664,
      "lng": 5.1553
    },
    "amenities": [
      "Wifi",
      "Air conditioning",
      "Chef Kitchen",
      "Free parking"
    ],
    "host": {
      "name": "Marcus Vance",
      "isSuperhost": true,
      "avatar": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80"
    },
    "reviews": [
      {
        "comment": "A sanctuary of peace and modern architectural luxury. Waking up to these views is unforgettable.",
        "rating": 5,
        "author": {
          "name": "Marcus B.",
          "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
        }
      },
      {
        "comment": "Spotlessly clean, flawless design, and warm hospitality. 10/10 recommendation!",
        "rating": 5,
        "author": {
          "name": "Sarah J.",
          "avatar": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
        }
      }
    ]
  },
  {
    "title": "Florence Duomo View Renaissance Loft",
    "description": "Experience unforgettable luxury at this premier iconic cities stay located in Inverness, Scottish Highlands. Features curated interior aesthetics, five-star guest amenities, and exceptional natural surroundings for the perfect getaway.",
    "image": {
      "url": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "filename": "listing_29"
    },
    "gallery": [
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
    ],
    "price": 720,
    "category": "Iconic Cities",
    "location": "Inverness, Scottish Highlands",
    "country": "United Kingdom",
    "coordinates": {
      "lat": 57.4478,
      "lng": -4.2247
    },
    "amenities": [
      "Wifi",
      "Air conditioning",
      "Chef Kitchen",
      "Free parking"
    ],
    "host": {
      "name": "Heidi Sommer",
      "isSuperhost": false,
      "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
    },
    "reviews": [
      {
        "comment": "Spotlessly clean, flawless design, and warm hospitality. 10/10 recommendation!",
        "rating": 5,
        "author": {
          "name": "Sarah J.",
          "avatar": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
        }
      },
      {
        "comment": "Incredible attention to detail. The sunset from the terrace was the highlight of our vacation.",
        "rating": 4.9,
        "author": {
          "name": "David K.",
          "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
        }
      }
    ]
  },
  {
    "title": "Pine Lake Glass Lodge with Private Boat Dock",
    "description": "Experience unforgettable luxury at this premier lakefront stay located in London, England. Features curated interior aesthetics, five-star guest amenities, and exceptional natural surroundings for the perfect getaway.",
    "image": {
      "url": "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80",
      "filename": "listing_30"
    },
    "gallery": [
      "https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80"
    ],
    "price": 770,
    "category": "Lakefront",
    "location": "London, England",
    "country": "United Kingdom",
    "coordinates": {
      "lat": 51.4924,
      "lng": -0.0828
    },
    "amenities": [
      "Wifi",
      "Air conditioning",
      "Chef Kitchen",
      "Free parking",
      "Sauna",
      "Fireplace",
      "Mountain View"
    ],
    "host": {
      "name": "Aria Thorne",
      "isSuperhost": true,
      "avatar": "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80"
    },
    "reviews": [
      {
        "comment": "Incredible attention to detail. The sunset from the terrace was the highlight of our vacation.",
        "rating": 4.9,
        "author": {
          "name": "David K.",
          "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
        }
      },
      {
        "comment": "Exceeded all expectations! The photos do not do this stunning property justice.",
        "rating": 5,
        "author": {
          "name": "Emma W.",
          "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
        }
      }
    ]
  },
  {
    "title": "Lake Como Waterfront Villa with Italian Gardens",
    "description": "Experience unforgettable luxury at this premier lakefront stay located in Cape Town, Western Cape. Features curated interior aesthetics, five-star guest amenities, and exceptional natural surroundings for the perfect getaway.",
    "image": {
      "url": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
      "filename": "listing_31"
    },
    "gallery": [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80"
    ],
    "price": 820,
    "category": "Lakefront",
    "location": "Cape Town, Western Cape",
    "country": "South Africa",
    "coordinates": {
      "lat": -33.9249,
      "lng": 18.4091
    },
    "amenities": [
      "Wifi",
      "Air conditioning",
      "Chef Kitchen",
      "Free parking",
      "Sauna",
      "Fireplace",
      "Mountain View"
    ],
    "host": {
      "name": "Liam Sterling",
      "isSuperhost": false,
      "avatar": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80"
    },
    "reviews": [
      {
        "comment": "Exceeded all expectations! The photos do not do this stunning property justice.",
        "rating": 5,
        "author": {
          "name": "Emma W.",
          "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
        }
      },
      {
        "comment": "A sanctuary of peace and modern architectural luxury. Waking up to these views is unforgettable.",
        "rating": 5,
        "author": {
          "name": "Marcus B.",
          "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
        }
      }
    ]
  },
  {
    "title": "Banff Alpine Lake Chalet with Kayaks",
    "description": "Experience unforgettable luxury at this premier lakefront stay located in Maui, Hawaii. Features curated interior aesthetics, five-star guest amenities, and exceptional natural surroundings for the perfect getaway.",
    "image": {
      "url": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "filename": "listing_32"
    },
    "gallery": [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80"
    ],
    "price": 860,
    "category": "Lakefront",
    "location": "Maui, Hawaii",
    "country": "United States",
    "coordinates": {
      "lat": 20.8134,
      "lng": -156.3019
    },
    "amenities": [
      "Wifi",
      "Air conditioning",
      "Chef Kitchen",
      "Free parking",
      "Sauna",
      "Fireplace",
      "Mountain View"
    ],
    "host": {
      "name": "Elena Rostova",
      "isSuperhost": true,
      "avatar": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80"
    },
    "reviews": [
      {
        "comment": "A sanctuary of peace and modern architectural luxury. Waking up to these views is unforgettable.",
        "rating": 5,
        "author": {
          "name": "Marcus B.",
          "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
        }
      },
      {
        "comment": "Spotlessly clean, flawless design, and warm hospitality. 10/10 recommendation!",
        "rating": 5,
        "author": {
          "name": "Sarah J.",
          "avatar": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
        }
      }
    ]
  },
  {
    "title": "Queenstown Glacial Lake Panoramic Retreat",
    "description": "Experience unforgettable luxury at this premier lakefront stay located in Sydney, New South Wales. Features curated interior aesthetics, five-star guest amenities, and exceptional natural surroundings for the perfect getaway.",
    "image": {
      "url": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
      "filename": "listing_33"
    },
    "gallery": [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80"
    ],
    "price": 910,
    "category": "Lakefront",
    "location": "Sydney, New South Wales",
    "country": "Australia",
    "coordinates": {
      "lat": -33.8388,
      "lng": 151.1793
    },
    "amenities": [
      "Wifi",
      "Air conditioning",
      "Chef Kitchen",
      "Free parking",
      "Sauna",
      "Fireplace",
      "Mountain View"
    ],
    "host": {
      "name": "Jean-Pierre Laurent",
      "isSuperhost": false,
      "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
    },
    "reviews": [
      {
        "comment": "Spotlessly clean, flawless design, and warm hospitality. 10/10 recommendation!",
        "rating": 5,
        "author": {
          "name": "Sarah J.",
          "avatar": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
        }
      },
      {
        "comment": "Incredible attention to detail. The sunset from the terrace was the highlight of our vacation.",
        "rating": 4.9,
        "author": {
          "name": "David K.",
          "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
        }
      }
    ]
  },
  {
    "title": "Lake Tahoe Timber Estate with Sandy Shoreline",
    "description": "Experience unforgettable luxury at this premier lakefront stay located in Kyoto, Kansai. Features curated interior aesthetics, five-star guest amenities, and exceptional natural surroundings for the perfect getaway.",
    "image": {
      "url": "https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&w=1200&q=80",
      "filename": "listing_34"
    },
    "gallery": [
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80"
    ],
    "price": 180,
    "category": "Lakefront",
    "location": "Kyoto, Kansai",
    "country": "Japan",
    "coordinates": {
      "lat": 35.0566,
      "lng": 135.7831
    },
    "amenities": [
      "Wifi",
      "Air conditioning",
      "Chef Kitchen",
      "Free parking",
      "Sauna",
      "Fireplace",
      "Mountain View"
    ],
    "host": {
      "name": "Kenji Sato",
      "isSuperhost": true,
      "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
    },
    "reviews": [
      {
        "comment": "Incredible attention to detail. The sunset from the terrace was the highlight of our vacation.",
        "rating": 4.9,
        "author": {
          "name": "David K.",
          "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
        }
      },
      {
        "comment": "Exceeded all expectations! The photos do not do this stunning property justice.",
        "rating": 5,
        "author": {
          "name": "Emma W.",
          "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
        }
      }
    ]
  },
  {
    "title": "Norwegian Fjord Waterfront Log House",
    "description": "Experience unforgettable luxury at this premier lakefront stay located in Banff, Alberta. Features curated interior aesthetics, five-star guest amenities, and exceptional natural surroundings for the perfect getaway.",
    "image": {
      "url": "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80",
      "filename": "listing_35"
    },
    "gallery": [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&w=800&q=80"
    ],
    "price": 230,
    "category": "Lakefront",
    "location": "Banff, Alberta",
    "country": "Canada",
    "coordinates": {
      "lat": 51.1334,
      "lng": -115.6158
    },
    "amenities": [
      "Wifi",
      "Air conditioning",
      "Chef Kitchen",
      "Free parking",
      "Sauna",
      "Fireplace",
      "Mountain View"
    ],
    "host": {
      "name": "Sophie Van Dijk",
      "isSuperhost": false,
      "avatar": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80"
    },
    "reviews": [
      {
        "comment": "Exceeded all expectations! The photos do not do this stunning property justice.",
        "rating": 5,
        "author": {
          "name": "Emma W.",
          "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
        }
      },
      {
        "comment": "A sanctuary of peace and modern architectural luxury. Waking up to these views is unforgettable.",
        "rating": 5,
        "author": {
          "name": "Marcus B.",
          "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
        }
      }
    ]
  },
  {
    "title": "Lakeside Glass Cabin with Floating Sauna",
    "description": "Experience unforgettable luxury at this premier lakefront stay located in Rovaniemi, Lapland. Features curated interior aesthetics, five-star guest amenities, and exceptional natural surroundings for the perfect getaway.",
    "image": {
      "url": "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80",
      "filename": "listing_36"
    },
    "gallery": [
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80"
    ],
    "price": 270,
    "category": "Lakefront",
    "location": "Rovaniemi, Lapland",
    "country": "Finland",
    "coordinates": {
      "lat": 66.4739,
      "lng": 25.7294
    },
    "amenities": [
      "Wifi",
      "Air conditioning",
      "Chef Kitchen",
      "Free parking",
      "Sauna",
      "Fireplace",
      "Mountain View"
    ],
    "host": {
      "name": "Marcus Vance",
      "isSuperhost": true,
      "avatar": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80"
    },
    "reviews": [
      {
        "comment": "A sanctuary of peace and modern architectural luxury. Waking up to these views is unforgettable.",
        "rating": 5,
        "author": {
          "name": "Marcus B.",
          "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
        }
      },
      {
        "comment": "Spotlessly clean, flawless design, and warm hospitality. 10/10 recommendation!",
        "rating": 5,
        "author": {
          "name": "Sarah J.",
          "avatar": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
        }
      }
    ]
  },
  {
    "title": "Swiss Lake Vista Chalet with Private Pier",
    "description": "Experience unforgettable luxury at this premier lakefront stay located in Portland, Oregon. Features curated interior aesthetics, five-star guest amenities, and exceptional natural surroundings for the perfect getaway.",
    "image": {
      "url": "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80",
      "filename": "listing_37"
    },
    "gallery": [
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
    ],
    "price": 320,
    "category": "Lakefront",
    "location": "Portland, Oregon",
    "country": "United States",
    "coordinates": {
      "lat": 45.5002,
      "lng": -122.6334
    },
    "amenities": [
      "Wifi",
      "Air conditioning",
      "Chef Kitchen",
      "Free parking",
      "Sauna",
      "Fireplace",
      "Mountain View"
    ],
    "host": {
      "name": "Heidi Sommer",
      "isSuperhost": false,
      "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
    },
    "reviews": [
      {
        "comment": "Spotlessly clean, flawless design, and warm hospitality. 10/10 recommendation!",
        "rating": 5,
        "author": {
          "name": "Sarah J.",
          "avatar": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
        }
      },
      {
        "comment": "Incredible attention to detail. The sunset from the terrace was the highlight of our vacation.",
        "rating": 4.9,
        "author": {
          "name": "David K.",
          "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
        }
      }
    ]
  },
  {
    "title": "Lake Michigan Coastal Lodge with Fire Pit",
    "description": "Experience unforgettable luxury at this premier lakefront stay located in New York, New York. Features curated interior aesthetics, five-star guest amenities, and exceptional natural surroundings for the perfect getaway.",
    "image": {
      "url": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
      "filename": "listing_38"
    },
    "gallery": [
      "https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80"
    ],
    "price": 370,
    "category": "Lakefront",
    "location": "New York, New York",
    "country": "United States",
    "coordinates": {
      "lat": 40.7128,
      "lng": -74.021
    },
    "amenities": [
      "Wifi",
      "Air conditioning",
      "Chef Kitchen",
      "Free parking",
      "Sauna",
      "Fireplace",
      "Mountain View"
    ],
    "host": {
      "name": "Aria Thorne",
      "isSuperhost": true,
      "avatar": "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80"
    },
    "reviews": [
      {
        "comment": "Incredible attention to detail. The sunset from the terrace was the highlight of our vacation.",
        "rating": 4.9,
        "author": {
          "name": "David K.",
          "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
        }
      },
      {
        "comment": "Exceeded all expectations! The photos do not do this stunning property justice.",
        "rating": 5,
        "author": {
          "name": "Emma W.",
          "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
        }
      }
    ]
  },
  {
    "title": "Canopy Redwood Treehouse with Suspension Bridge",
    "description": "Experience unforgettable luxury at this premier treehouses stay located in Queenstown, Otago. Features curated interior aesthetics, five-star guest amenities, and exceptional natural surroundings for the perfect getaway.",
    "image": {
      "url": "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200&q=80",
      "filename": "listing_39"
    },
    "gallery": [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80"
    ],
    "price": 410,
    "category": "Treehouses",
    "location": "Queenstown, Otago",
    "country": "New Zealand",
    "coordinates": {
      "lat": -45.0162,
      "lng": 168.6926
    },
    "amenities": [
      "Wifi",
      "Air conditioning",
      "Chef Kitchen",
      "Free parking",
      "Stargazing Deck",
      "Fire pit",
      "Hammock"
    ],
    "host": {
      "name": "Liam Sterling",
      "isSuperhost": false,
      "avatar": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80"
    },
    "reviews": [
      {
        "comment": "Exceeded all expectations! The photos do not do this stunning property justice.",
        "rating": 5,
        "author": {
          "name": "Emma W.",
          "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
        }
      },
      {
        "comment": "A sanctuary of peace and modern architectural luxury. Waking up to these views is unforgettable.",
        "rating": 5,
        "author": {
          "name": "Marcus B.",
          "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
        }
      }
    ]
  },
  {
    "title": "Bamboo Birdsnest Treehouse with Jungle Vista",
    "description": "Experience unforgettable luxury at this premier treehouses stay located in Reykjavik, Capital Region. Features curated interior aesthetics, five-star guest amenities, and exceptional natural surroundings for the perfect getaway.",
    "image": {
      "url": "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80",
      "filename": "listing_40"
    },
    "gallery": [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80"
    ],
    "price": 460,
    "category": "Treehouses",
    "location": "Reykjavik, Capital Region",
    "country": "Iceland",
    "coordinates": {
      "lat": 64.1766,
      "lng": -21.9726
    },
    "amenities": [
      "Wifi",
      "Air conditioning",
      "Chef Kitchen",
      "Free parking",
      "Stargazing Deck",
      "Fire pit",
      "Hammock"
    ],
    "host": {
      "name": "Elena Rostova",
      "isSuperhost": true,
      "avatar": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80"
    },
    "reviews": [
      {
        "comment": "A sanctuary of peace and modern architectural luxury. Waking up to these views is unforgettable.",
        "rating": 5,
        "author": {
          "name": "Marcus B.",
          "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
        }
      },
      {
        "comment": "Spotlessly clean, flawless design, and warm hospitality. 10/10 recommendation!",
        "rating": 5,
        "author": {
          "name": "Sarah J.",
          "avatar": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
        }
      }
    ]
  },
  {
    "title": "Nordic Pine Canopy Lodge with Skylight Roof",
    "description": "Experience unforgettable luxury at this premier treehouses stay located in Aspen, Colorado. Features curated interior aesthetics, five-star guest amenities, and exceptional natural surroundings for the perfect getaway.",
    "image": {
      "url": "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
      "filename": "listing_41"
    },
    "gallery": [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80"
    ],
    "price": 510,
    "category": "Treehouses",
    "location": "Aspen, Colorado",
    "country": "United States",
    "coordinates": {
      "lat": 39.2361,
      "lng": -106.8025
    },
    "amenities": [
      "Wifi",
      "Air conditioning",
      "Chef Kitchen",
      "Free parking",
      "Stargazing Deck",
      "Fire pit",
      "Hammock"
    ],
    "host": {
      "name": "Jean-Pierre Laurent",
      "isSuperhost": false,
      "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
    },
    "reviews": [
      {
        "comment": "Spotlessly clean, flawless design, and warm hospitality. 10/10 recommendation!",
        "rating": 5,
        "author": {
          "name": "Sarah J.",
          "avatar": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
        }
      },
      {
        "comment": "Incredible attention to detail. The sunset from the terrace was the highlight of our vacation.",
        "rating": 4.9,
        "author": {
          "name": "David K.",
          "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
        }
      }
    ]
  },
  {
    "title": "Pacific Coast Cedar Treehouse with Ocean Peak",
    "description": "Experience unforgettable luxury at this premier treehouses stay located in Paris, Île-de-France. Features curated interior aesthetics, five-star guest amenities, and exceptional natural surroundings for the perfect getaway.",
    "image": {
      "url": "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80",
      "filename": "listing_42"
    },
    "gallery": [
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80"
    ],
    "price": 550,
    "category": "Treehouses",
    "location": "Paris, Île-de-France",
    "country": "France",
    "coordinates": {
      "lat": 48.8116,
      "lng": 2.3072
    },
    "amenities": [
      "Wifi",
      "Air conditioning",
      "Chef Kitchen",
      "Free parking",
      "Stargazing Deck",
      "Fire pit",
      "Hammock"
    ],
    "host": {
      "name": "Kenji Sato",
      "isSuperhost": true,
      "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
    },
    "reviews": [
      {
        "comment": "Incredible attention to detail. The sunset from the terrace was the highlight of our vacation.",
        "rating": 4.9,
        "author": {
          "name": "David K.",
          "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
        }
      },
      {
        "comment": "Exceeded all expectations! The photos do not do this stunning property justice.",
        "rating": 5,
        "author": {
          "name": "Emma W.",
          "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
        }
      }
    ]
  },
  {
    "title": "Tropical Rainforest Tree Villa with Outdoor Tub",
    "description": "Experience unforgettable luxury at this premier treehouses stay located in Zermatt, Valais. Features curated interior aesthetics, five-star guest amenities, and exceptional natural surroundings for the perfect getaway.",
    "image": {
      "url": "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200&q=80",
      "filename": "listing_43"
    },
    "gallery": [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&w=800&q=80"
    ],
    "price": 600,
    "category": "Treehouses",
    "location": "Zermatt, Valais",
    "country": "Switzerland",
    "coordinates": {
      "lat": 45.9463,
      "lng": 7.7491
    },
    "amenities": [
      "Wifi",
      "Air conditioning",
      "Chef Kitchen",
      "Free parking",
      "Stargazing Deck",
      "Fire pit",
      "Hammock"
    ],
    "host": {
      "name": "Sophie Van Dijk",
      "isSuperhost": false,
      "avatar": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80"
    },
    "reviews": [
      {
        "comment": "Exceeded all expectations! The photos do not do this stunning property justice.",
        "rating": 5,
        "author": {
          "name": "Emma W.",
          "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
        }
      },
      {
        "comment": "A sanctuary of peace and modern architectural luxury. Waking up to these views is unforgettable.",
        "rating": 5,
        "author": {
          "name": "Marcus B.",
          "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
        }
      }
    ]
  },
  {
    "title": "High-Altitude Alpine Treehouse with Mountain Panorama",
    "description": "Experience unforgettable luxury at this premier treehouses stay located in Amalfi Coast, Campania. Features curated interior aesthetics, five-star guest amenities, and exceptional natural surroundings for the perfect getaway.",
    "image": {
      "url": "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80",
      "filename": "listing_44"
    },
    "gallery": [
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80"
    ],
    "price": 650,
    "category": "Treehouses",
    "location": "Amalfi Coast, Campania",
    "country": "Italy",
    "coordinates": {
      "lat": 40.619,
      "lng": 14.6477
    },
    "amenities": [
      "Wifi",
      "Air conditioning",
      "Chef Kitchen",
      "Free parking",
      "Stargazing Deck",
      "Fire pit",
      "Hammock"
    ],
    "host": {
      "name": "Marcus Vance",
      "isSuperhost": true,
      "avatar": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80"
    },
    "reviews": [
      {
        "comment": "A sanctuary of peace and modern architectural luxury. Waking up to these views is unforgettable.",
        "rating": 5,
        "author": {
          "name": "Marcus B.",
          "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
        }
      },
      {
        "comment": "Spotlessly clean, flawless design, and warm hospitality. 10/10 recommendation!",
        "rating": 5,
        "author": {
          "name": "Sarah J.",
          "avatar": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
        }
      }
    ]
  },
  {
    "title": "Geodesic Tree Observatory with Telescope",
    "description": "Experience unforgettable luxury at this premier treehouses stay located in Joshua Tree, California. Features curated interior aesthetics, five-star guest amenities, and exceptional natural surroundings for the perfect getaway.",
    "image": {
      "url": "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
      "filename": "listing_45"
    },
    "gallery": [
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
    ],
    "price": 700,
    "category": "Treehouses",
    "location": "Joshua Tree, California",
    "country": "United States",
    "coordinates": {
      "lat": 34.1347,
      "lng": -116.3281
    },
    "amenities": [
      "Wifi",
      "Air conditioning",
      "Chef Kitchen",
      "Free parking",
      "Stargazing Deck",
      "Fire pit",
      "Hammock"
    ],
    "host": {
      "name": "Heidi Sommer",
      "isSuperhost": false,
      "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
    },
    "reviews": [
      {
        "comment": "Spotlessly clean, flawless design, and warm hospitality. 10/10 recommendation!",
        "rating": 5,
        "author": {
          "name": "Sarah J.",
          "avatar": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
        }
      },
      {
        "comment": "Incredible attention to detail. The sunset from the terrace was the highlight of our vacation.",
        "rating": 4.9,
        "author": {
          "name": "David K.",
          "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
        }
      }
    ]
  },
  {
    "title": "Wildwood Oak Canopy Sanctuary with Fireplace",
    "description": "Experience unforgettable luxury at this premier treehouses stay located in Orlando, Florida. Features curated interior aesthetics, five-star guest amenities, and exceptional natural surroundings for the perfect getaway.",
    "image": {
      "url": "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80",
      "filename": "listing_46"
    },
    "gallery": [
      "https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80"
    ],
    "price": 740,
    "category": "Treehouses",
    "location": "Orlando, Florida",
    "country": "United States",
    "coordinates": {
      "lat": 28.5533,
      "lng": -81.3492
    },
    "amenities": [
      "Wifi",
      "Air conditioning",
      "Chef Kitchen",
      "Free parking",
      "Stargazing Deck",
      "Fire pit",
      "Hammock"
    ],
    "host": {
      "name": "Aria Thorne",
      "isSuperhost": true,
      "avatar": "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80"
    },
    "reviews": [
      {
        "comment": "Incredible attention to detail. The sunset from the terrace was the highlight of our vacation.",
        "rating": 4.9,
        "author": {
          "name": "David K.",
          "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
        }
      },
      {
        "comment": "Exceeded all expectations! The photos do not do this stunning property justice.",
        "rating": 5,
        "author": {
          "name": "Emma W.",
          "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
        }
      }
    ]
  },
  {
    "title": "Secluded Forest Canopy Haven with Hot Tub",
    "description": "Experience unforgettable luxury at this premier treehouses stay located in Rome, Lazio. Features curated interior aesthetics, five-star guest amenities, and exceptional natural surroundings for the perfect getaway.",
    "image": {
      "url": "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200&q=80",
      "filename": "listing_47"
    },
    "gallery": [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80"
    ],
    "price": 790,
    "category": "Treehouses",
    "location": "Rome, Lazio",
    "country": "Italy",
    "coordinates": {
      "lat": 41.9328,
      "lng": 12.4664
    },
    "amenities": [
      "Wifi",
      "Air conditioning",
      "Chef Kitchen",
      "Free parking",
      "Stargazing Deck",
      "Fire pit",
      "Hammock"
    ],
    "host": {
      "name": "Liam Sterling",
      "isSuperhost": false,
      "avatar": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80"
    },
    "reviews": [
      {
        "comment": "Exceeded all expectations! The photos do not do this stunning property justice.",
        "rating": 5,
        "author": {
          "name": "Emma W.",
          "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
        }
      },
      {
        "comment": "A sanctuary of peace and modern architectural luxury. Waking up to these views is unforgettable.",
        "rating": 5,
        "author": {
          "name": "Marcus B.",
          "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
        }
      }
    ]
  },
  {
    "title": "Game Lodge Villa with Private Cinema & Bowling Alley",
    "description": "Experience unforgettable luxury at this premier play stay located in Tulum, Quintana Roo. Features curated interior aesthetics, five-star guest amenities, and exceptional natural surroundings for the perfect getaway.",
    "image": {
      "url": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
      "filename": "listing_48"
    },
    "gallery": [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80"
    ],
    "price": 840,
    "category": "Play",
    "location": "Tulum, Quintana Roo",
    "country": "Mexico",
    "coordinates": {
      "lat": 20.2564,
      "lng": -87.4504
    },
    "amenities": [
      "Wifi",
      "Air conditioning",
      "Chef Kitchen",
      "Free parking",
      "Game Room",
      "Home Theater",
      "Pool Table",
      "Billiards"
    ],
    "host": {
      "name": "Elena Rostova",
      "isSuperhost": true,
      "avatar": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80"
    },
    "reviews": [
      {
        "comment": "A sanctuary of peace and modern architectural luxury. Waking up to these views is unforgettable.",
        "rating": 5,
        "author": {
          "name": "Marcus B.",
          "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
        }
      },
      {
        "comment": "Spotlessly clean, flawless design, and warm hospitality. 10/10 recommendation!",
        "rating": 5,
        "author": {
          "name": "Sarah J.",
          "avatar": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
        }
      }
    ]
  },
  {
    "title": "Arcade Wonderland Estate with Resort Waterslide",
    "description": "Experience unforgettable luxury at this premier play stay located in Lake Como, Lombardy. Features curated interior aesthetics, five-star guest amenities, and exceptional natural surroundings for the perfect getaway.",
    "image": {
      "url": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "filename": "listing_49"
    },
    "gallery": [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80"
    ],
    "price": 880,
    "category": "Play",
    "location": "Lake Como, Lombardy",
    "country": "Italy",
    "coordinates": {
      "lat": 45.9447,
      "lng": 9.2122
    },
    "amenities": [
      "Wifi",
      "Air conditioning",
      "Chef Kitchen",
      "Free parking",
      "Game Room",
      "Home Theater",
      "Pool Table",
      "Billiards"
    ],
    "host": {
      "name": "Jean-Pierre Laurent",
      "isSuperhost": false,
      "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
    },
    "reviews": [
      {
        "comment": "Spotlessly clean, flawless design, and warm hospitality. 10/10 recommendation!",
        "rating": 5,
        "author": {
          "name": "Sarah J.",
          "avatar": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
        }
      },
      {
        "comment": "Incredible attention to detail. The sunset from the terrace was the highlight of our vacation.",
        "rating": 4.9,
        "author": {
          "name": "David K.",
          "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
        }
      }
    ]
  },
  {
    "title": "Sportsman Luxury Ranch with Indoor Basketball",
    "description": "Experience unforgettable luxury at this premier play stay located in Malibu, California. Features curated interior aesthetics, five-star guest amenities, and exceptional natural surroundings for the perfect getaway.",
    "image": {
      "url": "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80",
      "filename": "listing_50"
    },
    "gallery": [
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80"
    ],
    "price": 150,
    "category": "Play",
    "location": "Malibu, California",
    "country": "United States",
    "coordinates": {
      "lat": 33.9959,
      "lng": -118.7798
    },
    "amenities": [
      "Wifi",
      "Air conditioning",
      "Chef Kitchen",
      "Free parking",
      "Game Room",
      "Home Theater",
      "Pool Table",
      "Billiards"
    ],
    "host": {
      "name": "Kenji Sato",
      "isSuperhost": true,
      "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
    },
    "reviews": [
      {
        "comment": "Incredible attention to detail. The sunset from the terrace was the highlight of our vacation.",
        "rating": 4.9,
        "author": {
          "name": "David K.",
          "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
        }
      },
      {
        "comment": "Exceeded all expectations! The photos do not do this stunning property justice.",
        "rating": 5,
        "author": {
          "name": "Emma W.",
          "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
        }
      }
    ]
  },
  {
    "title": "Golf Estate Villa with Private Putting Green",
    "description": "Experience unforgettable luxury at this premier play stay located in Oia, Santorini. Features curated interior aesthetics, five-star guest amenities, and exceptional natural surroundings for the perfect getaway.",
    "image": {
      "url": "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
      "filename": "listing_51"
    },
    "gallery": [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&w=800&q=80"
    ],
    "price": 200,
    "category": "Play",
    "location": "Oia, Santorini",
    "country": "Greece",
    "coordinates": {
      "lat": 36.4468,
      "lng": 25.4203
    },
    "amenities": [
      "Wifi",
      "Air conditioning",
      "Chef Kitchen",
      "Free parking",
      "Game Room",
      "Home Theater",
      "Pool Table",
      "Billiards"
    ],
    "host": {
      "name": "Sophie Van Dijk",
      "isSuperhost": false,
      "avatar": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80"
    },
    "reviews": [
      {
        "comment": "Exceeded all expectations! The photos do not do this stunning property justice.",
        "rating": 5,
        "author": {
          "name": "Emma W.",
          "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
        }
      },
      {
        "comment": "A sanctuary of peace and modern architectural luxury. Waking up to these views is unforgettable.",
        "rating": 5,
        "author": {
          "name": "Marcus B.",
          "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
        }
      }
    ]
  },
  {
    "title": "Gamer Haven Penthouse with Simulators & VR",
    "description": "Experience unforgettable luxury at this premier play stay located in Ubud, Bali. Features curated interior aesthetics, five-star guest amenities, and exceptional natural surroundings for the perfect getaway.",
    "image": {
      "url": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
      "filename": "listing_52"
    },
    "gallery": [
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80"
    ],
    "price": 240,
    "category": "Play",
    "location": "Ubud, Bali",
    "country": "Indonesia",
    "coordinates": {
      "lat": -8.5069,
      "lng": 115.2475
    },
    "amenities": [
      "Wifi",
      "Air conditioning",
      "Chef Kitchen",
      "Free parking",
      "Game Room",
      "Home Theater",
      "Pool Table",
      "Billiards"
    ],
    "host": {
      "name": "Marcus Vance",
      "isSuperhost": true,
      "avatar": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80"
    },
    "reviews": [
      {
        "comment": "A sanctuary of peace and modern architectural luxury. Waking up to these views is unforgettable.",
        "rating": 5,
        "author": {
          "name": "Marcus B.",
          "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
        }
      },
      {
        "comment": "Spotlessly clean, flawless design, and warm hospitality. 10/10 recommendation!",
        "rating": 5,
        "author": {
          "name": "Sarah J.",
          "avatar": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
        }
      }
    ]
  },
  {
    "title": "Entertainment Oasis with Tennis Court & Pool",
    "description": "Experience unforgettable luxury at this premier play stay located in Gordes, Provence. Features curated interior aesthetics, five-star guest amenities, and exceptional natural surroundings for the perfect getaway.",
    "image": {
      "url": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "filename": "listing_53"
    },
    "gallery": [
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
    ],
    "price": 290,
    "category": "Play",
    "location": "Gordes, Provence",
    "country": "France",
    "coordinates": {
      "lat": 43.9264,
      "lng": 5.2303
    },
    "amenities": [
      "Wifi",
      "Air conditioning",
      "Chef Kitchen",
      "Free parking",
      "Game Room",
      "Home Theater",
      "Pool Table",
      "Billiards"
    ],
    "host": {
      "name": "Heidi Sommer",
      "isSuperhost": false,
      "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
    },
    "reviews": [
      {
        "comment": "Spotlessly clean, flawless design, and warm hospitality. 10/10 recommendation!",
        "rating": 5,
        "author": {
          "name": "Sarah J.",
          "avatar": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
        }
      },
      {
        "comment": "Incredible attention to detail. The sunset from the terrace was the highlight of our vacation.",
        "rating": 4.9,
        "author": {
          "name": "David K.",
          "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
        }
      }
    ]
  },
  {
    "title": "Cinema Villa with 4K Theater & Billiards Hall",
    "description": "Experience unforgettable luxury at this premier play stay located in Inverness, Scottish Highlands. Features curated interior aesthetics, five-star guest amenities, and exceptional natural surroundings for the perfect getaway.",
    "image": {
      "url": "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80",
      "filename": "listing_54"
    },
    "gallery": [
      "https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80"
    ],
    "price": 340,
    "category": "Play",
    "location": "Inverness, Scottish Highlands",
    "country": "United Kingdom",
    "coordinates": {
      "lat": 57.5078,
      "lng": -4.2547
    },
    "amenities": [
      "Wifi",
      "Air conditioning",
      "Chef Kitchen",
      "Free parking",
      "Game Room",
      "Home Theater",
      "Pool Table",
      "Billiards"
    ],
    "host": {
      "name": "Aria Thorne",
      "isSuperhost": true,
      "avatar": "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80"
    },
    "reviews": [
      {
        "comment": "Incredible attention to detail. The sunset from the terrace was the highlight of our vacation.",
        "rating": 4.9,
        "author": {
          "name": "David K.",
          "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
        }
      },
      {
        "comment": "Exceeded all expectations! The photos do not do this stunning property justice.",
        "rating": 5,
        "author": {
          "name": "Emma W.",
          "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
        }
      }
    ]
  },
  {
    "title": "Resort Fun Villa with Lazy River & Mini-Golf",
    "description": "Experience unforgettable luxury at this premier play stay located in London, England. Features curated interior aesthetics, five-star guest amenities, and exceptional natural surroundings for the perfect getaway.",
    "image": {
      "url": "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
      "filename": "listing_55"
    },
    "gallery": [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80"
    ],
    "price": 390,
    "category": "Play",
    "location": "London, England",
    "country": "United Kingdom",
    "coordinates": {
      "lat": 51.5524,
      "lng": -0.1128
    },
    "amenities": [
      "Wifi",
      "Air conditioning",
      "Chef Kitchen",
      "Free parking",
      "Game Room",
      "Home Theater",
      "Pool Table",
      "Billiards"
    ],
    "host": {
      "name": "Liam Sterling",
      "isSuperhost": false,
      "avatar": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80"
    },
    "reviews": [
      {
        "comment": "Exceeded all expectations! The photos do not do this stunning property justice.",
        "rating": 5,
        "author": {
          "name": "Emma W.",
          "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
        }
      },
      {
        "comment": "A sanctuary of peace and modern architectural luxury. Waking up to these views is unforgettable.",
        "rating": 5,
        "author": {
          "name": "Marcus B.",
          "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
        }
      }
    ]
  },
  {
    "title": "Activity Lodge with Climbing Wall & Game Room",
    "description": "Experience unforgettable luxury at this premier play stay located in Cape Town, Western Cape. Features curated interior aesthetics, five-star guest amenities, and exceptional natural surroundings for the perfect getaway.",
    "image": {
      "url": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
      "filename": "listing_56"
    },
    "gallery": [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80"
    ],
    "price": 430,
    "category": "Play",
    "location": "Cape Town, Western Cape",
    "country": "South Africa",
    "coordinates": {
      "lat": -33.9699,
      "lng": 18.3791
    },
    "amenities": [
      "Wifi",
      "Air conditioning",
      "Chef Kitchen",
      "Free parking",
      "Game Room",
      "Home Theater",
      "Pool Table",
      "Billiards"
    ],
    "host": {
      "name": "Elena Rostova",
      "isSuperhost": true,
      "avatar": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80"
    },
    "reviews": [
      {
        "comment": "A sanctuary of peace and modern architectural luxury. Waking up to these views is unforgettable.",
        "rating": 5,
        "author": {
          "name": "Marcus B.",
          "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
        }
      },
      {
        "comment": "Spotlessly clean, flawless design, and warm hospitality. 10/10 recommendation!",
        "rating": 5,
        "author": {
          "name": "Sarah J.",
          "avatar": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
        }
      }
    ]
  },
  {
    "title": "Historic Scottish Highlands Castle Tower Suite",
    "description": "Experience unforgettable luxury at this premier castles stay located in Maui, Hawaii. Features curated interior aesthetics, five-star guest amenities, and exceptional natural surroundings for the perfect getaway.",
    "image": {
      "url": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
      "filename": "listing_57"
    },
    "gallery": [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80"
    ],
    "price": 480,
    "category": "Castles",
    "location": "Maui, Hawaii",
    "country": "United States",
    "coordinates": {
      "lat": 20.7684,
      "lng": -156.3319
    },
    "amenities": [
      "Wifi",
      "Air conditioning",
      "Chef Kitchen",
      "Free parking",
      "Wine Cellar",
      "Historic Gardens",
      "Fireplace"
    ],
    "host": {
      "name": "Jean-Pierre Laurent",
      "isSuperhost": false,
      "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
    },
    "reviews": [
      {
        "comment": "Spotlessly clean, flawless design, and warm hospitality. 10/10 recommendation!",
        "rating": 5,
        "author": {
          "name": "Sarah J.",
          "avatar": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
        }
      },
      {
        "comment": "Incredible attention to detail. The sunset from the terrace was the highlight of our vacation.",
        "rating": 4.9,
        "author": {
          "name": "David K.",
          "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
        }
      }
    ]
  },
  {
    "title": "12th Century French Château with Private Vineyard",
    "description": "Experience unforgettable luxury at this premier castles stay located in Sydney, New South Wales. Features curated interior aesthetics, five-star guest amenities, and exceptional natural surroundings for the perfect getaway.",
    "image": {
      "url": "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1200&q=80",
      "filename": "listing_58"
    },
    "gallery": [
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80"
    ],
    "price": 530,
    "category": "Castles",
    "location": "Sydney, New South Wales",
    "country": "Australia",
    "coordinates": {
      "lat": -33.8838,
      "lng": 151.2543
    },
    "amenities": [
      "Wifi",
      "Air conditioning",
      "Chef Kitchen",
      "Free parking",
      "Wine Cellar",
      "Historic Gardens",
      "Fireplace"
    ],
    "host": {
      "name": "Kenji Sato",
      "isSuperhost": true,
      "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
    },
    "reviews": [
      {
        "comment": "Incredible attention to detail. The sunset from the terrace was the highlight of our vacation.",
        "rating": 4.9,
        "author": {
          "name": "David K.",
          "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
        }
      },
      {
        "comment": "Exceeded all expectations! The photos do not do this stunning property justice.",
        "rating": 5,
        "author": {
          "name": "Emma W.",
          "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
        }
      }
    ]
  },
  {
    "title": "Tuscan Fortified Castle with Olive Grove",
    "description": "Experience unforgettable luxury at this premier castles stay located in Kyoto, Kansai. Features curated interior aesthetics, five-star guest amenities, and exceptional natural surroundings for the perfect getaway.",
    "image": {
      "url": "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&w=1200&q=80",
      "filename": "listing_59"
    },
    "gallery": [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&w=800&q=80"
    ],
    "price": 570,
    "category": "Castles",
    "location": "Kyoto, Kansai",
    "country": "Japan",
    "coordinates": {
      "lat": 35.0116,
      "lng": 135.7531
    },
    "amenities": [
      "Wifi",
      "Air conditioning",
      "Chef Kitchen",
      "Free parking",
      "Wine Cellar",
      "Historic Gardens",
      "Fireplace"
    ],
    "host": {
      "name": "Sophie Van Dijk",
      "isSuperhost": false,
      "avatar": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80"
    },
    "reviews": [
      {
        "comment": "Exceeded all expectations! The photos do not do this stunning property justice.",
        "rating": 5,
        "author": {
          "name": "Emma W.",
          "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
        }
      },
      {
        "comment": "A sanctuary of peace and modern architectural luxury. Waking up to these views is unforgettable.",
        "rating": 5,
        "author": {
          "name": "Marcus B.",
          "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
        }
      }
    ]
  },
  {
    "title": "Bavarian Royal Estate with Turret Bedrooms",
    "description": "Experience unforgettable luxury at this premier castles stay located in Banff, Alberta. Features curated interior aesthetics, five-star guest amenities, and exceptional natural surroundings for the perfect getaway.",
    "image": {
      "url": "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80",
      "filename": "listing_60"
    },
    "gallery": [
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80"
    ],
    "price": 620,
    "category": "Castles",
    "location": "Banff, Alberta",
    "country": "Canada",
    "coordinates": {
      "lat": 51.1934,
      "lng": -115.5408
    },
    "amenities": [
      "Wifi",
      "Air conditioning",
      "Chef Kitchen",
      "Free parking",
      "Wine Cellar",
      "Historic Gardens",
      "Fireplace"
    ],
    "host": {
      "name": "Marcus Vance",
      "isSuperhost": true,
      "avatar": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80"
    },
    "reviews": [
      {
        "comment": "A sanctuary of peace and modern architectural luxury. Waking up to these views is unforgettable.",
        "rating": 5,
        "author": {
          "name": "Marcus B.",
          "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
        }
      },
      {
        "comment": "Spotlessly clean, flawless design, and warm hospitality. 10/10 recommendation!",
        "rating": 5,
        "author": {
          "name": "Sarah J.",
          "avatar": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
        }
      }
    ]
  },
  {
    "title": "Irish Heritage Castle with Grand Hall & Moat",
    "description": "Experience unforgettable luxury at this premier castles stay located in Rovaniemi, Lapland. Features curated interior aesthetics, five-star guest amenities, and exceptional natural surroundings for the perfect getaway.",
    "image": {
      "url": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
      "filename": "listing_61"
    },
    "gallery": [
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
    ],
    "price": 670,
    "category": "Castles",
    "location": "Rovaniemi, Lapland",
    "country": "Finland",
    "coordinates": {
      "lat": 66.5339,
      "lng": 25.6994
    },
    "amenities": [
      "Wifi",
      "Air conditioning",
      "Chef Kitchen",
      "Free parking",
      "Wine Cellar",
      "Historic Gardens",
      "Fireplace"
    ],
    "host": {
      "name": "Heidi Sommer",
      "isSuperhost": false,
      "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
    },
    "reviews": [
      {
        "comment": "Spotlessly clean, flawless design, and warm hospitality. 10/10 recommendation!",
        "rating": 5,
        "author": {
          "name": "Sarah J.",
          "avatar": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
        }
      },
      {
        "comment": "Incredible attention to detail. The sunset from the terrace was the highlight of our vacation.",
        "rating": 4.9,
        "author": {
          "name": "David K.",
          "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
        }
      }
    ]
  },
  {
    "title": "Medieval Stone Keep with Courtyard Garden",
    "description": "Experience unforgettable luxury at this premier castles stay located in Portland, Oregon. Features curated interior aesthetics, five-star guest amenities, and exceptional natural surroundings for the perfect getaway.",
    "image": {
      "url": "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1200&q=80",
      "filename": "listing_62"
    },
    "gallery": [
      "https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80"
    ],
    "price": 710,
    "category": "Castles",
    "location": "Portland, Oregon",
    "country": "United States",
    "coordinates": {
      "lat": 45.5602,
      "lng": -122.6634
    },
    "amenities": [
      "Wifi",
      "Air conditioning",
      "Chef Kitchen",
      "Free parking",
      "Wine Cellar",
      "Historic Gardens",
      "Fireplace"
    ],
    "host": {
      "name": "Aria Thorne",
      "isSuperhost": true,
      "avatar": "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80"
    },
    "reviews": [
      {
        "comment": "Incredible attention to detail. The sunset from the terrace was the highlight of our vacation.",
        "rating": 4.9,
        "author": {
          "name": "David K.",
          "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
        }
      },
      {
        "comment": "Exceeded all expectations! The photos do not do this stunning property justice.",
        "rating": 5,
        "author": {
          "name": "Emma W.",
          "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
        }
      }
    ]
  },
  {
    "title": "Gothic Revival Manor in English Countryside",
    "description": "Experience unforgettable luxury at this premier castles stay located in New York, New York. Features curated interior aesthetics, five-star guest amenities, and exceptional natural surroundings for the perfect getaway.",
    "image": {
      "url": "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&w=1200&q=80",
      "filename": "listing_63"
    },
    "gallery": [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80"
    ],
    "price": 760,
    "category": "Castles",
    "location": "New York, New York",
    "country": "United States",
    "coordinates": {
      "lat": 40.6678,
      "lng": -74.051
    },
    "amenities": [
      "Wifi",
      "Air conditioning",
      "Chef Kitchen",
      "Free parking",
      "Wine Cellar",
      "Historic Gardens",
      "Fireplace"
    ],
    "host": {
      "name": "Liam Sterling",
      "isSuperhost": false,
      "avatar": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80"
    },
    "reviews": [
      {
        "comment": "Exceeded all expectations! The photos do not do this stunning property justice.",
        "rating": 5,
        "author": {
          "name": "Emma W.",
          "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
        }
      },
      {
        "comment": "A sanctuary of peace and modern architectural luxury. Waking up to these views is unforgettable.",
        "rating": 5,
        "author": {
          "name": "Marcus B.",
          "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
        }
      }
    ]
  },
  {
    "title": "Provençal Stone Palace with Lavender Courtyard",
    "description": "Experience unforgettable luxury at this premier castles stay located in Queenstown, Otago. Features curated interior aesthetics, five-star guest amenities, and exceptional natural surroundings for the perfect getaway.",
    "image": {
      "url": "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80",
      "filename": "listing_64"
    },
    "gallery": [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80"
    ],
    "price": 810,
    "category": "Castles",
    "location": "Queenstown, Otago",
    "country": "New Zealand",
    "coordinates": {
      "lat": -45.0612,
      "lng": 168.6626
    },
    "amenities": [
      "Wifi",
      "Air conditioning",
      "Chef Kitchen",
      "Free parking",
      "Wine Cellar",
      "Historic Gardens",
      "Fireplace"
    ],
    "host": {
      "name": "Elena Rostova",
      "isSuperhost": true,
      "avatar": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80"
    },
    "reviews": [
      {
        "comment": "A sanctuary of peace and modern architectural luxury. Waking up to these views is unforgettable.",
        "rating": 5,
        "author": {
          "name": "Marcus B.",
          "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
        }
      },
      {
        "comment": "Spotlessly clean, flawless design, and warm hospitality. 10/10 recommendation!",
        "rating": 5,
        "author": {
          "name": "Sarah J.",
          "avatar": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
        }
      }
    ]
  },
  {
    "title": "Baronial Cliffside Fortress with Sea Views",
    "description": "Experience unforgettable luxury at this premier castles stay located in Reykjavik, Capital Region. Features curated interior aesthetics, five-star guest amenities, and exceptional natural surroundings for the perfect getaway.",
    "image": {
      "url": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
      "filename": "listing_65"
    },
    "gallery": [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80"
    ],
    "price": 860,
    "category": "Castles",
    "location": "Reykjavik, Capital Region",
    "country": "Iceland",
    "coordinates": {
      "lat": 64.1316,
      "lng": -21.8976
    },
    "amenities": [
      "Wifi",
      "Air conditioning",
      "Chef Kitchen",
      "Free parking",
      "Wine Cellar",
      "Historic Gardens",
      "Fireplace"
    ],
    "host": {
      "name": "Jean-Pierre Laurent",
      "isSuperhost": false,
      "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
    },
    "reviews": [
      {
        "comment": "Spotlessly clean, flawless design, and warm hospitality. 10/10 recommendation!",
        "rating": 5,
        "author": {
          "name": "Sarah J.",
          "avatar": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
        }
      },
      {
        "comment": "Incredible attention to detail. The sunset from the terrace was the highlight of our vacation.",
        "rating": 4.9,
        "author": {
          "name": "David K.",
          "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
        }
      }
    ]
  },
  {
    "title": "Tuscan Horizon Pool Villa with Sunset Terrace",
    "description": "Experience unforgettable luxury at this premier amazing pools stay located in Aspen, Colorado. Features curated interior aesthetics, five-star guest amenities, and exceptional natural surroundings for the perfect getaway.",
    "image": {
      "url": "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80",
      "filename": "listing_66"
    },
    "gallery": [
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80"
    ],
    "price": 900,
    "category": "Amazing Pools",
    "location": "Aspen, Colorado",
    "country": "United States",
    "coordinates": {
      "lat": 39.1911,
      "lng": -106.8325
    },
    "amenities": [
      "Wifi",
      "Air conditioning",
      "Chef Kitchen",
      "Free parking",
      "Infinity Pool",
      "Hot tub",
      "Ocean View"
    ],
    "host": {
      "name": "Kenji Sato",
      "isSuperhost": true,
      "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
    },
    "reviews": [
      {
        "comment": "Incredible attention to detail. The sunset from the terrace was the highlight of our vacation.",
        "rating": 4.9,
        "author": {
          "name": "David K.",
          "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
        }
      },
      {
        "comment": "Exceeded all expectations! The photos do not do this stunning property justice.",
        "rating": 5,
        "author": {
          "name": "Emma W.",
          "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
        }
      }
    ]
  },
  {
    "title": "Santorini Caldera View Clifftop Infinity Pool",
    "description": "Experience unforgettable luxury at this premier amazing pools stay located in Paris, Île-de-France. Features curated interior aesthetics, five-star guest amenities, and exceptional natural surroundings for the perfect getaway.",
    "image": {
      "url": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
      "filename": "listing_67"
    },
    "gallery": [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&w=800&q=80"
    ],
    "price": 170,
    "category": "Amazing Pools",
    "location": "Paris, Île-de-France",
    "country": "France",
    "coordinates": {
      "lat": 48.8716,
      "lng": 2.3822
    },
    "amenities": [
      "Wifi",
      "Air conditioning",
      "Chef Kitchen",
      "Free parking",
      "Infinity Pool",
      "Hot tub",
      "Ocean View"
    ],
    "host": {
      "name": "Sophie Van Dijk",
      "isSuperhost": false,
      "avatar": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80"
    },
    "reviews": [
      {
        "comment": "Exceeded all expectations! The photos do not do this stunning property justice.",
        "rating": 5,
        "author": {
          "name": "Emma W.",
          "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
        }
      },
      {
        "comment": "A sanctuary of peace and modern architectural luxury. Waking up to these views is unforgettable.",
        "rating": 5,
        "author": {
          "name": "Marcus B.",
          "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
        }
      }
    ]
  },
  {
    "title": "Balinese Jungle Infinity Pool Overlooking Valley",
    "description": "Experience unforgettable luxury at this premier amazing pools stay located in Zermatt, Valais. Features curated interior aesthetics, five-star guest amenities, and exceptional natural surroundings for the perfect getaway.",
    "image": {
      "url": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "filename": "listing_68"
    },
    "gallery": [
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80"
    ],
    "price": 220,
    "category": "Amazing Pools",
    "location": "Zermatt, Valais",
    "country": "Switzerland",
    "coordinates": {
      "lat": 46.0063,
      "lng": 7.7191
    },
    "amenities": [
      "Wifi",
      "Air conditioning",
      "Chef Kitchen",
      "Free parking",
      "Infinity Pool",
      "Hot tub",
      "Ocean View"
    ],
    "host": {
      "name": "Marcus Vance",
      "isSuperhost": true,
      "avatar": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80"
    },
    "reviews": [
      {
        "comment": "A sanctuary of peace and modern architectural luxury. Waking up to these views is unforgettable.",
        "rating": 5,
        "author": {
          "name": "Marcus B.",
          "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
        }
      },
      {
        "comment": "Spotlessly clean, flawless design, and warm hospitality. 10/10 recommendation!",
        "rating": 5,
        "author": {
          "name": "Sarah J.",
          "avatar": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
        }
      }
    ]
  },
  {
    "title": "Malibu Cantilevered Glass-Bottom Pool House",
    "description": "Experience unforgettable luxury at this premier amazing pools stay located in Amalfi Coast, Campania. Features curated interior aesthetics, five-star guest amenities, and exceptional natural surroundings for the perfect getaway.",
    "image": {
      "url": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
      "filename": "listing_69"
    },
    "gallery": [
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
    ],
    "price": 260,
    "category": "Amazing Pools",
    "location": "Amalfi Coast, Campania",
    "country": "Italy",
    "coordinates": {
      "lat": 40.679,
      "lng": 14.6177
    },
    "amenities": [
      "Wifi",
      "Air conditioning",
      "Chef Kitchen",
      "Free parking",
      "Infinity Pool",
      "Hot tub",
      "Ocean View"
    ],
    "host": {
      "name": "Heidi Sommer",
      "isSuperhost": false,
      "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
    },
    "reviews": [
      {
        "comment": "Spotlessly clean, flawless design, and warm hospitality. 10/10 recommendation!",
        "rating": 5,
        "author": {
          "name": "Sarah J.",
          "avatar": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
        }
      },
      {
        "comment": "Incredible attention to detail. The sunset from the terrace was the highlight of our vacation.",
        "rating": 4.9,
        "author": {
          "name": "David K.",
          "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
        }
      }
    ]
  },
  {
    "title": "Costa Rican Oasis with Three-Tier Waterfall Pool",
    "description": "Experience unforgettable luxury at this premier amazing pools stay located in Joshua Tree, California. Features curated interior aesthetics, five-star guest amenities, and exceptional natural surroundings for the perfect getaway.",
    "image": {
      "url": "https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&w=1200&q=80",
      "filename": "listing_70"
    },
    "gallery": [
      "https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80"
    ],
    "price": 310,
    "category": "Amazing Pools",
    "location": "Joshua Tree, California",
    "country": "United States",
    "coordinates": {
      "lat": 34.0897,
      "lng": -116.3581
    },
    "amenities": [
      "Wifi",
      "Air conditioning",
      "Chef Kitchen",
      "Free parking",
      "Infinity Pool",
      "Hot tub",
      "Ocean View"
    ],
    "host": {
      "name": "Aria Thorne",
      "isSuperhost": true,
      "avatar": "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80"
    },
    "reviews": [
      {
        "comment": "Incredible attention to detail. The sunset from the terrace was the highlight of our vacation.",
        "rating": 4.9,
        "author": {
          "name": "David K.",
          "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
        }
      },
      {
        "comment": "Exceeded all expectations! The photos do not do this stunning property justice.",
        "rating": 5,
        "author": {
          "name": "Emma W.",
          "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
        }
      }
    ]
  },
  {
    "title": "Cabo Oceanfront Pool Villa with Swim-up Bar",
    "description": "Experience unforgettable luxury at this premier amazing pools stay located in Orlando, Florida. Features curated interior aesthetics, five-star guest amenities, and exceptional natural surroundings for the perfect getaway.",
    "image": {
      "url": "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80",
      "filename": "listing_71"
    },
    "gallery": [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80"
    ],
    "price": 360,
    "category": "Amazing Pools",
    "location": "Orlando, Florida",
    "country": "United States",
    "coordinates": {
      "lat": 28.5083,
      "lng": -81.3792
    },
    "amenities": [
      "Wifi",
      "Air conditioning",
      "Chef Kitchen",
      "Free parking",
      "Infinity Pool",
      "Hot tub",
      "Ocean View"
    ],
    "host": {
      "name": "Liam Sterling",
      "isSuperhost": false,
      "avatar": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80"
    },
    "reviews": [
      {
        "comment": "Exceeded all expectations! The photos do not do this stunning property justice.",
        "rating": 5,
        "author": {
          "name": "Emma W.",
          "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
        }
      },
      {
        "comment": "A sanctuary of peace and modern architectural luxury. Waking up to these views is unforgettable.",
        "rating": 5,
        "author": {
          "name": "Marcus B.",
          "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
        }
      }
    ]
  },
  {
    "title": "Greek Island White Villa with Saltwater Pool",
    "description": "Experience unforgettable luxury at this premier amazing pools stay located in Rome, Lazio. Features curated interior aesthetics, five-star guest amenities, and exceptional natural surroundings for the perfect getaway.",
    "image": {
      "url": "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80",
      "filename": "listing_72"
    },
    "gallery": [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80"
    ],
    "price": 400,
    "category": "Amazing Pools",
    "location": "Rome, Lazio",
    "country": "Italy",
    "coordinates": {
      "lat": 41.8878,
      "lng": 12.5414
    },
    "amenities": [
      "Wifi",
      "Air conditioning",
      "Chef Kitchen",
      "Free parking",
      "Infinity Pool",
      "Hot tub",
      "Ocean View"
    ],
    "host": {
      "name": "Elena Rostova",
      "isSuperhost": true,
      "avatar": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80"
    },
    "reviews": [
      {
        "comment": "A sanctuary of peace and modern architectural luxury. Waking up to these views is unforgettable.",
        "rating": 5,
        "author": {
          "name": "Marcus B.",
          "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
        }
      },
      {
        "comment": "Spotlessly clean, flawless design, and warm hospitality. 10/10 recommendation!",
        "rating": 5,
        "author": {
          "name": "Sarah J.",
          "avatar": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
        }
      }
    ]
  },
  {
    "title": "Amalfi Clifftop Residence with Heated Cave Pool",
    "description": "Experience unforgettable luxury at this premier amazing pools stay located in Tulum, Quintana Roo. Features curated interior aesthetics, five-star guest amenities, and exceptional natural surroundings for the perfect getaway.",
    "image": {
      "url": "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80",
      "filename": "listing_73"
    },
    "gallery": [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80"
    ],
    "price": 450,
    "category": "Amazing Pools",
    "location": "Tulum, Quintana Roo",
    "country": "Mexico",
    "coordinates": {
      "lat": 20.2114,
      "lng": -87.4804
    },
    "amenities": [
      "Wifi",
      "Air conditioning",
      "Chef Kitchen",
      "Free parking",
      "Infinity Pool",
      "Hot tub",
      "Ocean View"
    ],
    "host": {
      "name": "Jean-Pierre Laurent",
      "isSuperhost": false,
      "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
    },
    "reviews": [
      {
        "comment": "Spotlessly clean, flawless design, and warm hospitality. 10/10 recommendation!",
        "rating": 5,
        "author": {
          "name": "Sarah J.",
          "avatar": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
        }
      },
      {
        "comment": "Incredible attention to detail. The sunset from the terrace was the highlight of our vacation.",
        "rating": 4.9,
        "author": {
          "name": "David K.",
          "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
        }
      }
    ]
  },
  {
    "title": "Desert Palm Springs Retreat with Zero-Edge Pool",
    "description": "Experience unforgettable luxury at this premier amazing pools stay located in Lake Como, Lombardy. Features curated interior aesthetics, five-star guest amenities, and exceptional natural surroundings for the perfect getaway.",
    "image": {
      "url": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
      "filename": "listing_74"
    },
    "gallery": [
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80"
    ],
    "price": 500,
    "category": "Amazing Pools",
    "location": "Lake Como, Lombardy",
    "country": "Italy",
    "coordinates": {
      "lat": 46.0047,
      "lng": 9.2872
    },
    "amenities": [
      "Wifi",
      "Air conditioning",
      "Chef Kitchen",
      "Free parking",
      "Infinity Pool",
      "Hot tub",
      "Ocean View"
    ],
    "host": {
      "name": "Kenji Sato",
      "isSuperhost": true,
      "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
    },
    "reviews": [
      {
        "comment": "Incredible attention to detail. The sunset from the terrace was the highlight of our vacation.",
        "rating": 4.9,
        "author": {
          "name": "David K.",
          "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
        }
      },
      {
        "comment": "Exceeded all expectations! The photos do not do this stunning property justice.",
        "rating": 5,
        "author": {
          "name": "Emma W.",
          "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
        }
      }
    ]
  },
  {
    "title": "Joshua Tree Stargazing Geodesic Dome",
    "description": "Experience unforgettable luxury at this premier camping stay located in Malibu, California. Features curated interior aesthetics, five-star guest amenities, and exceptional natural surroundings for the perfect getaway.",
    "image": {
      "url": "https://images.unsplash.com/photo-1508873696983-2df5293cb325?auto=format&fit=crop&w=1200&q=80",
      "filename": "listing_75"
    },
    "gallery": [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&w=800&q=80"
    ],
    "price": 550,
    "category": "Camping",
    "location": "Malibu, California",
    "country": "United States",
    "coordinates": {
      "lat": 34.0559,
      "lng": -118.8098
    },
    "amenities": [
      "Wifi",
      "Air conditioning",
      "Chef Kitchen",
      "Free parking",
      "Stargazing Deck",
      "Fire pit",
      "Hammock"
    ],
    "host": {
      "name": "Sophie Van Dijk",
      "isSuperhost": false,
      "avatar": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80"
    },
    "reviews": [
      {
        "comment": "Exceeded all expectations! The photos do not do this stunning property justice.",
        "rating": 5,
        "author": {
          "name": "Emma W.",
          "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
        }
      },
      {
        "comment": "A sanctuary of peace and modern architectural luxury. Waking up to these views is unforgettable.",
        "rating": 5,
        "author": {
          "name": "Marcus B.",
          "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
        }
      }
    ]
  },
  {
    "title": "Yosemite Luxury Safari Canvas Tent with Fireplace",
    "description": "Experience unforgettable luxury at this premier camping stay located in Oia, Santorini. Features curated interior aesthetics, five-star guest amenities, and exceptional natural surroundings for the perfect getaway.",
    "image": {
      "url": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
      "filename": "listing_76"
    },
    "gallery": [
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80"
    ],
    "price": 590,
    "category": "Camping",
    "location": "Oia, Santorini",
    "country": "Greece",
    "coordinates": {
      "lat": 36.5068,
      "lng": 25.3903
    },
    "amenities": [
      "Wifi",
      "Air conditioning",
      "Chef Kitchen",
      "Free parking",
      "Stargazing Deck",
      "Fire pit",
      "Hammock"
    ],
    "host": {
      "name": "Marcus Vance",
      "isSuperhost": true,
      "avatar": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80"
    },
    "reviews": [
      {
        "comment": "A sanctuary of peace and modern architectural luxury. Waking up to these views is unforgettable.",
        "rating": 5,
        "author": {
          "name": "Marcus B.",
          "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
        }
      },
      {
        "comment": "Spotlessly clean, flawless design, and warm hospitality. 10/10 recommendation!",
        "rating": 5,
        "author": {
          "name": "Sarah J.",
          "avatar": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
        }
      }
    ]
  },
  {
    "title": "Utah Red Rocks Glamping Yurt with King Bed",
    "description": "Experience unforgettable luxury at this premier camping stay located in Ubud, Bali. Features curated interior aesthetics, five-star guest amenities, and exceptional natural surroundings for the perfect getaway.",
    "image": {
      "url": "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80",
      "filename": "listing_77"
    },
    "gallery": [
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
    ],
    "price": 640,
    "category": "Camping",
    "location": "Ubud, Bali",
    "country": "Indonesia",
    "coordinates": {
      "lat": -8.5519,
      "lng": 115.2175
    },
    "amenities": [
      "Wifi",
      "Air conditioning",
      "Chef Kitchen",
      "Free parking",
      "Stargazing Deck",
      "Fire pit",
      "Hammock"
    ],
    "host": {
      "name": "Heidi Sommer",
      "isSuperhost": false,
      "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
    },
    "reviews": [
      {
        "comment": "Spotlessly clean, flawless design, and warm hospitality. 10/10 recommendation!",
        "rating": 5,
        "author": {
          "name": "Sarah J.",
          "avatar": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
        }
      },
      {
        "comment": "Incredible attention to detail. The sunset from the terrace was the highlight of our vacation.",
        "rating": 4.9,
        "author": {
          "name": "David K.",
          "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
        }
      }
    ]
  },
  {
    "title": "Patagonian Eco-Dome with Andes Mountain View",
    "description": "Experience unforgettable luxury at this premier camping stay located in Gordes, Provence. Features curated interior aesthetics, five-star guest amenities, and exceptional natural surroundings for the perfect getaway.",
    "image": {
      "url": "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80",
      "filename": "listing_78"
    },
    "gallery": [
      "https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80"
    ],
    "price": 690,
    "category": "Camping",
    "location": "Gordes, Provence",
    "country": "France",
    "coordinates": {
      "lat": 43.8814,
      "lng": 5.2003
    },
    "amenities": [
      "Wifi",
      "Air conditioning",
      "Chef Kitchen",
      "Free parking",
      "Stargazing Deck",
      "Fire pit",
      "Hammock"
    ],
    "host": {
      "name": "Aria Thorne",
      "isSuperhost": true,
      "avatar": "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80"
    },
    "reviews": [
      {
        "comment": "Incredible attention to detail. The sunset from the terrace was the highlight of our vacation.",
        "rating": 4.9,
        "author": {
          "name": "David K.",
          "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
        }
      },
      {
        "comment": "Exceeded all expectations! The photos do not do this stunning property justice.",
        "rating": 5,
        "author": {
          "name": "Emma W.",
          "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
        }
      }
    ]
  },
  {
    "title": "Icelandic Geothermal Camp with Hot Springs",
    "description": "Experience unforgettable luxury at this premier camping stay located in Inverness, Scottish Highlands. Features curated interior aesthetics, five-star guest amenities, and exceptional natural surroundings for the perfect getaway.",
    "image": {
      "url": "https://images.unsplash.com/photo-1508873696983-2df5293cb325?auto=format&fit=crop&w=1200&q=80",
      "filename": "listing_79"
    },
    "gallery": [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80"
    ],
    "price": 730,
    "category": "Camping",
    "location": "Inverness, Scottish Highlands",
    "country": "United Kingdom",
    "coordinates": {
      "lat": 57.4628,
      "lng": -4.1797
    },
    "amenities": [
      "Wifi",
      "Air conditioning",
      "Chef Kitchen",
      "Free parking",
      "Stargazing Deck",
      "Fire pit",
      "Hammock"
    ],
    "host": {
      "name": "Liam Sterling",
      "isSuperhost": false,
      "avatar": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80"
    },
    "reviews": [
      {
        "comment": "Exceeded all expectations! The photos do not do this stunning property justice.",
        "rating": 5,
        "author": {
          "name": "Emma W.",
          "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
        }
      },
      {
        "comment": "A sanctuary of peace and modern architectural luxury. Waking up to these views is unforgettable.",
        "rating": 5,
        "author": {
          "name": "Marcus B.",
          "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
        }
      }
    ]
  },
  {
    "title": "Moroccan Desert Luxury Nomad Tent with Berber Rugs",
    "description": "Experience unforgettable luxury at this premier camping stay located in London, England. Features curated interior aesthetics, five-star guest amenities, and exceptional natural surroundings for the perfect getaway.",
    "image": {
      "url": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
      "filename": "listing_80"
    },
    "gallery": [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80"
    ],
    "price": 780,
    "category": "Camping",
    "location": "London, England",
    "country": "United Kingdom",
    "coordinates": {
      "lat": 51.5074,
      "lng": -0.1428
    },
    "amenities": [
      "Wifi",
      "Air conditioning",
      "Chef Kitchen",
      "Free parking",
      "Stargazing Deck",
      "Fire pit",
      "Hammock"
    ],
    "host": {
      "name": "Elena Rostova",
      "isSuperhost": true,
      "avatar": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80"
    },
    "reviews": [
      {
        "comment": "A sanctuary of peace and modern architectural luxury. Waking up to these views is unforgettable.",
        "rating": 5,
        "author": {
          "name": "Marcus B.",
          "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
        }
      },
      {
        "comment": "Spotlessly clean, flawless design, and warm hospitality. 10/10 recommendation!",
        "rating": 5,
        "author": {
          "name": "Sarah J.",
          "avatar": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
        }
      }
    ]
  },
  {
    "title": "Pacific Forest Glamping Yurt with Cedar Hot Tub",
    "description": "Experience unforgettable luxury at this premier camping stay located in Cape Town, Western Cape. Features curated interior aesthetics, five-star guest amenities, and exceptional natural surroundings for the perfect getaway.",
    "image": {
      "url": "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80",
      "filename": "listing_81"
    },
    "gallery": [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80"
    ],
    "price": 830,
    "category": "Camping",
    "location": "Cape Town, Western Cape",
    "country": "South Africa",
    "coordinates": {
      "lat": -33.9099,
      "lng": 18.4541
    },
    "amenities": [
      "Wifi",
      "Air conditioning",
      "Chef Kitchen",
      "Free parking",
      "Stargazing Deck",
      "Fire pit",
      "Hammock"
    ],
    "host": {
      "name": "Jean-Pierre Laurent",
      "isSuperhost": false,
      "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
    },
    "reviews": [
      {
        "comment": "Spotlessly clean, flawless design, and warm hospitality. 10/10 recommendation!",
        "rating": 5,
        "author": {
          "name": "Sarah J.",
          "avatar": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
        }
      },
      {
        "comment": "Incredible attention to detail. The sunset from the terrace was the highlight of our vacation.",
        "rating": 4.9,
        "author": {
          "name": "David K.",
          "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
        }
      }
    ]
  },
  {
    "title": "Sedona Red Rock Canyon Glamping Retreat",
    "description": "Experience unforgettable luxury at this premier camping stay located in Maui, Hawaii. Features curated interior aesthetics, five-star guest amenities, and exceptional natural surroundings for the perfect getaway.",
    "image": {
      "url": "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80",
      "filename": "listing_82"
    },
    "gallery": [
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80"
    ],
    "price": 870,
    "category": "Camping",
    "location": "Maui, Hawaii",
    "country": "United States",
    "coordinates": {
      "lat": 20.8284,
      "lng": -156.3619
    },
    "amenities": [
      "Wifi",
      "Air conditioning",
      "Chef Kitchen",
      "Free parking",
      "Stargazing Deck",
      "Fire pit",
      "Hammock"
    ],
    "host": {
      "name": "Kenji Sato",
      "isSuperhost": true,
      "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
    },
    "reviews": [
      {
        "comment": "Incredible attention to detail. The sunset from the terrace was the highlight of our vacation.",
        "rating": 4.9,
        "author": {
          "name": "David K.",
          "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
        }
      },
      {
        "comment": "Exceeded all expectations! The photos do not do this stunning property justice.",
        "rating": 5,
        "author": {
          "name": "Emma W.",
          "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
        }
      }
    ]
  },
  {
    "title": "Serengeti Style Eco-Pavilion with Wildlife Views",
    "description": "Experience unforgettable luxury at this premier camping stay located in Sydney, New South Wales. Features curated interior aesthetics, five-star guest amenities, and exceptional natural surroundings for the perfect getaway.",
    "image": {
      "url": "https://images.unsplash.com/photo-1508873696983-2df5293cb325?auto=format&fit=crop&w=1200&q=80",
      "filename": "listing_83"
    },
    "gallery": [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&w=800&q=80"
    ],
    "price": 140,
    "category": "Camping",
    "location": "Sydney, New South Wales",
    "country": "Australia",
    "coordinates": {
      "lat": -33.8238,
      "lng": 151.2243
    },
    "amenities": [
      "Wifi",
      "Air conditioning",
      "Chef Kitchen",
      "Free parking",
      "Stargazing Deck",
      "Fire pit",
      "Hammock"
    ],
    "host": {
      "name": "Sophie Van Dijk",
      "isSuperhost": false,
      "avatar": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80"
    },
    "reviews": [
      {
        "comment": "Exceeded all expectations! The photos do not do this stunning property justice.",
        "rating": 5,
        "author": {
          "name": "Emma W.",
          "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
        }
      },
      {
        "comment": "A sanctuary of peace and modern architectural luxury. Waking up to these views is unforgettable.",
        "rating": 5,
        "author": {
          "name": "Marcus B.",
          "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
        }
      }
    ]
  },
  {
    "title": "Provence Lavender Farmhouse with Stone Fireplace",
    "description": "Experience unforgettable luxury at this premier farms stay located in Kyoto, Kansai. Features curated interior aesthetics, five-star guest amenities, and exceptional natural surroundings for the perfect getaway.",
    "image": {
      "url": "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80",
      "filename": "listing_84"
    },
    "gallery": [
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80"
    ],
    "price": 190,
    "category": "Farms",
    "location": "Kyoto, Kansai",
    "country": "Japan",
    "coordinates": {
      "lat": 34.9666,
      "lng": 135.7231
    },
    "amenities": [
      "Wifi",
      "Air conditioning",
      "Chef Kitchen",
      "Free parking",
      "Organic Garden",
      "Farm-to-table Kitchen",
      "Fireplace"
    ],
    "host": {
      "name": "Marcus Vance",
      "isSuperhost": true,
      "avatar": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80"
    },
    "reviews": [
      {
        "comment": "A sanctuary of peace and modern architectural luxury. Waking up to these views is unforgettable.",
        "rating": 5,
        "author": {
          "name": "Marcus B.",
          "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
        }
      },
      {
        "comment": "Spotlessly clean, flawless design, and warm hospitality. 10/10 recommendation!",
        "rating": 5,
        "author": {
          "name": "Sarah J.",
          "avatar": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
        }
      }
    ]
  },
  {
    "title": "Tuscan Olive Grove Farm Villa with Wine Cellar",
    "description": "Experience unforgettable luxury at this premier farms stay located in Banff, Alberta. Features curated interior aesthetics, five-star guest amenities, and exceptional natural surroundings for the perfect getaway.",
    "image": {
      "url": "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&w=1200&q=80",
      "filename": "listing_85"
    },
    "gallery": [
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
    ],
    "price": 240,
    "category": "Farms",
    "location": "Banff, Alberta",
    "country": "Canada",
    "coordinates": {
      "lat": 51.1484,
      "lng": -115.5708
    },
    "amenities": [
      "Wifi",
      "Air conditioning",
      "Chef Kitchen",
      "Free parking",
      "Organic Garden",
      "Farm-to-table Kitchen",
      "Fireplace"
    ],
    "host": {
      "name": "Heidi Sommer",
      "isSuperhost": false,
      "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
    },
    "reviews": [
      {
        "comment": "Spotlessly clean, flawless design, and warm hospitality. 10/10 recommendation!",
        "rating": 5,
        "author": {
          "name": "Sarah J.",
          "avatar": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
        }
      },
      {
        "comment": "Incredible attention to detail. The sunset from the terrace was the highlight of our vacation.",
        "rating": 4.9,
        "author": {
          "name": "David K.",
          "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
        }
      }
    ]
  },
  {
    "title": "Sonoma Valley Modern Vineyard Farmstead",
    "description": "Experience unforgettable luxury at this premier farms stay located in Rovaniemi, Lapland. Features curated interior aesthetics, five-star guest amenities, and exceptional natural surroundings for the perfect getaway.",
    "image": {
      "url": "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1200&q=80",
      "filename": "listing_86"
    },
    "gallery": [
      "https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80"
    ],
    "price": 280,
    "category": "Farms",
    "location": "Rovaniemi, Lapland",
    "country": "Finland",
    "coordinates": {
      "lat": 66.4889,
      "lng": 25.7744
    },
    "amenities": [
      "Wifi",
      "Air conditioning",
      "Chef Kitchen",
      "Free parking",
      "Organic Garden",
      "Farm-to-table Kitchen",
      "Fireplace"
    ],
    "host": {
      "name": "Aria Thorne",
      "isSuperhost": true,
      "avatar": "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80"
    },
    "reviews": [
      {
        "comment": "Incredible attention to detail. The sunset from the terrace was the highlight of our vacation.",
        "rating": 4.9,
        "author": {
          "name": "David K.",
          "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
        }
      },
      {
        "comment": "Exceeded all expectations! The photos do not do this stunning property justice.",
        "rating": 5,
        "author": {
          "name": "Emma W.",
          "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
        }
      }
    ]
  },
  {
    "title": "Organic Alpine Dairy Chalet with Flower Meadows",
    "description": "Experience unforgettable luxury at this premier farms stay located in Portland, Oregon. Features curated interior aesthetics, five-star guest amenities, and exceptional natural surroundings for the perfect getaway.",
    "image": {
      "url": "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
      "filename": "listing_87"
    },
    "gallery": [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80"
    ],
    "price": 330,
    "category": "Farms",
    "location": "Portland, Oregon",
    "country": "United States",
    "coordinates": {
      "lat": 45.5152,
      "lng": -122.6934
    },
    "amenities": [
      "Wifi",
      "Air conditioning",
      "Chef Kitchen",
      "Free parking",
      "Organic Garden",
      "Farm-to-table Kitchen",
      "Fireplace"
    ],
    "host": {
      "name": "Liam Sterling",
      "isSuperhost": false,
      "avatar": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80"
    },
    "reviews": [
      {
        "comment": "Exceeded all expectations! The photos do not do this stunning property justice.",
        "rating": 5,
        "author": {
          "name": "Emma W.",
          "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
        }
      },
      {
        "comment": "A sanctuary of peace and modern architectural luxury. Waking up to these views is unforgettable.",
        "rating": 5,
        "author": {
          "name": "Marcus B.",
          "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
        }
      }
    ]
  },
  {
    "title": "Kyoto Tea Plantation Heritage Farmhouse",
    "description": "Experience unforgettable luxury at this premier farms stay located in New York, New York. Features curated interior aesthetics, five-star guest amenities, and exceptional natural surroundings for the perfect getaway.",
    "image": {
      "url": "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80",
      "filename": "listing_88"
    },
    "gallery": [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80"
    ],
    "price": 380,
    "category": "Farms",
    "location": "New York, New York",
    "country": "United States",
    "coordinates": {
      "lat": 40.7278,
      "lng": -73.976
    },
    "amenities": [
      "Wifi",
      "Air conditioning",
      "Chef Kitchen",
      "Free parking",
      "Organic Garden",
      "Farm-to-table Kitchen",
      "Fireplace"
    ],
    "host": {
      "name": "Elena Rostova",
      "isSuperhost": true,
      "avatar": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80"
    },
    "reviews": [
      {
        "comment": "A sanctuary of peace and modern architectural luxury. Waking up to these views is unforgettable.",
        "rating": 5,
        "author": {
          "name": "Marcus B.",
          "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
        }
      },
      {
        "comment": "Spotlessly clean, flawless design, and warm hospitality. 10/10 recommendation!",
        "rating": 5,
        "author": {
          "name": "Sarah J.",
          "avatar": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
        }
      }
    ]
  },
  {
    "title": "Cotswolds Honey-Stone Farm Cottage with Garden",
    "description": "Experience unforgettable luxury at this premier farms stay located in Queenstown, Otago. Features curated interior aesthetics, five-star guest amenities, and exceptional natural surroundings for the perfect getaway.",
    "image": {
      "url": "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&w=1200&q=80",
      "filename": "listing_89"
    },
    "gallery": [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80"
    ],
    "price": 420,
    "category": "Farms",
    "location": "Queenstown, Otago",
    "country": "New Zealand",
    "coordinates": {
      "lat": -45.0012,
      "lng": 168.6326
    },
    "amenities": [
      "Wifi",
      "Air conditioning",
      "Chef Kitchen",
      "Free parking",
      "Organic Garden",
      "Farm-to-table Kitchen",
      "Fireplace"
    ],
    "host": {
      "name": "Jean-Pierre Laurent",
      "isSuperhost": false,
      "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
    },
    "reviews": [
      {
        "comment": "Spotlessly clean, flawless design, and warm hospitality. 10/10 recommendation!",
        "rating": 5,
        "author": {
          "name": "Sarah J.",
          "avatar": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
        }
      },
      {
        "comment": "Incredible attention to detail. The sunset from the terrace was the highlight of our vacation.",
        "rating": 4.9,
        "author": {
          "name": "David K.",
          "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
        }
      }
    ]
  },
  {
    "title": "Irish Emerald Country Farmhouse with Sheep Pastures",
    "description": "Experience unforgettable luxury at this premier farms stay located in Reykjavik, Capital Region. Features curated interior aesthetics, five-star guest amenities, and exceptional natural surroundings for the perfect getaway.",
    "image": {
      "url": "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1200&q=80",
      "filename": "listing_90"
    },
    "gallery": [
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80"
    ],
    "price": 470,
    "category": "Farms",
    "location": "Reykjavik, Capital Region",
    "country": "Iceland",
    "coordinates": {
      "lat": 64.1916,
      "lng": -21.9276
    },
    "amenities": [
      "Wifi",
      "Air conditioning",
      "Chef Kitchen",
      "Free parking",
      "Organic Garden",
      "Farm-to-table Kitchen",
      "Fireplace"
    ],
    "host": {
      "name": "Kenji Sato",
      "isSuperhost": true,
      "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
    },
    "reviews": [
      {
        "comment": "Incredible attention to detail. The sunset from the terrace was the highlight of our vacation.",
        "rating": 4.9,
        "author": {
          "name": "David K.",
          "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
        }
      },
      {
        "comment": "Exceeded all expectations! The photos do not do this stunning property justice.",
        "rating": 5,
        "author": {
          "name": "Emma W.",
          "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
        }
      }
    ]
  },
  {
    "title": "Andalusian Hacienda with Citrus Orchards",
    "description": "Experience unforgettable luxury at this premier farms stay located in Aspen, Colorado. Features curated interior aesthetics, five-star guest amenities, and exceptional natural surroundings for the perfect getaway.",
    "image": {
      "url": "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
      "filename": "listing_91"
    },
    "gallery": [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&w=800&q=80"
    ],
    "price": 520,
    "category": "Farms",
    "location": "Aspen, Colorado",
    "country": "United States",
    "coordinates": {
      "lat": 39.1461,
      "lng": -106.8625
    },
    "amenities": [
      "Wifi",
      "Air conditioning",
      "Chef Kitchen",
      "Free parking",
      "Organic Garden",
      "Farm-to-table Kitchen",
      "Fireplace"
    ],
    "host": {
      "name": "Sophie Van Dijk",
      "isSuperhost": false,
      "avatar": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80"
    },
    "reviews": [
      {
        "comment": "Exceeded all expectations! The photos do not do this stunning property justice.",
        "rating": 5,
        "author": {
          "name": "Emma W.",
          "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
        }
      },
      {
        "comment": "A sanctuary of peace and modern architectural luxury. Waking up to these views is unforgettable.",
        "rating": 5,
        "author": {
          "name": "Marcus B.",
          "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
        }
      }
    ]
  },
  {
    "title": "Tasmanian Berry Farm Haven with Wood Sauna",
    "description": "Experience unforgettable luxury at this premier farms stay located in Paris, Île-de-France. Features curated interior aesthetics, five-star guest amenities, and exceptional natural surroundings for the perfect getaway.",
    "image": {
      "url": "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80",
      "filename": "listing_92"
    },
    "gallery": [
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80"
    ],
    "price": 560,
    "category": "Farms",
    "location": "Paris, Île-de-France",
    "country": "France",
    "coordinates": {
      "lat": 48.8266,
      "lng": 2.3522
    },
    "amenities": [
      "Wifi",
      "Air conditioning",
      "Chef Kitchen",
      "Free parking",
      "Organic Garden",
      "Farm-to-table Kitchen",
      "Fireplace"
    ],
    "host": {
      "name": "Marcus Vance",
      "isSuperhost": true,
      "avatar": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80"
    },
    "reviews": [
      {
        "comment": "A sanctuary of peace and modern architectural luxury. Waking up to these views is unforgettable.",
        "rating": 5,
        "author": {
          "name": "Marcus B.",
          "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
        }
      },
      {
        "comment": "Spotlessly clean, flawless design, and warm hospitality. 10/10 recommendation!",
        "rating": 5,
        "author": {
          "name": "Sarah J.",
          "avatar": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
        }
      }
    ]
  },
  {
    "title": "Aurora Glass Igloo with Heated Roof & Stargazing",
    "description": "Experience unforgettable luxury at this premier arctic stay located in Zermatt, Valais. Features curated interior aesthetics, five-star guest amenities, and exceptional natural surroundings for the perfect getaway.",
    "image": {
      "url": "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1200&q=80",
      "filename": "listing_93"
    },
    "gallery": [
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
    ],
    "price": 610,
    "category": "Arctic",
    "location": "Zermatt, Valais",
    "country": "Switzerland",
    "coordinates": {
      "lat": 45.9613,
      "lng": 7.7941
    },
    "amenities": [
      "Wifi",
      "Air conditioning",
      "Chef Kitchen",
      "Free parking",
      "Sauna",
      "Fireplace",
      "Mountain View"
    ],
    "host": {
      "name": "Heidi Sommer",
      "isSuperhost": false,
      "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
    },
    "reviews": [
      {
        "comment": "Spotlessly clean, flawless design, and warm hospitality. 10/10 recommendation!",
        "rating": 5,
        "author": {
          "name": "Sarah J.",
          "avatar": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
        }
      },
      {
        "comment": "Incredible attention to detail. The sunset from the terrace was the highlight of our vacation.",
        "rating": 4.9,
        "author": {
          "name": "David K.",
          "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
        }
      }
    ]
  },
  {
    "title": "Lofoten Islands Traditional Rorbu by the Arctic Sea",
    "description": "Experience unforgettable luxury at this premier arctic stay located in Amalfi Coast, Campania. Features curated interior aesthetics, five-star guest amenities, and exceptional natural surroundings for the perfect getaway.",
    "image": {
      "url": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
      "filename": "listing_94"
    },
    "gallery": [
      "https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80"
    ],
    "price": 660,
    "category": "Arctic",
    "location": "Amalfi Coast, Campania",
    "country": "Italy",
    "coordinates": {
      "lat": 40.634,
      "lng": 14.5877
    },
    "amenities": [
      "Wifi",
      "Air conditioning",
      "Chef Kitchen",
      "Free parking",
      "Sauna",
      "Fireplace",
      "Mountain View"
    ],
    "host": {
      "name": "Aria Thorne",
      "isSuperhost": true,
      "avatar": "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80"
    },
    "reviews": [
      {
        "comment": "Incredible attention to detail. The sunset from the terrace was the highlight of our vacation.",
        "rating": 4.9,
        "author": {
          "name": "David K.",
          "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
        }
      },
      {
        "comment": "Exceeded all expectations! The photos do not do this stunning property justice.",
        "rating": 5,
        "author": {
          "name": "Emma W.",
          "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
        }
      }
    ]
  },
  {
    "title": "Svalbard Polar Expedition Lodge with Sauna",
    "description": "Experience unforgettable luxury at this premier arctic stay located in Joshua Tree, California. Features curated interior aesthetics, five-star guest amenities, and exceptional natural surroundings for the perfect getaway.",
    "image": {
      "url": "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80",
      "filename": "listing_95"
    },
    "gallery": [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80"
    ],
    "price": 710,
    "category": "Arctic",
    "location": "Joshua Tree, California",
    "country": "United States",
    "coordinates": {
      "lat": 34.1497,
      "lng": -116.2831
    },
    "amenities": [
      "Wifi",
      "Air conditioning",
      "Chef Kitchen",
      "Free parking",
      "Sauna",
      "Fireplace",
      "Mountain View"
    ],
    "host": {
      "name": "Liam Sterling",
      "isSuperhost": false,
      "avatar": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80"
    },
    "reviews": [
      {
        "comment": "Exceeded all expectations! The photos do not do this stunning property justice.",
        "rating": 5,
        "author": {
          "name": "Emma W.",
          "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
        }
      },
      {
        "comment": "A sanctuary of peace and modern architectural luxury. Waking up to these views is unforgettable.",
        "rating": 5,
        "author": {
          "name": "Marcus B.",
          "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
        }
      }
    ]
  },
  {
    "title": "Lapland Pine Cabin with Reindeer Trail View",
    "description": "Experience unforgettable luxury at this premier arctic stay located in Orlando, Florida. Features curated interior aesthetics, five-star guest amenities, and exceptional natural surroundings for the perfect getaway.",
    "image": {
      "url": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
      "filename": "listing_96"
    },
    "gallery": [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80"
    ],
    "price": 750,
    "category": "Arctic",
    "location": "Orlando, Florida",
    "country": "United States",
    "coordinates": {
      "lat": 28.5683,
      "lng": -81.4092
    },
    "amenities": [
      "Wifi",
      "Air conditioning",
      "Chef Kitchen",
      "Free parking",
      "Sauna",
      "Fireplace",
      "Mountain View"
    ],
    "host": {
      "name": "Elena Rostova",
      "isSuperhost": true,
      "avatar": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80"
    },
    "reviews": [
      {
        "comment": "A sanctuary of peace and modern architectural luxury. Waking up to these views is unforgettable.",
        "rating": 5,
        "author": {
          "name": "Marcus B.",
          "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
        }
      },
      {
        "comment": "Spotlessly clean, flawless design, and warm hospitality. 10/10 recommendation!",
        "rating": 5,
        "author": {
          "name": "Sarah J.",
          "avatar": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
        }
      }
    ]
  },
  {
    "title": "Reykjavik Modern Geothermal Retreat under Auroras",
    "description": "Experience unforgettable luxury at this premier arctic stay located in Rome, Lazio. Features curated interior aesthetics, five-star guest amenities, and exceptional natural surroundings for the perfect getaway.",
    "image": {
      "url": "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1200&q=80",
      "filename": "listing_97"
    },
    "gallery": [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80"
    ],
    "price": 800,
    "category": "Arctic",
    "location": "Rome, Lazio",
    "country": "Italy",
    "coordinates": {
      "lat": 41.9478,
      "lng": 12.5114
    },
    "amenities": [
      "Wifi",
      "Air conditioning",
      "Chef Kitchen",
      "Free parking",
      "Sauna",
      "Fireplace",
      "Mountain View"
    ],
    "host": {
      "name": "Jean-Pierre Laurent",
      "isSuperhost": false,
      "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
    },
    "reviews": [
      {
        "comment": "Spotlessly clean, flawless design, and warm hospitality. 10/10 recommendation!",
        "rating": 5,
        "author": {
          "name": "Sarah J.",
          "avatar": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
        }
      },
      {
        "comment": "Incredible attention to detail. The sunset from the terrace was the highlight of our vacation.",
        "rating": 4.9,
        "author": {
          "name": "David K.",
          "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
        }
      }
    ]
  },
  {
    "title": "Tromsø Arctic Panorama Fjord Cabin with Jacuzzi",
    "description": "Experience unforgettable luxury at this premier arctic stay located in Tulum, Quintana Roo. Features curated interior aesthetics, five-star guest amenities, and exceptional natural surroundings for the perfect getaway.",
    "image": {
      "url": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
      "filename": "listing_98"
    },
    "gallery": [
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80"
    ],
    "price": 850,
    "category": "Arctic",
    "location": "Tulum, Quintana Roo",
    "country": "Mexico",
    "coordinates": {
      "lat": 20.1664,
      "lng": -87.5104
    },
    "amenities": [
      "Wifi",
      "Air conditioning",
      "Chef Kitchen",
      "Free parking",
      "Sauna",
      "Fireplace",
      "Mountain View"
    ],
    "host": {
      "name": "Kenji Sato",
      "isSuperhost": true,
      "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
    },
    "reviews": [
      {
        "comment": "Incredible attention to detail. The sunset from the terrace was the highlight of our vacation.",
        "rating": 4.9,
        "author": {
          "name": "David K.",
          "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
        }
      },
      {
        "comment": "Exceeded all expectations! The photos do not do this stunning property justice.",
        "rating": 5,
        "author": {
          "name": "Emma W.",
          "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
        }
      }
    ]
  },
  {
    "title": "Greenland Glacier View Eco-Cabin with Woodstove",
    "description": "Experience unforgettable luxury at this premier arctic stay located in Lake Como, Lombardy. Features curated interior aesthetics, five-star guest amenities, and exceptional natural surroundings for the perfect getaway.",
    "image": {
      "url": "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80",
      "filename": "listing_99"
    },
    "gallery": [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&w=800&q=80"
    ],
    "price": 890,
    "category": "Arctic",
    "location": "Lake Como, Lombardy",
    "country": "Italy",
    "coordinates": {
      "lat": 45.9597,
      "lng": 9.2572
    },
    "amenities": [
      "Wifi",
      "Air conditioning",
      "Chef Kitchen",
      "Free parking",
      "Sauna",
      "Fireplace",
      "Mountain View"
    ],
    "host": {
      "name": "Sophie Van Dijk",
      "isSuperhost": false,
      "avatar": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80"
    },
    "reviews": [
      {
        "comment": "Exceeded all expectations! The photos do not do this stunning property justice.",
        "rating": 5,
        "author": {
          "name": "Emma W.",
          "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
        }
      },
      {
        "comment": "A sanctuary of peace and modern architectural luxury. Waking up to these views is unforgettable.",
        "rating": 5,
        "author": {
          "name": "Marcus B.",
          "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
        }
      }
    ]
  },
  {
    "title": "Zermatt Glacier Chalet with Matterhorn View",
    "description": "Experience unforgettable luxury at this premier arctic stay located in Malibu, California. Features curated interior aesthetics, five-star guest amenities, and exceptional natural surroundings for the perfect getaway.",
    "image": {
      "url": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
      "filename": "listing_100"
    },
    "gallery": [
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80"
    ],
    "price": 160,
    "category": "Arctic",
    "location": "Malibu, California",
    "country": "United States",
    "coordinates": {
      "lat": 34.0109,
      "lng": -118.7348
    },
    "amenities": [
      "Wifi",
      "Air conditioning",
      "Chef Kitchen",
      "Free parking",
      "Sauna",
      "Fireplace",
      "Mountain View"
    ],
    "host": {
      "name": "Marcus Vance",
      "isSuperhost": true,
      "avatar": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80"
    },
    "reviews": [
      {
        "comment": "A sanctuary of peace and modern architectural luxury. Waking up to these views is unforgettable.",
        "rating": 5,
        "author": {
          "name": "Marcus B.",
          "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
        }
      },
      {
        "comment": "Spotlessly clean, flawless design, and warm hospitality. 10/10 recommendation!",
        "rating": 5,
        "author": {
          "name": "Sarah J.",
          "avatar": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
        }
      }
    ]
  }
];
