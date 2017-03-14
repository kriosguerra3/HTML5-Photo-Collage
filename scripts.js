
$(function() {
	// Check for the various File API support.
	if(!(window.File && window.FileReader && window.FileList && window.Blob))
	{
		alert('HTML5 file APIs are not fully supported in this browser :/');
	}

	/// testing purposes: Automated clicks 
	//setTimeout(function(){ $('.lay_21_1').trigger('click'); }, 1000);
	//setTimeout(function(){ $('#next').trigger('click'); }, 1500);
	//setTimeout(function(){ 
		//$('#output_1').css("background-image","url(sample_1.png)").css("height","300px");
		//$('#output_2').css("background-image","url(sample_2.png)").css("height","300px");}, 2500);
	///END OF AUTOMATED CLICKS////

	//Generating the sample layouts
	var layoutsHTML = '';	
	//Group of layouts
	for (var i = 2 ; i <= 8; i++) {
		
		//Dependng of the number of photos, the available layouts changes.
		var total_layouts = 0;
		switch(i) {
		    case 2: total_layouts = 2; break;
		    case 3: case 4: total_layouts = 6; break;
		    case 5: total_layouts = 7; break;
		    case 6: total_layouts = 4; break; 
		    case 7:total_layouts = 4;
		} 

		layoutsHTML += '<div id= "group_'+ i +'" class="layout_group" >';
		//Individual Layout
		for (var j = 1 ; j <= total_layouts; j++) {
			layoutsHTML += '<div class="lay_' + i + j + ' photo_layout_example">';
			//Individual Photos inside layout
			for (var k = 1 ; k <= i; k++) {
				layoutsHTML +='<div class="lay_'+ i+ j + '_' + k + '"></div>';
			}
			layoutsHTML += '</div>';			
		};	
		layoutsHTML += '</div>';
	}		
	$('#layout_group_container').append(layoutsHTML);
	//End of generating the sample layouts


	//When clicking the numbered links... 
	$( ".btn-link" ).click(function() {
		$('#hdn_photo_num').val($(this).text());		
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

	$('.total_photos').click(function() {	
		var total_photos= $(this).text();
	});	

	//When clicking the next button...
	$("#next").click(function() {

		//...we get the classes from the selected layout example.The class we need to get the layout is the first one of the list (with format "lay_##"). We use the split method to get it.		
		classes_array = $('.selected').attr('class').split(" ");

		//We get a class with a "lay_##" format
		layout_class= classes_array[0];
		
		//We get the number of photos of the layout so we can dinamically build it on the next step.
		total_photos = layout_class.charAt(4);
		
		//We append to the big layout we will be building our collage on the divs and classes from the selected layout. We add also the additional class "photo"
		for (var i = 1; i <= total_photos; i++) {
			$('#photo_layout_main').append( '<div class="' +layout_class + '_' + i +' photo">'
												+ '<img id = "close_'+ i +'"'
												+ ' class="close_icon" onClick="deletePhoto(' + i + ')"'
												+ ' src="img/close.png"></div>');

			//For each div, we append a file type input and an event listener, so we can upload images individually
			var inputAndListener= '<div class="filter"><input type="file" id="files_' + i +'" '
									+ '	name="files'+ '_' + i + '[] "/>'
									+ '<output id="output_' + i +'"></output></div>';
			
			//Appending the formed string
			$('#photo_layout_main > .' + layout_class + '_' + i ).append(inputAndListener);

			//We make the photo draggable using JQuery UI
			$( "#output_" + i ).draggable();

		};
		//We make the photo draggable using JQuery UI
		$(".photo").resizable({
	      containment: "#photo_layout_main"
	    });
		
		$(".photo").draggable({ containment: "#photo_layout_main", scroll: false });

		$("#photo_layout_main").resizable();

		//Hide the div from the forst step
		$("#step_1").css("display","none");
		$("#step_2").css("display","block");
		$("#download").css("visibility","visible");

		//Adding the listener for when we upload a photo
		document.getElementById("photo_layout_main").addEventListener("change", handleFileSelect, false);


		//Dynamically generate the HTML for the filters samples, so it's easily to make changes to it

		var filters = ["none","blackandwhite","nineteen77", "sunset","xpro2","walden","toaster","sutro","rise","lofi","kelvin","hudson"];
		
		//We use 2 for loops since we want them in 2 rows.
		var columnsPerRow = 6;		
		//We use this counter to keep track of the real number of columns that are displayed so far
		//var columnsCounter = 1;

		//Creating the string that will contain the HTML for the filters samples,
		var filtersHTML = '';	
		filtersHTML += '<div class="row-fluid">';				

		for (i = 0; i < filters.length; i++) {						
			filterName = filters[i];
		    filtersHTML += '<div class ="filter_sample col-xs-4 col-sm-3 col-md-2 col-lg-2" data-filter-name="'+filterName+'">'
		    			+  '<div class="filter_thumbnail '+filterName+'"></div>'
		    			+  '<span class="filter_name">'+filterName+'</span></div>';
		}
		filtersHTML += '</div>';	
		//Append the filters
		$("#filters_wrapper").append(filtersHTML);
	});

	$( "#previous" ).click(function() {
		//Hide the div from the first step
		$("#step_1").css("display","block");
		$("#step_2").css("display","none");
		$("#photo_layout_main").html("");
		$("#filters_wrapper").html("");
		
	});

	//When selecting the individual photo on a layout, we color the border red. We use "on()" since "click()" doesn't work for dinamically created elements.
	$('body').on('click', 'div.photo', function() {	 
		$(this).toggleClass("selected").siblings().removeClass('selected');
	});

	//We do the same for the filters samples
	$('body').on('click', 'div.filter_sample', function() {	 
		//Getting the filtername from the HTML5 data attributes  filter-name 
		filterName = $(this).data("filter-name");
		//Remove all classes but "filter" from the selected photo
		$("#photo_layout_main > .selected").find(".filter").removeClass().addClass("filter");
		$("#photo_layout_main > .selected").find(".draggable_photo").attr("data-filter",filterName);
		
		//Adding the single filter
		if(filterName != 'none'){
			$("#photo_layout_main > .selected").find(".filter").addClass(filterName);	
		}
	});


	var element = $("#photo_layout_main"); 
	var getCanvas; // global variable

    $("#download").on('click', function () {
    	$(".close_icon").css("display","none");
         html2canvas(element, {
         onrendered: function (canvas) {
                $("#canvas_area").html('').append(canvas);
                getCanvas = canvas;
                //display close icons
                $(".close_icon").css("display","block");
                $( "#step_3" ).dialog( "open" );			
             }
         });
    });
   
    $("#step_3").dialog({		
		width: $(window).width() - 100,
		autoOpen: false,
		show: {
			effect: "fadeIn",
			duration: 500
		},
		hide: {
			effect: "fadeOut",
			duration: 500
		}
	});    	
});


/* function handleFileSelect(event)
Validates and upload of every photo without the need of a server */
function handleFileSelect(event) {

	//Getting the id of the clicked file input
	if (event.target !== event.currentTarget) {        
        var clicked_input = event.target.id;
    }
    //Stopping the propagation at the parent element just to avoid having to deal with the event running up and down the DOM.

    event.stopPropagation();
	var files = event.target.files;	

	// Loop through the FileList and render image files.	
	for (var i = 0, f; f = files[i]; i++) {

		// Only process image files.
		if (!f.type.match('image.*')) {
			continue;
		}

		//From the clicked input, we form the name of the container we will load the  photo in by replaciong the string "files" with "photo"
		var container_id = clicked_input.replace(/files/gi, "output");
		var img_id = clicked_input.replace(/files/gi, "img");
		var reader = new FileReader();

		// Closure to capture the file information.
		reader.onload = (function(file) {
			return function(e) {
			 	// Render thumbnail.
			  	var span = document.createElement('span');			  	
			  	span.innerHTML = ['<img id="'+img_id+'" data-filter="" class="draggable_photo draggable ui-widget-content" src="', e.target.result,
			                    '" title="', escape(file.name), '"/>'].join('');
			   
			    //Adding the loaded photo
				document.getElementById(container_id).insertBefore(span, null);

				//Every photo container has a unique close icon assigned which is hidden. We  get the id of it and display it now that we have a photo uploaded.
				var close_icon_id = container_id.replace(/output/gi, "close");
				document.getElementById(close_icon_id).style.display = "block";
			};
		})(f);

	  // Read in the image file as a data URL.
	  reader.readAsDataURL(f);
	}
}

/* function deletePhoto(container_id)
 When clicking the red close icon, it deletes the uploaded photo
 Receives the id of the container to empty */
function deletePhoto(container_id){	
	$("#output_"+ container_id).html('');
	//Restoring the input value to "No file chosen"
	$("#files_" + container_id).val('');
	$("#close_" + container_id).css("display", "none");
	$("#output_"+ container_id).parent().removeClass().addClass("filter");
}


