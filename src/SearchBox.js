import React from "react";

const SearchBox = ({ searchChange }) => {
    return (
        <React.Fragment>
            <input
                // ba bg-light-red bg-washed-red
                className='pa3 ba bg-washed-red'
                id='robotSearchBox'
                type='search'
                placeholder='search a robots'
                onChange={searchChange}
            />
        </React.Fragment>
    );
};

export default SearchBox;