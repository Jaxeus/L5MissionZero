import React from "react";
import styles from "./NavTry.module.css";
import circle from "../assets/images/unwind.jpg";

export default function NavTry() {
  return (
    <div className={styles.navTryContainer} id="top">
      <div className={styles.leftContainer}>
        <img alt="unwind" src={circle} />
        <h3>Unwind Thai Massage</h3>
      </div>
      <div className={styles.rightContainer}>
        <i className={`fa fa-bars ${styles.hamburgerIcon}`}></i>
      </div>
      <div className={styles.dropDown}>
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
