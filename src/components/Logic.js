import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Pagination from './Pagination';
import Users from './Users';
import { USERS_PER_PAGE } from '../utils/constants';
import { Helmet } from 'react-helmet';

const Logic = () => {
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        axios
            .get('https://api.github.com/users/steelyomi/repos')
            .then(response => {
                const result = response.data;
                setUsers(result);
                setTotalPages(Math.ceil(result.length / USERS_PER_PAGE));
                setIsLoading(false);
            });
    }, []);

    const handleClick = number => {
        setPage(number);
    };


    return (

        <div>
            <Helmet>
                <title>Repositories from GITHUB</title>
                <meta
                    name="description"
                    content="This is the page showing all my repositories from GITHUB"
                />
                <link rel="canonical" href="/repositories" />
            </Helmet>

            <h1>My GitHub Repositories</h1>
            {isLoading ? (
                <div className="loading">Loading Repositories...</div>
            ) : (
                <React.Fragment>
                    <Users users={users} page={page} />
                    <Pagination
                        totalPages={totalPages}
                        handleClick={handleClick}
                        page={page}
                    />
                </React.Fragment>
            )}
        </div>
    );
};

export default Logic;
