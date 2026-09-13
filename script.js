/* =====================================================
   BOYFRIEND DAY WEB 1
   AKBAR ♡ DEANDRA
===================================================== */


/* =====================================================
   ELEMENT
===================================================== */

const opening = document.getElementById("opening");
const main = document.getElementById("main");
const music = document.getElementById("music");


/* =====================================================
   OPEN WEBSITE
===================================================== */

function openWebsite() {

    // Mulai musik setelah user menekan tombol
    music.play().catch(() => {
        console.log("Musik tidak dapat diputar otomatis.");
    });


    // Hilangkan opening
    opening.classList.add("hide");


    // Tampilkan isi website
    setTimeout(() => {

        main.classList.add("show");

    }, 400);


    // Mulai efek hati
    startHearts();

}


/* =====================================================
   FALLING HEART
===================================================== */

function createHeart() {

    const heart = document.createElement("div");

    heart.innerHTML = "♥";

    heart.style.position = "fixed";

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.top = "-30px";

    heart.style.fontSize =
        Math.random() * 10 + 10 + "px";

    heart.style.color =
        "rgba(102, 183, 255, " +
        (Math.random() * 0.35 + 0.2) +
        ")";

    heart.style.pointerEvents = "none";

    heart.style.zIndex = "999";

    heart.style.textShadow =
        "0 0 10px rgba(102,183,255,0.2)";


    document.body.appendChild(heart);


    // Durasi jatuh random
    const duration =
        Math.random() * 4000 + 5000;


    heart.animate(

        [
            {
                transform:
                    "translateY(0) rotate(0deg)",

                opacity: 0
            },

            {
                opacity: 1
            },

            {
                transform:
                    "translateY(110vh) rotate(360deg)",

                opacity: 0
            }
        ],

        {
            duration: duration,

            easing: "linear"
        }

    );


    // Hapus setelah selesai
    setTimeout(() => {

        heart.remove();

    }, duration);

}


/* =====================================================
   START HEART EFFECT
===================================================== */

let heartInterval;


function startHearts() {

    // Jangan membuat interval lebih dari sekali
    if (heartInterval) return;


    heartInterval = setInterval(() => {

        createHeart();

    }, 900);

}


/* =====================================================
   STOP HEARTS WHEN TAB HIDDEN
   Supaya lebih ringan di HP
===================================================== */

document.addEventListener("visibilitychange", () => {

    if (document.hidden) {

        clearInterval(heartInterval);

        heartInterval = null;

    } else {

        if (
            opening.classList.contains("hide")
        ) {

            startHearts();

        }

    }

});


/* =====================================================
   SMOOTH IMAGE LOAD
===================================================== */

const photo = document.querySelector(".photo-card img");

if (photo) {

    photo.addEventListener("load", () => {

        photo.style.opacity = "1";

    });

}


/* =====================================================
   KONSOLE
===================================================== */

console.log(
    "💙 Boyfriend Day Web 1 — Akbar ♡ Deandra"
);
