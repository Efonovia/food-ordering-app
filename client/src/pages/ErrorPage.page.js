import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/error.css"


function ErrorPage() {
    const navigate = useNavigate()
    

    return <div className="section">
        <h1 className="error">404</h1>
        <div className="page">Ooops!!! The page you are looking for is not found</div>
        <a onClick={() => navigate(-1)} className="back-home" href>Back to home</a>
    </div>
}


export default ErrorPage