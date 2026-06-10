const playerName = document.getElementById("playerName");
const nextBtn = document.getElementById("nextBtn");
const stageTitle = document.getElementById("stageTitle");

let stage = 1;
let moveCount = 0;

playerName.addEventListener("input", () => {

    if(playerName.value.trim() !== ""){
        nextBtn.style.display = "inline-block";
    }

});

nextBtn.addEventListener("click", () => {

    if(stage === 1){

        stage = 2;

        stageTitle.innerHTML =
            "ഈ ബട്ടൺ ക്ലിക്ക് ചെയ്യൂ 😏";

        playerName.style.display = "none";

        nextBtn.innerHTML = "ക്ലിക്ക് ചെയ്യൂ";

        nextBtn.style.position = "absolute";

    }

    else if(stage === 2){

        moveCount++;

        nextBtn.style.left =
            Math.random()*70 + "%";

        nextBtn.style.top =
            Math.random()*70 + "%";

        if(moveCount >= 2){

            stage = 3;

            setTimeout(() => {

                stageTitle.innerHTML =
                "അയ്യേ! നിന്നെ പറ്റിച്ചേ 😂";

                nextBtn.innerHTML =
                "ശരി... മുന്നോട്ട് പോവാം";

                nextBtn.style.position =
                "static";

            },500);

        }

    }

    else if(stage === 3){

        alert(
          "Stage 4 Coming Soon 🔥"
        );

    }

});
