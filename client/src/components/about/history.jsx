import HistoryItem from "./history-item";

const DATA = [
  {
    title: "One day however a small line",
    desc: "It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum.",
    time: "October 2018",
  },
  {
    title: "Overlaid the jeepers uselessly",
    desc: "It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum.",
    time: "August 2018",
  },
  {
    title: "Pointing has no control about",
    desc: "It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum.",
    time: "June 2018",
  },
  {
    title: "We've started CoffeeStyle.",
    time: "November 2017",
  },
];

const History = () => {
  return (
    <div className="flex flex-col items-center gap-8 w-full animate-float-in">
      <div className="flex items-center text-gray-400 gap-1">
        <p>____</p>
        <p className="uppercase font-semibold">history timeline</p>
        <p>____</p>
      </div>
      <div className="flex flex-col items-center gap-8">
        {DATA.map((data, index) => (
          <HistoryItem key={index} {...data} />
        ))}
      </div>
    </div>
  );
};

export default History;
