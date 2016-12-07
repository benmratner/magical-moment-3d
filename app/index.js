$(document).ready(function() {
    var fileName = location.href.split("/")[3];
    fileName = fileName.split(".")[0];
    if (fileName) {
        $("#" + fileName).addClass("active");
    } else {
        $("#index").addClass("active");
    }
    $('.carousel').carousel({
        interval: 7500
    })

    $('#bs-example-navbar-collapse-1').on('show.bs.collapse', function() {
        $('.nav-pills').addClass('nav-stacked');
    });

    //Unstack menu when not collapsed
    $('#bs-example-navbar-collapse-1').on('hide.bs.collapse', function() {
        $('.nav-pills').removeClass('nav-stacked');
    });



});
