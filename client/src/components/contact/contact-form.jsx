import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email(),
  message: z.string().min(1, { message: "Message is required" }),
});

const ContactForm = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (values) => {
    console.log(values);
  };

  return (
    <div className="w-[85%] border-2 border-gray-200 py-[30px] md:py-[40px] lg:py-[50px] px-[20px] md:px-[30px] lg:px-[40px] flex flex-col lg:flex-row gap-5 lg:gap-0 justify-between animate-float-in">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-5 md:w-[70%] lg:w-[60%] self-center lg:self-auto text-center lg:text-start"
        >
          <FormItem>
            <p className="uppercase text-xl font-bold text-gray-400">
              contact form
            </p>
            <p className="text-lg">
              Drop us your message and I&apos;ll get back to you as soon as
              possible.
            </p>
          </FormItem>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <p className="font-semibold">Name</p>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <p className="font-semibold">Email</p>
                <FormControl>
                  <Input placeholder="example@gmail.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <p className="font-semibold">Message</p>
                <FormControl>
                  <Textarea
                    placeholder="Hi! I would like to ask something about mugs."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="uppercase w-max self-center lg:self-auto">
            send message
          </Button>
        </form>
      </Form>
      <div className="w-auto lg:w-[2px] h-[2px] lg:h-auto border-none bg-gray-200"></div>
      <div className="flex flex-col gap-10 self-center lg:self-auto text-center lg:text-start">
        <div className="space-y-3">
          <p className="uppercase text-xl font-bold text-gray-400">
            contact form
          </p>
          <p>CoffeeStyle. Inc</p>
          <p>Thanh Xuan</p>
          <p>Ha Noi</p>
        </div>
        <div className="space-y-3">
          <p className="uppercase text-xl font-bold text-gray-400">call us</p>
          <p>+1 (415) 555-1212</p>
        </div>
        <div className="space-y-3">
          <p className="uppercase text-xl font-bold text-gray-400">email us</p>
          <p>hoangnguyenanhtuyen@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
