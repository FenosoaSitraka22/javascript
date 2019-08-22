const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495 , rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];


console.log("Est-ce que tous les livres ont été au moins empruntés une fois ?");
for (i=0;i<books.length;i++){
	b = books[i].rented !=0;
	
	console.log("le livre : " +books[i].title + ", est il deja empruntés? =>" + b );
}

console.log(" Le livre le moins emprunté est ");
 min = books[0].rented ;

for (i=0;i<books.length;i++){
	if (books[i].rented < min){
		min = books[i].rented;
		ind = i;
	}
	
}

console.log("=> "+books[ind].title);

//////////////////recherche d'un element d'un tableau 
// id=prompt("chercer un livre aavec l'id :"); trouve le livre d id
id = 873495;
console.log("chercer un livre aavec l'id :"+id);


for (i=0;i<books.length;i++){
	if (books[i].id == id){
		b = books[i];
		
	}
	
}
console.log("=>" + b.title);

////////Suppression d'un element de tableau par id//////////
id = 133712
// id=prompt("id du livre à supprimer :");  //trouve le livre d id
console.log("supprime le livre dont l'id est :" +id)

for (i=0;i<books.length;i++){
	if (books[i].id == id){
		b = i;
		books.splice(i,1);
	}
	console.log("books["+i+"]=",books[i]);
}

///////////triage des titre des livres par ordre alphabetique/////////////////
 t=[];
for (i=0;i<books.length;i++)
{
	t[i] = books[i].title	;
}


 ///////////// recherche d'un livre par un titre//////////

 function find(books,titre){
 	for(i=0;i<books.length;i++){
 		if (books[i].title==titre){
 			return books[i];
 		}
 		
 	} 
 }

/////// triage des livres par titre////////
 console.log("triage des livres par alphabet  sans celui avec id = 133712" );
livreabc =[];
newbooks=[];
for(k=0 ;k< books.length;k++){
	newbooks[k] ={
	title: t[k],
	id:find(books,t[k]).id,
	rented:find(books,t[k]).rented
	}

}
////affichare de books trier par ordre alphabet/////
for(i=0;i<books.length;i++){
	console.log(newbooks[i]);
}









