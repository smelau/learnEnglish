
//---------------------------------------------------------------------------------------------------------

//Funksjoner som sjekker om svaret i inputfeltet er riktig, gir enten grønn eller rød bakgrunnsfarge.
function checkNumbers(index) {
    let inputVal = document.getElementById(index);
    if (model.numbers[index].svar == model.numbers[index].word) { inputVal.style.backgroundColor = "green"; }
    else inputVal.style.backgroundColor = "red";
}


function checkSchool(index) {
    let inputVal = document.getElementById(index);
    if (model.school[index].svar == model.school[index].word) { inputVal.style.backgroundColor = "green"; }
    else inputVal.style.backgroundColor = "red";

}

function checkMySelf(index) {
    let inputVal = document.getElementById(index);
    if (model.mySelf[index].svar == model.mySelf[index].word) { inputVal.style.backgroundColor = "green"; }
    else inputVal.style.backgroundColor = "red";

}

//---------------------------------------------------------------------------------------------------------
//Funksjoner som henter verdien fra inputfelt og setter det til "svar"
function setValue(verdi, index) {
    model.numbers[index].svar = verdi;
}
function setValueSchool(verdi, index) {
    model.school[index].svar = verdi;
}
function setValueMySelf(verdi, index) {
    model.mySelf[index].svar = verdi;
}
//---------------------------------------------------------------------------------------------------------
//Funksjoner som gjør det mulig å bytte tekst fra engelsk til norsk ved onclick på Pusur
function numbersNorwegian() {
    if (txtNumbers == model.engelsk) { txtNumbers = model.norsk }
    else { txtNumbers = model.engelsk };

    changePage('numbers');
}

function schoolNorwegian() {
    if (txtSchool == model.engelskSchool) { txtSchool = model.norskSchool }
    else { txtSchool = model.engelskSchool };

    changePage('school');
}

function myselfNorwegian() {
    if (txtMyself == model.engelskMyself) { txtMyself = model.norskMyself }
    else { txtMyself = model.engelskMyself }

    changePage('myself');
}

function celebrationsNorwegian() {
    if(txtCelebrations == model.engelskCelebrations) { txtCelebrations = model.norskCelebrations}
    else {txtCelebrations = model.engelskCelebrations}
    changePage('celebrations');
}

function makingPlansNorwegian() {
    if(txtMakingPlans == model.engelskMakingPlans) {txtMakingPlans = model.norskMakingPlans}
    else {txtMakingPlans = model.engelskMakingPlans}
    changePage('makingPlans');
}
//---------------------------------------------------------------------------------------------------------

//Funksjoner som spille av lyd
function play(index) {
    const music = new Audio(model.soundsNumbers[index])
    music.play();
}

function playSchool(index) {
    const music = new Audio(model.soundsSchool[index])
    music.play();
}

function playMySelf(index) {
    const music = new Audio(model.soundsMySelf[index])
        music.play();
}

function playMakingPlans(index) {
    const music = new Audio(model.soundsMakingPlans[index])
    music.play();
}

function playPics(index){
    cons = music = new Audio(model.soundsEffects[index])
    music.play();
}

//Lyd som er utenfor for-løkke

function playAudio(url) {
    new Audio(url).play();
  }


//---------------------------------------------
//Funksjoner memorygame
function startGame() {
    const cards = document.querySelectorAll('.memory-card');
    cards.forEach(card => {
        let randomsPos = Math.floor(Math.random() * 10);

        card.style.order = randomsPos;
    });
    cards.forEach(card => card.addEventListener('click', flipCard));
    cards.forEach(card => card.classList.remove('flip'));
}

let hasFlippedCard = false;
let lockBoard = false;
let firstCard;
let secondCard;
let pairs = 0;

function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add('flip');
    if (!hasFlippedCard) {
        //first click
        hasFlippedCard = true;
        firstCard = this;
        return;
    }
    //second click
    hasFlippedCard = false;
    secondCard = this;
    checkForMatch();
}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}
function checkForMatch() {
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
    isMatch ? disableCards() : unflipCards();
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    pairs++;
    setTimeout(()=> {
        if(pairs == 8) alert('You win!');

    },800);
    resetBoard();
}

function unflipCards() {
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        lockBoard = false;
    }, 1500);
}


//Funksjoner til Make plans- write: 

// function checkMakePlans(index) {
//     let inputVal = document.getElementById(index);
//     if(model.makingPlans[index].sentenceInput == model.makingPlans[index].sentenceCorrect) 
//     { inputVal.style.backgroundColor = "green"; }
//     else inputVal.style.backgroundColor = "red";
// }

// function setValueMakePlans(verdi, index) {
//     model.makingPlans[index].sentenceInput = verdi;
// }



//Hvorfor kommer det to spørsmål på først, men videre bare ett? 
let numberCorrect = 0;

function getRandomQuestion() {
    userAnswer = "";
    randomQuestionIndex = Math.floor(Math.random() * model.makingPlansWrite.length);
    writeMakingPlans();
}

function svar() {
    let inputVal = document.getElementById('answerCheck');
    if (userAnswer == model.makingPlansCorrect[randomQuestionIndex]) {
        inputVal.style.backgroundColor = "green"; }
    else inputVal.style.backgroundColor = "red";

    if(userAnswer == model.makingPlansCorrect[randomQuestionIndex]){
        numberCorrect++;
    }
    setTimeout(()=> {
        if (numberCorrect == 5) alert('5 correct! Keep up the good work :)');

    },800);
   
}









// Funskjoner til drag and drop
// const fill = document.querySelector('.fill');
// const empties = document.querySelectorAll('.empty');

//lopp through empties and call drag events: 
// for(const empty of empties) {
//     empty.addEventListener('dragover', dragOver);
//     empty.addEventListener('dragenter', dragEnter);
//     empty.addEventListener('dragleave', dragLeave);
//     empty.addEventListener('drop', dragDrop);
// }

//Fill listeners: 

// fill.addEventListener('dragstart', dragStart);
// fill.addEventListener('dragend', dragEnd);

//Drag functions: 

// function dragStart(){
//     this.className += ' hold';
//     setTimeout(() => (this.className = 'invisible'), 0);


// }

// function dragEnd() {
//  this.className = 'fill';
// }

// function dragOver(e) {
// e.preventDefault();
    
// }

// function dragEnter(e) {
//    e.preventDefault();
//     this.className += ' hovered';
// }
// function dragLeave() {
//    this.className = 'empty';
// }
// function dragDrop() {
//     this.className =   'empty';
//     this.append(fill);
// }


