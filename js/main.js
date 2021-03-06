// Griglia 6x6,
// ad ogni click (su ogni rettangolino) parte una richiesta AJAX che prende un numero random da 1 a 9 (primo end-point della API in slide).
// Se il num ritornato è <= 5 il quadrato diventa giallo,
// se è > di 5 il quadrato diventa verde.
// Il numero ottenuto appare al centro del quadrato

$(document).ready( function() {

  $(".box").click(
    function () {
      var self = $(this);
      $.ajax({
        url: "https://flynn.boolean.careers/exercises/api/random/int",
        method: "GET",
        success: function (data, stato) {
          var randomNum = data.response;
          self.text(randomNum);
          if(randomNum <= 5) {
            self.removeClass("green");
            self.addClass("yellow");
          } else {
            self.removeClass("yellow");
            self.addClass("green");
          }
        },
        error: function (richiesta, stato, errore) {
          alert("Errore: " + errore);
        }
      });
    }
  );
});
