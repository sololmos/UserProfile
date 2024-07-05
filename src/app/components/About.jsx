import styles from '../styles/About.module.css';

const About = () => {
  return (
    <section className={styles.about}>
      <div className={styles.card}>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
        <div className={styles.cardInner}>
          <h2>Sobre mi</h2>
          <p>
            Soy Desarrolladora Full Stack y Diseñadora, con una gran pasión por el desarrollo Frontend y la creación de interfaces intuitivas y atractivas. Valoro la comunicación efectiva y el trabajo en equipo. Creo que mi combinación de habilidades técnicas y creativas me permite aportar un enfoque integral y valioso a cualquier proyecto.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;




// import styles from '../styles/About.module.css';

// const About = () => {
//   return (
//     <section className={styles.about}>
//       <h2>Sobre mi</h2>
//       <p>
//       Soy Desarrolladora Full Stack y Diseñadora, con una gran pasión por el desarrollo Frontend y la creación de interfaces intuitivas y atractivas. Valoro la comunicación efectiva y el trabajo en equipo. Creo que mi combinación de habilidades técnicas y creativas me permite aportar un enfoque integral y valioso a cualquier proyecto.
//       </p>
//     </section>
//   );
// };

// export default About;
