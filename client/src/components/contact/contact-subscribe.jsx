import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SquareCheck } from "lucide-react";

const ContactSubscribe = () => {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
    }, 1000);
  };

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
      {submitted && (
        <div className="text-white flex items-center gap-3 px-2">
          <SquareCheck />
          <p>Thank you! Your submission has been received!</p>
        </div>
      )}
      {!submitted && (
        <div className="flex flex-col md:flex-row gap-5">
          <Input
            type="email"
            placeholder="example@gmail.com"
            className="w-[300px] h-[55px]"
            disabled={loading}
          />
          <Button
            className="w-full md:w-[150px] h-[55px] uppercase"
            onClick={handleClick}
            disabled={loading}
          >
            Subscribe
          </Button>
        </div>
      )}
    </div>
  );
};

export default ContactSubscribe;
