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
  description: z.string().min(1, { message: "Description is required" }),
});

const url = import.meta.env.VITE_BACKEND_URL;

const DescriptionForm = ({ initialData, productId }) => {
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
        Product Description
        <Button variant="ghost" onClick={toggleEdit}>
          {!isEditing ? (
            <>
              <Pencil size={18} className="mr-2" />
              Edit description
            </>
          ) : (
            <>
              <X size={18} className="mr-2" />
              Cancel
            </>
          )}
        </Button>
      </div>
      {!isEditing && <p>{initialData.description}</p>}
      {isEditing && (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="mt-4 space-y-4"
          >
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      disabled={isSubmitting}
                      placeholder="e.g. 'Amet suscipit omnis eum necessitatibus quos doloribus.'"
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

export default DescriptionForm;
