let txtMyself = model.engelskMyself;

function myself(){
    html = `
    <div class="page">
<div onclick="changePage('home')" class='header'>
<img class="imgHeader" src="https://previews.123rf.com/images/artinspiring/artinspiring2009/artinspiring200900557/155326908-learn-english-class-typographic-header-study-foreign-languages-in-school.jpg" ></div>
<div class='menu'>
<button onclick="changePage('wordmyself')" class='buttonMenu'>Learn words</button> 
<button onclick="changePage('readmyself')" class='buttonMenu'>Read</button> 
<button onclick="changePage('writemyself')" class='buttonMenu'>Write</button>
</div>
<div class='mainContent'>

<div id="newTxtNumbers" class="box sb1">
${txtMyself}

</div>
<img onclick="myselfNorwegian()" class= 'pusur' src='pusur.png' alt= bilde>


</div>
</div>



</div>`

appDiv.innerHTML = html;
}

function wordmyself(){
    html = `
    <div class="page">
<div onclick="changePage('home')" class='header'>
<img class="imgHeader" src="https://previews.123rf.com/images/artinspiring/artinspiring2009/artinspiring200900557/155326908-learn-english-class-typographic-header-study-foreign-languages-in-school.jpg" ></div>
<div class='menu'>
<button onclick="changePage('wordmyself')" class='buttonMenu'>Learn words</button> 
<button onclick="changePage('readmyself')" class='buttonMenu'>Read</button> 
<button onclick="changePage('writemyself')" class='buttonMenu'>Write</button>
</div>
<div class='mainContent'>`

for(let i= 0; i <model.mySelf.length; i ++) {
    let first = i % 3 == 0 ? 'first' : '';
html += `
<div class="words ${first}">

<img onclick="playMySelf(${[i]})" style= width:100px height: 100px; src=${model.mySelf[i].picture} > =
${model.mySelf[i].word}

</div>`
}



html +=
`</div>
</div>  `

appDiv.innerHTML = html;
}

function readmyself() {
    html = `
    <div class="page">
<div onclick="changePage('home')" class='header'><img class="imgHeader" src="https://previews.123rf.com/images/artinspiring/artinspiring2009/artinspiring200900557/155326908-learn-english-class-typographic-header-study-foreign-languages-in-school.jpg" ></div>
<div class='menu'>
<button onclick="changePage('wordmyself')" class='buttonMenu'>Learn words</button> 
<button onclick="changePage('readmyself')" class='buttonMenu'>Read</button> 
<button onclick="changePage('writemyself')" class='buttonMenu'>Write</button>
</div>
<div class='mainContent readSentences'> 

<p> 
There are many different names for body parts. Cheeck, back, neck and thumb is some of them. 
<br><br>

I think I would have looked pretty stupid without eyebrows and what would it have been like to walk without a heel.<br><br>

In the summer I love to take e swim. Often the girls use a swinsuit and the boys swimming trunks. 
<br><br>

On my tights I do not have a pocket or a button. And there are no shoelaces on my slippers. 
<br><br>




</p>


</div>
</div>



</div>`
    appDiv.innerHTML = html;
}

function writemyself(){
    html = `
    <div class="page">
<div onclick="changePage('home')" class='header'>
<img class="imgHeader" src="https://previews.123rf.com/images/artinspiring/artinspiring2009/artinspiring200900557/155326908-learn-english-class-typographic-header-study-foreign-languages-in-school.jpg" ></div>
<div class='menu'>
<button onclick="changePage('wordmyself')" class='buttonMenu'>Learn words</button> 
<button onclick="changePage('readmyself')" class='buttonMenu'>Read</button> 
<button onclick="changePage('writemyself')" class='buttonMenu'>Write</button>
</div>
<div class='mainContent'>`

for(i = 0; i < model.mySelf.length; i++){
    let first = i % 2 == 0 ? 'first': '';
    html += `
    <div class='numbersWrite ${first}'> 

   <img class='img' src='${model.mySelf[i].picture}'> = <input oninput='setValueMySelf(this.value, ${i})' type='text' style="text-transform:lowercase" id="${i}"> <button onclick='checkMySelf(${i})'>Check answer</button>

   

   
  </div>
    
    `
}



`</div>
</div>



</div>`

appDiv.innerHTML = html;
}

