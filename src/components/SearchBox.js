import React from "react";
import '../searchBox.css';

const SearchBox = ({ searchChange }) => {
    return (
        <React.Fragment>
            <input
                className='pa3 ma3 ba bg-black-30 white'
                id='robotSearchBox'
                type='search'
                placeholder='search a robots'
                onChange={searchChange}
            />
        </React.Fragment>
    );
};

export default SearchBox;