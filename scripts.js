
var getCanvas; // global variable

$(function() {
	// Check for the various File API support.
	if(!(window.File && window.FileReader && window.FileList && window.Blob))
	{
		alert('HTML5 file APIs are not fully supported in this browser :/');
	}

	//Generating the sample layouts
	var layoutsHTML = '';	
	//Group of layouts
	for (var i = 2 ; i <= 8; i++) {
		
		//Dependng of the number of photos, the available layouts changes.
		var total_layouts = 0;
		switch(i) {
		    case 2: total_layouts = 2; break;
		    case 3: case 4: case 5: total_layouts = 6; break;
		    case 6:case 7: total_layouts = 4; break;
		} 

		layoutsHTML += '<div id= "group_'+ i +'" class="layout_group" >';
		//Individual Layout
		for (var j = 1 ; j <= total_layouts; j++) {
			layoutsHTML += '<div class="lay_' + i + j + ' photo_layout_example">';
			layoutsHTML += '<div class="select_layout"><button type="button" class="btn btn-sample"><span class="glyphicon glyphicon-check"></span> Select</button></div>';
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

	//Resize effect and display of "Select" text on layout examples
	$(".photo_layout_example").hover(
	  function() { $(this).children(".select_layout").show(); },
	  function() { $(this).children(".select_layout").hide(); }
	);

	//When selecting the number of photos, we color the selected option
	//$(".total_photos").click(function() {
		//$(this).toggleClass("active").siblings().removeClass('selected_number');
	//});

	$("#link_group_2").parent().addClass("active");	
	
	//Dynamically generate the HTML for the filters samples, so it's easily to make changes to it
		var filtersArray = ["none","blackwhite","nineteen77","sunset","xpro2","walden","toaster","sutro","rise","lofi","kelvin","hudson"];
		
		//We use 2 for loops since we want them in 2 rows.
		var columnsPerRow = 6;		
		
		//Creating the string that will contain the HTML for the filters samples,
		var filtersHTML = '';	
		filtersHTML += '<div class="row-fluid">';				

		for (i = 0; i < filtersArray.length; i++) {						
			filterName = filtersArray[i];
		    filtersHTML += '<div class ="filter_sample" data-filter-name="'+filterName+'">'
		    			+  '<div class="filter_thumbnail '+filterName+'"></div>'
		    			+  '<span class="filter_name">'+filterName+'</span></div>';
		}
		filtersHTML += '</div>';	
		//Append the filters
		$("#filters_wrapper").append(filtersHTML);


		//Creating the string that will contain the HTML for the background color samples,
		var backgroundColorsArray = ["AliceBlue","Aquamarine","Azure","Black","HotPink","IndianRed","Ivory","LemonChiffon","LightBlue","LightGreen","LightPink","MediumOrchid","MediumPurple","MediumVioletRed","MidnightBlue","OliveDrab","PaleGoldenRod","Palegreen","PaleVioletRed","PeachPuff","Purple","SteelBlue","Turquoise","White","WhiteSmoke"];

		var backgroundsHTML = '';	
		backgroundsHTML += '<div class="row-fluid">';				

		for (i = 0; i < backgroundColorsArray.length; i++) {						
			colorName = backgroundColorsArray[i];
		    backgroundsHTML += '<div class="color_sample" style="background-color:'+colorName+'"></div>';
		}
		backgroundsHTML += '</div>';	
		//Append the filters
		$("#background_colors_wrapper").append(backgroundsHTML);


	//When clicking the numbered links... 
	$( ".total_photos" ).click(function() {
		//...we remove previously selected layouts
		$(".photo_layout_example").removeClass('active');

		//...we form the id attribute of the layout group to display. We only need to remove the "link_"substring and add "#"
		group_id = "#"+ $(this).attr("id").replace('link_','');

		//...fade out the other groups and displaying the selected one when finished
		$("[id^=group_]").fadeOut( "fast", function() {
			$(group_id).css("display","block");
		});
	});

	//When clicking the next button...
	$(".photo_layout_example").click(function() {
		//...we get the classes from the selected layout example.The class we need to get the layout is the first one of the list (with format "lay_##"). We use the split method to get it.		
		classes_array = $(this).attr('class').split(" ");

		//We get a class with a "lay_##" format
		layout_class= classes_array[0];
		
		//We get the number of photos of the layout so we can dinamically build it on the next step.
		total_photos = layout_class.charAt(4);
		
		//We append to the big layout we will be building our collage on the divs and classes from the selected layout.
		for (var i = 1; i <= total_photos; i++) {
			$('#photo_layout_main').append( '<div class="' +layout_class + '_' + i +' photo">'
												+ '<div class = "button_container">'
												+ '<button id = "filter_'+ i +'" type="button" class="btn btn-info btn-filter btn-xs" data-layout-class="' + layout_class + '_' + i +'">'
												+ '<span class="glyphicon glyphicon-plus"></span>Add filter</button>'
												+ '<button id = "close_'+ i +'" type="button" class="btn btn-danger btn-xs close_icon" onClick="deletePhoto('+ i +')">'
												+ '<span class="glyphicon glyphicon-remove"></span>Delete</button>'
												+'</div></div>');

			//For each div, we append a file type input and an event listener, so we can upload images individually
			var inputAndListener= '<div class="filter"><input type="file" id="files_' + i +'" '
									+ '	name="files'+ '_' + i + '[] " class="inputfile"/>'
									+ '<label for="files_' + i +'"><span class="glyphicon glyphicon-file"></span> Choose a file</label>'
									+ '<output id="output_' + i +'"></output></div>';
			
			//Appending the formed string
			$('#photo_layout_main > .' + layout_class + '_' + i ).append(inputAndListener);

			//We make the photo draggable using JQuery UI
			$( "#output_" + i ).draggable();
		};
		
		//We make the photo resizable using JQuery UI		
		$("#photo_layout_main").resizable({ 
			minWidth: 600,
			minHeight: 400 ,
			resize: function( event, ui ) {
			    //Restrict resizing to 1 pixel increments:
			    ui.size.height = Math.round( ui.size.height / 1 ) * 1;
			    ui.size.width = Math.round( ui.size.width / 1 ) * 1;
			    $("#width").val(ui.size.width);
				$("#height").val(ui.size.height);
			}
		});

		//Hide the div from the first step
		$("#screen_1").css("display","none");
		$("#screen_2").css("display","block");
		$("#download").css("visibility","visible");

		//Adding the listener for when we upload a photo
		document.getElementById("photo_layout_main").addEventListener("change", handleFileSelect, false);
	});

	$("#previous").click(function() {
		//Hide the div from the first step
		$("#screen_1").css("display","block");
		$("#screen_2").css("display","none");
		$("#photo_layout_main").find(".photo").remove();
	});
	
	//Function to apply changes in widh and height after the user has stopped typing. Source: http://stackoverflow.com/questions/14042193
	$.fn.extend({
        donetyping: function(callback,timeout){
            timeout = timeout || 1e3; // 1 second default timeout
            var timeoutReference,
                doneTyping = function(el){
                    if (!timeoutReference) return;
                    timeoutReference = null;
                    callback.call(el);
                };
            return this.each(function(i,el){
                var $el = $(el);
                // Chrome Fix (Use keyup over keypress to detect backspace)
                // thank you @palerdot
                $el.is(':input') && $el.on('keyup keypress paste',function(e){
                    // This catches the backspace button in chrome, but also prevents
                    // the event from triggering too preemptively. Without this line,
                    // using tab/shift+tab will make the focused element fire the callback.
                    if (e.type=='keyup' && e.keyCode!=8) return;                    
                    // Check if timeout has been set. If it has, "reset" the clock and
                    // start over again.
                    if (timeoutReference) clearTimeout(timeoutReference);
                    timeoutReference = setTimeout(function(){
                        // if we made it here, our timeout has elapsed. Fire the
                        // callback
                        doneTyping(el);
                    }, timeout);
                }).on('blur',function(){
                    // If we can, fire the event since we're leaving the field
                    doneTyping(el);
                });
            });
        }
    });

	//Changing the widht and height after the user is done typing
	$("#width, #height").donetyping(function(){
		var newWidth= $("#width").val();
		var newHeight= $("#height").val();

		if(newWidth < 600){
			$("#width").val(600);
		}
		else{
			$('#photo_layout_main').css("width",$("#width").val());			
		}

		if(newHeight < 400){
			$("#height").val(400);
		}
		else{
			$('#photo_layout_main').css("height",$("#height").val());
		}
	});

	//When clicking an "add filter" button, we store in the hdnParentLayoutClass hidden field the class of the div we will aply the filter to
	$('body').on('click', '.btn-filter', function() {	 
		//Getting the class of the photo container 
		$('#hdnParentLayoutClass').val($(this).attr('data-layout-class'));
		
		//forming the selector of the photo container		
		var selected_element = "." + $('#hdnParentLayoutClass').val();

		//Getting the name of the current aplied filter (if there is) so we can show user which one is selected
		var current_filter = $(selected_element).find(".draggable_photo").attr("data-filter");
		
		//Removing the blue border from filters selected for other photos
		$(".filter_sample").removeClass('selected_filter');
		
		//Apply CSS class to give it a blue border
		$("#filters_wrapper").find('[data-filter-name="'+current_filter+'"]').addClass('selected_filter');		

		//Opening the modal
		$("#filters").dialog("open");
	});
	
	$("#filters").dialog({	
		position: {
	    	my: "right middle", at: "right middle", of: $(window),collision: 'flipfit'
	    },	 	
		width: ($(window).width()/3),
		height:($("#photo_layout_main").height()),
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

	//When clicking a color div, we apply it to the photo that opened the dialog window
	$('body').on('click', 'div.filter_sample', function() {	 
		$(this).toggleClass('selected_filter').siblings().removeClass('selected_filter');

		//Getting the filtername from the HTML5 data attributes  filter-name 
		filterName = $(this).data("filter-name");
		
		//forming the selector of the photo container
		var selectedElement = "." + $('#hdnParentLayoutClass').val();
		
		//Remove all classes but "filter" from the selected photo
		$(selectedElement).find(".filter").removeClass().addClass("filter");
		$(selectedElement).find(".draggable_photo").attr("data-filter",filterName);
		
		//Adding the single filter
		if(filterName != 'none'){
			$(selectedElement).find(".filter").addClass(filterName);	
		}
	});

	//When clicking a color background sample div, we color the background of the layout
	$('body').on('click', 'div.color_sample', function() {	 
		var newColor = $(this).css("background-color");
		$("#photo_layout_main,#selected_color_sample").css("background-color", newColor);
	});

	$("#selected_background_color").click(function() {
		//Opening the modal
		$("#background_colors").dialog("open");		
	});	

	$("#background_colors").dialog({		
		width: 390,
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

	var element = $("#photo_layout_main"); 
    $("#download").on('click', function () {
    	//Hiding the close icons and red border ("selected"class)from photos
    	$(".close_icon,.btn-filter").css("display","none");
    	$("#photo_layout_main").find(".photo").removeClass("selected");
        	html2canvas(element, {
         		onrendered: function (canvas) {
		            $("#canvas_area").html('').append(canvas);
		            getCanvas = canvas;
		            //display close icons
		            $(".close_icon,.btn-filter").css("display","block");
		            $("#screen_3").dialog("open");			
            }
         });
    });

    $("#screen_3").dialog({		
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

    //If we are in the screen # 2, we warn the user about leaving the page
  	window.onbeforeunload = function(event) {
  		if($("#screen_2").css('display') != 'none' ) {
	    	//return "You have unsaved changes. Are you sure you want to navigate away?";
	    }
	}; 
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

				//Every photo container has a unique close icon and filter button assigned which is hidden. We  get the id of it and display it now that we have a photo uploaded.
				var close_icon_id = container_id.replace(/output/gi, "close");
				document.getElementById(close_icon_id).style.display = "block";

				var filter_button_id = container_id.replace(/output/gi, "filter");
				document.getElementById(filter_button_id).style.display = "block";
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
	$("#filter_" + container_id).css("display", "none");
	$("#output_"+ container_id).parent().removeClass().addClass("filter");
}
