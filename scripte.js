document.addEventListener('DOMContentLoaded', function(){
//code en Jqeury
/*$("#difference").click(function(event) {

	var a = $("#valeur1").val();

	var b = $("#valeur2").val();

	var c = a-b;

	$("#resultat").html(c) ;

});

$("#multiplication").click(function(event) {

	var a = $("#valeur1").val();

	var b = $("#valeur2").val();

	var c = a*b;

	$("#resultat").html(c) ;

});

$("#division").click(function(event) {

	var a = $("#valeur1").val();

	var b = $("#valeur2").val();

	var c = a/b;

	$("#resultat").html(c) ;

});
$("#somme").click(function(event) {

	var a = $("#valeur1").val();

	var b = $("#valeur2").val();
	a=parseFloat(a);
	b=parseFloat(b);
	var c = a+b;

	$("#resultat").html(c) ;

});*/



//code en java scripte
	var osomme = document.getElementById("somme");
	var odifference =document.getElementById("difference");
	var odivision =document.getElementById("division");
	var omultiplication =document.getElementById("multiplication");
	var oconved =document.getElementById("conved");
	var oconvde =document.getElementById("convde");
	odifference.addEventListener('click', function(){

		var a = document.getElementById("valeur1").value;
		var b= document.getElementById("valeur2").value;

		var c = a-b;
		var presultat = document.getElementById("resultat");
		presultat.innerHTML= c;
		setTimeout("location.reload(true);",2000);
	});

	osomme.addEventListener('click', function(){

		var a = parseFloat(document.getElementById("valeur1").value);
		var b= parseFloat(document.getElementById("valeur2").value);

		var c = a+b;


		var presultat = document.getElementById("resultat");
		presultat.innerHTML= c;
		setTimeout("location.reload(true);",2000);
	});

	omultiplication.addEventListener('click', function(){

		var a = document.getElementById("valeur1").value;
		var b= document.getElementById("valeur2").value;

		var c = a*b;
		var presultat = document.getElementById("resultat");
		presultat.innerHTML= c;
		setTimeout("location.reload(true);",2000);
	});


	odivision.addEventListener('click', function(){

		var a = document.getElementById("valeur1").value;
		var b= document.getElementById("valeur2").value;

		var c = a/b;
		var presultat = document.getElementById("resultat");
		presultat.innerHTML= c;
		setTimeout("location.reload(true);",2000);
	});


	oconved.addEventListener('click', function(){

		var a = document.getElementById("valeur3").value;
		

		var c = a*3.5
		var presultat = document.getElementById("resultat1");
		presultat.innerHTML= c;
		setTimeout("location.reload(true);",2000);
	});


	oconvde.addEventListener('click', function(){

		var a = document.getElementById("valeur3").value;
		

		var c = a/3.5;
		var presultat = document.getElementById("resultat1");
		presultat.innerHTML= c;
		setTimeout("location.reload(true);",2000);
	});
	


})