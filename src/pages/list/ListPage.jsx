import { useEffect, useState } from "react";
import { getRandomUsers } from "services/userService";
import UsersTable from 'components/UsersTable/UsersTable';
import Layout from 'containers/Layout';
import React from 'react';

const COLUMNS = [
  { index: 'name', label: 'Name' },
  { index: 'email', label: 'Email' },
  { index: 'cell', label: 'Phone' },
  { index: 'gender', label: 'Gender' }
];

const ListPage = () => {
  const [randomUsers, setRandomUsers] = useState([]);

  useEffect(() => {
    getRandomUsers(20)
      .then((res) => {
        setRandomUsers(res);
      })
      .catch((err) => console.log(err));
  }, [])

  return (
    <Layout>
      <h1>List of Random Users</h1>

      <UsersTable columns={COLUMNS} data={randomUsers} />
    </Layout>
  );
}

export default ListPage;