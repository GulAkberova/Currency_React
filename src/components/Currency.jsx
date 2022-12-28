import React, { useContext } from "react";
import { currencyContext } from "./currencyContext";

function Currency() {
  let {
    all,
    setAll,
    value,
    setValue,
    value1,
    setValue1,
    currency,
    setCurrency,
    currency1,
    setCurrency1,
  } = useContext(currencyContext);
const handleValueChange1=(value)=>{
  setValue1(value*all[currency1]/all[currency])
  
  setValue(value)

}
const handleCurrencyChange1=(currency)=>{
  setValue1(value*all[currency1]/all[currency])
 
  setCurrency(currency)
  
  
}
const handleValueChange2=(value1)=>{
  setValue(value1*all[currency]/all[currency1])
 
  setValue1(value1)
  
}
const handleCurrencyChange2=(currency1)=>{
  setValue1(value*all[currency1]/all[currency])
 
  setCurrency1(currency1)
  
}

  return (
    <>
      <input
        type={"number"}
        value={value}
        onChange={(e)=>handleValueChange1(e.target.value)}
        // onChange={(e) => setValue(e.target.value)}
      />
      <select value={currency}  onChange={(e)=>handleCurrencyChange1(e.target.value)}>
        {Object.keys(all).map((i) => {
          return <option value={i}>{i}</option>;
        })}
      </select>
      <br />
      <input
        type={"number"}
        value={value1}
        onChange={(e)=>handleValueChange2(e.target.value)}

        // onChange={(e) => setValue1(e.target.value)}
      />
      <select
      onChange={(e)=>handleCurrencyChange2(e.target.value)}
      value={currency1}
        //  onChange={(e)=>setCurrency1(e.target.value)}
      >
        {Object.keys(all).map((i) => {
          return <option value={i}>{i}</option>;
        })}
      </select>
    </>
  );
}

export default Currency;
