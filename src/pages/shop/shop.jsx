import React from 'react'
import { PRODUCTS } from '../../components/products'
import {Product} from './product'
import './shop.css'

export const Shop = () => {
  return (
    <div className="Shop">
     <div className='shop_title' >
        <h1>MonsterTech Shop</h1>
     </div>
     <div className='products' > {PRODUCTS.map((product) => (<Product data={product}/>))}</div>

    </div>
  )
}
