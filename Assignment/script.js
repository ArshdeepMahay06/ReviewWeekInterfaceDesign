
const synth = window.speechSynthesis;
let para = document.querySelector("p");

let colArr01 = "The turkey,Mom,Dad,The dog,My teacher,The elephant,The cat".split(",");
let colArr02 = "sat on,ate,danced with,saw,doesn't like,kissed".split(",");
let colArr03 = "a funny,a scary,a goofy,a slimmy,a barking,a fat".split(",");
let colArr04 = "goat,monkey,fish,cow,frog,bug,worm".split(",");
let colArr05 = "on the moon,on the chair,in my spaghetti,in my soup,on the grass,in my shoes".split(",");

let imgArray = [];

for(let i=0; i<=32; i++){
  imgArray.push(`url(./img/${i}.jpg)`);
}

let allCols = [...colArr01,...colArr02,...colArr03,...colArr04,...colArr05];


for(let i=0; i<allCols.length;i++){
  text = allCols[i].toUpperCase();
  selectedDiv = document.querySelector(`.div${i+1}`);
  selectedDiv.style.backgroundImage = imgArray[i+1];
  let paraObj = document.createElement('p');
  paraObj.textContent = text;
  selectedDiv.appendChild(paraObj);
  
  inputElement = document.querySelector(`.div${i+1} label div input`);
  inputElement.value = text;
}


let col1Selected = "";
let col2Selected = "";
let col3Selected = "";
let col4Selected = "";
let col5Selected = "";


let col1Inputs = document.getElementsByName("col-1");
let col2Inputs = document.getElementsByName("col-2");
let col3Inputs = document.getElementsByName("col-3");
let col4Inputs = document.getElementsByName("col-4");
let col5Inputs = document.getElementsByName("col-5");

let colInputs = [...col1Inputs,...col2Inputs,...col3Inputs,...col4Inputs,...col5Inputs];

let button1 = document.querySelector("#btn-1");
totalButton1ArraySize = colArr01.length;
button1ClickedElement = 1;

let button2 = document.querySelector("#btn-2");
totalButton2ArraySize = colArr02.length;
button2ClickedElement = 1;

let button3 = document.querySelector("#btn-3");
totalButton3ArraySize = colArr03.length;
button3ClickedElement = 1;

let button4 = document.querySelector("#btn-4");
totalButton4ArraySize = colArr04.length;
button4ClickedElement = 1;

let button5 = document.querySelector("#btn-5");
totalButton5ArraySize = colArr05.length;
button5ClickedElement = 1;

button1.addEventListener("click",()=>{ 
  if(button1ClickedElement == totalButton1ArraySize)
    button1ClickedElement = 1;
  else
    button1ClickedElement++;

  col1Inputs.forEach((ele)=>{ele.parentElement.parentElement.parentElement.classList.remove("selected-div")});
  col1Inputs[button1ClickedElement-1].parentElement.parentElement.parentElement.classList.add("selected-div");
  col1Inputs[button1ClickedElement-1].click();

  let targetText = col1Inputs[button1ClickedElement-1].parentElement.parentElement.parentElement.childNodes[2].textContent;

  const utterThis = new SpeechSynthesisUtterance(targetText);
  synth.speak(utterThis);


})

button2.addEventListener("click",()=>{ 
  if(button2ClickedElement == totalButton2ArraySize)
    button2ClickedElement = 1;
  else
    button2ClickedElement++;

  col2Inputs.forEach((ele)=>{ele.parentElement.parentElement.parentElement.classList.remove("selected-div")});
  col2Inputs[button2ClickedElement-1].parentElement.parentElement.parentElement.classList.add("selected-div");
  col2Inputs[button2ClickedElement-1].click();

  
  let targetText = col2Inputs[button2ClickedElement-1].parentElement.parentElement.parentElement.childNodes[2].textContent;

  const utterThis = new SpeechSynthesisUtterance(targetText);
  synth.speak(utterThis);

})


button3.addEventListener("click",()=>{ 
  if(button3ClickedElement == totalButton3ArraySize)
    button3ClickedElement = 1;
  else
    button3ClickedElement++;

  col3Inputs.forEach((ele)=>{ele.parentElement.parentElement.parentElement.classList.remove("selected-div")});
  col3Inputs[button3ClickedElement-1].parentElement.parentElement.parentElement.classList.add("selected-div");
  col3Inputs[button3ClickedElement-1].click();

  
  let targetText = col3Inputs[button3ClickedElement-1].parentElement.parentElement.parentElement.childNodes[2].textContent;

  const utterThis = new SpeechSynthesisUtterance(targetText);
  synth.speak(utterThis);
})

