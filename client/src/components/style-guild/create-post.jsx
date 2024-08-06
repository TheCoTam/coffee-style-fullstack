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
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { POST_CATEGORIES } from "@/data/post-categories";
import { useNavigate } from "react-router-dom";
import Editor from "../editor";

const url = import.meta.env.VITE_BACKEND_URL;

const formSchema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  description: z.string().min(1, { message: "Description is required" }),
  content: z.string().min(1, { message: "Content is required" }),
  category: z.string(),
});

const CreatePost = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      content: "",
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

      const response = await axios.post(url + "/api/post/add", formData);

      if (response.data.success) {
        toast.success(response.data.message);
        navigate("/");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log("[add-post]", error);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center my-[80px] gap-16">
      <p className="text-3xl uppercase font-bold text-gray-700">
        create a new post
      </p>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-5 w-[95%] sm:w[80%] md:w-[70%] lg:w-[60%]"
        >
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <p>Title</p>
                <FormControl>
                  <Input
                    disabled={loading}
                    placeholder="Recent research suggests that heavy coffee drinkers may reap health benefits."
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
                    {POST_CATEGORIES.map((category) => (
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
          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <p>Content</p>
                <FormControl>
                  <Editor disabled={loading} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button size="lg" className="w-max self-center" disabled={loading}>
            Create Mug
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default CreatePost;
