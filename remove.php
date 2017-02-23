<?php
	// get correct file path
	$fileName = $_GET['name'];
	$filePath = 'uploads/'.$fileName;
	// remove file if it exists
	if ( file_exists($filePath) ) {
	    unlink($filePath);
	    header('Location:index.php');
	}
?>