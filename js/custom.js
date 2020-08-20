$(document).ready(function () {
  $(".button-item").hover(function () {
    if ($(this).hasClass("active")) {
    } else {
      $(".button-item").removeClass("active");
      $(this).addClass("active");
    }
  });

  $("#album-cover .play").click(function (e) {
    if (!$(".progres-fill").hasClass("animate")) {
      $(".progres-fill").addClass("animate");
    }
    e.preventDefault();
    $(this).addClass("inactive");
    $(".pause").removeClass("inactive");
    $(".progres-fill").css("animation-play-state", "running");
  });

  $("#album-cover .pause").click(function (e) {
    e.preventDefault();
    $(this).addClass("inactive");
    $(".play").removeClass("inactive");
    $(".progres-fill").css("animation-play-state", "paused");
  });

  $("#album-cover .back-button").click(function (e) {
    e.preventDefault();
    $(".pause").addClass("inactive");
    $(".play").removeClass("inactive");
    $(".progres-fill").removeClass("animate").css("width", "0%");
  });

  $("#album-cover .next-button").click(function (e) {
    e.preventDefault();
    $(".pause").addClass("inactive");
    $(".play").removeClass("inactive");
    $(".progres-fill").removeClass("animate").css("width", "100%");
  });
  $(".progres-fill").on("animationend webkitAnimationEnd", function () {
    $(".pause").addClass("inactive");
    $(".play").removeClass("inactive");
    $(this).removeClass("animate").css("width", "0%");
  });
  $(".play1").click(function (e) {
    e.preventDefault();
    if (!$(".progres-fill1").hasClass("animate2")) {
      $(".progres-fill1").addClass("animate2");
    }
    $(this).addClass("inactive");
    $(".pause1").removeClass("inactive");
    $(".progres-fill1").css("animation-play-state", "running");
  });
  $(".pause1").click(function (e) {
    e.preventDefault();
    $(this).addClass("inactive");
    $(".play1").removeClass("inactive");
    $(".progres-fill1").css("animation-play-state", "paused");
  });
  $(".progres-fill1").on("animationend webkitAnimationEnd", function () {
    $(".pause1").addClass("inactive");
    $(".play1").removeClass("inactive");
    $(this).removeClass("animate2").css("width", "0%");
  });
  $(".reset").click(function (e) {
    e.preventDefault();
    $(".labels input").each(function () {
      var checkVal = $(this).attr("checked");
      if (checkVal == "checked") {
        $(this).prop("checked", true);
      } else {
        $(this).prop("checked", false);
      }
    });
  });

  $("#datetimepicker").datetimepicker({
    onSelect: function (date) {
      console.log(date);
    },
    timepicker: false,
    format: "d.m.Y",
    inline: true,
  });

  Date.prototype.monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  Date.prototype.getMonthName = function () {
    return this.monthNames[this.getMonth()];
  };

  var d = $("#datetimepicker").datetimepicker("getValue");

  var dd = d.getDate(); //yields day
  var MM = d.getMonthName(); //yields month
  var yyyy = d.getFullYear(); //yields year

  $(".day-num").html(dd);
  $(".mon").html(MM);
  $(".year").html(yyyy);

  $("#datetimepicker").on("change", function () {
    var d = $("#datetimepicker").datetimepicker("getValue");
    var dd = d.getDate(); //yields day
    var MM = d.getMonthName(); //yields month
    var yyyy = d.getFullYear(); //yields year

    $(".day-num").html(dd);
    $(".mon").html(MM);
    $(".year").html(yyyy);
  });
  $(".left-arrow").on("click", function (e) {
    e.preventDefault();
    $(".xdsoft_prev").trigger("click");
  });

  var canvas = document.getElementById("myCanvas");
  var context = canvas.getContext("2d");

  context.beginPath();
  context.moveTo(10, 135);
  context.lineTo(55, 68);
  context.lineTo(80, 90);
  context.lineTo(105, 60);
  context.lineTo(115, 80);
  context.lineTo(122, 70);
  context.lineTo(145, 95);
  context.lineTo(185, 50);
  context.lineTo(197, 60);
  context.lineTo(210, 40);
  context.lineWidth = 5;

  // set line color
  context.strokeStyle = "#ffed19";
  context.stroke();
});
