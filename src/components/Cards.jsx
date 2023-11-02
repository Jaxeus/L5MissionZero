import React from "react";
import styles from "./Cards.module.css";

export default function Cards(props) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.imageContainer}>
        {/* Props linked upward to CardSection */}
        <img alt="massage-pic" src={props.source} />
      </div>
      <div className={styles.textContainer}>
        <h2>{props.textOne}</h2>
        <h3>{props.textTwo}</h3>
      </div>
    </div>
  );
}
