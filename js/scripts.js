$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();
    const over21 = parseInt($("#age").val());
    $(this).hide();
    if (over21>=21){
      $("#voting-info").show();
    }else{
      $("#under-21-info").show();
    }
  });
});