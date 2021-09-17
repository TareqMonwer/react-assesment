import React, { useState } from "react";
import Button from "components/common/Button/Button";
import Input from "components/common/Input/Input";
import SelectInput from "components/common/SelectInput/SelectInput";

const GENDER_OPTIONS = [
  { label: "Female", value: "Female" },
  { label: "Male", value: "Male" },
];

const UserForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState();
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("SUBMITTING THE FORM");
    console.log(name, email, gender, phone);
  };

  return (
    <form className="w-full max-w-lg">
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <Input
            label="Name"
            id="name"
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={setName}
          />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <Input
            label="Email"
            id="email"
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={setEmail}
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-2">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <SelectInput
            label="Gender"
            id="gender"
            selectedValue={gender}
            options={GENDER_OPTIONS}
            onChange={setGender}
          />
        </div>
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <Input
            label="Phone"
            id="phone"
            type="text"
            placeholder="Phone"
            value={phone}
            onChange={setPhone}
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-2">
        <div className="w-full md:w-full px-3 mb-6 md:mb-0">
          <Button fluid onClick={handleSubmit} type="submit" />
        </div>
      </div>
    </form>
  );
};

export default UserForm;
