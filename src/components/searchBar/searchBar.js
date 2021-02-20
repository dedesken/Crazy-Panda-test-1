import React, {useState} from 'react'
import './searchBar.css'

export const SearchBar = ({onSearch}) => {
    const [value, setValue] = useState('')

    const onChange = event => {
        setValue(event.target.value)
        onSearch(event.target.value)
    }

    return (
        <div className="search_bar">
            <span>Start typing to progressively search through the current table page</span>
            <input 
                type="text" 
                className="search_bar--input"
                onChange={onChange} 
                value={value}
            />
        </div>
    )
}
