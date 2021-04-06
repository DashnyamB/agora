import React, { useEffect } from "react";
import HamburgerMenu from "./HamburgerMenu";
import "./style.scss";

function Header(props) {
    useEffect(() => {
    }, []);
    return (
        <nav className="header wrapper">
            <p>Агора-д тавтай морил. Наймаа бол бидний урлаг.</p>
            
            <div className="header_content">
                <HamburgerMenu />
                hahah
            </div>
        </nav>
    );
}

export default Header;
