import getDiscountsFromItems from './getDiscountsFromItems';

test('it takes the basket items with discount info and returns and array of total discounts information', () => {
  const result = getDiscountsFromItems([
    {
      name: 'Beans',
      price: 0.5,
      image: 'https://live.staticflickr.com/7034/6703356745_c99b822322_b.jpg',
      uuid: 'abc',
      discount: {
        quantityToQualify: 3,
        amountOffPerItemQualified: 0.166666,
        label: 'Beans 3 for 2',
      },
    },
    {
      name: 'Beans',
      price: 0.5,
      image: 'https://live.staticflickr.com/7034/6703356745_c99b822322_b.jpg',
      uuid: 'abc',
      discount: {
        quantityToQualify: 3,
        amountOffPerItemQualified: 0.166666,
        label: 'Beans 3 for 2',
      },
    },
    {
      name: 'Beans',
      price: 0.5,
      image: 'https://live.staticflickr.com/7034/6703356745_c99b822322_b.jpg',
      uuid: 'abc',
      discount: {
        quantityToQualify: 3,
        amountOffPerItemQualified: 0.166666,
        label: 'Beans 3 for 2',
      },
    },
  ]);

  expect(result).toEqual([{ label: 'Beans 3 for 2', amountOff: 0.5 }]);
});
