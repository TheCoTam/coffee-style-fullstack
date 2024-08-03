const DIRECTORY = [
  {
    title: "PRESS",
    name: "The Anh",
    phone: "+84 123 456 789",
    email: "example@gmail.com",
  },
  {
    title: "MANAGEMENT",
    name: "The Anh",
    phone: "+84 123 456 789",
    email: "example@gmail.com",
  },
  {
    title: "SUPPORT",
    name: "The Anh",
    phone: "+84 123 456 789",
    email: "example@gmail.com",
  },
];

const ContactDirectory = () => {
  return (
    <div className="flex flex-col items-center gap-10 w-full">
      <div className="flex items-center text-gray-400">
        <p>____</p>
        <p className="uppercase font-semibold">directory</p>
        <p>____</p>
      </div>
      <div className="flex flex-col gap-5 w-[80%]">
        {DIRECTORY.map((person, index) => (
          <div
            key={index}
            className="grid grid-cols-3 text-center gap-5 text-gray-500"
          >
            <p className="font-semibold text-sm">{person.title}</p>
            <p className="text-lg">{person.name}</p>
            <div className="space-y-1">
              <p>{person.phone}</p>
              <p>{person.email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactDirectory;
