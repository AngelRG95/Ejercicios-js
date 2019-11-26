let serie=[];
let entrada=10;

var fibonacci=function(numero){
	if(numero==0){
	  return 0;
	}else if(numero==1){
	  return 1;
	}else{
	  return fibonacci(numero-1)+fibonacci(numero-2);
	}
}

while(entrada>=0){
    serie.push(fibonacci(entrada));
    entrada--;
}

serie.reverse();

console.log(serie);