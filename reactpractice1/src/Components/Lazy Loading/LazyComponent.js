import React,{useEffect,useState} from 'react'
import axios from 'axios'

const LazyComponent = () => {
    const [Data,setData]=useState('');
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/photos').then((res)=>{setData(res.data)
         console.log(res.data)})
        .catch((err)=>console.log(err));

    },[])
  return (
    <div>
        {
            Data && Data.map((item)=>{
                return(
                    <div>
                        <img src={item.thumbnailUrl} alt='image' height='50px' width='50px' />
                       
                    </div>
                )
            })
        }
    </div>
  )
}

export default LazyComponent