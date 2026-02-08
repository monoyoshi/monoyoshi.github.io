import Image from "next/image";

import "/app/_css/colors.css";

import { RocknRoll_One, Do_Hyeon } from "next/font/google";
import "/app/_css/fonts.css";

const rocknrollone = RocknRoll_One({
    subsets: ["latin", "latin-ext"],
    weight: "400",
    variable: "--font-rocknroll_one"
});

const dohyeon = Do_Hyeon({
    subsets: ["latin"],
    weight: "400",
    variable: "--font-do_hyeon"
});

import "/app/_css/styles.css";

function Cursor() {
    return;
};

// metadata
export async function generateMetadata({ params }) {
    return {
        title: "bladewyrm.dev"
    };
};

export default function RootLayout({ children }) {


    return (
        <html lang="en" className={`${rocknrollone.variable} ${dohyeon.variable}`}>
            <body>
                <footer>
                    <div>
                        <p>made with love and pure hyperfixation by <b>kyu(ren)</b> 💙🩶</p>
                        <Image src="https://cdn.bladewyrm.dev/images/kyurem/sprite-animated_kyurem.png" width={32} height={32} alt=":)" unoptimized style={{height: "32px"}} />
                    </div>
                </footer>

                <main>
                    {children}
                </main>
            </body>
        </html>
    );
};