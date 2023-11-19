// typewriter

// highlight text and delete all
let twDeleteAll = async () => {
    $("#typed").html(`<mark>${$("#typed").html()}</mark>`);
    setTimeout(() => $("#typed").html(""), 200);
};

// typing
let twAdd = async (phrase = "", index = 0) => {
    if (index < phrase.length) {
        setTimeout(() => {
            $("#typed").append(phrase[index]);
            twAdd(phrase, ++index);
        }, 50);
    };
};

// delete text (simulates backspace)
let twDelete = async (length = 0) => {
    if (length > 0) {
        setTimeout(() => {
            $("#typed").html($("#typed").html().slice(0, -1));
            twDelete(length - 1);
        }, 40);
    };
};

// typewriter animation
// if there's a better way to do this, I would not know. anyway, here's my workaround: a hard-coded animation
// it at least gets the job done and I can customize it :)
// only problem is that it gets super messed up if u look away
// so there's a cleaning click event that fixes everything
function twAnimation() {
    // oh btw this sorta simulates my own way of typing, style and speed and all
    twDeleteAll().then(function () {
        setTimeout(() => twAdd("oh "), 200);
        setTimeout(() => twAdd("wait"), 450);
        setTimeout((twDeleteAll), 2000);
        setTimeout(() => twAdd("he"), 2300);
        setTimeout(() => twAdd("llo"), 2550);
        setTimeout(() => twAdd("!!"), 3200);
        setTimeout(() => twAdd(" :D"), 3700);
        setTimeout((twDeleteAll), 5000);
        setTimeout(() => twAdd("uhhh"), 5500);
        setTimeout(() => twAdd("h"), 5700);
        setTimeout(() => twAdd("h"), 5950);
        setTimeout(() => twAdd("h"), 6200);
        setTimeout(() => twAdd("h"), 6450);
        setTimeout(() => twAdd(" hold on"), 7000);
        setTimeout((twDeleteAll), 8500);
        setTimeout(() => twAdd("monoyo"), 9000);
        setTimeout(() => twAdd("shi"), 9500);
        setTimeout(() => twAdd("."), 10000);
        setTimeout(() => twAdd("github"), 10500);
        setTimeout(() => twAdd("."), 11000);
        setTimeout(() => twAdd("io"), 11500);
        setTimeout((twDeleteAll), 12800);
        setTimeout(() => twAdd("..."), 13500);
        setTimeout(() => twDelete(3), 14000);
        setTimeout(() => twAdd("welcome"), 17000);
        setTimeout(() => twAdd("!!"), 17600);
        setTimeout(() => twAdd(" welcome to my "), 18000);
        setTimeout(() => twAdd("cool"), 19000);
        setTimeout(() => twDelete(4), 20000);
        setTimeout(() => twAdd("amazing"), 21000);
        setTimeout((twDeleteAll), 23000);
        setTimeout(() => twAdd("welcome to my "), 24000);
        setTimeout(() => twAdd("uhh"), 25000);
        setTimeout(() => twDelete(4), 26000);
        setTimeout(() => twAdd(" "), 27000);
        setTimeout(() => twAdd("funny "), 27500);
        setTimeout(() => twAdd("and cool "), 28000);
        setTimeout(() => twAdd("port"), 29000);
        setTimeout(() => twAdd("folio"), 29400);
        setTimeout(() => twAdd("!!"), 30000);
        setTimeout(() => twAdd(" :D"), 31500);
        setTimeout(() => $("#caret").css("display", "none"), 34000);
    });
};

// typewriter

// on load
$(document).ready(function () {
    // animation fix
    $("#welcomefix").click(function () {
        let fullstop = setTimeout(";");
        let i = 0;
        while (i < fullstop) {
            clearTimeout(i);
            ++i;
        };
        $("#caret").css("display", "none");
        if ($("#typed").html() != "welcome to my funny and cool portfolio!! :D") {
            $("#typed").html("welcome to my funny and cool portfolio!! :D");
            $("#welcomefail").html("it <i>should</i> be correct now...");
        }
        else $("#welcomefail").html("it's already correct though...");
        
    });

    // hardcoded animation
    setTimeout(() => twAnimation(), 1000);
});