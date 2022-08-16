export const checkExistingCart = (cart, element) => {
  if (cart.length !== 0) {
    const amount = cart.find((item) => item.uniqueName === element.uniqueName);
    if (amount) return amount.quantity;
  }
  return null;
};
