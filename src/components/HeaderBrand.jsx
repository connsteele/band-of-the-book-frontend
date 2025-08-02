import style from "../styles/HeaderBrand.module.css"
import botbLogo from "../assets/botb-logo.png"

const HeaderBrand = ({location}) => {
    return (
        <div className={style["header-brand"]}>
            <img src={botbLogo} alt="Band of the Book Logo" />
            <div>
                <h1>Band of the Book</h1>
                <h2 style={{textDecoration: "underline"}}>{location}</h2>
            </div>
        </div>
    );
};

export default HeaderBrand;