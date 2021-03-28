import React from "react";
import "../styles/Header.css";

function SearchBar({handleSearch}){
    return (
        <div 
        <form>
            <input type="search"
            placeholder="Type to filter employees by name"
            onChange={e => handleSearch(e)} />
        </form>
    )
}
export default SearchBar;