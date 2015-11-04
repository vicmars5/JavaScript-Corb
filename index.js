VectorPrototype = {
	contructor: function(x,y){
		this._x=x;
		this._y=y;
	},
	getMagnitude: function(){
		return Math.hypot(this._x, this._y);
	},
	getAngle: function(){
		return Math.atan2(this._x, this._y);
	},
	getComponents: function(){
		return [this._x, this._y];
	}
}

v1= Object.create(VectorPrototype);
v1.contructor(5,10);

v2= Object.create(VectorPrototype);
v2.contructor(0,30);

console.log(v1.getMagnitude());

//

var auricular = {
	contructor:  function(modelo, marca, peso, frecuencia){
		this._marca=marca;
		this._modelo=modelo;
		this._peso=peso;
		this._frecuencia=frecuencia;
	},
	obtenerModelo: function(){
		return this._modelo;
	},
	obtenerMarca: function(){
		return this._marca
	},
	obtener
}