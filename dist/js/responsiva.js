jQuery(document).ready(function(){

	//Responsiva Accordion
	jQuery(".raccardion_title").click(function(e){
		e.preventDefault();
		var title = jQuery(this);
		var content = title.next(".raccardion_content");
		title.toggleClass("active");
		if(title.is(".active")) {
			console.log("i am active");
			jQuery(".raccardion_content").slideUp(250);
		} else {
			var content = title.next(".raccardion_content");
			content.slideDown(250);	
		}
		content.slideToggle(300);
	});

})
