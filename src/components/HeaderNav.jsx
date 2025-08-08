import style from "../styles/HeaderNav.module.css"
import NavItem from "./NavItem";

const HeaderNav = () => {
    return(
        <ul className={style["header-nav"]}>
            <NavItem text="Blog" />
            <NavItem text="About" />
            <NavItem text="Post" />
        </ul>  
    )
};

export default HeaderNav;