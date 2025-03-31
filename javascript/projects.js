const slides = {
    "active": [
        {
            "header": "Welcome to the Hyperfixation Corner",
            "quote": [false, ""],
            "buttons": [
                false,
                [
                    ["",""]
                ]
            ],
            "image": [false, "", ""],
            "text": [
                `Hey, congrats! You found the Hidden Treasure of Area 906! (I mean, I guess it's not really "hidden" per se...)<br>`,
                `So basically, I do everything as a hobby. My special interests are what fuel and motivate me, so I primarily make things that excite the silly autistic brain of mine.<br>`,
                `As a web developer, I specialize in creating static websites using vanilla HTML, CSS, and JavaScript (and the JQuery library through Google's CDN). I focus on these because of how easily accessible they are, and because I used to work on a laptop that would struggle hosting any kind of server (hence why I try not to run servers as much as possible. It's a part of my villain origin story). That being said, I do have experience with Node.js and npm.<br>`,
                `As a graphic-design-leaning artist (hey, it really is my passion!), I enjoy making things that work very well when displayed on its own, whether it be as a small component for a bigger project or as a physical item like a shirt design. I use <a href="https://krita.org/">Krita</a> for raster images and <a href="https://inkscape.org/">Inkscape</a> for vector images.<br>`,
                `<div style="text-align: center;"><img src="https://cdn.bladewyrm.dev/images/logo.svg" alt="fun" style="width: 256px;"></div>`
            ]
        },
        {
            "header": "TOU Café",
            "quote": [true, `"i am shef (also my gf)"`],
            "buttons": [
                true,
                [
                    ["https://tou-cafe.bladewyrm.dev", "Main page"]
                ]
            ],
            "image": [true, "https://cdn.bladewyrm.dev/images/placeholder/zodiloaf.png", "loaf"],
            "text": [
                `Tired of seeing something that looks delicious, only to find out it was made with nuts? Do you ever want to just easily access recipes without all the flashy clutter? Well, look no further than TOU Café: a project that achieves that and more!<br>`,
                `This project comes from the fact that my partner and I have a few Discord rooms dedicated to writing down recipes. You never know when Discord will go boom boom explosion emoji 💥, so I had the big brain idea of moving it all to a place that looks cool and is way easier to navigate. It's also more permanent because I have everything backed up.<br>`,
                `Also, I really liked the franchise Touken Ranbu back then, so TOU Café reflects that a bit.<br>`
            ]
        },
        {
            "header": "hotaru(n)",
            "quote": [true, `"hahahahaha"`],
            "buttons": [
                true,
                [
                    ["https://github.com/monoyoshi/hotarun", "GitHub repository"]
                ]
            ],
            "image": [true, "https://hotarun.bladewyrm.dev/images/profilepicture.png", "portrait of hotaru(n)"],
            "text": [
                `A Discord bot that does a lot, from unserious things like laughing at people, to serious things like calculating the 27th number in the Fibonacci sequence (it's 196418). hotaru(n) is also the predecessor to some of the other projects I have here. In a sense, he's like my sandbox...if sandboxes could be sassy and crave world domination. He is also my first-born, so he's riddled with a lot of curses. He doesn't mind, though.<br>`,
                `Made using Javascript (Node.js) on a boring after-school November afternoon in 2016, hotaru(n) uses <a href="https://discord.js.org/" target="_blank" rel="noopener noreferrer">Discord.js</a> to interact with Discord's API. And no, you can't add him onto your server yourself. I mean, unless you clone his code, but like, <i>why</i>? Also I am not liable for any damages he might cause. He's a mischievous little guy, I can tell you that.<br>`
            ]
        },
        {
            "header": "dragalia aesthetic page",
            "quote": [true, `(on google) flying balls html`],
            "buttons": [
                true,
                [
                    ["https://dusty.bladewyrm.dev", "Main page"],
                    ["https://github.com/monoyoshi/dusty", "GitHub repository"]
                ]
            ],
            "image": [true, "https://cdn.bladewyrm.dev/images/placeholder/renzotto.png", "<3"],
            "text": [
                `I wanted to make this one effect (the funny floating circles you see in the background here and in other pages), but then I kinda got off track and... well, here it is. If it wasn't obvious (given my main site), I really dig the Dragalia Lost aesthetic. The sparkly cursor thing also started from here.<br>`,
                `There's even a user interface so you can change the effect yourself, I guess.<br>`
            ]
        },
        {
            "header": "Surtr Dragalia Translator",
            "quote": [true, `"o eb taom rji duqit ug sierj!"<br>「０ｑｄｆｄ０ふぉｊｈｈ￥ｇｆ／ｚ！」`],
            "buttons": [
                true,
                [
                    ["https://surtranslate.bladewyrm.dev", "Main page"],
                    ["https://github.com/monoyoshi/surtranslate", "GitHub repository"]
                ]
            ],
            "image": [true, "https://cdn.bladewyrm.dev/images/placeholder/oyasumarth.png", "eepy....."],
            "text": [
                `A Surtr Dragalia Lost translator. It also supports Japanese. Thank my brief interest for the guy (I mean, his battle was <i>fine</i>...).<br>`,
                `This is basically hotaru(n)'s <code>surtr</code>, <code>michael</code>, <code>suruto</code>, and <code>mikaeru</code> commands, all wrapped into one page.<br>`
            ]
        }
    ],
    "inactive": [
        {
            "header": "bladewyrm906",
            "quote": [true, `"Remember Marth from the hit game Dragalia Lost? This is him now."`],
            "buttons": [
                true,
                [
                    ["https://vquber.bladewyrm.dev", "Main page"]
                ]
            ],
            "image": [true, "https://cdn.bladewyrm.dev/images/placeholder/drgl-5.png", "fun"],
            "text": [
                `Originally known as Project DROCSI, this has been my passion project ever since Dragalia Lost announced the event Fire Emblem: Lost Heroes in April 2019. It stood for <b>DR</b>agalia Lost <b>O</b>riginal <b>C</b>haracter <b>S</b>elf <b>I</b>nsert (yeah yeah, it's goofy, but it stuck at the time). The character themselves prefer to go by the name REN.<br>`,
                `Inspired by Marth Fire Emblem (and later on, Farren Dragalia Lost), REN is a character that represents most if not all of me. They're a monstrous fusion of both dragon and human who just wants to live on their own terms.<br>`,
                `Coming soon (maybe)!<br>`
            ]
        }
    ]
}

