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
<div class="flexbox center" id="topbar">
    <a href="${jump.slice(0, -1)}/"><img src="${jump}assets/logo.png" alt="logo" style="margin: 0;"></a>
    <a href="${jump}about" class="navbutton"${current[0]}>about me</a>
    <a href="${jump}art" class="navbutton"${current[1]}>art</a>
    <div class="dropdown">
        <a href="${jump}projects" class="navbutton"${current[2]}>projects</a>
        <div class="ddcontent">
            <a href="hotarun"${pcurrent[0]}>hotarun</a>
            <a href="sticker"${pcurrent[1]}>sticker</a>
            <a href="surtranslate"${pcurrent[2]}>surtranslate</a>
            <a href="wikyu"${pcurrent[3]}>wikyu</a>
            <a href="dragalife"${pcurrent[4]}>dragalife</a>
        </div>
    </div>
    <a href="${jump}contact" class="navbutton"${current[3]}>contact</a>
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
<div class="gallery">
    <div class="tooltip" style="padding: 0 20px;">
        <a href="https://twitter.com/kyu_rem_" target="_blank" id="social"><img src="${jump}assets/logos/twitter.png" width="32"></a>
        <span class="ttpopup">
            <b>twitter</b>: @kyu_rem_
            <hr>
            currently the most active at the moment (which isn't a lot).<br>
            usually just likes and retweets with the occasional drawing.
        </span>
    </div>

    <div class="tooltip" style="padding: 0 20px;">
        <a href="https://marth-dragalialost.tumblr.com" target="_blank" id="social"><img src="${jump}assets/logos/tumblr.png" width="32"></a>
        <span class="ttpopup">
            <b>tumblr</b>: @marth-dragalialost
            <hr>
            generally inactive (because I keep forgetting about it). ignore the theme.<br>
            I plan on making an art archive here (oh, and if anyone asks me things).
        </span>
    </div>

    <div class="tooltip" style="padding: 0 20px;">
        <a href="https://www.reddit.com/user/KyuremTrainer" target="_blank" id="social"><img src="${jump}assets/logos/reddit.png" width="32"></a>
        <span class="ttpopup">
            <b>reddit</b>: u/kyuremtrainer
            <hr>
            inactive nowadays, but there's a lot of old art.
        </span>
    </div>

    <div class="tooltip" style="padding: 0 20px;">
        <a href="javascript:;" target="_blank" id="social"><img src="${jump}assets/logos/google-drive.png" width="32"></a>
        <span class="ttpopup">
            <b>google drive art folder</b>
            <hr>
            if all else fails, this is a collection of all my art.<br>
            CURRENTLY UNAVAILABLE. I'm cooking...
        </span>
    </div>

    <div class="tooltip" style="padding: 0 20px;">
        <a href="javascript:;" id="social"><img src="${jump}assets/logos/discord.png" width="32"></a>
        <span class="ttpopup">
            <b>discord</b>: @kyu_rem_
            <hr>
            if you want to contact me, this is your best bet. probably.<br>
            clicking this doesn't lead to anywhere, but it fits with the other buttons.
        </span>
    </div>

    <div class="tooltip" style="padding: 0 20px;">
        <a href="https://ko-fi.com/kyu_rem_" target="_blank" id="social"><img src="${jump}assets/logos/ko-fi.png" width="32"></a>
        <span class="ttpopup">
            <b>ko-fi</b>: @kyu_rem_
            <hr>
            help me fuel my coffee addiction :D
        </span>
    </div>

    <div class="tooltip" style="padding: 0 20px;">
        <a href="https://www.twitch.tv/kyuremtrainer" target="_blank" id="social"><img src="${jump}assets/logos/twitch.png" width="32"></a>
        <span class="ttpopup">
            <b>twitch</b>: @kyuremtrainer
            <hr>
            giving this "vtuber" thing a try :)<br>
            mostly just gameplay streams for now because my microphone sucks.
        </span>
    </div>

    <div class="tooltip" style="padding: 0 20px;">
        <a href="https://github.com/monoyoshi" target="_blank" id="social"><img src="${jump}assets/logos/github.png" width="32"></a>
        <span class="ttpopup">
            <b>github</b>: @monoyoshi
            <hr>
            a link to a more boring version of the projects page.
        </span>
    </div>
</div>

<div style="padding: 15px;">
    created by yours truly, <b>kyu(rem)</b><br>
    hosted on <b>github pages</b> (for now)
</div>
<!-- - - - - - - - - - -->`;
};