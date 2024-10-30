import React from 'react'
import { Link } from 'react-router-dom'

const TextLink = ({lable,link,topage}) => {
  return (
    <div className='text-slate-400 p-2 text-lg'>
        {lable} <Link className=' text-slate-100 underline' to={topage}>{link}</Link>
    </div>
  )
}

export default TextLink