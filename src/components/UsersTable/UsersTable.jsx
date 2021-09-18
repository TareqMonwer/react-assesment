import axios from "axios";
import { useEffect, useState } from "react";
import {
  getJSONServerUsers,
  getRandomUsers,
  storeUserData,
  userEmailExists,
} from "services/userService";
import THead from "./THead";

const COLUMNS = [{label: 'Name'}, {label: 'Email'}, {label: 'Phone'}, {label: 'Gender'}]

const UsersTable = () => {
  const [randomUsers, setRandomUsers] = useState([]);

  useEffect(() => {
    getRandomUsers(20)
      .then((res) => {
        setRandomUsers(res);
        createUsers(res)
      })
      .catch((err) => console.log(err));
  }, [])

  const createUsers = (usersResponse) => {
    usersResponse.forEach((user, index) => {
      if (!userEmailExists(user.email)) {
        const { name, email, cell: phone, gender } = user;
        const completeName = `${name.title} ${name.first} ${name.last}`;
        const userObj = {
          email,
          name: completeName,
          phone,
          gender,
          id: Date.now(),
        };
        storeUserData(userObj)
      }
    });
  };

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
