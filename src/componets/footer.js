import React from "react";
import Github from "../img/github.png";
import LinkedIn from "../img/linkedin.png";




const styles = {
  icons: {
    borderRadius: '25%',
    filter: 'opacity(100%)',
    margin: '5px',
  },
};





function footer() {
  return (
    <footer className="text-center">
      <div className="container p-4">
        <section className="mb-4">
          
        <a href="https://www.linkedin.com/in/daniel-de-luna-a1b1a3209/" target="blank">
          <img style={styles.icons} src={LinkedIn} alt="linkedin logon" />
          </a>
          <a href="https://github.com/DanDeLuna" target="blank">
            <img style={styles.icons} src={Github} alt="github logo" />
          </a>
        </section>
      </div>
    </footer>
  );
}

export default footer;