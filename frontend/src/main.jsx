import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home.jsx';
import Login from './components/Login.jsx';
import SignUp from './components/SignUp.jsx';
import SignUpAdmin from './components/SignUpAdmin.jsx';
import LoginAdmin from './components/LoginAdmin.jsx';
import AdminDashboard from './components/AdminDashboard.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <BrowserRouter>
    <BgColor>
        <Routes>
        <Route index element={<Home/>} />
        <Route path="/user/login" element={<Login></Login>} />
        <Route path='/user/signup' element={<SignUp></SignUp>}></Route>
          <Route path='/admin/signup' element={<SignUpAdmin></SignUpAdmin>}></Route>
          <Route path='/admin/login' element={<LoginAdmin></LoginAdmin>}></Route>
          <Route path='/admin/dashboard' element={<AdminDashboard></AdminDashboard>}></Route>
        </Routes>
      </BgColor>
    </BrowserRouter>

  </React.StrictMode>,
)
function BgColor({ children }) {
  return <div className="bg-[#F6F6F6]">{children}</div>;
}
