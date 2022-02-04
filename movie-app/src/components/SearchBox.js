import React from "react";

const SearchBox = (props) => {
  return (
    <>
      <div className="col col-sm-4">
        <input
          value={props.searchValue}
          onChange={(event)=> props.setSearchValue(event.target.value)}
          className="form-control"
          placeholder="Type to search..."
        ></input>
      </div>
    </>
  );
};

export default SearchBox;
