import React from 'react';
import Header from "../HeaderComponent/Header.tsx";
import {Outlet} from "react-router-dom";
import Footer from "../FooterComponents/Footer.tsx";

const Layout = () => {
    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    );
};

export default Layout;
