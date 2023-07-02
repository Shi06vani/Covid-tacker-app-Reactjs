import React from 'react'
import { useEffect } from 'react'

export default function Try() {
  
    // let Api = "http://hn.algolia.com/api/v1/search?query=bar&tags=comment";
    let Api ="https://jsonplaceholder.typicode.com/users";
    

   const myData = async(url)=>{
              try{
                  const res = await fetch(url);
                  const data = await res.json();
                  console.log(data)
              }
              catch(err){

                console.log(err)
              }

   };


    useEffect(()=>{
        myData(Api);
    },[]);
    
  return (
    <div>
         <h2>my data</h2>
    </div>
  )
}
