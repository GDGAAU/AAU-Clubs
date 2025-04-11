import React from "react";
import style from './footer.module.css';

const Footer = () => {
    return (
        <div className={style.container}>
            <div className={style.join}>
                <h3>Ready to Join a Club or Start Your Own?</h3>
                <p>Become part of AAU Clubs community and start your journey today.</p>
                <div className={style.button}>
                    <button>Browse Clubs</button>
                    <button>Sign Up Now</button>
                </div>
            </div>
            <div className={style.footer}>
                <div className={style.desc}>
                    <h2>AAU Clubs</h2>
                    <p>Your gateway to all student club and activities at Addis Ababa University.</p>
                    {/* socials */}
                </div>
                <div className={style.links}>
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="">All Clubs</a></li>
                        <li><a href="">Upcoming Events</a></li>
                        <li><a href="">About Us</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>
                </div>
                <div className={style.categories}>
                    <h3>Club Categories</h3>
                    <ul>
                        <li><a href="">Acadamic</a></li>
                        <li><a href="">Sports</a></li>
                        <li><a href="">Cultural</a></li>
                        <li><a href="">Technology</a></li>
                        <li><a href="">Volenteer</a></li>
                    </ul>
                </div>
                <div className={style.contact}>
                    <h3>Contact Us</h3>
                    <p>aauclubs@aau.edu.et</p>
                    <p>Addis Ababa University. King George VI street. Addis Ababa, Ethiopia. </p>
                </div>
            </div>
            <div className={style.copyright}>
                <p> &copy; 2025 AAU Clubs. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;