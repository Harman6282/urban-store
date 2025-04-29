"use client";
import { Button } from "@/components/ui/button";
import { addItemToCart } from "@/lib/actions/cart.action";
import { CartItem } from "@/types";
import toast from "react-hot-toast";

const AddToCart = ({ item }: { item: CartItem }) => {
  const handleAddToCart = async () => {
    const res = await addItemToCart(item);

    if (!res.success) {
      toast.error(res.message);
    }
  };

  return (
    <div>
      <Button className="w-full" type="button" onClick={handleAddToCart}>
        Add to Cart
      </Button>
    </div>
  );
};

export default AddToCart;
