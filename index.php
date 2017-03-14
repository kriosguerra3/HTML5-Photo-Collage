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
			
			
			<h1>HTML5 Photo Collage <span id="camera_icon" class="glyphicon glyphicon-camera"></span>	</h1>	
		</div>
		<div class="container-fluid">

			<div id="step_1" class="row">
				
				<div class = "top_container">
					<h3>Step 1: Select a Layout</h3>					
				</div>
				<div id="layout_group_container" class="col">
					<!-- 2 photos-->

					<? for ($i=2; $i <= 7 ; $i++) { ?>
						<button type="button" id="link_group_<? echo $i ?>" class="total_photos btn btn-lg btn-link" ><? echo $i ?></button>
					<? } ?>
					<input type="hidden" id="hdn_photo_num" value="">
				</div>

				<div class="button_container">			
					<button type="button" id="next" class="btn btn-primary"><span class="glyphicon glyphicon-arrow-right"></span>   Next  </button>
				</div>	
			</div>
			
			<div id="step_2" >
				<div class="row">
					<div class = "top_container">
						<h3>Step 2: Upload photos and add filters</h3>
						
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

			<div id="step_3" title="Download">
				<div id="canvas_area"></div>
			</div>

		</div>
		<script src="//code.jquery.com/jquery-1.12.4.js"></script>
		<script src="//code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
		<script src="html2canvas.js"></script>
		<script src="scripts.js"></script>
	</body>
</html>