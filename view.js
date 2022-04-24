let txtNumbers= model.engelsk;
let txtSchool = model.engelskSchool;


function changePage(side) {
    model.aktivside = side;
    loadingDuck();
    setTimeout(updateView, 2000) 
}

function updateView() {
    const side = model.aktivside;
    if (side == 'home') home();
    if (side == 'school') school();
    if (side == 'wordSchool') wordSchool();
    if (side == 'readSchool') readSchool();
    if (side == 'writeSchool') writeSchool();

    if (side == 'numbers') numbers();
    if (side == 'wordNumbers') wordNumbers();
    if (side == 'readNumbers') readNumbers();
    if (side == 'writeNumbers') writeNumbers();

    if (side == 'celebrations') celebrations();
    if (side == 'myself') myself();
    if (side == 'wordmyself') wordmyself();
    if (side == 'readmyself') readmyself();
    if (side == 'writemyself') writemyself();

    if (side == 'visitMe') visitMe();
    if (side == 'visitMeWords') visitMeWords();
    if (side == 'visitMeRead') visitMeRead();
    if (side == 'visitMeWrite') visitMeWrite();

    if (side == 'makingPlans') makingPlans();
    if (side == 'wordMakingPlans') wordMakingPlans();
    if (side == 'readMakingPlans') readMakingPlans();
    if (side == 'writeMakingPlans') writeMakingPlans();

    if (side == 'animals') animals();
    if (side == 'helloSummer') helloSummer();
    if (side == 'grammar') grammar();
}

function home() {
html=`

<div class="page">
<div onclick="changePage('home')" class='header'>
<img class="imgHeader" src="https://previews.123rf.com/images/artinspiring/artinspiring2009/artinspiring200900557/155326908-learn-english-class-typographic-header-study-foreign-languages-in-school.jpg" >
</div>
<div class='menu'></div>
<div class='mainContent'>
<div class='options'>
<h2>Choose a category</h2>


<button onclick="changePage('numbers')" class="buttonCategory">Numbers</button>
<button onclick="changePage('school')" class="buttonCategory">School life</button>
<button onclick="changePage('myself')" class="buttonCategory">My self, Families and Friends</button><br>

<button onclick="changePage('visitMe')" class="buttonCategory">Visit Me</button>
<button onclick="changePage('makingPlans')" class="buttonCategory">Making Plans</button><br>

</div>

</div>



</div>

`
;

// <button onclick="changePage('animals')" class="notStarted">Animals</button>
// <button onclick="changePage('helloSummer')" class="notStarted">Hello Summer</button>
// <button onclick="changePage('celebrations')" class="notStarted">Celebrations</button> 

// <button onclick="changePage('grammar')" class="notStarted">Grammar</button>
// <button class='buttonMenu'></button> 


appDiv.innerHTML = html;
}


function school(){
    html = `
    <div class="page">
<div onclick="changePage('home')" class='header'>
<img class="imgHeader" src="https://previews.123rf.com/images/artinspiring/artinspiring2009/artinspiring200900557/155326908-learn-english-class-typographic-header-study-foreign-languages-in-school.jpg" ></div>
<div class='menu'>
<button onclick="changePage('wordSchool')" class='buttonMenu'>Learn words</button> 
<button onclick="changePage('readSchool')" class='buttonMenu'>Read</button> 
<button onclick="changePage('writeSchool')" class='buttonMenu'>Write</button>
</div>
<div class='mainContent'>
<div class="box sb1">
${txtSchool}

</div>
<img onclick="schoolNorwegian()" class='pusur' src='pusur.png' alt= bilde>

</div>

</div>




</div>`
appDiv.innerHTML = html;
}

