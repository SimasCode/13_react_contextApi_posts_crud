import { Route, Routes } from 'react-router-dom';
import './style/App.css';
import './style/reset.css';
import HomePage from './pages/HomePage';
import PostsPage from './pages/posts/PostsPage';
import Header from './components/layout/Header';
import { useAuth } from './store/AuthProvider';
import LoginPage from './pages/auth/LoginPage';
import NotFound from './pages/NotFound';
import SinglePostPage from './pages/posts/SinglePostPage';

export default function App() {
  const { isLoggedIn } = useAuth();
  const ctx = useAuth();
  console.log('ctx ===', ctx);
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        {isLoggedIn && <Route path='/posts' element={<PostsPage />} />}
        {/* vietoje 5 turi buti dinaminis posto id elementas */}
        <Route path='/posts/:postId' element={<SinglePostPage />} />

        {!isLoggedIn && <Route path='/login' element={<LoginPage />} />}
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

// sukurti AuthContextProvider.jsx
// sukurti context AuthContext
