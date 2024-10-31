import axios from 'axios'
import React, { useEffect, useState } from 'react'
import User from './User'
import Search from './Search'

const Users = ({ onChange,content}) => {
   

    return (
        <div>
            <div className='font-bold text-white  text-2xl p-4'>Users</div>
            <div className='p-4'>
                <Search onChange={onChange} />
            </div>
            <div className=''>
                {content.map((user) => (
                    <User key={user._id} userName={user.name} userEmail={user.email} userLastname={user.lastname} userId={user._id} /> // Render User component for each item
                ))}
            </div>

        </div>
    )
}

export default Users