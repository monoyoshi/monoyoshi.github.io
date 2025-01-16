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
                ["Oh?", "Yo yo! Welcome to my silly little website!"],
                ["Thank you!", "I heard there were cool things going on?"],
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
                ["I'm just vibing. It's rare to see anyone else around here, let alone someone I can actually interact with, so I'm happy to have company.", "Actually, what brings you here?"],
                ["I'm looking for something...", "...Wait. Are you THE Kyu?"],
                4
            );
        }
        else if (section == 4) {
            makeChoice(
                ["I was told you had some interesting stuff here?"],
                ["Oh, really?", "I, in fact, DO have cool stuff. Like, a lot. Kinda. You wanna see them?"],
                ["Sure!", "No."],
                5
            );
        }
        else if (section == 5) {
            makeChoice(
                ["Sure!", "What kinds of things do you have?", "Actually, who ARE you?"],
                ["Oh right, I forgot to introduce myself.", "The name's kyu(ren); Kyu, for short.", "I guess I do stuff. Like drawing, or programming."],
                ["Nice to meet you!", "No, who ARE you?"],
                6
            );
        }
        else if (section == 6) {
            makeChoice(
                ["Nice to meet you, Kyu!", "You do seem pretty cool."],
                ["Really? Thank you!", "Anyway, if you check out the projects link down there, you can see all the stuff I'm proud of.", "There's a lot of fun stuff in there—maybe you'll find something interesting?"],
                ["Thank you!"],
                7
            );
        }
        else if (section == 7) {
            makeChoice(
                ["Thank you!"],
                ["Have fun!"],
                ["[Restart.]"],
                0
            );
        }
        else if (section == 8) {
            makeChoice(
                ["You made that? That's amazing!"],
                ["Thank you so much! I have that and a lot more, actually!", "You wanna see?"],
                ["Show me!", "No."],
                9
            );
        }
        else if (section == 9) {
            makeChoice(
                ["Really? Where can I find it?"],
                [`If you follow the projects link down there, you'll see my stuff.`],
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
                ["No problem."],
                ["[Restart.]"],
                0
            );
        }
        else if (section == 12) {
            makeChoice(
                ["That's so cool... Where can I find more?"],
                ["Oh!", `If you wanna check out other cool stuff, check out the projects link down there!`],
                ["Okay!"],
                10
            );
        }
        else if (section == 13) {
            makeChoice(
                ["Heh, just messing with you. Of course I want to see. Where can I find your stuff?"],
                ["Well, if you follow the projects page down there, you can find them."],
                ["Thank you."],
                11
            );
        }
        else if (section == 14) {
            makeChoice(
                ["Hold on. You did that?", "That's so cool! Do you have anything else?"],
                ["Heh, I got quite a bit. I'm always cooking too, so I'll get more in time.", "Anyway, if you follow the projects link down there, you can see other cool stuff that I've made.", "I mean, even this website was all made by me. Cool, right?"],
                ["You're amazing."],
                15
            );
        }
        else if (section == 15) {
            makeChoice(
                ["It really is, dude.", "Anyway, thank you so much! I'll go right ahead, if you don't mind."],
                ["No problem! Have fun!"],
                ["[Restart.]"],
                0
            );
        }
    });

    $buttonOne.on("click", function() {
        if (section == 1) {
            makeChoice(
                ["Heyas!"],
                ["Oh?", "Hello there! Welcome to my silly little website!"],
                ["Thank you!", "I heard there were cool things going on?"],
                2
            );
        }
        else if (section == 2) {
            makeChoice(
                ["Thanks. I heard you were doing cool things in here?"],
                ["Yo? Yeah, I do.", "I mean, what do you think of the cursor?", "Try clicking and dragging the cursor across the screen if you haven't yet."],
                ["That's amazing!", "It looks familiar..."],
                8
            );
        }
        else if (section == 3) {
            makeChoice(
                ["Hmm. I've been feeling down."],
                ["Oh, I see. I'm sorry about that, stranger.", "I hope you feel better soon, though!", "With that, why don't you look around? Maybe something of mine will cheer you up."],
                ["Thank you."],
                11
            );
        }
        else if (section == 4) {
            makeChoice(
                ["...Hold on. Are you THE Kyu?"],
                ["Oh! Yeah, that's me.", "The name's kyu(ren); Kyu for short.", "Anyway, what's up?"],
                ["Amazing..."],
                12
            );
        }
        else if (section == 5 || section == 9) {
            makeChoice(
                ["...No."],
                ["...Oh. Um. You're joking, right...?"],
                ["Just messing with you.", "No."],
                13
            );
        }
        else if (section == 5) {
            makeChoice(
                ["You made all this? That's amazing..."],
                ["Thank you!", "Yeah, I did all this for fun. You should thank my funny brain for that."],
                ["You're so cool..."],
                6
            );
        }
        else if (section == 8) {
            makeChoice(
                ["It's nice.", "It almost looks...familiar."],
                ["Oh, really?", "Yeah, I made it so it sorta resembles something important to me.", "I got more where that came from too, if you want to see."],
                ["Wait, you did that?"],
                14
            );
        }
        else if (section == 13) {
            makeChoice(
                ["...No."],
                ["...Oh. Um. You're joking, right...?"],
                ["Just messing with you.", "No."],
                13
            );
        }
    });
})