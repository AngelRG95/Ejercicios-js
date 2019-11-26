var caracter='';
var triangulo= function(alto){
	for(let i=1; i<=alto; i++){
		for(let j=1; j<=i; j++){
			caracter+='#';
		}
		console.log(caracter);
		caracter=''
	}
}

triangulo(7);