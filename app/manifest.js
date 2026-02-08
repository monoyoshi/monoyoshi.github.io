export default function manifest() {
    return {
        name: "bladewyrm",
        short_name: "monoyoshi",
        description: "welcome to my dark world",
        start_url: "/",
        icons: [
            {
                src: "/icon.svg",
                sizes: "any",
                type: "image/svg+xml",
            },
        ],
    };
};