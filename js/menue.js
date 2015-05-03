/* 
 * Dieses Script erstellt das Spielmenue, welches zu Beginn des Spiels und
 * w�hrend des Spiels aufgerufen werden kann.
 */

/*
 * Erstellt das Startmenue in dem der Spieler diverse Optionen zum Start des
 * Spiels einstellen und waehlen kann
 */

var farben_spieler = new Array(4);

$(function() {

  var anzahl_spieler = 2;

  // Zeige Men� nach dem Laden der Seite
  $('#menu').modal();


  // Speichern des Men�s
  $('#menue_speichern').click(function(event) {
    $('#menu').modal('hide');
  });


  /*
   * Fuer jeden Spieler oeffnet sich ein Menue in dem er seine Farbe waehlen kann
   */

  $('#spieleranzahl').change(function(event) {
    switch (event.target.value) {
      case '3':
        $('.spieler_3').show();
        $('.spieler_4').hide();
        var anzahl_spieler = 3;
        break;
      case '4':
        $('.spieler_3, .spieler_4').show();
        var anzahl_spieler = 3;
        break;
      default:
        $('.spieler_3, .spieler_4').hide();
        var anzahl_spieler = 2;
        break;
    }
  });

  // Zeige Menue, wenn der Button Pause gedr�ckt wird

  $('button.pause').click(function(event) {
    $('#menu').modal('show');
  });


  // Farbe f�r Spieler festhalten und gleiche Farbe f�r andere Spieler deaktivieren

  $('.spieler_farben span').each(function(index, el) {
    $(this).click(function(event) {
      // Setze alle aktiven Farben zur�ck
      $(this).parent().find('span').each(function(index, el) {
        $(this).removeClass('active');
      });
      // Ausgew�hlte Farbe als aktiv setzen
      $(this).addClass('active');
      farben_spieler[$(this).parent().attr('class')] = $(this).attr('class').split(' ')[0];
      var aktuelle_farbe = $(this).attr('class').split(' ')[0];
      var aktuelle_active = $(this).attr('class').split(' ')[1];
      // Die ausgew�hlte Farbe f�r andere Spieler deaktivieren
      $('.spieler_farben span').each(function(index, el) {
        if ($(this).hasClass(aktuelle_farbe) && !$(this).hasClass(aktuelle_active)) {
          $(this).addClass('disabled');
        }
      });
    });
  });
});


/*
 * Erstellt ein Pausenmenue das w�hrend des Spiels geoeffnet und geschlossen
 * werden kann
 */
function erstelleSpielmenue() {

}


