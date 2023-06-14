import React, {useEffect} from 'react';
import './App.css';
import '../../models/init'
import ColorChangeButton from "../color-change-button/color-change-button";
import {Route, Routes, useLocation} from "react-router-dom";
import MainPage from "../../pages/main-page/main-page";
import {route} from "../../utils/consts";
import Resume from "../../pages/resume/resume";
import BackButton from "../back-button/back-button";
import {checkThemeFunc} from "../../utils/checkThemeFunc";

function App() {

    useEffect(() => {
        checkThemeFunc()
    }, [])

    const location = useLocation();

    return (
        <div className='App'>
            <ColorChangeButton/>
            <div className='container'>
                <Routes>
                    <Route index element={<MainPage/>}/>
                    <Route path={route.RESUME} element={<Resume/>}/>
                </Routes>
            </div>
            {location.pathname !== '/' ? <BackButton/> : null}
        </div>
    );
}

export default App;
