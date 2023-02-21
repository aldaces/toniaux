$(document).ready(function () {
	$('.slider').slick({
		centerMode: true,
		slidesToShow: 2,
		prevArrow: $('.prev'),
		nextArrow: $('.next'),
	});
});

//$(document).ready(function () {
//	let v1 = $(".video");
//	v1.on("mouseover" , "video" , function(){
//	this.play();
//	$( this ).css( "background-color", "black" );
//});
//	v1.on("mouseleave", "video" ,function(){
//	this.pause();
//	});
//});
