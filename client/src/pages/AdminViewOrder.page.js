import React from 'react';
import { CircularProgress } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import PhoneIcon from '@mui/icons-material/Phone';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import { capitalizeWords, centerStyle, formatDate, formatTime } from '../utils/utils';
import { useParams } from 'react-router-dom';
import { httpCompleteOrder, httpGetOrder } from '../hooks/orders.hooks';
import AdminMenuItemTimer from '../components/AdminMenuTimer.components';


function AdminViewOrder() {
    const { orderId } = useParams()
    const [loading, setLoading] = React.useState(true)
    const [currentOrder, setCurrentOrder] = React.useState(null)
    const totalPrice = currentOrder?.orderInfo?.items.reduce((total, item) => total + (item.menuItem.price * item.quantity), 0)

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const orderResult = await httpGetOrder(orderId);
                console.log(orderResult)
                
                setCurrentOrder(orderResult?.body)
            } catch (error) {
                console.error('Error fetching order:', error);
                setLoading(false)
            } finally {
                setLoading(false)
            }
        };

        fetchData();
            
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    function getTotalWaitTime() {
        let totalWaitTime = 5
        for (const item of currentOrder.orderInfo.items) {
            if(item.quantity === 1) {
                totalWaitTime += item.menuItem.waitTime
            } else {
                totalWaitTime += item.menuItem.waitTime + (3*item.quantity-1)
            }
        }
        
        return totalWaitTime
    }

    async function completeOrder() {
        if(currentOrder?.orderInfo.completed) {
            return
        }
        try {
            const result = await httpCompleteOrder(orderId)
            if(result?.ok) {
                alert("order successfully completed")
            } if(!result?.ok) {
                alert("sorry, order couldn't be completed, try again")
            }
        } catch (error) {
            console.log(error)
        }
    }

    const orderRowsHTML = currentOrder?.orderInfo?.items.map(item => {
        return (
            <tr key={item.menuItem._id} className="woocommerce-cart-form__cart-item cart_item">
                <td className="product-thumbnail">
                    <a href>
                        <img
                            width="300" height="225"
                            style={{ width: "48px" }}
                            src={`https://nutriease-api.vercel.app/uploads/menus/${item.menuItem.picturePath}`}
                            className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                            alt="" decoding="async" fetchpriority="high"
                            sizes="(max-width: 300px) 100vw, 300px"
                        />
                    </a>
                </td>

                <td className="product-name" data-title="Product">
                    <a style={{color: "black"}} href>{item.menuItem.name}</a>
                </td>

                <td className="product-price" data-title="Price">
                    <span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol">#</span>{item.menuItem.price.toLocaleString()}</bdi></span>
                </td>

                <td className="product-quantity" data-title="Quantity">
                    <a href>{item.quantity}</a>
                </td>

                <td className="product-subtotal" data-title="Subtotal">
                    <span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol">#</span>{(item.menuItem.price*item.quantity).toLocaleString()}</bdi></span>
                </td>
            </tr>
        )
    })

    return loading ? <CircularProgress sx={{marginTop: "300px", marginLeft: "700px", color: "#ea2251"}} size={100}/> :
        (currentOrder ? <div id="content" className="site-content">


            <div style={{ display: "block" }} className="page-title standard">
                <header className="entry-header">
                    <div className="entry-header-wrap">
                        <h1 style={{color: "#ea2251"}} className="entry-title">Order #{currentOrder?.orderInfo._id.slice(18)} details</h1>
                        <h5 style={{fontSize: "16px", ...centerStyle, flexDirection: "row", justifyContent: "start"}}><PersonIcon sx={{color: "black"}}/>Customer Name: <span style={{color: "#ea2251"}}>&nbsp;&nbsp;{capitalizeWords(currentOrder.userInfo.firstName + " " + currentOrder.userInfo.lastName)}</span></h5>
                        <h5 style={{fontSize: "16px", ...centerStyle, flexDirection: "row", justifyContent: "start"}}><PhoneIcon sx={{color: "black"}}/>Customer Telephone: <span style={{color: "#ea2251"}}>&nbsp;&nbsp;{currentOrder.userInfo.phoneNumber}</span></h5>
                        <h5 style={{fontSize: "16px", ...centerStyle, flexDirection: "row", justifyContent: "start"}}><CalendarMonthIcon sx={{color: "black"}}/>Date/Time ordered: <span style={{color: "#ea2251"}}>&nbsp;&nbsp;{formatDate(currentOrder.orderInfo.dateMade)} by {formatTime(currentOrder.orderInfo.dateMade)}</span></h5>
                        <h5 style={{fontSize: "16px", ...centerStyle, flexDirection: "row", justifyContent: "start"}}><AccessAlarmIcon sx={{color: "black"}}/>Elapses in: <AdminMenuItemTimer completed={currentOrder.orderInfo.completed} dateMade={currentOrder.orderInfo.dateMade} totalWaitTime={getTotalWaitTime()}/></h5>
                    </div>
                </header>
            </div>


            <div id="primary" className="content-area">
                <main id="main" className="site-main">

                    <article id="post-12" className="post-12 page type-page status-publish hentry">
                        <div className="entry-content">
                            <div className="woocommerce">
                                <div className="woocommerce-notices-wrapper"></div>
                                <form className="woocommerce-cart-form">

                                    <table className="shop_table shop_table_responsive cart woocommerce-cart-form__contents"
                                        cellspacing="0">
                                        <thead>
                                            <tr>
                                                <th className="product-thumbnail"><span className="screen-reader-text">Thumbnail image</span></th>
                                                <th className="product-name"><span style={{...centerStyle, flexDirection: "row", justifyContent: "start"}}><FastfoodIcon sx={{color: "#ea2251"}} />Product</span></th>
                                                <th className="product-price"><span style={{...centerStyle, flexDirection: "row", justifyContent: "start"}}><AttachMoneyIcon sx={{color: "#ea2251"}} />Price</span></th>
                                                <th className="product-quantity"><span style={{...centerStyle, flexDirection: "row", justifyContent: "start"}}><ShoppingCartIcon sx={{color: "#ea2251"}} />Quantity</span></th>
                                                <th className="product-subtotal"><span style={{...centerStyle, flexDirection: "row", justifyContent: "start"}}><PointOfSaleIcon sx={{color: "#ea2251"}} />Sub Total</span></th>
                                            </tr>
                                        </thead>
                                        <tbody>{orderRowsHTML}</tbody>
                                    </table>
                                </form>


                                <div className="col2-set cart-collaterals">
                                    <div className="col-1">
                                        <div className="woocommerce-shipping-fields">
                                        </div>
                                        <div className="woocommerce-additional-fields">
                                            <h3 onClick={completeOrder} id={currentOrder?.orderInfo?.completed ? "completed_button" : "complete_button"} style={{ ...centerStyle, fontSize: "15px", width: "300px", borderRadius: "25px", padding: "5px 0px"}}>{currentOrder?.orderInfo?.completed ? "Order Completed" : "Mark Order as Completed"}</h3>
                                        </div>
                                    </div>
                                    <div className="col-2 cart_totals calculated_shipping">


                                        <h2>Order Total</h2>

                                        <table cellspacing="0" className="shop_table shop_table_responsive">

                                            <tbody>
                                                <tr className="cart-subtotal">
                                                    <th>Subtotal</th>
                                                    <td data-title="Subtotal"><span
                                                            className="woocommerce-Price-amount amount"><bdi><span
                                                                    className="woocommerce-Price-currencySymbol">#</span>{totalPrice.toLocaleString()}</bdi></span>
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
                                    </div>
                                </div>

                            </div>
                        </div>

                    </article>

                </main>
            </div>

        </div> : <h1 style={{marginTop: "200px", textAlign: "center"}}>Order does not exist</h1>)
}


export default AdminViewOrder