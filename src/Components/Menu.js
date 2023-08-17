import styles from "./Menu.module.css";
import dinner from "../Image/dinner.jpg";

function Menu() {
  return (
    <div id="Menu" className={styles.menu}>
      <section>
        <h1>Nosso cardápio</h1>

        <dl>
          <dt>Cesta de pão</dt>
          <dd>Variedade de pães de frutas frescas e muffins 5,50</dd>
          <br />
          <dt>Granola de Mel e Amêndoa com Frutas</dt>
          <dd>
            Cereais naturais de mel, aveia torrada, passas, amêndoas e tâmaras
            7,00
          </dd>
          <br />
          <dt>Waffle belga</dt>
          <dd>Massa de baunilha com farinha de malte 7,50</dd>
          <br />
          <dt>Ovos mexidos</dt>
          <dd>
            Ovos mexidos, pimento vermelho assado e alho, com cebolinha 7,50
          </dd>
          <br />
          <dt>Panquecas de Mirtilo</dt>

          <dd>Com calda, manteiga e muitos frutos silvestres 8,50</dd>
          <br />
        </dl>
      </section>
      <img src={dinner} />
    </div>
  );
}

export default Menu;
