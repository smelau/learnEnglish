let txtCelebrations = model.engelskCelebrations;
let txtMakingPlans = model.engelskMakingPlans;

// function celebrations() {

//     html = `
//     <div class="page">
// <div onclick="changePage('home')" class='header'>
// <img class="imgHeader" src="https://previews.123rf.com/images/artinspiring/artinspiring2009/artinspiring200900557/155326908-learn-english-class-typographic-header-study-foreign-languages-in-school.jpg" ></div>
// <div class='menu'>
// <button onclick="changePage('wordCelebrations')" class='buttonMenu'>Learn words</button> 
// <button onclick="changePage('readCelebrations')" class='buttonMenu'>Read</button> 
// <button onclick="changePage('writeCelebrations')" class='buttonMenu'>Write</button>
// </div>
// <div class='mainContent'>
// <div class="box sb1">
// ${txtCelebrations}

// </div>
// <img onclick="celebrationsNorwegian()" class='pusur' src='pusur.png' alt= bilde>

// </div>

// </div>




// </div>`
// appDiv.innerHTML = html;
// }


function makingPlans() {
    html = `
    <div class="page">
<div onclick="changePage('home')" class='header'>
<img class="imgHeader" src="https://previews.123rf.com/images/artinspiring/artinspiring2009/artinspiring200900557/155326908-learn-english-class-typographic-header-study-foreign-languages-in-school.jpg" ></div>
<div class='menu'>
<button onclick="changePage('wordMakingPlans')" class='buttonMenu'>Learn words</button> 
<button onclick="changePage('readMakingPlans')" class='buttonMenu'>Listen</button> 
<button onclick="changePage('writeMakingPlans')" class='buttonMenu'>Write</button>
</div>
<div class='mainContent'>
<div class="box sb1">
${txtMakingPlans}

</div>
<img onclick="makingPlansNorwegian()" class='pusur' src='pusur.png' alt= bilde>

</div>

</div>




</div>`
appDiv.innerHTML = html;
}

function wordMakingPlans() {
    html = `
    <div class="page">
<div onclick="changePage('home')" class='header'>
<img class="imgHeader" src="https://previews.123rf.com/images/artinspiring/artinspiring2009/artinspiring200900557/155326908-learn-english-class-typographic-header-study-foreign-languages-in-school.jpg" ></div>
<div class='menu'>
<button onclick="changePage('wordMakingPlans')" class='buttonMenu'>Learn words</button> 
<button onclick="changePage('readMakingPlans')" class='buttonMenu'>Listen</button> 
<button onclick="changePage('writeMakingPlans')" class='buttonMenu'>Write</button>
</div>
<div class='mainContent'>`

for(let i= 0; i <model.makingPlansWords.length; i ++) {
    let first = i % 3 == 0 ? 'first' : '';
html += `
<div class="words ${first}">
<table><tr>
<td><img onclick="playMakingPlans(${[i]})" style= width:150px height: 150px; src=${model.makingPlansWords[i].picture}> </td></td>
${model.makingPlansWords[i].word}</td></tr>
</table>
</div>`
}



html +=
`</div>
</div>  `
appDiv.innerHTML = html;
}

