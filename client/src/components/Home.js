import React, { useState } from "react";

import Trade from "./trade/Trade";
import OfferForm from "./trade/OfferForm";
import Profile from "./profile/Profile";

export default function Home({ user }) {
    const [homeNav, setHomeNav] = useState("profile");

    const navClick = (e) => {
        switch (e.target.id) {
            case "trade":
                setHomeNav("trade");
                break;
            case "offer-form":
                setHomeNav("offer-form");
                break;
            case "profile":
                setHomeNav("profile");
                break;
            default:
                setHomeNav("offer-form");
                break;
        }
        document.querySelectorAll(".home--tabs-tab").forEach((item) => {
            if (item.id !== e.target.id) {
                item.classList.add("not-selected");
                item.classList.remove("selected");
            } else {
                item.classList.remove("not-selected");
                item.classList.add("selected");
            }
        });
    };

    return (
        <>
            <div className='home'>
                <div className='home--tabs'>
                    <div
                        onClick={navClick}
                        id='profile'
                        className='home--tabs-tab selected'>
                        my Garden
                    </div>
                    <div
                        onClick={navClick}
                        id='trade'
                        className='home--tabs-tab not-selected'>
                        Trade
                    </div>
                    <div
                        onClick={navClick}
                        id='offerForm'
                        className='home--tabs-tab not-selected'>
                        OfferForm
                    </div>
                </div>
                <div className='home--content'>
                    {homeNav === "trade" ? (
                        <Trade />
                    ) : homeNav === "offerForm" ? (
                        <OfferForm />
                    ) : (
                        <Profile user={user} />
                    )}
                </div>
            </div>
        </>
    );
}
