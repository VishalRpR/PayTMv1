import React from 'react'
import AppBar from '../components/AppBar'
import Balance from '../components/Balance'
import User from '../components/User'

const Dashboard = () => {
  return (
    <div className='bg-slate-400  h-screen'>
      <div className='bg-slate-800 text-slate-100'>
        <AppBar />
        
      </div>
      <div>
        <Balance />
      </div>
      <div>Users</div>
      <div className=''>
        <User />
        <User />
        <User />
        <User />
        <User />
        
      </div>
      
      
    </div>
  )
}

export default Dashboard