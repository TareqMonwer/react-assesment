import UsersTable from "components/UsersTable/UsersTable";
import Layout from "containers/Layout";
import React from "react";

const ListPage = () => {
  return (
    <Layout>
      <h1 className="mb-4 text-2xl text-gray-700">List of Random Users</h1>
      <UsersTable />
    </Layout>
  );
};

export default ListPage;
