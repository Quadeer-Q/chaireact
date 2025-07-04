import {useState, useEffect } from 'react';

function useCurrency(currency){
    const [data, setData]= useState({});
    useEffect(() => {
        fetch(`https://api.exchangerate.host/latest?base=${currency}`)
        .then((res)=> res.json())
        .then((res)=>{console.log(res);setData(res.rates)})
       
    },[currency])
    useEffect(()=>{  /** since we are using useEffect and it is asynchronous if we log directly it may show us old values hence keeping a t
                            track of data with a combination of useEffect so it gives me the latest value of data when logged */
        console.log(data)
    }, [data])
    
    return data 
}

export default useCurrency;