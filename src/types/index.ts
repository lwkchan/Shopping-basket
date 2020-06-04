export type ShopItemInBasket = ShopItem & { uuid: string };

export type DiscountInfo = {
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

export type DiscountRow = {
  label: string;
  amountOff: number;
};
