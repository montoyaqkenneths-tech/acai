import { Product } from './types.ts';

export const PRODUCTS: Product[] = [
  {
    id: 'signature-bowl',
    name: 'Signature Ritual Bowl',
    description: 'Our flagship curation. Hand-picked Amazonian berries with vanilla-bean granola and hand-selected botanicals.',
    price: 18.00,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDTOG-RLaEag0p7rul11DptpUatCsXZaW-ff7IzRO1PAP43C3Tmt96zsSOppxfisVfC0x5Q-eCCyj1gjLhD3NDw9KpR-HTh2aZ8B3v6pEQPXv4FpnenePAbtbzGB_bMXThCAgS8rpv3XSAvBc0Dp9-yIR0riqT7n7JJWz_b7FcUrvHe-DK6KK2F3Oer7YAmrchF7Y9vIq0JCXoQGSNsXLkIzbLg8tE45nFro2nSSpkMcUyK8u4ZmZlueWXtZXcrMDqsAxAelTULw2t8',
    category: 'Bowls',
    isLimited: true,
    prepTime: '8 MIN',
    ingredients: ['Classic Açaí', 'Wild Berry Compote', 'Cacao Nibs', 'Hemp Seeds']
  },
  {
    id: 'velvet-elixir',
    name: 'Velvet Elixir',
    description: 'A deeply restorative liquid ritual. Açaí root extract, dragonfruit, and oat milk mist.',
    price: 14.00,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC0yCKNXr33pDLJoAHYocm4zPzMVu8ZhqyWmzFes3Pr-FJmU1FBy83pzJxf68FssIDS41AC2Ej1Dl4eHGSHC4_t_fEacjClZCHtb8Z6BDaKqkbOo5vL-yaegqbcmuRMS8O9D5c7W_UJguta580ygvBc1UwdqMW5MREIPILFFKm1oJhezNkwTCrQpdK_aBQ4bz8LCPpPGWj15fMX65j4KgXv2CN31HwNDgwMmD0ABaOO3kMi1Kdr2oRkmrCKrz0Xywos5Xi2liakmDpr',
    category: 'Accessories',
    prepTime: '3 MIN'
  },
  {
    id: 'alchemy-kit',
    name: 'At-Home Alchemy Kit',
    description: 'A meticulous set for the home ritualist. Includes raw pulp and organic toppings.',
    price: 85.00,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBL6qnzlw7X9G-EFALGzEwm1SXGAGXoAUDN2iGoaxB5iIF7auldcpK5wL4bZHvN2sB_SXF1a2_-VAPvfbLFIFQGDErHsFAYPVBW99_KD_CL8nJ4_wgBkh04pMa9wC-es3WU153mTt9OOvNZfhpQiWxdbYji3_jsXRB_Haq-4xG7CNmD3qNk8JWNuB5cCPLZ0jwpokmaj6pTdAKzPmlAQVFF8D8Uassvycf7j6V4NMUDEQFy_rASX3ISTaK8zeZFP6od_OSUaM9BFGcZ',
    category: 'Kits'
  },
  {
    id: 'velvet-truffle',
    name: 'Velvet Truffle Ritual',
    description: 'Artisanal açaí-infused dark chocolate truffles with floral garnishes.',
    price: 18.00,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCcef7BUw6W0KtNp92sdted-mW3Jca9tv7qsF1ONjjMviLyCJvUk2iGtcLYxeYpLdz0ijTndp9GDe_6c6OwSJlnA1Nw_W34fvBPxol93QNc95m80sxKlBJ96ma82og6It1XKfwKP2gshuaoa4FHFYHBVjH6HjD3QrfUu0YwLilHJVoOzFHT0ghJWdPV4xe6Ohv9N61VNB71frG3iQF7y2LOKhq7Nb_Si0lyNfqoN2zWk-gG-yhexgBHfgBDtw0H1AkS3bo0L38epz2H',
    category: 'Accessories'
  }
];
