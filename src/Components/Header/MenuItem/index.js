import { React } from "react";
import "./style.scss";

const MenuItem = (props) => {
    return (
        <div onClick={props.onClick} className="">
            {props.text}
        </div>
    )
}

export default MenuItem