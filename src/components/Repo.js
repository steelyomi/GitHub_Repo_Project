import React, {useEffect, useState } from 'react';
import axios from 'axios';
import {useParams, Link} from 'react-router-dom';
import {Helmet} from 'react-helmet';


function Repo () {

    const params = useParams()
    const [repo, setRepo ] = useState({});
    const [isLoading, setIsLoading ] = useState(false);


    useEffect(() => {
        setIsLoading(true);
        axios
          .get(`https://api.github.com/repos/steelyomi/${params.reponame}`)
          .then(response => {
            const result = response.data;
            setRepo(result);
            setIsLoading(false);
          });
      }, [params]);
    

        return(
           <div>
            <Helmet>
        <title>{`${repo.name} -Repository from GITHUB`}</title>
        <meta
          name="description"
          content={`This is the page showing the ${repo.name} repository from GITHUB`}
        />
        <link rel="canonical" href={`/repos/${repo.name}`} />
      </Helmet>



              {isLoading ? (
        <div className="loading">Loading Repos...</div>
      ) : (
        <div>
        <div className="user">
    
    <div className="details">
    <p>Repo Name: {repo.name}</p>
    <p>Repo Description: {repo.description}</p>
    <p>Created: {repo.created_at}</p>
    <p>Language: {repo.language}</p>
    <p>Visibility: {repo.visibility}</p>
      <hr />
    </div>
    
    </div>

        <Link to='/repositories'><button>Back to Repositories</button></Link>
        <button className='repoPage'><a href={repo.svn_url} target='_blank' rel='noreferrer'>Go to Repo on GitHub</a></button>
        </div>
      )}
           </div>
         );   
    
}

export default Repo;