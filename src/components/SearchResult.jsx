import React from 'react'
import './SearchResult.css'

const SearchResult = (props) => {
    const {result} = props;
    return (
        <div className='search-result' 
        onClick={(e) => alert(`You clicked on ${result.name}`)}>
            {result.name};
        </div>
    )
}

export default SearchResult