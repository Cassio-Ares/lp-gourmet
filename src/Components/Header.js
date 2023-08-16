import styles from './Header.module.css'
import hamburger from '../Image/hamburger.jpg'



function Header(){
    return(
        <div className={styles.header}>
            <img src={hamburger}/>
        </div>
    )
}

export default Header