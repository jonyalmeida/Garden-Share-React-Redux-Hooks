import React, { useState } from "react";

import chicken from "./../../public/images/e91e3704962a9a62d44fcfdca5a5d23e.jpg";
import dottedLine from "./../../public/images/dotted-line.png";
import produce from "./../../public/images/bag-of-produce.svg";
import cog from "./../../public/images/cog-preferences.svg";

import Messages from "./messages/Messages";
import MyOffers from "./MyOffers";
import Preferences from "./Preferences";

export default function Profile({ user }) {
    const [contentNav, setContentNav] = useState("messages");

    const clickContentNav = (e) => {
        switch (e.target.id) {
            case "messages":
                setContentNav("messages");
                break;
            case "my-offers":
                setContentNav("my-offers");
                break;
            case "preferences":
                setContentNav("preferences");
                break;
            default:
                setContentNav("messages");
                break;
        }
    };

    return (
        <>
            {user.id && (
                <div className='profile'>
                    <div className='profile--dashboard'>
                        <div className='profile--dashboard-personal'>
                            <img
                                className='profile--dashboard-personal_img'
                                src={chicken}
                                alt='profile img'
                            />
                            <h3 className='profile--dashboard-personal_title'>
                                {user.firstName}
                            </h3>
                            <p>
                                {user.address.split(",").map((line, idx) => (
                                    <span key={idx}>
                                        {line},<br />
                                    </span>
                                ))}
                                <br />
                                Grower, Farmer, Consumer
                            </p>
                        </div>
                        <div className='profile--dashboard-nav'>
                            <div
                                onClick={clickContentNav}
                                id='messages'
                                className='profile--dashboard-nav_item'>
                                Messages{" "}
                                <img
                                    src={dottedLine}
                                    alt='dotted line'
                                    className='icons-img'
                                />
                            </div>
                            <div
                                onClick={clickContentNav}
                                id='my-offers'
                                className='profile--dashboard-nav_item'>
                                My offers{" "}
                                <img
                                    src={produce}
                                    alt='bag of produce'
                                    className='icons-img'
                                />
                            </div>
                            <div
                                onClick={clickContentNav}
                                id='preferences'
                                className='profile--dashboard-nav_item'>
                                Preferences{" "}
                                <img
                                    style={{ width: "25px", height: "25px" }}
                                    src={cog}
                                    alt='preferences'
                                    className='icons-img'
                                />
                            </div>
                        </div>
                    </div>
                    <div className='profile--content'>
                        {contentNav === "messages" ? (
                            <Messages user={user} />
                        ) : contentNav === "my-offers" ? (
                            <MyOffers user={user} />
                        ) : contentNav === "preferences" ? (
                            <Preferences />
                        ) : null}
                    </div>
                </div>
            )}
        </>
    );
}
