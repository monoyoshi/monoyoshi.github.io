"use client";

// package imports
import { useState } from "react";

import Link from "next/link";
import Image from "next/image";

// asset imports
import ImageNavHome from "/public/icons/top/home.png";
import ImageNavHomeActive from "/public/icons/top/home_active.png";
import ImageNavProfile from "/public/icons/top/profile.png";
import ImageNavProfileActive from "/public/icons/top/profile_active.png";
import ImageNavProjects from "/public/icons/top/projects.png";
import ImageNavProjectsActive from "/public/icons/top/projects_active.png";

import ImageContactButton from "/public/icons/contacts/contacts.png";
import ImageContactButtonActive from "/public/icons/contacts/contacts_active.png";
import ImageContactTwitter from "/public/icons/contacts/twitter.png";
import ImageContactGithub from "/public/icons/contacts/github.png";
import ImageContactKofi from "/public/icons/contacts/kofi.png";
import ImageContactInstagram from "/public/icons/contacts/instagram.png";
import ImageContactBluesky from "/public/icons/contacts/bluesky.png";
import ImageContactMail from "/public/icons/contacts/mail.png";

// css imports
import "/app/_css/userinterface.css";

export default function UserInterface({ currentPage = "" }) {
    const [isOpen, setIsOpen] = useState(false);

    function toggleContacts(state = !isOpen) {
        setIsOpen(state);

        if (state) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "visible";
    };

    return (
        <>
            <div className={isOpen ? "active" : ""} id="contacts_shadow" />
            <nav id="top">
                <Link className="camo" href="/">
                    <button className="camo">
                        <Image src={currentPage == "home" ? ImageNavHomeActive : ImageNavHome} alt="home" />
                        <p>home</p>
                    </button>
                </Link>
                <Link className="camo" href="/profile">
                    <button className="camo">
                        <Image src={currentPage == "profile" ? ImageNavProfileActive : ImageNavProfile} alt="profile" />
                        <p>profile</p>
                    </button>
                </Link>
                <Link className="camo" href="/projects">
                    <button className="camo">
                        <Image src={currentPage == "projects" ? ImageNavProjectsActive : ImageNavProjects} alt="projects" />
                        <p>projects</p>
                    </button>
                </Link>
            </nav>

            <nav id="contacts">
                <button id="contacts_toggle" className="camo" onClick={() => {toggleContacts()}}><Image src={isOpen ? ImageContactButtonActive : ImageContactButton} alt="contact button" /></button>
                <nav id="contacts_menu" className={isOpen ? "active" : ""}>
                    <Link className="camo" href="https://twitter.com/bladewyrm" target="_blank" rel="noopener noreferrer">
                        <button className="camo" onClick={() => {toggleContacts()}}>
                            <Image src={ImageContactTwitter} alt="twitter icon" />
                            <div>twitter</div>
                        </button>
                    </Link>
                    <Link className="camo" href="https://github.com/monoyoshi">
                        <button className="camo" onClick={() => {toggleContacts()}}>
                            <Image src={ImageContactGithub} alt="github icon" />
                            <div>github</div>
                        </button>
                    </Link>
                    <Link className="camo" href="https://ko-fi.com/bladewyrm" target="_blank" rel="noopener noreferrer">
                        <button className="camo" onClick={() => {toggleContacts()}}>
                            <Image src={ImageContactKofi} alt="ko-fi icon" />
                            <div>ko-fi</div>
                        </button>
                    </Link>
                    <Link className="camo" href="https://www.instagram.com/bladewyrm" target="_blank" rel="noopener noreferrer">
                        <button className="camo" onClick={() => {toggleContacts()}}>
                            <Image src={ImageContactInstagram} alt="instagram icon" />
                            <div>instagram</div>
                        </button>
                    </Link>
                    <Link className="camo" href="https://bsky.app/profile/bladewyrm.dev" target="_blank" rel="noopener noreferrer">
                        <button className="camo" onClick={() => {toggleContacts()}}>
                            <Image src={ImageContactBluesky} alt="bluesky icon" />
                            <div>bluesky</div>
                        </button>
                    </Link>
                    <Link className="camo" href="mailto:admin@bladewyrm.dev">
                        <button className="camo" onClick={() => {toggleContacts()}}>
                            <Image src={ImageContactMail} alt="mail icon" />
                            <div>mail</div>
                        </button>
                    </Link>
                </nav>
            </nav>
        </>
    );
};