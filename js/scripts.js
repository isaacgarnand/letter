$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var yourNameInput = $("input#yourname").val();
 
    $(".yourname").text(yourNameInput);

    $("#letter").show();
    event.preventDefault();
  });

  $("#formTwo").submit(function(){
    var stringInput = $("input#string").val();
    var allcaps = stringInput.toUpperCase();
    $(".string").text(allcaps);

    $("#reply").show();
    event.preventDefault();

    });
    
});

