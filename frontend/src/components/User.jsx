import React from 'react'

const User = () => {
  return (
    <div>
          <div className='flex justify-between p-2 items-center'>
              
              <div className='flex justify-start gap-3 items-center'>
                  <div className='rounded-full bg-slate-500 p-3 font-extrabold'>V</div>
                  <div className='text-lg font-semibold'>Vishal</div>
                 
              </div>
              <button className='rounded-full bg-slate-800 p-4 text-slate-100'>SendMoney</button>
          </div>  
    </div>
  )
}

export default User