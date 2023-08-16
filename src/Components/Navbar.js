import styles from "./Navbar.module.css";
import Nav from 'react-bootstrap/Nav'

function Navbar() {
  return (
    <div className={styles.navbar}>
      <h1>Gourmet</h1>

      <nav>
        <ul>
            <li><Nav.Link href="">Quem somos</Nav.Link></li>
            <li><Nav.Link href="">Menu</Nav.Link></li>
            <li><Nav.Link href="">Contato</Nav.Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar