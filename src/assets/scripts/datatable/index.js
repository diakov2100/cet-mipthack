import * as $ from 'jquery';
import 'datatables';
import  Slider from 'bootstrap-slider';

export default (function () {
	    if (window.location.href.indexOf("basic-table.html") > -1) {
			$( ".rd1" ).click(function() {
				 $("#hd").html("Well #1");
				 $("#gz1").val(40);
				 $("#gz2").val(60);
				 $("#gz3").val(10);

			});
			$( ".rd2" ).click(function() {
				 $("#hd").html("Well #2");
				 $("#gz1").val(70);
				 $("#gz2").val(50);
				 $("#gz3").val(40);
				 
			});
			$( ".rd3" ).click(function() {
				 $("#hd").html("Well #3");
				 $("#gz1").val(90);
				 $("#gz2").val(30);
				 $("#gz3").val(50);
			});
			$( ".rd4" ).click(function() {
				 $("#hd").html("Well #4");
				 $("#gz1").val(40);
				 $("#gz2").val(80);
				 $("#gz3").val(10);
			});
			$( ".rd5" ).click(function() {
				 $("#hd").html("Well #5");
				 $("#gz1").val(40);
				 $("#gz2").val(30);
				 $("#gz3").val(10);
	});
			$( "#br" ).on('input', function () {
				$("#br_val").html('$' + $("#br").val());
				setPrice();
			});
			function setPrice()	{
				var p1 = Math.round(2450 * 2400);
				var p2 = Math.round((2450 + 1300 +  2050)* 2400);
				var p3 = Math.round((2450 + 1300 +  2050 + 1150)* 2400);

				var price1 = Math.round(860 * 100 * 0.7 * $("#br").val() - 2450 * 2400);
				var price2 = Math.round(860 * 100 * 0.7 * $("#br").val() - (2450 + 1300 +  2050)* 2400);
				var price3 = Math.round(860 * 100 * 0.7 * $("#br").val() - (2450 + 1300 +  2050 + 1150)* 2400);

				$("#pr1").html("$" + p1);
				$("#pr2").html("$" + p2);
				$("#pr3").html("$" + p3);

				$("#min").html("$" + price3);
				$("#max").html("$" + price1);
			}
			setPrice();

	 }
}());
