import React, { useState } from 'react'
import MainHeader from '../components/MainHeader'
import SubHeader from '../components/SubHeader'
import InputText from '../components/InputText'
import Button from '../components/Button'

import axios from 'axios'
import { useLocation } from 'react-router-dom';
import toast from 'react-hot-toast'

const Sendmoney = () => {

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  console.log(params)
  const userId = params.get('to');
  const name=params.get('name')
  console.log(userId)
  const [amount, SetAmount] = useState(0);
  return (
    <div>
      <div className=" flex h-screen m-0 bg-slate-600 ">
        <div className='p-9  text-slate-200 mx-auto my-auto w-2/6 h-3/6 bg-black rounded-lg'>

          <MainHeader lable={"Send Money"} />
          <div className='flex items-center gap-3'>
            <div className='bg-white text-black p-3 rounded-full font-bold text-2xl'>{name.charAt(0).toUpperCase()}</div>
            <SubHeader lable={name} />
          </div>
          <div>


            <InputText heading={"Enter Amount"}
              onChange={(e) => {
                SetAmount((e.target.value) * 100)
              }} />
            <Button lable={"Inititate Transfer"}
              onClick={async () => {
                try {
                  const token = localStorage.getItem("token");
                 
                  const response = await axios.post("http://localhost:4003/api/v1/account/transaction", {
                    to: userId,
                    amount: amount
                  }, {

                    headers: {
                      Authorization: `Bearer ${token}`
                    }


                  })

                  toast.success(response.data.message)

                  
                } catch (error) {
                   toast.error(error.response.data.message)
                  
                }

               
              }} />

          </div>


        </div>

      </div>
    </div>
  )
}

export default Sendmoney