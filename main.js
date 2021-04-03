var ticket = [];

//TODO: declarar una variable nueva donde puedas ingresar la informacion de los tickets
var mistickets = [];


//Funcion que ya tienes que es la ingresa los datos dentro del dataticket
function adddata(data) {
    ticket.push(data);
}
//TODO: crear la funcion para ingresar la informacion dentro de mistickets, que viene de la informacion del dataticket
function addticket(ticket){
    mistickets.push(ticket);
}


//Esto ya lo tienes hecho
adddata({id:1,ticket:5987,nombre:'Juanpablo'})

adddata({id:2,ticket:5988,nombre:'Chia'});


//TODO: Asi es como se ingresa la informacion dentro de la funcion de agregar ticket
addticket({id:1,ticket});


//TODO: Una vez ingresados los tickets limpiamos el arreglo de dataticket para comenzar de 0
ticket = [];

adddata({id:1,ticket:897,nombre:'Juanpablo'})

adddata({id:2,ticket:579988,nombre:'Chia'});

addticket({id:2,ticket});

ticket = [];

adddata({id:1,ticket:120,nombre:'Juanpablo'})

adddata({id:2,ticket:50,nombre:'Chia'});

addticket({id:3,ticket});

console.log(mistickets);



