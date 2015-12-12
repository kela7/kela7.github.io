$('.bg-holder').parallaxScroll({
  friction: 0.5
});

$(document).ready(function(){

    var url = $(".modal-body1").attr('src');

    $(".btndefault1").click(function(){
        $('#myModal-1').modal('show');
    });
    $("#myModal-1").click(function(){
        $("#myModal-1").hide();
});    