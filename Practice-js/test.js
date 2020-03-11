
Q1. Create a hierarchy of person, employee and developers. 
Q2. Given an array, say [1,2,3,4,5]. Print each element of an array after 3 secs.
Q3. Explain difference between Bind and Call (example).
Q4. Explain 3 properties of argument object.
Q5. Create a function which returns number of invocations and number of instances of a function.
Q6. Create a counter using closures.
Q7. Explain 5 array methods with example.


Q1. Create a hierarchy of person, employee and developers.
function person(name)
{
  this.name=name;
  console.log("name="+name)
}
function employee(name,id)
{
  this.id=id;
  person.call(this,name);
  console.log("id="+this.id);
}
function developers(name,id,age)
{
  employee.call(this,name,id);
  this.age=age;
  console.log("Age="+this.age);
}
var employee1=new developers("ABC",123,65);



Q2. Given an array, say [1,2,3,4,5]. Print each element of an array after 3 secs.
var arr=[1,2,3,4,5];
var i=0;
function timeLaps()
{
    if(i<arr.length)
    {
      x=arr[i];
      console.log(x);
    }i++;
    setTimeout((abc),3000);
}
timeLaps();


Q3. Explain difference between Bind and Call (example).
let name=
{
  firstName:"Devansh",
    lastName:"Bindal",
 }
let name2=
{
  firstName:"DevanshG",
    lastName:"BindalG",
 }
let print=function(place,city,contact)
{
 console.log(this.firstName+" "+this.lastName+" "+place+" "+city+" "+contact);
}
//apply
print.call(name,"Sector-142","Noida",6456488399);

//bind
let bindMethod=print.bind(name2,"Sector-144","Greater-Noida",99999999999);
console.log(bindMethod);
bindMethod();


Q4. Explain 3 properties of argument object.
// 1.arguments.callee
// Reference to the currently executing function that the arguments belong to.

// 2.arguments.length
// The arguments.length property contains the number of arguments passed to the function.

// 3.arguments.caller
// Property used to provide the function that invoked the currently executing functting function.

Q5. Create a function which returns number of invocations and number of instances of a function.
function abc()
{
  abc.counter++;
  if(this!=window)
    {
      this.__proto__.z++;
      }
}
 abc.counter=0;
abc.prototype.z=0;
var z=new abc();

abc();
abc();
console.log(counter);
console.log(abc.prototype.z);




Q6. Create a counter using closures.
var add_counter=(function ()
{
var counter = 0;
return function () 
{
counter += 1; 
return counter;}
})();
add_counter();
add_counter();
console.log(add_counter());



Q7. Explain 5 array methods with example.
var books=['book_AG','book_BG','book_CG','book_DG','book_EG','book_FG'];
console.log(books.length); //a

books.push("BOOK_GG"); //b
console.log(books);

books.pop();//c
console.log(books);

books.unshift("BOOK_HG");//d
console.log(books);

books.shift();//e
console.log(books);

console.log(books.indexOf("book_CG"));//f