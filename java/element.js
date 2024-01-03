let ul = document.createElement('ul')

ul.id='menu'


ul.className='classname'

document.body.appendChild(ul)

let li1 = document.createElement(li)

li.textContent('home')
ul.appendChild(li1)

let li2 = document.createElement(li)

li.textContent('menu')

ul.appendChild(li2)

let li3 = document.createElement(li)

li.textContent('contact')
ul.appendChild(li3)




let menu = document.querySelector('.menu')

function li(name){
    let li=document.createElement(li)
    li.textContent(name)
    return li
}

menu.appendChild(li('mamun'))








let note = document.getElementsByClassName('note')

console.log(note.innerText);


note.innerHTML("<h1>innerhtml</h1>")





let list=document.querySelector('#list')


let lan=[1,2,3,4,5,6,7]

let fragment=document.createDocumentFragment()

lan.forEach((language) => {
    let li =document.createElement('li')
    li.textContent=language
    fragment.appendChild(li)

    
});

list.appendChild(fragment)



let pro = document.querySelector('.property')

pro.style.color ='red'


let p = document.querySelector('p')

console.log(p.className);



let off = document.querySelector('#offset')

let heigt = off.offsetHeight
let width= off.clientWidth
console.log(heigt,width);





function clicked() {
    alert('button was clicked')
    
}


let cli = document.querySelector('.cli')
cli.addEventListener('click', function(){
    alert('clicked')
})

document.addEventListener('DOMContentLoaded', (e)=>{
    alert('dom content loader')
})

addEventListener('load',()=>{
    alert('load is on')
})


addEventListener('beforeunload',(b)=>{
    b.preventDefault()
    b.returnValue = ""
})

addEventListener('unload', ()=>{

})