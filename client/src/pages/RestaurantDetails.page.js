import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import { httpGetRestaurant } from '../hooks/restaurants.hooks';
import { calculateAverageRating } from '../utils/utils';
import { CircularProgress } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Reviews from '../components/Reviews.component';


function RestaurantDetails() {
    const userInfo = useSelector(state => state.user)
    const [restaurant, setRestaurant] = React.useState(null)
    const [loading, setLoading] = React.useState(true)
    const averageRating = restaurant?.reviews ? calculateAverageRating(restaurant?.reviews) : []
    const starsHTML = Array(5).fill().map((_, index) => index < averageRating ? <StarIcon key={index+1} sx={{color: "#ea2251"}}/> : <StarOutlineIcon key={index+1} sx={{color: "#ea2251", cursor: "pointer"}}/>)
    const { restaurantId } = useParams()


    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await httpGetRestaurant(restaurantId);
                // console.log(result)
                setRestaurant(result?.body);
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
                                                    
                                                    <ul className="wc-block-grid__products">
                                                        <li className="wc-block-grid__product wc-block-layout" aria-hidden="false">
                                                            <div className="wc-block-components-product-image wc-block-grid__product-image"><a
                                                                    href><img
                                                                        data-testid="product-image" alt="Vegan Burger"
                                                                        src="https://preview.ait-themes.club/citadela/fooddelivery/wp-content/uploads/sites/17/2020/11/burgers.jpg"
                                                                        srcSet="https://preview.ait-themes.club/citadela/fooddelivery/wp-content/uploads/sites/17/2020/11/burgers.jpg 800w, https://preview.ait-themes.club/citadela/fooddelivery/wp-content/uploads/sites/17/2020/11/burgers-300x225.jpg 300w, https://preview.ait-themes.club/citadela/fooddelivery/wp-content/uploads/sites/17/2020/11/burgers-768x576.jpg 768w, https://preview.ait-themes.club/citadela/fooddelivery/wp-content/uploads/sites/17/2020/11/burgers-640x480.jpg 640w, https://preview.ait-themes.club/citadela/fooddelivery/wp-content/uploads/sites/17/2020/11/burgers-480x360.jpg 480w, https://preview.ait-themes.club/citadela/fooddelivery/wp-content/uploads/sites/17/2020/11/burgers-600x450.jpg 600w, https://preview.ait-themes.club/citadela/fooddelivery/wp-content/uploads/sites/17/2020/11/burgers-150x113.jpg 150w"
                                                                        sizes="(max-width: 800px) 100vw, 800px"
                                                                        style={{objectFit: 'cover'}}/></a></div>
                                                            <h2 className="wc-block-components-product-title wc-block-grid__product-title">
                                                                <a className="wc-block-components-product-name" href>
                                                                Vegan Burger</a>
                                                            </h2>
                                                            <h3 className="wc-block-components-product-title wc-block-grid__product-title">
                                                                <a style={{ fontSize: "13px" }} className="wc-block-components-product-name" href>
                                                                <span style={{color: "red"}}>Nutritional Contents:</span> protein, vitamin D, e-1240</a>
                                                            </h3>
                                                            <div className="wp-block-woocommerce-product-price"><span
                                                                    className="wc-block-components-product-price wc-block-grid__product-price price wc-block-components-product-price"><span
                                                                        className="wc-block-formatted-money-amount wc-block-components-formatted-money-amount wc-block-components-product-price__value wc-block-grid__product-price__value">$12.00</span></span>
                                                            </div>
                                                            <div
                                                                className="wp-block-button wc-block-components-product-button wc-block-grid__product-add-to-cart">
                                                                <button aria-label="Add Vegan Burger to your cart"
                                                                    className="wp-block-button__link wp-element-button add_to_cart_button wc-block-components-product-button__button">Add
                                                                    to cart</button></div>
                                                        </li>
                                                        <li className="wc-block-grid__product wc-block-layout" aria-hidden="false">
                                                            <div className="wc-block-components-product-image wc-block-grid__product-image"><a
                                                                    href>
                                                                    <div
                                                                        className="wc-block-components-product-sale-badge wc-block-components-product-sale-badge--align-right wc-block-grid__product-onsale">
                                                                        <span aria-hidden="true">Sale</span><span
                                                                            className="screen-reader-text">Product on sale</span></div><img
                                                                        data-testid="product-image" alt="Smoothie"
                                                                        src="https://preview.ait-themes.club/citadela/fooddelivery/wp-content/uploads/sites/17/2020/11/smoothies.jpg"
                                                                        srcSet="https://preview.ait-themes.club/citadela/fooddelivery/wp-content/uploads/sites/17/2020/11/smoothies.jpg 800w, https://preview.ait-themes.club/citadela/fooddelivery/wp-content/uploads/sites/17/2020/11/smoothies-300x225.jpg 300w, https://preview.ait-themes.club/citadela/fooddelivery/wp-content/uploads/sites/17/2020/11/smoothies-768x576.jpg 768w, https://preview.ait-themes.club/citadela/fooddelivery/wp-content/uploads/sites/17/2020/11/smoothies-640x480.jpg 640w, https://preview.ait-themes.club/citadela/fooddelivery/wp-content/uploads/sites/17/2020/11/smoothies-480x360.jpg 480w, https://preview.ait-themes.club/citadela/fooddelivery/wp-content/uploads/sites/17/2020/11/smoothies-600x450.jpg 600w, https://preview.ait-themes.club/citadela/fooddelivery/wp-content/uploads/sites/17/2020/11/smoothies-150x113.jpg 150w"
                                                                        sizes="(max-width: 800px) 100vw, 800px" style={{objectFit: 'cover'}}/>
                                                                </a></div>
                                                            <h2 className="wc-block-components-product-title wc-block-grid__product-title"><a
                                                                    className="wc-block-components-product-name"
                                                                    href>Smoothie</a>
                                                            </h2>
                                                            <div className="wp-block-woocommerce-product-price"><span
                                                                    className="wc-block-components-product-price wc-block-grid__product-price price wc-block-components-product-price"><span
                                                                        className="screen-reader-text">Previous price:</span><del
                                                                        className="wc-block-components-product-price__regular wc-block-grid__product-price__regular">$6.00</del><span
                                                                        className="screen-reader-text">Discounted price:</span><ins
                                                                        className="wc-block-components-product-price__value is-discounted wc-block-grid__product-price__value wc-block-grid__product-price__value--on-sale">$4.00</ins></span>
                                                            </div>
                                                            <div
                                                                className="wp-block-button wc-block-components-product-button wc-block-grid__product-add-to-cart">
                                                                <button aria-label="Add Smoothie to your cart"
                                                                    className="wp-block-button__link wp-element-button add_to_cart_button wc-block-components-product-button__button">Add
                                                                    to cart</button></div>
                                                        </li>
                                                        <li className="wc-block-grid__product wc-block-layout" aria-hidden="false">
                                                            <div className="wc-block-components-product-image wc-block-grid__product-image"><a
                                                                    href><img
                                                                        data-testid="product-image" alt="Poke Salad"
                                                                        src="https://preview.ait-themes.club/citadela/fooddelivery/wp-content/uploads/sites/17/2020/11/salad-fresh.jpg"
                                                                        srcSet="https://preview.ait-themes.club/citadela/fooddelivery/wp-content/uploads/sites/17/2020/11/salad-fresh.jpg 800w, https://preview.ait-themes.club/citadela/fooddelivery/wp-content/uploads/sites/17/2020/11/salad-fresh-300x225.jpg 300w, https://preview.ait-themes.club/citadela/fooddelivery/wp-content/uploads/sites/17/2020/11/salad-fresh-768x576.jpg 768w, https://preview.ait-themes.club/citadela/fooddelivery/wp-content/uploads/sites/17/2020/11/salad-fresh-640x480.jpg 640w, https://preview.ait-themes.club/citadela/fooddelivery/wp-content/uploads/sites/17/2020/11/salad-fresh-480x360.jpg 480w, https://preview.ait-themes.club/citadela/fooddelivery/wp-content/uploads/sites/17/2020/11/salad-fresh-600x450.jpg 600w, https://preview.ait-themes.club/citadela/fooddelivery/wp-content/uploads/sites/17/2020/11/salad-fresh-150x113.jpg 150w"
                                                                        sizes="(max-width: 800px) 100vw, 800px"
                                                                        style={{objectFit: 'cover'}}/></a></div>
                                                            <h2 className="wc-block-components-product-title wc-block-grid__product-title"><a
                                                                    className="wc-block-components-product-name"
                                                                    href>Poke
                                                                    Salad</a></h2>
                                                            <div className="wp-block-woocommerce-product-price"><span
                                                                    className="wc-block-components-product-price wc-block-grid__product-price price wc-block-components-product-price"><span
                                                                        className="wc-block-formatted-money-amount wc-block-components-formatted-money-amount wc-block-components-product-price__value wc-block-grid__product-price__value">$11.00</span></span>
                                                            </div>
                                                            <div
                                                                className="wp-block-button wc-block-components-product-button wc-block-grid__product-add-to-cart">
                                                                <button aria-label="Add Poke Salad to your cart"
                                                                    className="wp-block-button__link wp-element-button add_to_cart_button wc-block-components-product-button__button">Add
                                                                    to cart</button></div>
                                                        </li>
                                                        <li className="wc-block-grid__product wc-block-layout" aria-hidden="false">
                                                            <div className="wc-block-components-product-image wc-block-grid__product-image"><a
                                                                    href><img
                                                                        data-testid="product-image" alt="Sandwiched Burger"
                                                                        src="https://preview.ait-themes.club/citadela/fooddelivery/wp-content/uploads/sites/17/2020/11/sandwich.jpg"
                                                                        srcSet="https://preview.ait-themes.club/citadela/fooddelivery/wp-content/uploads/sites/17/2020/11/sandwich.jpg 800w, https://preview.ait-themes.club/citadela/fooddelivery/wp-content/uploads/sites/17/2020/11/sandwich-300x225.jpg 300w, https://preview.ait-themes.club/citadela/fooddelivery/wp-content/uploads/sites/17/2020/11/sandwich-768x576.jpg 768w, https://preview.ait-themes.club/citadela/fooddelivery/wp-content/uploads/sites/17/2020/11/sandwich-640x480.jpg 640w, https://preview.ait-themes.club/citadela/fooddelivery/wp-content/uploads/sites/17/2020/11/sandwich-480x360.jpg 480w, https://preview.ait-themes.club/citadela/fooddelivery/wp-content/uploads/sites/17/2020/11/sandwich-600x450.jpg 600w, https://preview.ait-themes.club/citadela/fooddelivery/wp-content/uploads/sites/17/2020/11/sandwich-150x113.jpg 150w"
                                                                        sizes="(max-width: 800px) 100vw, 800px"
                                                                        style={{objectFit: 'cover'}}/></a></div>
                                                            <h2 className="wc-block-components-product-title wc-block-grid__product-title"><a
                                                                    className="wc-block-components-product-name"
                                                                    href>Sandwiched
                                                                    Burger</a></h2>
                                                            <div className="wp-block-woocommerce-product-price"><span
                                                                    className="wc-block-components-product-price wc-block-grid__product-price price wc-block-components-product-price"><span
                                                                        className="wc-block-formatted-money-amount wc-block-components-formatted-money-amount wc-block-components-product-price__value wc-block-grid__product-price__value">$11.00</span></span>
                                                            </div>
                                                            <div
                                                                className="wp-block-button wc-block-components-product-button wc-block-grid__product-add-to-cart">
                                                                <button aria-label="Add Sandwiched Burger to your cart"
                                                                    className="wp-block-button__link wp-element-button add_to_cart_button wc-block-components-product-button__button">Add
                                                                    to cart</button></div>
                                                        </li>
                                                        <li className="wc-block-grid__product wc-block-layout" aria-hidden="false">
                                                            <div className="wc-block-components-product-image wc-block-grid__product-image"><a
                                                                    href><img
                                                                        data-testid="product-image" alt="Citrus Crepes"
                                                                        src="https://preview.ait-themes.club/citadela/fooddelivery/wp-content/uploads/sites/17/2020/11/pancakes.jpg"
                                                                        srcSet="https://preview.ait-themes.club/citadela/fooddelivery/wp-content/uploads/sites/17/2020/11/pancakes.jpg 800w, https://preview.ait-themes.club/citadela/fooddelivery/wp-content/uploads/sites/17/2020/11/pancakes-300x225.jpg 300w, https://preview.ait-themes.club/citadela/fooddelivery/wp-content/uploads/sites/17/2020/11/pancakes-768x576.jpg 768w, https://preview.ait-themes.club/citadela/fooddelivery/wp-content/uploads/sites/17/2020/11/pancakes-640x480.jpg 640w, https://preview.ait-themes.club/citadela/fooddelivery/wp-content/uploads/sites/17/2020/11/pancakes-480x360.jpg 480w, https://preview.ait-themes.club/citadela/fooddelivery/wp-content/uploads/sites/17/2020/11/pancakes-600x450.jpg 600w, https://preview.ait-themes.club/citadela/fooddelivery/wp-content/uploads/sites/17/2020/11/pancakes-150x113.jpg 150w"
                                                                        sizes="(max-width: 800px) 100vw, 800px"
                                                                        style={{objectFit: 'cover'}}/></a></div>
                                                            <h2 className="wc-block-components-product-title wc-block-grid__product-title"><a
                                                                    className="wc-block-components-product-name"
                                                                    href>Citrus
                                                                    Crepes</a></h2>
                                                            <div className="wp-block-woocommerce-product-price"><span
                                                                    className="wc-block-components-product-price wc-block-grid__product-price price wc-block-components-product-price"><span
                                                                        className="wc-block-formatted-money-amount wc-block-components-formatted-money-amount wc-block-components-product-price__value wc-block-grid__product-price__value">$12.00</span></span>
                                                            </div>
                                                            <div
                                                                className="wp-block-button wc-block-components-product-button wc-block-grid__product-add-to-cart">
                                                                <button aria-label="Add Citrus Crepes to your cart"
                                                                    className="wp-block-button__link wp-element-button add_to_cart_button wc-block-components-product-button__button">Add
                                                                    to cart</button></div>
                                                        </li>
                                                        <li className="wc-block-grid__product wc-block-layout" aria-hidden="false">
                                                            <div className="wc-block-components-product-image wc-block-grid__product-image"><a
                                                                    href>
                                                                    <div
                                                                        className="wc-block-components-product-sale-badge wc-block-components-product-sale-badge--align-right wc-block-grid__product-onsale">
                                                                        <span aria-hidden="true">Sale</span><span
                                                                            className="screen-reader-text">Product on sale</span></div><img
                                                                        data-testid="product-image" alt="Crab Bisque"
                                                                        src="https://preview.ait-themes.club/citadela/fooddelivery/wp-content/uploads/sites/17/2020/11/soup-onion.jpg"
                                                                        srcSet="https://preview.ait-themes.club/citadela/fooddelivery/wp-content/uploads/sites/17/2020/11/soup-onion.jpg 800w, https://preview.ait-themes.club/citadela/fooddelivery/wp-content/uploads/sites/17/2020/11/soup-onion-300x225.jpg 300w, https://preview.ait-themes.club/citadela/fooddelivery/wp-content/uploads/sites/17/2020/11/soup-onion-768x576.jpg 768w, https://preview.ait-themes.club/citadela/fooddelivery/wp-content/uploads/sites/17/2020/11/soup-onion-640x480.jpg 640w, https://preview.ait-themes.club/citadela/fooddelivery/wp-content/uploads/sites/17/2020/11/soup-onion-480x360.jpg 480w, https://preview.ait-themes.club/citadela/fooddelivery/wp-content/uploads/sites/17/2020/11/soup-onion-600x450.jpg 600w, https://preview.ait-themes.club/citadela/fooddelivery/wp-content/uploads/sites/17/2020/11/soup-onion-150x113.jpg 150w"
                                                                        sizes="(max-width: 800px) 100vw, 800px" style={{objectFit: 'cover'}}/>
                                                                </a></div>
                                                            <h2 className="wc-block-components-product-title wc-block-grid__product-title"><a
                                                                    className="wc-block-components-product-name"
                                                                    href>Crab
                                                                    Bisque</a></h2>
                                                            <div className="wp-block-woocommerce-product-price"><span
                                                                    className="wc-block-components-product-price wc-block-grid__product-price price wc-block-components-product-price"><span
                                                                        className="screen-reader-text">Previous price:</span><del
                                                                        className="wc-block-components-product-price__regular wc-block-grid__product-price__regular">$11.00</del><span
                                                                        className="screen-reader-text">Discounted price:</span><ins
                                                                        className="wc-block-components-product-price__value is-discounted wc-block-grid__product-price__value wc-block-grid__product-price__value--on-sale">$8.00</ins></span>
                                                            </div>
                                                            <div
                                                                className="wp-block-button wc-block-components-product-button wc-block-grid__product-add-to-cart">
                                                                <button aria-label="Add Crab Bisque to your cart"
                                                                    className="wp-block-button__link wp-element-button add_to_cart_button wc-block-components-product-button__button added">1
                                                                    in cart</button></div>
                                                        </li>
                                                        <li className="wc-block-grid__product wc-block-layout" aria-hidden="false">
                                                            <div className="wc-block-components-product-image wc-block-grid__product-image"><a
                                                                    href><img
                                                                        data-testid="product-image" alt="Bruschetta"
                                                                        src="https://preview.ait-themes.club/citadela/fooddelivery/wp-content/uploads/sites/17/2020/11/bread-vegetable.jpg"
                                                                        srcSet="https://preview.ait-themes.club/citadela/fooddelivery/wp-content/uploads/sites/17/2020/11/bread-vegetable.jpg 800w, https://preview.ait-themes.club/citadela/fooddelivery/wp-content/uploads/sites/17/2020/11/bread-vegetable-300x225.jpg 300w, https://preview.ait-themes.club/citadela/fooddelivery/wp-content/uploads/sites/17/2020/11/bread-vegetable-768x576.jpg 768w, https://preview.ait-themes.club/citadela/fooddelivery/wp-content/uploads/sites/17/2020/11/bread-vegetable-640x480.jpg 640w, https://preview.ait-themes.club/citadela/fooddelivery/wp-content/uploads/sites/17/2020/11/bread-vegetable-480x360.jpg 480w, https://preview.ait-themes.club/citadela/fooddelivery/wp-content/uploads/sites/17/2020/11/bread-vegetable-600x450.jpg 600w, https://preview.ait-themes.club/citadela/fooddelivery/wp-content/uploads/sites/17/2020/11/bread-vegetable-150x113.jpg 150w"
                                                                        sizes="(max-width: 800px) 100vw, 800px"
                                                                        style={{objectFit: 'cover'}}/></a></div>
                                                            <h2 className="wc-block-components-product-title wc-block-grid__product-title"><a
                                                                    className="wc-block-components-product-name"
                                                                    href>Bruschetta</a>
                                                            </h2>
                                                            <div className="wp-block-woocommerce-product-price"><span
                                                                    className="wc-block-components-product-price wc-block-grid__product-price price wc-block-components-product-price"><span
                                                                        className="wc-block-formatted-money-amount wc-block-components-formatted-money-amount wc-block-components-product-price__value wc-block-grid__product-price__value">$8.00</span></span>
                                                            </div>
                                                            <div
                                                                className="wp-block-button wc-block-components-product-button wc-block-grid__product-add-to-cart">
                                                                <button aria-label="Add Bruschetta to your cart"
                                                                    className="wp-block-button__link wp-element-button add_to_cart_button wc-block-components-product-button__button">Add
                                                                    to cart</button></div>
                                                        </li>
                                                        <li className="wc-block-grid__product wc-block-layout" aria-hidden="false">
                                                            <div className="wc-block-components-product-image wc-block-grid__product-image"><a
                                                                    href><img
                                                                        data-testid="product-image" alt="Tom Yum Goong"
                                                                        src="https://preview.ait-themes.club/citadela/fooddelivery/wp-content/uploads/sites/17/2020/11/soup-shrimp.jpg"
                                                                        srcSet="https://preview.ait-themes.club/citadela/fooddelivery/wp-content/uploads/sites/17/2020/11/soup-shrimp.jpg 800w, https://preview.ait-themes.club/citadela/fooddelivery/wp-content/uploads/sites/17/2020/11/soup-shrimp-300x225.jpg 300w, https://preview.ait-themes.club/citadela/fooddelivery/wp-content/uploads/sites/17/2020/11/soup-shrimp-768x576.jpg 768w, https://preview.ait-themes.club/citadela/fooddelivery/wp-content/uploads/sites/17/2020/11/soup-shrimp-640x480.jpg 640w, https://preview.ait-themes.club/citadela/fooddelivery/wp-content/uploads/sites/17/2020/11/soup-shrimp-480x360.jpg 480w, https://preview.ait-themes.club/citadela/fooddelivery/wp-content/uploads/sites/17/2020/11/soup-shrimp-600x450.jpg 600w, https://preview.ait-themes.club/citadela/fooddelivery/wp-content/uploads/sites/17/2020/11/soup-shrimp-150x113.jpg 150w"
                                                                        sizes="(max-width: 800px) 100vw, 800px"
                                                                        style={{objectFit: 'cover'}}/></a></div>
                                                            <h2 className="wc-block-components-product-title wc-block-grid__product-title"><a
                                                                    className="wc-block-components-product-name"
                                                                    href>Tom
                                                                    Yum Goong</a></h2>
                                                            <div className="wp-block-woocommerce-product-price"><span
                                                                    className="wc-block-components-product-price wc-block-grid__product-price price wc-block-components-product-price"><span
                                                                        className="wc-block-formatted-money-amount wc-block-components-formatted-money-amount wc-block-components-product-price__value wc-block-grid__product-price__value">$9.00</span></span>
                                                            </div>
                                                            <div
                                                                className="wp-block-button wc-block-components-product-button wc-block-grid__product-add-to-cart">
                                                                <button aria-label="Add Tom Yum Goong to your cart"
                                                                    className="wp-block-button__link wp-element-button add_to_cart_button wc-block-components-product-button__button">Add
                                                                    to cart</button></div>
                                                        </li>
                                                        <li className="wc-block-grid__product wc-block-layout" aria-hidden="false">
                                                            <div className="wc-block-components-product-image wc-block-grid__product-image"><a
                                                                    href>
                                                                    <div
                                                                        className="wc-block-components-product-sale-badge wc-block-components-product-sale-badge--align-right wc-block-grid__product-onsale">
                                                                        <span aria-hidden="true">Sale</span><span
                                                                            className="screen-reader-text">Product on sale</span></div><img
                                                                        data-testid="product-image" alt="Beef Bacon Burger"
                                                                        src="https://preview.ait-themes.club/citadela/fooddelivery/wp-content/uploads/sites/17/2020/11/burger-white.jpg"
                                                                        srcSet="https://preview.ait-themes.club/citadela/fooddelivery/wp-content/uploads/sites/17/2020/11/burger-white.jpg 800w, https://preview.ait-themes.club/citadela/fooddelivery/wp-content/uploads/sites/17/2020/11/burger-white-300x225.jpg 300w, https://preview.ait-themes.club/citadela/fooddelivery/wp-content/uploads/sites/17/2020/11/burger-white-768x576.jpg 768w, https://preview.ait-themes.club/citadela/fooddelivery/wp-content/uploads/sites/17/2020/11/burger-white-640x480.jpg 640w, https://preview.ait-themes.club/citadela/fooddelivery/wp-content/uploads/sites/17/2020/11/burger-white-480x360.jpg 480w, https://preview.ait-themes.club/citadela/fooddelivery/wp-content/uploads/sites/17/2020/11/burger-white-600x450.jpg 600w, https://preview.ait-themes.club/citadela/fooddelivery/wp-content/uploads/sites/17/2020/11/burger-white-150x113.jpg 150w"
                                                                        sizes="(max-width: 800px) 100vw, 800px" style={{objectFit: 'cover'}}/>
                                                                </a></div>
                                                            <h2 className="wc-block-components-product-title wc-block-grid__product-title"><a
                                                                    className="wc-block-components-product-name"
                                                                    href>Beef
                                                                    Bacon Burger</a></h2>
                                                            <div className="wp-block-woocommerce-product-price"><span
                                                                    className="wc-block-components-product-price wc-block-grid__product-price price wc-block-components-product-price"><span
                                                                        className="screen-reader-text">Previous price:</span><del
                                                                        className="wc-block-components-product-price__regular wc-block-grid__product-price__regular">$14.00</del><span
                                                                        className="screen-reader-text">Discounted price:</span><ins
                                                                        className="wc-block-components-product-price__value is-discounted wc-block-grid__product-price__value wc-block-grid__product-price__value--on-sale">$12.00</ins></span>
                                                            </div>
                                                            <div
                                                                className="wp-block-button wc-block-components-product-button wc-block-grid__product-add-to-cart">
                                                                <button aria-label="Add Beef Bacon Burger to your cart"
                                                                    className="wp-block-button__link wp-element-button add_to_cart_button wc-block-components-product-button__button">Add
                                                                    to cart</button></div>
                                                        </li>
                                                    </ul>
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