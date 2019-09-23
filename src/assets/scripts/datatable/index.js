import * as $ from 'jquery';
import 'datatables';
import  Slider from 'bootstrap-slider';

export default (function () {
	    if (window.location.href.indexOf("basic-table.html") > -1) {
			$( ".rd1" ).click(function() {
				 $("#hd").html("Well #47");
				 $("#gz1").val(80);
				 $("#gz2").val(60);
				 $("#gz3").val(20);
				 setData(47);

			});
			$( ".rd2" ).click(function() {
				 $("#hd").html("Well #95");
				 $("#gz1").val(70);
				 $("#gz2").val(50);
				 $("#gz3").val(20);
				 setData(95);
				 
			});
			$( ".rd3" ).click(function() {
				 $("#hd").html("Well #126");
				 $("#gz1").val(90);
				 $("#gz2").val(80);
				 $("#gz3").val(10);
				 setData(126);

			});
			$( ".rd4" ).click(function() {
				 $("#hd").html("Well #164");
				 $("#gz1").val(70);
				 $("#gz2").val(65);
				 $("#gz3").val(5);
				 setData(164);

			});
			$( ".rd5" ).click(function() {
				 $("#hd").html("Well #176");
				 $("#gz1").val(40);
				 $("#gz2").val(30);
				 $("#gz3").val(10);
				 setData(176);

	        });
			$( "#br" ).on('input', function () {
				$("#br_val").html('$' + $("#br").val());
				setPrice();
			});
			function setPrice()	{
				var p1 = Math.round(2450 * 2400);
				var p2 = Math.round((2450 + 1300 +  2050)* 2400);
				var p3 = Math.round((2450 + 1300 +  2050 + 1150)* 2400);

				var price1 = Math.round(860 * 100 * 0.7 * $("#br").val() * 66 - 2450 * 2400);
				var price2 = Math.round(860 * 100 * 0.7 * $("#br").val() * 66 - (2450 + 1300 +  2050)* 2400);
				var price3 = Math.round(860 * 100 * 0.7 * $("#br").val() * 66 - (2450 + 1300 +  2050 + 1150)* 2400);

				$("#min").html("$" + price3);
				$("#max").html("$" + price1);
			}
			setPrice();

			let data = {47: [[231446.0, 24983.0],[248439.0, 17488.0], [282372.0, 19986.0], [231477.0, 22484.0], [230909.0, 19986.0]],
				 95: [[124078.0, 47467.0],[141097.0, 14989.0],[160104.0, 19986.0]],
				 126: [[492250.0, 37474.0], [518378.0, 22484.0],[567993.0, 17488.0]],
				 164: [[662331.0, 39972.0], [738535.0, 29979.0], [798384.0, 24983.0]],
				 176: [[662331.0, 39972.0], [738535.0, 29979.0], [798384.0, 24983.0]]}

			function setData(id) {
				$("#pr1").html("$" + data[id][0][0]);
				$("#pr2").html("$" + data[id][1][0]);
				$("#pr3").html("$" + data[id][2][0]);

				$("#int1").html("$" + data[id][0][1]);
				$("#int2").html("$" + data[id][1][1]);
				$("#int3").html("$" + data[id][2][1]);
			}

			setData(47);

	 }

}());
