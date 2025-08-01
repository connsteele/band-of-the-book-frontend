import styles from "../styles/BasePage.module.css"

const BasePage = ({children}) => {
    return (
        <div className={styles.main}>
            {children}
        </div>
    )
};

export default BasePage;