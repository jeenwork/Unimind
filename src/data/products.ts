export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  images: string[];
  description: string;
  features: string[];
  altTexts: string[];
}

export const products: Product[] = [
  {
    id: "unimind-aero-jacket",
    name: "AeroShell™ Kinetic Jacket",
    price: 245,
    category: "Outerwear",
    images: [
      "https://picsum.photos/seed/techwear-jacket-1/800/1000",
      "https://picsum.photos/seed/techwear-jacket-2/800/1000",
    ],
    description: "Tired of bulky layers that restrict your movement and leave you sweating? The AeroShell™ Kinetic Jacket is engineered from aerospace-grade, micro-porous fabric that adapts to your body heat. Experience total weather protection without the weight. Over 5,000 urban explorers have upgraded their commute. Limited run of 500 units—secure yours before the season shifts.",
    features: [
      "Adaptive thermal regulation",
      "DWR-coated for extreme water resistance",
      "Articulated joints for maximum mobility",
      "Hidden RFID-blocking pocket"
    ],
    altTexts: [
      "A person wearing a sleek black Unimind AeroShell Kinetic Jacket in a rainy urban setting.",
      "Close-up of the water-resistant micro-porous fabric on the AeroShell jacket."
    ]
  },
  {
    id: "unimind-strata-tee",
    name: "Strata Base Tee",
    price: 65,
    category: "Basics",
    images: [
      "https://picsum.photos/seed/techwear-tee-1/800/1000",
      "https://picsum.photos/seed/techwear-tee-2/800/1000",
    ],
    description: "Your everyday t-shirt loses its shape after three washes and traps odor. The Strata Base Tee utilizes a proprietary bamboo-silver ion blend, neutralizing bacteria on contact while maintaining a structured, minimalist drape. Look sharp from the morning commute to the evening flight. Only 150 left in Onyx Black.",
    features: [
      "Silver-ion anti-odor technology",
      "Wrinkle-resistant structured drape",
      "Moisture-wicking bamboo blend",
      "Seamless shoulder construction"
    ],
    altTexts: [
      "Minimalist black Strata Base Tee displayed on a clean white background.",
      "Detail shot of the seamless shoulder construction on the Strata tee."
    ]
  },
  {
    id: "unimind-vector-pant",
    name: "Vector Utility Pant",
    price: 180,
    category: "Bottoms",
    images: [
      "https://picsum.photos/seed/techwear-pant-1/800/1000",
      "https://picsum.photos/seed/techwear-pant-2/800/1000",
    ],
    description: "Traditional trousers are restrictive; standard cargos are unprofessional. The Vector Utility Pant bridges the gap with a tailored silhouette and 4-way stretch Schoeller® fabric. Transition seamlessly from the boardroom to the bike lane. Join the waitlist or buy now—these sell out every restock.",
    features: [
      "4-way stretch Schoeller® fabric",
      "DWR water and stain resistance",
      "Concealed zippered cargo pockets",
      "Gusseted crotch for durability"
    ],
    altTexts: [
      "Model wearing dark grey Vector Utility Pants while riding a bicycle.",
      "Close-up of the concealed zippered cargo pocket on the Vector pants."
    ]
  },
  {
    id: "unimind-nexus-hoodie",
    name: "Nexus Midlayer Hoodie",
    price: 145,
    category: "Midlayers",
    images: [
      "https://picsum.photos/seed/techwear-hoodie-1/800/1000",
      "https://picsum.photos/seed/techwear-hoodie-2/800/1000",
    ],
    description: "Cotton hoodies are heavy when wet and offer zero wind resistance. The Nexus Midlayer features a bonded spacer-mesh construction that traps warmth without bulk. It's the ultimate travel companion for unpredictable climates. Grab yours before the winter rush depletes our inventory.",
    features: [
      "Bonded spacer-mesh thermal insulation",
      "Wind-resistant face fabric",
      "Articulated scuba hood",
      "Invisible side-seam pockets"
    ],
    altTexts: [
      "Person wearing a minimalist slate grey Nexus Midlayer Hoodie looking away.",
      "Detail of the articulated scuba hood on the Nexus hoodie."
    ]
  },
  {
    id: "unimind-apex-pack",
    name: "Apex Modular Pack",
    price: 210,
    category: "Accessories",
    images: [
      "https://picsum.photos/seed/techwear-bag-1/800/1000",
      "https://picsum.photos/seed/techwear-bag-2/800/1000",
    ],
    description: "Your current backpack is a black hole of tangled cords and crushed gear. The Apex Modular Pack features a rigid exoskeleton and magnetic Fidlock® closures for instant, organized access. Protect your tech with military-grade precision. Only 50 units available in this production run.",
    features: [
      "Magnetic Fidlock® quick-release hardware",
      "Rigid protective exoskeleton",
      "Suspended 16-inch laptop sleeve",
      "Waterproof YKK AquaGuard® zippers"
    ],
    altTexts: [
      "Sleek black Apex Modular Pack resting on a concrete surface.",
      "Close-up of the magnetic Fidlock closure on the Apex pack."
    ]
  }
];
