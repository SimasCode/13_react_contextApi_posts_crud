import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function PostsPage() {
  const [postsArr, setPostsArr] = useState([]);
  // turetu buti cofig.js faile
  //TODO use .env file
  const url = 'http://localhost:5000/posts';

  useEffect(() => {
    //parsisiusti
    axios
      .get(url)
      .then((resp) => {
        console.log('resp ===', resp);
        setPostsArr(resp.data);
      })
      .catch((error) => {
        console.log('error ===', error);
      });
    //irasyti i postsArr
  }, []);

  return (
    <div className='container'>
      <h1>Posts Page</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo ipsam
        eius tenetur omnis, quis voluptate.
      </p>
      <ul>
        {postsArr.map((pObj) => (
          <li key={pObj.id}>
            {/* vietoje 5 paduoti posto id */}
            <Link to={'/posts/5'}>{pObj.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
