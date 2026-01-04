import { MenuItem, Testimonial } from './types';

export const RESTAURANT_INFO = {
  name: "Urban Spoon Bistro",
  tagline: "Where Taste Meets Elegance",
  address: "123 Culinary Avenue, Food District, Metropolis",
  phone: "(555) 123-4567",
  email: "reservations@urbanspoonbistro.com",
  hours: "Mon-Sun: 11:00 AM - 11:00 PM",
  socials: {
    instagram: "@UrbanSpoonBistro",
    facebook: "Urban Spoon Bistro"
  }
};

export const MENU_ITEMS: MenuItem[] = [
  // Starters
  {
    id: 's1',
    name: 'Truffle Arancini',
    description: 'Crispy risotto balls infused with black truffle oil, served with garlic aioli.',
    price: '$14',
    category: 'starters',
    image: 'https://images.unsplash.com/photo-1608039755401-742074f0548d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 's2',
    name: 'Wagyu Beef Carpaccio',
    description: 'Thinly sliced raw wagyu, parmesan shavings, capers, and truffle vinaigrette.',
    price: '$22',
    category: 'starters',
    image: 'https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 's3',
    name: 'Burrata & Heirloom Tomato',
    description: 'Fresh burrata cheese, basil pesto, balsamic glaze, and toasted pine nuts.',
    price: '$18',
    category: 'starters',
    image: 'https://images.unsplash.com/photo-1608897013039-887f21d8c804?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  // Mains
  {
    id: 'm1',
    name: 'Pan-Seared Scallops',
    description: 'Jumbo scallops served on a bed of cauliflower purée with crispy pancetta.',
    price: '$34',
    category: 'main',
    isSpecial: true,
    image: 'https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'm2',
    name: 'Herb-Crusted Lamb Rack',
    description: 'Served with fondant potatoes, seasonal greens, and a red wine reduction.',
    price: '$42',
    category: 'main',
    isSpecial: true,
    image: 'https://images.unsplash.com/photo-1603360946369-dc9bb6f54262?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'm3',
    name: 'Wild Mushroom Risotto',
    description: 'Arborio rice, porcini mushrooms, parmesan crisp, and truffle oil finish.',
    price: '$28',
    category: 'main',
    image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'm4',
    name: 'Glazed Salmon Fillet',
    description: 'Miso-glazed salmon, bok choy, and ginger-infused jasmine rice.',
    price: '$32',
    category: 'main',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a3a2720?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  // Desserts
  {
    id: 'd1',
    name: 'Dark Chocolate Fondant',
    description: 'Warm molten center served with Madagascar vanilla bean ice cream.',
    price: '$14',
    category: 'desserts',
    isSpecial: true,
    image: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'd2',
    name: 'Lemon Basil Tart',
    description: 'Zesty lemon curd, buttery crust, topped with fresh basil and meringue.',
    price: '$12',
    category: 'desserts',
    image: 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  // Drinks
  {
    id: 'dr1',
    name: 'The Urban Old Fashioned',
    description: 'Bourbon, smoked maple syrup, angostura bitters, orange peel.',
    price: '$16',
    category: 'drinks',
    image: 'https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'dr2',
    name: 'Artisan Wines (Glass)',
    description: 'Selection of premium reds, whites, and rosés from our cellar.',
    price: '$14 - $25',
    category: 'drinks',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Eleanor R.',
    text: "The ambiance is unmatched in the city. The Lamb Rack was cooked to perfection. A truly 5-star experience.",
    rating: 5
  },
  {
    id: 't2',
    name: 'James K.',
    text: "Perfect spot for a romantic date. The staff was attentive but not intrusive. Highly recommend the Scallops.",
    rating: 5
  },
  {
    id: 't3',
    name: 'Sarah M.',
    text: "Wonderful selection of wines and the dessert was divine. Will definitely be returning for my anniversary.",
    rating: 4
  }
];

export const GALLERY_IMAGES = [
  {
    id: 'g1',
    src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    alt: 'Restaurant Interior'
  },
  {
    id: 'g2',
    src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    alt: 'Plating Detail'
  },
  {
    id: 'g3',
    src: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    alt: 'Evening Ambiance'
  },
  {
    id: 'g4',
    src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    alt: 'Signature Dish'
  },
  {
    id: 'g5',
    src: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    alt: 'Pasta Perfection'
  },
  {
    id: 'g6',
    src: 'https://images.unsplash.com/photo-1514362545857-3bc16549766b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    alt: 'Bar Area'
  }
];

// System Prompt for Gemini
export const SYSTEM_INSTRUCTION = `
You are the AI Concierge for "Urban Spoon Bistro", a high-end fine dining restaurant.
Your tone is professional, warm, elegant, and helpful. You are brief and polite.

Here is the Restaurant Information:
Name: ${RESTAURANT_INFO.name}
Address: ${RESTAURANT_INFO.address}
Hours: ${RESTAURANT_INFO.hours}
Phone: ${RESTAURANT_INFO.phone}

Here is the Menu:
${MENU_ITEMS.map(item => `- ${item.name} (${item.category}): ${item.description} Price: ${item.price} ${item.isSpecial ? '[Chef Special]' : ''}`).join('\n')}

Rules:
1. If asked about reservations, encourage them to use the form on the website or call ${RESTAURANT_INFO.phone}.
2. Suggest dishes based on user preferences (e.g., vegetarian, seafood, meat).
3. If asked about the chef, mention our Executive Chef is world-renowned for fusing modern techniques with classic flavors.
4. Keep answers under 80 words unless a long list is requested.
5. If you don't know an answer, politely suggest they call the restaurant.
`;