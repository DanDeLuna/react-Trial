import React from "react";
//import ResumedanDeluna from "../../asset/";

const styles = {
  h2: {
    textAlign: "center",
  },
  link: {
    color: "#0000FF",
  },
  space: {
    paddingLeft: "0.5rem",
    paddingRight: "0.5rem",
  },
  h3: {
    paddingTop: "0.75rem",
  },
};

export default function Resume() {
  return (
    <div style={styles.space}>
      <h2 style={styles.h2}>Resume</h2>
      <p style={styles.h2}>

      </p>
      <h3 style={styles.h3}> Full-stack Skills</h3>
      <p>
        <h4>Front-End</h4>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>JQuery</li>
          <li>Bootstrap</li>
          <li>React</li>
        </ul>
      </p>
      <p>
        <h4>Back-End</h4>
        <ul>
          <li>MySQL</li>
          <li>Sequelize</li>
          <li>MongoDB</li>
          <li>Mongoose</li>
          <li>Express js</li>
          <li>Nodejs</li>
          <li>API</li>
        </ul>
      </p>
      <h3 style={styles.h3}>Work Experience</h3>
      <p>
        <h4>Field QA</h4>
        <h5>Dish Wireless, CO </h5>
        (10/2022 – Present)
        <ul>
          <li>
          Test devices , apps, and websites for our company
          </li>
          <li>
            Writing test cases and test planning 
          </li>
          <li>
          Writing steps on how to reproduce issues and track defects
          </li>
        </ul>
      </p>
      <p>
        <h4>Business Operations Analyst II </h4>
        <h5>Dish Wireless, CO </h5>
        (6/2014- 4/2016)
        <ul>
          <li>
           Point of contact for billing platform  
          </li>
          <li>
           Audit payments for all lines of business
          </li>
          <li>
          Writing process docs for Audits
          </li>
        </ul>
      </p>
      <h3 style={styles.h3}>Education</h3>
      <p>
        <h4>Coding Bootcamp Certificate of Completion (8/2023)</h4>
        University of Denver
      </p>
      <p>
        <h4>Double Major in International Business and Information Systems (12/21)</h4>
        University of Colorado Denver, Denver, CO
      </p>
    </div>
  );
}