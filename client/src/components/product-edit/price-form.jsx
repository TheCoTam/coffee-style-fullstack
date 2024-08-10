import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Pencil, X } from "lucide-react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { formatPrice } from "@/lib/utils";

const formSchema = z.object({
  price: z
    .string()
    .refine((value) => Number(value) > 0, { message: "Invalid number" }),
});

const url = import.meta.env.VITE_BACKEND_URL;

const PriceForm = ({ initialData, productId }) => {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: initialData,
  });
  const { isSubmitting, isValid } = form.formState;

  const toggleEdit = () => setIsEditing((prev) => !prev);

  const onSubmit = async (values) => {
    try {
      const res = await axios.patch(url + "/api/mug/" + productId, values);

      if (res.data.success) {
        toast.success("Product updated");
        toggleEdit();
        navigate(0);
      } else {
        toast.error(res.data.messages);
      }
    } catch (error) {
      console.log("[name-form]", error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="bg-slate-100 rounded-md p-4">
      <div className="font-medium flex items-center justify-between">
        Product Price
        <Button variant="ghost" onClick={toggleEdit}>
          {!isEditing ? (
            <>
              <Pencil size={18} className="mr-2" />
              Edit price
            </>
          ) : (
            <>
              <X size={18} className="mr-2" />
              Cancel
            </>
          )}
        </Button>
      </div>
      {!isEditing && <p>{formatPrice(initialData.price)}</p>}
      {isEditing && (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="mt-4 space-y-4"
          >
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      disabled={isSubmitting}
                      placeholder="e.g. 100.000 đ"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex items-center gap-x-2">
              <Button disabled={!isValid || isSubmitting} type="submit">
                Save
              </Button>
            </div>
          </form>
        </Form>
      )}
    </div>
  );
};

export default PriceForm;
