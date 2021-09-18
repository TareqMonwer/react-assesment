import UsersTable from 'components/UsersTable/UsersTable';
import Layout from 'containers/Layout';
import React from 'react';

const ListPage = () => {
  return (
    <Layout>
      <h1>List of Random Users</h1>

      <UsersTable />
    </Layout>
  );
}

export default ListPage;