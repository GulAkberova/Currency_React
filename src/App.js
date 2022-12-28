import "./App.css";
import React, { useContext, useEffect } from "react";
import Currency from "./components/Currency";
import { currencyContext } from "./components/currencyContext";

function App() {

  let {all, setAll,value, setValue, value1, setValue1 }=useContext(currencyContext)

  useEffect(() => {
    fetch(
      "https://api.freecurrencyapi.com/v1/latest?apikey=eRFp8JVBUuRprAHvbCoYhUV8UP0cHQ8OhYn10wm1"
    )
      .then((res) => res.json())
      .then((data) =>{
        // console.log(data.data)
        // console.log(Object.values(data.data))
        
        setAll(data.data)
      });
  }, []);
 
 

  return(
    <>
    <h1>sdvfd</h1>
   <Currency/>
   </>
  )
 
}

export default App;
