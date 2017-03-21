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
			<div id ="header_text"><h1 class="title">HTML5 Photo Collage </h1></div>
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
						$i == 2 ? $active ='active' : $active =''; 
					?>
					<button type="button" id="link_group_<? echo $i ?>" class="btn btn-link total_photos <? echo $active ?>">
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
					<div class = "instructions_container">
						<div class="instruction_num">3</div> 
						<p class="instructions_text">Upload photos and add filters</p>
					</div>
					<div class="col-md-12 col-lg-12">					
						<div id="layout_main_container">
							<div id="photo_layout_main" ></div>
						</div>
						<div class="button_container">
							<button type="button" id="previous" class="btn btn-info">
								<span class="glyphicon glyphicon-arrow-left"></span>
								Back								
							</button>	
							<button type="button" id="download" class="btn btn-sample btn-lg">
								<span class="glyphicon glyphicon-th-large"></span> Create Collage
							</button>			
						</div>
					</div>				
				</div>
			</div>
			<div id="filters" title="Add filter">								
				<div id="filters_wrapper" class="row no-gutters filters_group"></div>
				 <input type="hidden" id="hdnParentLayoutClass" name="hdnParentLayoutClass" value="">
			</div>
			<div id="screen_3" title="Download">
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