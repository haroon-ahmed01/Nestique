import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './pages/Layout';
import Login from './pages/Login';
import Contact from './pages/Contact';
import Blogs from './pages/Blogs';
import NoPage from './pages/Nopage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='login' element={<Login />}/>
            <Route path='blogs' element={<Blogs />} />
            <Route path='contact' element={<Contact />} />
            <Route path='*' element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
