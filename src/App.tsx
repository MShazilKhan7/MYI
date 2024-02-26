import React from "react";
import { Route, Routes } from 'react-router-dom'; 
import { BrowserRouter } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Signup from "./components/Account/Signup";
import Login from "./components/Account/Login";
import Sidebar from "./components/Dashboard/sidebar/sidebar";
import DashboardLayout from "./components/Dashboard/Dashboard";
const App:React.FC = () =>
{
    return (    
                <>
                {/* <h1 className="text-3xl font-bold text-center text-blue-500">Hello world!</h1>  */}
                    <BrowserRouter>
                        <Routes>
                            <Route path="/signup" element={<Signup/>}></Route>
                            <Route path="/login" element={<Login/>}></Route>
                            <Route path="/dashboard" element={<DashboardLayout/>}>
                                {/* nested routes of dashboard here */}
                            </Route>

                        </Routes>
                    </BrowserRouter>    
                </>
           );
}

export default App;