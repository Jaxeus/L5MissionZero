import React from "react";
import { useState } from "react";
import styles from "./NavTry.module.css";
import circle from "../assets/images/unwind.jpg";

export default function NavTry() {
  // useStates
  // This state used to accompany the hamburger icon onClick event - so when the Nav hamburger icon button is clicked, then along with the function below (hamburgerClick) it changes the dropDownMenu to !itself - the value is initially false - whether the value is true or false changes the className of the dropDownContainer for separate styling - when the value is false, the styling of the dropDownContainer is display: none; whereas when the value of the state is true, it is set to position: absolute; with different stylings to drop down a div with four buttons etc.
  const [dropDownMenu, setDropDownMenu] = useState(false);

  // Function to handle the clicking of the hamburger icon to switch the state to false if true or true if false
  function hamburgerClick(event) {
    console.log(event.target.id);
    if ((event.target.id = "drop-down-icon")) {
      setDropDownMenu(!dropDownMenu);
    }
  }
  console.log(dropDownMenu);

  // JSX - All of this is for a Nav Bar with hamburger icon that is only present at a screen with max-width 583px
  return (
    <div className={styles.navTryContainer} id="top">
      <div className={styles.leftContainer}>
        <img alt="unwind" src={circle} />
        <h3>Unwind Thai Massage</h3>
      </div>
      <div className={styles.rightContainer}>
        {/* Hamburger Icon made into a button - of critical importance */}
        <i
          id="drop-down-icon"
          className={`fa fa-bars ${styles.hamburgerIcon}`}
          onClick={hamburgerClick}
        ></i>
      </div>

      {/* Start of drop-down menu that drops down if hamburger icon turns state to true - and if max-width of screen is 583px */}
      <div
        className={`${styles.dropDownContainer} ${
          dropDownMenu ? styles.dropDown : styles.notDropDown
        }`}
      >
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
      {/* End of drop-down menu container */}
    </div>
  );
}
