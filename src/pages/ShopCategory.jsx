import { useContext } from 'react'
import './css/ShopCategory.css'
import { ShopContext } from '../context/ShopContext'

export const ShopCategory = (props) => {

    const { all_products } = useContext(ShopContext)

    return (
        <div className="shop-category">

        </div>
    )
}


