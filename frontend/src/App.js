import AdminHomePage from './admin/AdminHomePage';
import SuccessfullySubmitted from './admin/SuccessfullySubmitted';
import WelcomeAdmin from './admin/WelcomeAdminPage';
import './App.css';
import { AuthProvider } from './components/auth';

import { Routes, Route } from 'react-router-dom';
import RequireAuth from './components/RequireAuth';
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Routes>
          <Route path="/" element={<AdminHomePage />} />
          {/* <Route path="/user" element={<HomePage />} /> */}
          <Route path="/admin" element={<AdminHomePage />} />
          <Route path="/admin/welcome" element={
            <RequireAuth>
              <WelcomeAdmin />
            </RequireAuth>
          } />
          <Route path="/admin/success" element={<SuccessfullySubmitted />} />
          {/* <Route path="/user/verified" element={<VerifiedPage />} /> */}
          {/* <Route path="/user/verified/:email/:cID" element={<VerifiedPage />} /> */}
          {/* <Route path="/user/notFound" element={<NotFound />} /> */}
        </Routes>
      </AuthProvider>

    </div>
  );
}

export default App;
