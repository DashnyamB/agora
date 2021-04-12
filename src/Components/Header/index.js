import React, { useEffect } from "react";
import HamburgerMenu from "./HamburgerMenu";
import Logo from "./Logo";
import MenuItem from "./MenuItem";
import MobileMenu from "./MobileMenu";
import Search from "./Search";
import "./style.scss";

function Header(props) {
    useEffect(() => {
    }, []);
    return (
        <nav className="header wrapper">
            <p>Агора-д тавтай морил. Наймаа бол бидний урлаг.</p>

            <div className="header__content">
                <HamburgerMenu />
                {/* <MobileMenu /> */}
                <Logo />
                <Search />
                <MenuItem />
            </div>
        </nav>
    );
}

export default Header;
