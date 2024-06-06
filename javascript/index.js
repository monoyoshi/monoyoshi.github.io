$(document).ready(function() {
    let $lhs = $("#lhs");
    let $rhs = $("#rhs");

    let $gameHistory = $("#gamehistory");
    let $choices = $("#choices");


    let $buttonZero = $("#0");
    let $buttonOne = $("#1");
    let $buttonTwo = $("#2");

    let mh = $lhs.css("height");

    let section = 0;

    function makeChoice(answer = [], next = [], choices = [], sectionJump = 0) {
        let $answer = $("<div>", {
            class: "flexbox",
            css: {
                "margin-left": "30px"
            }
        })
            .append($("<div>", {
                css: {
                    "padding-right": "15px"
                }
            })
                .html("<b>You</b>:")
        );
        
        let i = 0;
        let $theAnswer = $("<div>");
        while (i < answer.length) {
            $answer.append(`${answer[i]}<br>`)
            ++i;
        };
        $theAnswer.append($answer);
        $gameHistory.append($theAnswer);

        i = 0;
        while (i < next.length) {
            $gameHistory.append(`<p>${next[i]}</p>`);
            ++i;
        };

        if (choices.length != 0) {
            i = 0;
            while (i < choices.length) {
                $choices.children().eq(i).addClass("active");
                $choices.children().eq(i).text(choices[i]);
                ++i;
            };
        }
        else {
            $choices.css("display", "none");
        }

        section = sectionJump;
    }
    
    $lhs.css("max-height", mh);
    $rhs.css("max-height", mh);

    // game
    $buttonZero.click(function() {
        if (section == 0) {
            makeChoice(
                ["Yo."],
                ["Hello hello! What brings you here, huh?"],
                ["Just passing by.", "I heard you were doing cool things in here.", "I've been trying to contact you about your car's extended warranty."],
                1
            );
        }
        else if (section == 1) {
            makeChoice(
                ["Just passing by."],
                ["Oh, okay! Be safe on your travels."]
            );
        };
    });

    $buttonOne.click(function() {
        if (section == 0) {
            makeChoice(
                ["Hey there!"],
                ["Hello there! What brings you here, huh?"],
                ["Just passing by.", "I heard you were doing cool things in here.", "I've been trying to contact you about your car's extended warranty."],
                1
            );
        }
        else if (section == 1) {
            makeChoice(
                ["I heard you were doing cool things in here."],
                ["I really am!", "Check out the navigation links down there and have fun exploring!"]
            );
        };
    });

    $buttonTwo.click(function() {
        if (section == 1) {
            makeChoice(
                ["I've been trying to contact you about your car's extended warranty."]
            );
        };

    });
})