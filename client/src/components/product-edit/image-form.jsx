import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { CloudUpload, Pencil, X } from "lucide-react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const url = import.meta.env.VITE_BACKEND_URL;
const formSchema = z.object({
  image: z
    .string()
    .refine((value) => value !== "", { message: "Image is required" }),
});

const ImageForm = ({ initialData, productId }) => {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [image, setImage] = useState(false);
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      image: "",
    },
  });

  const { isSubmitting, isValid } = form.formState;

  const toggleEdit = () => {
    setIsEditing((prev) => !prev);
    setImage(false);
    form.reset();
  };

  const onSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append("image_url", image);

      const res = await axios.patch(url + "/api/mug/" + productId, formData);
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
        <div className="aspect-square mt-2 overflow-hidden">
          <img
            alt="Upload"
            className="object-cover w-full h-full"
            src={url + "/images/" + initialData.image_url}
          />
        </div>
      )}
      {isEditing && (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="mt-4 space-y-4"
          >
            <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    {image ? (
                      <div className="flex items-center justify-center aspect-square rounded-md overflow-hidden">
                        <img
                          src={URL.createObjectURL(image)}
                          alt="image"
                          className="object-cover h-full w-full"
                        />
                      </div>
                    ) : (
                      <div className="flex items-center justify-center text-blue-500 border-2 border-dashed border-blue-200 aspect-square rounded-md cursor-pointer">
                        <CloudUpload size={45} />
                      </div>
                    )}
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="file"
                      accept="image/png, image/jpeg, image/gif"
                      value={field.value}
                      onChange={(e) => {
                        setImage(e.target.files[0]);
                        field.onChange(e);
                      }}
                      className="hidden"
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

export default ImageForm;
