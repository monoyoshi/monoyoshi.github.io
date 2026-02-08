

// functions

import { useEffect, useState } from "react";

// age calculator
function ageCalc() {
    var dob = new Date("07/30/2000");
    var today = new Date();

    var age = today.getFullYear() - dob.getFullYear();

    if (today.getMonth() < dob.getMonth() || (today.getMonth() == dob.getMonth() && today.getDate() < dob.getDate())) age--;

    return age + 4000;
};

// current time calculator
function currentTime() {
    var d = new Date();
    let ctYear = new Intl.DateTimeFormat("en-US", {
        timeZone: "America/Chicago",
        year: "numeric"
    }).format(d);
    let ctDate = new Intl.DateTimeFormat("en-US", {
        timeZone: "America/Chicago",
        month: "2-digit",
        day: "2-digit"
    }).format(d);
    let ctTime = new Intl.DateTimeFormat("en-US", {
        timeZone: "America/Chicago",
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        timeZoneName: "longOffset"
    }).format(d);

    return `${ctYear}/${ctDate} ${ctTime}`;
};

export function TabInformation() {
    const [time, setTime] = useState("");

    useEffect(() => {
        setInterval(() => {
            setTime(currentTime());
        }, 1);
    }, [time]);

    return (
        <>
            <table>
                <tbody>
                    <tr>
                        <th>Aliases</th>
                        <td>
                            <p>kyu(ren)</p>
                            <p>Bladewyrm</p>
                            <p>KyuremTrainer</p>
                            <p>Pikahardt</p>
                            <p>Senpai</p>
                            <p>Marth</p>
                            <p>Balls</p>
                        </td>
                    </tr>
                    <tr className="tablebreak"><td>&#8203;</td></tr>
                    <tr>
                        <th>Species</th>
                        <td>Dragon/Human</td>
                    </tr>
                    <tr>
                        <th>Gender</th>
                        <td>Non-binary (9)</td>
                    </tr>
                    <tr>
                        <th>Pronouns</th>
                        <td>
                            <p>They/them</p>
                            <p>He/him</p>
                            <p>It/its</p>
                        </td>
                    </tr>
                    <tr>
                        <th>Birthday</th>
                        <td>July 30, 2000 BC (Leo; age {ageCalc()})</td>
                    </tr>
                    <tr>
                        <th>Residence</th>
                        <td>"The void"</td>
                    </tr>
                    <tr>
                        <th>Timezone</th>
                        <td>
                            <p>Central Time (UTC-5/UTC-6)</p>
                            <p>Current time: {time}</p>
                        </td>
                    </tr>
                    <tr className="tablebreak"><td>&#8203;</td></tr>
                    <tr>
                        <th>Likes</th>
                        <td>
                            <p>Dragons</p>
                            <p>Swords</p>
                        </td>
                    </tr>
                    <tr>
                        <th>Dislikes</th>
                        <td>
                            <p>Snowy/icy winters</p>
                            <p>Loud noises</p>
                        </td>
                    </tr>
                    <tr>
                        <th>Hobbies</th>
                        <td>
                            <p>Spacing out</p>
                            <p>Programming</p>
                            <p>Art</p>
                        </td>
                    </tr>
                    <tr>
                        <th>Talents</th>
                        <td>
                            <p>Baking</p>
                            <p>Locking in</p>
                        </td>
                    </tr>
                    <tr>
                        <th>Signature color</th>
                        <td>
                            <div style={{display: "flex", justifyContent: "flex-start", alignItems: "center"}}>
                                <div style={{width: "1rem", height: "1rem", marginRight: "0.5rem", backgroundColor: "var(--a_blue)"}} />#3773B9
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export function TabStats() {
    return (
        <>
            <p className="br-bottom">very strong!!!!</p>
        </>
    )
}

export function TabSkills() {
    return (
        <>
            <p className="br-bottom">skilled in the blade</p>
            <p className="br-bottom">(html/css, javascript, jquery, and react/next.js)</p>
        </>
    )
}

export function TabAbilities() {
    return (
        <>
            <p className="br-bottom">pressure</p>
        </>
    )
}

export function TabDetails() {
    return (
        <>
            <p className="br-bottom">A dragon insisting they're a human, or a human claiming to be a dragon? Either way, this (self-proclaimed) silly little oddball has a monstrous love for swords, coffee, and anything with a screen. Quiet but passionate for their interests, they want to show the world what one is capable of when fueled by what they love.</p>
        </>
    )
}

export function TabMessage() {
    return (
        <>
            <p>Hello there!!!</p>
            <p className="br-bottom">The name's Kyu and I am a hobbyist programmer/web developer and graphic designer. I like to work on personal projectson my free time,and my interests include Pokémon, Touken Ranbu/刀剣乱舞, Dragalia Lost, and VTubers (Ren Zotto 😈🛸 and myself 🐉🗡️🧍‍♂️)!Nice to meet you!!</p>

            <p className="br-bottom">As someone on the Autism spectrum and (probably) ADHD, I like to center what I do around my interests! Fueled bymessages of forging andcherishing bonds and my own personal experiences as a minority in more ways than one, I want to show the world what someguy like me can do.</p>

            <p>Let's get lost, together!!!!</p>
        </>
    )
}