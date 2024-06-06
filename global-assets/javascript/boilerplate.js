// header and footer generation
// I wanna have a header and a footer I can easily update through one file
// especially since it's static across all pages

function header(offset = 0, active = "none") {
    // offset = how many...directories(?) are needed to reach the root directory
    let i = 0; // count
    let jump = ""; // extender
    while (i < offset) {
        jump += "../";
        ++i;
    };

    // active = active "section" of the website
    // my funny workaround is just an array
    let current = {
        index: ["", `${jump}index.html`],
        profile: ["", `${jump}profile.html`],
        projects: ["", `${jump}projects.html`],
    };

    switch (active) {
        case "none":
            break;
        case "index": {
            current.index[0] = "active";
            current.index[1] = undefined;
            break;
        };
        case "profile": {
            current.profile[0] = "active";
            current.profile[1] = undefined;
            break;
        };
        case "projects": {
            current.projects[0] = "active";
            current.projects[1] = undefined;
            break;
        };
    };

    $("header").append($("<div>", {
        class: "header-nav"
    })
        .append($("<div>", {
            class: "flexbox center",
            css: {
                "margin-bottom": "15px",
                "margin-left": "15px"
            }
        })
            .append($("<a>", {
                class: "header-navbtn",
                id: current.index[0],
                css: {
                    "background-image": `url('${jump}global-assets/pictures/links/index.svg')`
                },
                href: current.index[1]
            }))
            .append($("<a>", {
                class: "header-navbtn",
                id: current.profile[0],
                css: {
                    "background-image": `url('${jump}global-assets/pictures/links/profile.svg')`
                },
                href: current.profile[1]
            }))
            .append($("<a>", {
                class: "header-navbtn",
                id: current.projects[0],
                css: {
                    "background-image": `url('${jump}global-assets/pictures/links/projects.svg')`
                },
                href: current.projects[1]
            }))
        )
    );
};

function footer(offset = 0, removeGitHub = false) {
    // offset = how many...directories(?) are needed to reach the root directory
    let i = 0; // count
    let jump = ""; // extender
    while (i < offset) {
        jump += "../";
        ++i;
    };

    let secondline = "<br>hosted on <b>github pages</b> (for now)";
    if (removeGitHub) secondline = "";

    $("footer").append($("<div>", {
        class: "footer-box"
    })
        .append($("<div>", {
            class: "textbox"
        })
            .append($("<div>", {
                css: {
                    "text-align": "right"
                }
            })
                .html(`made with pure hyperfixation by <b>kyu(ren)</b>${secondline}`)
            )
        )
        .append($("<div>", {
            class: "frame",
            css: {
                "margin": 0,
                "margin-right": "15px",
                "padding": 0,
                "position": "relative",
                "bottom": "7px"
            }
        })
            .append($("<img>", {
                src: `${jump}global-assets/pictures/kyurem/sprite-animated_kyurem.png`,
                height: "50px",
                width: "50px",
                css: {                    
                    margin: 0,
                    padding: 0
                }
            }))
        )
    )
}

$(document).ready(function() {
    $(this).scrollTop(0);

    /*
    // viewport background gradient rotation
    let $viewport = $("#viewport");
    let deg = parseInt($viewport.css("--vpdeg")) + 1;
    setInterval(() => {
        if (deg == 360) deg = 0;
        $viewport.css("background-image", `linear-gradient(${deg}deg, var(--bg1), var(--bg2))`);
        ++deg;
    }, 50);
    */
});