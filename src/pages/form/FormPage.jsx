import React from "react";
import Layout from "containers/Layout";
import UserForm from "components/UserForm/UserForm";

const FormPage = () => {
  return (
    <Layout>
      <div className="flex justify-center">
        <UserForm />
      </div>
    </Layout>
  );
};

export default FormPage;
