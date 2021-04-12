import { React } from "react";
import "./style.scss";

const MenuItems = (props) => {
    return (
        <div onClick={props.onClick} className="">
            {props.text}
        </div>
    )
}

export default MenuItems