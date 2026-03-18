import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import Header from "../components/Header";

const Home = () => {

    const navigate = useNavigate();

    useEffect(() => {
        const auth = sessionStorage.getItem("auth");
        if (!auth) {
            navigate('/auth?redirect-auth=signup');
        }
    }, []);

    return (
        <>
            <Header />
        </>
    )
}

export default Home;