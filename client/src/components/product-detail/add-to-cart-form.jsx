import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import toast from "react-hot-toast";

const formSchema = z.object({
  quantity: z.custom((value) => Number(value) > 0, {
    message: "Quantity must be at least 1",
  }),
});

const AddToCartForm = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      quantity: "1",
    },
  });

  const onSubmit = async (value) => {
    toast.success(value.quantity);
  };

  return (
    <Form {...form}>
      <form
        className="flex flex-col sm:flex-row gap-5"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="quantity"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="number"
                  placeholder="Quantity of mug you want to buy"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="uppercase">add to cart</Button>
      </form>
    </Form>
  );
};

export default AddToCartForm;
