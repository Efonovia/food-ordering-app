import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import {useNavigate} from "react-router-dom"

function RestaurantCard(props) {
    const starsHTML = Array(5).fill().map((_, index) => index < props.averageRating ? <StarIcon key={index+1} sx={{color: "gold"}}/> : <StarOutlineIcon key={index+1} sx={{color: "gold", cursor: "pointer"}}/>)
    const navigate = useNavigate()
    return (
        <li style={{cursor: "pointer"}} onClick={() => navigate("/restaurant/" + props.id)} className="wc-block-grid__product">
            <a href className="wc-block-grid__product-link">
                <div className="wc-block-grid__product-image">
                    <img
                            fetchpriority="high" width="300" height="225"
                            src="https://preview.ait-themes.club/citadela/fooddelivery/wp-content/uploads/sites/17/2020/11/salad-300x225.jpg"
                            className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                            alt="Asia Fresh Salad" decoding="async"
                            srcSet="https://preview.ait-themes.club/citadela/fooddelivery/wp-content/uploads/sites/17/2020/11/salad-300x225.jpg 300w, https://preview.ait-themes.club/citadela/fooddelivery/wp-content/uploads/sites/17/2020/11/salad-768x576.jpg 768w, https://preview.ait-themes.club/citadela/fooddelivery/wp-content/uploads/sites/17/2020/11/salad-640x480.jpg 640w, https://preview.ait-themes.club/citadela/fooddelivery/wp-content/uploads/sites/17/2020/11/salad-480x360.jpg 480w, https://preview.ait-themes.club/citadela/fooddelivery/wp-content/uploads/sites/17/2020/11/salad-600x450.jpg 600w, https://preview.ait-themes.club/citadela/fooddelivery/wp-content/uploads/sites/17/2020/11/salad-150x113.jpg 150w, https://preview.ait-themes.club/citadela/fooddelivery/wp-content/uploads/sites/17/2020/11/salad.jpg 800w"
                            sizes="(max-width: 300px) 100vw, 300px"/>
                </div>
                <div style={{fontSize: "18px"}} className="wc-block-grid__product-title">{props.name}</div>
            </a>
            <div className="wc-block-grid__product-price price">{starsHTML}</div>


        </li>
    )
}


export default RestaurantCard