window.onload = function () {

const stageArea = document.getElementById("stageArea");
const stageCounter = document.getElementById("stageCounter");
const mascotBubble = document.getElementById("mascotGameBubble");

let currentStage = 1;
let playerName = "";

loadStage1();

function updateStage() {
    stageCounter.textContent = currentStage + " / 20";
}

function mascot(text){
    mascotBubble.innerHTML = text;
}

function loadStage1(){

    currentStage = 1;
    updateStage();

    mascot("നിന്റെ പേര് എന്താണ്? 😏");

    stageArea.innerHTML = `
        <div class="stage-box">
            <h2>നിന്റെ പേര് എന്താണ്?</h2>

            <input
                id="nameInput"
                class="game-input"
                placeholder="പേര്">

            <br><br>

            <button
                id="continueBtn"
                class="game-btn">
                തുടരുക
            </button>
        </div>
    `;

    document
      .getElementById("continueBtn")
      .addEventListener("click", () => {

        playerName =
          document.getElementById("nameInput").value;

        if(playerName.trim() === ""){
            alert("പേര് എഴുതൂ 😅");
            return;
        }

        loadStage2();

      });

}

function loadStage2(){

    currentStage = 2;
    updateStage();

    mascot("ഈ ബട്ടൺ പിടിക്കാമോ? 😈");

    stageArea.innerHTML = `
        <div class="stage-box">

            <h2>ഹലോ ${playerName}</h2>

            <button
            id="moveBtn"
            class="game-btn"
            style="
            position:absolute;
            left:40%;
            top:50%;">
            ക്ലിക്ക് ചെയ്യൂ
            </button>

        </div>
    `;

    const btn =
      document.getElementById("moveBtn");

    let count = 0;

    btn.addEventListener("mouseover", () => {

        btn.style.left =
          Math.random()*70 + "%";

        btn.style.top =
          Math.random()*60 + "%";

    });

    btn.addEventListener("click", () => {

        count++;

        if(count >= 1){
            loadStage3();
        }

    });

}

function loadStage3(){

    currentStage = 3;
    updateStage();

    mascot("അയ്യേ നിന്നെ പറ്റിച്ചേ 😂");

    stageArea.innerHTML = `
        <div class="stage-box">

            <h1>😂</h1>

            <h2>അയ്യേ! നിന്നെ പറ്റിച്ചേ</h2>

            <button
            id="nextBtn"
            class="game-btn">

            മുന്നോട്ട്

            </button>

        </div>
    `;

    document
      .getElementById("nextBtn")
      .onclick = loadStage4;

}

function loadStage4(){

    currentStage = 4;
    updateStage();

    mascot("ഈ ബട്ടൺ അമർത്തരുത് 😈");

    stageArea.innerHTML = `
        <div class="stage-box">

            <h2>ഈ ബട്ടൺ അമർത്തരുത്</h2>

            <button
            id="dontBtn"
            class="game-btn">

            അമർത്തരുത്

            </button>

        </div>
    `;

    document
      .getElementById("dontBtn")
      .onclick = () => {

        alert("😂 അതാണ് അമർത്തിയത്!");

      };

}

};
