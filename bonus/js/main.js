// Griglia 6x6,
// ad ogni click (su ogni rettangolino) parte una richiesta AJAX che prende un numero random da 1 a 9 (primo end-point della API in slide).
// Se il num ritornato è <= 5 il quadrato diventa giallo,
// se è > di 5 il quadrato diventa verde.
// Il numero ottenuto appare al centro del quadrato

$(document).ready( function() {

  for(var i = 0; i < 36; i++) {
    $(".container").append('<div class="box"></div>');
  }

  $(".box").click(
    function () {
      var self = $(this);
      if (self.hasClass("cliccato")) {
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
          },
          error: function (richiesta, stato, errore) {
            alert("Errore: " + errore);
          }
        });
      }
    }
  );
});
