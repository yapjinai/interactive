$(document).ready(function() {

  var currentTime = new Date();
  var month = currentTime.getMonth();
  var day = currentTime.getDate();
  console.log("Today is " + month + " " + day);
  var holiday = false;
  var holidayMsg = "not a holy day";

  if(true) {
    holidayMsg = "Christmas"
  }

  if(holidayMsg !== "not a holy day") {
    holiday = true;
  }

  if(holiday) {
    $('.inner').addClass("show");
    $('.outer').addClass("hide");

}
  else {
    $('.inner').addClass("hide");
    $('.outer').addClass("show");
  }

});