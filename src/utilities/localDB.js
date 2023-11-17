const addToLocalDb = (id) => {
  let shoppingCart = getShoppingCart();
  // add quantity
  const quantity = shoppingCart[id];
  if (!quantity) {
    shoppingCart[id] = 1;
  } else {
    const newQuantity = quantity + 1;
    shoppingCart[id] = newQuantity;
  }
  localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
};

const getShoppingCart = () => {
  let shoppingCart = {};
  // get the shopping cart from the local storage
  const storedCart = localStorage.getItem("shopping-cart");
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  }
  return shoppingCart;
};

const removeCartFromLDB = (id) => {
  const shoppingCart = getShoppingCart();
  if (id in shoppingCart) {
    delete shoppingCart[id];
    localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
  }
};
// delete shopping cart
const deleteShoppingCartFromLDB = () => {
  localStorage.removeItem("shopping-cart");
};

export {
  addToLocalDb,
  removeCartFromLDB,
  deleteShoppingCartFromLDB,
  getShoppingCart,
};
