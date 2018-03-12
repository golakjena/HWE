;(function($){
	var device = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);


	function bannerText(){
		$(".txtScale").css({opacity:0});
		$(".txtScale").waypoint(function() {
            $(".txtScale").css({opacity:1});
            
            TweenMax.from($(this), 1, {scale:0, opacity:0, delay:0.1, ease:Expo.easeOut, force3D:true}, 0.2);
        },{
            offset: '50%',
            triggerOnce: true
        });
	}

	function mobileNav(){
		$(".btnMobileNav").on("click", function(){
			$(this).toggleClass('activeBtn');
			
			var right = $(".headerRight").css("right");

			if(right == "-280px"){
				$(".headerRight").stop(true, true).animate({
					right:0
				}, 300);
				$(this).stop(true, true).animate({
					right:280
				}, 300);
			}
			else{
				$(".headerRight").stop(true, true).animate({
					right:-280
				}, 300);
				$(this).stop(true, true).animate({
					right:20
				}, 300);
			}
		});
	}


	$(function(){
		if(!device){
			bannerText();
		}
		mobileNav();
		
	});

})(jQuery);




