import React from "react";
import "./search-field.styles.css";

export const SearchField = ({ placeholder, handleChange }) => (
  <center>
    <input
      className="input"
      onChange={handleChange}
      type="search"
      id="fname"
      name="fname"
      placeholder={placeholder}
    />
  </center>
);
