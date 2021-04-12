import React, { useEffect, useState } from "react";
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import MobileMenuItems from "../MobileMenu/MobileMenuItems"
import { Menu } from '@material-ui/core';
import "./style.scss";

const categoryItems = [
    'Эрэгтэй',
    'Эмэгтэй',
    'Хүүхэд',
    'Гутал',
    'Аксесори',
    'Электрон бараа',
    'Гэр Ахуй',
    'Спорт',
    'Гоо сайхан',
    'Хүнс',
    'Амьтдын Тэжээл',
    'Бичиг Хэрэг',
];


function HamburgerMenu(props) {
    const [currentState, setcurrentState] = React.useState(null);

    const handleClick = (event) => {
        setcurrentState(event.currentTarget);
    };

    const handleClose = () => {
        setcurrentState(null);
    };

    useEffect(() => {
    }, []);
    return (
        <div>
            <MenuRoundedIcon
                onClick={handleClick}
            />
            <Menu
                id="simple-menu"
                anchorEl={currentState}
                keepMounted
                open={Boolean(currentState)}
                onClose={handleClose}
            >
                {categoryItems.map((category) => (
                    <MobileMenuItems key={category} text={category} />
                ))}
            </Menu>
        </div>


    );
}

export default HamburgerMenu;