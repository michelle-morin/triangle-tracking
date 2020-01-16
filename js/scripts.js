// back-end logic: none



// front-end logic:

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var firstSide = parseInt($("input#side1").val());
    var secondSide = parseInt($("input#side2").val());
    var thirdSide = parseInt($("input#side3").val());
    
    if (firstSide + secondSide <= thirdSide || secondSide + thirdSide <= firstSide || firstSide + thirdSide <= secondSide) {
      $(".not").text("not");
      $(".triangle").text("");
    } else if (firstSide === secondSide && firstSide === thirdSide) {
      $(".not").text("");
      $(".triangle").text("equilateral");
    } else if ((firstSide === secondSide && secondSide != thirdSide) || (secondSide === thirdSide && secondSide != firstSide)) {
      $(".not").text("");
      $(".triangle").text("isosceles");
    } else if (firstSide != secondSide && firstSide != thirdSide && secondSide != thirdSide) {
      $(".not").text("");
      $(".triangle").text("scalene");
    }
    
    $("#output").show();
  });
});

