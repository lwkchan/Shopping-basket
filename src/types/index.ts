export type ShopItemInBasket = ShopItem & { uuid: string };

type DiscountInfo = {
  amountOffPerItemQualified: number;
  label: string;
  quantityToQualify: number;
};

export type ShopItem = {
  discount?: DiscountInfo;
  image?: string;
  name: string;
  price: number;
};
