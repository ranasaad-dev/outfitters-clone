import React from 'react'

function Shipping() {
 return (
    <div className="shipping-container" style={styles.container}>
      <h1 style={styles.heading}>Shipping Information</h1>
      <p style={styles.text}>We aim to deliver your orders as quickly and securely as possible. Here's everything you need to know about our shipping process.</p>

      <div style={styles.section}>
        <h2 style={styles.subheading}>Shipping Methods</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}><strong>Standard Shipping:</strong> 3-5 business days</li>
          <li style={styles.listItem}><strong>Expedited Shipping:</strong> 1-2 business days</li>
          <li style={styles.listItem}><strong>Overnight Shipping:</strong> Next-day delivery</li>
        </ul>
      </div>

      <div style={styles.section}>
        <h2 style={styles.subheading}>Shipping Costs</h2>
        <p style={styles.text}>Shipping costs are calculated at checkout based on your delivery address and the shipping method you choose. We offer free standard shipping on orders over $50!</p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.subheading}>Order Tracking</h2>
        <p style={styles.text}>Once your order has shipped, we will send you an email with a tracking number. You can use this number to track the progress of your shipment.</p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.subheading}>International Shipping</h2>
        <p style={styles.text}>We offer international shipping to most countries. Shipping fees and delivery times will vary depending on the destination. Please contact our support team for specific rates and delivery times to your country.</p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.subheading}>Shipping Restrictions</h2>
        <p style={styles.text}>Some items may be restricted from being shipped to certain locations due to local regulations. We will notify you if this applies to any items in your order.</p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.subheading}>Need Assistance?</h2>
        <p style={styles.text}>If you have any questions about your shipping options, please contact our customer support team:</p>
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
    maxWidth: '800px',
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
    textAlign: 'left',
    fontSize: '1.1rem',
    color: '#666',
    marginBottom: '1.5rem',
  },
  section: {
    marginBottom: '2rem',
  },
  subheading: {
    fontSize: '1.5rem',
    fontWeight: '600',
    marginBottom: '1rem',
    color: '#333',
  },
  list: {
    paddingLeft: '20px',
    fontSize: '1rem',
    lineHeight: '1.6',
    color: '#555',
  },
  listItem: {
    marginBottom: '0.5rem',
  },
  contactText: {
    fontSize: '1rem',
    color: '#555',
  },
};

export default Shipping
