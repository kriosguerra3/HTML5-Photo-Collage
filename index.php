<?php include('header.php'); ?>
<div class="container-fluid">

		<div id="step_1" class="row">
			<h3>Step 1: Select a Layout</h3>
			<div id="layout_group_container" class="col">
				<!-- 2 photos-->

				<? for ($i=2; $i <= 8 ; $i++) { ?>
					<button type="button" id="link_group_<? echo $i ?>" class="btn btn-lg btn-link" ><? echo $i ?></button>
				<? } ?>
				<div id= "group_2" class="layout_group">
					
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
				<div id= "group_3" class="layout_group" >
					
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

			<div class="button_container">			
				<button type="button" id="next" class="btn btn-primary">Next</button>
			</div>	
		</div>
		
		<div id="step_2" >
			<div class="row">
				<h3>Step 2: Upload photos and add filters</h3>
				<div id = "settings" class="col-md-2 col-lg-2">
					<h5>Options</h5>
					Collage Size: <input type="text" id "size" name="size" size="4" value="400"> px					
				</div>
				<div class="col-md-10 col-lg-10">					
					<div id="layout_main_container">
						<div id="photo_layout_main"></div>
					</div>  	
				</div>				
			</div>


			<div id="filters_wrapper" class="row no-gutters filters_group">
				<!--
				<div class ="filter_sample" data-filter-name="none">
						<div class="filter_thumbnail"></div>
						<span class="filter_name">No filter</span>
				</div>
				
				<div class ="filter_sample" data-filter-name="blackandwhite">
					<div class="filter_thumbnail blackandwhite" ></div>
					<span class="filter_name">Black And White</span>
				</div>

				<div class ="filter_sample" data-filter-name="sepia">
					<div class="filter_thumbnail sepia" ></div>
					<span class="filter_name">Sepia</span>
				</div>

				<div class ="filter_sample" data-filter-name="sunset">
					<div class="filter_thumbnail sunset" ></div>
					<span class="filter_name">Sunset</span>
				</div>

				<div class ="filter_sample" data-filter-name="xpro2">
					<div class="filter_thumbnail xpro2" ></div>
					<span class="filter_name">Xpro2</span>
				</div>

				<div class ="filter_sample" data-filter-name="lofi">
					<div class="filter_thumbnail lofi" ></div>
					<span class="filter_name">Lofi</span>
				</div>

				<div class ="filter_sample" data-filter-name="walden">
					<div class="filter_thumbnail walden" ></div>
					<span class="filter_name">Walden</span>
				</div>				
				
				<div class ="filter_sample" data-filter-name="kelvin">
					<div class="filter_thumbnail kelvin" ></div>
					<span class="filter_name">Kelvin</span>
				</div>	

				<div class ="filter_sample" data-filter-name="hudson">
					<div class="filter_thumbnail hudson" ></div>
					<span class="filter_name">Hudson</span>
				</div>
				
				<div class ="filter_sample" data-filter-name="brannan">
					<div class="filter_thumbnail brannan" ></div>
					<span class="filter_name">Brannan</span>
				</div>

				<div class ="filter_sample" data-filter-name="nineteen77">
					<div class="filter_thumbnail nineteen77" ></div>
					<span class="filter_name">Nineteen77</span>
				</div>

				<div class ="filter_sample" data-filter-name="toaster">
					<div class="filter_thumbnail toaster" ></div>
					<span class="filter_name">Toaster</span>
				</div>

				<div class ="filter_sample" data-filter-name="sutro">
					<div class="filter_thumbnail sutro" ></div>
					<span class="filter_name">Sutro</span>
				</div>

				<div class ="filter_sample" data-filter-name="rise">
					<div class="filter_thumbnail rise" ></div>
					<span class="filter_name">Rise</span>
				</div>
				-->
			</div>

				

			
		</div>
</div>
<?php include('footer.php'); ?>