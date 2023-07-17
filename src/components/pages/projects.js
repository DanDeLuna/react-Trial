import React from "react";
import PasswordGen from "../../asset/PaawordGen.png";
import Notetaker from "../../asset/Notetakerapp.png";
import ForecastApp from "../../asset/forecastAPP.png";

import "../../stylesheet/portfilio.css";

const styles = {
  h2: {
    textAlign: "center",
  },
  space: {
    paddingLeft: "0.5rem",
    paddingRight: "0.5rem",
  },
  header: {
    textAlign: "center",
    paddingBottom: "0.15rem",
  },
  repo: {
    textAlign: "center",
    color: "#0000FF",
    paddingBottom: "0.15rem",
  },};

export default function Portfolio() {
  return (
    <section>
      <h2 style={styles.h2}>Portfolio</h2>
      <div className="container">
        <div className="row justify-content-center">

          <section className="card col-sm-3 p-0 m-2">
            <a>
              <img
                className="card-img-top"
                src={PasswordGen}
                alt="screenshot of password generator app"
              />
              <header>
                <h3 style={styles.header}>Password generator</h3>
              </header>
            </a>
            <a
              style={styles.repo}
              href="https://github.com/DanDeLuna/PasswordGeneratorHomework3/tree/main"
              target="blank"
            >
              GitHub Repository
            </a>
            <p style={styles.space}>
              This is app generates a radom password after answering a few questions.
            </p>
          </section>

        </div>

        <div className="row justify-content-center">
          <section className="card col-sm-3 p-0 m-2">
            <a
              href="https://github.com/DanDeLuna/ForecastApp/deployments/activity_log?environment=github-pages"
              target="blank"
            >
              <img
                className="card-img-top"
                src={ForecastApp}
                alt="screenshot of forecast app"
              />
              <header>
                <h3 style={styles.header}>Social Network API</h3>
              </header>
            </a>
            <a
              style={styles.repo}
              href="https://github.com/DanDeLuna/ForecastApp"
              target="blank"
            >
              GitHub Repository
            </a>
            <p style={styles.space}>
              This is a Forecast app that is connected to a weather api back-end. This app shows weather in what ever searched city.
            </p>
          </section>

          <section className="card col-sm-3 p-0 m-2">
            <a
              target="blank"
            >
              <img
                className="card-img-top"
                src={Notetaker}
                alt="screenshot of Note Taker app "
              />
              <header>
                <h3 style={styles.header}>Tech Blog</h3>
              </header>
            </a>
            <a
              style={styles.repo}
              href="https://github.com/DanDeLuna/IpadNotebook"
              target="blank"
            >
              GitHub Repository
            </a>
            <p style={styles.space}>
              This is a Note taker app. This app lets you add and delete notes. 
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}