export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'Bowls' | 'Kits' | 'Accessories';
  isLimited?: boolean;
  ingredients?: string[];
  prepTime?: string;
}

export interface CartItem extends Product {
  quantity: number;
}
