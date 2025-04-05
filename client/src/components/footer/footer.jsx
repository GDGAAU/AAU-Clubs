import React from "react";
import styles from "./footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div>
            <div className={styles.main}>
                <div className={styles.left}>
                    <h2>AAU Clubs</h2>
                    <div className={styles.links}>
                        <li><a href="#">Home</a></li>|
                        <li><a href="#">Events</a></li>|
                        <li><a href="#">Clubs</a></li>|
                        <li><a href="#">Leaders</a></li>|
                        <li><a href="#">About</a></li>
                    </div>
                </div>
                <div className={styles.socials}>
                    <FontAwesomeIcon icon="fa-brands fa-instagram" />
                    <FontAwesomeIcon icon="fa-brands fa-x" />
                    <FontAwesomeIcon icon="fa-brands fa-facebook" />
                    <FontAwesomeIcon icon={faTwitter} />
                </div>
            </div>
            <div className={styles.bottom}>
                <div className={styles.madeby}>
                    <p>Proudly made by Xerxis </p>
                </div>
                <div className={styles.copyright}>
                    <p> &copy; 2025 AAU Clubs. </p>
                </div>
            </div>
        </div>
    );
} 

export default Footer;