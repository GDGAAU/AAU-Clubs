import React from "react";
import style from "./home.module.css"

const Home = () => {
    return (
        <div className={style.container}>
            <div className={style.hero}>
                <div className={style.text}>
                    <h2>Empowering Student Communities at AAU</h2>
                    <p>
                        Welcome to the AAU Clubs — your central platform for discovering, connecting, and 
                        engaging with all university clubs. Explore events, manage your club's activities, 
                        and unite with like-minded peers to make the most of your campus experience.
                    </p>
                    <h3>Join. Collaborate. Thrive</h3>
                </div>
                <div className={style.buttons}>
                    <button>Explore Clubs</button>
                    <button>Upcoming Events</button>
                </div>
            </div>
            <div className={style.image}>
                <img src="/image1.png" alt="image1" />
            </div>
        </div>
    );
};

export default Home;