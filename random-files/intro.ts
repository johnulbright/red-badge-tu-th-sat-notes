let x:number=3;
let y=4;
const str1='banana'
// x='kiwi'; doesn't work...x is a number

// let a:number;
// a="two"
// const a:string='three';
// ^^^^^^^^^^^^^^^^^^^^^ this is bad!

const str2='banana';
//str2='dragonfruit'  error because this is already assigned as a constant


// some type work
let a:number=2;
const b :string = 'apple';
let c:boolean=true;
let d:null=null;
let e:null|string=null; //a "union type"
e='orange'; //this is fine since we just defined that e can be either null OR string
let f:undefined=undefined;

let numArr=[0,1,2,3]; // this is how we usually write arrays
let numArr2:number[]=[1,2,3,4];
//let numArr3:number[]=[0,1,2,3,'blueberry']; // doesn't like "blueberry" since it's a string
let numArr4:(number|string)[]=[0,1,2,3,'blueberry']; // now we can use both types
                                                     // but still a BAD IDEA because you probably don't
                                                     // want more than one type in an array

interface Animal{
    species:string;
    numLegs:number;
    isCute:boolean;
    isNice:'so nice'|'not at all'
    furColor?:string; //not every animal has furColor (so it's optional)
}                                    
interface Reptile extends Animal{
    scaleColor:string
}
let jerry:Reptile={
    species:"snake",
    numLegs:0,
    isCute:false,
    isNice:'so nice',
    scaleColor:'brown'
    // sex:male; this causes an error since it's not a part of the interface
}

type Dog={
    species:'dog'
}

console.log(jerry.furColor)