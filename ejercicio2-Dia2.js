class Vehiculo{
	constructor(matricula='',modelo=''){
		this.matricula=matricula;
		this.modelo=modelo;
	}

	getMatricula(){
		return this.matricula;
	}

	getModelo(){
		return this.modelo;
	}

	setMatricula(matricula){
		this.matricula=matricula;
	}

	setModelo(modelo){
		this.modelo=modelo;
	}
}


class Taxi extends Vehiculo{
	constructor(matricula,modelo,numeroLicencia=''){
		super(matricula,modelo);
		this.numeroLicencia=numeroLicencia;
	}

	getNumeroLicencia(){
		return this.numeroLicencia;
	}

	setNumeroLicencia(numeroLicencia){
		this.numeroLicencia=numeroLicencia;
	}
}

class Cinco extends Vehiculo{
	constructor(matricula,modelo,numeroPlazas=''){
		super(matricula,modelo);
		this.numeroPlazas=numeroPlazas;
	}

	getNumeroPlazas(){
		return this.numeroPlazas;
	}

	setNumeroPlazas(numeroPlazas){
		this.numeroPlazas=numeroPlazas;
	}
}

const auto1 = new Vehiculo('N-58-92','Passat');
const auto2 = new Vehiculo('N-18-02','Leon ST');
const taxi1 = new Taxi('C-10-52','Versa','847201857239');
const taxi2 = new Taxi('C-26-39','Prius','054738291525');
const vehiculo1 = new Cinco('D-40-74','Odyssey','8');
const vehiculo2 = new Cinco('D-73-10','mx5','2');

console.log(`Vehiculo 1 - Placas: ${auto1.getMatricula()} , Modelo: ${auto1.getModelo()}`);
console.log(`Vehiculo 2 - Placas: ${auto2.getMatricula()} , Modelo: ${auto2.getModelo()}`);
console.log(`Vehiculo 3 - Placas: ${taxi1.getMatricula()} , Modelo: ${taxi1.getModelo()} , Numero de Licencia: ${taxi1.getNumeroLicencia()}`);
console.log(`Vehiculo 4 - Placas: ${taxi2.getMatricula()} , Modelo: ${taxi2.getModelo()} , Numero de Licencia: ${taxi2.getNumeroLicencia()}`);
console.log(`Vehiculo 5 - Placas: ${vehiculo1.getMatricula()} , Modelo: ${vehiculo1.getModelo()} , Numero de Plazas: ${vehiculo1.getNumeroPlazas()}`);
console.log(`Vehiculo 6 - Placas: ${vehiculo2.getMatricula()} , Modelo: ${vehiculo2.getModelo()} , Numero de Plazas: ${vehiculo2.getNumeroPlazas()}`);
