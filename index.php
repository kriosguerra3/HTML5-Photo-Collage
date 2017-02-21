<?php include('header.php'); ?>
<div class="container-fluid">

	<h3>Select a Layout</h3>

	<? for ($i=2; $i <= 8 ; $i++) { ?>
		<button type="button" id="link_group_<? echo $i ?>" class="btn btn-lg btn-link" ><? echo $i ?></button>
	<? } ?>

	
	<!-- 2 photos-->
	<div id= "group_2" class="row layout_group">
		
		<div id="lay_21" class="photo_layout_example">
			<div id="lay_21_1"></div>
			<div id="lay_21_2"></div>
		</div>	

		<div id="lay_22" class="photo_layout_example">
			<div id="lay_22_1"></div>
			<div id="lay_22_2"></div>
		</div>	
		
	</div>

	<!-- 3 photos-->
	<div id= "group_3" class="row layout_group" >
		
		<div id="lay_31" class="photo_layout_example">
			<div id="lay_31_1"></div>
			<div id="lay_31_2"></div>
			<div id="lay_31_3"></div>
		</div>

		<div id="lay_32" class="photo_layout_example">
			<div id="lay_32_1"></div>
			<div id="lay_32_2"></div>
			<div id="lay_32_3"></div>
		</div>	

		<div id="lay_33" class="photo_layout_example">
			<div id="lay_33_1"></div>
			<div id="lay_33_2"></div>
			<div id="lay_33_3"></div>
		</div>	

		<div id="lay_34" class="photo_layout_example">
			<div id="lay_34_1"></div>
			<div id="lay_34_2"></div>
			<div id="lay_34_3"></div>
		</div>

		<div id="lay_35" class="photo_layout_example">
			<div id="lay_35_1"></div>
			<div id="lay_35_2"></div>
			<div id="lay_35_3"></div>
		</div>	

		<div id="lay_36" class="photo_layout_example">
			<div id="lay_36_1"></div>
			<div id="lay_36_2"></div>
			<div id="lay_36_3"></div>
		</div>
	
	</div>
	<div class="button_container">
		<button type="button" id="next" class="btn btn-primary">Next</button>	
	</div>	
</div>
<?php include('footer.php'); ?>