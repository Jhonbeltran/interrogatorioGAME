var Picture = function (url, ok, x, y) {
	this.imagenURL=url;
	this.imagenOK=ok;
	this.posicionX=x;
	this.posicionY=y;
}


var dialogoLadron = new Picture ("PrimerDialogo.png", false, 0, 0);
var ladron = new Picture("ThiefPequeño.png", false, 0, 200);
var dialogoDetective = new Picture ("ggizi.png", false, 0, 0);

function confirmarDialogoLadron ()
{
	dialogoLadron.imagenOK = true;
	dibujarImagen();
}
function confirmarDialogoDetective ()
{
	dialogoDetective.imagenOK = true;
	dibujarImagen();
}
function confirmarLadron ()
{
	ladron.imagenOK = true;
	dibujarImagen();
}

function dibujarImagen()
{
	var canvas = document.getElementById("canvas");
	var tablero = canvas.getContext("2d");
	
	if(dialogoLadron.imagenOK)
	{
		tablero.drawImage(dialogoLadron.imagen, dialogoLadron.posicionX, dialogoLadron.posicionY);
	}
	if(dialogoDetective.imagenOK)
	{
		tablero.drawImage(dialogoDetective.imagen, dialogoDetective.posicionX, dialogoDetective.posicionY);
	}
	if(ladron.imagenOK)
	{
		tablero.drawImage(ladron.ladron, ladron.posicionX, ladron.posicionY);
	}
}
function aplaudir(){
	dialogoDetective.imagen = new Image();
	dialogoDetective.imagen.src = dialogoDetective.imagenURL;
	dialogoDetective.imagen.onload = confirmarDialogoDetective;

		
}

function inicio () {

	setTimeout(aplaudir,5000);

	dialogoLadron.imagen = new Image();
	dialogoLadron.imagen.src = dialogoLadron.imagenURL;
	dialogoLadron.imagen.onload = confirmarDialogoLadron;



	ladron.ladron = new Image();
	ladron.ladron.src = ladron.imagenURL;
	ladron.ladron.onload = confirmarLadron;


	
}