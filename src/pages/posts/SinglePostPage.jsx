// cia mes graziai atvaizduosim vis info esancia posto objekte
// pasiimti dinamine adreso dali (parametra) tai yar post ID
// parsisiusti su axios konkretu post
// PASIIMTI IS GIT HUB

import axios from 'axios';
import { useEffect, useState } from 'react';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../../store/AuthProvider';

export default function SinglePostPage() {
  const navigate = useNavigate();
  const ctx = useAuth();
  const params = useParams();

  const [currentPost, setCurrentPost] = useState({});

  const url = `http://localhost:5000/posts/${params.postId}`;

  useEffect(() => {
    axios
      .get(url)
      .then((resp) => {
        console.log('resp ===', resp.data);
        console.log('resp.data ===', resp.data);
        setCurrentPost(resp.data);
      })
      .catch((error) => {
        console.warn('ivyko klaida:', error);
      });
  }, [url]);

  function handleLogout() {
    ctx.logout();
    navigate('/login');
  }

  function handleDelete() {
    useEffect();
    navigate('/posts');
  }

  return (
    <div className='container'>
      <div>
        <img src={currentPost.image} alt={`image-${currentPost.id}`} />
        <p>Body: {currentPost.body}</p>
        <p>Body: {currentPost.tags?.join(', ')}</p>
      </div>
      {/* <NavLink onClick={ctx.logout} to={'/login'}>
        Logout
      </NavLink> */}
      {ctx.isLoggedIn && <button onClick={handleLogout}>Logout</button>}
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}
