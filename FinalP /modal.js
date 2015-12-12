$(document).ready(function(){

    var url = $("#programVid").attr('src');

    $(".featurette-image1").click(function(){
        $('#myModal1').modal('show');
        $('#myModal1 iframe').attr('src', src);
    });
    
    var url = $("#programVid").attr('src');
    
    
    /* Assign empty url value to the iframe src attribute when
    modal hide, which stop the video playing */
    $("#myModal1").on('hide.bs.modal', function(){
        $("#programVid").attr('src', '');
    });
    
    /* Assign the initially stored url back to the iframe src
    attribute when modal is displayed again */
    $("#myModal1").on('show.bs.modal', function(){
        $("#programVid").attr('src', url);
    });
});

$(document).ready(function(){

    var url = $("#nutritionVid").attr('src');

    $(".featurette-image2").click(function(){
        $('#myModal2').modal('show');
        $('#myModal2 iframe').attr('src', src);
    });
    
    var url = $("#nutritionVid").attr('src');
    
    
    /* Assign empty url value to the iframe src attribute when
    modal hide, which stop the video playing */
    $("#myModal2").on('hide.bs.modal', function(){
        $("#nutritionVid").attr('src', '');
    });
    
    /* Assign the initially stored url back to the iframe src
    attribute when modal is displayed again */
    $("#myModal2").on('show.bs.modal', function(){
        $("#nutritionVid").attr('src', url);
    });
});

$(document).ready(function(){

    var url = $("#variationsVid").attr('src');

    $(".featurette-image3").click(function(){
        $('#myModal3').modal('show');
        $('#myModal3 iframe').attr('src', src);
    });
    
    var url = $("#variationsVid").attr('src');
    
    
    /* Assign empty url value to the iframe src attribute when
    modal hide, which stop the video playing */
    $("#myModal3").on('hide.bs.modal', function(){
        $("#variationsVid").attr('src', '');
    });
    
    /* Assign the initially stored url back to the iframe src
    attribute when modal is displayed again */
    $("#myModal3").on('show.bs.modal', function(){
        $("#variationsVid").attr('src', url);
    });
});


