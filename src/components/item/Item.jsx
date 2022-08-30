import React, { useEffect, useState } from 'react'
import './Item.css'
import {useNavigate,useParams} from 'react-router-dom'

const Item = () => {
    const navigate = useNavigate()
    const {id}= useParams()
    const [item, setItem] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        console.log(id)
        const fetchData = async ()=>{
         fetch('https://npd9.com/api-lumen/customer/product/'+id)
     .then((response) => response.json())
     .then((data) => {
         setItem(data.data)
         setLoading(false)
     });
        }
      fetchData()
   
      }, [])

  return (
    loading?null:
    (<div className='container-item'>
        <div className='pic-item'>
        <img src={item.thumbnail} alt="logo-img"/>
        </div>
        <div className='main-item'>
            <div className='title'>
              {item.name}
            </div>
           
            <div dangerouslySetInnerHTML={{__html: item.detail }} />
            <div className='size'>
                ราคา
                {item.price_list.map((data)=>(
                    data.name?<div>
                    <div>{data.name}</div>
                    <div>ราคา {data.rent==1?
                    (<div>{data.rent_month} บาท/เดือน - {data.rent_day} บาท/วัน</div>):
                    (<div>{data.price_min} - {data.price_max} บาท</div>)} </div>
                    </div>:(<div>ไม่พบข้อมูล</div>)
                ))}
                
                
            </div>
        </div>
        </div>)
  )
}

export default Item