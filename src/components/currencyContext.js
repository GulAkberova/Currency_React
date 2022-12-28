import { createContext,useState } from "react";

export const currencyContext=createContext(null)

export const CurrencyProvider=({ children})=>{
  const [all, setAll]=useState([])
  const [value,setValue]=useState(1)
  const [value1, setValue1]=useState(1)
  const [currency, setCurrency]=useState('')
  const [currency1, setCurrency1]=useState('')
    
  const values={
      all,
      setAll,
      value,
      setValue,
      value1,
      setValue1,
      currency,
      setCurrency,
      currency1,
      setCurrency1

  }

  return(
    <currencyContext.Provider value={values
    }>{children}</currencyContext.Provider>
  )
}