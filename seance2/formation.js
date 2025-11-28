function afficher(){
    let x = document.getElementById('test');
    //x = inner.html = ' nouveau pa';
    x.innerHTML="Allah is the one worthy of worship";
    x.style.color = 'red';
    //console.log(x);
}
function useClass(){
    let y = document.getElementsByClassName('best');
    y.innerHTML = 'I am ready';
}
//selection par un selecteur css
function selecteurCSS(){
    let c = document.querySelector('p');
    c.innerHTML = '<mark>utilisation de query selector</mark>';
}
function modifHTML(){
    let p = document.getElementById('contenu');
    p.textContent = 'Nouveau contenu';
    p.innerHTML ='<strong>Nouveau contenu</strong>';
}
//modification d'un attribut avec setattribute pour modifier des attributs
function changeImg(){
    var k = document.getElementById('img');
    k.setAttribute('src','../seance2/images/1759694545835.png');
}
function classe(){
    let c = document.getElementById('un');
    c.innerHTML = 'Changement en utilisant le nom de la classe';
    c.style.color = 'blue';
}
function soumettre(){
    let g = document.getElementById('diallo');
    g.innerHTML = '<strong>Modou niane etudiant en informatique </strong>';
    g.style.color = 'pink';
    g.style.background = 'black';
}
function creation() {
   let k = document.getElementById('dom');
   let p = document.createElement('p');
   p.textContent="Etudiant en informatique";
   k.appendChild(p);
}
function creation(){
const container = document.getElementById('dom');
const p = document.createElement('p');
p.textContent = 'je suis un etudiant';
container.appendChild(p);
p.style.color ='green';                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
}