import React, { useEffect,useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github()
{
    // const [data,setData]=useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/Quadeer-Q')
    //     .then((response)=>response.json())
    //     .then(data=> {
    //         console.log(data)
    //         setData(data)
    //     })
    // },[])
    const data= useLoaderData()
    return(
        <div className='bg-gray-400 text-white text-4xl text-center'>
            Github followers: {data.followers}
        <img src={data.avatar_url} width={300}/>
        </div>
    )
}
export default Github
//it is generally ebtter to u know write this in a separate file but for now ok and also all the exports should be written in a index file make sure of it from next time this makes the loading easy while just hovernig over it, pretty fast
export const githubInfo= async ()=>
{
    const response= await fetch('https://api.github.com/users/Quadeer-Q')
    return response.json()
}