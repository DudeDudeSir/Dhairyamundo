document.addEventListener("DOMContentLoaded", () => {

    const playBtn = document.getElementById("playBtn");
    const startModal = document.getElementById("startModal");
    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");

    if(playBtn){
        playBtn.addEventListener("click", () => {
            startModal.classList.remove("hidden");
        });
    }

    if(yesBtn){
        yesBtn.addEventListener("click", () => {
            window.location.href = "game.html";
        });
    }

    if(noBtn){
        noBtn.addEventListener("click", () => {
            alert("അയ്യേ! ഭയന്നോ? 😂");
        });
    }

});
