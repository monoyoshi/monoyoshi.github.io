// 404 error page generation
// I wanna have a 404 page I can easily update through one file
// especially since it's static across all projects

function articlefof() {
    $("article").append($("<div>", {
        class: "flexbox"
    })
        .append($("<div>", {
            class: "textbox",
            css: {
                width: "50%"
            }
        })
            .append($("<div>", {
                class: "h1"
            })
                .text("error 404: not found"))
            .append($("<div>", {
                class: "quote"
            })
                .text("\"HUH\""))
            .append($("<p>")
                .html("Heh, look at you. Lost, just like me. <s><i>Welcome to the void ~</i></s>"))
            .append($("<p>")
                .text("Real talk, the page you're trying to go to doesn't exist. Honestly, I probably just messed up a link again. Don't worry though, it'll fix itself in time. Probably. You know, like, when I get the chance."))
            .append($("<p>")
                .text("Anyway, these navigation links still work at least, so click on those buttons down there to get back on track."))
        )
        .append($("<div>", {
            class: "frame",
            css: {
                width: "50%"
            }
        })
            .append($("<img>", {
                src: `global-assets/pictures/404.gif`,
                alt: "get 404'd idiot"
            }))
        )
    );
};