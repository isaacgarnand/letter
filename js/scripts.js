$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var yourNameInput = $("input#yourname").val();
 
    $(".yourname").text(yourNameInput);

    $("#letter").show();
    event.preventDefault();
  });
});