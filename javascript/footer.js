// footer generation
// I wanna have a footer I can easily update through one file
// especially since it's static across all pages

// setting the file offset (so it can be used for any file in the directory)
function footer(offset) {
    // offset = how many...directories(?) are needed to reach the root directory
    let i = 0; // count
    let jump = ""; // extender
    while (i < offset) {
        jump += "../";
        ++i;
    };

    return `<!-- footer -->
<div class="gallery" style="position: fixed; bottom: 0; right: 0">
    <img src="${jump}assets/kyurem/sprite-animated_kyurem.png" style="max-width: 100%">
    <img src="${jump}assets/kyurem/sprite-animated_kyurem-black.png" style="max-width: 100%">
    <img src="${jump}assets/kyurem/sprite-animated_kyurem-white.png" style="max-width: 100%">
</div>

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