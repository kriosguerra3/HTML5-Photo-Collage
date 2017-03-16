<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>Document</title>
		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">
		<link rel="stylesheet" type="text/css" href="styles.css">
		<link rel="stylesheet" type="text/css" href="layouts_examples.css">
		<link rel="stylesheet" type="text/css" href="filters.css">
		<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css">	
		<link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
	</head>
	<body>
		<div id ="header">
			<h1 class="title">HTML5 Photo Collage </h1>	
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
						$i == 2 ? $selected ='photos_selected' : $selected =''; 
					?>
						<div id="link_group_<? echo $i ?>" class="total_photos <? echo $selected?>">
							<a href="#"><? echo $i ?></a>
						</div>
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
							<button type="button" id="previous" class="btn btn-primary">
								<span class="glyphicon glyphicon-arrow-left"></span>
								Previous								
							</button>		

							<button type="button" id="download" class="btn btn-primary">
								Download
								<span class="glyphicon glyphicon-download-alt"></span>
							</button>			
						</div>
					</div>				
				</div>
				<div id="filters_wrapper" class="row no-gutters filters_group"></div>
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