"use client";

// package imports
import { useEffect, useState } from "react";

import Link from "next/link";
import Image from "next/image";

// asset imports

// css imports
import "/app/_css/home.css";

// component imports
import UserInterface from "/app/_components/userinterface.js";

export default function Home() {
    const tabsList = [
        {"src": "/home/events/tdsgtavern.png", "alt": "The Dragon's Ground banner", "href": "https://tdgstavern.bladewyrm.dev", "new": true},
        {"src": "/home/events/artificialblade.png", "alt": "ARTIFICIAL BLADE banner", "href": "#", "new": false},
        {"src": "/home/events/undefined.png", "alt": "just testing to make sure this works!!! and it does!!!!", "href": "#", "new": false}
    ];
    
    const tabsLength = tabsList.length - 1;

    const [tabRange, setTabRange] = useState([0, 1, tabsLength]);
    const [animationFlag, setAnimationFlag] = useState("");
    const [animationTimer, setAnimationTimer] = useState(0);

    function tabScroll(current = 0, direction = 1) {
        let tabDestination = current + direction;
        if (tabDestination < 0) tabDestination = tabsLength;
        else if (tabDestination > tabsLength) tabDestination = 0;

        return tabDestination;
    }

    useEffect(() => {
        setTimeout(() => {
            setAnimationTimer(animationTimer + 1);
            console.log(animationTimer);
            if (animationTimer == 9) {
                setAnimationFlag("forward");
            }
            if (animationTimer >= 10) {
                setTabRange([tabScroll(tabRange[0]), tabScroll(tabRange[1]), tabRange[0]]);
                setAnimationFlag("");
                setAnimationTimer(0);
            }
        }, 1000);
    }, [tabRange, animationFlag, animationTimer]);

    return (
        <article id="homescreen">
            <div id="background_container" className="bound">
                <div id="horizon" className="bound" />
                <div id="clouds1" className="bound" />
                <div id="clouds2" className="bound" />
                <div id="clouds3" className="bound" />
            </div>
            <div id="foreground_container" className="bound">
                <div id="player" className="bound">
                    <div id="kyu" />
                    <div id="ren" />
                </div>
            </div>
            <div id="events" className="slideshow">
                <div className="slideshow_content">
                    <Link className={`camo slideshow_next ${animationFlag}`} href={tabsList[tabRange[1]].href} target={`${tabsList[tabRange[1]].new == true ?  "_blank" : ""}`} rel={`${tabsList[tabRange[1]] == true ?  "noopener noreferrer" : ""}`}>
                        <button className="camo">
                            <Image src={tabsList[tabRange[1]].src} fill={true} alt={tabsList[tabRange[1]].alt} />
                        </button>
                    </Link>
                    <Link className={`camo slideshow_previous ${animationFlag}`} href={tabsList[tabRange[2]].href} target={`${tabsList[tabRange[2]].new == true ?  "_blank" : ""}`} rel={`${tabsList[tabRange[2]] == true ?  "noopener noreferrer" : ""}`}>
                        <button className="camo">
                            <Image src={tabsList[tabRange[2]].src} fill={true} alt={tabsList[tabRange[2]].alt} />
                        </button>
                    </Link>
                    <Link className={`camo slideshow_current ${animationFlag}`} href={tabsList[tabRange[0]].href} target={`${tabsList[tabRange[0]].new == true ?  "_blank" : ""}`} rel={`${tabsList[tabRange[0]] == true ?  "noopener noreferrer" : ""}`}>
                        <button className="camo">
                            <Image src={tabsList[tabRange[0]].src} fill={true} alt={tabsList[tabRange[0]].alt} />
                        </button>
                    </Link>
                </div>
                <nav className="arrowdot slideshow_nav">
                    {
                        tabsList.map((content, index) => (
                            <button key={index} className={`camo arrowdot_dot ${tabRange[0] == index ? "active" : ""}`} onClick={() => {if (animationFlag == "") setTabRange([tabScroll(index, 0), tabScroll(index), tabScroll(index, -1)])}} />
                        ))
                    }
                </nav>
            </div>

            <UserInterface currentPage="home" />
        </article>
    );
};