import React from "react";
import "./Searchbar.css";
import searchbarBg from "../../assets/backgroundSearch.png";

function Searchbar() {
  return (
    <>
      <div className="container mt-5 searchBar">
        <div className="input-group mb-3 searchBarInputGroup">
          <input
            type="text"
            className="form-control searchBarInput"
            placeholder="Place name..."
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <button className="input-group-text searchBarIcon" id="basic-addon2">
            Search
          </button>
        </div>
      </div>
    </>
  );
}

export default Searchbar;
