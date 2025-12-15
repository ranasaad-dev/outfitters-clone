import React from 'react';

function Contact() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form Submitted:', formData);
  };

  return (
    <div className="contact-container" style={styles.container}>
      <h1 style={styles.heading}>Get in Touch</h1>
      <p style={styles.text}>Have any questions? We're here to help!</p>

      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputGroup}>
          <label htmlFor="name" style={styles.label}>Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            style={styles.input}
            placeholder="Enter your name"
          />
        </div>

        <div style={styles.inputGroup}>
          <label htmlFor="email" style={styles.label}>Your Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            style={styles.input}
            placeholder="Enter your email"
          />
        </div>

        <div style={styles.inputGroup}>
          <label htmlFor="message" style={styles.label}>Your Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            style={styles.textarea}
            placeholder="Write your message"
          />
        </div>

        <button type="submit" style={styles.submitButton}>Send Message</button>
      </form>

      <div style={styles.contactInfo}>
        <h3 style={styles.contactHeading}>Contact Details</h3>
        <p style={styles.contactText}>Email: support@ecommerce.com</p>
        <p style={styles.contactText}>Phone: +1 (800) 123-4567</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
    fontFamily: 'Roboto, sans-serif',
    color: '#333',
    backgroundColor: '#f0f4f8',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    maxWidth: '600px',
    margin: '0 auto',
  },
  heading: {
    textAlign: 'center',
    fontSize: '2.5rem',
    fontWeight: '600',
    marginBottom: '1.5rem',
    color: '#333',
  },
  text: {
    textAlign: 'center',
    fontSize: '1.1rem',
    color: '#666',
    marginBottom: '2rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  inputGroup: {
    marginBottom: '1.5rem',
  },
  label: {
    fontSize: '1rem',
    fontWeight: '500',
    marginBottom: '0.5rem',
    color: '#444',
  },
  input: {
    padding: '1rem',
    fontSize: '1rem',
    border: '1px solid #ddd',
    borderRadius: '8px',
    width: '100%',
    boxSizing: 'border-box',
    outline: 'none',
    transition: 'border-color 0.3s ease',
  },
  textarea: {
    padding: '1rem',
    fontSize: '1rem',
    border: '1px solid #ddd',
    borderRadius: '8px',
    width: '100%',
    boxSizing: 'border-box',
    outline: 'none',
    height: '150px',
    resize: 'none',
    transition: 'border-color 0.3s ease',
  },
  submitButton: {
    padding: '1rem',
    fontSize: '1.1rem',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  submitButtonHover: {
    backgroundColor: '#0056b3',
  },
  contactInfo: {
    marginTop: '2rem',
    textAlign: 'center',
  },
  contactHeading: {
    fontSize: '1.5rem',
    fontWeight: '600',
    marginBottom: '1rem',
    color: '#333',
  },
  contactText: {
    fontSize: '1rem',
    color: '#555',
  },
};

export default Contact
