import { Link, NavLink } from 'react-router-dom';
import css from './Header.module.css';
import { useAuth } from '../../store/AuthProvider';
import Container from '../UI/container/Container';

export default function Header() {
  const { isLoggedIn, logout } = useAuth(); // arba tiesiog const ctx = useAuth();

  return (
    <header className={css.wrap}>
      <Container className={css.flex}>
        <Link href='/' className={css.logo}>
          Logo
        </Link>
        <nav>
          <NavLink className={css.navLink} to={'/'}>
            Home
          </NavLink>
          {isLoggedIn && (
            <NavLink className={css.navLink} to={'/posts'}>
              Posts
            </NavLink>
          )}
          {!isLoggedIn && (
            <NavLink className={css.navLink} to={'/login'}>
              Login
            </NavLink>
          )}
          {isLoggedIn && (
            <NavLink onClick={logout} className={css.navLink} to={'/login'}>
              Logout
            </NavLink>
          )}
        </nav>
      </Container>
    </header>
  );
}
