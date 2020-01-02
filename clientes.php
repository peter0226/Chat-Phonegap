<?php 

        include "db.php";
        
		$ids=$_GET["ids"];
		$consulta = "SELECT usuario, agente,(SELECT SUM(lectura) from chats as CH WHERE CON.id = CH.conversacion) FROM AS CON conversacion WHERE (agente = 0 || agente ='$ids') ORDER BY id";

		
		$ejecutar =$conexion->query($consulta);
	 
		$datos= array();

		while ($row = mysqli_fetch_object($ejecutar)) {
			$datos[] = $row;
			}
			//alert(datos[0]);
			echo json_encode($datos);
?>