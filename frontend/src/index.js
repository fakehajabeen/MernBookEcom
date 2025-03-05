import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux'; // ✅ Import Provider from react-redux
import store from './store/store.js'; // ✅ Import Redux store
import { RouterProvider } from 'react-router-dom';
import router from './routes';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}> {/* ✅ Wrap everything inside Provider */}
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
