"use client";
import Header from './components/Header';
import About from './components/About';
import Interests from './components/Interests';
import ContactForm from './components/ContactForm';
import styles from './styles/Home.module.css';
import './globals.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <Header />
      <About />
      <Interests />
      <ContactForm />
    </div>
  );
};

export default Home;


// import Image from "next/image";
// import styles from "./page.module.css";

// export default function Home() {
//   return (
//     <main className={styles.main}>
//       <div className={styles.description}>
//         <h2>User Profile</h2>
        
       
//       </div>




//     </main>
//   );
// }