button4.addEventListener("click",()=>{ 
  if(button4ClickedElement == totalButton4ArraySize)
    button4ClickedElement = 1;
  else
    button4ClickedElement++;

  col4Inputs.forEach((ele)=>{ele.parentElement.parentElement.parentElement.classList.remove("selected-div")});
  col4Inputs[button4ClickedElement-1].parentElement.parentElement.parentElement.classList.add("selected-div");
  col4Inputs[button4ClickedElement-1].click();

  
  let targetText = col4Inputs[button4ClickedElement-1].parentElement.parentElement.parentElement.childNodes[2].textContent;

  const utterThis = new SpeechSynthesisUtterance(targetText);
  synth.speak(utterThis);
})

button5.addEventListener("click",()=>{ 
  if(button5ClickedElement == totalButton5ArraySize)
    button5ClickedElement = 1;
  else
    button5ClickedElement++;

  col5Inputs.forEach((ele)=>{ele.parentElement.parentElement.parentElement.classList.remove("selected-div")});
  col5Inputs[button5ClickedElement-1].parentElement.parentElement.parentElement.classList.add("selected-div");
  col5Inputs[button5ClickedElement-1].click();

  
  let targetText = col5Inputs[button5ClickedElement-1].parentElement.parentElement.parentElement.childNodes[2].textContent;

  const utterThis = new SpeechSynthesisUtterance(targetText);
  synth.speak(utterThis);
})

let playBackBtn = document.querySelector("#btn-6");
let surpriseBtn = document.querySelector("#btn-7")

function showPlayback(){
  stringToShow = "";
  stringToShow = colArr01[button1ClickedElement-1]+" " + colArr02[button2ClickedElement-1]+" " + colArr03[button3ClickedElement-1]+" " + colArr04[button4ClickedElement-1]+" " + colArr05[button5ClickedElement-1] ;
  para.textContent = stringToShow+".";
  
  const utterThis = new SpeechSynthesisUtterance(stringToShow);
  synth.speak(utterThis);
}


playBackBtn.addEventListener("click",()=>{
  showPlayback();
})

function surprise(){

  button1ClickedElement = Math.floor(Math.random()*10)%(totalButton1ArraySize) + 1;
  col1Inputs.forEach((ele)=>{ele.parentElement.parentElement.parentElement.classList.remove("selected-div")});
  col1Inputs[button1ClickedElement-1].parentElement.parentElement.parentElement.classList.add("selected-div");
  col1Inputs[button1ClickedElement-1].click();  

  button2ClickedElement = Math.floor(Math.random()*10)%(totalButton2ArraySize) + 1;
  col2Inputs.forEach((ele)=>{ele.parentElement.parentElement.parentElement.classList.remove("selected-div")});
  col2Inputs[button2ClickedElement-1].parentElement.parentElement.parentElement.classList.add("selected-div");
  col2Inputs[button2ClickedElement-1].click();

  button3ClickedElement = Math.floor(Math.random()*10)%(totalButton3ArraySize) + 1;
  col3Inputs.forEach((ele)=>{ele.parentElement.parentElement.parentElement.classList.remove("selected-div")});
  col3Inputs[button3ClickedElement-1].parentElement.parentElement.parentElement.classList.add("selected-div");
  col3Inputs[button3ClickedElement-1].click();

  button4ClickedElement = Math.floor(Math.random()*10)%(totalButton4ArraySize) + 1;
  col4Inputs.forEach((ele)=>{ele.parentElement.parentElement.parentElement.classList.remove("selected-div")});
  col4Inputs[button4ClickedElement-1].parentElement.parentElement.parentElement.classList.add("selected-div");
  col4Inputs[button4ClickedElement-1].click();

  button5ClickedElement = Math.floor(Math.random()*10)%(totalButton5ArraySize) + 1;
  col5Inputs.forEach((ele)=>{ele.parentElement.parentElement.parentElement.classList.remove("selected-div")});
  col5Inputs[button5ClickedElement-1].parentElement.parentElement.parentElement.classList.add("selected-div");
  col5Inputs[button5ClickedElement-1].click();

  stringToShow = "";

  stringToShow = colArr01[button1ClickedElement-1]+" " + colArr02[button2ClickedElement-1]+" " + colArr03[button3ClickedElement-1]+" " + colArr04[button4ClickedElement-1]+" " + colArr05[button5ClickedElement-1] ;

  para.textContent = stringToShow+".";

  const utterThis = new SpeechSynthesisUtterance(stringToShow);
  synth.speak(utterThis);

}

surpriseBtn.addEventListener("click",()=>{
  surprise();
})



