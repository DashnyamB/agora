import React, { useEffect } from "react";
import HamburgerMenu from "./HamburgerMenu";
import "./style.scss";

function Header(props) {
    useEffect(() => {
    }, []);
    return (
        <nav className="header wrapper">
            <HamburgerMenu />
            <div className="header_content">
                hahah
            </div>
        </nav>
    );
}

export default Header;
