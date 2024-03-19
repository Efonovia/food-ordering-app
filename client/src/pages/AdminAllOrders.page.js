import React from 'react';
import { getStatusColor, centerStyle } from '../utils/utils';


function AdminAllOrders() {


    return <div id="content" className="site-content">


    <div style={{ display: "block" }} className="page-title standard">
        <header className="entry-header">
            <div className="entry-header-wrap">
                <h1 className="entry-title">All Orders</h1>
            </div>
        </header>
    </div>


    <div id="primary" className="content-area">
        <main id="main" className="site-main">


            <article id="post-13" className="post-13 page type-page status-publish hentry">
                <div className="entry-content">
                    <div className="woocommerce">
                        <div className="woocommerce-notices-wrapper"></div>
                        <div className="woocommerce-form-coupon-toggle">

                        </div>

                        <div className="woocommerce-notices-wrapper"></div>

                        <div id="order_review" className="woocommerce-checkout-review-order">
                            <table className="shop_table woocommerce-checkout-review-order-table">
                                <thead>
                                    <tr>
                                        <th className="product-name">Customer</th>
                                        <th className="product-total">Date/Time</th>
                                        <th className="product-total">Elapses In</th>
                                        <th className="product-total">Status</th>
                                        <th className="product-total">View</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="cart_item">
                                        <td className="product-name">
                                            Fish &amp; Chips&nbsp; <strong className="product-quantity">×&nbsp;3</strong>
                                        </td>
                                        <td className="product-total">
                                            <span className="woocommerce-Price-amount amount"><bdi><span
                                                        className="woocommerce-Price-currencySymbol">$</span>39.00</bdi></span>
                                        </td>
                                        <td className="product-name">5 min</td>
                                        <td><span style={{ ...getStatusColor("active"), ...centerStyle, fontSize: "15px", borderRadius: "25px", padding: "5px 0px"}}>{"active"}</span></td>
                                        <td><span style={{ ...getStatusColor("cancelled"), ...centerStyle, fontSize: "15px", borderRadius: "25px", padding: "5px 0px"}}>view</span></td>

                                    </tr>
                                    <tr className="cart_item">
                                        <td className="product-name">
                                            Crab Bisque&nbsp; <strong className="product-quantity">×&nbsp;1</strong> </td>
                                        <td className="product-total">
                                            <span className="woocommerce-Price-amount amount"><bdi><span
                                                        className="woocommerce-Price-currencySymbol">$</span>8.00</bdi></span>
                                        </td>
                                        <td className="product-name">5 min</td>
                                        <td><span style={{ ...getStatusColor("active"), ...centerStyle, fontSize: "15px", borderRadius: "25px", padding: "5px 0px"}}>{"active"}</span></td>
                                        <td><span style={{ ...getStatusColor("cancelled"), ...centerStyle, fontSize: "15px", borderRadius: "25px", padding: "5px 0px", cursor: "pointer"}}>view</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>



                    </div>
                </div>

            </article>

        </main>
    </div>

</div>
}


export default AdminAllOrders