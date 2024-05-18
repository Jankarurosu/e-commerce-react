import './ProductDisplay.css'
import star_icon from '../assets/star_icon.png'
import star_dull_icon from '../assets/star_dull_icon.png'

export const ProductDisplay = (props) => {

    const { product } = props

    return (
        <div className='productdisplay'>
            <div className="productdisplay-left">
                <div className='productdisplay-img-list'>
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className='productdisplay.img'>
                    <img className='productdisplay-main-img'
                        src={product.image}
                        alt="product_image" />
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-stans">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>(122)</p>
                </div>
                <div className="producdisplay-right-prices">
                    <div className="productdisplay-price-old"><s>${product.old_price}</s></div>
                    <div className="productdisplay-price-new">${product.new_price}</div>
                </div>
                <div className="productdisplay-right-description">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit tortor aliquet, primis a quis montes sodales fames nulla pulvinar, tellus eleifend eu phasellus auctor dictum augue est. Eros sapien facilisis vivamus tellus aenean integer ligula velit donec metus penatibus ac quisque in accumsan, nulla magna bibendum nisi volutpat quam varius congue nascetur feugiat parturient mattis diam.
                </div>
                <div className="productdisplay-right-size">
                    <h1>Select Size</h1>
                    <div className="productdisplay-right-size">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <button>ADD TO CART</button>
                <p className='productdisplay-right-category'><span>Category : </span>Women, T-Shirt, Crop Top</p>
                <p className='productdisplay-right-category'><span>Tags : </span>Modern, Latest</p>
            </div>
        </div>
    )
}


