import React, { useState, useEffect } from "react";
import "./inputlink.css";

const InputLink = ({ setValue }) => {
  const [getValue, setGetvalue] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    setValue(getValue);
    setGetvalue("");
  };

  return (
    <div className="inputsection">
      <h1>
        URL{" "}
        <span>
          Shortener{" "}
          <sup style={{ fontSize: "22px", display: "none" }}>Beta</sup>
        </span>
      </h1>

      <form className="input" onSubmit={handleClick}>
        <input
          type="text"
          name=""
          id=""
          placeholder="Enter Your Link"
          value={getValue}
          onChange={(e) => {
            setGetvalue(e.target.value);
          }}
        />
        <button type="submit">Short</button>
      </form>
    </div>
  );
};

export default InputLink;
