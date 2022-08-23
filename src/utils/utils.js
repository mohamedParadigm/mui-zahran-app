export const uniqueId = () => Math.random().toString(16).slice(2);

export const cookieExpireDate = (days) => {
  const date = new Date();
  const expireMs = days * 24 * 60 * 60 * 1000;
  date.setTime(date.getTime() + expireMs);

  return date;
};

export const calcItemPrice = (item) => {
  const price = item.discount ? item.priceAfterDiscount : item.Price;

  return price * item.quantity;
};

export const calcItemsSubTotal = (items) => {
  const prices = items.map((item) => {
    return {
      price: item.discount ? item.priceAfterDiscount : item.Price,
      quantity: item.quantity,
    };
  });
  const price = prices.reduce((acc, curr) => {
    return acc + parseFloat(curr.price) * curr.quantity;
  }, 0);

  return price;
};

export const calcItemsTotalPrice = (items, vat = 100, delivery = 0) => {
  const subTotal = calcItemsSubTotal(items);

  return subTotal + vat + delivery;
};