function wordSchool() {
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

for(let i= 0; i <model.school.length; i ++) {
    let first = i % 3 == 0 ? 'first' : '';
html += `
<div class="words ${first}">
<table><tr>
<td>
<img onclick="playSchool(${[i]})" style= width:150px height: 150px; src=${model.school[i].picture} ></td></td>
${model.school[i].word}</td></tr></table>

</div>`
}



html +=
`</div>
</div>  `
appDiv.innerHTML = html;
}
function readSchool() {
    html = `
    <div class="page">
<div onclick="changePage('home')" class='header'>
<img class="imgHeader" src="https://previews.123rf.com/images/artinspiring/artinspiring2009/artinspiring200900557/155326908-learn-english-class-typographic-header-study-foreign-languages-in-school.jpg" ></div>
<div class='menu'>
<button onclick="changePage('wordSchool')" class='buttonMenu'>Learn words</button> 
<button onclick="changePage('readSchool')" class='buttonMenu'>Read</button> 
<button onclick="changePage('writeSchool')" class='buttonMenu'>Write</button>
</div>
<div class='mainContent'><div class="readSentences">

<p> We have a swing and slide at the school, but we do not have any seesaw. 
<br><br>

Sometimes I like to jump with a skipping rope in the breakes, or do the hopscotch.
<br><br>

In the classroom we have a dustbin for the trash. Gine and Nina are using chalk to write on the blackboard.<br><br>

In the spring, the caretaker sweeps away gravel and stones in the schoolyard.
<br><br>

I love fried eggs and bacon, but on the packed lunch it will be less messy if I have boiled eggs. Or just a sandwich with ham. 
<br><br>

For dinner I like to eat pancakes, fish and chips, or a sussage. And for a dessert I would like a apple pie or a cake. <br><br>

Squirrels like to eat nuts. When we bake a cake, we use sugar.
<br><br>



</p>
</div>
</div>
</div>



</div>`
appDiv.innerHTML = html;
}

function writeSchool(){
    html = `
    <div class="page">
<div onclick="changePage('home')" class='header'>
<img class="imgHeader" src="https://previews.123rf.com/images/artinspiring/artinspiring2009/artinspiring200900557/155326908-learn-english-class-typographic-header-study-foreign-languages-in-school.jpg" ></div>
<div class='menu'>
<button onclick="changePage('wordSchool')" class='buttonMenu'>Learn words</button> 
<button onclick="changePage('readSchool')" class='buttonMenu'>Read</button> 
<button onclick="changePage('writeSchool')" class='buttonMenu'>Write</button>
</div>
<div class='mainContent'>
<h1>Practice writing these words</h1>`

for(let i = 0; i <model.school.length; i++){
    let first = i % 2 == 0 ? 'first' : '';
    
html += `
<div class='numbersWrite ${first}'><img class='img' src="${model.school[i].picture}"> = <input oninput="setValueSchool(this.value, ${i})" type="text" style="text-transform:lowercase" id="${i}"> 
<button onclick="checkSchool(${i})">Check answer</button></div> 
`

}

`
</div>
</div>



</div>`
appDiv.innerHTML = html;
}

function numbers(){
    
    html = `
    <div class="page">
<div onclick="changePage('home')" class='header'>
<img class="imgHeader" src="https://previews.123rf.com/images/artinspiring/artinspiring2009/artinspiring200900557/155326908-learn-english-class-typographic-header-study-foreign-languages-in-school.jpg" ></div>
<div class='menu'>
<button onclick="changePage('wordNumbers')" class='buttonMenu'>Learn words</button> 
<button onclick="changePage('readNumbers')" class='buttonMenu'>Read</button> 
<button onclick="changePage('writeNumbers')" class='buttonMenu'>Write</button>
</div>
<div class='mainContent'>

<div id="newTxtNumbers" class="box sb1">
${txtNumbers} 
</div>
<img onclick="numbersNorwegian()" class= 'pusur' src='pusur.png' alt= bilde>


</div>
</div>



</div>`
appDiv.innerHTML = html;
}



