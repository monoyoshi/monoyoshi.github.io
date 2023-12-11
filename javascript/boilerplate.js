// header and footer generation
// I wanna have a header and a footer I can easily update through one file
// especially since it's static across all pages

function header(offset = 0, active = "none", pactive = "none") {
    // offset = how many...directories(?) are needed to reach the root directory
    let i = 0; // count
    let jump = ""; // extender
    while (i < offset) {
        jump += "../";
        ++i;
    };

    // active = active "section" of the website
    let current = ["", "", "", ""]; // my funny workaround is just an array
    let pcurrent = ["", "", "", "", ""]; // two of them (also for the projects dropdown).
    // if something's not active, the active property won't be inserted
    switch (active) {
        case "none":
            break;
        case "about": {
            current[0] = ` id="active"`;
            break;
        };
        case "art": {
            current[1] = ` id="active"`;
            break;
        };
        case "projects": {
            current[2] = ` id="active"`;
            switch (pactive) {
                case "none":
                    break;
                case "hotarun": {
                    pcurrent[0] = ` id="active"`;
                    break;
                };
                case "sticker": {
                    pcurrent[1] = ` id="active"`;
                    break;
                };
                case "surtranslate": {
                    pcurrent[2] = ` id="active"`;
                    break;
                };
                case "wikyu": {
                    pcurrent[3] = ` id="active"`;
                    break;
                };
                case "dragalife": {
                    pcurrent[4] = ` id="active"`;
                };
            };
            break;
        };
        case "contact": {
            current[3] = `id="active"`;
        };
    };

    return `<!-- header -->
<!-- topbar -->
<div class="topbar">
    <div class="flexbox center horizontal" style="margin: 0 15%;">
        <div>
            <a href="${jump.slice(0, -1)}/" style="margin: 0; padding: 0;"><img src="${jump}assets/logo.png" alt="logo" style="vertical-align: middle; margin: 0;"></a>
        </div>
        <div class="flexbox center horizontal" style="width: 100%; justify-content: space-around; margin: auto;">
            <a href="${jump}about"${current[0]}>about me</a>
            <a href="${jump}art"${current[1]}>art</a>
            <div class="dropdown" style="width: 100%;">
                <a href="${jump}projects"${current[2]} class="ddsource">projects</a>
                <div class="ddcontent">
                    <a href="${jump}hotarun"${pcurrent[0]}>hotaru(n)</a>
                    <a href="${jump}sticker"${pcurrent[1]}>dl sticker spampage</a>
                    <a href="${jump}surtranslate"${pcurrent[2]}>surtrspeak translator</a>
                    <a href="${jump}wikyu"${pcurrent[3]}>wikyu</a>
                    <a href="${jump}dragalife"${pcurrent[4]}>dragalia life archive v9</a>
                </div>
            </div>
            <a href="${jump}contact"${current[3]}>contact</a>
        </div>
    </div>
</div>

<!-- funny kyurem sprites :) -->
<div class="gallery" style="position: fixed; bottom: 0; right: 0">
    <img src="${jump}assets/kyurem/sprite-animated_kyurem.png">
    <img src="${jump}assets/kyurem/sprite-animated_kyurem-black.png">
    <img src="${jump}assets/kyurem/sprite-animated_kyurem-white.png">
</div>
<!-- - - - - - - - - - -->`;
};

function footer(offset = 0) {
    // offset = how many...directories(?) are needed to reach the root directory
    let i = 0; // count
    let jump = ""; // extender
    while (i < offset) {
        jump += "../";
        ++i;
    };

    return `<!-- footer -->
<div class="textbox">
    created by yours truly, <b>kyu(rem)</b><br>
    hosted on <b>github pages</b> (for now)
</div>
<!-- - - - - - - - - - -->`;
};