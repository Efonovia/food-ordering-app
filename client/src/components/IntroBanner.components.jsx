import React from 'react';
import blobPlate from "../images/blob-plate-bg.png"

function IntroBanner() {
console.log(process.env)

    return <div class="wp-block-citadela-blocks-custom-container citadela-block-custom-container responsive-options size-wide bg-type-image inside-space-none has-bg has-overlay bg-size-auto"
    style={{backgroundColor: "rgba(255, 255, 255, 1)"}}
    data-block-attr="{&quot;backgroundImage&quot;:&quot;url(https://preview.ait-themes.club/citadela/fooddelivery/wp-content/uploads/sites/17/2020/11/blob-plate-bg-responsive.png)&quot;,&quot;size&quot;:&quot;bg-size-full-horizontal&quot;,&quot;position&quot;:&quot;50% 70%&quot;}"
    data-block-mobile-breakpoint="900">
    <div class="bg-image-wrapper"
        style={{backgroundImage: `url(${blobPlate})`, backgroundRepeat: "no-repeat", backgroundPosition: "50% 0%"}}>
    </div>
    <img alt='' src='../../public/wp-content/uploads/sites/17/2020/11/blob-plate-bg.png'/>
    <div class="bg-image-overlay" style={{opacity: "0.5"}}></div>
    <div class="inner-holder">
        <div class="wp-block-citadela-blocks-spacer citadela-block-spacer responsive-options"
            data-block-attr="{&quot;desktop&quot;:{&quot;height&quot;:&quot;8.5em&quot;},&quot;mobile&quot;:{&quot;height&quot;:&quot;4em&quot;}}"
            data-block-mobile-breakpoint="600">
            <div class="inner-holder" style={{paddingTop: "8.5em;"}}></div>
        </div>



        <h1 class="wp-block-heading has-huge-font-size"><strong>Fresh <span
                    style={{backgroundColor: "rgba(0, 0, 0, 0)", color:"#ea2251"}} class="has-inline-color">food delivery</span> </strong><br/><strong>from your favorite bistro</strong></h1>



        <div class="wp-block-citadela-blocks-spacer citadela-block-spacer">
            <div class="inner-holder" style={{paddingTop: "22px"}}></div>
        </div>



        <div class="wp-block-buttons is-layout-flex wp-block-buttons-is-layout-flex">
            <div class="wp-block-button"><a class="wp-block-button__link wp-element-button" href="#order-now"
                    style={{borderRadius: "5px"}}>Order Now</a></div>



            <div class="wp-block-button"><a
                    class="wp-block-button__link has-text-color has-background wp-element-button" href="#how-it-works"
                    style={{borderRadius: "5px", color:"#222222", backgroundColor:"#eeebec"}}>How it Works</a></div>
        </div>



        <div class="wp-block-citadela-blocks-spacer citadela-block-spacer responsive-options"
            data-block-attr="{&quot;desktop&quot;:{&quot;height&quot;:&quot;85px&quot;},&quot;mobile&quot;:{&quot;height&quot;:&quot;70px&quot;}}"
            data-block-mobile-breakpoint="900">
            <div class="inner-holder" style={{paddingTop: "85px"}}></div>
        </div>



        <div class="wp-block-group is-layout-flow wp-block-group-is-layout-flow">
            <div class="wp-block-group__inner-container">
                <div class="wp-block-citadela-blocks-custom-container citadela-block-custom-container size-wide bg-type-color inside-space-large has-bg has-border-radius has-shadow"
                    style={{backgroundColor: "rgba(255, 255, 255, 1)", borderRadius: "4px", boxShadow: "0px 10px 35px 0px rgba(62, 2, 16, 0.08)"}}>
                    <div class="inner-holder">
                        <div class="wp-block-columns is-layout-flex wp-container-5 wp-block-columns-is-layout-flex">
                            <div class="wp-block-column is-vertically-aligned-bottom is-layout-flow wp-block-column-is-layout-flow"
                                style= {{flexBasis: "66.66%"}}>
                                <form role="search" method="get"
                                    action="https://preview.ait-themes.club/citadela/fooddelivery/"
                                    class="wp-block-search__button-outside wp-block-search__text-button wp-block-search">
                                    <label class="wp-block-search__label" for="wp-block-search__input-2">Search</label>
                                    <div class="wp-block-search__inside-wrapper "><input class="wp-block-search__input"
                                            id="wp-block-search__input-2" placeholder="Search products…" value=""
                                            type="search" name="s" required=""/><input type="hidden" name="post_type"
                                            value="product"/><button aria-label="Search"
                                            class="wp-block-search__button wp-element-button"
                                            type="submit">Search</button></div>
                                </form>
                            </div>



                            <div class="wp-block-column is-vertically-aligned-bottom is-layout-flow wp-block-column-is-layout-flow"
                                style={{flexBasis: "39.33%"}}>
                                <div data-block-name="woocommerce/product-categories" data-has-count="false"
                                    data-has-empty="true" data-is-dropdown="true" data-is-hierarchical="false"
                                    class="wp-block-woocommerce-product-categories wc-block-product-categories is-dropdown ">
                                    <div class="wc-block-product-categories__dropdown">
                                        <label class="screen-reader-text" for="product-categories-65f5af7885433-select">
                                            Select a category
                                        </label>
                                        <select aria-label="List of categories"
                                            id="product-categories-65f5af7885433-select">
                                            <option value="false" hidden="">
                                                Select a category
                                            </option>

                                            <option value="product-category/uncategorized/index.html">

                                                Uncategorized

                                            </option>


                                            <option value="product-category/burgers/index.html">

                                                Burgers

                                            </option>


                                            <option value="product-category/fish/index.html">

                                                Fish

                                            </option>


                                            <option value="product-category/meat/index.html">

                                                Meat

                                            </option>


                                            <option value="product-category/noodles/index.html">

                                                Noodles

                                            </option>


                                            <option value="product-category/pastries/index.html">

                                                Pastries

                                            </option>


                                            <option value="product-category/salad/index.html">

                                                Salad

                                            </option>


                                            <option value="product-category/soups/index.html">

                                                Soups

                                            </option>


                                        </select>
                                    </div>
                                    <button type="button" class="wc-block-product-categories__button"
                                        aria-label="Go to category"
                                        onclick="const url = document.getElementById( 'product-categories-65f5af7885433-select' ).value; if ( 'false' !== url ) document.location.href = url;">
                                        <svg aria-hidden="true" role="img" focusable="false"
                                            class="dashicon dashicons-arrow-right-alt2"
                                            xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                            viewBox="0 0 20 20">
                                            <path d="M6 15l5-5-5-5 1-2 7 7-7 7z"></path>
                                        </svg>
                                    </button>
                                </div>


                                <div class="wp-block-citadela-blocks-spacer citadela-block-spacer">
                                    <div class="inner-holder" style={{paddingTop: "4px"}}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>



        <div class="wp-block-citadela-blocks-spacer citadela-block-spacer responsive-options"
            data-block-attr="{&quot;desktop&quot;:{&quot;height&quot;:&quot;110px&quot;},&quot;mobile&quot;:{&quot;height&quot;:&quot;80px&quot;}}"
            data-block-mobile-breakpoint="900">
            <div class="inner-holder" style={{paddingTop: "110px"}}></div>
        </div>
    </div>
</div>
}


export default IntroBanner