import React from 'react'
import Home from '../pages/home';
import RegistrationPage from '../pages/registrationPage';
import NoPage from '../pages/noPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function Router() {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='registration' element={<RegistrationPage />} />
                <Route path="*" element={<NoPage />} />
            </Routes>
          </BrowserRouter>
    </>
  )
}

export default Router 