function wordNumbers(){
    html = `
    <div class="page">
        <div onclick="changePage('home')" class='header'>
        <img class="imgHeader" src="https://previews.123rf.com/images/artinspiring/artinspiring2009/artinspiring200900557/155326908-learn-english-class-typographic-header-study-foreign-languages-in-school.jpg" ></div>
            <div class='menu'>
                <button onclick="changePage('wordNumbers')" class='buttonMenu'>Learn words</button> 
                <button onclick="changePage('readNumbers')" class='buttonMenu'>Read</button> 
                <button onclick="changePage('writeNumbers')" class='buttonMenu'>Write</button>
            </div>
<div class='mainContent'>`

html += `
<h3>Click on the pictures to listen</h3>
`

for (let i = 0; i < model.numbers.length; i++) {
    let first = i % 3 == 0 ? 'first' : '';
    html += `
    <div class= 'words ${first}'>
    <table>
    <tr>
        <td>
    <img onclick="play(${[i]})" class='img' src="${model.numbers[i].picture}"></td></td>
    ${model.numbers[i].word} </td></tr></table>
    </div>
    `
    
}
html +=
`</div>
</div>

</div>`
appDiv.innerHTML = html;

}

function readNumbers() {
    html = `
<div class="page">
    <div onclick="changePage('home')" class='header'><img class="imgHeader" src="https://previews.123rf.com/images/artinspiring/artinspiring2009/artinspiring200900557/155326908-learn-english-class-typographic-header-study-foreign-languages-in-school.jpg" ></div>
        <div class='menu'>
<button onclick="changePage('wordNumbers')" class='buttonMenu'>Learn words</button> 
<button onclick="changePage('readNumbers')" class='buttonMenu'>Read</button> 
<button onclick="changePage('writeNumbers')" class='buttonMenu'>Write</button>
</div>
    <div class='mainContent'><div class=readSentences>
<p> 
The first day in the week is Monday. On the 1th of April you can try to fool your friends and family. <br><br>

The second month in the year is February. The livingroom is on the 2nd floor in the house.
<br><br>

If you come in third place, you will get a bronze medal. In the 3rd grade we learned a lot. 
<br><br>

The fourth day in the week is Thursday. The 4th letter in the alphabeth is D. 
<br><br>

This is the fifth time I tell you to do your homework. Do you think you will change classroom in the 5th grade? <br><br>

The room is on the sixth floor. The football match is on the 6th of July. 
<br><br>

The seventh month of the year is July. The 7th grade will be your last year at Jordet Skole. 
<br><br>

I usually get up at eight in the weekends. You will start at Brunla when you start in the 8th grade. <br><br>

September is the ninth month of the year. I am going on a vecation on the 9th of June. 
<br><br>

What is the tenth month in the year? The dance show is on the 10th of September. 

</p>
    </div></div>
</div>



</div>`
appDiv.innerHTML = html;
}

function writeNumbers(){
    html = `
    <div class="page">
<div onclick="changePage('home')" class='header'><img class="imgHeader" src="https://previews.123rf.com/images/artinspiring/artinspiring2009/artinspiring200900557/155326908-learn-english-class-typographic-header-study-foreign-languages-in-school.jpg" ></div>
<div class='menu'>
<button onclick="changePage('wordNumbers')" class='buttonMenu'>Learn words</button> 
<button onclick="changePage('readNumbers')" class='buttonMenu'>Read</button> 
<button onclick="changePage('writeNumbers')" class='buttonMenu'>Write</button>
</div>
<div class='mainContent'>
<h1>Practice writing these words</h1>`

for(let i = 0; i <model.numbers.length; i++){
    let first = i % 2 == 0 ? 'first' : '';
    
html += `
<div class='numbersWrite ${first}'><img  src="${model.numbers[i].picture}"> = <input oninput="setValue(this.value, ${i})" type="text" style="text-transform:lowercase" id="${i}"> 
<button onclick="checkNumbers(${i})">Check answer</button></div> 
`

}

`
</div>
</div>



</div>`
appDiv.innerHTML = html;

}

function loadingDuck() {
    let html = '';

    html = `

    <div class="page">


<div class='mainContent'>


<img class="duck" src="loading.gif" alt="loading..."/>
</div>
</div>
    `
    

    appDiv.innerHTML = html;
}