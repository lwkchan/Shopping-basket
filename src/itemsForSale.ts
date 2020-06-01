export type ShopItem = {
  name: string;
  price: number;
  image?: string;
};

const ItemsForSale: ShopItem[] = [
  {
    name: 'Beans',
    price: 0.5,
    image: 'https://live.staticflickr.com/7034/6703356745_c99b822322_b.jpg',
  },
];

export default ItemsForSale;
