import React from 'react'
import { useNavigate } from "react-router-dom";

const User = ({ userName, userId, userLastname, userEmail }) => {
  const navigate = useNavigate();
  return (
    <div className='px-5 text-slate-200 border-b border-b-[0.5px] border-slate-500 py-2'>
      <div className='flex justify-between p-2 items-center'>

        <div className='flex justify-start gap-3 items-center'>
          <div className='rounded-full bg-slate-500 p-3 font-extrabold'>{userName.charAt(0).toUpperCase()}</div>
          <div className='text-lg font-semibold'>{userName}  {userLastname}</div>

        </div>
        <button className='rounded-full bg-slate-500 px-4 py-2 font-bold hover:bg-slate-500'
          onClick={() => {

            navigate(`/sendmoney?to=${userId}&name=${userName}`)
          }} >SendMoney</button>
      </div>
    </div>
  )
}

export default User