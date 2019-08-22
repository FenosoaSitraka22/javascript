function factorial(x){
	f=1
	for (let i=1;i<=x;i++){
		f = f*i;
	}
	return f;
}
n=prompt("De quel nombre veut tu calculer la factorielle ?");
console.log("le resultat est="+factorial(n));