function visitMe() {
    html = `
    <div class="page">
<div onclick="changePage('home')" class='header'>
<img class="imgHeader" src="https://previews.123rf.com/images/artinspiring/artinspiring2009/artinspiring200900557/155326908-learn-english-class-typographic-header-study-foreign-languages-in-school.jpg" ></div>
<div class='menu'>
<button onclick="changePage('visitMeWords')" class='buttonMenu'>Learn words</button> 
<button onclick="changePage('visitMeRead')" class='buttonMenu'>Read</button> 
<button onclick="changePage('visitMeWrite')" class='buttonMenu'>Write</button>
</div>
<div class='mainContent'>

<div id="newTxtNumbers" class="box sb1">
${txtMyself}

</div>
<img onclick="myselfNorwegian()" class= 'pusur' src='pusur.png' alt= bilde>


</div>
</div>



</div>`

appDiv.innerHTML = html;
}

function visitMeWords() {
    html = `
    <div class="page">
<div onclick="changePage('home')" class='header'>
<img class="imgHeader" src="https://previews.123rf.com/images/artinspiring/artinspiring2009/artinspiring200900557/155326908-learn-english-class-typographic-header-study-foreign-languages-in-school.jpg" ></div>
<div class='menu'>
<button onclick="changePage('visitMeWords')" class='buttonMenu'>Learn words</button> 
<button onclick="changePage('visitRead')" class='buttonMenu'>Read</button> 
<button onclick="changePage('visitMeWrite')" class='buttonMenu'>Write</button>
</div>
<div class='mainContent'>
<h4>Push the button to start the game</h4><button class="memButton" onclick="startGame()">Start</button><button class="memButton" onclick="changePage('visitMeWords')">Try again</button>
<section class='memory-game'>

<div class='memory-card' data-framework ='armchair'>
<img class='front-face imgMem' src='bildermemory/armchair.png' alt='armchair'>
<img class='back-face imgMem' src='https://cdn.pixabay.com/photo/2020/08/12/16/15/question-mark-5483067_960_720.png' alt='front'>


</div>

<div class='memory-card' data-framework ='armchair'>
<img class='front-face imgMem' src='bildermemory/lenestol.png' alt='lenestol'>
<img class='back-face imgMem' src='https://cdn.pixabay.com/photo/2020/08/12/16/15/question-mark-5483067_960_720.png' alt='front'>

</div>

<div class='memory-card' data-framework ='carpet'>
<img class='front-face imgMem' src='bildermemory/carpet.png' alt='carpet'>
<img class='back-face imgMem' src='https://cdn.pixabay.com/photo/2020/08/12/16/15/question-mark-5483067_960_720.png' alt='front'> 


</div>
<div class='memory-card' data-framework ='carpet'>
<img class='front-face imgMem' src='bildermemory/teppe.png' alt='teppe'>
<img class='back-face imgMem' src='https://cdn.pixabay.com/photo/2020/08/12/16/15/question-mark-5483067_960_720.png' alt='front'>

</div>

<div class='memory-card' data-framework ='cupboard'>
<img class='front-face imgMem' src='bildermemory/cupboard.png' alt='cupboard'>
<img class='back-face imgMem' src='https://cdn.pixabay.com/photo/2020/08/12/16/15/question-mark-5483067_960_720.png' alt='front'>

</div>
<div class='memory-card' data-framework ='cupboard'>
<img class='front-face imgMem' src='bildermemory/skap.png' alt='skap'>
<img class='back-face imgMem' src='https://cdn.pixabay.com/photo/2020/08/12/16/15/question-mark-5483067_960_720.png' alt='front'>

</div>

<div class='memory-card' data-framework ='curtains'>
<img class='front-face imgMem' src='bildermemory/curtains.png' alt='curtains'>
<img class='back-face imgMem' src='https://cdn.pixabay.com/photo/2020/08/12/16/15/question-mark-5483067_960_720.png' alt='front'>

</div>

<div class='memory-card' data-framework ='curtains'>
<img class='front-face imgMem' src='bildermemory/gardiner.png' alt='gardiner'>
<img class='back-face imgMem' src='https://cdn.pixabay.com/photo/2020/08/12/16/15/question-mark-5483067_960_720.png' alt='front'>
</div>

<div class='memory-card' data-framework ='fridge'>
<img class='front-face imgMem' src='bildermemory/fridge.png' alt='fridge'>
<img class='back-face imgMem' src='https://cdn.pixabay.com/photo/2020/08/12/16/15/question-mark-5483067_960_720.png' alt='front'>

</div>

<div class='memory-card' data-framework ='fridge'>
<img class='front-face imgMem' src='bildermemory/kjøpeskap.png' alt='kjøleskap'>
<img class='back-face imgMem' src='https://cdn.pixabay.com/photo/2020/08/12/16/15/question-mark-5483067_960_720.png' alt='front'>

</div>

<div class='memory-card' data-framework ='bookshelf'>
<img class='front-face imgMem' src='bildermemory/bookshelf.png' alt='bookshelf'>
<img class='back-face imgMem' src='https://cdn.pixabay.com/photo/2020/08/12/16/15/question-mark-5483067_960_720.png' alt='front'>

</div>

<div class='memory-card' data-framework ='bookshelf'>
<img class='front-face imgMem' src='bildermemory/bokhylle.png' alt='bokhylle'>
<img class='back-face imgMem' src='https://cdn.pixabay.com/photo/2020/08/12/16/15/question-mark-5483067_960_720.png' alt='front'>

</div>

<div class='memory-card' data-framework ='picture'>
<img class='front-face imgMem' src='bildermemory/picture.png' alt='picture'>
<img class='back-face imgMem' src='https://cdn.pixabay.com/photo/2020/08/12/16/15/question-mark-5483067_960_720.png' alt='front'>

</div>

<div class='memory-card' data-framework ='picture'>
<img class='front-face imgMem' src='bildermemory/bilde.png' alt='bilde'>
<img class='back-face imgMem' src='https://cdn.pixabay.com/photo/2020/08/12/16/15/question-mark-5483067_960_720.png' alt='front'>

</div>

<div class='memory-card' data-framework ='sink'>
<img class='front-face imgMem' src='bildermemory/sink.png' alt='sink'>
<img class='back-face imgMem' src='https://cdn.pixabay.com/photo/2020/08/12/16/15/question-mark-5483067_960_720.png' alt='front'>

</div>

<div class='memory-card' data-framework ='sink'>
<img class='front-face imgMem' src='bildermemory/vask.png' alt='vask'>
<img class='back-face imgMem' src='https://cdn.pixabay.com/photo/2020/08/12/16/15/question-mark-5483067_960_720.png' alt='front'>

</div>




</div>


</section>
</div>
</div>




</div>`

appDiv.innerHTML = html;
}

