import React, { useState } from 'react'
import MainHeader from '../components/MainHeader'
import SubHeader from '../components/SubHeader'
import InputText from '../components/InputText'
import Button from '../components/Button'
import TextLink from '../components/TextLink'
import axios from "axios"
import toast from "react-hot-toast"
import { useNavigate } from 'react-router-dom'

const Signup = () => {
  const [name, SetName] = useState("");
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const [lastname, SetLastname] = useState("");
  const navigate = useNavigate();

  return (
    <div className=" flex h-screen m-0 py-10 bg-slate-600 ">
      <div className='p-9  text-slate-200 mx-auto my-auto w-2/6 h-full  bg-black rounded-lg'>
        <MainHeader lable={"Sign up"} />
        <SubHeader lable={"create an account"} />
        <div>
          <InputText heading={"Name"}
            onChange={(e) => {
              SetName(e.target.value)

            }} />

          <InputText heading={"Lastname"}
            onChange={(e) => {
              SetLastname(e.target.value)
            }} />

          <InputText heading={"Email"}
            onChange={(e) => {
              SetEmail(e.target.value)
            }} />

          <InputText heading={"Password"}
            onChange={(e) => {
              SetPassword(e.target.value)
            }} />

          <Button lable={"Signup"} onClick={
            async () => {
              const response = await axios.post("http://localhost:4003/api/v1/user/signup", {
                name: name,
                lastname: lastname,
                email: email,
                password: password
              })

              const token = response.data.data
              localStorage.setItem("token", token);

              if (response.data.data) {
                toast.success(response.data.message)
                navigate("/dashboard")
              } else {
                toast.error(response.data.message)
              }

            }
          } />
          <TextLink lable={"already have an account"} link={"signin"} topage={"/signin"} />
        </div>


      </div>

    </div>
  )
}

export default Signup