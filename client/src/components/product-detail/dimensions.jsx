const Dimensions = ({ length, height, width, weight }) => {
  return (
    <div className="w-1/3 shrink-0 space-y-4">
      <p className="text-lg font-semibold uppercase text-gray-500">
        dimensions
      </p>
      <ul className="text-gray-500 lg:pl-5 space-y-2">
        <li>
          <p>
            Length (in): <span className="inline text-black">{length}</span>
          </p>
        </li>
        <li>
          <p>
            Height (in): <span className="inline text-black">{height}</span>
          </p>
        </li>
        <li>
          <p>
            Width (in): <span className="inline text-black">{width}</span>
          </p>
        </li>
        <li>
          <p>
            Weight (oz): <span className="inline text-black">{weight}</span>
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Dimensions;
