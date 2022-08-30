import React, { useEffect, useState } from 'react'
import './ItemList.css'
import {useNavigate,useParams} from 'react-router-dom'

const itemList = () => {
    const navigate = useNavigate()
    const {id}= useParams()
    const [itemList, setItemList] = useState([])

    useEffect(() => {
        console.log(id)
        const fetchData = async ()=>{
         fetch('https://npd9.com/api-lumen//customer/product/category/'+id)
     .then((response) => response.json())
     .then((data) => {
         setItemList(data.data.product)
     });
        }
      fetchData()
   
      }, [])

  return (
    <div className='container-list-item'>
        <div className='title-list-item'>
            <h2>รายการสินค้า</h2>
        </div>
        <div className='list-item'>
            {itemList.map((data)=>(
                <div className='item' >
                <img className='img-item' src={data.thumbnail} alt="logo-img" />
                <div className='detail-item'>
                    <div className='title-item'>
                       {data.name.split(' ')[0]}
                    </div>
                    <button className='buy-button' onClick={()=>navigate('/item/'+data.id)}>ซื้อสินค้า</button>
                </div>
           </div>
            ))}        
        </div>
    </div>
  )
}

export default itemList