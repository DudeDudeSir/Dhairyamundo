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

function loadStage6() {

    currentStage = 6;
    updateStage();

    mascot("ഇത് എളുപ്പമാണ് 😏");

    stageArea.innerHTML = `
        <div class="stage-box">

            <h2>ഈ ബട്ടൺ 5 സെക്കന്റ് അമർത്തിപ്പിടിക്കൂ</h2>

            <button
                id="holdBtn"
                class="game-btn">
                ഇവിടെ അമർത്തൂ
            </button>

            <h3 id="countText"></h3>

        </div>
    `;

    const btn = document.getElementById("holdBtn");
    const countText = document.getElementById("countText");

    let timer;
    let count = 0;

    btn.addEventListener("mousedown", () => {

        timer = setInterval(() => {

            count++;

            countText.innerHTML = count + " / 5";

            if(count === 4){

                clearInterval(timer);

                countText.innerHTML =
                    "😂 വിട്ടുപോയി! വീണ്ടും ശ്രമിക്കൂ";

                setTimeout(() => {

                    loadStage7();

                },1500);

            }

        },1000);

    });

    btn.addEventListener("mouseup", () => {

        clearInterval(timer);

    });

}
function loadStage7() {

    currentStage = 7;
    updateStage();

    mascot("ശരിയായ വാതിൽ തിരഞ്ഞെടുക്കൂ 😏");

    stageArea.innerHTML = `
        <div class="stage-box">

            <h2>🚪 ശരിയായ വാതിൽ തിരഞ്ഞെടുക്കൂ</h2>

            <br>

            <button class="game-btn doorBtn">
                🚪 Door 1
            </button>

            <br><br>

            <button class="game-btn doorBtn">
                🚪 Door 2
            </button>

            <br><br>

            <button class="game-btn doorBtn">
                🚪 Door 3
            </button>

        </div>
    `;

    const doors =
        document.querySelectorAll(".doorBtn");

    doors.forEach((door) => {

        door.addEventListener("click", () => {

            stageArea.innerHTML = `
                <div class="stage-box">

                    <h1>😂</h1>

                    <h2>
                        എല്ലാ വാതിലുകളും ഒരേ സ്ഥലത്തേക്കാണ്!
                    </h2>

                    <p>
                        വീണ്ടും പറ്റിച്ചു 😈
                    </p>

                    <br>

                    <button
                        id="nextDoor"
                        class="game-btn">

                        മുന്നോട്ട്

                    </button>

                </div>
            `;

            document
                .getElementById("nextDoor")
                .addEventListener("click", () => {

                    loadStage8();

                });

        });

    });

}
function loadStage8() {

    currentStage = 8;
    updateStage();

    mascot("10 പ്രാവശ്യം ക്ലിക്ക് ചെയ്യൂ 😏");

    stageArea.innerHTML = `
        <div class="stage-box">

            <h2>
                ഈ ബട്ടൺ 10 പ്രാവശ്യം ക്ലിക്ക് ചെയ്യൂ
            </h2>

            <button
                id="clickBtn"
                class="game-btn">

                ക്ലിക്ക്

            </button>

            <h3 id="counter">0 / 10</h3>

        </div>
    `;

    let clicks = 0;

    const btn =
        document.getElementById("clickBtn");

    const counter =
        document.getElementById("counter");

    btn.addEventListener("click", () => {

        clicks++;

        counter.innerHTML =
            clicks + " / 10";

        if(clicks >= 10){

            stageArea.innerHTML = `
                <div class="stage-box">

                    <h1>😂</h1>

                    <h2>
                        ഞാൻ പറഞ്ഞത് ഉറക്കെ പറയാനായിരുന്നു!
                    </h2>

                    <p>
                        വീണ്ടും പറ്റിച്ചു 😈
                    </p>

                    <button
                        id="nextBtn8"
                        class="game-btn">

                        മുന്നോട്ട്

                    </button>

                </div>
            `;

            document
                .getElementById("nextBtn8")
                .addEventListener("click", () => {

                    loadStage9();

                });

        }

    });

}
function loadStage9() {

    currentStage = 9;
    updateStage();

    mascot("പച്ച ബട്ടൺ കണ്ടെത്തൂ 😏");

    let failCount = 0;

    stageArea.innerHTML = `
        <div class="stage-box">

            <h2>🟢 പച്ച ബട്ടൺ കണ്ടെത്തൂ</h2>

            <div style="
                display:flex;
                gap:15px;
                justify-content:center;
                margin-top:20px;
            ">

                <button id="redBtn" class="game-btn">
                    🔴 Red
                </button>

                <button id="greenBtn" class="game-btn">
                    🟢 Green
                </button>

                <button id="blueBtn" class="game-btn">
                    🔵 Blue
                </button>

            </div>

            <p id="failText"></p>

        </div>
    `;

    const greenBtn =
        document.getElementById("greenBtn");

    const redBtn =
        document.getElementById("redBtn");

    const blueBtn =
        document.getElementById("blueBtn");

    const failText =
        document.getElementById("failText");

    function shuffleButtons() {

        const parent =
            greenBtn.parentElement;

        const buttons =
            [redBtn, greenBtn, blueBtn];

        buttons.sort(() => Math.random() - 0.5);

        parent.innerHTML = "";

        buttons.forEach(btn => {
            parent.appendChild(btn);
        });

    }

    greenBtn.addEventListener("mouseover", () => {

        failCount++;

        shuffleButtons();

        if(failCount >= 3){

            stageArea.innerHTML = `
                <div class="stage-box">

                    <h1>😂</h1>

                    <h2>
                        ഇത്രയും എളുപ്പം ജയിക്കാൻ വിടുമോ?
                    </h2>

                    <button
                        id="realGreen"
                        class="game-btn">

                        🟢 യഥാർത്ഥ പച്ച ബട്ടൺ

                    </button>

                </div>
            `;

            document
                .getElementById("realGreen")
                .onclick = loadStage10;

        }

    });

}
function loadStage10(){

    currentStage = 10;
    updateStage();

    mascot("നീ റോബോട്ട് അല്ലെന്ന് തെളിയിക്കൂ 🤖");

    stageArea.innerHTML = `
        <div class="stage-box">

            <h2>☑ ഞാൻ റോബോട്ട് അല്ല</h2>

            <button
                id="robotBtn"
                class="game-btn">

                Verify

            </button>

            <p id="robotText"></p>

        </div>
    `;

    let tries = 0;

    document
        .getElementById("robotBtn")
        .addEventListener("click", () => {

            tries++;

            document
                .getElementById("robotText")
                .innerHTML =
                "😂 വീണ്ടും ശ്രമിക്കൂ";

            if(tries >= 5){

                stageArea.innerHTML = `
                    <div class="stage-box">

                        <h1>🎉</h1>

                        <h2>
                            ശരി ശരി...
                            നീ റോബോട്ട് അല്ല 😂
                        </h2>

                        <button
                            id="next10"
                            class="game-btn">

                            മുന്നോട്ട്

                        </button>

                    </div>
                `;

                document
                    .getElementById("next10")
                    .onclick = () => {

                    alert("Stage 11 Coming Soon 😎");

                };

            }

        });

}
loadStage1();

};
