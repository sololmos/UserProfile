import styles from '../styles/Interests.module.css';

const Interests = () => {
  return (
    <section className={styles.interests}>
      <h2 className={styles.title}>Tengo interes en... </h2>
      <ul>
        <li>Desarrollo Frontend</li>
        <li>Diseño UX/UI</li>
        <li>Diseño Gráfico</li>
        <li>Innovación en diseño web</li>
        <li>Trabajo en equipo</li>
        <li>Aprendizaje continuo y desarrollo profesional</li>
      </ul>
    </section>
  );
};

export default Interests;
