
$(function() {

	// Check for the various File API support.
	if(!(window.File && window.FileReader && window.FileList && window.Blob))
	{
		alert('HTML5 file APIs are not fully supported in this browser :/');
	}	 

	//When clicking the numbered links... 
	$( ".btn-link" ).click(function() {

		///ADD VALIDATION IN CASE NO ONE IS SELECTED

		//...we remove previously selected layouts
		$(".photo_layout_example").removeClass('selected');

		//...we form the id attribute of the layout group to display. We only need to remove the "link_"substring and add "#"
		group_id = "#"+ $(this).attr("id").replace('link_','');

		//...fade out the other groups and displaying the selected one when finished
		$("[id^=group_]").fadeOut( "fast", function() {
			$(group_id).css("display","block");
		});
	});

	//When selecting the layout, we color the border red
	$(".photo_layout_example").click(function() {
		$(this).toggleClass("selected").siblings().removeClass('selected');
	});

	//When clicking the next button...
	$( "#next" ).click(function() {
		
		//...we get the classes from the selected layout example.The class we need to get the layout is the first one of the list (with format "lay_##"). We use the split method to get it.		
		classes_array = $('.selected').attr('class').split(" ");

		//We get a class with a "lay_##" format
		layout_class= classes_array[0];
		
		//We get the number of photos of the layout so we can dinamically build it on the next step.
		total_photos = layout_class.charAt(4);
		
		//We append to the big layout we will be building our collage on the divs and classes from the selected layout
		for (var i = 1; i <= total_photos; i++) {
			$('#photo_layout_main').append( '<div class="' +layout_class + '_' + i +'"></div>');

		
			var inputAndListener= '<input type="file" id="files_' + i +'" name="files'+ '_' + i + '[] "/>'+
			'<output id="photo_' + i +'"></output>'+
			'<script>'+						
				'document.getElementById("files' + '_' + i + '").addEventListener("change", handleFileSelect, false);' +
			'</script>';
				
			$('#photo_layout_main > .' + layout_class + '_' + i ).append(inputAndListener);

		};

		$("#layout_group_container").css("display","none");
		$("#layout_main_container").css("display","block");


	});


	$( "#upload_btn" ).submit(function( event ) {
	 	$( "#upload_form" ).submit();
	});

});



function handleFileSelect(event) {
		
	var files = event.target.files;	
	// Loop through the FileList and render image files.	
	for (var i = 0, f; f = files[i]; i++) {

	// Only process image files.
	if (!f.type.match('image.*')) {
	continue;
	}

	var reader = new FileReader();
	//From the listener event, we get the input id
	var photoId = event.target.name.charAt(6); 

	// Closure to capture the file information.
	reader.onload = (function(theFile) {
		return function(e) {
		  // Render thumbnail.
		  var span = document.createElement('span');
		  span.innerHTML = ['<img class="thumb" src="', e.target.result,
		                    '" title="', escape(theFile.name), '"/>'].join('');
		  document.getElementById('photo_' + photoId).insertBefore(span, null);
		};
	})(f);

	  // Read in the image file as a data URL.
	  reader.readAsDataURL(f);
	}
}

