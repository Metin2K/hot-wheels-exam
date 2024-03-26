import React from 'react'
import '../styles/Menu.css'
import {Data} from '../helpers/Data.js'
import  MenuItem  from './MenuItem.js'

function Menu() {
  return (
    <div className='menu'>
        <h1 className='menutitle'>Araçlarımız</h1>
        <div className='menulist'>
            {
                Data.map((menuItem, index) => {
                    return <MenuItem key={index} image={menuItem.image} name={menuItem.name} content={menuItem.content} price={menuItem.price} />;
                })
            }
        </div>
    </div>
  )
}

export default Menu