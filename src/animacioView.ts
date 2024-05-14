const anim = {
    old: {
        name: "fadeIn",
        duration: ".2s",
        easing: "ease-in",
        fillMode: "forwards",
    },
    new: {
        name: "fadeOut",
        duration: ".3s",
        easing: "ease-in",
        fillMode: "backwards",
    },
};

export const myFade = {
    forwards: anim,
    backwards: anim,
};