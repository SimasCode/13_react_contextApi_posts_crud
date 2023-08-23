// stuos komponentus mes turim generuoti  PostsPage kaip nuorodas

import { Link } from 'react-router-dom';

export default function SinglePostLink(props) {
  return (
    <li>
      <Link to={`/posts/${props.id}`}>{props.title}</Link>
    </li>
  );
}
