$(document).ready(function() {

  var currentTime = new Date();
  var month = currentTime.getMonth();
  var day = currentTime.getDate();
  console.log("Today is " + month + " " + day);
  var holiday = false;
  var holidayMsg = "not a holy day";
  var holidayMsgNl = "geen heilige dag";

  if(month == 00 && day == 01) {
    holidayMsg = "the Solemnity of Mary, the Holy Mother of God";
    holidayMsgNl = "het feest van de H. Maria, Moeder van God";
  }
  if(month == 03 && day == 14) {
    holidayMsg = "Good Friday";
    holidayMsgNl = "Goede Vrijdag";
  }
  if(month == 03 && day == 16) {
    holidayMsg = "Easter Sunday";
    holidayMsgNl = "Pasen";
  }
  if(month == 04 && day == 25) {
    holidayMsg = "the Feast of the Ascension";
    holidayMsgNl = "Hemelvaartsdag";
  }
  if(month == 07 && day == 15) {
    holidayMsg = "the Assumption of the Blessed Virgin Mary";
    holidayMsgNl = "Maria-Tenhemelopneming";
  }
  if(month == 10 && day == 01) {
    holidayMsg = "All Saints' Day";
    holidayMsgNl = "Allerheiligen";
  }
  //
  if(month == 04 && day == 01) {
    holidayMsg = "Christmas";
    holidayMsgNl = "Kerstmis";
  }

  if(holidayMsg !== "not a holy day") {
    holiday = true;
  }

  if(holiday) {
    $('.inner').addClass("show")
    $('.outer').addClass("hide");
    alert("Today is " + holidayMsg + "! Vandaag is " + holidayMsgNl + "!");

}
  else {
    $('.inner').addClass("hide");
    $('.outer').addClass("show");
  }

});