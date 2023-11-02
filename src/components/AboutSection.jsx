import React from "react";
import styles from "./AboutSection.module.css";

export default function AboutSection() {
  return (
    <div className={styles.aboutContainer} id="about-section">
      {/* ID above for menu btn href */}

      {/* Heading */}
      <div className={styles.headingContainer}>
        <h2>My Story</h2>
      </div>

      {/* Paragraphs of AboutSection info */}
      <ul>
        <li className={styles.listOdd}>
          I am from Isan, the northern part of Thailand that shares the Laotian
          culture
        </li>
        <li className={styles.listEven}>
          Having studied Thai Massage in the heart of Isan, I have been a
          Massage Therapist for over 16 years
        </li>
        <li className={styles.listOdd}>
          I have practised Thai Massage in Thailand, Australia, South Korea, and
          New Zealand
        </li>
        <li className={styles.listEven}>
          I specialised in Traditional Thai Massage and Reflexology, providing a
          wide range of treatments to suit everyone's needs
        </li>
      </ul>
    </div>
  );
}
