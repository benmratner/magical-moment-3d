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



});
