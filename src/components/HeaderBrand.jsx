import botbLogo from "../assets/botb-logo.png"

const HeaderBrand = ({location}) => {
    return (
        <>
            <img src={botbLogo} alt="Band of the Book Logo" />
            <div>
                <h1>Band of the Book</h1>
                <h2 style={{textDecoration: "underline"}}>{location}</h2>
            </div>
        </>
    );
};

export default HeaderBrand;