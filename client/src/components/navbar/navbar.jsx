import React from "react";
import styles from './navbar.module.css';

const NavBar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.nav}>
                <div className={styles.logo}>
                    <h2>AAU Clubs</h2>
                </div>
                <div className={styles.links}>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Events</a></li>
                    <li><a href="#">Clubs</a></li>
                    <li><a href="#">Leaders</a></li>
                    <li><a href="#">About</a></li>
                </div>
            </div>
            <div className={styles.buttons}>
                <p>Log in</p>
                <p className={styles.signin}>SIGN UP</p>
            </div>
        </div>
    );
};

export default NavBar;