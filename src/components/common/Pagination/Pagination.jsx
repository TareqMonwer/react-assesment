import SelectInput from "../SelectInput/SelectInput";

const countOptions = [
  { label: 2, value: 2 },
  { label: 5, value: 5 },
  { label: 10, value: 10 },
  { label: 20, value: 20 },
];

const Pagination = () => {
  const handleCountChange = (input) => {
    console.log("counter changed to ", input);
  };

  return (
    <div className="flex">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div className="paginatorIem py-2 px-3 border cursor-pointer">{i}</div>
      ))}
      <SelectInput
        options={countOptions}
        onChange={handleCountChange}
      />
    </div>
  );
};

export default Pagination;
