import style from "../styles/HeaderNav.module.css"
import NavItem from "./NavItem";

const HeaderNav = () => {
    return(
        <ul className={style["header-nav"]}>
            <NavItem text="Blog" />
            <NavItem text="About" />
            <NavItem text="Post" />
            <NavItem text="Log In" />
        </ul>  
    )
};

export default HeaderNav;