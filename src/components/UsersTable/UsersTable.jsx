import _ from "lodash";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUsers } from "services/userService";
import { getRandomUsers, saveRandomUsersToStorage } from "utils/users";
import UsersTableContainer from 'containers/UsersTableContainer';
import React from "react";

const COLUMNS = [
  { index: "name", label: "Name" },
  { index: "email", label: "Email" },
  { index: "cell", label: "Phone" },
  { index: "gender", label: "Gender" },
];

const UsersTable = () => {
  const dispatch = useDispatch();
  const itemsPerPage = useSelector(state => state.pagination.itemsPerPage);
  const currentPage = useSelector(state => state.pagination.currentPage);
  const [randomUsers, setRandomUsers] = useState([]);
  // eslint-disable-next-line 
  const [sortingKey, setSortingKey] = useState();

  useEffect(() => {
    const fn = () => {
      getRandomUsers(itemsPerPage, currentPage)
      .then((users) => {
        setRandomUsers(users);
        dispatch(loadUsers(users));
        // saveRandomUsersToStorage(users);
      })
      .catch((err) => console.log(err));
    }
    fn();
  }, [dispatch, itemsPerPage, currentPage]);

  const handleSetSortingKey = (key) => {
    setSortingKey(key);
    if (key === "name") {
      const sortedByName = _.sortBy(randomUsers, (o) => {
        return typeof o.name === "object" ? o.name.first : o.name;
      });
      setRandomUsers(sortedByName);
    } else {
      setRandomUsers(_.sortBy(randomUsers, (o) => o[key]))
    }
  };

  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <UsersTableContainer
              data={randomUsers}
              columns={COLUMNS}
              setSortingKey={handleSetSortingKey}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersTable;
