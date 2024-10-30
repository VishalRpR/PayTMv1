import React from 'react'
import MainHeader from '../components/MainHeader'
import SubHeader from '../components/SubHeader'
import InputText from '../components/InputText'
import Button from '../components/Button'
import TextLink from '../components/TextLink'

const Signup = () => {
  return (
    <div className=" flex h-screen m-0 py-10 bg-slate-600 ">
      <div className='p-9  text-slate-200 mx-auto my-auto w-2/6 h-full  bg-black rounded-lg'>
        <MainHeader lable={"Sign up"} />
        <SubHeader lable={"create an account"} />
        <div>
          <InputText heading={"Name"} />
          <InputText heading={"Lastname"} />
          <InputText heading={"Email"} />
          <InputText heading={"Password"} />
          <Button lable={"Signup"} />
          <TextLink lable={"already have an account" } link={"signin"} topage={"/signin"}/>
        </div>


      </div>

    </div>
  )
}

export default Signup