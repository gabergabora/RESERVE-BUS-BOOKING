import React from 'react';
import {Route,Routes} from "react-router-dom"
import HomePage from './Pages/HomePage';
import AllBusPage from './Pages/AllBusPage';
import UserDetails from './Pages/UserDetails';
import ReceiptPage from './Pages/RecieptPage';
import SignInPage from './Pages/SignInPage';
import SignUpPage from './Pages/SignUpPage';


export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/allBuses' element={<AllBusPage />}/>
        <Route path='/info' element={<UserDetails />}/>
        <Route path='/receipt' element={<ReceiptPage />}/>
        <Route path='/signin' element={<SignInPage />}/>
        <Route path='/signup' element={<SignUpPage />}/>
      </Routes>
    </div>
  )
}

