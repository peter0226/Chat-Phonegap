<?php 

        include "db.php";
        
		if(isset($_POST['enviar'])){
			$ids=$_POST["ids"];
			$nombre=$_POST["nombre"];
			$mensaje=$_POST["mensaje"];
			$lectura=0;

			$consulta = "INSERT INTO chats ('conversacion','nombre','mensaje','lectura') VALUES ('$ids','$nombre','$mensaje','$lectura')";
			$ejecutar =$conexion->query($consulta);

		}
?>