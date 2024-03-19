import React from 'react';


function AdminViewOrder() {


    return <div id="content" className="site-content">


            <div style={{ display: "block" }} className="page-title standard">
                <header className="entry-header">
                    <div className="entry-header-wrap">
                        <h1 className="entry-title">Customer's Order Details</h1>
                        <h5 style={{fontSize: "16px"}}>Name: Snoop Dogg</h5>
                        <h5 style={{fontSize: "16px"}}>Date: Tomorrow</h5>
                    </div>
                </header>
            </div>


            <div id="primary" className="content-area">
                <main id="main" className="site-main">


                    <article id="post-12" className="post-12 page type-page status-publish hentry">
                        <div className="entry-content">
                            <div className="woocommerce">
                                <div className="woocommerce-notices-wrapper"></div>
                                <form className="woocommerce-cart-form">

                                    <table className="shop_table shop_table_responsive cart woocommerce-cart-form__contents"
                                        cellspacing="0">
                                        <thead>
                                            <tr>
                                                <th className="product-thumbnail"><span className="screen-reader-text">Thumbnail
                                                        image</span></th>
                                                <th className="product-name">Product</th>
                                                <th className="product-price">Price</th>
                                                <th className="product-quantity">Quantity</th>
                                                <th className="product-subtotal">Subtotal</th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            <tr className="woocommerce-cart-form__cart-item cart_item">

                                                <td className="product-thumbnail">
                                                    <a
                                                        href><img
                                                            width="300" height="225"
                                                            style={{ width: "48px" }}
                                                            src="https://preview.ait-themes.club/citadela/fooddelivery/wp-content/uploads/sites/17/2020/11/fish-chips-300x225.jpg"
                                                            className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                                                            alt="" decoding="async" fetchpriority="high"
                                                            srcset="https://preview.ait-themes.club/citadela/fooddelivery/wp-content/uploads/sites/17/2020/11/fish-chips-300x225.jpg 300w, https://preview.ait-themes.club/citadela/fooddelivery/wp-content/uploads/sites/17/2020/11/fish-chips-768x576.jpg 768w, https://preview.ait-themes.club/citadela/fooddelivery/wp-content/uploads/sites/17/2020/11/fish-chips-640x480.jpg 640w, https://preview.ait-themes.club/citadela/fooddelivery/wp-content/uploads/sites/17/2020/11/fish-chips-480x360.jpg 480w, https://preview.ait-themes.club/citadela/fooddelivery/wp-content/uploads/sites/17/2020/11/fish-chips-600x450.jpg 600w, https://preview.ait-themes.club/citadela/fooddelivery/wp-content/uploads/sites/17/2020/11/fish-chips-150x113.jpg 150w, https://preview.ait-themes.club/citadela/fooddelivery/wp-content/uploads/sites/17/2020/11/fish-chips.jpg 800w"
                                                            sizes="(max-width: 300px) 100vw, 300px"/></a>
                                                </td>

                                                <td className="product-name" data-title="Product">
                                                    <a
                                                        href>Fish
                                                        &amp; Chips</a>
                                                </td>

                                                <td className="product-price" data-title="Price">
                                                    <span className="woocommerce-Price-amount amount"><bdi><span
                                                                className="woocommerce-Price-currencySymbol">$</span>13.00</bdi></span>
                                                </td>

                                                <td className="product-quantity" data-title="Quantity">2</td>

                                                <td className="product-subtotal" data-title="Subtotal">
                                                    <span className="woocommerce-Price-amount amount"><bdi><span
                                                                className="woocommerce-Price-currencySymbol">$</span>13.00</bdi></span>
                                                </td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </form>


                                <div className="col2-set cart-collaterals">
                                    <div className="col-1">
                                        <div className="woocommerce-shipping-fields">
                                        </div>
                                        <div className="woocommerce-additional-fields">
                                            <h3>Additional information</h3>
                                            <p>this ia s  anote porly typed this ia s  anote porly typedthis ia s  anote porly typedthis ia s  anote porly typedthis ia s  anote porly typed</p>
                                        </div>
                                    </div>
                                    <div className="col-2 cart_totals calculated_shipping">


                                        <h2>Order Total</h2>

                                        <table cellspacing="0" className="shop_table shop_table_responsive">

                                            <tbody>
                                                <tr className="cart-subtotal">
                                                    <th>Subtotal</th>
                                                    <td data-title="Subtotal"><span
                                                            className="woocommerce-Price-amount amount"><bdi><span
                                                                    className="woocommerce-Price-currencySymbol">$</span>38.00</bdi></span>
                                                    </td>
                                                </tr>

                                                <tr className="order-total">
                                                    <th>Total</th>
                                                    <td data-title="Total"><strong><span
                                                                className="woocommerce-Price-amount amount"><bdi><span
                                                                        className="woocommerce-Price-currencySymbol">$</span>38.00</bdi></span></strong>
                                                    </td>
                                                </tr>


                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </article>

                </main>
            </div>

        </div>
}


export default AdminViewOrder