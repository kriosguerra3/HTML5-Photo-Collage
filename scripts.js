
$(function() {

	//When clicking the numbered links... 
	$( ".btn-link" ).click(function() {

		//...we remove previously selected layouts
		$(".photo_layout_example").removeClass('selected');

		//...we form the id attribute of the layout group to display. We only need to remove the "link_"substring and add "#"
		group_id = "#"+ $(this).attr("id").replace('link_','');
		console.log(group_id);

		//...fade out the other groups and displaying the selected one when finished
		$("[id^=group_]").fadeOut( "fast", function() {
			$(group_id).css("display","block");
		});

	});

	//When selecting the layout, we color the border red
	$(".photo_layout_example").click(function() {
		$(this).toggleClass("selected").siblings().removeClass('selected');
	});


});