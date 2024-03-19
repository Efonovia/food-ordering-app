import React from 'react';


function Cart() {


    return <div id="content" className="site-content">


    <div style={{ display: "block" }} className="page-title standard">
        <header className="entry-header">
            <div className="entry-header-wrap">
                <h1 className="entry-title">Cart</h1>
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
                                        <th className="product-remove"><span className="screen-reader-text">Remove item</span>
                                        </th>
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

                                        <td className="product-remove">
                                            <a href
                                                className="remove" aria-label="Remove Fish &amp; Chips from cart"
                                                data-product_id="161" data-product_sku="">×</a>
                                        </td>

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

                                        <td className="product-quantity" data-title="Quantity">
                                            <div className="quantity">
                                                <label className="screen-reader-text" for="quantity_65f86f7878844">Fish
                                                    &amp; Chips quantity</label>
                                                <input type="number" id="quantity_65f86f7878844"
                                                    className="input-text qty text"
                                                    name="cart[bd4c9ab730f5513206b999ec0d90d1fb][qty]" value="1"
                                                    aria-label="Product quantity" size="4" min="0" max="" step="1"
                                                    placeholder="" inputmode="numeric" autocomplete="off"/>
                                            </div>
                                        </td>

                                        <td className="product-subtotal" data-title="Subtotal">
                                            <span className="woocommerce-Price-amount amount"><bdi><span
                                                        className="woocommerce-Price-currencySymbol">$</span>13.00</bdi></span>
                                        </td>
                                    </tr>
                                    <tr className="woocommerce-cart-form__cart-item cart_item">

                                        <td className="product-remove">
                                            <a href
                                                className="remove" aria-label="Remove Crab Bisque from cart"
                                                data-product_id="154" data-product_sku="">×</a>
                                        </td>

                                        <td className="product-thumbnail">
                                            <a
                                                href><img
                                                    width="300" height="225"
                                                    style={{ width: "48px" }}
                                                    src="https://preview.ait-themes.club/citadela/fooddelivery/wp-content/uploads/sites/17/2020/11/soup-onion-300x225.jpg"
                                                    className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                                                    alt="" decoding="async"
                                                    srcset="https://preview.ait-themes.club/citadela/fooddelivery/wp-content/uploads/sites/17/2020/11/soup-onion-300x225.jpg 300w, https://preview.ait-themes.club/citadela/fooddelivery/wp-content/uploads/sites/17/2020/11/soup-onion-768x576.jpg 768w, https://preview.ait-themes.club/citadela/fooddelivery/wp-content/uploads/sites/17/2020/11/soup-onion-640x480.jpg 640w, https://preview.ait-themes.club/citadela/fooddelivery/wp-content/uploads/sites/17/2020/11/soup-onion-480x360.jpg 480w, https://preview.ait-themes.club/citadela/fooddelivery/wp-content/uploads/sites/17/2020/11/soup-onion-600x450.jpg 600w, https://preview.ait-themes.club/citadela/fooddelivery/wp-content/uploads/sites/17/2020/11/soup-onion-150x113.jpg 150w, https://preview.ait-themes.club/citadela/fooddelivery/wp-content/uploads/sites/17/2020/11/soup-onion.jpg 800w"
                                                    sizes="(max-width: 300px) 100vw, 300px"/></a>
                                        </td>

                                        <td className="product-name" data-title="Product">
                                            <a
                                                href>Crab
                                                Bisque</a>
                                        </td>

                                        <td className="product-price" data-title="Price">
                                            <span className="woocommerce-Price-amount amount"><bdi><span
                                                        className="woocommerce-Price-currencySymbol">$</span>8.00</bdi></span>
                                        </td>

                                        <td className="product-quantity" data-title="Quantity">
                                            <div className="quantity">
                                                <label className="screen-reader-text" for="quantity_65f86f78796cb">Crab
                                                    Bisque quantity</label>
                                                <input type="number" id="quantity_65f86f78796cb"
                                                    className="input-text qty text"
                                                    name="cart[1d7f7abc18fcb43975065399b0d1e48e][qty]" value="1"
                                                    aria-label="Product quantity" size="4" min="0" max="" step="1"
                                                    placeholder="" inputmode="numeric" autocomplete="off"/>
                                            </div>
                                        </td>

                                        <td className="product-subtotal" data-title="Subtotal">
                                            <span className="woocommerce-Price-amount amount"><bdi><span
                                                        className="woocommerce-Price-currencySymbol">$</span>8.00</bdi></span>
                                        </td>
                                    </tr>
                                    <tr className="woocommerce-cart-form__cart-item cart_item">

                                        <td className="product-remove">
                                            <a href
                                                className="remove" aria-label="Remove Doughnuts from cart"
                                                data-product_id="117" data-product_sku="">×</a>
                                        </td>

                                        <td className="product-thumbnail">
                                            <a
                                                href><img
                                                    width="300" height="225"
                                                    style={{ width: "48px" }}
                                                    src="https://preview.ait-themes.club/citadela/fooddelivery/wp-content/uploads/sites/17/2020/11/donuts-300x225.jpg"
                                                    className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                                                    alt="" decoding="async"
                                                    srcset="https://preview.ait-themes.club/citadela/fooddelivery/wp-content/uploads/sites/17/2020/11/donuts-300x225.jpg 300w, https://preview.ait-themes.club/citadela/fooddelivery/wp-content/uploads/sites/17/2020/11/donuts-768x576.jpg 768w, https://preview.ait-themes.club/citadela/fooddelivery/wp-content/uploads/sites/17/2020/11/donuts-640x480.jpg 640w, https://preview.ait-themes.club/citadela/fooddelivery/wp-content/uploads/sites/17/2020/11/donuts-480x360.jpg 480w, https://preview.ait-themes.club/citadela/fooddelivery/wp-content/uploads/sites/17/2020/11/donuts-600x450.jpg 600w, https://preview.ait-themes.club/citadela/fooddelivery/wp-content/uploads/sites/17/2020/11/donuts-150x113.jpg 150w, https://preview.ait-themes.club/citadela/fooddelivery/wp-content/uploads/sites/17/2020/11/donuts.jpg 800w"
                                                    sizes="(max-width: 300px) 100vw, 300px"/></a>
                                        </td>

                                        <td className="product-name" data-title="Product">
                                            <a
                                                href>Doughnuts</a>
                                            <dl className="variation">
                                                <dt className="variation-Flavor">Flavor:</dt>
                                                <dd className="variation-Flavor">
                                                    <p>Vanilla</p>
                                                </dd>
                                            </dl>
                                        </td>

                                        <td className="product-price" data-title="Price">
                                            <span className="woocommerce-Price-amount amount"><bdi><span
                                                        className="woocommerce-Price-currencySymbol">$</span>3.00</bdi></span>
                                        </td>

                                        <td className="product-quantity" data-title="Quantity">
                                            <div className="quantity">
                                                <label className="screen-reader-text" for="quantity_65f86f787bd75">Doughnuts
                                                    quantity</label>
                                                <input type="number" id="quantity_65f86f787bd75"
                                                    className="input-text qty text"
                                                    name="cart[7323bd8ec4be994f6448638300806e21][qty]" value="1"
                                                    aria-label="Product quantity" size="4" min="0" max="" step="1"
                                                    placeholder="" inputmode="numeric" autocomplete="off"/>
                                            </div>
                                        </td>

                                        <td className="product-subtotal" data-title="Subtotal">
                                            <span className="woocommerce-Price-amount amount"><bdi><span
                                                        className="woocommerce-Price-currencySymbol">$</span>3.00</bdi></span>
                                        </td>
                                    </tr>
                                    <tr className="woocommerce-cart-form__cart-item cart_item">

                                        <td className="product-remove">
                                            <a href
                                                className="remove" aria-label="Remove Grilled Eggplant Salad from cart"
                                                data-product_id="162" data-product_sku="">×</a>
                                        </td>

                                        <td className="product-thumbnail">
                                            <a
                                                href><img
                                                    width="300" height="225"
                                                    style={{ width: "48px" }}
                                                    src="https://preview.ait-themes.club/citadela/fooddelivery/wp-content/uploads/sites/17/2020/11/salad-eggplant-300x225.jpg"
                                                    className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                                                    alt="" decoding="async" loading="lazy"
                                                    srcset="https://preview.ait-themes.club/citadela/fooddelivery/wp-content/uploads/sites/17/2020/11/salad-eggplant-300x225.jpg 300w, https://preview.ait-themes.club/citadela/fooddelivery/wp-content/uploads/sites/17/2020/11/salad-eggplant-768x576.jpg 768w, https://preview.ait-themes.club/citadela/fooddelivery/wp-content/uploads/sites/17/2020/11/salad-eggplant-640x480.jpg 640w, https://preview.ait-themes.club/citadela/fooddelivery/wp-content/uploads/sites/17/2020/11/salad-eggplant-480x360.jpg 480w, https://preview.ait-themes.club/citadela/fooddelivery/wp-content/uploads/sites/17/2020/11/salad-eggplant-600x450.jpg 600w, https://preview.ait-themes.club/citadela/fooddelivery/wp-content/uploads/sites/17/2020/11/salad-eggplant-150x113.jpg 150w, https://preview.ait-themes.club/citadela/fooddelivery/wp-content/uploads/sites/17/2020/11/salad-eggplant.jpg 800w"
                                                    sizes="(max-width: 300px) 100vw, 300px"/></a>
                                        </td>

                                        <td className="product-name" data-title="Product">
                                            <a
                                                href>Grilled
                                                Eggplant Salad</a>
                                        </td>

                                        <td className="product-price" data-title="Price">
                                            <span className="woocommerce-Price-amount amount"><bdi><span
                                                        className="woocommerce-Price-currencySymbol">$</span>14.00</bdi></span>
                                        </td>

                                        <td className="product-quantity" data-title="Quantity">
                                            <div className="quantity">
                                                <label className="screen-reader-text" for="quantity_65f86f787cace">Grilled
                                                    Eggplant Salad quantity</label>
                                                <input type="number" id="quantity_65f86f787cace"
                                                    className="input-text qty text"
                                                    name="cart[82aa4b0af34c2313a562076992e50aa3][qty]" value="1"
                                                    aria-label="Product quantity" size="4" min="0" max="" step="1"
                                                    placeholder="" inputmode="numeric" autocomplete="off"/>
                                            </div>
                                        </td>

                                        <td className="product-subtotal" data-title="Subtotal">
                                            <span className="woocommerce-Price-amount amount"><bdi><span
                                                        className="woocommerce-Price-currencySymbol">$</span>14.00</bdi></span>
                                        </td>
                                    </tr>


                                    <tr>
                                        <td colspan="6" className="actions">

                                            <button type="submit" className="button" name="update_cart" value="Update cart"
                                                disabled="">Update cart</button>


                                            <input type="hidden" id="woocommerce-cart-nonce"
                                                name="woocommerce-cart-nonce" value="71f743cd13"/><input type="hidden"
                                                name="_wp_http_referer" value="/citadela/fooddelivery/cart/"/>
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
                                    <div className="woocommerce-additional-fields__field-wrapper">
                                        <p className="form-row notes" id="order_comments_field" data-priority="">
                                            <label for="order_comments" className="">Order notes&nbsp;<span className="optional">(optional)</span></label>
                                            <span className="woocommerce-input-wrapper">
                                                <textarea name="order_comments" className="input-text " id="order_comments" placeholder="Notes about your order, e.g. dietary restrictions." style={{resize: "none"}} rows="3" cols="5" spellcheck="false"></textarea>
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-2 cart_totals calculated_shipping">


                                <h2>Cart totals</h2>

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

                                <div className="wc-proceed-to-checkout">

                                    <a href
                                        className="checkout-button button alt wc-forward">
                                        Proceed to checkout</a>
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


export default Cart