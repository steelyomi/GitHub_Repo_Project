import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

function Home() {
    return (
        <div>
            <Helmet>
                <title>Home - Repositories from GITHUB</title>
                <meta
                    name="description"
                    content="This is the home page of the ALT SCHOOL GITHUB repository Project"
                />
                <link rel="canonical" href="/" />
            </Helmet>




            <h1>Hi, Welcome...</h1>
            <div className='welcome'>
                <p >I'm Abayomi, an aspiring front-end developer and a student of ALT School Africa.<br />
                    This is a simple web application that keeps track and displays my GITHUB repositories.<br />
                    Make sure to have fun with it...Cheers</p>
            </div>
            <Link to='/repositories'>
                <button>
                    Click here to begin
                </button>
            </Link>
        </div>
    )
}

export default Home;