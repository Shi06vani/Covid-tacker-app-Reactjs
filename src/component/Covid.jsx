import React from 'react'
import  { useEffect,useState } from 'react'
import '../component/covid.css'

export default function Covid() {

       const [data, setdata] = useState([]);

           const getCovidData =  async()=>{
                 try{
                    const res= await fetch("https://data.covid19india.org/data.json");
                    
                    const  actualData= await res.json();
                    console.log(actualData.statewise[0]);
                    setdata(actualData.statewise[0]);
                 }
                catch(err){
                   console.log(err)
                }

           }    

  useEffect(()=>{
        getCovidData();
  },[]);

  return (
    <section >
        <div className="heading_part">
        <h1>LIVE</h1>
      <h2>COID-19 CORONAVAIROUS TRAKER</h2>

        </div>
      
    <ul className='display_card'>
        <li className='card1'>
            <div className='card_main1'>
                <div className='class_inner'>
                      <p className='card_name'> <span >OUP</span>   COUNTRY</p>
                      <p className='card_total  card_camll'>INDIA</p>
                </div>
            </div>
        </li>

        <li className='card2'>
            <div className='card_main2'>
                <div className='class_inner'>
                      <p className='card_name'> <span>TOTAL </span> RECOVERED</p>
                      <p className='card_total  card_camll'>{data.recovered}</p>
                </div>
            </div>
        </li>

        <li className='card3'>
            <div className='card_main3'>
                <div className='class_inner'>
                      <p className='card_name'> <span>TOTAL</span>   CONFIRMED</p>
                      <p className='card_total  card_camll'>{data.confirmed}</p>
                </div>
            </div>
        </li>

        <li className='card4'>
            <div className='card_main4'>
                <div className='class_inner'>
                      <p className='card_name'> <span>TOTAL</span>  DEATHS</p>
                      <p className='card_total  card_camll'>{data.deaths}</p>
                </div>
            </div>
        </li>

        <li className='card5'>
            <div className='card_main5'>
                <div className='class_inner'>
                      <p className='card_name'> <span>TOTAL</span>  ACTIVE</p>
                      <p className='card_total  card_camll'>{data.active}</p>
                </div>
            </div>
        </li>

        <li className='card6'>
            <div className='card_main6'>
                <div className='class_inner'>
                      <p className='card_name'> <span>LAST</span>   UPDATED</p>
                      <p className='card_total  card_camll'>{data.lastupdatedtime}</p>
                </div>
            </div>
        </li>


    </ul>
    </section>
  )
}
