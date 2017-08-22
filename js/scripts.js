$(document).ready(function() {
  $("form").submit(function(event) {
    var countTo = parseInt($("#num1").val());
    var countBy = parseInt($("#num2").val());
    var result = [];

    if (isNaN(countTo)) {
      $("#nan1").show();
    } else if (isNaN(countBy)) {
      $("#nan2").show();
    } else if (countTo < 0) {
      $("#lessThanZero1").show();
    } else if (countBy < 0) {
      $("#lessThanZero2").show();
    } else if (countBy > countTo) {
      $("#tooBig").show();
    } else {
      for (var i = 0; i <= countTo; i += countBy) {
        result.push(i)
      }
    }

    $("#output").text(result);
    event.preventDefault();
  });
});
