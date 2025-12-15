import React from 'react'

function About() {
  return (
    <div className="about-us-container" style={styles.container}>
      <h1 style={styles.heading}>About Us</h1>
      <p style={styles.subheading}>Your trusted partner in online shopping</p>
      <section style={styles.section}>
        <h2 style={styles.subheading}>Our Story</h2>
        <p style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula velit in nisl feugiat, nec tempus lacus ullamcorper. Nam ac dictum neque. Sed sed orci a ligula suscipit cursus eget et eros. Aliquam erat volutpat. Nulla ut fermentum nisi, et ullamcorper mi. Vivamus varius velit sed felis facilisis, in pharetra odio egestas.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subheading}>What We Do</h2>
        <p style={styles.text}>
          Integer nec lorem et ipsum hendrerit fermentum. Cras tincidunt dui in leo volutpat, a laoreet odio pellentesque. Mauris nec justo felis. Fusce lobortis ex ut felis congue pretium. Vivamus auctor nisl in dui vulputate, sed convallis dui congue. Quisque fringilla eros neque, eu lobortis leo tincidunt sit amet.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subheading}>Our Mission</h2>
        <p style={styles.text}>
          Curabitur id ante vel justo gravida aliquet sit amet eget tortor. Donec ac justo in nunc dictum malesuada vel ut justo. Proin vitae odio vitae ante gravida gravida. Integer ornare gravida odio, id cursus ligula volutpat ac. Nullam euismod malesuada libero, nec tincidunt ante placerat et.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subheading}>Join Us Today!</h2>
        <p style={styles.text}>
          Mauris maximus, ante ac venenatis scelerisque, metus ipsum posuere ante, non volutpat dui tortor eu arcu. Sed sagittis, dui vitae tempus interdum, urna neque pretium elit, ac vulputate libero purus et libero. Integer gravida convallis felis, at sodales lorem volutpat id.
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
}
  


export default About
