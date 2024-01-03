
 let ID1 = document.getElementById ('ID1');
ID1.innerHTML = 'heading id';

 let Class1 = document.getElementsByClassName("class1")[0];
 Class1.innerHTML = "uirghsdifughi";

 let name1= document.getElementsByName('name1')[0];
name1.innerHTML= 'duigfhdsgfgfiu';

let head = document.getElementsByTagName('h2')[0];
head.innerHTML='heading 2';


document.querySelector("#ID1")

document.querySelector('.class1')

document.querySelector('h2')

document.querySelectorAll('h1')






// time set start

function me(){
    document.getElementById('ID1').innerHTML= Date()
}

//time set end





// traversing start

let pNote = document.querySelector('.child')

console.log(pNote.parentNode)



// child node

let parentDiv = document.querySelector('.parent')

console.log(parentDiv.firstElementChild);
console.log(parentDiv.lastElementChild);
console.log(parentDiv.children);

// child node end



// sibling 

 let sibling = document.querySelector('.sib')

 console.log(sibling.nextElementSibling);
 console.log(sibling.previousElementSibling);

// sibling end






// traversing end








// manipulation start 


// tag create start 

let div =document.createElement('.div')

div.innerHTML='<p> this file is created on javascript </p>'

document.body.appendChild(div)







// tag create end 







// manipulation end 
















