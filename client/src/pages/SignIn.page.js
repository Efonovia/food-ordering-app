import React from 'react';

function SignIn() {


    return <div id="content" class="site-content">


    <div style={{ display: "block" }} class="page-title standard">
        <header class="entry-header">
            <div class="entry-header-wrap">
                <h1 class="entry-title">Sign In to Ridwan's App</h1>
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
                        <div class="woocommerce-notices-wrapper"></div>
                        <form name="checkout" class="checkout woocommerce-checkout" novalidate="novalidate">
                            <div id="customer_details">
                                <div class="col-1">
                                    <div class="woocommerce-billing-fields">

                                        <h3>Enter your login details</h3>



                                        <div class="woocommerce-billing-fields__field-wrapper">
                                            
                                            <p style={{ border: "1px solid #2222221a", marginBottom: "50px" }} class="form-row form-row-wide validate-required validate-email"
                                                id="billing_email_field" data-priority="110"><label for="billing_email"
                                                    class="">Email address&nbsp;<abbr class="required"
                                                        title="required">*</abbr></label><span
                                                    class="woocommerce-input-wrapper"><input style={{border: "none"}} type="email"
                                                        class="input-text " name="billing_email" id="billing_email"
                                                    /></span></p>
                                            <p style={{ border: "1px solid #2222221a", marginBottom: "50px" }} class="form-row form-row-wide validate-required validate-email"
                                                id="billing_email_field" data-priority="110"><label for="billing_email"
                                                    class="">Password&nbsp;<abbr class="required"
                                                        title="required">*</abbr></label><span
                                                    class="woocommerce-input-wrapper"><input style={{border: "none"}} type="password"
                                                        class="input-text " name="billing_email" id="billing_email"
                                                     /></span></p>
                                            <a 
                                                className="wp-block-button__link wp-element-button" 
                                                style={{width: "100%", borderRadius: "5px", background: '#fb246a' }} 
                                                href 
                                            >Sign In</a>
                                        </div>

                                    </div>

                                </div>
                            </div>

                        </form>

                    </div>
                </div>

            </article>

        </main>
    </div>

</div>
}


export default SignIn