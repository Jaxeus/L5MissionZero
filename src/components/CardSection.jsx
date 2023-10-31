import React from "react";
import styles from "./CardSection.module.css";
import Cards from "./Cards";
import reflexologyMassage from "../assets/images/reflexology.jpg";
import oilMassage from "../assets/images/oil-massage.jpg";
import traditionalMassage from "../assets/images/traditional-resized.jpg";

export default function CardSection() {
  return (
    <div className={styles.container}>
      <Cards
        textOne="Traditional Massage"
        textTwo="Deep tissue and stretching"
        source={traditionalMassage}
      />
      <Cards
        textOne="Reflexology Massage"
        textTwo="For health and circulation"
        source={reflexologyMassage}
      />
      <Cards
        textOne="Oil Massage"
        textTwo="Lavender or Eucalyptus"
        source={oilMassage}
      />
    </div>
  );
}
