import React from 'react'

const InputText = ({ heading }) => {
  return (
      <div className=' py-2'>
        <h1 className='text-xl'>{heading}</h1>
        <input className=' rounded-md bg-transparent border p-3 text-md w-full font-none border-slate-500 b-[0.2px] focus:outline-none foucs:border focus:border-sky-500'/>
    </div>
  )
}

export default InputText