function readMakingPlans() {
    html = /*html*/ `
    <div class="page">
<div onclick="changePage('home')" class='header'><img class="imgHeader" src="https://previews.123rf.com/images/artinspiring/artinspiring2009/artinspiring200900557/155326908-learn-english-class-typographic-header-study-foreign-languages-in-school.jpg" ></div>
<div class='menu'>
<button onclick="changePage('wordMakingPlans')" class='buttonMenu'>Learn words</button> 
<button onclick="changePage('readMakingPlans')" class='buttonMenu'>Listen</button> 
<button onclick="changePage('writeMakingPlans')" class='buttonMenu'>Write</button>
</div>
<div class='mainContent' "readSentences"> 

        <div class="descriptionMakingPlans">
        Click on the volume sign to listen, then click on the correct picture.
        </div>

    <div class="listen">
<table class="tableMakingPlans"><tr>
            <td colspan="2">
            <img class="volumePic" onclick="playAudio('soundsMakingPlans/opptak1.m4a')" src="volume-removebg-preview.png"></td></tr><tr>
           <td> <img onclick="playAudio('soundsEffects/correct.mp3')" class="pic1" src="makingPlansPics/childrenPlay.png"></td>
           <td> <img onclick="playAudio('soundsEffects/wrong.mp3')" class="pic2" src="makingPlansPics/childrenPlay2.png"></td>
           <td> <img onclick="playAudio('soundsEffects/wrong.mp3')" class="pic3" src="makingPlansPics/childrenPlay3.png"></td>
            </tr></table>

    <table class="tableMakingPlans"><tr>
        <td colspan="2">
            <img class="volumePic" onclick="playAudio('soundsMakingPlans/opptak2.m4a')" src="volume-removebg-preview.png"></td></tr><tr>
           <td> <img onclick="playAudio('soundsEffects/wrong.mp3')" class="pic1" src="makingPlansPics/girl3.png"></td>
           <td> <img onclick="playAudio('soundsEffects/wrong.mp3')" class="pic2" src="makingPlansPics/girl2.png"></td>
           <td> <img onclick="playAudio('soundsEffects/correct.mp3')" class="pic3" src="makingPlansPics/girl.png"></td>
            </tr></table>

            <table class="tableMakingPlans"><tr>
        <td colspan="2">
            <img class="volumePic" onclick="playAudio('soundsMakingPlans/opptak3.m4a')" src="volume-removebg-preview.png"></td></tr><tr>
           <td> <img onclick="playAudio('soundsEffects/correct.mp3')" class="pic1" src="makingPlansPics/bath.png"></td>
           <td> <img onclick="playAudio('soundsEffects/wrong.mp3')" class="pic2" src="makingPlansPics/bath2.png"></td>
           <td> <img onclick="playAudio('soundsEffects/wrong.mp3')" class="pic3" src="makingPlansPics/bath3.png"></td>
            </tr></table>

            <table class="tableMakingPlans"><tr>
            <td colspan="2">
                <img class="volumePic" onclick="playAudio('soundsMakingPlans/opptak4.m4a')" src="volume-removebg-preview.png"></td></tr><tr>
               <td> <img onclick="playAudio('soundsEffects/wrong.mp3')" class="pic1" src="makingPlansPics/pond.png"></td>
               <td> <img onclick="playAudio('soundsEffects/correct.mp3')" class="pic2" src="makingPlansPics/pond2.png"></td>
               <td> <img onclick="playAudio('soundsEffects/wrong.mp3')" class="pic3" src="makingPlansPics/pond3.png"></td>
                </tr></table>
</div>

</div>
</div>

</div>`


    appDiv.innerHTML = html;
}


function writeMakingPlans() {
    html = /*html*/`
    <div class="page">
<div onclick="changePage('home')" class='header'><img class="imgHeader" src="https://previews.123rf.com/images/artinspiring/artinspiring2009/artinspiring200900557/155326908-learn-english-class-typographic-header-study-foreign-languages-in-school.jpg" ></div>
<div class='menu'>
<button onclick="changePage('wordMakingPlans')" class='buttonMenu'>Learn words</button> 
<button onclick="changePage('readMakingPlans')" class='buttonMenu'>Listen</button> 
<button onclick="changePage('writeMakingPlans')" class='buttonMenu'>Write</button>
</div>
<div class='mainContent'>
<h3>Write the words in the right order to make a sentence.</h3>`

if (randomQuestionIndex == null) getRandomQuestion(); {
     html +=`
     <div class="makingPlansSentence">${model.makingPlansWrite[randomQuestionIndex]}<br>
     <input style="font-size: 24px; class="inputMakingPlans" id="answerCheck" type="text" placeholder="Type here" oninput="userAnswer = this.value"></input><br>
     <button class="makingPlansSentenceBtn" onclick="svar()">Check answer</button><br><br>
     <button class="makingPlansSentenceBtn" onclick="getRandomQuestion()">Next</button><br><br></div>
     `
    
}


// for(let i = 0; i < model.makingPlans.length; i++){
    
//     let first = i % 2 == 0 ? 'first' : '';
//     html +=  /*html*/`
//     <div class="makingPlansSentence">
//     ${model.makingPlans[i].sentence} <br>
//     <input class="inputMakingPlans" type ="text" oninput="setValueMakePlans(this.value, ${i})" style="font-size: 24px;" id="${i}">
//     <button class="makingPlansSentenceBtn" onclick="checkMakePlans(${i})">Check answer</button>
//     </div>
//     `
// }



    html += `
</div>

</div>`

    appDiv.innerHTML= html; 
}

{/* 
     <div class="empty">
    //     <div class="fill" draggable="true" ></div>
    // </div>
    // <div class="empty"></div>
    // <div class="empty"></div>
    // <div class="empty"></div>
    // <div class="empty"></div>


</div> */}