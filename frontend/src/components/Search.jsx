import React from 'react'

const Search = ({ onChange }) => {
    return (
        <div>
            <input type="text" className='w-full p-5 text-white bg-transparent border rounded-full border-white' placeholder="Search"
                onChange={onChange} />
        </div>
    )
}

export default Search