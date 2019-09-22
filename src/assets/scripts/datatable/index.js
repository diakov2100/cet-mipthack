import * as $ from 'jquery';
import 'datatables';
import  Slider from 'bootstrap-slider';

export default (function () {
	    if (window.location.href.indexOf("basic-table.html") > -1) {
			$( ".rd1" ).click(function() {
				 $("#hd").html("Well #47");
				 $("#gz1").val(40);
				 $("#gz2").val(60);
				 $("#gz3").val(10);

			});
			$( ".rd2" ).click(function() {
				 $("#hd").html("Well #95");
				 $("#gz1").val(70);
				 $("#gz2").val(50);
				 $("#gz3").val(40);
				 
			});
			$( ".rd3" ).click(function() {
				 $("#hd").html("Well #126");
				 $("#gz1").val(90);
				 $("#gz2").val(30);
				 $("#gz3").val(50);
			});
			$( ".rd4" ).click(function() {
				 $("#hd").html("Well #164");
				 $("#gz1").val(40);
				 $("#gz2").val(80);
				 $("#gz3").val(10);
			});
			$( ".rd5" ).click(function() {
				 $("#hd").html("Well #176");
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

						let data = {47: [{'GZ1:7': (231446.0, 24983.0)},
				  {'GZ1:7 + ALPS': (238439.0, 17488.0)},
				  {'GZ1:7 + ALPS + bk': (232372.0, 19986.0)},
				  {'GZ1:7 + ALPS + bk + NKT*': (231477.0, 22484.0)},
				  {'GZ1:7 + ALPS + bk + NKT* + DGK*': (230909.0, 19986.0)}],
				 95: [{'GZ1:7': (124078.0, 47467.0)},
				  {'GZ1:7 + ALPS': (141097.0, 14989.0)},
				  {'GZ1:7 + ALPS + bk': (130104.0, 19986.0)},
				  {'GZ1:7 + ALPS + bk + NKT*': (106782.0, 19986.0)},
				  {'GZ1:7 + ALPS + bk + NKT* + DGK*': (136231.0, 12491.0)}],
				 126: [{'GZ1:7': (492250.0, 37474.0)},
				  {'GZ1:7 + ALPS': (518378.0, 22484.0)},
				  {'GZ1:7 + ALPS + bk': (517993.0, 17488.0)},
				  {'GZ1:7 + ALPS + bk + NKT*': (513082.0, 22484.0)},
				  {'GZ1:7 + ALPS + bk + NKT* + DGK*': (519047.0, 19986.0)}],
				 164: [{'GZ1:7': (662331.0, 39972.0)},
				  {'GZ1:7 + ALPS': (738535.0, 29979.0)},
				  {'GZ1:7 + ALPS + bk': (738384.0, 24983.0)},
				  {'GZ1:7 + ALPS + bk + NKT*': (733670.0, 19986.0)},
				  {'GZ1:7 + ALPS + bk + NKT* + DGK*': (734762.0, 17488.0)}],
				 176: [{'GZ1:7': (313690.0, 29979.0)},
				  {'GZ1:7 + ALPS': (318072.0, 17488.0)},
				  {'GZ1:7 + ALPS + bk': (314265.0, 14989.0)},
				  {'GZ1:7 + ALPS + bk + NKT*': (310671.0, 17488.0)},
				  {'GZ1:7 + ALPS + bk + NKT* + DGK*': (307478.0, 14989.0)}]}

			function setData(id) {
				$("#pr1").html("$" + data[id][0]);
				$("#pr2").html("$" + data[id][1]);
				$("#pr3").html("$" + data[id][2]);

				$("#int1").html("$" + data[id][0]);
				$("#int2").html("$" + data[id][0]);
				$("#int3").html("$" + data[id][0]);
				data[id][1]

			}

			setData(47);

	 }

}());
