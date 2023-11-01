import React from "react";
import styles from "./NavBar.module.css";
import circle from "../assets/images/unwind.jpg";

export default function NavBar() {
  return (
    <div className={styles.navContainer} id="top">
      <div className={styles.leftContainer}>
        <img alt="unwind" src={circle} />
        <h3>Unwind Thai Massage</h3>
      </div>
      <div className={styles.rightContainer}>
        <button className={styles.menuBtn}>
          <a href="#top">Home</a>
        </button>
        <button className={styles.menuBtn}>
          <a href="#treatments-section">Treatments</a>
        </button>
        <button className={styles.menuBtn}>
          <a href="#about-section">About</a>
        </button>
        <button className={styles.loginBtn}>Login</button>
      </div>
    </div>
  );
}
