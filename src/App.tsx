import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { TodoContextProvider } from './context/todo';

import GlobalStyles from './styles/global';
import Routes from './routes';

const App: React.FC = () => (
  <BrowserRouter>
    <TodoContextProvider>
      <Routes />
      <GlobalStyles />
    </TodoContextProvider>
  </BrowserRouter>
);

export default App;
