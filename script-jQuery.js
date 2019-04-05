// Bienvenue dans le script MyMails with jQuery by @bclavel

// Fonction qui met à jour le compteur + initialisation au chargement
function updateCounter() {
  $('#calcul-counter-texte').text($('.box').length);
};
updateCounter()

// Fonction qui repère les class trash et supprime la div parent*2 au clic sur le picto + initialisation au chargement
function trashBox() {
  $('.trash').click(
    function() {
      $(this).parent().parent().remove();
      updateCounter();
    }
  );
}
trashBox()

// Récupère le contenu des champs nom et message etgénère une nouvelle box avec les contenus dynamiques
$('#button-add').click(
  function() {
    var newName = $('#name-field').val();
    var newMessage = $('#message-field').val();
    $('#main-messages').prepend("<div class='box newMessage'><img class='avatar' src='./assets/avatar-1.jpg' alt='Noël Paganelli icon'><div><h6 id='noel'>" + newName + "</h6><p class='texte-box' id='targetMessage'>" + newMessage + "</p></div><div><img class='add' src='./assets/add.png' alt='add icon'><img class='trash' src='./assets/trash.png' alt='trash icon'></div></div>")
    trashBox()
    updateCounter()
  }
);

//Filtre les messages dont l'auteur est égal à la valeur du champ search
$('#button-search').click(
  function() {
    var searchValue = $('#search-field').val();
    $('h6').each (
      function() {
        if (searchValue != $(this).text()) {
        $(this).parent().parent().remove()
        updateCounter();
      } else {
        console.log('yeah');
      }
    }
    );
  }
);
