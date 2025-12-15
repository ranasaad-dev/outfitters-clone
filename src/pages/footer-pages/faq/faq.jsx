import React from 'react'

function Faq() {

    return (
    <div className="faq-container" style={styles.container}>
      <h1 style={styles.heading}>Frequently Asked Questions</h1>

      <div style={styles.faqItem}>
        <h2 style={styles.question}>What is your return policy?</h2>
        <p style={styles.answer}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac bibendum urna. Nulla facilisi. We offer a 30-day return policy on most items.
        </p>
      </div>

      <div style={styles.faqItem}>
        <h2 style={styles.question}>How long does shipping take?</h2>
        <p style={styles.answer}>
          Cras sollicitudin lorem ut nisl sollicitudin, at lobortis orci fermentum. Shipping usually takes 3-5 business days depending on your location.
        </p>
      </div>

      <div style={styles.faqItem}>
        <h2 style={styles.question}>Do you ship internationally?</h2>
        <p style={styles.answer}>
          Donec mollis, orci id volutpat tincidunt, dui ante viverra ligula, et tincidunt libero purus ac leo. Yes, we offer international shipping to many countries.
        </p>
      </div>

      <div style={styles.faqItem}>
        <h2 style={styles.question}>How can I track my order?</h2>
        <p style={styles.answer}>
          Vestibulum eget mi ac ante feugiat maximus. You will receive a tracking number via email once your order has shipped.
        </p>
      </div>

      <div style={styles.faqItem}>
        <h2 style={styles.question}>Can I change my order after placing it?</h2>
        <p style={styles.answer}>
          Quisque vel libero id purus ullamcorper finibus. Unfortunately, we cannot make changes to an order once it has been placed. Please double-check your details before confirming.
        </p>
      </div>

      <div style={styles.faqItem}>
        <h2 style={styles.question}>How do I contact customer support?</h2>
        <p style={styles.answer}>
          Aenean scelerisque mauris id odio rhoncus, at varius leo consequat. You can reach our support team via the contact page or by emailing support@ecommerce.com.
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
  faqItem: {
    marginBottom: '1.5rem',
  },
  question: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
  },
  answer: {
    fontSize: '1rem',
    lineHeight: '1.6',
    color: '#555',
  },
};
export default Faq
