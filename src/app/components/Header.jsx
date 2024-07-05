
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
      <h1 className={styles.title}>Sol olmos</h1> 
   
    </header>
  );
};

export default Header;
