import React from 'react';
import "../styles/general.css"
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import GrassIcon from '@mui/icons-material/Grass';
import StorefrontIcon from '@mui/icons-material/Storefront';
import RestaurantIcon from '@mui/icons-material/Restaurant';


function MenuCard(props) {


    return <li className="wc-block-grid__product wc-block-layout" aria-hidden="false">
                <div className="wc-block-components-product-image wc-block-grid__product-image">
                    <a href>
                        <img
                            data-testid="product-image" alt="Vegan Burger"
                            src="https://preview.ait-themes.club/citadela/fooddelivery/wp-content/uploads/sites/17/2020/11/burgers.jpg"
                            srcSet="https://preview.ait-themes.club/citadela/fooddelivery/wp-content/uploads/sites/17/2020/11/burgers.jpg 800w, https://preview.ait-themes.club/citadela/fooddelivery/wp-content/uploads/sites/17/2020/11/burgers-300x225.jpg 300w, https://preview.ait-themes.club/citadela/fooddelivery/wp-content/uploads/sites/17/2020/11/burgers-768x576.jpg 768w, https://preview.ait-themes.club/citadela/fooddelivery/wp-content/uploads/sites/17/2020/11/burgers-640x480.jpg 640w, https://preview.ait-themes.club/citadela/fooddelivery/wp-content/uploads/sites/17/2020/11/burgers-480x360.jpg 480w, https://preview.ait-themes.club/citadela/fooddelivery/wp-content/uploads/sites/17/2020/11/burgers-600x450.jpg 600w, https://preview.ait-themes.club/citadela/fooddelivery/wp-content/uploads/sites/17/2020/11/burgers-150x113.jpg 150w"
                            sizes="(max-width: 800px) 100vw, 800px"
                            style={{objectFit: 'cover'}}/>
                    </a>
                </div>
                <h4 id='restaurant_name' className="wc-block-components-product-title wc-block-grid__product-title"><a className="wc-block-components-product-name" href><StorefrontIcon sx={{"width": 15, "height": 15}}/> {"props.restaurantName"}</a></h4>
                <p style={{ fontWeight: 500, fontSize: "12px" }} className="wc-block-components-product-title wc-block-grid__product-title"><AccessAlarmIcon sx={{"width": 15, "height": 15}}/> {props.waitTime} min</p>
                <p style={{ fontWeight: 500, fontSize: "12px" }} className="wc-block-components-product-title wc-block-grid__product-title"><RestaurantIcon sx={{"width": 15, "height": 15}}/> {props.dietType}</p>
                <p style={{ fontWeight: 100, fontSize: "12px" }} className="wc-block-components-product-title wc-block-grid__product-title"><GrassIcon sx={{"width": 15, "height": 15}}/> {props.nutritionalContent.join(", ")}</p>
                <h2 style={{ fontSize: "22px", fontWeight: 800, color: "#ea2251" }} ><a href>{props.name}</a></h2>
                <div className="wp-block-woocommerce-product-price">
                    <span className="wc-block-components-product-price wc-block-grid__product-price price wc-block-components-product-price">
                        <span className="wc-block-formatted-money-amount wc-block-components-formatted-money-amount wc-block-components-product-price__value wc-block-grid__product-price__value">#{props.price}</span>
                    </span>
                </div>
                <div className="wp-block-button wc-block-components-product-button wc-block-grid__product-add-to-cart">
                    <button className="wp-block-button__link wp-element-button add_to_cart_button wc-block-components-product-button__button">Add to cart</button>
                </div>
            </li>
}


export default MenuCard