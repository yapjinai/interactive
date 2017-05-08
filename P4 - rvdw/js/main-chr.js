$(document).ready(function() {

  //for beaune iframe height

  var currentTime = new Date();
  var month = currentTime.getMonth();
  var day = currentTime.getDate();
  console.log("Today is " + month + " " + day);
  var holiday = false;

  if(true) {
    var holiday = true;
    $('.beaune').addClass("open");
}

  var today = new Date();
  var month = today.getMonth();
  var day = today.getDate();
  console.log("Today is " + today.getDay() + " " + month + " " + day);

  if(today.getDay() == 0){
    $('.nave').addClass("show");
    $('.altar').addClass("show");
    console.log("Sunday");
    pageScroll();
  }
  if(true){
    $('.nave').addClass("show");
    $('.altar').addClass("show");
    console.log("holiday");
    pageScroll();
  }
  else {
    $('.nave').addClass("hide");
    $('.altar').addClass("hide");
    $('.candle').addClass("sunday");
    $('.prayer').addClass("sunday");
    $('.pew').addClass("sunday");
    console.log("Not sunday");
    alert("Er zijn vandaag geen diensten, maar de kerk is open voor gebed. There are no services today, but the church is open for prayer.");
  }
});

function lightOn1() {
  $('.left').addClass("lit");
}

function lightOn2() {
  $('.right').addClass("lit");
}

function pageScroll() {
    window.scrollBy(0,-1); // horizontal and vertical scroll increments
    scrolldelay = setTimeout('pageScroll()',100); // scrolls every 100 milliseconds
};