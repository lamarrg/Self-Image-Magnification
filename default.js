
$(window).load(function(){

	// ----------- Manually set variables  ----------------
	var xMag=4;  // multiplier of orig image. change to variable.
	var imgPopSize=400;   // size of sqaure pop up window, length is for each side
	
	// gets size of source image
	picsWidth=$('#first img').width();
	picsHeight=$('#first img').height();
	
	// adds a class designatin to the span
	$('#first img').addClass("imgSource");	

	
	$(".imgSource").hover(function() {
		$(this).css("cursor", "crosshair");
		$("#imgPop").show(),
		$("#imgMag").attr("src", $(".imgSource").prop("src")).css('height', picsHeight*xMag ).css('width', picsWidth*xMag) ;
			}, function() {
			$("#imgPop").hide();
	}); 
	
	
	$(".imgSource").mousemove(function(event){
			var x=event.pageX - this.offsetLeft;
			var y=event.pageY - this.offsetTop;
			var magImageSizeHeight=picsHeight*xMag;   //height of magnified image, supplied by 'xMag' var
			var magImageSizeWidth=picsWidth*xMag;     //width of magnified image, supplied by 'xMag' var
			var topPercent=(-y/picsHeight).toFixed(2); //  position of cursor from top, percentage wise, of source image
			var leftPercent=(-x/picsWidth).toFixed(2); //  position of cursor from left, percentage wise, of source image
			var topMagDiff=magImageSizeHeight-picsHeight;  //magnified height - orig pic height
			var leftMagDiff=magImageSizeWidth-picsWidth;  //magnified width - orig pic width
			var imgDiffTop=picsHeight-imgPopSize;  // orig pic height - magnifier window
			var imgDiffLeft=picsWidth-imgPopSize;  // orig pic width - magnifier window
			var MarginsTop=((-topPercent)+(topPercent*topMagDiff)+(topPercent*(imgDiffTop)));  
			var MarginsLeft=((-leftPercent)+(leftPercent*leftMagDiff)+(leftPercent*(imgDiffLeft)));
			

			// implementing css changes to magnified image
			$("#imgMag").css('marginTop', MarginsTop).css('marginLeft', MarginsLeft);
		}); 

});

