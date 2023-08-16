import styles from "./History.module.css";
import bread from "../Image/bread.jpg";

function History() {
  return (
    <div className={styles.history}>
      <img src={bread} />
      <section>
        <h1>Quem somos</h1>
        <h3>Tradição desde 1893</h3>
        <p>
          Mr. Smith in lorem ipsum dolor sit amet, consectetur adipiscing
          <br />
          elit consectetur adipiscing elit, sed do eiusmod tempor incididunt
          <br />
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
          <br />
          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          <br />
          consequat. Duis aute iruredolor in reprehenderit in voluptate velit
          <br />
          esse cillum dolore eu fugiat nulla pariatur. 
          <br /><br />
          Venha comer e aproveitar esta experiência!
        </p>
      </section>
    </div>
  );
}

export default History;
