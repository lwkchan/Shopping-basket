import { ShopItemInBasket, DiscountRow } from './types';

function getDiscountsFromItems(items: ShopItemInBasket[]): DiscountRow[] {
  const filteredItems = Array.from(new Set(items.map(({ name }) => name)));
  // go thru each one and check for the discount code
  const messages: { amountOff: number; label: string }[] = [];
  filteredItems.forEach((name) => {
    const actualItem = items.find(
      ({ name: itemObjectName }) => name === itemObjectName
    );
    if (!actualItem) {
      return;
    }
    const { discount } = actualItem;
    if (discount) {
      // count the occurrences in the array
      const numberOfItems = items.filter(
        ({ name: itemName }) => itemName === name
      ).length;

      if (numberOfItems < discount.quantityToQualify) {
        return;
      }
      for (let i = 1; i < numberOfItems; i = i + discount.quantityToQualify) {
        messages.push({
          label: discount.label,
          amountOff: parseFloat(
            (
              discount.amountOffPerItemQualified * discount.quantityToQualify
            ).toFixed(2)
          ),
        });
      }
    }
  });

  return messages;
}

export default getDiscountsFromItems;
