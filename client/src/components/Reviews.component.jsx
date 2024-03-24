import React from 'react';
import "../styles/review.css"
import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import { CircularProgress } from '@mui/material';
import { capitalizeWords, formatDate } from '../utils/utils';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { httpPostRestaurantReview } from '../hooks/restaurants.hooks';


function Reviews(props) {
    const [starCount, setStarCount] = React.useState(0)
    const [reviewText, setReviewtext] = React.useState("")
    const [allReviews, setAllReviews] = React.useState(props.reviews)
    const [loading, setLoading] = React.useState(false)

    function onStarClick(starNum) {
        if(starNum === starCount) {
            setStarCount(0)
        } else {
            setStarCount(starNum)
        }
    }

    function handleReviewChange(event) {
        setReviewtext(event.target.value)
    }

    async function postReview() {
        try {
            if(!Boolean(props.userInfo)) {
                return
            }
            if(!starCount) {
                alert("make sure to give the restaurant a rating")
                return
            }
            if(!reviewText) {
                alert("make sure to give the restaurant a review")
                return
            }
            setLoading(true)
            console.log(starCount, reviewText)
            const newReview = {
                restaurantId: props.restaurantId,
                reviewer: props.userInfo.firstName + " " + props.userInfo.lastName,
                content: reviewText,
                rating: starCount,
            }
            const response = await httpPostRestaurantReview(newReview)
            console.log(response)
            if(response.ok) {
                setAllReviews(prev => [...prev, response.body])
            }
            setReviewtext("")
            setStarCount(0)
        } catch (error) {
            console.log("failed to post review")
            alert("failed to post review. Try again")
        } finally {
            setLoading(false)
        }
    }

    const testReviewsHtml = allReviews.map(review => {
        return <div key={review.reviewer+"_"+review.publishDate} className="reviews-right__item">
        <AccountCircleIcon sx={{ height: 50, width: 50 }}/>
        <div className='deets'>
            <p className='reviewer'>{capitalizeWords(review.reviewer)}</p>
            <p>{formatDate(review.publishDate)}</p>
        </div>
        <span style={{color: "black"}} className="stars">Rating: 
        {Array(5).fill().map((_, index) => index < review.rating ? <StarIcon key={index+1} sx={{color: "#ea2251", height: 15, width: 15}}/> : <StarOutlineIcon key={index+1} sx={{color: "#ea2251", cursor: "pointer", height: 15, width: 15}}/>)}
        </span>
        <h5>{review.content}</h5>
    </div>
    })

    return <div className='reviews-holder'>
                    <p className='review-title'>Leave a review</p>
                <div style={{width: "95%"}} className="post-review col-md-12">
                    <div className="stars">Give a rating: {Array.from({length: 5}, (_, i) => {
                        return (starCount >= i+1) ?
                        <StarIcon onClick={()=>onStarClick(i+1)} key={i+1} sx={{color: "gold", cursor: "pointer"}}/> :
                        <StarOutlineIcon onClick={()=>onStarClick(i+1)} key={i+1} sx={{color: "gold", cursor: "pointer"}}/>
                    })}
                    </div>
                    <div className="input_field">
                        <textarea
                            className='review_input'
                            style={{resize: "none", padding: "10px"}}
                            name="#"
                            aria-label={reviewText}
                            cols="30"
                            value={reviewText}
                            onChange={event => handleReviewChange(event)}
                            rows="2" placeholder="Leave a review"
                        ></textarea>
                    </div>
                    <div style={{backgroundColor: Boolean(props.userInfo) ? "white" : "grey"}} onClick={postReview} className="post-button">{loading ? <><CircularProgress sx={{color: "white"}} size={20}/>posting...</> : (Boolean(props.userInfo) ? "Post review" : "You have to log in to make a review")}</div>
                </div>
                {allReviews.length ? <><p>All reviews for this restaurant</p>
                <div className='all-reviews'>{testReviewsHtml}</div></> : <p>No reviews for this restaurant yet. Be the first one to make one.</p>}
            </div>
}


export default Reviews