window.onload = function () {

const stageArea = document.getElementById("stageArea");
const stageCounter = document.getElementById("stageCounter");
const mascotBubble = document.getElementById("mascotGameBubble");

let currentStage = 1;
let playerName = "";

function updateStage() {
    stageCounter.textContent = currentStage + " / 20";
}

function mascot(text) {
    mascotBubble.innerHTML = text;
}

/* ---------------- STAGE 1 ---------------- */

function loadStage1() {

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
        .onclick = () => {

        playerName =
            document.getElementById("nameInput").value;

        if (playerName.trim() === "") {
            alert("പേര് എഴുതൂ 😅");
            return;
        }

        loadStage2();
    };
}

/* ---------------- STAGE 2 ---------------- */

function loadStage2() {

    currentStage = 2;
    updateStage();

    mascot("ഈ ബട്ടൺ പിടിക്കാമോ? 😈");

    stageArea.innerHTML = `
        <div class="stage-box" style="height:300px;position:relative;">

            <h2>ഹലോ ${playerName}</h2>

            <button
                id="moveBtn"
                class="game-btn"
                style="
                    position:absolute;
                    left:40%;
                    top:50%;
                ">
                ക്ലിക്ക് ചെയ്യൂ
            </button>

        </div>
    `;

    const btn = document.getElementById("moveBtn");

    btn.addEventListener("mouseover", () => {

        btn.style.left =
            Math.random() * 70 + "%";

        btn.style.top =
            Math.random() * 60 + "%";

    });

    btn.addEventListener("click", () => {

        loadStage3();

    });

}

/* ---------------- STAGE 3 ---------------- */

function loadStage3() {

    currentStage = 3;
    updateStage();

    mascot("അയ്യേ! നിന്നെ പറ്റിച്ചേ 😂");

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

/* ---------------- STAGE 4 ---------------- */

function loadStage4() {

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

        setTimeout(() => {

            loadStage5();

        }, 1000);

    };

}

/* ---------------- STAGE 5 ---------------- */

function loadStage5() {

    currentStage = 5;
    updateStage();

    mascot("രഹസ്യ ചലഞ്ച് ലോഡ് ചെയ്യുന്നു... 😏");

    stageArea.innerHTML = `
        <div class="stage-box">

            <h2>🔒 Secret Challenge</h2>

            <div style="
                width:300px;
                height:20px;
                background:#333;
                margin:auto;
                border-radius:20px;
                overflow:hidden;
            ">

                <div
                    id="loadingFill"
                    style="
                        width:0%;
                        height:100%;
                        background:lime;
                    ">
                </div>

            </div>

            <h3 id="loadingText">0%</h3>

        </div>
    `;

    const fill =
        document.getElementById("loadingFill");

    const text =
        document.getElementById("loadingText");

    let progress = 0;

    const timer = setInterval(() => {

        progress += 5;

        fill.style.width = progress + "%";
        text.innerHTML = progress + "%";

        if (progress >= 100) {

            clearInterval(timer);

            setTimeout(() => {

                triggerJumpScare();

            }, 1500);

        }

    }, 150);

}

/* ---------------- JUMP SCARE ---------------- */

function triggerJumpScare() {

    const scare =
        document.getElementById("jumpscareImage");

    const scareSound =
        new Audio("assets/sounds/jumpscare.mp3");

    scare.style.display = "flex";

    scareSound.volume = 1.0;

    scareSound.play();

    setTimeout(() => {

        scare.style.display = "none";

        loadStage6();

    }, 1500);

}
/* Start Game */

function loadStage6(){

    currentStage = 6;
    updateStage();

    mascot("ഇത് എളുപ്പമാണ് 😏");

    stageArea.innerHTML = `
        <div class="stage-box">

            <h2>
                ഈ ബട്ടൺ 5 സെക്കന്റ് അമർത്തിപ്പിടിക്കൂ
            </h2>

            <button
                id="holdBtn"
                class="game-btn">

                ഇവിടെ അമർത്തൂ

            </button>

            <h3 id="countText"></h3>

        </div>
    `;

    const btn =
        document.getElementById("holdBtn");

    const countText =
        document.getElementById("countText");

    let timer;
    let count = 0;

    btn.addEventListener("mousedown", () => {

        timer = setInterval(() => {

            count++;

            countText.innerHTML =
                count + " / 5";

            if(count === 4){

    clearInterval(timer);

    countText.innerHTML =
        "😂 വിട്ടുപോയി! വീണ്ടും ശ്രമിക്കൂ";

    setTimeout(() => {

        loadStage7();

    },1500);

}
    });

    btn.addEventListener("mouseup", () => {

        clearInterval(timer);

    });

}

function loadStage7(){

    currentStage = 7;
    updateStage();

    mascot("ശരിയായ വാതിൽ തിരഞ്ഞെടുക്കൂ 😏");

    stageArea.innerHTML = `
        <div class="stage-box">

            <h2>ശരിയായ വാതിൽ തിരഞ്ഞെടുക്കൂ</h2>

            <button class="game-btn doorBtn">🚪 Door 1</button>
            <button class="game-btn doorBtn">🚪 Door 2</button>
            <button class="game-btn doorBtn">🚪 Door 3</button>

        </div>
    `;

    const doors =
        document.querySelectorAll(".doorBtn");

    doors.forEach(btn => {

        btn.addEventListener("click", () => {

            stageArea.innerHTML = `
                <div class="stage-box">

                    <h1>😂</h1>

                    <h2>
                        എല്ലാ വാതിലുകളും ഒരേ സ്ഥലത്തേക്കാണ്!
                    </h2>

                    <button
                        id="nextDoor"
                        class="game-btn">

                        മുന്നോട്ട്

                    </button>

                </div>
            `;

            document
                .getElementById("nextDoor")
                .onclick = () => {

                alert("Stage 8 Coming Soon 😎");

            };

        });

    });

}
