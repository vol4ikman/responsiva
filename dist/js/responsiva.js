jQuery(document).ready(function(){
	//Responsiva Accordion
	jQuery(".raccardion_title").click(function(e){
		e.preventDefault();
		var title = jQuery(this);
		var content = title.next(".raccardion_content");
		title.toggleClass("active");
		content.slideToggle(300);
	});
})
