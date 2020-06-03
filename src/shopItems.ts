import { ShopItem } from './types';

const ItemsForSale: ShopItem[] = [
  {
    name: 'Beans',
    price: 0.5,
    image: 'https://live.staticflickr.com/7034/6703356745_c99b822322_b.jpg',
    discount: {
      quantityToQualify: 3,
      amountOffPerItemQualified: 0.166666,
      label: 'Beans 3 for 2',
    },
  },
  {
    name: 'Coke',
    price: 0.7,
    image:
      'https://cdn.pixabay.com/photo/2014/09/26/19/51/coca-cola-462776_1280.jpg',
    discount: {
      quantityToQualify: 2,
      amountOffPerItemQualified: 0.2,
      label: 'Coke 2 for £1',
    },
  },
];

export default ItemsForSale;
