const stageArea = document.getElementById("stageArea");
const stageCounter = document.getElementById("stageCounter");
const mascotBubble = document.getElementById("mascotGameBubble");
const scareImage = document.getElementById("jumpscareImage");
const scareSound = new Audio("assets/sounds/jumpscare.mp3");
    setTimeout(() => {
    scareImage.style.display = "none";
}, 1500);

let currentStage = 1;
let playerName = "";
let moveCount = 0;

loadStage1();

function updateStageNumber() {
    stageCounter.textContent = `${currentStage} / 20`;
}

function setMascot(text) {
    mascotBubble.innerHTML = text;
}

function loadStage1() {

    currentStage = 1;
    updateStageNumber();

    setMascot("നിന്റെ പേര് എന്താണ്? 😏");

    stageArea.innerHTML = `
        <div class="stage-box">
            <h2>നിന്റെ പേര് എന്താണ്?</h2>

            <input
                type="text"
                id="nameInput"
                placeholder="പേര്"
                class="game-input"
            >

            <button
                id="continueBtn"
                class="game-btn"
                style="display:none;"
            >
                തുടരുക
            </button>
        </div>
    `;

    const input = document.getElementById("nameInput");
    const btn = document.getElementById("continueBtn");

    input.addEventListener("input", () => {

        if(input.value.trim() !== ""){
            btn.style.display = "inline-block";
        }

    });

    btn.addEventListener("click", () => {

        playerName = input.value;

        loadStage2();

    });

}

function loadStage2(){

    currentStage = 2;
    updateStageNumber();

    moveCount = 0;

    setMascot("ഈ ബട്ടൺ ക്ലിക്ക് ചെയ്യൂ 😏");

    stageArea.innerHTML = `
        <div class="stage-box">

            <h2>
                ഹലോ ${playerName}
            </h2>

            <button
                id="movingBtn"
                class="game-btn"
                style="position:absolute;"
            >
                ക്ലിക്ക് ചെയ്യൂ 😏
            </button>

        </div>
    `;

    const btn =
        document.getElementById("movingBtn");

    btn.addEventListener("click", () => {

        moveCount++;

        btn.style.left =
            Math.random() * 70 + "%";

        btn.style.top =
            Math.random() * 60 + "%";

        if(moveCount >= 2){

            setTimeout(() => {

                loadStage3();

            },500);

        }

    });

}

function loadStage3(){

    currentStage = 3;
    updateStageNumber();

    setMascot("അയ്യേ! നിന്നെ പറ്റിച്ചേ 😂");

    stageArea.innerHTML = `
        <div class="stage-box">

            <h1>😂</h1>

            <h2>
                അയ്യേ! നിന്നെ പറ്റിച്ചേ
            </h2>

            <button
                id="nextStage"
                class="game-btn"
            >
                ശരി... മുന്നോട്ട് പോവാം
            </button>

        </div>
    `;

    document
      .getElementById("nextStage")
      .addEventListener("click", loadStage4);

}

function loadStage4(){

    currentStage = 4;
    updateStageNumber();

    setMascot("ഈ ബട്ടൺ അമർത്തരുത് 😈");

    stageArea.innerHTML = `
        <div class="stage-box">

            <h2>
                ഈ ബട്ടൺ അമർത്തരുത്
            </h2>

            <button
                id="dontClick"
                class="game-btn"
            >
                അമർത്തരുത്
            </button>

        </div>
    `;

    document
      .getElementById("dontClick")
      .addEventListener("click", () => {

        alert("😂 അതാണ് അമർത്തിയത്!");

      });

}
