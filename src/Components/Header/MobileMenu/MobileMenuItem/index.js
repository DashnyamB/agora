import React, { useEffect } from 'react';
import MobileMenuItems from "../MobileMenuItems";

const categoryItems = [
    'Эрэгтэй',
    // 'Эмэгтэй',
    // 'Хүүхэд',
    // 'Гутал',
    // 'Аксесори',
    // 'Электрон бараа',
    // 'Гэр Ахуй',
    // 'Спорт',
    // 'Гоо сайхан',
    // 'Хүнс',
    // 'Амьтдын Тэжээл',
    // 'Бичиг Хэрэг',
];

function MobileMenuItem(props) {
    const toggleMenuItem = () => {
        props.toggleMenuItem();
    }

    return (
        <div className="">
            <div className="mobile-menu__container">
                {categoryItems.map((category) => (
                    <MobileMenuItems key={category} text={category} />
                ))}
            </div>
        </div>
    );
}

export default MobileMenuItem;