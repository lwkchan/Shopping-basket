import getDiscountsFromItems from './getDiscountsFromItems';

const beansInBasket = {
  name: 'Beans',
  price: 0.5,
  image: 'https://live.staticflickr.com/7034/6703356745_c99b822322_b.jpg',
  uuid: 'abc',
  discount: {
    quantityToQualify: 3,
    amountOffPerItemQualified: 0.166666,
    label: 'Beans 3 for 2',
  },
};

const cokeInBasket = {
  name: 'Coke',
  price: 0.7,
  uuid: '123',
  image:
    'https://cdn.pixabay.com/photo/2014/09/26/19/51/coca-cola-462776_1280.jpg',
  discount: {
    quantityToQualify: 2,
    amountOffPerItemQualified: 0.2,
    label: 'Coke 2 for £1',
  },
};

test('it takes three beans with a 3 for 2 discount and returns and array of one discount applied', () => {
  const result = getDiscountsFromItems([
    beansInBasket,
    beansInBasket,
    beansInBasket,
  ]);

  expect(result).toEqual([{ label: 'Beans 3 for 2', amountOff: 0.5 }]);
});

test('it takes six beans with a 3 for 2 discount and returns and array of two discounts applied', () => {
  const result = getDiscountsFromItems([
    beansInBasket,
    beansInBasket,
    beansInBasket,
    beansInBasket,
    beansInBasket,
    beansInBasket,
  ]);

  expect(result).toEqual([
    { label: 'Beans 3 for 2', amountOff: 0.5 },
    { label: 'Beans 3 for 2', amountOff: 0.5 },
  ]);
});

test('it takes one code and two beans, and applies no discounts', () => {
  const result = getDiscountsFromItems([
    cokeInBasket,
    beansInBasket,
    beansInBasket,
  ]);

  expect(result).toEqual([]);
});
