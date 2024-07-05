
"use client";
import { useState } from 'react';
import styles from '../styles/ContactForm.module.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSuccess(true);
    }
  };

  return (
    <section className={styles.contactForm}>
      <h2 className={styles.title}>Contacto</h2>
   
      <form onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          name="name"
          placeholder="Nombre"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          className={styles.input}
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          className={styles.input}
          name="message"
          placeholder="Mensaje"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button className={styles.button} type="submit">Enviar</button>
        {success && <p className={styles.successMessage}>Mensaje enviado con éxito!</p>}
      </form>
    </section>
  );
};

export default ContactForm;

