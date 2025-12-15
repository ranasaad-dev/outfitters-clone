import React from 'react'

function how_to_buy() {
 return (
    <div className="how-to-buy-container" style={styles.container}>
      <h1 style={styles.heading}>How to Buy</h1>
      <p style={styles.subheading}>Shopping made easy and convenient</p>
      
      <section style={styles.section}>
        <h2 style={styles.subheading}>Step 1: Browse Our Products</h2>
        <p style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id malesuada ligula. Vivamus ut nunc nec ligula pretium iaculis. Aliquam erat volutpat. Browse through our wide variety of products and pick the ones you like.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subheading}>Step 2: Add to Cart</h2>
        <p style={styles.text}>
          Sed tempus sapien et orci iaculis, at faucibus odio tincidunt. Cras ut leo quis arcu vehicula euismod. After you've found the perfect items, simply click the "Add to Cart" button to start your purchase.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subheading}>Step 3: Review Your Order</h2>
        <p style={styles.text}>
          Nulla ac dolor sit amet est consequat laoreet. Donec tincidunt purus a orci varius, vel vestibulum mauris sodales. Make sure to double-check the items in your cart, the quantities, and total price before proceeding to checkout.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subheading}>Step 4: Checkout</h2>
        <p style={styles.text}>
          Ut nec nulla gravida, laoreet sapien vel, iaculis justo. At this step, you'll be prompted to enter your shipping details and payment information. We accept all major credit/debit cards and secure payment gateways.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subheading}>Step 5: Complete Your Purchase</h2>
        <p style={styles.text}>
          Curabitur vitae ante id elit ullamcorper malesuada. After completing your payment, you'll receive an order confirmation via email. Your products will be shipped and delivered to your doorstep in no time!
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subheading}>Need Help?</h2>
        <p style={styles.text}>
          Integer malesuada, purus ac rhoncus maximus, justo felis consectetur mi. If you have any questions or need assistance, feel free to reach out to our customer service team through our support page.
        </p>
      </section>
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
  subheading: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
  },
  section: {
    marginBottom: '2rem',
  },
  text: {
    fontSize: '1rem',
    lineHeight: '1.6',
    color: '#555',
  },
};


export default how_to_buy
