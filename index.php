<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>Document</title>
		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
		<link rel="stylesheet" type="text/css" href="normalize.min.css">	
		<link rel="stylesheet" href="bootstrap/bootstrap-theme.min.css">
		<link rel="stylesheet" href="bootstrap/bootstrap.min.css">
		<link rel="stylesheet" type="text/css" href="styles.css">
		<link rel="stylesheet" type="text/css" href="layouts_examples.css">
		<link rel="stylesheet" type="text/css" href="filters.css">
		<link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
	</head>
	<body>
		<div id ="header">
			<div id ="header_text"><a href="index.php" class="title"><h1 class="title">HTML5 Photo Collage </h1></a></div>
			<div id ="header_background"></div>
		</div>
		<div class="container-fluid">
			<div id="screen_1" class="row">
				<div class = "instructions_container">
					<div class="instruction_num">1</div> 
					<p class="instructions_text">Select the number of photos to add</p>
				</div>
				<div id="total_photos_container">
					<? 
					for ($i=2; $i <= 7 ; $i++) { 
						//2 photos is selected by default. We add a CSS class to color it
						$i == 2 ? $selected_number ='selected_number' : $selected_number =''; 
					?>
					<button type="button" id="link_group_<? echo $i ?>" class="btn btn-link total_photos <? echo $selected_number ?>">
						<? echo $i ?>								
					</button>
					<? } ?>
				</div>
				<div class = "instructions_container">
					<div class="instruction_num">2</div> 
					<p class="instructions_text">Select a Layout</p>	
				</div>
				<div id="layout_group_container" class="col">
				</div>				
			</div>
			
			<div id="screen_2" >				
				<div class="row">				
					<div class = "options_container">
						<div class="instruction_num">3</div> 
						<p class="instructions_text">Upload photos and add filters</p>
						<form class="form-inline">
							<div class="col-xs-2 col-sm-2 col-md-2 col-lg-2 option_input">
					         	<button type="button" id="previous" class="btn btn-info btn-sm">
									<span class="glyphicon glyphicon-arrow-left"></span>
									Back								
								</button>
					        </div>
					        <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2 option_input">
					             <label class="px text-primary" for="width">Width:</label> 
					             <input type="text" class="form-control" id="width" placeholder="" size="4" value="600"  maxlength="4" onkeypress='return event.charCode >= 48 && event.charCode <= 57'>
					             <span class ="px text-primary"> px</span>					             
					        </div>

					         <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2 option_input">
					            <label class="px text-primary" for="height">Height:</label> 
					            <input type="text" class="form-control" id="height" placeholder="" size="4" value="400" maxlength="4" onkeypress='return event.charCode >= 48 && event.charCode <= 57'> 
					             <span class ="px text-primary"> px</span>
					        </div>
							<div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 option_no_input">
								<div id="selected_background_color">
									<div id = "selected_color_label"><span class="px text-primary">Border Color: </span></div>
									<div id = "selected_color_sample"></div>
								</div>
					        </div>
					         <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
					         	<button type="button" id="download" class="btn btn-sample btn-lg">
									<span class="glyphicon glyphicon-th-large"></span> Create Collage
								</button>	
					         </div>
						</form>
					</div>	
					<div class="col-md-12 col-lg-12">					
						<div id="layout_main_container">
							<div id="photo_layout_main" ></div>
						</div>											
					</div>				
				</div>
			</div>
			<div id="filters" title="Add filter">								
				<div id="filters_wrapper" class="row no-gutters filters_group"></div>
				 <input type="hidden" id="hdnParentLayoutClass" name="hdnParentLayoutClass" value="">
			</div>
			<div id="background_colors" title="Choose background color">
				<div id="background_colors_wrapper" class="row no-gutters"></div>
			</div>
			<div id="screen_3" title="Download">
				<p class="text-primary"> To save the image, right click above it and select "Save Image As" from the menu.</p>
				<div id="canvas_area"></div>
			</div>
		</div>
		<script
  src="https://code.jquery.com/jquery-3.1.1.min.js"
  integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="
  crossorigin="anonymous"></script>
		<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js"></script>
		<script src="html2canvas.js"></script>
		<script src="scripts.js"></script>
	</body>
</html>