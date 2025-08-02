import style from "../styles/NavItem.module.css"

const NavItem = ({text, clickHandler}) => {
    return (
        <li className={style["nav-item"]} onClick={clickHandler}>{text}</li>
    )
};

export default NavItem;