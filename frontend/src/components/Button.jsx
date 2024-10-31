import React from 'react'

const Button = ({ lable, onClick }) => {
    return (
        <div className='py-5'>
            <button className='w-full rounded-lg p-3 text-xl text-slate-900 font-extrabold hover:bg-slate-500 bg-slate-400'
                onClick={onClick}>
                {lable}
            </button>
        </div>
    )
}

export default Button