
const cuentaLetras = function (cadena, letra) {
    var longitud = cadena.length;
    var posicion = 0;
    let resultado ='';
    let arreglo = []
    while (posicion < longitud) {
        if (cadena[posicion] === letra) {
            posicion++;
        } else {
            arreglo.push(cadena[posicion]);
            posicion++;
        }
    }

    return arreglo.length;
}

console.log(cuentaLetras('kakkerlak', 'k'));
