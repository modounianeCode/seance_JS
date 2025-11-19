function afficher(){
    let x = document.getElementById('test');
    //x = inner.html = ' nouveau pa';
    x.innerHTML="Allah is the one worthy of worship";
    x.style.color = 'red';
    //console.log(x);
}
function useClass(){
    let y = document.getElementsByClassName('best');
    console.log(y);
}
//selection par un selecteur css
function selecteurCSS(){
    let c = document.querySelector('p');
    c.innerHTML = 'utilisation de query selector';
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
