// Everything below this line is business (or back-end)logic:

var add = function(number1, number2){
	return number1 + number2;
};

var subtract = function(number1, number2){
	return number1 - number2;
};

var multiply = function(number1, number2){
	return number1 * number2;
};

var divide = function(number1, number2){
	return number1 / number2;
};

// Everything below this line is user interface (front-end) logic:

$(document).ready(function(){
	$("form#math").submit(function(event) {
		event.preventDefault();

		var number1 = parseFloat($("#math1").val());
		var number2 = parseFloat($("#math2").val());

		$("#add").click(function(){
			var result = add(number1, number2);
			$("#output").text(result);
	  });

		$("#subtract").click(function(){
      var result = subtract(number1, number2);
      $("#output").text(result);
    });

    $("#multiply").click(function(){
      var result = multiply(number1, number2);
      $("#output").text(result);
    });

    $("#divide").click(function(){
      var result = divide(number1, number2);
      $("#output").text(result);
    });

	});

});
