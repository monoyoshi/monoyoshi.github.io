$(document).ready(function() {
    let $gameHistory = $("#gamehistory");
    let $choices = $("#choices");

    let $buttonZero = $("#0");
    let $buttonOne = $("#1");

    let section = 1;

    function jumpDown() {
        $(".content").scrollTop($gameHistory.height());
    };

    function textType(target, txts, i = 0, j = 0, finished = function() {return undefined;}) {
        target.append(txts[i][j]);
        ++j;

        if (j < txts[i].length) {
            switch (txts[i][j-1]) {
                case " ": {
                    setTimeout(() => {
                        textType(target, txts, i, j, finished);
                    }, 27);
                    break;
                };
                case ",": {
                    setTimeout(() => {
                        textType(target, txts, i, j, finished);
                    }, 45);
                    break;
                };
                case ".":
                case "!":
                case "?":
                case "—": {
                    setTimeout(() => {
                        textType(target, txts, i, j, finished);
                    }, 180);
                    break;
                };
                default:
                    setTimeout(() => {
                        textType(target, txts, i, j, finished);
                    }, 9);
            };
        }
        else {
            jumpDown();
            if (txts.length > 1 && i < txts.length-1) {
                target.append("<br>");
                setTimeout(() => {
                    textType(target, txts, i+1, 0, finished);
                }, 360);
            };
        };

        if (i >= txts.length-1 && j >= txts[i].length) setTimeout(finished, 270)
    };

    function choiceSet(choices) {
        if (choices.length != 0) {
            let i = 0;
            while (i < choices.length) {
                $choices.children().eq(i).removeClass("notusing");
                $choices.children().eq(i).addClass("using");
                $choices.children().eq(i).text(choices[i]);
                ++i;
            };
            while (i < $choices.children().length) {
                $choices.children().eq(i).addClass("notusing");
                $choices.children().eq(i).removeClass("using");
                $choices.children().eq(i).text("");
                ++i;
            };
        }
        else {
            $choices.css("display", "none");
        };
    }

    function makeChoice(answer = [], next = [], choices = [], sectionJump = 0) {
        $("a.button.indexgame.using").addClass("notusing");
        $("a.button.indexgame.using").removeClass("using");

        let $answer = $("<div>", {
            class: "flexbox",
            css: {
                "margin-left": "30px"
            }
        });
        if (sectionJump != 1) {
                $answer.append($("<div>", {
                    css: {
                        "padding-right": "15px"
                    }
                })
                    .html("<b>You</b>:")
            );

            $gameHistory.append($answer);
            $gameHistory.append("<br>");
        };

        setTimeout(() => {textType($answer, answer, 0, 0, () => {
            textType($gameHistory, next, 0, 0, () => {
                if (sectionJump == 1) $gameHistory.append("<br>");
                else $gameHistory.append("<br><br>");

                choiceSet(choices);
        })})}, 270);

        $("a.button.indexgame").on("click", jumpDown);

        section = sectionJump;
        if (section == 1) {
            $gameHistory.fadeOut(500, function() {
                $(this).empty();
                $(this).fadeIn("fast");
            })
        };
    }

    textType($("#title"), ["> You have stumbled upon the domain of the Bladewyrm..."], 0, 0, () => {
        $("a.button.indexgame")
            .removeClass("notusing")
            .addClass("using")
    });

    // game
    $buttonZero.on("click", function() {
        if (section == 0) {
            makeChoice(
                [""],
                [""],
                ["Yo.", "Heyas!"],
                1
            );
        }
        else if (section == 1) {
            makeChoice(
                ["Yo."],
                [
                    "Oh?",
                    "Yo yo! Welcome to my silly little website!"
                ],
                ["Thank you!", "I heard there was treasure..."],
                2
            );
        }
        else if (section == 2) {
            makeChoice(
                ["Thank you!"],
                ["How are you today?"],
                ["Great!", "Not so good..."],
                3
            );
        }
        else if (section == 3) {
            makeChoice(
                ["Doing pretty good, you?"],
                [
                    "I'm just vibing. It's rare to see anyone else around here, let alone someone I can actually interact with, so I'm happy to have company.",
                    "Actually, what brings you here?"
                ],
                ["Just passing.", "...Wait. Are you THE Bladewyrm?"],
                4
            );
        }
        else if (section == 4) {
            makeChoice(
                ["Nothing in particular. Cool place though!"],
                [
                    "Oh, thank you so much!",
                    "I worked really hard on this website, so I'm glad you like it. Anyway, do you want me to show you around?"
                ],
                ["Sure!", "No."],
                5
            );
        }
        else if (section == 5) {
            makeChoice(
                [
                    "Sure!",
                    "What kinds of things do you have?",
                    "Actually, who ARE you?"
                ],
                [
                    "Oh right, I forgot to introduce myself.",
                    "People generally know me by my title as the Bladewyrm, but you can just call me Kyu.",
                    "One of my biggest inspirations are video games, so I like making stuff themed around them."
                ],
                ["Nice to meet you!"],
                6
            );
        }
        else if (section == 6) {
            makeChoice(
                [
                    "Nice to meet you, Kyu!",
                    "You are so cool."],
                [
                    "Ah, thank you!",
                    "Anyway, you can navigate through this website using those buttons down there.",
                    "Right now, we're just at the Home page.",
                    "You can find a gallery of my cool stuff under the Projects page."
                ],
                ["Thank you!"],
                7
            );
        }
        else if (section == 7) {
            makeChoice(
                ["Thank you!"],
                ["Have fun and safe travels, stranger!"],
                ["[Restart.]"],
                0
            );
        }
        else if (section == 8) {
            makeChoice(
                [
                    "WOAH!",
                    "You made that?",
                    "That's amazing!"
                ],
                ["Thank you so much! I have that and a lot more, actually!", "You wanna see?"],
                ["Show me!", "No."],
                9
            );
        }
        else if (section == 9) {
            makeChoice(
                ["Oh? Sure!"],
                [
                    "Okay, so you can navigate through this website using those buttons down there.",
                    "Right now, we're just at the Home page.",
                    "You can find a gallery of my cool stuff under the Projects page."
                ],
                ["Thank you!"],
                10
            );
        }
        else if (section == 10) {
            makeChoice(
                ["Thank you so much!"],
                ["No problem! Have fun!"],
                ["[Restart.]"],
                0
            );
        }
        else if (section == 11) {
            makeChoice(
                ["Thank you."],
                ["No problem. I hope you feel better soon."],
                ["[Restart.]"],
                0
            );
        }
        else if (section == 12) {
            makeChoice(
                ["I am honored to be in your presence, o' great dragon."],
                [
                    "W-woah, hey! You don't have to be so formal around me...!",
                    "I'm just some guy, really! S-so what if I'm a dragon, there's always...",
                    "B-but, um... You can navigate through this website using those buttons down there.",
                    "Right now, we're just at the Home page.",
                    "You can find a gallery of my cool stuff under the Projects page."
                ],
                ["Thank you!"],
                10
            );
        }
        else if (section == 13) {
            makeChoice(
                ["Yeah, just messing with you. Of course I want to see. Where can I find your stuff?"],
                [
                    "Heh, you really got me. You're funny.",
                    "(Man, why did I include an option like this?)",
                    "Anyway, you can navigate through this website using those buttons down there.",
                    "Right now, we're just at the Home page.",
                    "You can find a gallery of my cool stuff under the Projects page."
                ],
                ["Thank you!"],
                10
            );
        }
        else if (section == 14) {
            makeChoice(
                ["Hold on. You did that?", "That's so cool!"],
                [
                    "O-oh! Yes I did, thank you!",
                    "If you look around, I got some more too, if you're interested.",
                    "You can navigate through this website using those buttons down there.",
                    "Right now, we're just at the Home page.",
                    "You can find a gallery of my cool stuff under the Projects page."
                ],
                ["Thank you!"],
                10
            );
        };
    });

    $buttonOne.on("click", function() {
        if (section == 1) {
            makeChoice(
                ["Heyas!"],
                [
                    "Oh?",
                    "Hello there! Welcome to my silly little website!"
                ],
                ["Thank you!", "I heard there were cool things going on?"],
                2
            );
        }
        else if (section == 2) {
            makeChoice(
                ["Thanks. I heard there's treasure hidden somewhere within this place."],
                [
                    "Oh, really? Treasure?",
                    "(I'm surprised people call it treasure... Wow!)",
                    "I-I mean, of course! what do you think of the cursor?",
                    "Try clicking and dragging the cursor across the screen if you haven't yet.",
                    "If you're on your phone, just try tapping the screen."
                ],
                ["That's amazing!", "It looks familiar..."],
                8
            );
        }
        else if (section == 3) {
            makeChoice(
                ["Hmm. I've been feeling down."],
                [
                    "Oh, I see. I'm sorry about that, stranger.",
                    "I hope you feel better soon, though!",
                    "With that, why don't you chill for a bit? Maybe something of mine will cheer you up.",
                    "You can navigate through this website using those buttons down there.",
                    "Right now, we're just at the Home page.",
                    "You can find a gallery of my cool stuff under the Projects page."
                ],
                ["Thank you."],
                11
            );
        }
        else if (section == 4) {
            makeChoice(
                ["...Hold on. Are you THE Bladewyrm?"],
                [
                    "Oh! Yeah, that's me.",
                    "Bladewyrm's just the title people know me as, but you can call me Kyu."
                ],
                ["(Give respect to the dragon)"],
                12
            );
        }
        else if (section == 5 || section == 9 || section == 13) {
            makeChoice(
                ["...No."],
                ["...Oh. Um. You're joking, right...?"],
                ["Yes.", "No."],
                13
            );
        }
        else if (section == 8) {
            makeChoice(
                [
                    "It's nice.",
                    "It gives me a sort of nostalgic feeling."
                ],
                [
                    "Oh? I'm glad.",
                    "I made it in memory of something that was very dear to me."
                ],
                ["Wait, you did that?"],
                14
            );
        };
    });
})