import { Route, Routes } from 'react-router-dom';
import './style/App.css';
import './style/reset.css';
import HomePage from './pages/HomePage';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </div>
  );
}
