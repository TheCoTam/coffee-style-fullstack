import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import * as z from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MUG_CATEGORIES } from "@/data/mug-categories";
import { useNavigate } from "react-router-dom";

const url = import.meta.env.VITE_BACKEND_URL;

const formSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  description: z.string().min(1, { message: "Description is required" }),
  detail: z.string().min(1, { message: "Detail is required" }),
  price: z
    .string()
    .refine((value) => Number(value) > 0, { message: "Invalid number" }),
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
  category: z.string(),
});

const CreateMug = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
      detail: "",
      price: "",
      length: "",
      height: "",
      width: "",
      weight: "",
      category: "",
    },
  });

  const onSubmit = async (value) => {
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("image_url", image);
      for (const key in value) {
        formData.append(key, value[key]);
      }

      const response = await axios.post(url + "/api/mug/add", formData);

      if (response.data.success) {
        toast.success(response.data.message);
        navigate("/");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log("[add-mug]", error);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center my-[50px] gap-16">
      <p className="text-3xl uppercase font-bold text-gray-700">
        create a new mug
      </p>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-5 w-[95%] sm:w[80%] md:w-[70%] lg:w-[60%]"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <p>Name</p>
                <FormControl>
                  <Input
                    disabled={loading}
                    placeholder="Pink Premium Ceramic"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <p>Description</p>
                <FormControl>
                  <Input
                    disabled={loading}
                    placeholder="A et quia qui quia."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="detail"
            render={({ field }) => (
              <FormItem>
                <p>Detail</p>
                <FormControl>
                  <Textarea
                    disabled={loading}
                    placeholder="A et quia qui quia."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="space-y-2">
            <p>Image</p>
            <Input
              type="file"
              disabled={loading}
              accept="image/png, image/jpeg, image/gif"
              onChange={(e) => setImage(e.target.files[0])}
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-5 md:gap-10">
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <p>Price</p>
                  <FormControl>
                    <Input
                      disabled={loading}
                      type="number"
                      placeholder="120000"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <p>Category</p>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    disabled={loading}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {MUG_CATEGORIES.map((category) => (
                        <SelectItem key={category.value} value={category.value}>
                          {category.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div>
            <p>Dimensions:</p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
              <FormField
                control={form.control}
                name="length"
                render={({ field }) => (
                  <FormItem
                    disabled={loading}
                    className="flex items-center gap-3"
                  >
                    <p className="shrink-0 text-gray-500 text-sm">
                      Length (in)
                    </p>
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
                    <p className="shrink-0 text-gray-500 text-sm">
                      Height (in)
                    </p>
                    <FormControl>
                      <Input
                        disabled={loading}
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
                        disabled={loading}
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
                    <p className="shrink-0 text-gray-500 text-sm">
                      Weight (oz)
                    </p>
                    <FormControl>
                      <Input
                        disabled={loading}
                        type="number"
                        placeholder="20"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <Button size="lg" className="w-max self-center" disabled={loading}>
            Create Mug
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default CreateMug;
