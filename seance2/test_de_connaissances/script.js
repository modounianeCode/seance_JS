function changeTitre(){
let k = document.getElementById('titre');
k.innerHTML = "HTML, CSS et JS";
console.log(k);
}
function fondcouleur(){
    let v = document.getElementById('fond');
    v.style.background ='dark';
    v.style.color ='white';
}
function fin(){
    let container = document.getElementById('containere');//recuperer le div
    var p = document.createElement('p');//cree un nouvel element
    //mettre le contenu dans p
    p.textContent = 'En definitive, il faut considerer le developpement web front-end comme une maison ou le HTML est le batiment, le CSS est la decoration et le JS comme l\'electricite el l\'eau';
    //ajouter le paragraphe dans le div
    container.appendChild(p);
    var image = document.createElement('img');
    image.textContent = '<img src = images/trio.png>';
    container.appendChild(image);
}
function afficher(){
    var z = document.getElementById("nom").value;
    alert ("Merci pour votre suggestion "+z);
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