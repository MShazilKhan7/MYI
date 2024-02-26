import React from "react";
import { Route, Routes } from 'react-router-dom'; 
import { BrowserRouter } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Signup from "./components/Account/Signup";
import Login from "./components/Account/Login";

const App:React.FC = () =>
{
    return (    
                <>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/signup" element={<Signup/>}></Route>
                            <Route path="/login" element={<Login/>}></Route>
                        </Routes>
                    </BrowserRouter>    
                </>
           );
}

export default App;