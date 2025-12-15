import React from 'react'

function Retail() {
 return (
    <div className="retail-container" style={styles.container}>
      <h1 style={styles.heading}>Retailer Partner Program</h1>
      <p style={styles.text}>Join our growing network of retail partners and offer our products in your store!</p>

      <div style={styles.section}>
        <h2 style={styles.subheading}>Why Partner with Us?</h2>
        <p style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula velit in nisl feugiat, nec tempus lacus ullamcorper. Nam ac dictum neque. Sed sed orci a ligula suscipit cursus eget et eros.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.subheading}>How It Works</h2>
        <ol style={styles.list}>
          <li style={styles.listItem}>Sign up to become a retail partner</li>
          <li style={styles.listItem}>Choose the products you want to sell</li>
          <li style={styles.listItem}>Start receiving shipments directly to your store</li>
          <li style={styles.listItem}>Promote our products and increase your sales</li>
        </ol>
      </div>

      <div style={styles.section}>
        <h2 style={styles.subheading}>Benefits of Being a Retail Partner</h2>
        <ul style={styles.benefitsList}>
          <li style={styles.benefitsItem}>Competitive wholesale pricing</li>
          <li style={styles.benefitsItem}>Exclusive access to new products</li>
          <li style={styles.benefitsItem}>Dedicated account manager</li>
          <li style={styles.benefitsItem}>Marketing materials and support</li>
        </ul>
      </div>

      <div style={styles.section}>
        <h2 style={styles.subheading}>Ready to Join?</h2>
        <p style={styles.text}>
          Donec mollis, orci id volutpat tincidunt, dui ante viverra ligula, et tincidunt libero purus ac leo. Fill out the form below to get started!
        </p>

        <form style={styles.form}>
          <div style={styles.inputGroup}>
            <label htmlFor="storeName" style={styles.label}>Store Name</label>
            <input type="text" id="storeName" style={styles.input} placeholder="Enter your store name" />
          </div>

          <div style={styles.inputGroup}>
            <label htmlFor="email" style={styles.label}>Your Email</label>
            <input type="email" id="email" style={styles.input} placeholder="Enter your email" />
          </div>

          <div style={styles.inputGroup}>
            <label htmlFor="phone" style={styles.label}>Phone Number</label>
            <input type="text" id="phone" style={styles.input} placeholder="Enter your phone number" />
          </div>

          <button onClick={()=>alert("You are a retailer noe.")} type="submit" style={styles.submitButton}>Apply Now</button>
        </form>
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
    textAlign: 'center',
    fontSize: '1.1rem',
    color: '#666',
    marginBottom: '2rem',
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
  benefitsList: {
    paddingLeft: '20px',
    fontSize: '1rem',
    lineHeight: '1.6',
    color: '#555',
  },
  benefitsItem: {
    marginBottom: '0.5rem',
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
};

export default Retail
