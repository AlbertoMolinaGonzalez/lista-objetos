 "use strict";
/*
 function ListaPersonException() {
 	this.name = "ListaPersonException";
 	this.message = "Error en la lista de personas";
 }
 ListaPersonException.prototype = new BaseException(); //Heredamos de BaseException
 ListaPersonException.prototype.constructor = ListaPersonException;

 function PersonListaException() {
 	this.name = "PersonListaException";
 	this.message = "Error, el metodo necesita un parametro persona.";
 }
 PersonListaException.prototype = new BaseException();
 PersonListaException.prototype.constructor = PersonListaException;

 function PersonNotExistException(item) {
 	this.name = "PersonNotExistException";
 	this.message = "Error, la persona no existe ";
 }
 PersonNotExistException.prototype = new BaseException();
 PersonNotExistException.prototype.constructor = PersonNotExistException;

 function PositionOutBoundsException() {
 	this.name = "PositionOutBoundsException";
 	this.message = "Error: The position is out of bounds.";
 }
 PositionOutBoundsException.prototype = new BaseException(); //Heredamos de StackException
 PositionOutBoundsException.prototype.constructor = PositionOutBoundsException;
*/
function Lista(){

	if(!(this instanceof Lista)){
		throw new ListaPersonException ();
	}

	var _personas = [];

	Object.defineProperty(this, 'personas', {
		get:function(){
			var nextIndex = 0;
			return {
				next: function(){
					return nextIndex < _personas.lenght ?
					{value: _personas[nextIndex++], done: false} :
					{done: true};
				}
			}
		}
	});

	this.addPerson = function(persona){
		if (!(persona instanceof Persona)){
			//throw new PersonListaException ();
		}
		var position = this.indexOf(persona);
		if (position === -1){
			_personas.push(persona);
		}
	}

	this.removePersona = function(persona){
		if (!(persona instanceof Persona)){
			//throw new PersonListaException ();
		}
		var position = this.indexOf(persona);
		if (position !== -1){
			_personas.splice(position, 1);
		}else {
			//throw new PersonNotExistException(persona);
		}
	}

	this.remove = function(index){
		if (index > _personas.lenght){
			throw new PersonNotExistException();
		}else{
			_personas.splice(index, 1);
		}
	}


	this.lastElemet = function(){
		var ultimo = _personas.length;
		_personas[ultimo];
	}

	this.firstElement = function(){
			_personas[0];
	}

	this.set = function(position,person){
		if (position === 'undefined') throw new EmptyValueException("position");
		if (position >= _personas.length || position < 0) throw new PositionOutBoundsException();
		if (_personas[position] === 0){
			_personas.splice(position, 1);
		}
	}

	this.clean = function(){
		_items.length = 0;
		_quantities.length = 0;
	}

	this.toString = function(){
		var str = "";
		for(let i = 0; i<_personas.length; i++){
			str = str + _personas[i].toString() + "\n";
		}
		return str;
	}

	this.mostrar = function(){
		var str = _personas.join("--");
		return str;
	}
//devuelve la posicion de una persona o -1 si no esta
	this.indexOf = function(persona){
		if (!(persona instanceof Persona)) {
			//throw new PersonNotExistException ();
		}

		function comparePersona(arrayPersona) {
		  return ((arrayPersona.apellido === persona.apellido) && (arrayPersona.nombre === persona.nombre))
		}

		return _personas.findIndex(comparePersona);
	}

	this.isEmpty = function(){
		var isEmpty = false;
		var lenght = _personas.length;
		if (lenght == 0){
			isEmpty = true;
		}
		return isEmpty;
	}

	this.size =function(){
		_personas.length;
	}

}


Lista.prototype = {};
Lista.prototype.constructor = Lista;

function Persona(apellido = "", nombre = ""){

	if(!(this instanceof Persona)){
		//lanzaremos excepcion
	}

	//validacion de parametros pasados.
	nombre = typeof nombre !== 'undefined' ? nombre : "";
	if (nombre === "") throw new EmptyValueException("nombre");

	apellido = typeof apellido !== 'undefined' ? apellido : "";
	if (apellido === "") throw new EmptyValueException("apellido");


	//encapsulacion de los atributos
	//acceso privado
	var _apellido = apellido;
	var _nombre = nombre;

	//Propiedades de acceso para los atributos.

	Object.defineProperty(this, 'apellido', {
		get:function(){
			return _apellido;
		},
		set:function(value){
			value = typeof value !== 'undefined' ? value : "";
			if (value === "") throw new EmptyValueException("apellido");
			_apellido = value;
		}
	});

	Object.defineProperty(this, 'nombre', {
		get:function(){
			return _nombre;
		},
		set:function(value){
			value = typeof value !== 'undefined' ? value : "";
			if (value === "") throw new EmptyValueException("nombre");
			_nombre = value;
		}
	});

}

Persona.prototype = {};
Persona.prototype.constructor = Persona;
Persona.prototype.toString = function(){
	return this.apellido + " " + this.nombre;
}

function testPersonas(){
	var lista = new Lista();
	var p1 = new Persona("Molina","Alberto");
	var p2 = new Persona("Cortes","Andres");
	var p3 = new Persona("Morales", "Topaqui");
	var p4 = new Persona("Sebastian", "Nuria");
	var p5 = new Persona("Romero", "Ramiro");

	console.log("***Prueba de objetos***");
	console.log(p1.nombre+ " "+ p1.apellido);
	console.log(p2.nombre+ " "+ p2.apellido);
	console.log(p3.nombre+ " "+ p3.apellido);
	console.log(p4.nombre+ " "+ p4.apellido);
	console.log(p5.nombre+ " "+ p5.apellido);
	console.log("***Prueba de objetos***");
	console.log("***Prueba de addPersona***");
	lista.addPerson(p1);
	lista.addPerson(p2);
	lista.addPerson(p3);
	lista.addPerson(p4);
	lista.addPerson(p5);
	console.log("***Prueba de addPersona***");
	console.log(lista.toString());
	console.log("***Prueba de removePersona***");
	console.log(lista.mostrar());
	lista.removePersona(p1);
	lista.removePersona(p3);
	lista.removePersona(p5);
	console.log(lista.mostrar());
	console.log("***Prueba de removePersona***");
	console.log("***Prueba de remove***");
	lista.remove(0);
	console.log(lista.mostrar());
	console.log("***Prueba de remove***");
	lista.addPerson(p1);
	lista.addPerson(p2);
	lista.addPerson(p3);
	lista.addPerson(p4);
	lista.addPerson(p5);
	console.log(lista.mostrar());
	console.log(lista.toString());
	console.log(lista.firstElement());
	console.log(lista.lastElemet());
	console.log(lista.mostrar());

}

window.onload = testPersonas;
