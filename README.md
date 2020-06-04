# Shopping basket

Please make sure you have Node >= 8 to run this application.

After cloning the repository,

```bash
cd path/to/repo
yarn
```

## Commands

```bash
yarn start # starts development server
yarn build # creates production build
yarn test # runs unit tests
```

## Tasks

- [x] as a user, I can add Beans to my basket, costing £0.50 and see my subtotal
- [x] as a user, I can add Coke to my basket, costing £0.70 each and see my subtotal
- [x] as a user I can redeem the special price of two cans of beans for the price of two
- [x] as a user I can redeem the special price of £1 for two cans of Coke

## If I had more time

- I would implement Redux to fit one of the criteria for the challenge. I did not set this up initially because I feel that Redux is not required for small scale apps. I appreciate that it would be beneficial to see my skills here. However, I did not have the time

- I would make my variable naming more consistent. Sometimes I call the basket 'cart', other times 'basket'. It would be clearer if this was consistent.

- I would separate out the Discount logic from the items. I would make a separate object which would have all of the discount information. This object would be called only when . I think that this would have made my function `getDiscountsFromItems` read more clearly, since the concerns of the discount information would have been separated, and I would have been able to ask for simple information without having to create a whole new object inside the function. We would supposedly have the discount info objects use the same `name` property as the ShopItem so they could be linked in some way
