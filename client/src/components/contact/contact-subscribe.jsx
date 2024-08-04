import { Button } from "../ui/button";
import { Input } from "../ui/input";

const ContactSubscribe = () => {
  return (
    <div className="bg-slate-800 w-full md:w-[95%] flex flex-col gap-8 items-center justify-center py-[50px] animate-float-in">
      <div className="flex items-center text-gray-400">
        <p>____</p>
        <p className="uppercase font-semibold">
          sign up and get free coffee bags
        </p>
        <p>____</p>
      </div>
      <p className="text-white text-4xl">Coffee Updates</p>
      <div className="flex flex-col md:flex-row gap-5">
        <Input placeholder="example@gmail.com" className="w-[300px] h-[55px]" />
        <Button className="w-full md:w-[150px] h-[55px] uppercase">
          Subscribe
        </Button>
      </div>
    </div>
  );
};

export default ContactSubscribe;
