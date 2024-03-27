import React from 'react';
import { useNavigate } from 'react-router-dom';


function CartMenuContents(props) {
    const navigate = useNavigate()
    const totalPrice = props.cartDetails.reduce((total, item) => total + (item.price * item.quantity), 0)

    const cartContentsHTML = props.cartDetails.map(item => {
        return (
            <li className="woocommerce-mini-cart-item mini_cart_item">
                <a href className="remove remove_from_cart_button" data-product_id="162" data-cart_item_key="82aa4b0af34c2313a562076992e50aa3" data-product_sku="">×</a> 
                <a href>
                    <img width="300" height="225"
                        src="https://preview.ait-themes.club/citadela/fooddelivery/wp-content/uploads/sites/17/2020/11/salad-eggplant-300x225.jpg"
                        className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="" decoding="async"
                        loading="lazy"
                        srcSet="https://preview.ait-themes.club/citadela/fooddelivery/wp-content/uploads/sites/17/2020/11/salad-eggplant-300x225.jpg 300w, https://preview.ait-themes.club/citadela/fooddelivery/wp-content/uploads/sites/17/2020/11/salad-eggplant-768x576.jpg 768w, https://preview.ait-themes.club/citadela/fooddelivery/wp-content/uploads/sites/17/2020/11/salad-eggplant-640x480.jpg 640w, https://preview.ait-themes.club/citadela/fooddelivery/wp-content/uploads/sites/17/2020/11/salad-eggplant-480x360.jpg 480w, https://preview.ait-themes.club/citadela/fooddelivery/wp-content/uploads/sites/17/2020/11/salad-eggplant-600x450.jpg 600w, https://preview.ait-themes.club/citadela/fooddelivery/wp-content/uploads/sites/17/2020/11/salad-eggplant-150x113.jpg 150w, https://preview.ait-themes.club/citadela/fooddelivery/wp-content/uploads/sites/17/2020/11/salad-eggplant.jpg 800w"
                        sizes="(max-width: 300px) 100vw, 300px"/>{item.name}
                </a>
                <span className="quantity">{item?.quantity || 1} × <span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol">#</span>{item.price}</bdi></span></span>
            </li>
        )
    })

    return <>
        <ul style={{maxHeight: "300px", overflowY: "auto"}} className="woocommerce-mini-cart cart_list product_list_widget ">{cartContentsHTML}</ul>

        <p className="woocommerce-mini-cart__total total">
            <strong>Subtotal:</strong> <span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol">#</span>{totalPrice}</bdi></span>
        </p>


        <p className="woocommerce-mini-cart__buttons buttons">
            <a onClick={() => navigate("/cart")} href className="button wc-forward">View cart</a>
            <a href className="button checkout wc-forward">Checkout</a>
        </p>
    </>
}


export default CartMenuContents