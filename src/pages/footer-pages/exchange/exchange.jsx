import React, { useState } from 'react';

function Exchange() {
   const [selectedProduct, setSelectedProduct] = useState('');
  const [exchangeReason, setExchangeReason] = useState('');
  const [contactInfo, setContactInfo] = useState({
    name: '',
    email: '',
    orderNumber: '',
  });

  const handleProductChange = (e) => {
    setSelectedProduct(e.target.value);
  };

  const handleReasonChange = (e) => {
    setExchangeReason(e.target.value);
  };

  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setContactInfo({
      ...contactInfo,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Exchange Request Submitted:', { selectedProduct, exchangeReason, contactInfo });
  };

  return (
    <div className="exchange-container" style={styles.container}>
      <h1 style={styles.heading}>Request an Exchange</h1>
      <p style={styles.text}>We’re sorry that something went wrong! Please fill out the form below to initiate your exchange request.</p>

      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputGroup}>
          <label htmlFor="product" style={styles.label}>Select Product</label>
          <select
            id="product"
            name="product"
            value={selectedProduct}
            onChange={handleProductChange}
            style={styles.select}
          >
            <option value="">Choose a product</option>
            <option value="product1">Product 1</option>
            <option value="product2">Product 2</option>
            <option value="product3">Product 3</option>
          </select>
        </div>

        <div style={styles.inputGroup}>
          <label htmlFor="reason" style={styles.label}>Reason for Exchange</label>
          <textarea
            id="reason"
            name="reason"
            value={exchangeReason}
            onChange={handleReasonChange}
            style={styles.textarea}
            placeholder="Please describe why you want to exchange the product."
          />
        </div>

        <div style={styles.inputGroup}>
          <label htmlFor="name" style={styles.label}>Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={contactInfo.name}
            onChange={handleContactChange}
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
            value={contactInfo.email}
            onChange={handleContactChange}
            style={styles.input}
            placeholder="Enter your email"
          />
        </div>

        <div style={styles.inputGroup}>
          <label htmlFor="orderNumber" style={styles.label}>Order Number</label>
          <input
            type="text"
            id="orderNumber"
            name="orderNumber"
            value={contactInfo.orderNumber}
            onChange={handleContactChange}
            style={styles.input}
            placeholder="Enter your order number"
          />
        </div>

        <button type="submit" style={styles.submitButton}>Submit Exchange Request</button>
      </form>

      <div style={styles.contactInfo}>
        <h3 style={styles.contactHeading}>Need Assistance?</h3>
        <p style={styles.contactText}>For any questions regarding your exchange, please reach out to our customer support at:</p>
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
    backgroundColor: '#f9f9f9',
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
  select: {
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
export default Exchange
