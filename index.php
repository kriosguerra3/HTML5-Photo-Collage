<?php include('header.php'); ?>
<div class="container-fluid">

	<h3>Select a Layout</h3>

	<? for ($i=2; $i <= 8 ; $i++) { ?>
		<button type="button" id="link_group_<? echo $i ?>" class="btn btn-lg btn-link" ><? echo $i ?></button>
	<? } ?>

	<div id="layout_group_container">
		<!-- 2 photos-->
		<div id= "group_2" class="row layout_group">
			
			<div class="lay_21 photo_layout_example">
				<div class="lay_21_1"></div>
				<div class="lay_21_2"></div>
			</div>	

			<div class="lay_22 photo_layout_example">
				<div class="lay_22_1"></div>
				<div class="lay_22_2"></div>
			</div>	
			
		</div>

		<!-- 3 photos-->
		<div id= "group_3" class="row layout_group" >
			
			<div class="lay_31 photo_layout_example">
				<div class="lay_31_1"></div>
				<div class="lay_31_2"></div>
				<div class="lay_31_3"></div>
			</div>

			<div class="lay_32 photo_layout_example">
				<div class="lay_32_1"></div>
				<div class="lay_32_2"></div>
				<div class="lay_32_3"></div>
			</div>	

			<div class="lay_33 photo_layout_example">
				<div class="lay_33_1"></div>
				<div class="lay_33_2"></div>
				<div class="lay_33_3"></div>
			</div>	

			<div class="lay_34 photo_layout_example">
				<div class="lay_34_1"></div>
				<div class="lay_34_2"></div>
				<div class="lay_34_3"></div>
			</div>

			<div class="lay_35 photo_layout_example">
				<div class="lay_35_1"></div>
				<div class="lay_35_2"></div>
				<div class="lay_35_3"></div>
			</div>	

			<div class="lay_36 photo_layout_example">
				<div class="lay_36_1"></div>
				<div class="lay_36_2"></div>
				<div class="lay_36_3"></div>
			</div>
		</div>
	</div>

	<div id="layout_main_container">
		<div id="photo_layout_main"></div>
	</div>
	
	<div class="button_container">
		<button type="button" id="back" class="btn btn-primary">Previous</button>
		<button type="button" id="next" class="btn btn-primary">Next</button>	
	</div>	
</div>
<?php include('footer.php'); ?>