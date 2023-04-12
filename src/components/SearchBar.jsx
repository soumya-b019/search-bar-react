import React, {useState} from 'react'
import {FaSearch} from 'react-icons/fa'
import './SearchBar.css'

const SearchBar = (props) => {

    const {setResults} = props;
    const[input, setInput] = useState("");

    const fetchData = (value) => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((json) => {
            // console.log(json);
            const results = json.filter((user) => {
                return (value && user && user.name && 
                    user.name.toLowerCase().includes(value)
                );
            })
            // console.log(results);
            setResults(results);
        })
    }

    const handleChange = (value) => {
        setInput(value);
        fetchData(value);
    }

    return (
        <div className='input-wrapper'>
            <FaSearch id='search-icon'/>
            <input placeholder='Type to search...' 
                value={input}
                onChange={(e) => handleChange(e.target.value)}
            />
        </div>
    )
}

export default SearchBar