import React from 'react'

const AppBar = () => {
  return (
    <div>
        <div className='flex justify-between p-6 items-center'>
            <div className='font-extrabold text-xl'>PayTM V1</div>
            <div className='flex justify-start gap-3 items-center'>
                <div className='text-lg font-semibold'>Vishal</div>
                <div className='rounded-full bg-slate-500 p-3 font-extrabold'>V</div>
            </div>
        </div>
    </div>
  )
}

export default AppBar