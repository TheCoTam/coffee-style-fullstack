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

const formSchema = z.object({
  length: z
    .string()
    .refine((value) => Number(value) > 0, { message: "Invalid number" }),
  height: z
    .string()
    .refine((value) => Number(value) > 0, { message: "Invalid number" }),
  width: z
    .string()
    .refine((value) => Number(value) > 0, { message: "Invalid number" }),
  weight: z
    .string()
    .refine((value) => Number(value) > 0, { message: "Invalid number" }),
});

const url = import.meta.env.VITE_BACKEND_URL;

const DimensionsForm = ({ initialData, productId }) => {
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
        Product Dimensions
        <Button variant="ghost" onClick={toggleEdit}>
          {!isEditing ? (
            <>
              <Pencil size={18} className="mr-2" />
              Edit dimensions
            </>
          ) : (
            <>
              <X size={18} className="mr-2" />
              Cancel
            </>
          )}
        </Button>
      </div>
      {!isEditing && (
        <div className="grid grid-cols-2 gap-3">
          <div>
            <span className="shrink-0 text-gray-500 text-sm">Length (in)</span>{" "}
            : {initialData.length}
          </div>
          <div>
            <span className="shrink-0 text-gray-500 text-sm">Height (in)</span>{" "}
            : {initialData.height}
          </div>
          <div>
            <span className="shrink-0 text-gray-500 text-sm">Width (in)</span> :{" "}
            {initialData.width}
          </div>
          <div>
            <span className="shrink-0 text-gray-500 text-sm">Weight (oz)</span>{" "}
            : {initialData.weight}
          </div>
        </div>
      )}
      {isEditing && (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="mt-4 grid grid-cols-2 gap-2"
          >
            <FormField
              control={form.control}
              name="length"
              render={({ field }) => (
                <FormItem
                  disabled={isSubmitting}
                  className="flex items-center gap-3"
                >
                  <p className="shrink-0 text-gray-500 text-sm">Length (in)</p>
                  <FormControl>
                    <Input type="number" placeholder="10" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="height"
              render={({ field }) => (
                <FormItem className="flex items-center gap-3">
                  <p className="shrink-0 text-gray-500 text-sm">Height (in)</p>
                  <FormControl>
                    <Input
                      disabled={isSubmitting}
                      type="number"
                      placeholder="10"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="width"
              render={({ field }) => (
                <FormItem className="flex items-center gap-3">
                  <p className="shrink-0 text-gray-500 text-sm">Width (in)</p>
                  <FormControl>
                    <Input
                      disabled={isSubmitting}
                      type="number"
                      placeholder="10"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="weight"
              render={({ field }) => (
                <FormItem className="flex items-center gap-3">
                  <p className="shrink-0 text-gray-500 text-sm">Weight (oz)</p>
                  <FormControl>
                    <Input
                      disabled={isSubmitting}
                      type="number"
                      placeholder="20"
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

export default DimensionsForm;
