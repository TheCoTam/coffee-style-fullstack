import { useContext } from "react";
import { ShoppingCart, MessageSquareWarning } from "lucide-react";
import toast from "react-hot-toast";

import { ProductsContext } from "@/context/ProductsContext";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import ProductItem from "./product-item";
import { formatPrice } from "@/lib/utils";

const NavbarSheet = () => {
  const { productList, cartItems, getTotalCartPrice } =
    useContext(ProductsContext);

  const handleCheckout = () => {
    toast.success("Redirecting to Checkout Page");
  };

  return (
    <Sheet>
      <SheetTrigger>
        <div className="group flex items-center gap-2 text-sm text-gray-600 hover:text-gray-800 font-semibold cursor-pointer">
          <ShoppingCart size={20} />
          <p>CART</p>
          <p className="bg-teal-200 rounded-lg px-[5px] group-hover:bg-teal-300">
            {productList.length}
          </p>
        </div>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="uppercase font-bold mb-5">
            your cart
          </SheetTitle>
        </SheetHeader>
        <hr />
        <div className="h-[calc(100%-48px)] overflow-hidden">
          {productList.length === 0 && (
            <div className="flex flex-col gap-3 items-center justify-center text-center h-full">
              <MessageSquareWarning size={40} />
              <p className="font-semibold">Your Cart is Empty</p>
              <p className="text-xs text-gray-400 font-semibold">
                It is a paradisematic country, in which roasted parts of
                sentences fly into your mouth. Even the all-powerful.
              </p>
            </div>
          )}
          <div className="flex flex-col gap-3 overflow-y-auto h-[calc(100%-133px)] mt-3">
            {productList.map((product, index) => {
              const amount = cartItems[product._id];

              return <ProductItem key={index} {...product} amount={amount} />;
            })}
          </div>
          {productList.length !== 0 && (
            <div className="flex flex-col gap-5 mt-3">
              <hr />
              <div className="flex items-center justify-between">
                <p>Subtotal</p>
                <p>{formatPrice(getTotalCartPrice())}</p>
              </div>
              <Button
                size="lg"
                className="uppercase w-full"
                onClick={handleCheckout}
              >
                continue to checkout
              </Button>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default NavbarSheet;
