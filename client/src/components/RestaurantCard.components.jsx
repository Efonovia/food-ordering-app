import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import {useNavigate} from "react-router-dom"

function RestaurantCard(props) {
    const starsHTML = Array(5).fill()?.map((_, index) => index < props.averageRating ? <StarIcon key={index+1} sx={{color: "gold"}}/> : <StarOutlineIcon key={index+1} sx={{color: "gold", cursor: "pointer"}}/>)
    const navigate = useNavigate()
    return (
        <li style={{cursor: "pointer"}} onClick={() => navigate("/restaurant/" + props.id)} className="wc-block-grid__product">
            <a href className="wc-block-grid__product-link">
                <div className="wc-block-grid__product-image">
                    <img
                            fetchpriority="high" width="300" height="225"
                            src={`https://nutriease-api.vercel.app/uploads/restaurants/${props.picturePath}`}
                            className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                            alt={"logo of " + props.name} decoding="async"
                            sizes="(max-width: 300px) 100vw, 300px"/>
                </div>
                <div style={{fontSize: "18px"}} className="wc-block-grid__product-title">{props.name}</div>
            </a>
            <div className="wc-block-grid__product-price price">{starsHTML}</div>


        </li>
    )
}


export default RestaurantCard