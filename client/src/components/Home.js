import React, { useState } from "react";

import Trade from "./trade/Trade";
import OfferForm from "../components/trade/offerForm/OfferForm";
import Profile from "./profile/Profile";

import trade from "../public/images/trade.png";

export default function Home({ user }) {
    const [homeNav, setHomeNav] = useState("offer-form");

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
                        className='home--tabs-tab selected auth-link'>
                        my Garden
                    </div>
                    <div
                        onClick={navClick}
                        id='trade'
                        className='home--tabs-tab not-selected auth-link'>
                        Trade
                        <img src={trade} alt='trade' className='icons-img' />
                    </div>
                    <div
                        onClick={navClick}
                        id='offer-form'
                        className='home--tabs-tab not-selected auth-link'>
                        Create an Offer
                    </div>
                </div>
                <div className='home--content'>
                    {homeNav === "trade" ? (
                        <Trade user={user} />
                    ) : homeNav === "offer-form" ? (
                        <OfferForm user={user} />
                    ) : (
                        <Profile user={user} />
                    )}
                </div>
            </div>
        </>
    );
}
