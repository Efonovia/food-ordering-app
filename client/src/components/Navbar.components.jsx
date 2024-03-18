import React from 'react';


function Navbar() {
    const defaultClassName = "home page-template-default page page-id-21 wp-custom-logo theme-citadela woocommerce-js classic-theme-layout classic-header-layout default-theme-design page-fullwidth no-page-title no-header-space citadela-events-css pro-plugin-active sticky-header-enabled sticky-header-desktop-full sticky-header-mobile-full footer-collapsible-widgets-enabled custom-header custom-header-over-content custom-header-transparent-bg wide-content-width header-with-cart header-scrolled"
    const mobileDefault = "home page-template-default page page-id-21 wp-custom-logo theme-citadela woocommerce-js classic-theme-layout classic-header-layout default-theme-design page-fullwidth no-page-title no-header-space citadela-events-css pro-plugin-active sticky-header-enabled sticky-header-desktop-full sticky-header-mobile-full footer-collapsible-widgets-enabled custom-header custom-header-over-content custom-header-transparent-bg wide-content-width header-with-cart header-scrolled mobile-screen-width responsive-menu footer-collapsible-widgets"
    const mobileMenuOpened = "home page-template-default page page-id-21 wp-custom-logo theme-citadela woocommerce-js classic-theme-layout classic-header-layout default-theme-design page-fullwidth no-page-title no-header-space citadela-events-css pro-plugin-active sticky-header-enabled sticky-header-desktop-full sticky-header-mobile-full footer-collapsible-widgets-enabled custom-header custom-header-over-content custom-header-transparent-bg wide-content-width header-with-cart header-scrolled mobile-screen-width responsive-menu footer-collapsible-widgets menu-opened"
    const mobileCartOpened = "home page-template-default page page-id-21 wp-custom-logo theme-citadela woocommerce-js classic-theme-layout classic-header-layout default-theme-design page-fullwidth no-page-title no-header-space citadela-events-css pro-plugin-active sticky-header-enabled sticky-header-desktop-full sticky-header-mobile-full footer-collapsible-widgets-enabled custom-header custom-header-over-content custom-header-transparent-bg wide-content-width header-with-cart header-scrolled mobile-screen-width responsive-menu footer-collapsible-widgets cart-opened"

    const isLoggedIn = false
    const mobileWidthLimit = 880
    const [isMobile, setIsMobile] = React.useState(window.innerWidth < mobileWidthLimit)
    const [showMenu, setShowMenu] = React.useState(false)
    const [currentBodyClassName, setCurrentBodyClassName] = React.useState(mobileDefault)

    function openMenu(bool) {
        setShowMenu(bool)
        setCurrentBodyClassName(bool ? mobileMenuOpened : mobileDefault)
    }

    React.useEffect(() => {
        const updateIsMobile = () => {
            setIsMobile(window.innerWidth < mobileWidthLimit);
        };

        window.addEventListener('resize', updateIsMobile);

        return () => window.removeEventListener('resize', updateIsMobile);
    }, [])

    React.useEffect(() => {
        document.body.className = isMobile ? currentBodyClassName : defaultClassName
    }, [isMobile, currentBodyClassName])
    
    return <div className="sticky-header-wrapper">

    <header id="masthead" className="site-header logo-align-left-mobile is-sticky" data-offset="120">
        <div className="grid-main">

            {!showMenu && <div className="site-branding hide-tagline-mobile" style={{maxWidth:"400px"}}>
                <div className="logo-wrapper" style={{maxWidth: "150px"}}
                    data-mobile-max-width="{&quot;desktop&quot;:&quot;150px&quot;,&quot;mobile&quot;:&quot;50px&quot;}">
                    <a href className="custom-logo-link" rel="home" aria-current="page"><img width="66"
                            height="40" src="wp-content/uploads/sites/17/2020/11/logo.png" className="custom-logo"
                            alt="Citadela" decoding="async"/></a>
                </div>

                <div className="text-logo">

                    <p className="site-title"
                        data-mobile-font-size="{&quot;desktop&quot;:&quot;&quot;,&quot;mobile&quot;:&quot;1.4em&quot;}"
                       ><a href rel="home">Citadela</a></p>
                </div>
            </div>}


            <nav id="site-navigation" className="main-navigation" data-availablespace="748" data-burgerspace="55">
                <div className="citadela-menu-container citadela-menu-main-menu">
                    <span onClick={() => openMenu(false)} className="responsive-close-button"></span>
                    <ul id="main-menu" className="citadela-menu" data-liwidth="642">
                        {!isMobile && <><li id="menu-item-25"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-21 current_page_item current-menu-ancestor current-menu-parent current_page_parent current_page_ancestor menu-item-has-children menu-item-25 menu-item-position-0 top-level-menu-item"
                            data-width="99"><a href aria-current="page">Home</a>
                            </li>
                            <li id="menu-item-366"
                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-366 menu-item-position-1 top-level-menu-item"
                                data-width="91"><a href>Browse</a>
                            </li>
                            <li id="menu-item-146"
                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-146 menu-item-position-2 top-level-menu-item"
                                data-width="99"><a href>Restaurants</a>
                            </li>
                            {isLoggedIn && <li id="menu-item-343"
                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-343 menu-item-position-3 top-level-menu-item"
                                data-width="82"><a href>Order History</a>
                            </li>}
                            {!isLoggedIn && <><li id="menu-item-343"
                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-343 menu-item-position-3 top-level-menu-item"
                                data-width="82"><a style={{color: "red"}} href>Sign Up</a>
                            </li>
                            <li id="menu-item-343"
                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-343 menu-item-position-3 top-level-menu-item"
                                data-width="82"><a style={{color: "red"}} href>Sign In</a>
                            </li></>}
                            {isLoggedIn && <li id="menu-item-343"
                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-343 menu-item-position-3 top-level-menu-item"
                                data-width="82"><a style={{color: "red"}} href>Log Out</a>
                            </li>}
                        </>}
                        {isMobile && <li className="menu-item-wrapper menu-item-has-children sub-menu-right-position top-level-menu-item">
                            {!showMenu && <a onClick={() => openMenu(true)} href><i className="fa fa-bars"></i></a>}
                            {showMenu && <ul className="sub-menu">
                                {!isLoggedIn && <><li id="menu-item-343"
                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-343 menu-item-position-3 menu-item-cloned"
                                    data-width="82"><a href>Sign Up</a></li>
                                <li id="menu-item-343"
                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-343 menu-item-position-3 menu-item-cloned"
                                    data-width="82"><a href>Log In</a></li></>}
                                <li id="menu-item-25"
                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-21 current_page_item current-menu-ancestor current-menu-parent current_page_parent current_page_ancestor menu-item-has-children menu-item-25 menu-item-position-0 menu-item-cloned"
                                    data-width="99"><a href
                                        aria-current="page">Home</a>
                                </li>
                                <li id="menu-item-366"
                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-366 menu-item-position-1 menu-item-cloned"
                                    data-width="91"><a href>Browse</a>
                                </li>
                                <li id="menu-item-146"
                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-146 menu-item-position-2 menu-item-cloned"
                                    data-width="99"><a href>Restaurants</a>
                                </li>
                                {isLoggedIn && <li id="menu-item-343"
                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-343 menu-item-position-3 menu-item-cloned"
                                    data-width="82"><a href>Order History</a></li>}
                                {isLoggedIn && <li id="menu-item-343"
                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-343 menu-item-position-3 menu-item-cloned"
                                    data-width="82"><a href>Log Out</a></li>}
                            </ul>}
                        </li>}
                    </ul>
                </div>

                <div className="citadela-woocommerce-minicart is-empty" style={{display: "inline-block", fontSize: "initial"}}>
                    <div className="inner-wrapper">
                        <div className="cart-header">
                            <div className="cart-icon"><i className="fas fa-shopping-basket"></i></div>
                            <div className="cart-count"><span>0</span></div>
                        </div>
                        <div className="cart-content">
                            <div className="widget woocommerce widget_shopping_cart">
                                <div className="widget_shopping_cart_content"></div>
                            </div>
                        </div>

                    </div>
                </div>


            </nav>


        </div>
    </header>


</div>
}


export default Navbar