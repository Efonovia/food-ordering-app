import React from 'react';
import "../styles/general.css"
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { changeItemQuantity, clearCart, removeFromCart } from '../state';
import { httpCreateOrder, httpGetLatestUserOrders } from '../hooks/orders.hooks';
import { CircularProgress } from '@mui/material';
import StorefrontIcon from '@mui/icons-material/Storefront';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import { centerStyle } from '../utils/utils';


function Cart() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const userInfo = useSelector(state => state.user)
    const totalPrice = userInfo.cart.reduce((total, item) => total + (item.price * item.quantity), 0)
    const [loading, setLoading] = React.useState(false)

    async function submitOrder() {
        const activeOrders = await httpGetLatestUserOrders(userInfo._id)
        if(activeOrders.body.length) {
            const hasActiveOrder = activeOrders.body.some(order => order.completed === false)
            if(hasActiveOrder) {
                alert("You can't make an order while you already have a pending order")
                return
            }
        } else {
            let orderList = []
            const dateMade = new Date()
            for (const item of userInfo.cart) {
                const existingOrder = orderList.find(order => order.restaurantId === item.restaurantId)
    
                if(existingOrder) {
                    existingOrder.items.push({menuItem: item._id, quantity: item.quantity})
                } else {
                    orderList.push({
                        restaurantId: item.restaurantId,
                        userId: userInfo._id,
                        dateMade,
                        items: [{ menuItem: item._id, quantity: item.quantity }]
                    })
                }
            }
            console.log(orderList)
            try {
                setLoading(true)
                const submitedOrdersResults = await Promise.all(
                    orderList.map(async order => {
                        const response = await httpCreateOrder(order)
                        return response
                    })
                )
                console.log(submitedOrdersResults)
                if(submitedOrdersResults.every(res => res?.ok === true)) {
                    navigate("/trackorder")
                    dispatch(clearCart())
                }
            } catch (error) {
                console.log(error)
            }
        }
    }

    const orderRowsHTML = [...userInfo.cart].sort((a, b) => a.restaurantId - b.restaurantId).map(item => {
        return (
            <tr key={item._id} className="woocommerce-cart-form__cart-item cart_item">
                <td className="product-remove">
                    <a style={{cursor: "pointer"}} onClick={() => dispatch(removeFromCart({id: item._id}))} href className="remove" aria-label="Remove Fish &amp; Chips from cart" data-product_id="161" data-product_sku="">×</a>
                </td>

                <td className="product-thumbnail">
                    <a href>
                        <img
                            width="300" height="225"
                            style={{ width: "48px" }}
                            src={`http://localhost:8000/menuitems/pic/${item.picturePath}`}
                            className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                            alt="" decoding="async" fetchpriority="high"
                            sizes="(max-width: 300px) 100vw, 300px"
                        />
                    </a>
                </td>

                <td className="product-name" data-title="Product">
                    <a style={{color: "black"}} href>{item.name}</a>
                </td>

                <td className="product-name" data-title="Restaurant">
                    <a onClick={() => navigate(`/restaurant/${item.restaurantId}`)} style={{color: "#ea2251"}} id='restaurant_name' href>{item.restaurantName}</a>
                </td>

                <td className="product-price" data-title="Price">
                    <span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol">#</span>{item.price.toLocaleString()}</bdi></span>
                </td>

                <td className="product-quantity" data-title="Quantity">
                    <div className="quantity">
                        <label className="screen-reader-text" htmlFor="quantity_65f86f7878844">{item.name} quantity</label>
                        <input 
                            type="number" id="quantity_65f86f7878844"
                            className="input-text qty text"
                            onChange={event => dispatch(changeItemQuantity({ id: item._id, value: Number(event.target.value) }))}
                            name="cart[bd4c9ab730f5513206b999ec0d90d1fb][qty]" value={item.quantity}
                            aria-label="Product quantity" size="4" min="1" max="" step="1"
                            placeholder="" inputMode="numeric" autoComplete="off"
                        />
                    </div>
                </td>

                <td className="product-subtotal" data-title="Subtotal">
                    <span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol">#</span>{(item.price*item.quantity).toLocaleString()}</bdi></span>
                </td>
            </tr>
        )
    })

    return loading ? <div style={{position: "absolute", marginTop: "300px", marginLeft: "20vw", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
        <h1 style={{textAlign: "center"}}>Submitting your orders. Hold on...</h1>
        <br></br>
        <CircularProgress sx={{color: "#ea2251"}} size={100} />
    </div>:
    <div id="content" className="site-content">


    <div style={{ display: "block" }} className="page-title standard">
        <header className="entry-header">
            <div className="entry-header-wrap">
                <h1 className="entry-title">Cart</h1>
            </div>
        </header>
    </div>


    {userInfo.cart.length ? <div id="primary" className="content-area">
        <main id="main" className="site-main">


            <article id="post-12" className="post-12 page type-page status-publish hentry">
                <div className="entry-content">
                    <div className="woocommerce">
                        <div className="woocommerce-notices-wrapper"></div>
                        <form className="woocommerce-cart-form">

                            <table className="shop_table shop_table_responsive cart woocommerce-cart-form__contents"
                                cellSpacing="0">
                                <thead>
                                    <tr>
                                        <th className="product-remove"><span className="screen-reader-text">Remove item</span></th>
                                        <th className="product-thumbnail"><span className="screen-reader-text">Thumbnail image</span></th>
                                        <th className="product-name"><span style={{...centerStyle, flexDirection: "row", justifyContent: "start"}}><FastfoodIcon sx={{color: "#ea2251"}} />Product</span></th>
                                        <th className="product-name"><span style={{...centerStyle, flexDirection: "row", justifyContent: "start"}}><StorefrontIcon sx={{color: "#ea2251"}} />Restaurant</span></th>
                                        <th className="product-price"><span style={{...centerStyle, flexDirection: "row", justifyContent: "start"}}><AttachMoneyIcon sx={{color: "#ea2251"}} />Price</span></th>
                                        <th className="product-quantity"><span style={{...centerStyle, flexDirection: "row", justifyContent: "start"}}><ShoppingCartIcon sx={{color: "#ea2251"}} />Quantity</span></th>
                                        <th className="product-subtotal"><span style={{...centerStyle, flexDirection: "row", justifyContent: "start"}}><PointOfSaleIcon sx={{color: "#ea2251"}} />Sub Total</span></th>

                                    </tr>
                                </thead>
                                <tbody>{orderRowsHTML}</tbody>
                            </table>
                        </form>


                        <div className="col2-set cart-collaterals">
                            <div className="col-2 cart_totals calculated_shipping">


                                <h2>Cart totals</h2>

                                <table cellSpacing="0" className="shop_table shop_table_responsive">

                                    <tbody>
                                        <tr className="cart-subtotal">
                                            <th>Subtotal</th>
                                            <td data-title="Subtotal">
                                                <span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol">#</span>{totalPrice.toLocaleString()}</bdi></span>
                                            </td>
                                        </tr>






                                        <tr className="order-total">
                                            <th>Total</th>
                                            <td data-title="Total"><strong><span
                                                        className="woocommerce-Price-amount amount"><bdi><span
                                                                className="woocommerce-Price-currencySymbol">#</span>{totalPrice.toLocaleString()}</bdi></span></strong>
                                            </td>
                                        </tr>


                                    </tbody>
                                </table>

                                <div className="wc-proceed-to-checkout">
                                    <a onClick={submitOrder} style={{width: "100%", background: "#ea2251", textAlign: "center"}} href className="checkout-button button alt wc-forward">Submit Order</a>
                                </div>


                            </div>
                        </div>

                    </div>
                </div>

            </article>

        </main>
    </div> : <h2 style={{textAlign: "center"}}>You haven't added any items to your cart</h2>}

</div>
}


export default Cart