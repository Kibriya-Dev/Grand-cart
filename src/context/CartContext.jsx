import {
  createContext,
  useState,
  useEffect
} from "react";

export const CartContext = createContext();

function CartProvider({ children }) {

  /* =========================
        CART STATE
  ========================== */

  const [cart, setCart] = useState(() => {

    const savedCart =
      localStorage.getItem("cart");

    return savedCart
      ? JSON.parse(savedCart)
      : [];

  });

  /* =========================
        WISHLIST STATE
  ========================== */

  const [wishlist, setWishlist] = useState(() => {

    const savedWishlist =
      localStorage.getItem("wishlist");

    return savedWishlist
      ? JSON.parse(savedWishlist)
      : [];

  });

  /* =========================
        SAVE CART
  ========================== */

  useEffect(() => {

    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    );

  }, [cart]);

  /* =========================
        SAVE WISHLIST
  ========================== */

  useEffect(() => {

    localStorage.setItem(
      "wishlist",
      JSON.stringify(wishlist)
    );

  }, [wishlist]);

  /* =========================
        ADD TO CART
  ========================== */

  const addToCart = (product) => {

    const exists =
      cart.find(i => i.id === product.id);

    if (exists) {

      setCart(
        cart.map(i =>
          i.id === product.id
            ? {
                ...i,
                qty: i.qty + 1
              }
            : i
        )
      );

    } else {

      setCart([
        ...cart,
        {
          ...product,
          qty: product.qty || 1
        }
      ]);

    }
  };

  /* =========================
        INCREASE QTY
  ========================== */

  const increaseQty = (id) => {

    setCart(
      cart.map(i =>
        i.id === id
          ? {
              ...i,
              qty: i.qty + 1
            }
          : i
      )
    );

  };

  /* =========================
        DECREASE QTY
  ========================== */

  const decreaseQty = (id) => {

    setCart(
      cart.map(i =>
        i.id === id
          ? {
              ...i,
              qty:
                i.qty > 1
                  ? i.qty - 1
                  : 1
            }
          : i
      )
    );

  };

  /* =========================
        REMOVE ITEM
  ========================== */

  const removeFromCart = (id) => {

    setCart(
      cart.filter(i => i.id !== id)
    );

  };

  /* =========================
        CLEAR CART
  ========================== */

  const clearCart = () => {

    setCart([]);

  };

  /* =========================
        TOTAL PRICE
  ========================== */

  const totalPrice = cart.reduce(
    (sum, item) =>
      sum + item.price * item.qty,
    0
  );

  /* =========================
        CART COUNT
  ========================== */

  const cartCount = cart.reduce(
    (sum, item) =>
      sum + item.qty,
    0
  );

  /* =========================
        WISHLIST TOGGLE
  ========================== */

  const addToWishlist = (product) => {

    const exists =
      wishlist.find(i => i.id === product.id);

    if (exists) {

      setWishlist(
        wishlist.filter(
          i => i.id !== product.id
        )
      );

    } else {

      setWishlist([
        ...wishlist,
        product
      ]);

    }
  };

  return (

    <CartContext.Provider
      value={{

        cart,
        wishlist,

        addToCart,
        increaseQty,
        decreaseQty,
        removeFromCart,
        clearCart,

        totalPrice,
        cartCount,

        addToWishlist

      }}
    >

      {children}

    </CartContext.Provider>

  );
}

export default CartProvider;