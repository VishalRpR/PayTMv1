import React, { useState } from 'react'
import InputText from '../components/InputText'
import Button from '../components/Button'
import TextLink from '../components/TextLink'
import SubHeader from '../components/SubHeader'
import MainHeader from '../components/MainHeader'
import axios from 'axios'
import toast from 'react-hot-toast'
import { Navigate, useNavigate } from 'react-router-dom'

const Signin = () => {
  const [password, SetPassword] = useState("")
  const [email, SetEmail] = useState("")
  const navigate=useNavigate();
  return (
    <div>
      <div className=" flex h-screen m-0 bg-slate-600 ">
        <div className='p-9  text-slate-200 mx-auto my-auto w-2/6 h-4/6 bg-black rounded-lg'>
          <MainHeader lable={"Sign in"} />
          <SubHeader lable={"signin to your account"} />
          <div>

            <InputText heading={"Email"}
              onChange={(e) => {
                SetEmail(e.target.value)
              }} />
            <InputText heading={"Password"}
              onChange={(e) => {
                SetPassword(e.target.value)
              }} />
            <Button lable={"Signin"}
              onClick={async () => {
                try {
                  const response = await axios.post("http://localhost:4003/api/v1/user/signin", {
                    email: email,
                    password: password
                  })

                  const token = response.data.data
                  localStorage.setItem("token", token);

                  toast.success(response.data.message);
                         navigate(`/dashboard`)

                } catch (error) {
                  toast.error(error.response.data.message)
                }


              }} />
            <TextLink lable={"don't have an account"} link={"signup"} topage={"/signup"} />
          </div>


        </div>

      </div>
    </div>
  )
}

export default Signin