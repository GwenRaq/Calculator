var is;

function calculator(operation, x, y){
if (operation == 'Add'){
	is = x + y;
}
else if (operation == 'Subtract'){
	is = x - y;
}
else if (operation == 'Divide'){
	is = x/y;
}
else if (operation == 'Multiply'){
	is = x*y;
}
console.log(is);

calculator("Add",2,5);
calculator("Subtract",2,5);
calculator("Divide",10,5);
calculator("Multiply",2,5);

