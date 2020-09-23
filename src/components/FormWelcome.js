import React, { useState } from "react";

export const FormWelcome = ({ setName }) => {
  const [user, setUser] = useState("");

  const handleChange = (e) => {
    setUser(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setName(user);
    setUser('')
  };
 
  console.log(user)
  return (
    <form onSubmit={handleSubmit}>
      <input 
      type="text" 
      placeholder="Name" 
      onChange={handleChange}
      value={user}></input>
      <button>Save</button>
    </form>
  );
};
