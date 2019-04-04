console.log('Début')

var totalMessages = document.getElementsByClassName('box').length
document.getElementById('calcul-counter-texte').textContent = totalMessages

function updateCounter() {
  document.getElementById('calcul-counter-texte').textContent = totalMessages
}

for(var i=0; i<document.getElementsByClassName('trash').length; i++) {
  // console.log(document.getElementsByClassName('trash'));
  document.getElementsByClassName('trash')[i].addEventListener("click",
   function(){
     this.parentNode.parentNode.remove();
     // alert('êtes vous sûr ?')
     console.log('ça dégage !', this);
     totalMessages = document.getElementsByClassName('box').length
     console.log(totalMessages)
     updateCounter()
   }
  );
};


console.log('Fin')

// for(var i=0; i<document.getElementsByClassName('trash').length; i++) {
//   // console.log(document.getElementsByClassName('trash'));
//   document.getElementsByClassName('trash')[i].addEventListener("click",
//    function(){
//      console.log(this.parentNode.parentNode.textContent);
//    }
//   );
// };

// for (var i = 0; i < document.getElementsByTagName('h6').length; i++) {
//   console.log(document.getElementsByTagName('h6')[i].textContent);
// }

document.getElementById('noel').textContent = 'Bernard Paganelli'

// Récupère le contenu du bloc de référence à duppliquer
var contenuNoel = document.getElementById('noelContent').innerHTML;

// Créer un nouveau bloc de contenu avec le contenu duppliqué
function newContent() {
  // document.getElementById('main-messages').appendChild(document.createElement('div'));
  document.getElementById('main-messages').prepend(document.createElement('div'));
  document.getElementById('main-messages').firstChild.classList.add('box');
  document.getElementById('main-messages').firstChild.classList.add('newMessage');
  document.getElementById('main-messages').firstChild.innerHTML = contenuNoel;
}

// Ecoute et ajoute un bloc au clic + update counter
document.getElementById('new').addEventListener("click",
  function() {
    newContent();
    console.log('new !')
    totalMessages = document.getElementsByClassName('box').length;
    updateCounter()
    console.log(totalMessages);
  }
);
