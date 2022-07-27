const buttons = document.querySelectorAll(".btn-rate");
const form = document.querySelector("form");
const containerContent = document.querySelector(".content");

function removeActiveButtons() {
    for(let button of buttons)
        button.classList.remove("btn-rate_active");   
}

function handlerClickBtn(event) {
    removeActiveButtons();
    if(event.target.classList.contains("btn_rate")) {
        event.target.classList.add("btn-rate_active");
    }else{
        let btn = event.target.closest(".btn-rate");
        btn.classList.add("btn-rate_active");
    }
}

function buttonsIsClicked() {
    for(let button of buttons) {
        if(button.classList.contains("btn-rate_active")) {
            return true;
        }
    }
    return false;
}

function getNumberRate() {
    for(let button of buttons) {
        if(button.classList.contains("btn-rate_active")) {
            return button.innerHTML;
        }
    }
    return null;
}

function changeContent(numberRate) {
    if(numberRate) {
        const innerThanksHTML = `
            <div class="ilustration">
                <img src="./images/illustration-thank-you.svg" alt="image ilustration"/>
            </div>
            <p class="feedback-selected">You selected <span class="rating-number">${numberRate}</span> out of 5</p>
            <h1 class="title title-tanks">Thank you!</h1>
            <p class="message message-tanks">We appreciate you taking the time to give a rating. If you ever need more support,don’t hesitate to get in touch!</p>
        `;
        containerContent.innerHTML = innerThanksHTML;
        containerContent.classList.add("content_align");
    }
}


function inicializeEvents() {
    for(let button of buttons) {
        button.addEventListener("pointerdown", handlerClickBtn);
    }
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        if(buttonsIsClicked()) {
            if(getNumberRate()) {
                changeContent(getNumberRate());
            }
        }else{
            alert('Please select an evaluation number');
        }
    });
}

inicializeEvents();



