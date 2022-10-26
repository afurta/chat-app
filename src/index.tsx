import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ActiveChat from './containers/ActiveChat';
import Auth from './containers/Auth';
import Chats from './containers/Chats';
import NotFound from './containers/NotFound';
import 'materialize-css/dist/css/materialize.min.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Auth/>}/>
          <Route path='/chats' element={<Chats/>}/>
          <Route path='/activeChat:id' element={<ActiveChat/>}/>
          <Route path='*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
