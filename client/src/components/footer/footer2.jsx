import React from "react";
import styles from "./footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTelegram, faXTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';

const FooterOne = () => {
    return (
        <div className={styles.footer}>
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
                    <FontAwesomeIcon icon={faInstagram} size="xl"/>
                    <FontAwesomeIcon icon={faFacebook} size="xl"/>
                    <FontAwesomeIcon icon={faTelegram} size="xl"/>
                    <FontAwesomeIcon icon={faXTwitter} size="xl"/>
                </div>
            </div>
            <hr />
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

export default FooterOne;