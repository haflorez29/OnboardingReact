import React, { useState } from "react";
import "../style/formWelcome.css";
import { Link, BrowserRouter as Router } from "react-router-dom";

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
      <Router>
        <Link
          // to="/imagine"
          to={{
            pathname: "/imagine",
            state: ""
          }}
        >
          <button className="btn btn-success btn-sm ml-1  buttonWelcome ">
            Save
          </button>
        </Link>
      </Router>
    </form>
  );
};

export default FormWelcome;
