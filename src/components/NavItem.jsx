import { Link } from "react-router-dom";
import style from "../styles/NavItem.module.css"

const NavItem = ({text}) => {
    if (typeof text !== "string") {
        console.error();
        throw new Error(`Text prop: ${text} is not of type string`);
    }

    const textLink = text.replaceAll(" ", "_");


    return (
        <li className={style["nav-item"]}>
            <span className={style["nav-item-text"]}><Link to={`/${textLink}`} className={style["nav-item-link"]}>{text}</Link></span>
        </li>
    )
};

export default NavItem;