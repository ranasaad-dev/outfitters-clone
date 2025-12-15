import React from 'react'

function Work() {
  return (
    <div className="work-with-us-container" style={styles.container}>
      <h1 style={styles.heading}>Work With Us</h1>
      <p style={styles.text}>We're always looking for passionate individuals to join our team. If you're excited about making a difference, check out our open positions below!</p>

      <div style={styles.section}>
        <h2 style={styles.subheading}>Why Work With Us?</h2>
        <p style={styles.text}>
          At our company, we believe in fostering a positive and inclusive work environment. We offer great benefits, career growth opportunities, and a chance to make an impact in the e-commerce space.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.subheading}>Current Openings</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>Software Engineer</li>
          <li style={styles.listItem}>Product Manager</li>
          <li style={styles.listItem}>Customer Support Representative</li>
          <li style={styles.listItem}>Marketing Specialist</li>
        </ul>
      </div>

      <div style={styles.section}>
        <h2 style={styles.subheading}>What We're Looking For</h2>
        <p style={styles.text}>
          We are looking for individuals who are passionate, driven, and thrive in a collaborative environment. You should be excited about innovation and ready to contribute to a fast-paced, dynamic team.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.subheading}>How to Apply</h2>
        <p style={styles.text}>Ready to join our team? Submit your resume and cover letter to <a href="mailto:careers@ecommerce.com" style={styles.link}>careers@ecommerce.com</a>.</p>
        <p style={styles.text}>Please specify the position you're applying for in the subject line.</p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.subheading}>Our Values</h2>
        <ul style={styles.valuesList}>
          <li style={styles.valuesItem}>Integrity</li>
          <li style={styles.valuesItem}>Innovation</li>
          <li style={styles.valuesItem}>Customer Focus</li>
          <li style={styles.valuesItem}>Teamwork</li>
        </ul>
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
  link: {
    color: '#007BFF',
    textDecoration: 'none',
  },
  valuesList: {
    paddingLeft: '20px',
    fontSize: '1rem',
    lineHeight: '1.6',
    color: '#555',
  },
  valuesItem: {
    marginBottom: '0.5rem',
  },
};

export default Work
