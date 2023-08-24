import axios from 'axios';
import { useEffect, useState } from 'react';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
import Container from '../../components/UI/container/Container';
=======
>>>>>>> 664a7c2d1bab100337a3b6dba22a0595a4c75067
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
    <Container>
      <h1>Posts Page</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo ipsam
        eius tenetur omnis, quis voluptate.
      </p>
      <ul>
        {postsArr.map((pObj) => (
<<<<<<< HEAD
          <SinglePostLink
            key={pObj.id}
            id={pObj.id}
            title={pObj.title}
            author={pObj.author}
          />
=======
          <SinglePostLink key={pObj.id} id={pObj.id} title={pObj.title} />
>>>>>>> 664a7c2d1bab100337a3b6dba22a0595a4c75067
        ))}
      </ul>
    </Container>
  );
}
