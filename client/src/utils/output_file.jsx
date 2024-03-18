<div id="content" class="site-content">


    <div class="page-title standard">
        <header class="entry-header">
            <div class="entry-header-wrap">
                <h1 class="entry-title">Checkout</h1>
            </div>
        </header>
    </div>


    <div id="primary" class="content-area">
        <main id="main" class="site-main"><grammarly-extension data-grammarly-shadow-root="true"
                style={{position: 'absolute', top: '0px', left: '0px', pointerEvents: 'none'}}
                class="dnXmp"></grammarly-extension><grammarly-extension data-grammarly-shadow-root="true"
                style={{position: 'absolute', top: '0px', left: '0px', pointerEvents: 'none'}}
                class="dnXmp"></grammarly-extension>


            <article id="post-13" class="post-13 page type-page status-publish hentry">





                <div class="entry-content">
                    <div class="woocommerce">
                        <div class="woocommerce-notices-wrapper"></div>
                        <div class="woocommerce-form-coupon-toggle">

                            <div class="woocommerce-info">
                                Have a coupon? <a href="#" class="showcoupon">Click here to enter your code</a> </div>
                        </div>

                        <form class="checkout_coupon woocommerce-form-coupon" method="post" style={{display: 'none'}}>

                            <p>If you have a coupon code, please apply it below.</p>

                            <p class="form-row form-row-first">
                                <label for="coupon_code" class="screen-reader-text">Coupon:</label>
                                <input type="text" name="coupon_code" class="input-text" placeholder="Coupon code"
                                    id="coupon_code" value="">
                            </p>

                            <p class="form-row form-row-last">
                                <button type="submit" class="button" name="apply_coupon" value="Apply coupon">Apply
                                    coupon</button>
                            </p>

                            <div class="clear"></div>
                        </form>
                        <div class="woocommerce-notices-wrapper"></div>
                        <form name="checkout" method="post" class="checkout woocommerce-checkout"
                            action="https://preview.ait-themes.club/citadela/fooddelivery/checkout/"
                            enctype="multipart/form-data" novalidate="novalidate">



                            <div class="col2-set" id="customer_details">
                                <div class="col-1">
                                    <div class="woocommerce-billing-fields">

                                        <h3>Billing details</h3>



                                        <div class="woocommerce-billing-fields__field-wrapper">
                                            <p class="form-row form-row-first validate-required"
                                                id="billing_first_name_field" data-priority="10"><label
                                                    for="billing_first_name" class="">First name&nbsp;<abbr
                                                        class="required" title="required">*</abbr></label><span
                                                    class="woocommerce-input-wrapper"><input type="text"
                                                        class="input-text " name="billing_first_name"
                                                        id="billing_first_name" placeholder="" value="jjjjjjj"
                                                        autocomplete="given-name"></span></p>
                                            <p class="form-row form-row-last validate-required"
                                                id="billing_last_name_field" data-priority="20"><label
                                                    for="billing_last_name" class="">Last name&nbsp;<abbr
                                                        class="required" title="required">*</abbr></label><span
                                                    class="woocommerce-input-wrapper"><input type="text"
                                                        class="input-text " name="billing_last_name"
                                                        id="billing_last_name" placeholder="" value="hhh"
                                                        autocomplete="family-name"></span></p>
                                            <p class="form-row form-row-wide" id="billing_company_field"
                                                data-priority="30"><label for="billing_company" class="">Company
                                                    name&nbsp;<span class="optional">(optional)</span></label><span
                                                    class="woocommerce-input-wrapper"><input type="text"
                                                        class="input-text " name="billing_company" id="billing_company"
                                                        placeholder="" value="hhh" autocomplete="organization"></span>
                                            </p>
                                            <p class="form-row address-field validate-required form-row-wide"
                                                id="billing_address_1_field" data-priority="50"><label
                                                    for="billing_address_1" class="">Street address&nbsp;<abbr
                                                        class="required" title="required">*</abbr></label><span
                                                    class="woocommerce-input-wrapper"><input type="text"
                                                        class="input-text " name="billing_address_1"
                                                        id="billing_address_1"
                                                        placeholder="House number and street name" value="yh"
                                                        autocomplete="address-line1"
                                                        data-placeholder="House number and street name"></span></p>
                                            <p class="form-row address-field form-row-wide" id="billing_address_2_field"
                                                data-priority="60"><label for="billing_address_2"
                                                    class="screen-reader-text">Apartment, suite, unit, etc.&nbsp;<span
                                                        class="optional">(optional)</span></label><span
                                                    class="woocommerce-input-wrapper"><input type="text"
                                                        class="input-text " name="billing_address_2"
                                                        id="billing_address_2"
                                                        placeholder="Apartment, suite, unit, etc. (optional)" value=""
                                                        autocomplete="address-line2"
                                                        data-placeholder="Apartment, suite, unit, etc. (optional)"></span>
                                            </p>
                                            <p class="form-row address-field validate-required form-row-wide"
                                                id="billing_city_field" data-priority="70"
                                                data-o_class="form-row form-row-wide address-field validate-required">
                                                <label for="billing_city" class="">Town / City&nbsp;<abbr
                                                        class="required" title="required">*</abbr></label><span
                                                    class="woocommerce-input-wrapper"><input type="text"
                                                        class="input-text " name="billing_city" id="billing_city"
                                                        placeholder="" value="hkkh"
                                                        autocomplete="address-level2"></span></p>
                                            <p class="form-row address-field validate-required validate-postcode form-row-wide"
                                                id="billing_postcode_field" data-priority="90"
                                                data-o_class="form-row form-row-wide address-field validate-required validate-postcode">
                                                <label for="billing_postcode" class="">ZIP Code&nbsp;<abbr
                                                        class="required" title="required">*</abbr></label><span
                                                    class="woocommerce-input-wrapper"><input type="text"
                                                        class="input-text " name="billing_postcode"
                                                        id="billing_postcode" placeholder="" value="900001"
                                                        autocomplete="postal-code"></span></p>
                                            <p class="form-row form-row-wide validate-required validate-phone"
                                                id="billing_phone_field" data-priority="100"><label for="billing_phone"
                                                    class="">Phone&nbsp;<abbr class="required"
                                                        title="required">*</abbr></label><span
                                                    class="woocommerce-input-wrapper"><input type="tel"
                                                        class="input-text " name="billing_phone" id="billing_phone"
                                                        placeholder="" value="878675678" autocomplete="tel"></span></p>
                                            <p class="form-row form-row-wide validate-required validate-email"
                                                id="billing_email_field" data-priority="110"><label for="billing_email"
                                                    class="">Email address&nbsp;<abbr class="required"
                                                        title="required">*</abbr></label><span
                                                    class="woocommerce-input-wrapper"><input type="email"
                                                        class="input-text " name="billing_email" id="billing_email"
                                                        placeholder="" value="ihih@gmail.com"
                                                        autocomplete="email username"></span></p>
                                        </div>

                                    </div>

                                </div>

                                <div class="col-2">
                                    <div class="woocommerce-shipping-fields">
                                    </div>
                                    <div class="woocommerce-additional-fields">



                                        <h3>Additional information</h3>


                                        <div class="woocommerce-additional-fields__field-wrapper">
                                            <p class="form-row notes" id="order_comments_field" data-priority=""><label
                                                    for="order_comments" class="">Order notes&nbsp;<span
                                                        class="optional">(optional)</span></label><span
                                                    class="woocommerce-input-wrapper"><textarea name="order_comments"
                                                        class="input-text " id="order_comments"
                                                        placeholder="Notes about your order, e.g. special notes for delivery."
                                                        rows="2" cols="5" spellcheck="false"></textarea></span></p>
                                        </div>


                                    </div>
                                </div>
                            </div>




                            <h3 id="order_review_heading">Your order</h3>


                            <div id="order_review" class="woocommerce-checkout-review-order">
                                <table class="shop_table woocommerce-checkout-review-order-table">
                                    <thead>
                                        <tr>
                                            <th class="product-name">Product</th>
                                            <th class="product-total">Subtotal</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="cart_item">
                                            <td class="product-name">
                                                Fish &amp; Chips&nbsp; <strong
                                                    class="product-quantity">×&nbsp;3</strong> </td>
                                            <td class="product-total">
                                                <span class="woocommerce-Price-amount amount"><bdi><span
                                                            class="woocommerce-Price-currencySymbol">$</span>39.00</bdi></span>
                                            </td>
                                        </tr>
                                        <tr class="cart_item">
                                            <td class="product-name">
                                                Crab Bisque&nbsp; <strong class="product-quantity">×&nbsp;1</strong>
                                            </td>
                                            <td class="product-total">
                                                <span class="woocommerce-Price-amount amount"><bdi><span
                                                            class="woocommerce-Price-currencySymbol">$</span>8.00</bdi></span>
                                            </td>
                                        </tr>
                                        <tr class="cart_item">
                                            <td class="product-name">
                                                Doughnuts&nbsp; <strong class="product-quantity">×&nbsp;1</strong>
                                                <dl class="variation">
                                                    <dt class="variation-Flavor">Flavor:</dt>
                                                    <dd class="variation-Flavor">
                                                        <p>Vanilla</p>
                                                    </dd>
                                                </dl>
                                            </td>
                                            <td class="product-total">
                                                <span class="woocommerce-Price-amount amount"><bdi><span
                                                            class="woocommerce-Price-currencySymbol">$</span>3.00</bdi></span>
                                            </td>
                                        </tr>
                                        <tr class="cart_item">
                                            <td class="product-name">
                                                Grilled Eggplant Salad&nbsp; <strong
                                                    class="product-quantity">×&nbsp;1</strong> </td>
                                            <td class="product-total">
                                                <span class="woocommerce-Price-amount amount"><bdi><span
                                                            class="woocommerce-Price-currencySymbol">$</span>14.00</bdi></span>
                                            </td>
                                        </tr>
                                    </tbody>
                                    <tfoot>

                                        <tr class="cart-subtotal">
                                            <th>Subtotal</th>
                                            <td><span class="woocommerce-Price-amount amount"><bdi><span
                                                            class="woocommerce-Price-currencySymbol">$</span>64.00</bdi></span>
                                            </td>
                                        </tr>






                                        <tr class="order-total">
                                            <th>Total</th>
                                            <td><strong><span class="woocommerce-Price-amount amount"><bdi><span
                                                                class="woocommerce-Price-currencySymbol">$</span>64.00</bdi></span></strong>
                                            </td>
                                        </tr>


                                    </tfoot>
                                </table>

                                <div id="payment" class="woocommerce-checkout-payment">
                                    <ul class="wc_payment_methods payment_methods methods">
                                        <li>
                                            <div class="woocommerce-info">
                                                Sorry, it seems that there are no available payment methods for your
                                                state. Please contact us if you require assistance or wish to make
                                                alternate arrangements. </div>
                                        </li>
                                    </ul>
                                    <div class="form-row place-order">
                                        <noscript>
                                            Since your browser does not support JavaScript, or it is disabled, please
                                            ensure you click the <em>Update Totals</em> button before placing your
                                            order. You may be charged more than the amount stated above if you fail to
                                            do so. <br /><button type="submit" class="button alt"
                                                name="woocommerce_checkout_update_totals" value="Update totals">Update
                                                totals</button>
                                        </noscript>

                                        <div class="woocommerce-terms-and-conditions-wrapper">
                                            <div class="woocommerce-privacy-policy-text"></div>
                                        </div>


                                        <button type="submit" class="button alt" name="woocommerce_checkout_place_order"
                                            id="place_order" value="Place order" data-value="Place order">Place
                                            order</button>

                                        <input type="hidden" id="woocommerce-process-checkout-nonce"
                                            name="woocommerce-process-checkout-nonce" value="fe8fec0c75"><input
                                            type="hidden" name="_wp_http_referer"
                                            value="/citadela/fooddelivery/?wc-ajax=update_order_review">
                                    </div>
                                </div>

                            </div>


                        </form>

                    </div>
                </div><!-- .entry-content -->

            </article>

        </main>
    </div>

</div>