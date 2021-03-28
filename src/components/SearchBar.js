import React from "react";
import "../styles/SearchBar.css";

function SearchBar({handleSearch}){
    return (
<div className="searchBar">
        <form>
            <input type="search"
            placeholder="Type to filter employees by name"
            onChange={e => handleSearch(e)} />
        </form>
        </div>
    )
}
export default SearchBar;