import styles from "./Navbar.module.css";
import Nav from 'react-bootstrap/Nav'

function Navbar() {
  return (
    <div className={styles.navbar}>
      <h1>Gourmet</h1>

      <nav>
        <ul>
            <li><Nav.Link href="#History">Quem somos</Nav.Link></li>
            <li><Nav.Link href="#Menu">Menu</Nav.Link></li>
            <li><Nav.Link href="#Contact">Contato</Nav.Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar