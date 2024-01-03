var Name = "variable";

console.log(Name)


var StringType = 'stringtype variable';

console.log(typeof StringType)


var numType = 20;

console.log( typeof numType)

var boolType = true;

console.log(typeof boolType)

var letter ="W3Schools is optimized for learning and training. Examples might be simplified to improve reading and learning";

console.log(letter.toUpperCase())


var nType = 'asit moni onni alamin';

console.log(nType.split('asit'))

console.log(nType.indexOf('onni'))


var num1 = 20;

var num2 = '60.86765356';

num2 = parseFloat(num2);

mot = num1 + num2;

console.log(mot);

var num3 =10;
var num4 = 30;

num3 = "" + num3;

total = num3 + num4;

console.log(total);

var num5 = -30;
var abs = Math.abs(num5);

console.log(abs);


var num6 = 5.51;
var round =Math.round(num6);

console.log(round);

var num7 = 0.1;
var celi = Math.ceil(num7);

console.log(celi);

var num8 = 0.9999;
var floor = Math.floor(num8);

console.log(floor);

var random = Math.random ()* 6;

console.log(random);







var x =50;
var y =50;


if(x < y){
    console.log("x is big");
}

else if(x>y){
    console.log('y is big');
}


else{
    console.log('they both are same');
}


var a = 1;

switch(a=5) {
    case 5 :
        console.log('this is number 5');
        break;
    case 10 :
        console.log('this is number 10');
        break;
     default:
        console.log('found nothing');      
}







var myDate = new Date();


console.log(myDate.toDateString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toTimeString());
console.log(myDate.getFullYear());
console.log(myDate.getMonth());
console.log(myDate.getDay());
console.log(myDate.getHours());
console.log(myDate.getMinutes());
console.log(myDate.getSeconds());
console.log(myDate.getMilliseconds());





var fdName =['asit','alamin','moni' ];



console.log(fdName[1]);



fdName[0] = 30;

console.log(fdName);



var fndName=['asit','moni','onni',];

fndName.push('mamun');
fndName.pop();

fndName.unshift('mamun');

fndName.shift();

console.log(fndName);

var slice = ['asit' , "moni" ,'onni','hasib','minal']

console.log(slice.slice(1,3,));

slice.splice(1,2,'alamin','mamun');

console.log(slice);



for(var forVar = 0 ; forVar<=5 ; forVar++) {

    console.log(forVar);
} 


var  Numbers =[0,1,2,3,4,5,6,7,8,9];

for(var e =0; e<Numbers.length; e++){

    console.log(e);
}

while(e<10){
    console.log(e);

    e++
}

function fun(){
    var num9 =30;
    var num10 = 10;

    var total = num9 +num10 ;

    console.log(total);

}

fun()


function fun1(num11,num12){
    var total1=num11+num12;

    console.log(total1);


}

fun1(40,60)


function fun2(num13,){
    var total2=num13* 6;

    return total2;
}

var f=fun2(9);

console.log(f);



function MyInfo(Myname,village,phone){

    this.Myname=Myname;
    this.village=village;
    this.phone=phone;
    this.show=function(){
        console.log(this.Myname);
        console.log(this.village);
        console.log(this.phone);

    }
}

var NewObj = new MyInfo('mamun','uttara', 133447789 );
var NewObj2 = new MyInfo('alamin','utaara',13564562315)

NewObj.show();  
NewObj2.show()



function  worldName () {
    var world='mamun';

    function bangladesh () {
        let desh ='asit';
        console.log(desh);
        console.log(world);
        
    }
    bangladesh()
    console.log(world);
}
worldName()

