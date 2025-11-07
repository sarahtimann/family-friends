const PetInfoBar = () => {
  return (
    <div className="flex gap-4">
      <p className="rounded-full bg-blue-200 px-4 py-2 text-green-800/70">
        Dog
      </p>
      <p className="rounded-full bg-red-300 px-4 py-2 text-green-800/70">
        Male
      </p>
      <p className="rounded-full bg-lime-300/70 px-4 py-2 text-green-800/70">
        Young
      </p>
      <p className="rounded-full bg-yellow-200 px-4 py-2 text-yellow-800/70">
        Great Dane
      </p>
    </div>
  );
};

export default PetInfoBar;
