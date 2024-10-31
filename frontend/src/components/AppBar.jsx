import axios from 'axios';
import React, { useEffect, useState } from 'react'

const AppBar = ({token}) => {
  const[name,SetName]=useState("");
  useEffect(()=>{
    async function getcontent() {
      const response = await axios.get("http://localhost:4003/api/v1/user/", {

        headers: {
          Authorization: `Bearer ${token}`
        }


      });
      SetName(response.data.data.name)
      

    }


    getcontent();


  },[])
  return (
    <div>
      <div className='flex justify-between p-6 items-center'>
        <div className='font-extrabold text-xl'>PayTM V1</div>
        <div className='flex justify-start gap-3 items-center'>
          <div className='text-lg font-semibold'>{name}</div>
          <div className='rounded-full bg-slate-500 p-3 font-extrabold'>{name.charAt(0).toUpperCase()}</div>
        </div>
      </div>
    </div>
  )
}

export default AppBar