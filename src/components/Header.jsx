import style from "../styles/Header.module.css"
import HeaderBrand from "./HeaderBrand";
import HeaderNav from "./HeaderNav";

const Header = ({location}) => {
    return(
        <div className={style.headerBG}>
            <div className={style.header}>
                <HeaderBrand location={location}/>
                <HeaderNav />
            </div>
        </div>
    );
};

export default Header;