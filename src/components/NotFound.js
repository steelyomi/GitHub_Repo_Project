import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

function NotFound() {
    return (
        <div>
            <Helmet>
                <title>Error 404 - Repositories from GITHUB</title>
                <meta
                    name="description"
                    content="This is the Error page of the ALT SCHOOL GITHUB repository Project"
                />
                <link rel="canonical" href="/" />
            </Helmet>

            <h1>Oops! You seem to be lost.</h1>
            <h3>Click here to that you back Home</h3>
            <Link to="/"><button>Home Page</button></Link>
        </div>
    )
}

export default NotFound;