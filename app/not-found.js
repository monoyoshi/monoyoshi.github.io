// package imports
import Image from "next/image";
import Link from "next/link";

// asset imports
import Image404 from "/public/404.png";

// css imports
import "/app/_css/home.css";

// component imports
import UserInterface from "/app/_components/userinterface.js";

// metadata
export async function generateMetadata({ params }) {
    return {
        title: "404 | bladewyrm.dev"
    };
};

export default function NotFound() {
    return (
        <article style={{backgroundColor: "var(--white)"}}>
            <div className="bound" style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100%", width: "100%"}}>
                <h1 className="br-bottom">error 404: page not found</h1>
                <p className="br-bottom"><i>"...and where do <b>you</b> think you're going?"</i></p>
                <p className="br-bottom">oh um. hey. welcome to my portfolio</p>
                <p>yeah uhhhh</p>
                <p className="br-bottom">sorta in the middle of renovations here.</p>
                <p>anyway if you're like, an employer or something and you came from my resume,</p>
                <p>gauge my skills with this site:</p>
                <p className="br-bottom"><Link href="https://thedragonsground.bladewyrm.dev">https:/thedragonsground.bladewyrm.dev</Link></p>

                <p>thank you 🙇‍♂️</p>
                <Image src={Image404} alt="icon" style={{width: "512px"}} />
            </div>

            <UserInterface />
        </article>
    );
};