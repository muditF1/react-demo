import React from 'react';

const SearchBox = ({ searchChange }) => {
    return (
        <input
            className='pa2 ba b--green bg-lightest-blue'
            type='search'
            placeholder='Search Robots'
            onChange={searchChange}
        />
    );
}

export default SearchBox;