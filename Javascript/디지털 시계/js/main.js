$(function () {
	let timer = setInterval(function () {
		let now = new Date();
		let hr = now.getHours();
		let min = now.getMinutes();
		let sec = now.getSeconds();

		if (hr >= 10) {
			hnum = hr;
		} else {
			hnum = "0" + hr;
		}

		if (min >= 10) {
			mnum = min;
		} else {
			mnum = "0" + min;
		}

		if (sec >= 10) {
			snum = sec;
		} else {
			snum = "0" + sec;
		}
		$("#phone p span").eq(0).text(hnum);
		$("#phone p span").eq(1).text(mnum);
		$("#phone p span").eq(2).text(snum);
	}, 1000);

	let now = new Date();
	let hr = now.getHours();
	if (hr >= 6 && hr < 12) {
		$("#wrap").removeClass();
		$("#wrap").addClass("morning");
		$("nav li").removeClass();
		$("nav li").eq(0).addClass("on");
	} else if (hr >= 12 && hr < 16) {
		$("#wrap").removeClass();
		$("#wrap").addClass("afternoon");
		$("nav li").removeClass();
		$("nav li").eq(1).addClass("on");
	} else if (hr >= 16 && hr < 20) {
		$("#wrap").removeClass();
		$("#wrap").addClass("evening");
		$("nav li").removeClass();
		$("nav li").eq(2).addClass("on");
	} else {
		$("#wrap").removeClass();
		$("#wrap").addClass("night");
		$("nav li").removeClass();
		$("nav li").eq(3).addClass("on");
	}

	/*	$("nav li").eq(0).click(function(){
			$("#wrap").removeClass();
			$("#wrap").addClass("morning");
			$("nav li").removeClass();
			$("nav li").eq(0).addClass("on");
		})
		$("nav li").eq(1).click(function(){
			$("#wrap").removeClass();
			$("#wrap").addClass("afternoon");
			$("nav li").removeClass();
			$("nav li").eq(1).addClass("on");
		})
		$("nav li").eq(2).click(function(){
			$("#wrap").removeClass();
			$("#wrap").addClass("evening");
			$("nav li").removeClass();
			$("nav li").eq(2).addClass("on");
		})
		$("nav li").eq(3).click(function(){
			$("#wrap").removeClass();
			$("#wrap").addClass("night");
			$("nav li").removeClass();
			$("nav li").eq(3).addClass("on");
		})*/


	$("nav li").click(function () {
		let name = $(this).children("a").text();
		$("nav li").removeClass();
		$(this).addClass("on");
		$("#wrap").removeClass();
		$("#wrap").addClass(name);
	});
});
