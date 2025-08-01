import Header from "../components/Header";
import styles from "../styles/BasePage.module.css"

const BasePage = ({children, location}) => {
    return (
        <div className={styles.main}>
            <Header location={location}/>
            {children}
        </div>
    )
};

export default BasePage;