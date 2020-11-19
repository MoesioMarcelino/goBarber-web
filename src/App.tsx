import React from 'react';
import AppProvider from './hooks';
import SignIn from './pages/SignIn';
// import SignUp from './pages/SignUp';
import GlobalStyles from './styles/global';

// import { Container } from './styles';

const App: React.FC = () => (
  <>
    <GlobalStyles />
    <AppProvider>
      <SignIn />
    </AppProvider>
  </>
);

export default App;
