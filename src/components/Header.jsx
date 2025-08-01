import style from "../styles/Header.module.css"
import HeaderBrand from "./HeaderBrand";

const Header = ({location}) => {
    return(
        <div className={style.header}>
            <HeaderBrand location={location}/>
        </div>
    );
};

export default Header;