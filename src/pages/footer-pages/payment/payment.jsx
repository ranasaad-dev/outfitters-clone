import React from 'react'

function Payment() {
 return (
    <div className="payments-container" style={styles.container}>
      <h1 style={styles.heading}>Payment Methods</h1>
      <p style={styles.text}>We offer a variety of secure payment options for your convenience.</p>

      <div style={styles.paymentMethod}>
        <h2 style={styles.methodHeading}>Credit & Debit Cards</h2>
        <p style={styles.text}>
          We accept all major credit and debit cards, including Visa, MasterCard, and American Express. Your payment details are securely processed.
        </p>
      </div>

      <div style={styles.paymentMethod}>
        <h2 style={styles.methodHeading}>PayPal</h2>
        <p style={styles.text}>
          Pay with your PayPal account for a fast and secure checkout experience. Simply log in to your PayPal account during checkout.
        </p>
      </div>

      <div style={styles.paymentMethod}>
        <h2 style={styles.methodHeading}>Apple Pay</h2>
        <p style={styles.text}>
          If you're using a supported device, Apple Pay lets you complete your purchase securely with just a tap.
        </p>
      </div>

      <div style={styles.paymentMethod}>
        <h2 style={styles.methodHeading}>Google Pay</h2>
        <p style={styles.text}>
          Google Pay offers a quick and secure payment option for your online shopping. Simply use your Google account during checkout.
        </p>
      </div>

      <div style={styles.paymentMethod}>
        <h2 style={styles.methodHeading}>Bank Transfer</h2>
        <p style={styles.text}>
          We also accept direct bank transfers for larger orders. Please contact our support team for more details.
        </p>
      </div>

    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
    fontFamily: 'Arial, sans-serif',
    color: '#333',
    backgroundColor: '#f9f9f9',
  },
  heading: {
    textAlign: 'center',
    fontSize: '2.5rem',
    marginBottom: '1rem',
  },
  text: {
    fontSize: '1rem',
    lineHeight: '1.6',
    color: '#555',
  },
  paymentMethod: {
    marginBottom: '1.5rem',
  },
  methodHeading: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
  },
};


export default Payment
