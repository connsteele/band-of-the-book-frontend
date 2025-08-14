import Header from "../components/Header";
import styles from "../styles/BasePage.module.css"

const BasePage = ({children: child, location}) => {
    return (
        <div className={styles.page}>
            <Header location={location}/>
            {child}
        </div>
    )
};

export default BasePage;