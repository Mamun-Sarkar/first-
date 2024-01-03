
function rest(a,b,...c){
    console.log(a,b,c);
}

rest('n','mm','mjkm','fgjhiod','fkkgj')


const array =[1,2,3]
const spread=[...array,4,5,6]

console.log(spread);

function say(massage,name){
    return{
        massage,
        name
    }
}
console.log(say('hello','mamun'));


const obj ={
name:'mamun',
age:'21'

}

for(newobj in  obj){

    console.log(newobj);
}

const array3=[6,7,8,9,0] 

for(array4 of array3){

    console.log(array4);
}


const Myname=`mamun sarkar`
 const age = 21;

 console.log(`my name is ${Myname} and i am ${age} years old`);

const destruction=[1,2,3,4,5,6,7,8,9]
let [a,b,c,...z]=destruction

console.log(a,b,c,z);


class book{
    constructor(bookname,bookprice){
        this.bookname=bookname
        this.bookprice=bookprice
    }
}
let bookdetails=new book('NoName','300 tk')

console.log(bookdetails);


class stat{
   static fun(){
        console.log('hello');
    }
}

stat.fun()


class parent{
    assets1(){
        console.log('assets ek');

    }
    assets2(){
        console.log('assets dui');
    }
}

class ami extends parent{
    myassets(){
        super.assets1()
        super.assets2()
    }
}

let newAssets=new ami()
newAssets.assets1()


let fun=(x,y) => x + y 

console.log(fun(30,20));


let each=[1,2,3,4,5]
each.forEach(F)

function F(foreach){

    console.log(foreach);
}

each.forEach((x)=> console.log(x*3))


let m=[2,3,4,5]
let m2=m.map(map)

function map(m3){
    return m3
}

console.log(m2);

let f1=[2,3,4,5,6,7,8]
let f2=f1.filter(fil)

function fil(f3){
    return f3> 6

}
console.log(f2);






let fun1=()=>{
    console.log('mamun');

}
let fun2=()=>{
    console.log('sarkar');
}

let loading=()=>{
    console.log('alamin');

}

 let fun3 =()=>{

    setTimeout(loading,3000)
}

fun1()
fun3()
fun2()


let display=(something)=>{
    console.log(something);
}

let me1=(name,age,callback)=>{
    let me2=`my name is ${name} and my age is ${age}`
    callback(me2)
}

me1('mamun','21',display)


try{
    console.log('this is try');
    console.log(num);
  
    
}catch (cah){
    console.log('this is catch');
}finally{
    console.log('this is finally');
}


try {

    let boyo=16
    
    if (boyo >20) {
    
        throw "beshi"
        
    }
    else if(boyo<18) {
        throw ' this is throw '
    }
}catch(mm){
    console.log(mm);

}finally{
    console.log('finally');
}




let massege1= true;

let promise = new Promise((resolve,reject)=>{

    if (massege1) {
        resolve([
        
            {username:'mamun', email:'mamun@gmail.com'},
            {username:'asit',email:'asit@gmail.com'}

        ])
    }else{
        reject('this is not valid')
    }

})

promise.then((th)=>{
    console.log(th);
})

promise.catch((cat)=>{
    console.log(cat);
})





function getUser(userId){
    return new Promise((resolve,reject)=>{
        console.log('get services');
        setTimeout(()=>{
            resolve({
                userId:userId ,
                username:'asit fuska loiya ay'
            })},1000)
    })
    }
    
    function getService(user){
    return new Promise((resolve,reject)=>{
        console.log(`get user service from ${user.username}`);
        setTimeout(()=>{
            resolve(['loiya','ay'])},2* 2000 )
    })
    }
    
    function serviceCost(services){
    return new Promise((resolve,reject)=>{
        console.log('get services cost');
        setTimeout(()=>{
           resolve(services.length *100)
        },2500)
        })
    }

    async function loadData() {
        let user= await getUser(100)
        let services=await getService(user)
        let cost= await serviceCost(services)
        console.log(`service cost is ${cost}`);
        
    }
    
    loadData()

    