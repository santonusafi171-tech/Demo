export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: 'starters' | 'main' | 'desserts' | 'drinks';
  image?: string;
  isSpecial?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating: number;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export enum SectionId {
  HOME = 'home',
  ABOUT = 'about',
  MENU = 'menu',
  SPECIALS = 'specials',
  RESERVATION = 'reservation',
  GALLERY = 'gallery',
  CONTACT = 'contact'
}