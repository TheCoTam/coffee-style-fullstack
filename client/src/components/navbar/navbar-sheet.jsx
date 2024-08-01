import { ShoppingCart, MessageSquareWarning } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

import { productsInCart } from "@/data/pseudo-data-navbar";
import toast from "react-hot-toast";
import ProductItem from "./product-item";

const NavbarSheet = () => {
  const handleCheckout = () => {
    toast.success("Redirecting to Checkout Page");
  };

  return (
    <Sheet>
      <SheetTrigger>
        <button className="group flex items-center gap-2 text-xs text-gray-600 hover:text-gray-800 font-semibold cursor-pointer">
          <ShoppingCart size={20} />
          <p>CART</p>
          <p className="bg-teal-200 rounded-lg px-1 group-hover:bg-teal-300">
            {productsInCart.length}
          </p>
        </button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="uppercase font-bold mb-5">
            your cart
          </SheetTitle>
        </SheetHeader>
        <hr />
        <div className="h-[800px] overflow-hidden">
          {productsInCart.length === 0 && (
            <div className="flex flex-col gap-3 items-center justify-center text-center h-full">
              <MessageSquareWarning size={40} />
              <p className="font-semibold">Your Cart is Empty</p>
              <p className="text-xs text-gray-400 font-semibold">
                It is a paradisematic country, in which roasted parts of
                sentences fly into your mouth. Even the all-powerful.
              </p>
            </div>
          )}
          <div className="flex flex-col gap-3 overflow-y-auto">
            {productsInCart.map((product, index) => (
              <ProductItem key={index} {...product} />
            ))}
          </div>
          {productsInCart.length !== 0 && (
            <div className="flex flex-col gap-5 mt-auto">
              <hr />
              <div className="flex items-center justify-between">
                <p>Subtotal</p>
                <p>100000</p>
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
