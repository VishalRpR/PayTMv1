import axios from 'axios'
import React, { useEffect, useState } from 'react'


const Balance = ({ token }) => {
  const [balance, SetBalance] = useState("");

  useEffect(() => {

    async function setbalance() {

     

      const response = await axios.get("http://localhost:4003/api/v1/account/balance", {

        headers: {
          Authorization: `Bearer ${{ token }.token}`
        }


      })

      SetBalance(response.data.message);


    }

    setbalance();

  }, [])
  return (
    <div className=' text-slate-300 p-4 text-xl'>
      {balance}
    </div>
  )
}

export default Balance