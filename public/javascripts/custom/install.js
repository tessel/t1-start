$(document).ready(function () {
  var hash = window.location.hash;

  if (hash) {
    hash = hash.substring(hash.indexOf('#')+1).toLowerCase();
    if (['osx', 'linux', 'windows'].indexOf(hash) != -1){
      $('#OSSelect').hide();
      $('#'+hash+'-button').trigger("click");
      $('#instructions').show();
    }
  }

  $('.osButton').on('click', function(){
    var id = $(this).attr('id');
    $('#'+id+'-button').trigger("click");   

    $('#OSSelect').fadeOut("fast", function(){
      $('#instructions').fadeIn("fast", function(){
      });
    });
  });

});
