import React from 'react';
import "../styles/general.css"
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import GrassIcon from '@mui/icons-material/Grass';
import StorefrontIcon from '@mui/icons-material/Storefront';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import CheckIcon from '@mui/icons-material/Check';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../state';
import { centerStyle } from '../utils/utils';
// import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';


function MenuCard(props) {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const userInfo = useSelector(state => state.user)
    const isLoggedIn = userInfo && userInfo.type === "student"
    const isInCart = isLoggedIn && Boolean(userInfo.cart.find(item => item._id === props._id))

    function handleAddToCart() {
        // console.log(userInfo.cart)
        const menuInfo = { ...props, quantity: 1 }
        if(isLoggedIn) {
            if(isInCart) {
                dispatch(removeFromCart({ id: props._id }))
            } else {
                dispatch(addToCart({ item: menuInfo }))
            }
        } else {
            alert("You must be logged in to add items to cart")
        }
        // console.log(userInfo.cart)
    }

    return <li className="wc-block-grid__product wc-block-layout" aria-hidden="false">
                <div className="wc-block-components-product-image wc-block-grid__product-image">
                    <a href>
                        <img
                            data-testid="product-image" alt={"picture of " + props.name}
                            src={`https://nutriease-api.vercel.app/uploads/menus/${props.picturePath}`}
                            sizes="(max-width: 800px) 100vw, 800px"
                            style={{objectFit: 'cover'}}/>
                    </a>
                </div>
                <h4 id='restaurant_name' className="wc-block-components-product-title wc-block-grid__product-title"><a onClick={() => navigate(`/restaurant/${props.restaurantId}`)} className="wc-block-components-product-name" href><StorefrontIcon sx={{"width": 15, "height": 15}}/> {props.restaurantName}</a></h4>
                <p style={{ fontWeight: 500, fontSize: "12px" }} className="wc-block-components-product-title wc-block-grid__product-title"><AccessAlarmIcon sx={{"width": 15, "height": 15}}/> {props.waitTime} min</p>
                <p style={{ fontWeight: 500, fontSize: "12px" }} className="wc-block-components-product-title wc-block-grid__product-title"><RestaurantIcon sx={{"width": 15, "height": 15}}/> {props.dietType}</p>
                <p style={{ fontWeight: 100, fontSize: "12px" }} className="wc-block-components-product-title wc-block-grid__product-title"><GrassIcon sx={{"width": 15, "height": 15}}/> {props.nutritionalContent.join(", ")}</p>
                <h2 style={{ fontSize: "20px", fontWeight: 800, color: "#ea2251", textAlign: "center" }} ><a href>{props.name}</a></h2>
                <div className="wp-block-woocommerce-product-price">
                    <span className="wc-block-components-product-price wc-block-grid__product-price price wc-block-components-product-price">
                        <span style={{ fontWeight: 800 }} className="wc-block-formatted-money-amount wc-block-components-formatted-money-amount wc-block-components-product-price__value wc-block-grid__product-price__value">#{props.price.toLocaleString()}</span>
                    </span>
                </div>
                {/* {props.special !== "none" && <div className='special-menu-item'><AutoAwesomeIcon />{capitalizeWords(props.special)} Special</div>} */}
                <div className="wp-block-button wc-block-components-product-button wc-block-grid__product-add-to-cart">
                    <button onClick={handleAddToCart} className="wp-block-button__link wp-element-button add_to_cart_button wc-block-components-product-button__button">{isInCart ? <span style={{...centerStyle}}><CheckIcon /> &nbsp;{"In Cart"}</span> : "Add to cart"}</button>
                </div>
            </li>
}


export default MenuCard