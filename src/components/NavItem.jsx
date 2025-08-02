import style from "../styles/NavItem.module.css"

const NavItem = ({text, clickHandler}) => {
    return (
        <li className={style["nav-item"]} onClick={clickHandler}>
            <span className={style["nav-item-text"]}>{text}</span>
        </li>
    )
};

export default NavItem;