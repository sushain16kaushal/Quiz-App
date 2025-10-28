const questions=[{
        question: "Which device is used to connect computers to the Internet?",
    a: "Router",
    b: "Printer",
    c: "Monitor",
    d: "Keyboard",
    correct: "a"
    },
    {
   question: "Which part of the computer is known as its 'brain'?",
    a: "CPU",
    b: "RAM",
    c: "Hard Disk",
    d: "Monitor",
    correct: "a"
    },
    {
     question: "Which key combination is used to copy text?",
    a: "Ctrl + V",
    b: "Ctrl + X",
    c: "Ctrl + C",
    d: "Ctrl + P",
    correct: "c"
    },
    {
   question: "Which of these is an example of an operating system?",
    a: "MS Paint",
    b: "Windows",
    c: "Google Chrome",
    d: "Gmail",
    correct: "b"
    }
    ,
  {
    question: "Which storage device uses laser technology?",
    a: "Hard Disk",
    b: "CD-ROM",
    c: "Pendrive",
    d: "RAM",
    correct: "b"
  }
];
var index =0;
var right =0;
var wrong =0;
const data = questions[index];
document.getElementById("ques").innerHTML=data.question;
document.getElementById("a").innerText=data.a;
document.getElementById("b").innerText=data.b;
document.getElementById("c").innerText=data.c;
document.getElementById("d").innerText=data.d;

const buttons= document.querySelectorAll(".answer");
buttons.forEach(btn =>{
    btn.addEventListener("click",function(){
        buttons.forEach(b=>b.style.backgroundColor="");
        const currentData = questions[index];
        if(btn.id===currentData.correct){
            btn.style.backgroundColor="green";
            right++;
        }
        else{
            btn.style.backgroundColor="red";
            const correctBtn = document.getElementById(currentData.correct);
      correctBtn.style.backgroundColor = "green";

            wrong++;
        }
        buttons.forEach(b=>b.disabled=true);
    });
});
document.querySelector(".next").addEventListener("click",function(){
index++;
if(index>=questions.length){
    document.querySelector(".question").innerHTML = `
      <h2>Quiz Completed!</h2>
      <p>✅ Correct: ${right}</p>
      <p>❌ Wrong: ${wrong}</p>
      <p>You scored ${(right)*2} out of ${(questions.length)*2} !!!!!</p>`;
      
  }
const data = questions[index];
document.getElementById("ques").innerHTML=data.question;
document.getElementById("a").innerText=data.a;
document.getElementById("b").innerText=data.b;
document.getElementById("c").innerText=data.c;
document.getElementById("d").innerText=data.d;
const buttons= document.querySelectorAll(".answer");
buttons.forEach(b=>{
    b.style.backgroundColor="";
    b.disabled=false;
})
});