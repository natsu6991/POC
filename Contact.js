function message(){
 var myMessage = document.getElementById(["prénom"]["nom"]["email"]["description"]).value;

	if(myMessage == null)
	{
		alert("Veuillez remplir tous les champs !");
	  	return false;
	}
	else 
	{
	  	return true;
	}
}