import React from "react";
import { useState } from "react";

const Contact = () => {
  const [id, setId] = useState("");
  const [err, seterror] = useState(false);
  const [Password, setPassword] = useState(" ");

  const idvalidation = (e) => {
    const item = e.target.value;

    if (item.lenght < 3) {
      seterror(true);
    } else {
      seterror(false);
    }
    setId(item);
  };
  const passValidation = (e) => {
    const item = e.target.value;

    if (item.lenght < 3) {
      seterror(true);
    } else {
      seterror(false);
    }
    setPassword(item);
  };

  function formsubmission(e) {
    e.preventDefault();
  }
  return (
    <>
      <form
        onSubmit={formsubmission}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: "4px",
        }}
      >
        <input
          type="text"
          placeholder="enter a name"
          onChange={idvalidation}
        ></input>{" "}
        {err ? <span>password is ok </span> : ""}
        <input
          type="text"
          placeholder="enter a password"
          onChange={passValidation}
        ></input>
        <button>login</button>
      </form>
    </>
  );
};

export default Contact;
