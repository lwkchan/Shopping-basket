export type ShopItemInBasket = ShopItem & { uuid: string };

export type ShopItem = {
  name: string;
  price: number;
  image?: string;
};
