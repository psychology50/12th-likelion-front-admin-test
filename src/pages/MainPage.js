import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Nav from "../components/Nav";


const MainPage = () => {
    const navigate = useNavigate();

    return (
        <>
            <Header/>
            <Nav/>

        </>

    )
}

export default MainPage;