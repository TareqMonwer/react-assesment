import TBody from "components/UsersTable/TBody";
import THead from "components/UsersTable/THead";

const UsersTableContainer = ({ columns, data, setSortingKey }) => {
  return (
    <table className="min-w-full divide-y divide-gray-200">
      <THead columns={columns} setSortingKey={setSortingKey} />
      <TBody data={data} />
    </table>
  );
}

export default UsersTableContainer;