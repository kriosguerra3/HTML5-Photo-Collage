
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
	<span class="icon-instagram text-icons-contact"></span>
	<label for="file" name="file"><strong>Choose a file</strong></label>
	<input type="file" name="file">
	
</form>
-->
