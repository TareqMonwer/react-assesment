import _ from "lodash";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { loadUsers } from "services/userService";
import { getRandomUsers, saveRandomUsersToStorage } from "utils/users";
import UsersTable from "components/UsersTable/UsersTable";
import Layout from "containers/Layout";
import React from "react";

const COLUMNS = [
  { index: "name", label: "Name" },
  { index: "email", label: "Email" },
  { index: "cell", label: "Phone" },
  { index: "gender", label: "Gender" },
];

const ListPage = () => {
  const dispatch = useDispatch();
  const [randomUsers, setRandomUsers] = useState([]);
  const [sortingKey, setSortingKey] = useState();

  useEffect(() => {
    const fn = () => {
      getRandomUsers(2)
      .then((users) => {
        setRandomUsers(users);
        dispatch(loadUsers(users));
        // saveRandomUsersToStorage(users);
      })
      .catch((err) => console.log(err));
    }
    fn();
  }, []);

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
    <Layout>
      <h1 className="mb-4 text-2xl text-gray-700">List of Random Users</h1>

      <UsersTable
        columns={COLUMNS}
        data={randomUsers}
        handleSetSortingKey={handleSetSortingKey}
      />
    </Layout>
  );
};

export default ListPage;
