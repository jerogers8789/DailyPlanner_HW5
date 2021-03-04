var timeOfday = ["9", "10", "11", "12", "1", "2", "3", "4", "5"]
updatetime();

function updatetime() {
  var currentTime = moment().format('H');
  for(var i = 0; i < timeOfday.length; i++) {
    if (parseInt(timeOfday[i]) > currentTime) {
      document.getElementById("#" + timeOfday[i]).attr("style", "background-color: white");}
    else if (parseInt(timeOfday[i]) < currentTime) {
      document.getElementById("#" + timeOfday[i]).attr("style", "background-color: lightgray"); }
    else if (parseInt(timeOfday[i]) == currentTime) {
      document.getElementById("#" + timeOfday[i]).attr("style", "background-color: chartreuse"); }
  }
}

$(".rowBtn").on("click", function() {
  var timeOfday = document.getElementById(this).parent().attr("id");
  var textContent = document.getElementById("input").val().trim();
  localStorage.setItem(timeOfday, textContent);
});
document.getElementById("#9").children("input").val(localStorage.getItem("#9"));
document.getElementById("#10").children("input").val(localStorage.getItem("10"));
document.getElementById("#11").children("input").val(localStorage.getItem("11"));
document.getElementById("#12").children("input").val(localStorage.getItem("12"));
document.getElementById("#1").children("input").val(localStorage.getItem("1"));
document.getElementById("#2").children("input").val(localStorage.getItem("2"));
document.getElementById("#3").children("input").val(localStorage.getItem("3"));
document.getElementById("#4").children("input").val(localStorage.getItem("4"));
document.getElementById("#5").children("input").val(localStorage.getItem("5"));
