import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import VisibilityIcon from '@mui/icons-material/Visibility';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import { getStatusColor, centerStyle, formatDate, formatTime } from '../utils/utils';
import { useSelector } from 'react-redux';
import { httpGetAllRestaurantOrders } from '../hooks/orders.hooks';
import foodpic from "../images/food_loading.gif"
import { CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';


function AdminAllOrders() {
    const [loading, setLoading] = React.useState(true)
    const [restaurantOrders, setRestaurantOrders] = React.useState([])
    const restaurantInfo = useSelector(state => state.user)
    const navigate = useNavigate()
    const restaurantName = useSelector(state => state.user.name)

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const restaurantOrdersResult = await httpGetAllRestaurantOrders(restaurantInfo._id);
                console.log(restaurantOrdersResult)
                
                setRestaurantOrders(restaurantOrdersResult?.body)
            } catch (error) {
                console.error('Error fetching restaurant orders:', error);
                setLoading(false)
            } finally {
                setLoading(false)
            }
        };

        fetchData();
            
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

        const orderRowsHTML = [...restaurantOrders].sort((a, b) => new Date(a.dateMade) - new Date(b.dateMade))?.map(order => {
            const quantity = order.items.reduce((total, item) => total +item.quantity, 0)
            return (
                <tr className="cart_item">
                    <td><span># {order._id.slice(18)}</span></td>
                    <td className="product-name">{quantity}</td>
                    <td className="product-total">{formatDate(order.dateMade)} by {formatTime(order.dateMade)}</td>
                    <td><span style={{ color: order.completed ? "green":"blue"}}>{order.completed ? "completed":"active"}</span></td>
                    <td><span onClick={() => navigate("/admin/vieworder/"+order._id)} style={{ ...getStatusColor("cancelled"), ...centerStyle, fontSize: "15px", borderRadius: "25px", padding: "5px 0px", cursor: "pointer"}}>view</span></td>

                </tr>
            )
        })

        return loading ? <CircularProgress sx={{marginTop: "300px", marginLeft: "700px", color: "#ea2251"}} size={100}/> :
 
    <div id="content" className="site-content">


    <div style={{ display: "block" }} className="page-title standard">
        <header className="entry-header">
            <div className="entry-header-wrap">
                <img alt="" width={100} height={100} src={foodpic}></img>
                <h1 className="entry-title">All Orders for <span style={{color: "#ea2251"}}>{restaurantName}</span></h1>
            </div>
        </header>
    </div>


    <div id="primary" className="content-area">
        <main id="main" className="site-main">


            <article id="post-13" className="post-13 page type-page status-publish hentry">
                <div className="entry-content">
                    <div className="woocommerce">
                        <div className="woocommerce-notices-wrapper"></div>
                        <div className="woocommerce-form-coupon-toggle">

                        </div>

                        <div className="woocommerce-notices-wrapper"></div>

                        <div id="order_review" className="woocommerce-checkout-review-order">
                            <table className="shop_table woocommerce-checkout-review-order-table">
                                <thead style={{background: "#A9A9A9"}}>
                                    <tr>
                                        <th className="product-name"><span style={{...centerStyle, flexDirection: "row", justifyContent: "start"}}><FormatListNumberedIcon sx={{color: "#ea2251"}}/>Order No.</span></th>
                                        <th className="product-name"><span style={{...centerStyle, flexDirection: "row", justifyContent: "start"}}><ShoppingCartIcon sx={{color: "#ea2251"}}/>No. Of Items</span></th>
                                        <th className="product-total"><span style={{...centerStyle, flexDirection: "row", justifyContent: "start"}}><CalendarMonthIcon sx={{color: "#ea2251"}}/>Date/Time</span></th>
                                        <th className="product-total"><span style={{...centerStyle, flexDirection: "row", justifyContent: "start"}}><AssignmentTurnedInIcon sx={{color: "#ea2251"}}/>Status</span></th>
                                        <th className="product-total"><span style={{...centerStyle, flexDirection: "row", justifyContent: "start"}}><VisibilityIcon sx={{color: "#ea2251"}}/>View</span></th>
                                    </tr>
                                </thead>
                                <tbody>{orderRowsHTML}</tbody>
                            </table>
                        </div>



                    </div>
                </div>

            </article>

        </main>
    </div>

</div>
}


export default AdminAllOrders