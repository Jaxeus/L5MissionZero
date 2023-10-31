import React from "react";
import styles from "./Main.module.css";
import mainImage from "../assets/images/relaxation.jpg";

export default function Main() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.topContainer}>
        <h1>
          Unwind <br /> Thai Massage
        </h1>
        <img alt="massage" src={mainImage} />
      </div>
      <div className={styles.bottomContainer}>
        <form>
          <input
            type="search"
            className={styles.searchBar}
            name="search"
          ></input>
          <button type="submit">Search</button>
        </form>
      </div>
    </div>
  );
}
