import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import LoginPage from './pages/account-management/Login';
import ForgotPage from './pages/account-management/Forgot';
import ResetPage from './pages/account-management/Reset';
import HomePage from './pages/Home';
import RequireAuth from './pages/RequireAuth';
import NotFound from './pages/NotFound';

import './App.css';

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="forgot" element={<ForgotPage />} />
          <Route path="reset" element={<ResetPage />} />

          <Route element={<RequireAuth />}>
            <Route path="/" element={<HomePage />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
