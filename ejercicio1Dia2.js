
let vector=[0,13,14,3,7];

const primo=arreglo =>{
    let contador=0;
    let aux=[];
    let resultado=[];
    while(contador< arreglo.length){
        if(arreglo[contador]===0){
            contador++;
        }else{
            aux.push(arreglo[contador]);
            contador++;
        }
    }
    contador=0;
    console.log(`El vector auxiliar es: ${aux}`)
    for(let i=0; i<aux.length; i++){
        for(let j=1; j<=aux[i]; j++){
            if(aux[i]%i==0){
                contador++;
            }
        }
        if(contador<=2){
            resultado.push(aux[i]);
        }
        contador=0;
    }

    resultado.sort(function(a,b){
        return a-b;
    })
    console.log(resultado);
    
}

primo(vector)
