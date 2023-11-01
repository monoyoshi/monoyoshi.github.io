// typewriter
// time - in milliseconds
const bTyping = 50; // typing speed
const bDelete = 40; // delete speed

// highlight text and delete all
let twDeleteAll = async () => {
    document.getElementById("typed").innerHTML = `<mark>${document.getElementById("typed").innerHTML}</mark>`;
    setTimeout(() => document.getElementById("typed").innerHTML = "", 200);
}

// typing
let twAdd = async (phrase = "", index = 0) => {
    if (index < phrase.length) {
        setTimeout(() => {
            document.getElementById("typed").innerHTML += phrase[index];
            twAdd(phrase, ++index);
        }, bTyping);
    };
}

// delete text (simulates backspace)
let twDelete = async (length = 0) => {
    if (length > 0 || document.getElementById("typed").innerHTML > 0) {
        setTimeout(() => {
            document.getElementById("typed").innerHTML = document.getElementById("typed").innerHTML.slice(0, -1);
            twDelete(length - 1);
        }, bDelete);
    }
}

// typewriter animation
// if there's a better way to do this, I would not know. anyway, here's my workaround: a hard-coded animation
// it at least gets the job done and I can customize it :)
// only problem is that it gets super messed up if u look away
function twAnimation() {
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
        setTimeout(() => twAdd("!!"), 17500);
        setTimeout(() => twAdd(" welcome to my "), 18000);
        setTimeout(() => twAdd("cool"), 19000);
        setTimeout(() => twDelete(4), 20000);
        setTimeout(() => twAdd("amazing"), 21000);
        setTimeout((twDeleteAll), 23000);
        setTimeout(() => twAdd("welcome to my "), 24000);
        setTimeout(() => twAdd("uhh"), 25000);
        setTimeout(() => twDelete(3), 26000);
        setTimeout(() => twAdd(" "), 27000);
        setTimeout(() => twAdd("funny "), 27500);
        setTimeout(() => twAdd("and cool "), 28000);
        setTimeout(() => twAdd("port"), 29000);
        setTimeout(() => twAdd("folio"), 29400);
        setTimeout(() => twAdd("!!"), 30000);
        setTimeout(() => twAdd(" :)"), 31500);
        setTimeout(() => document.getElementById("caret").style.display = "none", 34000);
    });
};

// on load
window.addEventListener("load", function () {
    // hardcoded animation fix
    document.getElementById("welcomefix").addEventListener("click", function () {
        let fullstop = setTimeout(";");
        let i = 0;
        while (i < fullstop) {
            clearTimeout(i);
            ++i;
        };
        document.getElementById("welcomefail").innerHTML = "it <i>should</i> be correct now...";
        document.getElementById("caret").style.display = "none";
        document.getElementById("typed").innerHTML = "welcome to my funny and cool portfolio!! :)";
    });

    // hardcoded animation
    setTimeout(() => twAnimation(), 1000);

    // age fix
    document.getElementById("age").innerHTML = `${ageCalc("07/30/2000")}`;
});