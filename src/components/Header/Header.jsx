import styles from"./Header.module.css"
import igniteLogo from "../../assets/igniteLogo.svg"

export const Header = () =>{
    return (
        <div>
            <header className={styles.header}>
                <img src={igniteLogo} alt="Logo Ignite"/>
            </header>
           
        </div>
    )
}