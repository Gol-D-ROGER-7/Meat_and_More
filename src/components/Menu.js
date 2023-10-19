import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Menu = () => {

  const [ menu, setMenu ] = useState([]);

  const getData = async () => {
    const res = await axios.get("https://www.themealdb.com/api/json/v1/1/categories.php")
    const items = await res.data.categories;    ;
    setMenu(items)
  }
  useEffect( () => {
    getData();
    console.log(menu)
  }, []);


  return (
    <>
      <div className="menu-card">
      {menu.map( (e) => {
                const { strCategory, strCategoryThumb } = e;
                return(
                <>
                  <img src={strCategoryThumb} alt="" />
                  <h1>{strCategory}</h1>
                </>
              ) 
          })}
      </div>
      <h5 className='last'>{"(◍•ᴗ•◍)"}</h5>
      
    </>
  )
}

export default Menu
