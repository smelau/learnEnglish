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
<button onclick="changePage('readMakingPlans')" class='buttonMenu'>Read</button> 
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
<button onclick="changePage('wordSchool')" class='buttonMenu'>Learn words</button> 
<button onclick="changePage('readSchool')" class='buttonMenu'>Read</button> 
<button onclick="changePage('writeSchool')" class='buttonMenu'>Write</button>
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

}

function writeMakingPlans() {
    html = /*html*/`
    <div class="page">
<div onclick="changePage('home')" class='header'><img class="imgHeader" src="https://previews.123rf.com/images/artinspiring/artinspiring2009/artinspiring200900557/155326908-learn-english-class-typographic-header-study-foreign-languages-in-school.jpg" ></div>
<div class='menu'>
<button onclick="changePage('visitMeWords')" class='buttonMenu'>Learn words</button> 
<button onclick="changePage('visitMeRead')" class='buttonMenu'>Read</button> 
<button onclick="changePage('visitMeWrite')" class='buttonMenu'>Write</button>
</div>
<div class='mainContent'>
<h3>Write the words in the right order to make a sentence.</h3>`

for(let i = 0; i < model.makingPlans.length; i++){
    
    let first = i % 2 == 0 ? 'first' : '';
    html +=  /*html*/`
    <div class="makingPlansSentence">
    ${model.makingPlans[i].sentence} <br>
    <input class="inputMakingPlans" type ="text" oninput="setValueMakePlans(this.value, ${i})" style="font-size: 24px;" id="${i}">
    <button class="makingPlansSentenceBtn" onclick="checkMakePlans(${i})">Check answer</button>
    </div>
    `
}



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