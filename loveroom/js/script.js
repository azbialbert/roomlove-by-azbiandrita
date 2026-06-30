/* =====================================
   OUR CHAPTER
   script.js
===================================== */

/* =========================
   PASSWORD
========================= */

const PASSWORD = "azbirita"; // Ganti password sesuai keinginan

const lockScreen = document.getElementById("lockScreen");
const passwordInput = document.getElementById("passwordInput");
const unlockButton = document.getElementById("unlockButton");
const passwordError = document.getElementById("passwordError");
const loader = document.querySelector(".loader");

function unlockWebsite() {

    if (passwordInput.value === PASSWORD) {

        passwordError.style.display = "none";

        lockScreen.style.display = "none";

        loader.style.display = "flex";

        setTimeout(() => {

            loader.classList.add("hide");

        }, 1500);

    } else {

        passwordError.style.display = "block";

        document.querySelector(".lock-card").classList.add("shake");

        setTimeout(() => {

            document.querySelector(".lock-card").classList.remove("shake");

        }, 400);

    }

}

unlockButton.addEventListener("click", unlockWebsite);

passwordInput.addEventListener("keypress", function (e) {

    if (e.key === "Enter") {

        unlockWebsite();

    }

});

/* =========================
   SCROLL PROGRESS
========================= */

const progressBar = document.querySelector(".progress-bar");

window.addEventListener("scroll", () => {

    const scrollTop = window.scrollY;

    const height = document.documentElement.scrollHeight - window.innerHeight;

    progressBar.style.width = (scrollTop / height) * 100 + "%";

});

/* =========================
   SCROLL ANIMATION
========================= */

const animatedItems = document.querySelectorAll(

    ".fade-up, .fade-left, .fade-right, .scale"

);

const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },

    {

        threshold: 0.2

    }

);

animatedItems.forEach(item => observer.observe(item));

/* =========================
   MOBILE MENU
========================= */

const menuToggle = document.getElementById("menuToggle");

const menu = document.querySelector(".navbar ul");

menuToggle.addEventListener("click", () => {

    menu.classList.toggle("active");

});

/* =========================
   LIGHTBOX
========================= */

const photos = document.querySelectorAll(".photo");

const lightbox = document.getElementById("lightbox");

const lightboxImage = document.getElementById("lightboxImage");

const closeLightbox = document.getElementById("closeLightbox");

photos.forEach(photo => {

    photo.addEventListener("click", () => {

        lightbox.classList.add("active");

        lightboxImage.src = photo.src;

    });

});

closeLightbox.addEventListener("click", () => {

    lightbox.classList.remove("active");

});

lightbox.addEventListener("click", e => {

    if (e.target === lightbox) {

        lightbox.classList.remove("active");

    }

});

/* =========================
   MUSIC
========================= */

const music = document.getElementById("music");

const musicButton = document.getElementById("musicButton");

let playing = false;

musicButton.addEventListener("click", () => {

    if (playing) {

        music.pause();

        musicButton.innerHTML = "♪";

    } else {

        music.play();

        musicButton.innerHTML = "❚❚";

    }

    playing = !playing;

});

/* =========================
   CURSOR GLOW
========================= */

const glow = document.createElement("div");

glow.className = "cursor-glow";

document.body.appendChild(glow);

document.addEventListener("mousemove", e => {

    glow.style.left = e.clientX + "px";

    glow.style.top = e.clientY + "px";

});