function visitMeRead() {
    html = `
    <div class="page">
<div onclick="changePage('home')" class='header'><img class="imgHeader" src="https://previews.123rf.com/images/artinspiring/artinspiring2009/artinspiring200900557/155326908-learn-english-class-typographic-header-study-foreign-languages-in-school.jpg" ></div>
<div class='menu'>
<button onclick="changePage('visitMeWords')" class='buttonMenu'>Learn words</button> 
<button onclick="changePage('visitMeRead')" class='buttonMenu'>Read</button> 
<button onclick="changePage('visitMeWrite')" class='buttonMenu'>Write</button>
</div>
<div class='mainContent readSentences'>

<p> 
 In my livingroom I have a sofa and an armchair. The table stands on a carpet. <br> Against the wall we have a cupboard and in the windows we have some nice green curtains. <br> If I go up the stairs and to the right I can go in to my room.<br> In my room I have a large bed, a wordrobe for all my clothes, and a mirror. <br> We do also have a bathroom upstairs. In the mornings I always go on the toilet and take a shower.<br> And my mom is the one who uses the washing machine.<br>

</p>
</div>
</div>



</div>`
    appDiv.innerHTML = html;
}

function visitMeWrite() {
    html = `
    <div class="page">
<div onclick="changePage('home')" class='header'><img class="imgHeader" src="https://previews.123rf.com/images/artinspiring/artinspiring2009/artinspiring200900557/155326908-learn-english-class-typographic-header-study-foreign-languages-in-school.jpg" ></div>
<div class='menu'>
<button onclick="changePage('visitMeWords')" class='buttonMenu'>Learn words</button> 
<button onclick="changePage('visitMeRead')" class='buttonMenu'>Read</button> 
<button onclick="changePage('visitMeWrite')" class='buttonMenu'>Write</button>
</div>
<div class='mainContent'>
<h3>Make at least three sentenses about each picture.</h3> <br>
<h4>Take a sceen shot if you want to save it.</h4>


<h4> In the livingroom</h4>
<img class="writeImg" src='https://img2.cgtrader.com/items/2174621/4457304381/large/cartoon-living-room-house-3d-model-low-poly-obj-fbx-ma.jpg' alt='livingroom'>
<textarea class='txtfield1' placeholder="Write here.." rows="8" cols="80" id="TITLE">
</textarea>

<h4> In the bathroom</h4>
<img class="writeImg" src='https://t3.ftcdn.net/jpg/02/72/87/10/360_F_272871089_YDpDhBLwFYqR2xHmXN6otpW0X5uiWvFu.jpg' alt='bathroom'>
<textarea class='txtfield1' placeholder="Write here.." rows="8" cols="80" id="TITLE">
</textarea> <br>

</div>
</div>



</div>`

    appDiv.innerHTML= html; 
}