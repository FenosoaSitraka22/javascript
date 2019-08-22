function proteine(code3){
	if ("UCU" === code3 || "UCC" === code3 || "UCA" === code3 || "UCG" ===code3 || "AGU" ===code3 || "AGC" ){
 		a = "Sérine "; 
 	}	
    if("CCU" === code3 || "CCC" == code3|| "CCA" === code3 || "CCG" === code3){
 		a="Proline"; 
 	}
    if("UUA" === code3 || code3 === "UUG"){
 		a= "Leucine "; 
 	}
     if("UUU" === code3 || "UUC" === code3 ){
 		a=  "Phénylalanine";
 	}
    if("CGU" === code3 || "CGC" === code3 || "CGA" === code3 || "CGG" === code3 || "AGA" === code3 || "AGG"=== code3){
 		a= "Arginine";
 	}
    if("UAU" === code3 || "UAC" === code3){
 	   a= "Tyrosine";
 	}
 return a;
 	
}


//console.log(proteine("UAC"));

function decomposeARN(arn){
	k=1;
	l=0;
 	c="";
	codeproteine=[];
	for(i=0;i<arn.length;i++){
		c = c + arn[i]
		if (k==3){
			codeproteine[l] = c;
			l = l+1;
			k=0;
			c="";
		}
		k++;
	}
	return codeproteine;
}
code = prompt("donner un ARN à trnscrire en proteine");
pro=[];
u = [];
a="";
u =decomposeARN(code);
for(i=0;i< u.length;i++){
	 		pro[i] = proteine(u[i]);
}
console.log(u);
console.log(pro);






 
	