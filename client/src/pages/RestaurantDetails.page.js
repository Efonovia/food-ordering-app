import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import { httpGetRestaurant } from '../hooks/restaurants.hooks';
import { calculateAverageRating } from '../utils/utils';
import { CircularProgress } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Reviews from '../components/Reviews.component';
import { httpGetAllRestaurantMenuItems } from '../hooks/menuItems.hooks';
import MenuCard from '../components/MenuCard.components';


function RestaurantDetails() {
    const userInfo = useSelector(state => state.user)
    const [restaurant, setRestaurant] = React.useState(null)
    const [menuItems, setMenuItems] = React.useState(null)
    const [loading, setLoading] = React.useState(true)
    const averageRating = restaurant?.reviews ? calculateAverageRating(restaurant?.reviews) : []
    const starsHTML = Array(5).fill().map((_, index) => index < averageRating ? <StarIcon key={index+1} sx={{color: "#ea2251"}}/> : <StarOutlineIcon key={index+1} sx={{color: "#ea2251", cursor: "pointer"}}/>)
    const { restaurantId } = useParams()


    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const restaurantResult = await httpGetRestaurant(restaurantId);
                // console.log(result)
                setRestaurant(restaurantResult?.body);
                // console.log(restaurant)
                const menuItemResults = await httpGetAllRestaurantMenuItems(restaurantId);
                console.log(menuItemResults)
                setMenuItems(menuItemResults?.body);
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

    const menuItemsHTML = menuItems?.map(menuItem => <MenuCard key={menuItem._id} {...menuItem}/>)

    return loading ? <CircularProgress sx={{marginTop: "300px", marginLeft: "700px", color: "#fb246a"}} size={100}/> :
    <div id="content" className="site-content">
    <div id="primary" className="content-area">
        <main id="main" className="site-main">
            <article id="post-21" className="post-21 page type-page status-publish hentry">
                <div className="entry-content">
                    <div className="wp-block-citadela-blocks-custom-container citadela-block-custom-container responsive-options size-wide bg-type-image inside-space-none bg-size-auto has-bg has-overlay"
                    style={{backgroundImage: 'url(https://preview.ait-themes.club/citadela/fooddelivery/wp-content/uploads/sites/17/2020/11/blob-bistro-bg.png)', backgroundRepeat: 'no-repeat', backgroundColor: 'rgba(255, 255, 255, 1)', backgroundPosition: '50% 0%'}}
                    data-block-attr="{&quot;backgroundImage&quot;:&quot;url(https://preview.ait-themes.club/citadela/fooddelivery/wp-content/uploads/sites/17/2020/11/blob-bistro-bg-responsive.png)&quot;,&quot;size&quot;:&quot;bg-size-full-horizontal&quot;,&quot;position&quot;:&quot;50% 55%&quot;}"
                    data-block-mobile-breakpoint="900">
                        <div className="bg-image-overlay" style={{opacity: '0.5'}}></div>
                        <div className="inner-holder">
                            <div className="wp-block-citadela-blocks-spacer citadela-block-spacer responsive-options"
                                data-block-attr="{&quot;desktop&quot;:{&quot;height&quot;:&quot;8.5em&quot;},&quot;mobile&quot;:{&quot;height&quot;:&quot;4em&quot;}}"
                                data-block-mobile-breakpoint="600">
                                <div className="inner-holder" style={{paddingTop: '2.5em'}}></div>
                            </div>



                            <h1 style={{fontWeight: 700, fontSize: "64px"}} className="has-huge-font-size wp-block-heading">{restaurant?.name}</h1>
                            <div>{starsHTML}</div>



                            <div className="wp-block-citadela-blocks-spacer citadela-block-spacer">
                                <div className="inner-holder" style={{paddingTop: '22px'}}></div>
                            </div>

                            <div className="wp-block-citadela-blocks-spacer citadela-block-spacer responsive-options"
                                data-block-attr="{&quot;desktop&quot;:{&quot;height&quot;:&quot;85px&quot;},&quot;mobile&quot;:{&quot;height&quot;:&quot;70px&quot;}}"
                                data-block-mobile-breakpoint="900">
                                <div className="inner-holder" style={{paddingTop: '85px'}}></div>
                            </div>


                            <div className="wp-block-citadela-blocks-spacer citadela-block-spacer responsive-options"
                                data-block-attr="{&quot;desktop&quot;:{&quot;height&quot;:&quot;110px&quot;},&quot;mobile&quot;:{&quot;height&quot;:&quot;80px&quot;}}"
                                data-block-mobile-breakpoint="900">
                                <div className="inner-holder" style={{paddingTop: '100px'}}></div>
                            </div>

                            <h2 className="wp-block-heading has-huge-font-size">Our Menu</h2>

                            <div className="wp-block-columns is-layout-flex wp-container-9 wp-block-columns-is-layout-flex">
                                <div className="wp-block-column is-layout-flow wp-block-column-is-layout-flow">
                                    <div className="wp-block-citadela-blocks-custom-container citadela-block-custom-container size-wide bg-type-color inside-space-zero has-bg has-shadow"
                                        style={{backgroundColor: 'rgba(255, 255, 255, 1)', boxShadow: '0px 0px 0px 20px rgba(255, 255, 255, 1)'}}>
                                        <div className="inner-holder">
                                            <div data-block-name="woocommerce/all-products" data-columns="3" data-rows="3"
                                                data-align-buttons="false" data-content-visibility="{&quot;orderBy&quot;:true}"
                                                data-orderby="date"
                                                data-layout-config="[[&quot;woocommerce\/product-image&quot;],[&quot;woocommerce\/product-title&quot;],[&quot;woocommerce\/product-price&quot;],[&quot;woocommerce\/product-rating&quot;],[&quot;woocommerce\/product-button&quot;]]"
                                                className="wp-block-woocommerce-all-products alignwide wc-block-all-products"
                                                data-attributes="{&quot;align&quot;:&quot;wide&quot;,&quot;alignButtons&quot;:false,&quot;columns&quot;:3,&quot;contentVisibility&quot;:{&quot;orderBy&quot;:true},&quot;isPreview&quot;:false,&quot;layoutConfig&quot;:[[&quot;woocommerce/product-image&quot;],[&quot;woocommerce/product-title&quot;],[&quot;woocommerce/product-price&quot;],[&quot;woocommerce/product-rating&quot;],[&quot;woocommerce/product-button&quot;]],&quot;orderby&quot;:&quot;date&quot;,&quot;rows&quot;:3}">
                                                <div className="wc-block-components-notices"></div>
                                                <div className="wc-block-components-notices__snackbar wc-block-components-notice-snackbar-list"
                                                    tabIndex="-1">
                                                    <div></div>
                                                </div>
                                                <div className="with-scroll-to-top__scroll-point" aria-hidden="true"></div>
                                                <div className="wc-block-grid alignwide has-3-columns has-multiple-rows">
                                                    
                                                    <ul className="wc-block-grid__products">{menuItemsHTML}</ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="wp-block-column is-layout-flow wp-block-column-is-layout-flow" style={{flexBasis: '30%'}}>
                                    <Reviews
                                        restaurantId={restaurantId}
                                        userInfo={{firstName: userInfo.firstName, lastName: userInfo.lastName}}
                                        reviews={restaurant?.reviews}
                                    />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </main>
    </div>
</div>
}


export default RestaurantDetails