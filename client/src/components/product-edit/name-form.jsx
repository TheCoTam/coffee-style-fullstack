import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { Button } from "../ui/button";
import { useState } from "react";
import { Pencil, X } from "lucide-react";
import { Input } from "../ui/input";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const formSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
});

const url = import.meta.env.VITE_BACKEND_URL;

const NameForm = ({ initialData, productId }) => {
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
        Product Name
        <Button variant="ghost" onClick={toggleEdit}>
          {!isEditing ? (
            <>
              <Pencil size={18} className="mr-2" />
              Edit Name
            </>
          ) : (
            <>
              <X size={18} className="mr-2" />
              Cancel
            </>
          )}
        </Button>
      </div>
      {!isEditing && <p>{initialData.name}</p>}
      {isEditing && (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="mt-4 space-y-4"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      disabled={isSubmitting}
                      placeholder="e.g. 'Red Love Cup'"
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

export default NameForm;
