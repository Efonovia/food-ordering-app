import React from 'react';
import RestaurantCard from '../components/RestaurantCard.components';
import { calculateAverageRating } from '../utils/utils';
import { CircularProgress } from '@mui/material';
import { httpGetAllRestaurants } from '../hooks/restaurants.hooks';


function Restaurants() {
    const [restaurants, setRestaurants] = React.useState([])
    const [loading, setLoading] = React.useState(true)
    const restaurantsHTML = restaurants.map(restaurant => <RestaurantCard key={restaurant._id} id={restaurant._id} name={restaurant.name} averageRating={calculateAverageRating(restaurant.reviews)}/>)

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await httpGetAllRestaurants();
                setRestaurants(result?.body);
            } catch (error) {
                console.error('Error fetching featured companies:', error);
                setLoading(false)
            } finally {
                setLoading(false)
            }
        };

        fetchData();
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return loading ? <CircularProgress sx={{marginTop: "300px", marginLeft: "800px", color: "#fb246a"}} size={100}/> :<div id="content" className="site-content">
    <div id="primary" className="content-area">
        <main id="main" className="site-main">
            <article id="post-357" className="post-357 page type-page status-publish hentry">
                <div className="entry-content">
                    <div className="wp-block-citadela-blocks-custom-container citadela-block-custom-container responsive-options size-wide bg-type-image inside-space-none bg-size-auto has-bg has-overlay"
                        style={{backgroundImage: 'url(https://preview.ait-themes.club/citadela/fooddelivery/wp-content/uploads/sites/17/2020/11/blob-plate-overflow.jpg)', backgroundRepeat: 'no-repeat', backgroundColor: 'rgba(255, 255, 255, 1)', backgroundPosition: '50% 0%'}}
                        data-block-attr="{&quot;backgroundImage&quot;:&quot;url(https://preview.ait-themes.club/citadela/fooddelivery/wp-content/uploads/sites/17/2020/11/blob-plate-overflow-bg-responsive.png)&quot;,&quot;size&quot;:&quot;bg-size-full-horizontal&quot;,&quot;position&quot;:&quot;100% 40%&quot;}"
                        data-block-mobile-breakpoint="600">
                        <div className="bg-image-overlay" style={{opacity: '1'}}></div>
                        <div className="inner-holder">
                            <div className="wp-block-citadela-blocks-spacer citadela-block-spacer responsive-options"
                                data-block-attr="{&quot;desktop&quot;:{&quot;height&quot;:&quot;8.5em&quot;},&quot;mobile&quot;:{&quot;height&quot;:&quot;3em&quot;}}"
                                data-block-mobile-breakpoint="600">
                                <div className="inner-holder" style={{paddingTop: '5.5em'}}></div>
                            </div>



                            <div className="wp-block-columns is-layout-flex wp-container-4 wp-block-columns-is-layout-flex">
                                <div
                                    className="wp-block-column is-vertically-aligned-center is-layout-flow wp-block-column-is-layout-flow">
                                    <h1 className="has-huge-font-size wp-block-heading"><strong>Eat from the best places in Nile University</strong></h1>



                                    <div className="wp-block-citadela-blocks-spacer citadela-block-spacer">
                                        <div className="inner-holder" style={{paddingTop: '10px'}}></div>
                                    </div>


                            
                                </div>



                                <div className="wp-block-column is-vertically-aligned-top is-layout-flow wp-block-column-is-layout-flow"
                                    style={{flexBasis: '50%'}}></div>
                            </div>



                            <div className="wp-block-citadela-blocks-spacer citadela-block-spacer responsive-options"
                                data-block-attr="{&quot;desktop&quot;:{&quot;height&quot;:&quot;50px&quot;},&quot;mobile&quot;:{&quot;height&quot;:&quot;20px&quot;}}"
                                data-block-mobile-breakpoint="782">
                                <div className="inner-holder" style={{paddingTop: '50px'}}></div>
                            </div>



                            <div className="wp-block-group is-layout-flow wp-block-group-is-layout-flow">
                                <div className="wp-block-group__inner-container">
                                    <div className="wp-block-citadela-blocks-spacer citadela-block-spacer">
                                        <div className="inner-holder" style={{paddingTop: '20px'}}></div>
                                    </div>



                                    <div className="wp-block-citadela-blocks-custom-container citadela-block-custom-container size-wide bg-type-color inside-space-small has-bg has-border-radius has-shadow"
                                        style={{backgroundColor: 'rgba(255, 255, 255, 1)', borderRadius: '4px', boxShadow: '0px 10px 35px 0px rgba(62, 2, 16, 0.08)'}}>
                                        <div className="inner-holder">
                                            <div data-block-name="woocommerce/product-on-sale" data-columns="4"
                                                data-rows="1"
                                                data-content-visibility="{&quot;title&quot;:true,&quot;price&quot;:true,&quot;rating&quot;:false,&quot;button&quot;:false}"
                                                data-orderby="title"
                                                className="wc-block-grid wp-block-product-on-sale wc-block-product-on-sale has-4-columns">
                                                <ul className="wc-block-grid__products">{restaurantsHTML}</ul>
                                            </div>


                                            <div
                                                className="wp-block-citadela-blocks-spacer citadela-block-spacer negative-height">
                                                <div className="inner-holder" style={{marginTop: '-35px'}}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>



                            <div className="wp-block-citadela-blocks-spacer citadela-block-spacer responsive-options"
                                data-block-attr="{&quot;desktop&quot;:{&quot;height&quot;:&quot;20px&quot;},&quot;mobile&quot;:{&quot;height&quot;:&quot;10px&quot;}}"
                                data-block-mobile-breakpoint="782">
                                <div className="inner-holder" style={{paddingTop: '20px'}}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </main>
    </div>

</div>
}


export default Restaurants