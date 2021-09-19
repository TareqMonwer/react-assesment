import { useState } from "react";
import TBody from "components/UsersTable/TBody";
import THead from "components/UsersTable/THead";
import Pagination from "components/common/Pagination/Pagination";

const UsersTableContainer = ({ columns, data, setSortingKey, setSearchTerm }) => {
  const [term, setTerm] = useState();

  return (
    <>
      <div className="bg-white shadow flex justify-end">
        <div className="w-2/4 p-2 my-2 mr-3 flex">
          <input
            className="w-full border rounded p-2 focus:outline-none 
            focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            type="text"
            placeholder="Search by name, email, phone"
            onChange={e => setTerm(e.target.value)}
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              setSearchTerm(term)
            }}
            className="ml-1 border-2 border-purple-600 bg-purple-600 
            hover:border-indigo-600 hover:bg-indigo-700 rounded
            text-white p-2 pl-4 pr-4"
          >
          <p className="font-semibold text-xs">Search</p>
        </button>
      </div>
      </div>
      <table className="min-w-full divide-y divide-gray-200">
        <THead columns={columns} setSortingKey={setSortingKey} />
        <TBody data={data} />
      </table>
      <div className="flex justify-end">
        <Pagination />
      </div>
    </>
  );
}

export default UsersTableContainer;