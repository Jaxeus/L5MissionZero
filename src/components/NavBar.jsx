import React from "react";
import styles from "./NavBar.module.css";
import circle from "../assets/images/unwind.jpg";

export default function NavBar() {
  return (
    <div className={styles.navContainer} id="top">
      {/* ID for menu btn href */}

      {/* Left container for candle image and company name */}
      <div className={styles.leftContainer}>
        <img alt="unwind" src={circle} />
        <h3>Unwind Thai Massage</h3>
      </div>

      {/* Right container for menu buttons and login button */}
      <div className={styles.rightContainer}>
        {/* Menu buttons */}
        <button className={styles.menuBtn}>
          <a href="#top">Home</a>
        </button>
        <button className={styles.menuBtn}>
          <a href="#treatments-section">Treatments</a>
        </button>
        <button className={styles.menuBtn}>
          <a href="#about-section">About</a>
        </button>
        {/* Login button */}
        <button className={styles.loginBtn}>Login</button>
      </div>
    </div>
  );
}
