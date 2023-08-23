import axios from 'axios';
import { useEffect, useState } from 'react';
import SinglePostLink from '../../components/posts/SinglePostLink';

export default function PostsPage() {
  const [postsArr, setPostsArr] = useState([]);
  // turetu buti cofig.js faile
  //TODO use .env file
  const url = 'http://localhost:5000/posts';

  useEffect(() => {
    axios
      .get(url)
      .then((resp) => {
        console.log('resp ===', resp);
        setPostsArr(resp.data);
      })
      .catch((error) => {
        console.log('error ===', error);
      });
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
          <SinglePostLink key={pObj.id} id={pObj.id} title={pObj.title} />
        ))}
      </ul>
    </div>
  );
}
