import React from 'react';
import Searchbar from '../widgets/SearchBar.widgets';
import allNutritionalContents from '../data/all_nutritional_contents';
import CheckboxesTags from '../widgets/CategoriesInput.widgets';
import RangeSlider from '../widgets/Slider.widgets';
import Pagination from '@mui/material/Pagination';
import { useSearchParams, useNavigate, useLocation } from 'react-router-dom'
import Stack from '@mui/material/Stack';
import { removePageFromSearchQueries } from '../utils/utils';
import { httpGetAllMenuItems, httpSearchAndFilterMenuItems } from '../hooks/menuItems.hooks';
import { CircularProgress } from '@mui/material';
import MenuCard from '../components/MenuCard.components';


function Browse() {
    const [searchParams] = useSearchParams()
    const location = useLocation()
    const { query, page, nutritionalContent, minPrice, maxPrice } = Object.fromEntries(searchParams)
    const [loading, setLoading] = React.useState(true)
    const [searchQuery, setSearchQuery] = React.useState(query || undefined)
    const [priceValue, setPriceValue] = React.useState({min: minPrice || 1000, max: maxPrice || 9000});
    const [searchNutritionalContent, setSearchNutritionalContent] = React.useState(nutritionalContent?.split(",") || [])
    // console.log(searchNutritionalContent, priceValue.min, priceValue.max, searchQuery)
    // console.log("locationsearch", location.search)
    const [menuItems, setMenuItems] = React.useState([])
    const navigate = useNavigate()


    const handleSliderChange = (event, newValue) => {
        setPriceValue({min: newValue[0], max: newValue[1]});
    };
    
    const handleInputChange = (event) => {
        console.log(event.target.name, event.target.value)
        if(event.target.name === "first") {
            setPriceValue(prev =>  {
                return {...prev, min: event.target.value === '' ? 0 : Number(event.target.value)}
            })
        }
        if(event.target.name === "second") {
            setPriceValue(prev =>  {
                return {...prev, max: event.target.value === '' ? 0 : Number(event.target.value)}
            })
        }
    };

    const handlePageChange = (event, value) => {
        const locationSearch = removePageFromSearchQueries(location.search)
        navigate(`/browse?${locationSearch}${locationSearch ? "&": ""}page=${value}`)
        setLoading(true)
    };

    function onSearchQueryChange(event) {
        setSearchQuery(event.target.value)
        console.log(event.target.value)
    }

    function onSearchNutritionalContentChange(value) {
        if(value.length < 5) {
            setSearchNutritionalContent(value)
        }
        console.log(searchNutritionalContent)
    }

    function executeSearch() {
        if(!searchQuery) {
            return
        }
        navigate(`/browse?query=${searchQuery}&page=1`)
        setLoading(true)
    }

    async function executeFilter() {
        if(!searchQuery && !searchNutritionalContent.length && !priceValue.min && !priceValue.max) {
            return
        }
        let urlQueries = []
        if(searchQuery) {
            urlQueries.push(`query=${searchQuery}`)
        }
        if(searchNutritionalContent) {
            urlQueries.push(`nutritionalContent=${searchNutritionalContent.join(",")}`)
        }
        if(priceValue.min) {
            urlQueries.push(`minPrice=${priceValue.min}`)
        }
        if(priceValue.max) {
            urlQueries.push(`maxPrice=${priceValue.max}`)
        }

        urlQueries.push("page=1")
        navigate(`/browse?${urlQueries.join("&")}`)
        setLoading(true)
    }

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                // console.log("rtey", Boolean(query||nutritionalContent||minPrice||maxPrice)&&Boolean(page), page)
                const results = Boolean(location.search) ? await httpSearchAndFilterMenuItems(location.search) : await httpGetAllMenuItems(page || 1);
                setMenuItems(results?.body);
                // console.log(results)
            } catch (error) {
                console.error('Error fetching featured menu items:', error);
            } finally {
                setLoading(false)
            }
        };

        fetchData();
        
    }, [page, location.search])

    const menuItemsHTML = menuItems?.data?.map(menuItem => <MenuCard key={menuItem._id} {...menuItem}/>)

    return loading ? <CircularProgress sx={{marginTop: "300px", marginLeft: "700px", color: "#ea2251"}} size={100}/> : <>
            <div className="wp-block-citadela-blocks-spacer citadela-block-spacer">
                <div className="inner-holder" style={{paddingTop: '10px'}}></div>
            </div>
            <Searchbar value={searchQuery} onChange={onSearchQueryChange} executeSearch={executeSearch}/>
            <div id="content" className="site-content">
                <div id="primary" className="content-area">
                    <article id="post-21" className="post-21 page type-page status-publish hentry">
                        <div className="entry-content">
                            <div className="wp-block-citadela-blocks-custom-container citadela-block-custom-container responsive-options size-wide bg-type-image inside-space-none bg-size-auto has-overlay has-min-height vertical-align-top" style={{minHeight: '620px'}} data-block-attr="{&quot;size&quot;:&quot;bg-size-full-horizontal&quot;,&quot;position&quot;:&quot;100% 88%&quot;}" data-block-mobile-breakpoint="900">
                                <div className="bg-image-wrapper" style={{backgroundImage: 'url(https://preview.ait-themes.club/citadela/fooddelivery/wp-content/uploads/sites/17/2020/11/blob-bowl-bg.png)', backgroundRepeat: 'no-repeat', backgroundPosition: '46% 95%'}}>
                                </div>
                                <div className="bg-image-overlay" style={{opacity: '0.5'}}></div>
                                <div className="inner-holder">
                                    <div style={{gap: "5%"}} className="wp-block-columns is-layout-flex wp-container-9 wp-block-columns-is-layout-flex">
                                        <div className="wp-block-column is-layout-flow wp-block-column-is-layout-flow" style={{flexBasis: '18%', background: "white", padding: "0 5px"}}>
                                            <div className="citadela-block-responsive-text align-left no-margins">
                                                <h2 className="inner-tag" style={{fontSize: '20px', textAlign: "center"}}>Filter by your preferences</h2>
                                            </div>



                                            <div className="wp-block-citadela-blocks-spacer citadela-block-spacer">
                                                <div className="inner-holder" style={{paddingTop: '30px'}}></div>
                                            </div>


                                            <div className="citadela-block-responsive-text align-left">
                                                <h6 className="inner-tag" style={{fontSize: '14px', letterSpacing: '0.1em'}}>NUTRITIONAL CONTENTS</h6>
                                            </div>



                                            <div className="wp-block-citadela-blocks-spacer citadela-block-spacer">
                                                <div className="inner-holder" style={{paddingTop: '8px'}}></div>
                                            </div>


                                            <CheckboxesTags
                                                placeholder="Nutritional Contents"
                                                label="Nutritional Contents"
                                                value={searchNutritionalContent}
                                                onNutritionalContentChange={onSearchNutritionalContentChange}
                                                options={allNutritionalContents} 
                                                width={"100%"} 
                                            />


                                            <div className="wp-block-citadela-blocks-spacer citadela-block-spacer">
                                                <div className="inner-holder" style={{paddingTop: '15px'}}></div>
                                            </div>


                                            <div className="citadela-block-responsive-text align-left">
                                                <h6 className="inner-tag" style={{fontSize: '14px', letterSpacing: '0.1em'}}>PRICE RANGE</h6>
                                            </div>

                                            <RangeSlider
                                                value={priceValue}
                                                handleSliderChange={handleSliderChange}
                                                handleInputChange={handleInputChange}
                                            />

                                            <div className="wp-block-citadela-blocks-spacer citadela-block-spacer">
                                                <div className="inner-holder" style={{paddingTop: '20px'}}></div>
                                            </div>
                                            <a 
                                                className="wp-block-button__link wp-element-button" 
                                                onClick={executeFilter} 
                                                style={{width: "100%", borderRadius: "5px", background: Boolean(searchQuery||searchNutritionalContent.length||priceValue.min||priceValue.max) ? '#ea2251' : "grey"}} 
                                                href 
                                            >FILTER</a>

                                        </div>

                                        <div className="wp-block-column is-layout-flow wp-block-column-is-layout-flow">
                                            <div className="wp-block-citadela-blocks-custom-container citadela-block-custom-container size-wide bg-type-color inside-space-zero has-bg has-shadow"
                                                style={{backgroundColor: 'rgba(255, 255, 255, 1)', boxShadow: '0px 0px 0px 20px rgba(255, 255, 255, 1)'}}>
                                                <div className="inner-holder">
                                                    <div data-block-name="woocommerce/all-products" data-columns="3" data-rows="3"
                                                        data-align-buttons="false" data-content-visibility="{&quot;orderBy&quot;:true}"
                                                        data-orderby="date"
                                                        data-layout-config="[[&quot;woocommerce\/product-image&quot;],[&quot;woocommerce\/product-title&quot;],[&quot;woocommerce\/product-price&quot;],[&quot;woocommerce\/product-rating&quot;],[&quot;woocommerce\/product-button&quot;]]"
                                                        className="wp-block-woocommerce-all-products alignwide wc-block-all-products"
                                                        data-attributes="{&quot;align&quot;:&quot;wide&quot;,&quot;alignButtons&quot;:false,&quot;columns&quot;:3,&quot;contentVisibility&quot;:{&quot;orderBy&quot;:true},&quot;isPreview&quot;:false,&quot;layoutConfig&quot;:[[&quot;woocommerce/product-image&quot;],[&quot;woocommerce/product-title&quot;],[&quot;woocommerce/product-price&quot;],[&quot;woocommerce/product-rating&quot;],[&quot;woocommerce/product-button&quot;]],&quot;orderby&quot;:&quot;date&quot;,&quot;rows&quot;:3}">
                                                        <div className="wc-block-components-notices"></div>
                                                        <div className="wc-block-components-notices__snackbar wc-block-components-notice-snackbar-list"
                                                            tabIndex="-1">
                                                            <div></div>
                                                        </div>
                                                        <div className="with-scroll-to-top__scroll-point" aria-hidden="true"></div>
                                                        <div className="wc-block-grid alignwide has-3-columns has-multiple-rows">
                                                            
                                                            {Boolean(menuItems?.data?.length) ? 
                                                            <ul className="wc-block-grid__products">{menuItemsHTML}</ul> :
                                                            <h1>Sorry, no results matched your criteria</h1>
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {<Stack marginLeft={60} marginBottom={1} spacing={2}>
                                <Pagination 
                                    sx={{ 
                                    '& .MuiPaginationItem-root': { color: 'black' },
                                    '& .MuiPaginationItem-page.Mui-selected': { backgroundColor: '#ea2251', color: 'white' }
                                    }} 
                                    size='large' 
                                    variant='outlined' 
                                    shape='rounded' 
                                    count={Math.ceil(menuItems?.totalResults/10)} 
                                    page={page ? Number(page) : 1} 
                                    onChange={handlePageChange} 
                                />
                            </Stack>}
                        </div>
                    </article>
                </div>
            </div>
        </>
}


export default Browse