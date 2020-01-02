<?php 

        include "db.php";
        
       
			$ids=$_GET['ids'];
			$consulta = "UPDATE chats SET lectura=0 WHERE conversacion=$ids";
			
			
			$ejecutar =$conexion->query($consulta);
			if($ejecutar){
			    echo "Correcto";
			    
			}else{ 
			    echo "Error";}

		
?>