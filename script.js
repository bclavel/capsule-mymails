console.log('Début')

// Définit le compteur de messages
var totalMessages = document.getElementsByClassName('box').length
document.getElementById('calcul-counter-texte').textContent = totalMessages

// Fonction qui met à jour le compteur
function updateCounter() {
  document.getElementById('calcul-counter-texte').textContent = totalMessages
}

// Boucle qui repère les class trash et supprime la div parent*2 au clic sur le picto
function updateTrash() {
  for(var i=0; i<document.getElementsByClassName('trash').length; i++) {
    document.getElementsByClassName('trash')[i].addEventListener("click",
     function(){
       this.parentNode.parentNode.remove();
       console.log('ça dégage !', this);
       totalMessages = document.getElementsByClassName('box').length
       console.log(totalMessages)
       updateCounter()
     }
    );
  };
};

updateTrash()

console.log('Fin')

// document.getElementById('noel').textContent = 'Bernard Paganelli'

// Récupère le contenu du bloc de référence à duppliquer
var contenuNoel = document.getElementById('noelContent').innerHTML;

// Créer un nouveau bloc de contenu avec le contenu duppliqué
function newContent() {
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
    console.log(document.getElementsByClassName('trash').length);
    totalMessages = document.getElementsByClassName('box').length;
    updateCounter()
    updateTrash()
    console.log(totalMessages);
  }
);
