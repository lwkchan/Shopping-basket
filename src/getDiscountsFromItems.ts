import { ShopItemInBasket, DiscountRow, DiscountInfo } from './types';

const getObjectKeys = Object.keys as <ObjectType>(
  object: ObjectType
) => Extract<keyof ObjectType, string>[];

function getDiscountsFromItems(items: ShopItemInBasket[]): DiscountRow[] {
  // count how many of each item with a discount there is

  const discountItemsQuantity = items.reduce((acc, item) => {
    if (!item.discount) {
      return acc;
    }
    if (acc[item.name]) {
      return acc;
    }
    return {
      ...acc,
      [item.name]: {
        quantity: items.filter((i) => i.name === item.name).length,
        discount: item.discount,
      },
    };
  }, {} as { [key: string]: { quantity: number; discount: DiscountInfo } });

  // for each item key, the number of items which qualify is modulo * the quantity
  const messages: DiscountRow[] = getObjectKeys(discountItemsQuantity).reduce(
    (acc, itemName) => {
      const item = discountItemsQuantity[itemName];

      const numberOfTimesQualified =
        item.quantity / item.discount.quantityToQualify;
      const amountOff = item.discount.amountOffPerItemQualified * item.quantity;
      const roundedAmountOff = parseFloat(amountOff.toFixed(2));

      for (let i = 0; i < numberOfTimesQualified; i++) {
        acc.push({ label: item.discount.label, amountOff: roundedAmountOff });
      }

      return acc;
    },
    [] as DiscountRow[]
  );

  return messages;
}

export default getDiscountsFromItems;
