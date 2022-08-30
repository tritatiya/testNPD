import React, { useEffect, useState } from 'react'
import './CategoryList.css'
import {useNavigate} from 'react-router-dom'

const CategoryList = () => {
   const navigate = useNavigate()
   const [category, setCategory] = useState([])

   useEffect(() => {
     const fetchData = async ()=>{
      fetch('https://npd9.com/api-lumen/customer/category')
  .then((response) => response.json())
  .then((data) => {
      setCategory(data.data)
  });
     }
   fetchData()

   }, [])
   

  return (
    <div className='container-category'>
        <div className='title-category'>
            <h2>หมวดหมู่สินค้า</h2>
        </div>
        <div className='list-category'>
            {category.map((data)=>(
               <div className='category' onClick={()=>navigate('/category/'+data.id)}>
               <img className='img-category' src={data.thumbnail} alt="logo-img" />
               <div className='item-category'>
                  {data.name_thai}
               </div>
          </div>
            ))}
        </div>
    </div>
  )
}

export default CategoryList