import React from 'react';
import './Search.css'

function Search({searchInput, search}) {
  return (
    <div className="search-bar">
        <input type="text" 
        placeholder='search for movie...'
        className='search'
        onChange={searchInput}
        onKeyPress={search}/>
    </div>
  )
}

export default Search