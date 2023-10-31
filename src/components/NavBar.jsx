import React from "react";
import styles from "./NavBar.module.css";
import circle from "../assets/images/unwind.jpg";

export default function NavBar() {
  return (
    <div className={styles.navContainer}>
      <div className={styles.leftContainer}>
        <img alt="unwind" src={circle} />
        <h3>My Company</h3>
      </div>
      <div className={styles.rightContainer}>
        <button className={styles.menuBtn}>Menu1</button>
        <button className={styles.menuBtn}>Menu2</button>
        <button className={styles.menuBtn}>Menu3</button>
        <button className={styles.loginBtn}>Login</button>
      </div>
    </div>
  );
}
