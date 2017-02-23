
<!---->
<input type="file" id="files" name="files[]"/>
<output id="list"></output>


<script>
  document.getElementById('files').addEventListener('change', handleFileSelect, false);  
</script>

<!--
<form id = "upload_form" action="upload.php" method="post" enctype="multipart/form-data">	
	
	<input type="file" name="file" id="file" class="upload" />
	<label id="lbl_upload" for="file">Choose a file</label>
	<input type="submit" id="upload_btn" class="btn btn-sm btn-primary" value="Upload">
	 <?php
   /*
      //scan "uploads" folder and display them accordingly
     $folder = "uploads";
     $results = scandir('uploads');
     foreach ($results as $result) {
      if ($result === '.' or $result === '..') continue;
      
      if (is_file($folder . '/' . $result)) {
          echo '
          <div class="col-md-3">
              <div class="thumbnail">
                  <img src="'.$folder . '/' . $result.'" alt="...">
                      <div class="caption">
                      <p><a href="remove.php?name='.$result.'" class="btn btn-danger btn-xs" role="button">Remove</a></p>
                  </div>
              </div>
          </div>';
      } 
     }
     */
     ?>

	<span class="icon-instagram text-icons-contact"></span>
	<label for="file" name="file"><strong>Choose a file</strong></label>
	<input type="file" name="file">
	
</form>
-->
