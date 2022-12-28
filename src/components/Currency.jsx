import React, { useContext } from 'react'
import { currencyContext } from './currencyContext'

function Currency() {
  let {all, setAll, value, setValue, value1, setValue1,currency,setCurrency,currency1,setCurrency1}=useContext(currencyContext)
   console.log(value,currency)
   console.log(value1,currency1)
   
  return (
    <>
    <input type={'number'} value={value || ''} onChange={(e)=>setValue(e.target.value)}/>
    <select  onChange={(e)=>setCurrency(e.target.value)}>
      {
        Object.keys(all).map((i)=>{
        
         return(
          <option value={i}>{i}</option>

         )

        })
      }
    </select><br/>
    <input type={'number'} value={value1 || ''}  onChange={(e)=>setValue1(e.target.value)}/>
    <select onChange={(e)=>setCurrency1(e.target.value)}>
      {
        Object.keys(all).map((i)=>{
        
         return(
          <option value={i}>{i}</option>

         )

        })
      }
    </select>
    </>
  )
}

export default Currency