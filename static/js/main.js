$(document).ready(function() {
    var fileName = location.href.split("/").slice(-1)[0];
    fileName = fileName.split(".")[0];
    console.log(fileName);
    if (fileName) {
        $("#" + fileName).addClass("active");
    } else {
        $("#index").addClass("active");
    }
});
