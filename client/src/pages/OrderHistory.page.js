import React from 'react';
import StorefrontIcon from '@mui/icons-material/Storefront';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import { centerStyle, formatDate, formatTime } from '../utils/utils';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { httpGetAllUserOrders } from '../hooks/orders.hooks';
import { CircularProgress } from '@mui/material';

function OrderHistory() {
    const [loading, setLoading] = React.useState(true)
    const [userOrders, setUserOrders] = React.useState([])
    const navigate = useNavigate()
    const userInfo = useSelector(state => state.user)


    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const userOrdersResult = await httpGetAllUserOrders(userInfo._id);
                // console.log(userOrdersResult)
                let orderList = []
                if(userOrdersResult?.body.length) {
                    for (const order of userOrdersResult?.body) {
                        const existingDateOrder = orderList.find(temp => temp.dateOfOrder === order.dateMade)
            
                        if(existingDateOrder) {
                            existingDateOrder.items.push(...order.items)
                        } else {
                            orderList.push({
                                dateOfOrder: order.dateMade,
                                items: [...order.items]
                            })
                        }
                    }
                    // console.log(orderList)
                }
                setUserOrders(orderList)
            } catch (error) {
                console.error('Error fetching restaurant info:', error);
                setLoading(false)
            } finally {
                setLoading(false)
            }
        };

        fetchData();
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const orderTablesHTML = [...userOrders].sort((a, b) => new Date(a.dateOfOrder) - new Date(b.dateOfOrder)).map(order => {
        return (
            <form key={order.dateOfOrder} className="woocommerce-cart-form">
                <h3>{formatDate(order.dateOfOrder)} by {formatTime(order.dateOfOrder)}</h3>
                <table className="shop_table shop_table_responsive cart woocommerce-cart-form__contents" cellSpacing="0">
                    <thead>
                        <tr>
                            <th className="product-thumbnail"><span className="screen-reader-text">Thumbnail image</span></th>
                            <th className="product-name"><span style={{...centerStyle, flexDirection: "row", justifyContent: "start"}}><FastfoodIcon sx={{color: "#ea2251"}} />Product</span></th>
                            <th className="product-name"><span style={{...centerStyle, flexDirection: "row", justifyContent: "start"}}><StorefrontIcon sx={{color: "#ea2251"}} />Restaurant</span></th>
                            <th className="product-price"><span style={{...centerStyle, flexDirection: "row", justifyContent: "start"}}><AttachMoneyIcon sx={{color: "#ea2251"}} />Price</span></th>
                            <th className="product-quantity"><span style={{...centerStyle, flexDirection: "row", justifyContent: "start"}}><ShoppingCartIcon sx={{color: "#ea2251"}} />Quantity</span></th>
                            <th className="product-subtotal"><span style={{...centerStyle, flexDirection: "row", justifyContent: "start"}}><PointOfSaleIcon sx={{color: "#ea2251"}} />Total Amount</span></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            [...order.items].sort((a,b) => a.menuItem.restaurantName - b.menuItem.restaurantName).map(item => {
                                return (
                                    <tr key={item.menuItem._id} className="woocommerce-cart-form__cart-item cart_item">
                                        <td className="product-thumbnail">
                                            <a href>
                                                <img
                                                    width="300" height="225"
                                                    style={{ width: "48px" }}
                                                    src={`http://localhost:8000/menuitems/pic/${item.menuItem.picturePath}`}
                                                    className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                                                    alt="" decoding="async" fetchpriority="high"
                                                    sizes="(max-width: 300px) 100vw, 300px"
                                                />
                                            </a>
                                        </td>

                                        <td className="product-name" data-title="Product">
                                            <a style={{color: "black"}} href>{item.menuItem.name}</a>
                                        </td>

                                        <td className="product-name" data-title="Restaurant">
                                            <a onClick={() => navigate(`/restaurant/${item.menuItem.restaurantId}`)} style={{color: "#ea2251"}} id='restaurant_name' href>{item.menuItem.restaurantName}</a>
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
                        }
                        
                    </tbody>
                </table>
                <hr></hr>
            </form>
            
        )
    })

    return loading ? <CircularProgress sx={{marginTop: "300px", marginLeft: "700px", color: "#fb246a"}} size={100}/> :
    <div id="content" className="site-content">


    <div style={{ display: "block" }} className="page-title standard">
        <header className="entry-header">
            <div className="entry-header-wrap">
                <h1 className="entry-title">Your Order History</h1>
            </div>
        </header>
    </div>


    <div id="primary" className="content-area">
        <main id="main" className="site-main">


            <article id="post-12" className="post-12 page type-page status-publish hentry">
                <div className="entry-content">
                    <div className="woocommerce">
                        <div className="woocommerce-notices-wrapper"></div>
                        {Boolean(userOrders.length) ? orderTablesHTML : <h2 style={{textAlign: "center"}}>You don't have any orders</h2>}
                    </div>
                </div>

            </article>

        </main>
    </div>

</div>
}


export default OrderHistory