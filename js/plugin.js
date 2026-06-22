/******tooltip********/
$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();
});
/***************/
$(".qtyplus").on("click", function (e) {
    e.preventDefault();
    fieldName = $(this).attr("name");
    var currentVal = parseInt($("input[name=" + fieldName + "]").val());
    if (!isNaN(currentVal)) {
        $("input[name=" + fieldName + "]").val(currentVal + 1);
    } else {
        $("input[name=" + fieldName + "]").val(1);
    }
});
$(".qtyminus").on("click", function (e) {
    e.preventDefault();
    fieldName = $(this).attr("name");
    var currentVal = parseInt($("input[name=" + fieldName + "]").val());
    if (!isNaN(currentVal) && currentVal > 0) {
        $("input[name=" + fieldName + "]").val(currentVal - 1);
    } else {
        $("input[name=" + fieldName + "]").val(0);
    }
});
/*************/
jQuery('.dropdown-toggle').on('click', function (e) {
  $(this).next().toggle();
});
jQuery('.dropdown-menu.keep-open').on('click', function (e) {
  e.stopPropagation();
});
/******************/
var button = document.querySelectorAll('.imagine');
for (var i = 0; i < button.length; i++) {
  button[i].onmousedown = function(e) {

    var x = (e.offsetX == undefined) ? e.layerX : e.offsetX;
    var y = (e.offsetY == undefined) ? e.layerY : e.offsetY;
    var effect = document.createElement('div');
    effect.className = 'effect';
    effect.style.top = y + 'px';
    effect.style.left = x + 'px';
    e.srcElement.appendChild(effect);
    setTimeout(function() {
      e.srcElement.removeChild(effect);
    }, 1100);
  }
}

/****************/

/**
	 * Date Picker
	 */
	 
	$('.air-datepicker').datepicker({
		minDate: new Date(),
	})
	$('.air-datepicker-with-time').datepicker({
		minDate: new Date(),
	})
	
	var $airDatepickerRangeStartGeneral = $('#airDatepickerRange-general #dateStart-general'),
		$airDatepickerRangeEndGeneral = $('#airDatepickerRange-general #dateEnd-general');

	$airDatepickerRangeStartGeneral.datepicker({
		onSelect: function (fd, date) {
			$airDatepickerRangeEndGeneral.data('datepicker').update('minDate', date);
			$airDatepickerRangeEndGeneral.focus();
		},
		language : "en",
		minDate: new Date(),
	})

	$airDatepickerRangeEndGeneral.datepicker({
		onSelect: function (fd, date) {
			$airDatepickerRangeStartGeneral.data('datepicker').update('maxDate', date)
		},
		autoClose: true,
		language : "en",
	})
	
	var $airDatepickerRangeStartHotel = $('#airDatepickerRange-flight #dateStartflight'),
		$airDatepickerRangeEndHotel = $('#airDatepickerRange-flight #dateEndflight');

	$airDatepickerRangeStartHotel.datepicker({
		onSelect: function (fd, date) {
			$airDatepickerRangeEndHotel.data('datepicker').update('minDate', date);
			$airDatepickerRangeEndHotel.focus();
		},
		language : "en",
		minDate: new Date(),
	})

	$airDatepickerRangeEndHotel.datepicker({
		onSelect: function (fd, date) {
			$airDatepickerRangeStartHotel.data('datepicker').update('maxDate', date)
		},
		autoClose: true,
		language : "en",
	})
	
	var $airDatepickerRangeStartFlight = $('#airDatepickerRange-flight #dateStart-flight'),
		$airDatepickerRangeEndFlight = $('#airDatepickerRange-flight #dateEnd-flight');

	$airDatepickerRangeStartFlight.datepicker({
		onSelect: function (fd, date) {
			$airDatepickerRangeEndFlight.data('datepicker').update('minDate', date);
			$airDatepickerRangeEndFlight.focus();
		},
		language : "en",
		minDate: new Date(),
	})

	$airDatepickerRangeEndFlight.datepicker({
		onSelect: function (fd, date) {
			$airDatepickerRangeStartFlight.data('datepicker').update('maxDate', date)
		},
		autoClose: true,
		language : "en",
	})
	
	var $airDatepickerRangeStartGuide = $('#airDatepickerRange-guide #dateStart-guide'),
		$airDatepickerRangeEndGuide = $('#airDatepickerRange-guide #dateEnd-guide');

	$airDatepickerRangeStartGuide.datepicker({
		onSelect: function (fd, date) {
			$airDatepickerRangeEndGuide.data('datepicker').update('minDate', date);
			$airDatepickerRangeEndGuide.focus();
		},
		language : "en",
		minDate: new Date(),
	})

	$airDatepickerRangeEndGuide.datepicker({
		onSelect: function (fd, date) {
			$airDatepickerRangeStartGuide.data('datepicker').update('maxDate', date)
		},
		autoClose: true,
		language : "en",
	})


/********************/
$(document).ready(function() {
	$("#notificationLink").click(function() {
		$("#notificationContainer").fadeToggle(300);
		$("#notification_count").fadeOut("slow");
		return false;
	});

	//open when load
	$(window).load(function() {
		$("#notificationContainer").fadeToggle(300);
		//$("#notification_count").fadeOut("slow");
		return false;
	});
	
	//Document Click
	$(document).click(function() {
		$("#notificationContainer").hide();
		$("#notification_count").fadeOut("slow");
	});
	//Popup Click
	$("#notificationContainer").click(function() {
		return false
	});
	
	//close when click on close button
	$("#closebtn").click(function() {
		$("#notificationContainer").hide();
		$("#notification_count").fadeOut("slow");
		});
//close when click on close button/////////////////////////////////////
	$("#closebtn").click(function() {
		$("#navContainer").hide();
		$("#navalt_count").fadeOut("slow");
		});
		
		
		$("#navaltLink").click(function() {
		$("#navaltContainer").fadeToggle(300);
		$("#navalt_count").fadeOut("slow");
		return false;
	});
	//Document Click
	$(document).click(function() {
		$("#navaltContainer").hide();
		$("#navalt_count").fadeOut("slow");
	});
	//Popup Click
	$("#navaltContainer").click(function() {
		return true
	});
	
	//close when click on close button
	$("#closebtn").click(function() {
		$("#navaltContainer").hide();
		$("#navalt_count").fadeOut("slow");
		});
			});
/******************/
$(".qtyplus,.qtyminus").on("click", function (e) {
    $("#qty_total").addClass("rotate-x");
    var sum = 0;
    $(".qty").each(function () {
        sum += +$(this).val();
    });
    $("#qty_total").html(sum);
});
function remove_rotate() {
    $("#qty_total").removeClass("rotate-x");
}
const qtyTotal = document.querySelector("#qty_total");
qtyTotal.addEventListener("animationend", remove_rotate);
/******************************/
window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
/**************/
