import React from 'react';
import blobPlate from "../images/blob-plate-bg.png"

function IntroBanner(props) {

    return <div className="wp-block-citadela-blocks-custom-container citadela-block-custom-container responsive-options size-wide bg-type-image inside-space-none has-bg has-overlay bg-size-auto"
    style={{backgroundColor: "rgba(255, 255, 255, 1)"}}
    data-block-attr="{&quot;backgroundImage&quot;:&quot;url(https://preview.ait-themes.club/citadela/fooddelivery/wp-content/uploads/sites/17/2020/11/blob-plate-bg-responsive.png)&quot;,&quot;size&quot;:&quot;bg-size-full-horizontal&quot;,&quot;position&quot;:&quot;50% 70%&quot;}"
    data-block-mobile-breakpoint="900">
    <div className="bg-image-wrapper"
        style={{backgroundImage: `url(${blobPlate})`, backgroundRepeat: "no-repeat", backgroundPosition: "50% 0%"}}>
    </div>
    <img alt='' src='../../public/wp-content/uploads/sites/17/2020/11/blob-plate-bg.png'/>
    <div className="bg-image-overlay" style={{opacity: "0.5"}}></div>
    <div className="inner-holder">
        <div className="wp-block-citadela-blocks-spacer citadela-block-spacer responsive-options"
            data-block-attr="{&quot;desktop&quot;:{&quot;height&quot;:&quot;8.5em&quot;},&quot;mobile&quot;:{&quot;height&quot;:&quot;4em&quot;}}"
            data-block-mobile-breakpoint="600">
            <div className="inner-holder" style={{paddingTop: "8.5em;"}}></div>
        </div>



        <h1 className="wp-block-heading has-huge-font-size"><strong>Fresh <span
                    style={{backgroundColor: "rgba(0, 0, 0, 0)", color:"#ea2251"}} className="has-inline-color">food delivery</span> </strong><br/><strong>from your favorite bistro</strong></h1>



        <div className="wp-block-citadela-blocks-spacer citadela-block-spacer">
            <div className="inner-holder" style={{paddingTop: "22px"}}></div>
        </div>



        <div className="wp-block-buttons is-layout-flex wp-block-buttons-is-layout-flex">
            <div className="wp-block-button"><a className="wp-block-button__link wp-element-button" href
                    style={{borderRadius: "5px"}}>Order Now</a></div>



            <div onClick={props.scrollTo} className="wp-block-button"><a
                    className="wp-block-button__link has-text-color has-background wp-element-button" href
                    style={{borderRadius: "5px", color:"#222222", backgroundColor:"#eeebec"}}>How it Works</a></div>
        </div>



        <div className="wp-block-citadela-blocks-spacer citadela-block-spacer responsive-options"
            data-block-attr="{&quot;desktop&quot;:{&quot;height&quot;:&quot;85px&quot;},&quot;mobile&quot;:{&quot;height&quot;:&quot;70px&quot;}}"
            data-block-mobile-breakpoint="900">
            <div className="inner-holder" style={{paddingTop: "85px"}}></div>
        </div>



        <div className="wp-block-group is-layout-flow wp-block-group-is-layout-flow">
            <div className="wp-block-group__inner-container">
                <div className="wp-block-citadela-blocks-custom-container citadela-block-custom-container size-wide bg-type-color inside-space-large has-bg has-border-radius has-shadow"
                    style={{backgroundColor: "rgba(255, 255, 255, 1)", borderRadius: "4px", boxShadow: "0px 10px 35px 0px rgba(62, 2, 16, 0.08)"}}>
                    <div className="inner-holder">
                        <div className="wp-block-columns is-layout-flex wp-container-5 wp-block-columns-is-layout-flex">
                            <div className="wp-block-column is-vertically-aligned-bottom is-layout-flow wp-block-column-is-layout-flow"
                                style= {{flexBasis: "66.66%"}}>
                                <form role="search" method="get"
                                    action="https://preview.ait-themes.club/citadela/fooddelivery/"
                                    className="wp-block-search__button-outside wp-block-search__text-button wp-block-search">
                                    <label className="wp-block-search__label" for="wp-block-search__input-2">Search</label>
                                    <div className="wp-block-search__inside-wrapper "><input className="wp-block-search__input"
                                            id="wp-block-search__input-2" placeholder="Search products…" value=""
                                            type="search" name="s" required=""/><input type="hidden" name="post_type"
                                            value="product"/><button aria-label="Search"
                                            className="wp-block-search__button wp-element-button"
                                            type="submit">Search</button></div>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>



        <div className="wp-block-citadela-blocks-spacer citadela-block-spacer responsive-options"
            data-block-attr="{&quot;desktop&quot;:{&quot;height&quot;:&quot;110px&quot;},&quot;mobile&quot;:{&quot;height&quot;:&quot;80px&quot;}}"
            data-block-mobile-breakpoint="900">
            <div className="inner-holder" style={{paddingTop: "110px"}}></div>
        </div>
    </div>
</div>
}


export default IntroBanner