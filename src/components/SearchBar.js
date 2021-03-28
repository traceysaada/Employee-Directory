import React from "react";

function SearchBar({handleSearch}){
    return (
        <form>
            <input type="search"
            placeholder="Type to filter employees by name"
            onChange={e => handleSearch(e)} />
        </form>
    )
}
export default SearchBar;