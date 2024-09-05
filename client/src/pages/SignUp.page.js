import React from 'react';
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { checkFormFields } from '../utils/utils';
import { httpSignUpUser } from '../hooks/users.hooks';
import { setUser } from '../state';
import { CircularProgress } from '@mui/material';


function SignUp() {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [loading, setLoading] = React.useState(false)
    const [formDetails, setFormDetails] = React.useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        phoneNumber: "",
    })

    function handleChange(event) {
        const { value, name } = event.target;

        setFormDetails(prevFormDetails => ({
            ...prevFormDetails,
            [name]: value,
        }));
        console.log(formDetails)
    }

    async function submitForm() {
        try {
            console.log(formDetails)

            const emptyFields = checkFormFields(formDetails);
            if (emptyFields.length > 0) {
                const emptyFieldNames = emptyFields.join(', ');
                alert(`Please fill in the following fields: ${emptyFieldNames}`);
                return
            }

            setLoading(true)
            const response = await httpSignUpUser(formDetails)
            if(response.exists) {
                alert("Student already exists. try logging in instead")
                navigate("/auth/login")
            } else if(!response?.exists) {
                dispatch(setUser({ user: { type: "student", cart: [],  ...response?.body } }))
                navigate("/")
            }

            console.log(response)
        } catch (error) {
            setLoading(false)
            console.error('Failed to register:', error);
        } finally {
            setLoading(false)
        }
    }

    return loading ? <div style={{position: "absolute", marginTop: "300px", marginLeft: "20vw", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
        <h1 style={{textAlign: "center"}}>Creating your account and signing you in. Hold on...</h1>
        <br></br>
        <CircularProgress sx={{color: "red"}} size={100} />
    </div>:
    <div id="content" className="site-content">


    <div style={{ display: "block" }} className="page-title standard">
        <header className="entry-header">
            <div className="entry-header-wrap">
                <h1 className="entry-title">SignUp for NUTRIEASE</h1>
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

                                        <h3>Tell us about yourself</h3>



                                        <div className="woocommerce-billing-fields__field-wrapper">
                                            <p style={{ border: "1px solid #2222221a" }} className="form-row form-row-first validate-required"
                                                id="billing_first_name_field" data-priority="10"><label
                                                    htmlFor="billing_first_name" className="">First name&nbsp;<abbr
                                                        className="required" title="required">*</abbr></label><span
                                                    className="woocommerce-input-wrapper"><input style={{ border: "none" }} type="text"
                                                        className="input-text " name="firstName" value={formDetails.firstName} onChange={handleChange}
                                                        id="billing_first_name"
                                                        autoComplete="given-name"/></span></p>
                                            <p style={{ border: "1px solid #2222221a" }} className="form-row form-row-last validate-required"
                                                id="billing_last_name_field" data-priority="20"><label
                                                    htmlFor="billing_last_name" className="">Last name&nbsp;<abbr
                                                        className="required" title="required">*</abbr></label><span
                                                    className="woocommerce-input-wrapper"><input style={{ border: "none" }} type="text"
                                                        className="input-text " name="lastName" value={formDetails.lastName} onChange={handleChange}
                                                        id="billing_last_name"/></span></p>
                                            <p style={{ border: "1px solid #2222221a" }} className="form-row form-row-wide validate-required validate-phone"
                                                id="billing_phone_field" data-priority="100"><label htmlFor="billing_phone"
                                                    className="">Phone&nbsp;<abbr className="required"
                                                        title="required">*</abbr></label><span
                                                    className="woocommerce-input-wrapper"><input style={{ border: "none" }} type="tel"
                                                        className="input-text " name="phoneNumber" value={formDetails.phoneNumber} onChange={handleChange} id="billing_phone"
                                                    /></span></p>
                                            <p style={{ border: "1px solid #2222221a" }} className="form-row form-row-wide validate-required validate-email"
                                                id="billing_email_field" data-priority="110"><label htmlFor="billing_email"
                                                    className="">Email address&nbsp;<abbr className="required"
                                                        title="required">*</abbr></label><span
                                                    className="woocommerce-input-wrapper"><input style={{border: "none"}} type="email"
                                                        className="input-text " name="email" value={formDetails.email} onChange={handleChange} id="billing_email9"
                                                    /></span></p>
                                            <p style={{ border: "1px solid #2222221a" }} className="form-row form-row-wide validate-required validate-email"
                                                id="billing_email_field" data-priority="110"><label htmlFor="billing_email"
                                                    className="">Password&nbsp;<abbr className="required"
                                                        title="required">*</abbr></label><span
                                                    className="woocommerce-input-wrapper"><input style={{border: "none"}} type="password"
                                                        className="input-text " name="password" value={formDetails.password} onChange={handleChange} id="billing_email7"
                                                     /></span></p>
                                            <a className="wp-block-button__link wp-element-button" onClick={submitForm}
                                                style={{width: "100%", borderRadius: "5px", background: '#fb246a' }} 
                                                href>Sign Up</a>
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


export default SignUp