$(function () {
    $("#add").click(function () {
        if ($("#task").val().length > 0) {
            window.location.href = "#task=" + $("#task").val();
            var pos = document.URL.indexOf("task=");
            var task = document.URL.substring(pos + 5, document.URL.length);
            document.getElementById("todo").innerHTML = "<b>Next Task:</b> " + decodeURIComponent(task);
        }
    });
});
var pos = document.URL.indexOf("task=");
var task = document.URL.substring(pos + 5, document.URL.length);
if (pos > 0) {
    document.getElementById("todo").innerHTML = "<b>Next Task:</b> " + decodeURIComponent(task);
}
