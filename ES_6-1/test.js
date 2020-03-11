Q1. Given this array: `[3,62,234,7,23,74,23,76,92]`, Using arrow function, create an array of the numbers greater than `70`.
let array_values=[3,62,234,7,23,74,23,76,92];
let xyz=new Array();
abc=(array_values)=>
{
  for(i in rray_values)
    {
      if(array_values[i]>70)
        {
          xyz.push(array_values[i]);
          }
    
    }
  console.log(xyz);
}
abc(array_values);


2.a)Select all the list items on the page and convert to array.
let list_items=document.getElementById("List-Info").getElementsByTagName("li");
// console.log(list_items);
let array= new Array();
for(i of list_items)
  {
    array.push(i.innerHTML);
    
  }
// console.log(array);

 b)Filter for only the elements that contain the word 'flexbox'

let filter_flexbox=array.filter(item=>
{
//   return item=="Flexbox Video";
  return item.includes("Flexbox");
})
// console.log(filter_flexbox);


c)map down to a list of time strings
let time=new Array();
for(i of list_items)
  {
    time.push(i.getAttribute("data-time"));
  }
console.log(time);


d)map to an array of seconds

let secondsArray= new Array();
    for(i of list_items){
        var dataItem = i.getAttribute('data-time');
       var second = dataItem.split(':');
        secondsArray.push(second[1]); 

//           secondsArray.push(dataItem[2]+dataItem[3]);
    }
console.log(secondsArray);

e)reduce to get total using .filter and .map?
let sum =0;
secondsArray.map((total)=>{ 
    let x=Number(total);
     sum+=x})
let time_minutes=Math.floor(sum/60);
let time_seconds=sum-time_minutes*60;

Q3. Create a markup template using string literal.
const song = {

    name: "Dying to live",
   
    artist: "Tupac",
   
    featuring: "Biggie Smalls"
   
   };
   console.log(song);
   let output=
     `<div class="song"> 
        <p> 
            ${song.name} - ${song.artist} 
            (Featuring ${song.featuring}) 
        </p>
      </div>`
   console.log(output);


   Q4. Extract all keys inside address object from user object using destructuring ?
   const user = {

    firstName: "Sahil",
    
    lastName: "Dua",
    
    Address: {
    
    Line1: "address line 1",
    
    Line2: "address line 2",
    
    State: "Delhi",
    
    Pin: 110085,
    
    Country: "India",
    
    City: "New Delhi",
    
    },
    
    phoneNo: 9999999999
    
    }
    let{firstName:__firstName,lastName:__lastName,Address:__Address,phoneNo:__phoneNo}=user;
    console.log(__Address);


    // let {firstName,Address:{Line1,Line2,State,Pin,Country,City},phoneNo}=user;
    // console.log(Line1,Line2,State,Pin,Country,City);
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    