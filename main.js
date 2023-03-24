 const users=[
 { first_name:'An',
          age:32
 },
{ first_name:'Anto',
          age:34
},
{ first_name:'sathish',
          age:28
},
{ first_name:'Mari',            
          age:78
},
{ first_name:'Anto Anstin',
          age:34
}];
 var a=users.find(function(b){	 
		 return b.first_name=="Anto";	
 });
 console.log(a);
 
 
 
 
 var g=users.findIndex(function(h){

	 return h.age==78;
 });
 console.log(g);