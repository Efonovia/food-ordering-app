import React from 'react';
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { checkFormFields } from '../utils/utils';
import { httpLoginUser } from '../hooks/users.hooks';
import { setUser } from '../state';
import { CircularProgress } from '@mui/material';
import { httpLoginRestaurant } from '../hooks/restaurants.hooks';


function SignIn() {

    
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [loading, setLoading] = React.useState(false)
    const [formDetails, setFormDetails] = React.useState({
        email: "",
        password: "",
        isRestaurant: false
    })

    function handleChange(event) {
        const { value, name, checked } = event.target;

        setFormDetails(prevFormDetails => ({
            ...prevFormDetails,
            [name]: name === "isRestaurant" ? checked : value,
        }));
        console.log(formDetails)
    }

    async function submitForm() {
        try {
            console.log(formDetails)

            const emptyFields = checkFormFields({email: formDetails.email, password: formDetails.password});
            if (emptyFields.length > 0) {
                const emptyFieldNames = emptyFields.join(', ');
                alert(`Please fill in the following fields: ${emptyFieldNames}`);
                return
            }

            setLoading(true)
            const response = formDetails.isRestaurant ? await httpLoginRestaurant(formDetails) : await httpLoginUser(formDetails)
            console.log(response)
            if(response.ok) {
                dispatch(setUser({ user: { cart: !formDetails.isRestaurant && [], type: formDetails.isRestaurant ? "admin" : "student", ...response.body } }))
                navigate(formDetails.isRestaurant ? "/admin/allorders" : "/")
            }

            console.log(response)
        } catch (error) {
            setLoading(false)
            console.error('Failed to login:', error);
        } finally {
            setLoading(false)
        }
    }

    return loading ? <div style={{position: "absolute", marginTop: "300px", marginLeft: "20vw", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
        <h1 style={{textAlign: "center"}}>Signing you in. Hold on...</h1>
        <br></br>
        <CircularProgress sx={{color: "red"}} size={100} />
    </div>:
    <div id="content" className="site-content">


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
                        <form name="checkout" className="checkout woocommerce-checkout" noValidate="novalidate">
                            <div id="customer_details">
                                <div className="col-1">
                                    <div className="woocommerce-billing-fields">

                                        <h3>Enter your login details</h3>



                                        <div className="woocommerce-billing-fields__field-wrapper">
                                            
                                            <p style={{ border: "1px solid #2222221a", marginBottom: "50px" }} className="form-row form-row-wide validate-required validate-email"
                                                id="billing_email_field" data-priority="110"><label htmlFor="billing_email"
                                                    className="">Email address&nbsp;<abbr className="required"
                                                        title="required">*</abbr></label><span
                                                    className="woocommerce-input-wrapper"><input style={{border: "none"}} type="email"
                                                        className="input-text " name="email" value={formDetails.email} onChange={handleChange} id="billing_email"
                                                    /></span></p>
                                            <p style={{ border: "1px solid #2222221a", marginBottom: "30px" }} className="form-row form-row-wide validate-required validate-email"
                                                id="billing_email_field" data-priority="110"><label htmlFor="billing_email"
                                                    className="">Password&nbsp;<abbr className="required"
                                                        title="required">*</abbr></label><span
                                                    className="woocommerce-input-wrapper"><input style={{border: "none"}} type="password"
                                                        className="input-text " name="password" value={formDetails.password} onChange={handleChange} id="billing_password"
                                                     /></span></p>
                                            <p>
                                                <input style={{cursor: "pointer"}} name='isRestaurant' type='checkbox' checked={formDetails.isRestaurant} onChange={handleChange}/>&nbsp;&nbsp;&nbsp;&nbsp;
                                                <label htmlFor="isRestaurant">Are you a registered restaurant?</label>
                                            </p>
                                            <a onClick={submitForm}
                                                className="wp-block-button__link wp-element-button" 
                                                style={{width: "100%", borderRadius: "5px", background: '#fb246a' }} 
                                                href>Sign In</a>
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