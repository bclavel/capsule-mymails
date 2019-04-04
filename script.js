// Bienvenue dans le script MyMails by @bclavel

// Définit le compteur de messages
var totalMessages = document.getElementsByClassName('box').length;
document.getElementById('calcul-counter-texte').textContent = totalMessages;

// Fonction qui met à jour le compteur
function updateCounter() {
  document.getElementById('calcul-counter-texte').textContent = totalMessages
};

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

// Définition du contenu du champ message
// var messagePerso = document.getElementById('message-field').value;

// Fonction qui vient remplacer le contenu du paragraphe cible par le contenu du champ
function updateMessage() {
  document.getElementById('targetMessage').innerHTML = document.getElementById('message-field').value;
  document.getElementById('message-field').value = ""
  document.getElementById('noel').innerHTML = document.getElementById('name-field').value;
  document.getElementById('name-field').value = ""
};

// Ecoute les clics sur le bouton Ajouter et créé un nouveau bloc avec le contenu du message
document.getElementById('button').addEventListener("click",
function () {
  newContent();
  // messagePerso = document.getElementById('message-field').value;
  totalMessages = document.getElementsByClassName('box').length;
  updateMessage()
  console.log(document.getElementById('targetName'));
  updateCounter()
  updateTrash()
  }
);

// Récupère le contenu du bloc de référence à duppliquer
var contenuNoel = document.getElementById('noelContent').innerHTML;

// Créer un nouveau bloc de contenu avec le contenu duppliqué
function newContent() {
  // var contenuNoel = document.getElementById('noelContent').innerHTML;
  document.getElementById('main-messages').prepend(document.createElement('div'));
  document.getElementById('main-messages').firstChild.classList.add('box');
  document.getElementById('main-messages').firstChild.classList.add('newMessage');
  document.getElementById('main-messages').firstChild.innerHTML = contenuNoel;
};

// Ecoute et ajoute un bloc au clic sur le bouton Nouveau + update counter
document.getElementById('new').addEventListener("click",
  function() {
    newContent();
    totalMessages = document.getElementsByClassName('box').length;
    updateCounter()
    updateTrash()
    console.log(totalMessages);
  }
);
