import React from "react";
import styles from "./CardSection.module.css";
import Cards from "./Cards";
import reflexologyMassage from "../assets/images/reflexology.jpg";
import oilMassage from "../assets/images/oil-massage.jpg";
import traditionalMassage from "../assets/images/traditional-resized.jpg";

export default function CardSection() {
  return (
    <div className={styles.container}>
      <Cards textOne="Boo" textTwo="Woo" source={traditionalMassage} />
      <Cards textOne="Bee" textTwo="Wee" source={reflexologyMassage} />
      <Cards textOne="Baa" textTwo="Waa" source={oilMassage} />
    </div>
  );
}
