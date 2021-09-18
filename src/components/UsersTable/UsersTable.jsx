import { useEffect, useState } from "react";
import {
  getRandomUsers,
} from "services/userService";
import THead from "./THead";

const COLUMNS = [
  { index: 'name', label: 'Name' },
  { index: 'email', label: 'Email' },
  { index: 'phone', label: 'Phone' },
  { index: 'gender', label: 'Gender' }
];

const UsersTable = () => {
  const [randomUsers, setRandomUsers] = useState([]);

  useEffect(() => {
    getRandomUsers(20)
      .then((res) => {
        setRandomUsers(res);
      })
      .catch((err) => console.log(err));
  }, [])


  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <THead columns={COLUMNS} />
              <tbody className="bg-white divide-y divide-gray-200">
                {randomUsers.length > 0 ? (
                  randomUsers.map((user, index) => {
                    const { name, email, gender, cell } = user;
                    const fullName = `${name.title} ${name.first} ${name.last}`;
                    return (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {fullName}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {email}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {gender}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {cell}
                        </td>
                      </tr>
                    );
                  })) : (
                    <tr>
                      <td colSpan={4} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                        Loading...
                      </td>
                    </tr>
                  )
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersTable;
