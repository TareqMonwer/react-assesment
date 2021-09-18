import { useEffect, useState } from "react";
import Layout from "containers/Layout";
import UserForm from "components/UserForm/UserForm";
import { getUsers } from "utils/users";
import UsersTable from "components/UsersTable/UsersTable";

const COLUMNS = [
  { index: 'name', label: 'Name' },
  { index: 'email', label: 'Email' },
  { index: 'phone', label: 'Phone' },
  { index: 'gender', label: 'Gender' }
];

const FormPage = () => {
  const [users, setUsers] = useState();
  useEffect(() => {
    getUsers().then(users => setUsers(users))
  })
  return (
    <Layout>
      <div className="flex justify-center">
        <UserForm />
      </div>
      {users?.length > 0 &&
        <div className="flex justify-center mt-10">
          <UsersTable columns={COLUMNS} data={users} />
        </div>}
    </Layout>
  );
};

export default FormPage;
