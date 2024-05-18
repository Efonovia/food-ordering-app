import React from 'react';
import MenuItemTimer from '../components/MenuItemTimer.components';
import loadingGif from "../images/food_loading.gif"
import { centerStyle } from '../utils/utils';
import { httpGetLatestUserOrders } from '../hooks/orders.hooks';
import { useSelector } from 'react-redux';
import { CircularProgress } from '@mui/material';


function TrackOrder() {
    const userInfo = useSelector(state => state.user)
    const [loading, setLoading] = React.useState(true)
    const [latestOrders, setLatestOrders] = React.useState([])

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const latestOrderResult = await httpGetLatestUserOrders(userInfo._id);
                setLatestOrders(latestOrderResult?.body);
                console.log(latestOrderResult?.body);
            } catch (error) {
                console.error('Error fetching orders:', error);
                setLoading(false)
            } finally {
                setLoading(false)
            }
        };

        fetchData();
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const isAnyActive = latestOrders.some(order => order.completed === false)

    const menuTimersHTML = latestOrders?.map(order => {
        let totalWaitTime = 5
        for (const item of order.items) {
            if(item.quantity === 1) {
                totalWaitTime += item.menuItem.waitTime
            } else {
                totalWaitTime += item.menuItem.waitTime + (3*item.quantity-1)
            }
        }
        return <MenuItemTimer 
                    key={order.restaurantId}
                    restaurantId={order.items[0].menuItem.restaurantId}
                    restaurantName={order.items[0].menuItem.restaurantName}
                    completed={order.completed}
                    dateMade={order.dateMade}
                    totalWaitTime={totalWaitTime}
                />
    })

    return (
        loading ? <CircularProgress sx={{marginTop: "300px", marginLeft: "700px", color: "#fb246a"}} size={100}/> :
        ((Boolean(latestOrders?.length) && isAnyActive) ? <div id="content" className="site-content" style={{margin: "60px"}}>
            <div style={{margin: "30px auto", width: 350, ...centerStyle, flexDirection: "column"}}>
                <p style={{fontWeight: "500", textAlign: "center", fontSize: "20px"}}>Your orders are getting prepared...</p>
                
                <img style={{background: "#FBFBFB", margin: "auto"}} width={150} height={150} alt="" src={loadingGif}></img>
            </div>
            {menuTimersHTML}
        </div> : <h1 style={{marginTop: "100px", textAlign: "center"}}>You don't have any active orders yet</h1>)
    )
}


export default TrackOrder