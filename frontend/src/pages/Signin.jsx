import React from 'react'
import InputText from '../components/InputText'
import Button from '../components/Button'
import TextLink from '../components/TextLink'
import SubHeader from '../components/SubHeader'
import MainHeader from '../components/MainHeader'

const Signin = () => {
  return (
    <div>
      <div className=" flex h-screen m-0 bg-slate-600 ">
        <div className='p-9  text-slate-200 mx-auto my-auto w-2/6 h-4/6 bg-black rounded-lg'>
          <MainHeader lable={"Sign in"} />
          <SubHeader lable={"signin to your account"} />
          <div>
          
            <InputText heading={"Email"} />
            <InputText heading={"Password"} />
            <Button lable={"Signin"} />
            <TextLink lable={"don't have an account"} link={"signup"} topage={"/signup"} />
          </div>


        </div>

      </div>
    </div>
  )
}

export default Signin