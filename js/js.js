$(document).ready(function()
{

/*
$(".menu ul li a").eq(1).css({"border-radius":"0 0 0 10px"});


$(".menu ul li ").eq(0).mouseover(function(){
	$(".menu ul li a").eq(1).css({"border-radius":"0 0 0 10px"});
	$(".menu ul").css({"background":"#FDEFF9"});
})

$(".menu ul li a").eq(1).mouseover(function(){
	$(".menu ul li a").eq(2).css({"border-radius":"0 0 0 10px"});
	$(".menu ul li a").eq(0).css({"border-radius":"0 0 10px 0px"});
	$(".menu ul").css({"background":"#FDEFF9"});
})

$(".menu ul li a").eq(2).mouseover(function(){
	$(".menu ul li a").eq(3).css({"border-radius":"0 0 0 10px"});
	$(".menu ul li a").eq(1).css({"border-radius":"0 0 10px 0px"});
	$(".menu ul").css({"background":"#FDEFF9"});
})
$(".menu ul li a").eq(3).mouseover(function(){
	
	$(".menu ul li a").eq(2).css({"border-radius":"0 0 10px 0px"});
	$(".menu ul").css({"background":"#FDEFF9"});
})

$("#menu ul li ").eq(0).mouseout(function(){
	$(".menu ul li a").eq(1).css({"border-radius":"0 0 0 0px"});
	
	$(".menu ul li a").eq(1).css({"border-radius":"0 0 0 10px"});
})
$("#menu ul li ").eq(2).mouseout(function(){
	$(".menu ul li a").eq(3).css({"border-radius":"0 0 0 0px"});
	$(".menu ul li a").eq(1).css({"border-radius":"0 0 0px 0"});
	
	
})

$("#menu ul li ").eq(3).mouseout(function(){
	$(".menu ul li a").eq(2).css({"border-radius":"0 0 0 0px"});
	
})


*/
$(".language .userParam").click(function(){
$(".list-lang").toggle();
})

$("#menu ul li a").eq(1).css({"border-radius":"0 0 0 10px"});


$("#menu ul li ").eq(0).mouseover(function(){
	$("#menu ul li a").eq(1).css({"border-radius":"0 0 0 10px"});
	$("#menu ul").css({"background":"#f7e8f6"});
})
$("#menu ul li a").eq(1).mouseover(function(){

	$(this).css({"background": "url('img/liststyle.png') no-repeat scroll 1px 15px #FFFFFF"});
})
$("#menu ul li a").eq(1).mouseover(function(){
	$(this).css({"border-top":"3px solid #E4E5EE"});
})
$("#menu ul li ").eq(2).mouseover(function(){
	$("#menu ul li a").eq(3).css({"border-radius":"0 0 0 10px"});
	$("#menu ul li a").eq(1).css({"border-radius":"0 0 10px 0px"});
	$("#menu ul").css({"background":"#f7e8f6"});
})

$("#menu ul li ").eq(3).mouseover(function(){
	$("#menu ul li a").eq(4).css({"border-radius":"0 0 0 10px"});
	$("#menu ul li a").eq(2).css({"border-radius":"0 0 10px 0"});
	$("#menu ul").css({"background":"#f7e8f6"});
})

$("#menu ul li ").eq(4).mouseover(function(){
	$("#menu ul li a").eq(5).css({"border-radius":"0 0 0 10px"});
	$("#menu ul li a").eq(3).css({"border-radius":"0 0 10px 0"});
	$("#menu ul").css({"background":"#f7e8f6"});
})
$("#menu ul li a ").eq(5).mouseover(function(){

	$(this).css({"background": "url('img/liststyle.png') no-repeat scroll 1px 15px #FFFFFF"});
})
$("#menu ul li a").eq(5).mouseover(function(){
	$(this).css({"border-top":"3px solid #E4E5EE"});
})

$("#menu ul li ").eq(6).mouseover(function(){
	$("#menu ul li a").eq(7).css({"border-radius":"0 0 0 10px"});
	$("#menu ul li a").eq(5).css({"border-radius":"0 0 10px 0"});
	$("#menu ul").css({"background":"#f7e8f6"});
})

$("#menu ul li ").eq(7).mouseover(function(){
	$("#menu ul li a").eq(8).css({"border-radius":"0 0 0 10px"});
	$("#menu ul li a").eq(6).css({"border-radius":"0 0 10px 0"});
	$("#menu ul").css({"background":"#f7e8f6"});
})

$("#menu ul li ").eq(8).mouseover(function(){
	$("#menu ul li a").eq(9).css({"border-radius":"0 0 0 10px"});
	$("#menu ul li a").eq(7).css({"border-radius":"0 0 10px 0"});
	$("#menu ul").css({"background":"#f7e8f6"});
})
$("#menu ul li ").eq(9).mouseover(function(){
	$("#menu ul li a").eq(10).css({"border-radius":"0 0 0px 10px"});
	$("#menu ul li a").eq(8).css({"border-radius":"0 0 10px 0"});
	$("#menu ul").css({"background":"#f7e8f6"});
})
$("#menu ul li ").eq(10).mouseover(function(){
	$("#menu ul li a").eq(11).css({"border-radius":"0 0 0px 10px"});
	$("#menu ul li a").eq(9).css({"border-radius":"0 0 10px 0"});
	$("#menu ul").css({"background":"#f7e8f6"});
})
$("#menu ul li a ").eq(11).mouseover(function(){
	$(this).css({"background": "url('img/liststyle2.png') no-repeat scroll 1px 15px #FFFFFF"});
})
$("#menu ul li a").eq(11).mouseover(function(){
	$(this).css({"border-top":"3px solid #E4E5EE"});
})
$("#menu ul li ").eq(12).mouseover(function(){
	
	$("#menu ul li a").eq(11).css({"border-radius":"0 0 10px 0px"});
	$("#menu ul").css({"background":"#f7e8f6"});
})
//------ mouseout ----------


$("#menu ul li ").eq(0).mouseout(function(){
	$("#menu ul li a").eq(1).css({"border-radius":"0 0 0 0px"});
	//$("#menu ul").css({"background":"#FFF"});
	$("#menu ul li a").eq(1).css({"border-radius":"0 0 0 10px"});
})
$("#menu ul li ").eq(1).mouseout(function(){
	$("#menu ul li a").eq(2).css({"border-radius":"0 0 0 0px"});
	$("#menu ul li a").eq(0).css({"border-radius":"0 0 0px 0"});
	//$("#menu ul").css({"background":"#FFF"});
	$("#menu ul li a").eq(1).css({"border-radius":"0 0 0 10px"});
})

$("#menu ul li ").eq(2).mouseout(function(){
	$("#menu ul li a").eq(3).css({"border-radius":"0 0 0 0px"});
	$("#menu ul li a").eq(1).css({"border-radius":"0 0 0px 0"});
//	$("#menu ul").css({"background":"#FFF"});
	$("#menu ul li a").eq(1).css({"border-radius":"0 0 0 10px"});
})

$("#menu ul li ").eq(3).mouseout(function(){
	$("#menu ul li a").eq(4).css({"border-radius":"0 0 0 0px"});
	$("#menu ul li a").eq(2).css({"border-radius":"0 0 0px 0"});
	//$("#menu ul").css({"background":"#FFF"});
	$("#menu ul li a").eq(1).css({"border-radius":"0 0 0 10px"});
})

$("#menu ul li ").eq(4).mouseout(function(){
	$("#menu ul li a").eq(5).css({"border-radius":"0 0 0 0px"});
	$("#menu ul li a").eq(3).css({"border-radius":"0 0 0px 0"});
	//$("#menu ul").css({"background":"#FFF"});
	$("#menu ul li a").eq(1).css({"border-radius":"0 0 0 10px"});
})
$("#menu ul li ").eq(5).mouseout(function(){
	$("#menu ul li a").eq(6).css({"border-radius":"0 0 0 0px"});
	$("#menu ul li a").eq(4).css({"border-radius":"0 0 0px 0"});
	//$("#menu ul").css({"background":"#FFF"});
	$("#menu ul li a").eq(1).css({"border-radius":"0 0 0 10px"});
})

$("#menu ul li ").eq(6).mouseout(function(){
	$("#menu ul li a").eq(7).css({"border-radius":"0 0 0 0px"});
	$("#menu ul li a").eq(5).css({"border-radius":"0 0 0px 0"});
	//$("#menu ul").css({"background":"#FFF"});
	$("#menu ul li a").eq(1).css({"border-radius":"0 0 0 10px"});
})

$("#menu ul li ").eq(7).mouseout(function(){
	$("#menu ul li a").eq(8).css({"border-radius":"0 0 0 0px"});
	$("#menu ul li a").eq(6).css({"border-radius":"0 0 0px 0"});
	//$("#menu ul").css({"background":"#FFF"});
	$("#menu ul li a").eq(1).css({"border-radius":"0 0 0 10px"});
})

$("#menu ul li ").eq(8).mouseout(function(){
	$("#menu ul li a").eq(9).css({"border-radius":"0 0 0 0px"});
	$("#menu ul li a").eq(7).css({"border-radius":"0 0 0px 0"});
	//$("#menu ul").css({"background":"#FFF"});
	
})

$("#menu ul li ").eq(9).mouseout(function(){
	$("#menu ul li a").eq(10).css({"border-radius":"0 0 0px 0"});
	$("#menu ul li a").eq(8).css({"border-radius":"0 0 0 0px"});
	//$("#menu ul").css({"background":"#FFF"});
})

$("#menu ul li ").eq(10).mouseout(function(){
	$("#menu ul li a").eq(11).css({"border-radius":"0 0 0px 0"});
	$("#menu ul li a").eq(9).css({"border-radius":"0 0 0 0px"});
	//$("#menu ul").css({"background":"#FFF"});	
})
$("#menu ul li ").eq(11).mouseout(function(){
	$("#menu ul li a").eq(10).css({"border-radius":"0 0 0px 0"});
	//$("#menu ul").css({"background":"#FFF"});	
})
$("#menu ul li ").eq(12).mouseout(function(){
	$("#menu ul li a").eq(11).css({"border-radius":"0 0 0px 0"});
	//$("#menu ul").css({"background":"#FFF"});	
})
//--- меняем цвет фона при нажатии на регистрацию и логин.
$(".key").click(function(){

	$(".userBG").toggleClass("loginclick").removeClass("registrclick").css({"background":"url('img/regisloginclick.png') no-repeat","background-position":"0 -59px"})
	$("#loginform_wrapper").toggle();
	$("#registrform_wrapper,.registrform_wrapper").css({"display":"none"});
	if ( $(".userBG").hasClass("loginclick").toString()=="false"  )
		{
			$(".userBG").css({"background":" url('img/spritesUser.png') no-repeat","background-position":"0 0px"})
		}
	
	});
	
	$(".user").click(function(){

	$(".userBG").toggleClass("registrclick").removeClass("loginclick").css({"background":"url('img/regisloginclick.png') no-repeat", "background-position": "-1px 0"})
	$("#loginform_wrapper").css({"display":"none"});
	$("#registrform_wrapper, .registrform_wrapper").toggle();
	
	if ( $(".userBG").hasClass("registrclick").toString()=="false" )
		{
			$(".userBG").css({"background":" url('img/spritesUser.png') no-repeat","background-position":"0 0px"})
		}
	});
	$("div.registr_step a").click(function() {
	
		$(".registr_step a").removeClass("active")
		$(this).addClass("active")
		
		if ( $(this).hasClass("registration").toString()=="true"  ) {
		
			$(".company_account, .user_account, .steps3").css({"display":"none"});
			$(".steps2").css({"display":"block"});
		}
	     if  ($(this).hasClass("typeofregistr").toString()=="true" ){
		 
			$(".company_account, .user_account").css({"display":"block"});
			$(".steps2, .steps3").css({"display":"none"});
		 }
		  if  ($(this).hasClass("success").toString()=="true" ){
		 
			$(".steps3").css({"display":"block"});
			$(".steps2, .company_account, .user_account").css({"display":"none"});
		 }
		
	})
	
	/* ------------------- вкладки карточки товара-------------------- */
	
	$(".goods_cart + .menu ul li").eq(0).click(function(){
		$(".goods_right_sidebar_innder").fadeIn("fast")
	    $(".goods_right_sidebar_innder_seller").fadeOut("fast")
	   $(".goods_cart + .menu ul li a").eq(0).addClass("activepage")
		$(".goods_cart + .menu ul li a").eq(1).removeClass("activepage")
	});
	$(".goods_cart + .menu ul li").eq(1).click(function(){
		$(".goods_right_sidebar_innder_seller").fadeIn("fast")
	    $(".goods_right_sidebar_innder").fadeOut("fast")
	    $(".goods_cart + .menu ul li a").eq(1).addClass("activepage")
		$(".goods_cart + .menu ul li a").eq(0).removeClass("activepage")
	});
	
	
	
	
	//-------------------- нажатие кнопок -------------------------------
$(".register_normal").mousedown(function(){
	$(".register_normal").css({"background-position":" 0 -702px "})
})
$(".register_normal").mouseup(function(){
	$(".register_normal").css({"background-position":""})
})

$(".register_user_normal").mousedown(function(){
	$(".register_user_normal").css({"background-position":"0px -120px", "height":"60px"})
})
$(".register_user_normal").mouseup(function(){
	$(".register_user_normal").css({"background-position":""})
})

$(".register_company_normal").mousedown(function(){
	$(".register_company_normal").css({"background-position":"0px -132px", "height":"67px"})
})
$(".register_company_normal").mouseup(function(){
	$(".register_company_normal").css({"background-position":""})
})

$(".demostration_normal").mousedown(function(){
	$(".demostration_normal").css({"background-position":"0px -49px", "height":"50px"})
})
$(".demostration_normal").mouseup(function(){
	$(".demostration_normal").css({"background-position":"", "height":"50px"})
})

$(".eye").click(function() {
  $(".eye").toggleClass("closed-eye")
  //$(".closed-eye").toggleClass("eye")
  if ($(this).hasClass("closed-eye").toString()=="true") {
    $("#input-again").removeAttr("disabled")
    $("#input-password").attr("type","password")
  }
  else {
   $("#input-again").attr("disabled","disabled")
    $("#input-password").attr("type","text")
  }
})
var chrome=navigator.userAgent;

if (chrome.indexOf("Chrome")!=-1) {

$("#menu ul li a.lastitem").css({"padding":"11px 21px 11px 22px"})
 
}
/*----------- страница категорий - панель истории посещения------*/
function moving (e){
var top=$(window).scrollTop()-335 ;

		if ( $(window).scrollTop()<355 )
	{
		$("#history_panel").css({"top": "3px"});
		//alert (e.pageY);
	}
	else {
		document.getElementById("history_panel").style.top=top+"px";
	}
	 
}
 
	$(document).mousemove(function(e){
	moving (e);

$(window).scroll(function(){
	moving (e);
	
	}); 
});

    $('#goodscarousel').jcarousel();


});

