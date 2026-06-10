const playBtn = document.getElementById("playBtn");
const startModal = document.getElementById("startModal");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

playBtn.addEventListener("click", () => {

    startModal.classList.remove("hidden");

});

yesBtn.addEventListener("click", () => {

    window.location.href =
    "game.html";

});

noBtn.addEventListener("click", () => {

    alert("അയ്യേ! ഭയന്നോ? 😂");

});
