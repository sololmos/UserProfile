


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
      <h2>Contacto</h2>
   
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



// "use client";
// import { useState } from 'react';
// import styles from '../styles/ContactForm.module.css';

// const ContactForm = () => {
//   const [formData, setFormData] = useState({ name: '', email: '', message: '' });
//   const [formErrors, setFormErrors] = useState({}); // Estado para manejar errores
//   const [success, setSuccess] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//     // Limpiar el error cuando se corrige el campo
//     if (formErrors[name]) {
//       setFormErrors({ ...formErrors, [name]: null });
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Validar el formulario antes de enviar
//     const errors = validateForm(formData);
//     if (Object.keys(errors).length > 0) {
//       setFormErrors(errors);
//     } else {
//       setSuccess(true);
//     }
//   };

//   // Función para validar el formulario
//   const validateForm = (data) => {
//     let errors = {};

//     if (!data.name.trim()) {
//       errors.name = 'El nombre es requerido';
//     }

//     if (!data.email.trim()) {
//       errors.email = 'El email es requerido';
//     } else if (!isValidEmail(data.email)) {
//       errors.email = 'El email ingresado no es válido';
//     }

//     if (!data.message.trim()) {
//       errors.message = 'El mensaje es requerido';
//     }

//     return errors;
//   };

//   // Función para validar email
//   const isValidEmail = (email) => {
//     // Validación básica de email, puedes usar una librería como validator.js para validaciones más completas
//     const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return re.test(String(email).toLowerCase());
//   };

//   return (
//     <section className={styles.contactForm}>
//       <div className={styles['log-card']}>
//         <p className={styles.heading}>Contacto</p>
//         <p className={styles.para}>Envíame un mensaje</p>

//         <div className={styles['input-group']}>
//           <p className={styles.text}>Nombre</p>
//           <input
//             className={`${styles.input} ${formErrors.name && styles['input-error']}`}
//             type="text"
//             placeholder="Nombre"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//           {formErrors.name && <p className={styles.text}>{formErrors.name}</p>}

//           <p className={styles.text}>Email</p>
//           <input
//             className={`${styles.input} ${formErrors.email && styles['input-error']}`}
//             type="email"
//             placeholder="Email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//           {formErrors.email && <p className={styles.text}>{formErrors.email}</p>}

//           <p className={styles.text}>Mensaje</p>
//           <textarea
//             className={`${styles.input} ${formErrors.message && styles['input-error']}`}
//             placeholder="Escribe tu mensaje..."
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             rows={4} // Ajusta la altura según sea necesario
//             required
//           ></textarea>
//           {formErrors.message && <p className={styles.text}>{formErrors.message}</p>}
//         </div>

//         <button className={styles.btn} type="submit" onClick={handleSubmit}>
//           Enviar
//         </button>
//         {success && <p className={styles.successMessage}>Mensaje enviado con éxito!</p>}
//       </div>
//     </section>
//   );
// };

// export default ContactForm;

