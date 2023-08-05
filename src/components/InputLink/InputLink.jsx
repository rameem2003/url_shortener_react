import React, { useState } from "react";
import "./inputlink.css";

const InputLink = ({ setValue }) => {
  const [getValue, setGetvalue] = useState("");

  const handleClick = () => {
    setValue(getValue);
    setGetvalue("");
  };

  return (
    <div className="inputsection">
      <h1>
        URL{" "}
        <span>
          Shortener <sup style={{ fontSize: "22px" }}>Beta</sup>
        </span>
      </h1>

      <div className="input">
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
        <button type="button" onClick={handleClick}>
          Short
        </button>
      </div>
    </div>
  );
};

export default InputLink;
