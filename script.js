$("#menubtn").click(function () {
  $("#navmenu").toggle();
});

$("#book").show();
$("#click").show();

$("#search").hide();
$("#intel").hide();

$("#share").hide();
$("#marks").hide();

$("#simple").click(function () {
  $("#book").show();
  $("#click").show();

  $("#search").hide();
  $("#intel").hide();

  $("#share").hide();
  $("#marks").hide();
});

$("#speed").click(function () {
  $("#book").hide();
  $("#click").hide();

  $("#search").show();
  $("#intel").show();

  $("#share").hide();
  $("#marks").hide();
});

$("#easy").click(function () {
  $("#book").hide();
  $("#click").hide();

  $("#search").hide();
  $("#intel").hide();

  $("#share").show();
  $("#marks").show();
});
