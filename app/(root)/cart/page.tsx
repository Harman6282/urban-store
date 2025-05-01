import { getMyCart } from "@/lib/actions/cart.action";
import CartTable from "./cart-table";

export const metadata = {
  title: "Shopping Cart",
};

const CartPage = async () => {
  const cart = await getMyCart();

  return (
    <>
      <CartTable cart={cart ? {
        ...cart,
        sessionCartId: cart.sessionCartId || '',
        userId: cart.userId || undefined
      } : undefined} />
    </>
  );
};

export default CartPage;
