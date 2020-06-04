import { ShopItemInBasket, DiscountRow, DiscountInfo } from './types';

// see https://github.com/Microsoft/TypeScript/issues/12870#issue-195156871
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
        quantityInBasket: items.filter((i) => i.name === item.name).length,
        discountInfo: item.discount,
      },
    };
  }, {} as { [key: string]: { quantityInBasket: number; discountInfo: DiscountInfo } });

  // for each item key, the number of items which qualify is modulo * the quantity
  const messages: DiscountRow[] = getObjectKeys(discountItemsQuantity).reduce(
    (acc, itemName) => {
      const item = discountItemsQuantity[itemName];
      const {
        quantityInBasket,
        discountInfo: { label, quantityToQualify, amountOffPerItemQualified },
      } = item;

      const numberOfTimesQualified = quantityInBasket / quantityToQualify;
      const amountOff = amountOffPerItemQualified * quantityToQualify;
      const roundedAmountOff = parseFloat(amountOff.toFixed(2));

      for (let i = 0; i < numberOfTimesQualified; i++) {
        acc.push({ label, amountOff: roundedAmountOff });
      }

      return acc;
    },
    [] as DiscountRow[]
  );

  return messages;
}

export default getDiscountsFromItems;
