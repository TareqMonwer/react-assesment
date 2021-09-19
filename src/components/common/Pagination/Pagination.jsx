import { useDispatch, useSelector } from "react-redux";
import {
  setItemsPerPage,
  getNextPage,
  getPrevPage,
  getToPage,
} from "services/paginationService";
import SelectInput from "../SelectInput/SelectInput";

const countOptions = [
  { label: 2, value: 2 },
  { label: 5, value: 5 },
  { label: 10, value: 10 },
  { label: 20, value: 20 },
];

const Pagination = () => {
  const dispatch = useDispatch();
  const itemsPerPage = useSelector((state) => state.pagination.itemsPerPage);
  const currentPage = useSelector((state) => state.pagination.currentPage);

  const handleCountChange = (input) => {
    dispatch(setItemsPerPage(parseInt(input)));
  };

  return (
    <div className="flex">
      <button
        onClick={() => dispatch(getPrevPage())}
        className={
          `${currentPage === 1 ? 'disabled:opacity-50 cursor-not-allowed':'cursor-pointer'} paginatorIem py-2 px-3 border `
        }
        disabled={currentPage === 1}
      >
        Prev
      </button>
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div
          onClick={() => dispatch(getToPage(i))}
          key={`page-${i}`}
          className={`paginatorIem py-2 px-3 border cursor-pointer ${
            i === currentPage ? "bg-indigo-700 text-white" : ""
          }`}
        >
          {i}
        </div>
      ))}
      <button
        onClick={() => dispatch(getNextPage())}
        className={
          `${currentPage === 6 ? 'disabled:opacity-50 cursor-not-allowed':'cursor-pointer'} paginatorIem py-2 px-3 border`}
        disabled={currentPage === 6}
      >
        Next
      </button>
      <SelectInput
        selectedValue={itemsPerPage}
        options={countOptions}
        onChange={handleCountChange}
      />
    </div>
  );
};

export default Pagination;
