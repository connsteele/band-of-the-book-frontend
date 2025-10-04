import { Link } from "react-router-dom";
import style from "../styles/NavItem.module.css"

const NavItem = ({text, clickHandler}) => {
    return (
        <li className={style["nav-item"]} onClick={clickHandler}>
            <span className={style["nav-item-text"]}><Link to={`/${text}`} className={style["nav-item-link"]}>{text}</Link></span>
        </li>
    )
};

export default NavItem;