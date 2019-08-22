function majV(caractere){
	return	caractere == caractere.toUpperCase()
}
function majAllV(str){
	for (i=0;i<str.length;i++){
		if (majV(str[i])){
			b = true;
		}
		else {
			b = false;
			break;
		}
	}
	return b;
	
}

function downcasestring(str){
	s=""
	for (i=0;i<str.length;i++){
		s = s + str[i].toLowerCase();
	}
	return s;
}

function repondreauquestion(q){

	if (q[q.length-1]==="?"){
		return "Ouais Ouais...";
	} else if(majAllV(q)){
		return "Pwa, calme-toi...";
	} else if (downcasestring(q).search("fortinite") != -1) {
		 return "on s' fait une partie soum-soum ?";
	} else if(q===""){
		return "t'es en PLS ?";
	} else {
		return "balek";
	}

}

q = prompt("question please");
console.log(repondreauquestion(q));