$(document).ready(function() {
    // variables

    const $title = $("#kkdytitle");
    const $main = $("#kkdymain");
    const $quote = $("#kkdyquote");
    const $buttons = $("#kkdybuttons");
    const $text = $("#kkdytext");
    const $side = $(".kkdyside");
    const $image = $("#kkdyimage");

    const $larrow = $("#aleft");
    const $rarrow = $("#aright");

    // functions

    let cs = 0;

    function slideChange(d = 0) {
        let i = 0;

        $title.html(slides.active[d].header);
    
        if (slides.active[d].image[0]) {
            $main.addClass("column-65");
            $main.removeClass("column-100");
            $side.show();
            $image.attr("src", slides.active[d].image[1]);
            $image.attr("alt", slides.active[d].image[2])
        }
        else {
            $main.addClass("column-100");
            $main.removeClass("column-65");
            $side.hide();
        };
    
        if (slides.active[d].quote[0]) {
            $quote.html(slides.active[d].quote[1]);
            $quote.show();
        }
        else $quote.hide();
    
        if (slides.active[d].buttons[0]) {
            $buttons.empty();
            i = 0;
            len = slides.active[d].buttons[1].length;
            while (i < len) {
                $buttons
                    .append(
                        $("<a>", {
                            "href": slides.active[d].buttons[1][i][0],
                            "target": "_blank",
                            "rel": "noopener noreferrer",
                            "class": "button"
                        })
                            .text(slides.active[d].buttons[1][i][1])
                    );
                ++i;
            };
            $buttons.show();
        }
        else $buttons.hide();
    
        $text.empty();
        i = 0;
        len = slides.active[d].text.length;
        while (i < len) {
            $text
                .append($("<p>")
                    .html(slides.active[d].text[i])
                )
                .append("<br>");
            ++i;
        };
    };

    function slideCalc(back = false) {
        if (back) --cs;
        else ++cs;
    
        if (cs < 0) cs = slides.active.length-1;
        else if (cs >= slides.active.length) cs = 0;

        return cs;
    };

    // initialize
    let urlp = parseInt(gURLP("initial"));
    if (urlp) {
        if (urlp > 0 && urlp < slides.active.length) cs = urlp;
    };

    slideChange(cs);

    $larrow.on("click", function() {
        $larrow.toggleClass("noclicky");
        $rarrow.toggleClass("noclicky");
        slideChange(slideCalc(true));
        setTimeout(() => {
            $larrow.toggleClass("noclicky");
            $rarrow.toggleClass("noclicky");
        }, 100);
    });

    $rarrow.on("click", function() {
        $larrow.toggleClass("noclicky");
        $rarrow.toggleClass("noclicky");
        slideChange(slideCalc());
        setTimeout(() => {
            $larrow.toggleClass("noclicky");
            $rarrow.toggleClass("noclicky");
        }, 100);
    });
});