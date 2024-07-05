// import styles from '../styles/Header.module.css';
// import Image from 'next/image';

// const Header = () => {
//   return (
//     <header className={styles.header}>
//       <Image
//         src="/Picture.png"
//         alt="Profile"
//         width={350}
//         height={380}
//       />
//       <div className={styles.animation}>
//         <span className={styles['animation-text']}>Sol Olmos</span>
//       </div>
//     </header>
//   );
// };

// export default Header;


import styles from '../styles/Header.module.css';
import Image from 'next/image';

const Header = () => {
  return (
    <header className={styles.header}>
         <Image
        src="/Picture.png"
        alt="Profile"
        width={350}
        height={380}
      />
     
      <h1>Sol Olmos</h1>
    </header>
  );
};

export default Header;
