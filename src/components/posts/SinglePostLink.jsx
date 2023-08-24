// stuos komponentus mes turim generuoti  PostsPage kaip nuorodas

import { Link } from 'react-router-dom';

export default function SinglePostLink(props) {
  return (
    <li>
      {/* vietoje 5 paduoti posto id */}
      <Link to={`/posts/${props.id}`}>
        {props.title} - <strong>{props.author}</strong>
      </Link>
    </li>
  );
}
