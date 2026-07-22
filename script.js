// ===============================
// CONTENEDORES
// ===============================

const heartsContainer = document.getElementById("hearts");
const particlesContainer = document.getElementById("particles");




// ===============================
// CREAR CORAZONES
// ===============================

function createHeart(
x = Math.random() * window.innerWidth
){


const heart = document.createElement("div");


heart.className = "heart";


heart.innerHTML = "❤";


heart.style.left = x + "px";


heart.style.top = window.innerHeight + "px";


heart.style.fontSize =
(20 + Math.random()*45) + "px";


heart.style.animationDuration =
(5 + Math.random()*6) + "s";


heartsContainer.appendChild(heart);



setTimeout(()=>{

heart.remove();

},12000);


}




// Lluvia de corazones

setInterval(()=>{

createHeart();
createHeart();
createHeart();

},350);







// ===============================
// PARTICULAS
// ===============================


function createParticle(){


const p = document.createElement("div");


p.className="particle";



let size =
2 + Math.random()*7;



p.style.width=size+"px";

p.style.height=size+"px";



p.style.left =
Math.random()*innerWidth+"px";


p.style.top =
Math.random()*innerHeight+"px";



particlesContainer.appendChild(p);



setTimeout(()=>{

p.remove();

},5000);


}



setInterval(()=>{

createParticle();

},150);







// ===============================
// FUEGOS ARTIFICIALES
// ===============================


function createFirework(){


let x =
Math.random()*innerWidth;


let y =
Math.random()*innerHeight*.45;




for(let i=0;i<45;i++){


let spark =
document.createElement("div");


spark.className="firework";



spark.style.left=x+"px";

spark.style.top=y+"px";



spark.style.setProperty(

"--x",

(Math.random()-0.5)*350+"px"

);



spark.style.setProperty(

"--y",

(Math.random()-0.5)*350+"px"

);



document.body.appendChild(spark);



setTimeout(()=>{

spark.remove();

},1000);


}


}



setInterval(()=>{

createFirework();

},2300);








// ===============================
// CORAZONES EXPLOTANDO
// ===============================


function heartExplosion(){


let x =
Math.random()*innerWidth;


let y =
Math.random()*innerHeight*.45;



for(let i=0;i<35;i++){


let h =
document.createElement("div");


h.className="loveFirework";


h.innerHTML="❤";


h.style.left=x+"px";


h.style.top=y+"px";



h.style.setProperty(

"--hx",

(Math.random()-0.5)*420+"px"

);



h.style.setProperty(

"--hy",

(Math.random()-0.5)*420+"px"

);



document.body.appendChild(h);



setTimeout(()=>{

h.remove();

},1500);



}


}



setInterval(()=>{

heartExplosion();

},3000);








// ===============================
// BOTON SI 🍣
// ===============================


function irSushi(){


let telefono = "522463310122";


let mensaje =
"Mandame mensajito para organizarnos <3";



let url =
"https://wa.me/"
+
telefono
+
"?text="
+
encodeURIComponent(mensaje);



window.location.href=url;


}







// ===============================
// BOTON NO 🥺
// ===============================


function irNo(){


window.location.href="no.html";


}








// ===============================
// CLICK MAGICO
// ===============================


document.addEventListener(
"click",
(e)=>{


for(let i=0;i<20;i++){


setTimeout(()=>{


createHeart(

e.clientX+
(Math.random()-0.5)*200

);



},i*50);


}



});








// ===============================
// MOVIMIENTO ORQUIDEAS
// ===============================


const orchids =
document.querySelectorAll(".orchid");



setInterval(()=>{


orchids.forEach(o=>{


let r =
-5 + Math.random()*10;



o.style.rotate =
r+"deg";


});


},3000);








// ===============================
// PANTALLA COMPLETA
// ===============================


document.addEventListener(
"dblclick",
()=>{


if(!document.fullscreenElement){

document.documentElement.requestFullscreen();

}

else{

document.exitFullscreen();

}


});








// ===============================
// INICIO
// ===============================


window.addEventListener(
"load",
()=>{


for(let i=0;i<50;i++){


setTimeout(()=>{


createHeart();

createParticle();


},i*80);



}



});
