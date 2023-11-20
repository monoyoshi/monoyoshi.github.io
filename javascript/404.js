// 404 error page generation
// I wanna have a 404 page I can easily update through one file
// especially since it's static across all projects

function articlefof(offset = 0) {
    // offset = how many...directories(?) are needed to reach the root directory
    let i = 0; // count
    let jump = ""; // extender
    while (i < offset) {
        jump += "../";
        ++i;
    };

    return `<!-- article -->
<div class="flexbox">
    <div class="textbox" style="width: 50%;">
        <div class="h1">error 404: not found</div>
        <div class="quote">"guys help I'm lost again"</div>
        <p>
            heh, look at you. lost, just like me. <s>welcome to the void</s><br>
            real talk, the page you're trying to go to doesn't exist. honestly, I probably just messed up a link
            again. don't worry though, it'll fix itself in time. probably. when I get the chance.
        </p>
        <p>anyway, click on the navigation bar up top to get back on track.</p>
    </div>
    <div class="frame" style="width: 50%;">
        <img src="${jump}assets/404.gif" alt="404">
    </div>
</div>
<!-- - - - - - - - - - -->`;
};