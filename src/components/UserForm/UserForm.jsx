import React, { useState, useEffect } from "react";
import Button from "components/common/Button/Button";
import Input from "components/common/Input/Input";
import SelectInput from "components/common/SelectInput/SelectInput";
import Notification from "components/common/Notification/Notification";
import {
  emailInvalidOrExists,
  storeUserData,
  validateEachFields
} from "services/userService";

const GENDER_OPTIONS = [
  { label: "Female", value: "Female" },
  { label: "Male", value: "Male" },
];

const UserForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("Male");
  const [phone, setPhone] = useState("");
  const [emailErr, setEmailErr] = useState(null);
  const [created, setCreated] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setCreated(false)
    }, 3000)
  }, [created])

  const resetForm = () => {
    setName('');
    setEmail('');
    setGender('Male');
    setPhone("");
    setEmailErr(null);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const noBlankInputs = validateEachFields([name, gender, phone, email]);
    if (noBlankInputs) {
      const emailIsInvalid = await emailInvalidOrExists(email);
      if (!emailIsInvalid) {
        const inputs = { name, email, gender, phone };
        storeUserData(inputs)
          .then(res => {
            resetForm();
            setCreated(true);
          })
          .catch(err => {
            setCreated('error');
            console.log(err)
          });
      } else {
        setEmailErr("This email is invalid or already in use.");
        setCreated('error');
      }
    } else {
      alert('Form fields are left blank!')
    }
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
            error={emailErr}
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
      {created && created !== 'error' && (
        <Notification type="success" message="User created successfully" />
      )}
      {created !== false && created === 'error' && (
        <Notification type="error" message="User creation failed" />
      )}
    </form>
  );
};

export default UserForm;
