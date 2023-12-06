import React from 'react';
import Header from "../HeaderComponents/Header.tsx";
import {Outlet} from "react-router-dom";
import Footer from "../Footer/Footer.tsx";

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
