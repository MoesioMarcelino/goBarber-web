import React from 'react';
import { AuthProvider } from './hooks/AuthContext';
import SignIn from './pages/SignIn';
// import SignUp from './pages/SignUp';
import GlobalStyles from './styles/global';

// import { Container } from './styles';

const App: React.FC = () => (
  <>
    <GlobalStyles />
    <AuthProvider>
      <SignIn />
    </AuthProvider>
  </>
);

export default App;
