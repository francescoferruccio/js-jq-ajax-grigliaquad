// Griglia 6x6,
// ad ogni click (su ogni rettangolino) parte una richiesta AJAX che prende un numero random da 1 a 9 (primo end-point della API in slide).
// Se il num ritornato è <= 5 il quadrato diventa giallo,
// se è > di 5 il quadrato diventa verde.
// Il numero ottenuto appare al centro del quadrato

$(document).ready( function() {

  var boxDaClick;
  var finito = false;

  for(var i = 0; i < 36; i++) {
    $(".container").append('<div class="box"></div>');
  }

  boxDaClick = i;

  $(".box").click(
    function () {
      var self = $(this);
      if (finito) {
        alert("HAI FINITO, SMETTILA DI CLICCARE!!!");
      } else if (self.hasClass("cliccato")) {
        alert("L'HAI GIA CLICCATO, FURBONE!");
      } else {
        $.ajax({
          url: "https://flynn.boolean.careers/exercises/api/random/int",
          method: "GET",
          success: function (data, stato) {
            var randomNum = data.response;
            self.text(randomNum);
            if(randomNum <= 5) {
              self.addClass("yellow cliccato");
            } else {
              self.addClass("green cliccato");
            }
            boxDaClick--;
            if(boxDaClick == 0) {
              alert("Hai cliccato tutti i quadratini, complimenti!");
              finito = true;
            }
          },
          error: function (richiesta, stato, errore) {
            alert("Errore: " + errore);
          }
        });
      }
    }
  );
});
