import React, { useEffect, useMemo, useState } from 'react'
import AppBar from '../components/AppBar'
import Balance from '../components/Balance'
import User from '../components/User'
import Search from '../components/Search'
import Users from '../components/Users'
import axios from 'axios'

const Dashboard = () => {
  const [content, SetContent] = useState([]);
  const [filter, SetFilter] = useState("");

  useEffect(() => {

    async function getcontent() {
      const response = await axios.get("http://localhost:4003/api/v1/user/bulk?filter=" + filter, {

        headers: {
          Authorization: `Bearer ${{ token }.token}`
        }


      });
      
      SetContent(response.data.user)

    }


    getcontent();


  }, [content]);


  const token = useMemo(() => {
    const token = localStorage.getItem("token");

    return token
  }, [])


  return (
    <div className='bg-black  h-screen'>
      <div className='bg-slate-800 text-slate-100'>
        <AppBar token={token} />

      </div>

      <Balance token={token} />


      <Users content={content} onChange={
        (e) => {

          SetFilter(e.target.value)

        }
      } />

    </div>
  )
}

export default Dashboard