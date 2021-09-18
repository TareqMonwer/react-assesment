import TBody from "components/UsersTable/TBody";
import THead from "components/UsersTable/THead";
import Pagination from "components/common/Pagination/Pagination";

const UsersTableContainer = ({ columns, data, setSortingKey }) => {
  return (
    <>
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