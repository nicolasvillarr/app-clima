import React, { useState } from "react";
import "../styles/SearchBar/SearchBar.css";

export const SearchBar = (props) => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    setName(e.target.value);
  };

  return (
    <>
      <form
        className="search"
        onSubmit={(e) => {
          e.preventDefault();
          props.onSearch(name);
          setName("");
        }}
      >
        <input
          className="input"
          type="text"
          onChange={handleSubmit}
          placeholder="Ciudad"
          value={name}
        />
        
        <button className="btnNav">Buscar</button>
      </form>
    </>
  );
};
