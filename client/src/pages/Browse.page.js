import React from 'react';
import Searchbar from '../widgets/SearchBar.widgets';
import nigerianStates from '../data/nigeria_states';
import CheckboxesTags from '../widgets/CategoriesInput.widgets';
import RangeSlider from '../widgets/Slider.widgets';
import Pagination from '@mui/material/Pagination';
import { useSearchParams, useNavigate, useLocation } from 'react-router-dom'
import Stack from '@mui/material/Stack';
import { getSearchQueriesUrl } from '../utils/utils';


function Browse() {
    const [searchParams] = useSearchParams()
    const location = useLocation()
    const { query, page, nutritionalContent, minPrice, maxPrice } = Object.fromEntries(searchParams)
    const [loading, setLoading] = React.useState(true)
    const [searchQuery, setSearchQuery] = React.useState(query || undefined)
    const [searchMinPrice, setSearchMinPrice] = React.useState(minPrice || undefined)
    const [searchMaxPrice, setSearchMaxPrice] = React.useState(maxPrice || undefined)
    const [searchNutritionalContent, setSearchNutritionalContent] = React.useState(nutritionalContent?.split(",") || [])
    console.log(searchNutritionalContent, searchMinPrice, searchMaxPrice, searchQuery)
    const [restaurants, setRestaurants] = React.useState([])
    const [urlQueries, setUrlQueries] = React.useState(getSearchQueriesUrl(location.search))
    const navigate = useNavigate()

    const handleChange = (event, value) => {
        navigate(`/browse${urlQueries}&page=${value}`)
        setLoading(true)
    };

    function onSearchQueryChange(event) {
        setSearchQuery(event.target.value)
        console.log(event.target.value)
    }

    function onSearchNutritionalContentChange(value) {
        if(value.length < 4) {
            setSearchNutritionalContent(value)
        }
        console.log(searchNutritionalContent)
    }

    function executeSearch() {
        if(!searchQuery) {
            return
        }
        navigate(`/browse?query=${searchQuery}&page=1`)
        setLoading(true)
    }


    return <>
            <Searchbar value={searchQuery} onChange={onSearchQueryChange} executeSearch={executeSearch}/>
            <div id="content" className="site-content">
                <div id="primary" className="content-area">
                    <article id="post-21" className="post-21 page type-page status-publish hentry">
                        <div className="entry-content">
                            <div className="wp-block-citadela-blocks-custom-container citadela-block-custom-container responsive-options size-wide bg-type-image inside-space-none bg-size-auto has-overlay has-min-height vertical-align-top" style={{minHeight: '620px'}} data-block-attr="{&quot;size&quot;:&quot;bg-size-full-horizontal&quot;,&quot;position&quot;:&quot;100% 88%&quot;}" data-block-mobile-breakpoint="900">
                                <div className="bg-image-wrapper" style={{backgroundImage: 'url(https://preview.ait-themes.club/citadela/fooddelivery/wp-content/uploads/sites/17/2020/11/blob-bowl-bg.png)', backgroundRepeat: 'no-repeat', backgroundPosition: '46% 95%'}}>
                                </div>
                                <div className="bg-image-overlay" style={{opacity: '0.5'}}></div>
                                <div className="inner-holder">
                                    <div style={{gap: "5%"}} className="wp-block-columns is-layout-flex wp-container-9 wp-block-columns-is-layout-flex">
                                        <div className="wp-block-column is-layout-flow wp-block-column-is-layout-flow" style={{flexBasis: '18%'}}>
                                            <div className="citadela-block-responsive-text align-left no-margins">
                                                <h2 className="inner-tag" style={{fontSize: '22px'}}>Order your favorites</h2>
                                            </div>



                                            <div className="wp-block-citadela-blocks-spacer citadela-block-spacer">
                                                <div className="inner-holder" style={{paddingTop: '30px'}}></div>
                                            </div>


                                            <div className="citadela-block-responsive-text align-left">
                                                <h6 className="inner-tag" style={{fontSize: '14px', letterSpacing: '0.1em'}}>NUTRITIONAL CONTENTS</h6>
                                            </div>



                                            <div className="wp-block-citadela-blocks-spacer citadela-block-spacer">
                                                <div className="inner-holder" style={{paddingTop: '8px'}}></div>
                                            </div>


                                            <CheckboxesTags
                                                placeholder="Nutritional Contents"
                                                label="Nutritional Contents"
                                                value={searchNutritionalContent}
                                                onNutritionalContentChange={onSearchNutritionalContentChange}
                                                options={Object.keys(nigerianStates)} 
                                                width={"100%"} 
                                            />


                                            <div className="wp-block-citadela-blocks-spacer citadela-block-spacer">
                                                <div className="inner-holder" style={{paddingTop: '15px'}}></div>
                                            </div>


                                            <div className="citadela-block-responsive-text align-left">
                                                <h6 className="inner-tag" style={{fontSize: '14px', letterSpacing: '0.1em'}}>PRICE RANGE</h6>
                                            </div>
                                            <RangeSlider />

                                            <div className="wp-block-citadela-blocks-spacer citadela-block-spacer">
                                                <div className="inner-holder" style={{paddingTop: '20px'}}></div>
                                            </div>
                                            <a 
                                                className="wp-block-button__link wp-element-button" 
                                                // onClick={executeFilter} 
                                                style={{width: "100%", borderRadius: "5px", background: '#fb246a' }} 
                                                // style={{width: "340px", borderRadius: "5px", background: (searchQuery||searchNutritionalContent.length||searchMinPrice) ? '#fb246a' : "grey"}} 
                                                href 
                                            >FILTER</a>

                                        </div>

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
                                                                    <h4 className="wc-block-components-product-title wc-block-grid__product-title"><a
                                                                            className="wc-block-components-product-name"
                                                                            href>Restaraunt name</a></h4>
                                                                    <p style={{ fontWeight: 500, fontSize: "12px" }} className="wc-block-components-product-title wc-block-grid__product-title">10 min</p>
                                                                    <p style={{ fontWeight: 100, fontSize: "12px" }} className="wc-block-components-product-title wc-block-grid__product-title">nutriotion and all that</p>
                                                                    <h2>
                                                                    <a href>Vegan
                                                                            Burger</a></h2>
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
                                                            {/* {((query||nutritionalContent||minPrice||maxPrice)&&page&&Boolean(restaurants["data"]?.length&&!loading)) && <Stack marginBottom={7} spacing={2}> */}
                                                            {<Stack marginBottom={7} spacing={2}>
                                                                <Pagination 
                                                                    sx={{ 
                                                                    '& .MuiPaginationItem-root': { color: 'black' },
                                                                    '& .MuiPaginationItem-page.Mui-selected': { backgroundColor: '#ea2251', color: 'white' }
                                                                    }} 
                                                                    size='large' 
                                                                    variant='outlined' 
                                                                    shape='rounded' 
                                                                    count={10}
                                                                    // count={Math.ceil(companies.totalResults/10)} 
                                                                    page={Number(page)} 
                                                                    onChange={handleChange} 
                                                                />
                                                            </Stack>}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </>
}


export default Browse