import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import HomePage from './screens/HomePage';
import UserPage from './screens/UserPage';
import RepositoryDetails from './screens/RepositoryDetails';
import { Provider } from 'react-redux';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/userpage" element={<UserPage />} />
          <Route path="/repositorydetails" element={<RepositoryDetails />} />
        </Routes>
      </Router>
    </React.StrictMode>
  </Provider>
);
