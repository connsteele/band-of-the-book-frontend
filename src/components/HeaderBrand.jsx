import style from "../styles/HeaderBrand.module.css"

const HeaderBrand = ({ location }) => {
    return (
        <div className={style["header-brand"]}>
            <h1>Band of the Book</h1>
            {/* <h2>{location}</h2> */}
        </div>
    );
};

export default HeaderBrand;