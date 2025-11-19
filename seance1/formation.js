/*function saluer(){
   var prenom = document.getElementById("prenom").value;
   alert("Bonjour "+prenom);
}
const fruits = ["pomme","fraise","banane","orange"];
function afficherTab(){
   //alert(fruits);
   let i = 0;
   for(i=0;i<fruits.length;i++){
      console.log(fruits[i]);
   }
   //console.log(fruits[0]);
   //console.log(fruits[3]);
   let nvfruit = prompt("Entrer un nouveau fruit");
   fruits.push(nvfruit);
   for(i=0;i<fruits.length;i++){
   alert(fruits[i]);
   }
  var indice = prompt("Entrer l'indice de l'element a supprimer ");
   fruits.pop(fruits[indice]);
   for(i=0;i<fruits.length;i++){
   alert(fruits[i]);
   }
}
*/
const cours = ["HTML","CSS","JS"];
function afficherCours(){
   const cours = ["HTML","CSS","JS"];
  let ul=document.getElementById("liste");
  //ul.innerHTML = "bonnnnnnnou";
  for(let i=0;i<cours.length;i++){
   let li=document.createElement("li");
   li.textContent=cours[i];
   ul.appendChild(li);
  }
}