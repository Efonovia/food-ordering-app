import React from 'react';

function SignIn() {


    return <div id="content" className="site-content">


    <div style={{ display: "block" }} className="page-title standard">
        <header className="entry-header">
            <div className="entry-header-wrap">
                <h1 className="entry-title">Sign In to Ridwan's App</h1>
            </div>
        </header>
    </div>


    <div id="primary" className="content-area">
        <main id="main" className="site-main"><grammarly-extension data-grammarly-shadow-root="true"
                style={{position: 'absolute', top: '0px', left: '0px', pointerEvents: 'none'}}
                className="dnXmp"></grammarly-extension><grammarly-extension data-grammarly-shadow-root="true"
                style={{position: 'absolute', top: '0px', left: '0px', pointerEvents: 'none'}}
                className="dnXmp"></grammarly-extension>


            <article id="post-13" className="post-13 page type-page status-publish hentry">
                <div className="entry-content">
                    <div className="woocommerce">
                        <div className="woocommerce-notices-wrapper"></div>
                        <div className="woocommerce-notices-wrapper"></div>
                        <form name="checkout" className="checkout woocommerce-checkout" novalidate="novalidate">
                            <div id="customer_details">
                                <div className="col-1">
                                    <div className="woocommerce-billing-fields">

                                        <h3>Enter your login details</h3>



                                        <div className="woocommerce-billing-fields__field-wrapper">
                                            
                                            <p style={{ border: "1px solid #2222221a", marginBottom: "50px" }} className="form-row form-row-wide validate-required validate-email"
                                                id="billing_email_field" data-priority="110"><label for="billing_email"
                                                    className="">Email address&nbsp;<abbr className="required"
                                                        title="required">*</abbr></label><span
                                                    className="woocommerce-input-wrapper"><input style={{border: "none"}} type="email"
                                                        className="input-text " name="billing_email" id="billing_email"
                                                    /></span></p>
                                            <p style={{ border: "1px solid #2222221a", marginBottom: "30px" }} className="form-row form-row-wide validate-required validate-email"
                                                id="billing_email_field" data-priority="110"><label for="billing_email"
                                                    className="">Password&nbsp;<abbr className="required"
                                                        title="required">*</abbr></label><span
                                                    className="woocommerce-input-wrapper"><input style={{border: "none"}} type="password"
                                                        className="input-text " name="billing_email" id="billing_email"
                                                     /></span></p>
                                            <p>
                                                <input style={{cursor: "pointer"}} name='isAdmin' type='checkbox'/>&nbsp;&nbsp;&nbsp;&nbsp;
                                                <label for="isAdmin">Are you a registered restaurant?</label>
                                            </p>
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