import React, { useEffect, useRef } from "react";
import Header from "../../Components/Header";
import "./style.scss";

function HomePage() {
    useEffect(() => {
        return () => { };
    }, []);
    return (
        <div>
            <div>
                <Header/>
            </div>
        </div>
    );
}

export default HomePage;
