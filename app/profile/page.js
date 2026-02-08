"use client";

// package imports
import { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";

// asset imports
import ImageMe from "/public/profile.png"

// css imports
import "/app/_css/profile.css";

// component imports
import UserInterface from "/app/_components/userinterface.js";
import { TabInformation, TabStats, TabSkills, TabAbilities, TabDetails } from "/app/_components/profiletabs.js";

export default function Profile() {
    const tabsList = [
        ["Information", (<TabInformation />)], 
        ["Stats", (<TabStats />)], 
        ["Skills", (<TabSkills />)], 
        ["Abilities", (<TabAbilities />)], 
        ["Details", (<TabDetails />)]
    ];
    
    const tabsLength = tabsList.length - 1;

    const [tabRange, setTabRange] = useState([0, 1, tabsLength]);

    function tabScroll(current = 0, direction = 1) {
        let tabDestination = current + direction;
        if (tabDestination < 0) tabDestination = tabsLength;
        else if (tabDestination > tabsLength) tabDestination = 0;

        return tabDestination;
    }
    
    return (
        <article id="profile">
            <Image id="splash" src={ImageMe} alt="self-portrait (real) (not clickbait)" className="bound" />

            <div id="name" className="bound">
                <h3>Sword Enthusiast</h3>
                <h1>Kyu</h1>
            </div>

            <div id="slides" className="bound slideshow">
                <div className="slideshow_content">
                    <div className={`slideshow_next`}>
                        <div className="slideshowslide_title"><h3>{tabsList[tabRange[1]][0]}</h3></div>
                        <div className="slideshowslide_content">
                            <div>{tabsList[tabRange[1]][1]}</div>
                        </div>
                    </div>
                    <div className={`slideshow_previous`}>
                        <div className="slideshowslide_title"><h3>{tabsList[tabRange[2]][0]}</h3></div>
                        <div className="slideshowslide_content">
                            <div>
                                {tabsList[tabRange[2]][1]}
                            </div>
                        </div>
                    </div>
                    <div className={`slideshow_current`}>
                        <div className="slideshowslide_title"><h3>{tabsList[tabRange[0]][0]}</h3></div>
                        <div className="slideshowslide_content">
                            <div>
                                {tabsList[tabRange[0]][1]}
                            </div>
                        </div>
                    </div>
                </div>
                <nav className="arrowdot slideshow_nav">
                    <button className="camo arrowdot_larrow" onClick={() => {setTabRange([tabScroll(tabRange[0], -1), tabScroll(tabRange[0]), tabScroll(tabRange[0], 0)])}} />
                    {
                        tabsList.map((content, index) => (
                            <button key={index} className={`camo arrowdot_dot ${tabRange[0] == index ? "active" : ""}`} onClick={() => {setTabRange([tabScroll(index, 0), tabScroll(index), tabScroll(index, -1)])}} />
                        ))
                    }
                    <button className="camo arrowdot_rarrow" onClick={() => {setTabRange([tabScroll(tabRange[0]), tabScroll(tabRange[0], 2), tabScroll(tabRange[0], 0)])}} />
                </nav>
            </div>

            <UserInterface currentPage="profile" />
        </article>
    );
};