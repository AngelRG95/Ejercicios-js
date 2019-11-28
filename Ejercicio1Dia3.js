const height=120;
let arreglo=[];
var App = function(){
   console.log('Inside App');
}

App.prototype.getallPeople=async function (){
   try{
     const response = await fetch('https://swapi.co/api/people');
     const persona = await response.json()
     const personaje = await persona.results.filter(p => p.height>height); 
     personaje.forEach(element => arreglo.push(element.name) );
    return personaje;
   }catch(error){
   throw error;
   }
};

var resolvedAnswer =function(data){
  console.debug('--resolved Answer--')
  arreglo.forEach(element=> console.log(element) );
//  console.debug('->',data)
}

var rejectedAnswer = function(data){
  console.debug('--rejected answer--')
  console.debug('->',data)
}

const app = new App();
console.log('names')
console.log(app.getallPeople().then(resolvedAnswer).catch(rejectedAnswer));
