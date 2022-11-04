import React from 'react';
import { Link } from 'react-router-dom';

const User = ({ name }) => {

    return (
        <Link to={`/repo/${name}`} className='repoList'>
            <div className="user">

                <div className="details">
                    <h2>
                        {name}
                    </h2>

                    <hr />
                </div>

            </div>
        </Link>
    );
};




export default User;
