import React, { useState } from "react";
import "../style/formWelcome.css";
import { Link } from "react-router-dom";

const FormWelcome = ({ setName }) => {
  const [user, setUser] = useState("");

  const handleChange = (e) => {
    setUser(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setName(user);
    setUser("");
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex mb-5">
      <input
        type="text"
        placeholder="Name"
        onChange={handleChange}
        value={user}
        className="inputName form-control"
      ></input>
        <Link
          to={{
            pathname: "/imagine",
            state: {user:user}
          }}
        >
          <button className="btn btn-success btn-md ml-1  buttonWelcome ">
            Save
          </button>
        </Link>
    </form>
  );
};

export default FormWelcome;
