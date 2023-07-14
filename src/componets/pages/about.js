import React from 'react';
import DanielDeluna from "../../asset/dandeluna.jpg";

const styles = {
  danieldeluna: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    maxHeight: '200px',
    maxWidth: '200px',
    borderRadius: '25%',
    border: '3px solid #58C2C7',
    filter: 'opacity(100%)',
    cursor: 'default',
  },
  h2: {
    textAlign: 'center',
  },
  space: {
    paddingLeft: '0.5rem',
    paddingRight: '0.5rem',
  },
};

export default function About() {
  return (
    <div style={styles.space}>
      <h2 style={styles.h2}>About Me</h2>
      <div>
      <img style={styles.danieldeluna} src={DanielDeluna} alt="Dan De Luna" />
      </div>
      <p>
        As a student, I am an ambitious person with a positive mindset. I want to be part of a team that wants to WIN!!
      </p>
      <p>
        I am currently a Field QA in the Telecom industry with a passion for testing and finding issues in app, devices, and performance.
      </p>
      <p>
       
      </p>
      <p>
        My first job was landscaping throughput highschool.</p>
    </div>
  );
}