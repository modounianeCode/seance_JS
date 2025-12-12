function changeTitre(){
let k = document.getElementById('titre');
k.innerHTML = "<img src='./images/trio.png'>";
//console.log(k);
}
function fondcouleur(){
    let v = document.getElementById('fond');
    v.style.background ='dark';
    v.style.color ='white';
    v.style.border ='2px solid white';
}
function fin(){
    let container = document.getElementById('containere');//recuperer le div
    var p = document.createElement('p');//cree un nouvel element
    //mettre le contenu dans p
    p.textContent = 'En definitive, il faut considerer le developpement web front-end comme une maison ou le HTML est le batiment, le CSS est la decoration et le JS comme l\'electricite el l\'eau';
    //ajouter le paragraphe dans le div
    container.appendChild(p);
    p.style.color='aqua';
    p.style.fontSize='20px';
    p.style.border='2px solid black';
    p.style.padding='3px';
    p.style.margin='3px';
    //p.style.textDecoration='underline';
    p.style.animation='slide 3s ease infinite';
}
function afficher(){
    var z = document.getElementById('nom').value;
    // z.style.color = 'red';
    //z.style.fontSize = '20px';
   // z.style.border = '2px solid black';
    //z.style.padding = '3px';
    //z.style.margin = '3px';
    //z.style.textDecoration = 'underline';
   // z.style.animation = 'slide 3s ease infinite';
    alert("Merci pour votre suggestion "+z);
}
function changelogo(){

    let i = document.getElementById('h');
    i.setAttribute('src','images/html1.png');
}
const button = document.getElementById('toggle');
button.addEventListener("click",function(){
    document.body.classList.toggle("dark");
}
);
function changemodes(){
    let k = document.getElementById('toggle');
    k.style.color = 'white';
    k.style.background = 'black';
}
function changemodec(){
    let k = document.getElementById('toggle');
    k.style.color = 'black';
    k.style.background = 'white';
}
function changelogo1(){
    let i = document.getElementById('cs');
    i.setAttribute('src','images/css2.png');
   
}
function changelogo2(){

    let m = document.getElementById('je');
    m.setAttribute('src','images/js2.png');
}
function changeback(){
    let m = document.querySelector('body');
    m.style.background = 'cornflowerblue';
}