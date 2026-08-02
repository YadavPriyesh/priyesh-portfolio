document.addEventListener("DOMContentLoaded",()=>{


/* =========================
LOADING SCREEN
========================= */

const loader=document.querySelector(".loading-screen");

window.addEventListener("load",()=>{

setTimeout(()=>{

loader.style.opacity="0";
loader.style.pointerEvents="none";

},200);

});





/* =========================
SCROLL PROGRESS
========================= */


const progress=document.querySelector(".scroll-progress");


window.addEventListener("scroll",()=>{


let height=
document.documentElement.scrollHeight-
document.documentElement.clientHeight;


let scrolled=
(window.scrollY/height)*100;


progress.style.width=scrolled+"%";


});







/* =========================
NAVBAR BLUR
========================= */


const navbar=document.querySelector(".navbar");


window.addEventListener("scroll",()=>{


if(window.scrollY>50){

navbar.classList.add("scrolled");

}

else{

navbar.classList.remove("scrolled");

}


});








/* =========================
CURSOR FOLLOWER
========================= */


const cursor=document.querySelector(".cursor-glow");


document.addEventListener("mousemove",(e)=>{


cursor.style.left=e.clientX+"px";

cursor.style.top=e.clientY+"px";


});







/* =========================
SCROLL REVEAL
========================= */


const reveals=document.querySelectorAll(".reveal");


const observer=new IntersectionObserver((entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){

entry.target.classList.add("active");

}


});


},{threshold:.15});



reveals.forEach(item=>{

observer.observe(item);

});









/* =========================
COUNTER ANIMATION
========================= */


const counters=document.querySelectorAll(".counter");


let started=false;


function startCounters(){


if(started)return;


counters.forEach(counter=>{


let target=
Number(counter.dataset.target);


let count=0;


let interval=setInterval(()=>{


count++;


counter.innerText=count;


if(count>=target){

clearInterval(interval);

}


},80);



});


started=true;


}



const statsObserver=new IntersectionObserver(entries=>{


entries.forEach(entry=>{


if(entry.isIntersecting){

startCounters();

}


});


});



if(counters.length){

statsObserver.observe(counters[0].parentElement.parentElement);

}










/* =========================
THEME TOGGLE
========================= */


const themeBtn=document.getElementById("themeToggle");


themeBtn.addEventListener("click",()=>{


document.body.classList.toggle("light");


});








/* =========================
BACK TO TOP
========================= */


const topBtn=document.getElementById("topBtn");


topBtn.addEventListener("click",()=>{


window.scrollTo({

top:0,

behavior:"smooth"

});


});









/* =========================
MOBILE MENU
========================= */


const menuBtn=document.querySelector(".menu-btn");

const nav=document.querySelector("nav");



menuBtn.addEventListener("click",()=>{


if(nav.style.display==="flex"){

nav.style.display="none";

}

else{

nav.style.display="flex";

nav.style.flexDirection="column";

nav.style.position="absolute";

nav.style.top="70px";

nav.style.left="20px";

nav.style.right="20px";

nav.style.padding="25px";

nav.style.background="rgba(5,8,22,.95)";

nav.style.borderRadius="20px";

}



});










/* =========================
ACTIVE NAV LINK
========================= */


const sections=document.querySelectorAll("section");

const links=document.querySelectorAll("nav a");



window.addEventListener("scroll",()=>{


let current="";


sections.forEach(section=>{


let top=section.offsetTop-150;


if(window.scrollY>=top){

current=section.id;

}


});



links.forEach(link=>{


link.style.color="";


if(link.getAttribute("href")==="#"+current){

link.style.color="#00E5FF";

}


});


});









/* =========================
CHATBOT
========================= */


const chatToggle=document.querySelector(".chat-toggle");

const chatWindow=document.querySelector(".chat-window");

const closeChat=document.querySelector(".close-chat");

const chatBody=document.querySelector(".chat-body");

const chatInput=document.querySelector(".chat-input input");

const sendBtn=document.querySelector(".chat-input button");

const suggestions=document.querySelectorAll(".suggestions button");






chatToggle.addEventListener("click",()=>{


chatWindow.style.display="block";


});


closeChat.addEventListener("click",()=>{


chatWindow.style.display="none";


});







function addMessage(text,type){


let div=document.createElement("div");


div.className=
"message "+type;


div.innerHTML=text;


chatBody.appendChild(div);


chatBody.scrollTop=
chatBody.scrollHeight;


}






function typing(){


let div=document.createElement("div");


div.className="message bot";


div.innerHTML=
"Thinking<span class='dots'>...</span>";



chatBody.appendChild(div);



return div;


}





function botReply(question){



let q=
question.toLowerCase();



let answer="";



if(
q.includes("who")||
q.includes("yourself")
){

answer=
"I am Priyesh Yadav, an AI Engineer building intelligent systems using LLMs, Generative AI, Databricks, Machine Learning and Data Engineering.";

}



else if(q.includes("project")){


answer=
"My projects include Enterprise RAG Assistant, AI Resume Analyzer, Customer Support AI Agent, Data Engineering Pipeline and GenAI Applications.";

}



else if(q.includes("skill")){


answer=
"My core skills include Python, SQL, LangChain, LangGraph, OpenAI, Gemini, PyTorch, TensorFlow, FastAPI, Databricks, AWS and Azure.";

}



else if(q.includes("cert")){


answer=
"I have certifications in Databricks Generative AI Engineer, Databricks Machine Learning, Python, PySpark and SQL.";

}



else if(q.includes("experience")){


answer=
"I have experience in software engineering, AI engineering and data engineering focused on building scalable intelligent solutions.";

}



else if(q.includes("resume")){


answer=
"You can download my resume from the Resume section.";

}



else if(q.includes("github")){


answer=
"My GitHub contains AI projects, data engineering pipelines and machine learning implementations.";

}



else if(q.includes("linkedin")){


answer=
"You can connect with me on LinkedIn for AI engineering opportunities.";

}



else if(q.includes("hire")){


answer=
"I am open to opportunities where I can build impactful AI products and intelligent automation systems.";

}



else{


answer=
"I can help you learn about my projects, skills, certifications, experience and hiring information.";

}



let typingMessage=typing();



setTimeout(()=>{


typingMessage.remove();


addMessage(answer,"bot");


},1200);



}







function sendMessage(){


let text=chatInput.value.trim();


if(!text)return;



addMessage(text,"user");


chatInput.value="";


botReply(text);



}







sendBtn.addEventListener("click",sendMessage);



chatInput.addEventListener("keypress",(e)=>{


if(e.key==="Enter"){

sendMessage();

}


});




suggestions.forEach(btn=>{


btn.addEventListener("click",()=>{


addMessage(btn.innerText,"user");


botReply(btn.innerText);


});


});








/* =========================
BUTTON RIPPLE EFFECT
========================= */


document.querySelectorAll(".btn").forEach(button=>{


button.addEventListener("click",function(e){


let ripple=document.createElement("span");


ripple.className="ripple";


this.appendChild(ripple);



setTimeout(()=>{


ripple.remove();


},600);


});


});







});
