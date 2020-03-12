1.Filter unique array members using Set.

const ages = [42,54, 76, 67, 22, 54, 44, 89, 30,67]
const result = Array.from(new Set(ages));
console.log(result);

2.Find the possible combinations of a string and store them in a MAP?
function getPermutations(string) {

    let results = [];

    if(string.length === 1) {
        results.push(string);
        return results;
    }
 
    for (let index = 0; index < string.length; index++) {
        const firstChar = string[index];
//       console.log("firstChar:"+firstChar);
        let charLeft =  string.slice(index+1);
//       console.log("charleft:"+charLeft);
        let innerPermutations = getPermutations(charLeft);
//       console.log("InnerPermutations:"+innerPermutations);

        for (let j = 0; j < innerPermutations.length; j++) 
        {
            results.push(firstChar + innerPermutations[j]);
        }
    }

    return results;
}

console.log('Possible combinations are:', getPermutations('dev'));

3.Write a program to implement inheritance upto 3 classes.The Class must  public variables and static functions.
class person
  {
    constructor(name,id)
    {
          this.name=name;
          this.id=id;
    }
    static getValue(name,id)
    {
      console.log(`Name: ${name} Age: ${age} Id:${id}`);
    }
  }

class employee extends person
  {
      constructor(name,id,age)
    {
      super(name,age);
      this.id=id;
      }
    static display(name,id,age)
    {
      console.log(`Name: ${name}  Id: ${id} Age: ${age}`);
    }
  }
class developer extends employee
  {
    constructor(name,id,age,greeting)
    {
      super(name,id,age);
      this.greeting=greeting;
      }
    static value_display(name,id,age,greeting)
    {
      console.log(`Name: ${name}  Id: ${id} Age: ${age} Greeting:${greeting}`);
    }
  }
let person_info =new person("Ema",32);
console.log(person_info );
let employwe_info=new employee("Shane",1001,23);
console.log(employwe_info);
let developer_info=new developer("Williams",2002,25,"Good");
console.log(developer_info);


4.Write a program to implement a class having static functions

class staticCall
{
  static animals()
  {
    console.log("This is an Animal static method");
  }
  static bird()
  {
    let a=this.animals(); 
    console.log(a+"Bird static method");
    }
}
staticCall.bird();
// staticCall.animals();

5.Write a program to flatten a nested array to single level using arrow functions.

let unFlattenedArray = [10,15,[12,43,23],54,[33,77,89,90],[22,3,45]];
// console.log('unFlattened Array : ', unFlattenedArray);
let flattenedArray = unFlattenedArray.reduce(
  (acc, currVal) => acc.concat(currVal), []
);
console.log('Flattened Array : ', flattenedArray);

6.Implement a singly linked list in es6 and implement addFirst() addLast(), length(), getFirst(), getLast(). (without using array)
class LinkedList {

    constructor() {
        this.head = null;
        this.tail = null;
        this.count = 0;
    }

    set addFirst(data) {

        const node = {
            data,
            next: null
        }

        const temp = this.head;

        this.head = node;
        this.head.next = temp;
        this.count++;

        if(this.count === 1) {
            this.tail = this.head;
        }

    }

     set addLast(data) {

        const node = {
            data,
            next: null
        }

        if(this.count === 0) {
            this.head = node;
        } else {
            this.tail.next = node;
        }

        this.tail = node;
        this.count++;

    }

    get length() {
        return this.count;
    }

    get getFirst() {
        return { data: this.head.data };
    }

    get getLast() {
        return { data: this.tail.data };
    }

    removeFirst() {
        if(this.count > 0) {
            this.head = this.head.next;
          }

          this.count--;
    }

}

let list = new LinkedList();
list.addFirst = 1;
list.addLast = 2;
list.addFirst = 10;

console.log('First data in the list', list.getFirst);
console.log('Last data in the list', list.getLast);
console.log('Number of nodes in the list', list.length);

7.Implement Map and Set using Es6?
//Map
let mapOperation=new Map();
mapOperation.set("car",10);
mapOperation.set("bike",20);
mapOperation.set("motor",30);
mapOperation.set("laptop",40);
console.log(mapOperation.get("laptop"));
console.log(mapOperation.size);

//Set
let setOperation=new Set();
setOperation.add(10);
setOperation.add(20);
setOperation.add(30);
setOperation.add(40);
console.log(setOperation.size);
setOperation.delete(30);
console.log(setOperation.size);
console.log(setOperation.has(20));

8.Implementation of stack (using linked list) ?


class LinkedList {

    constructor() {
        this.head = null;
        this.tail = null;
        this.count = 0;
    }

    set addFirst(data) {

        const node = {
            data,
            next: null
        }

        const temp = this.head;

        this.head = node;
        this.head.next = temp;
        this.count++;

        if(this.count === 1) {
            this.tail = this.head;
        }

    }

    set addLast(data) {

        const node = {
            data,
            next: null
        }

        if(this.count === 0) {
            this.head = node;
        } else {
            this.tail.next = node;
        }

        this.tail = node;
        this.count++;

    }

    get length() {
        return this.count;
    }

    get getFirst() {
        return { data: this.head.data };
    }

    get getLast() {
        return { data: this.tail.data };
    }

    removeFirst() {
        if(this.count > 0) {
            this.head = this.head.next;
          }

          this.count--;
    }

}

let list = new LinkedList();
list.addFirst = 1;
list.addLast = 2;
list.addFirst = 10;

// console.log('First data in the list', list.getFirst);
// console.log('Last data in the list', list.getLast);
// console.log('Number of nodes in the list', list.length);
// console.log('---------------');


class Stack {
    constructor() {
      this.list = new LinkedList();
    }
    
    push(item) {
      this.list.addFirst = item;
    }
    
    pop() {
      if(!this.list.length) {
        return;
      };
      
      let val = this.list.head.data;
      this.list.removeFirst();
      return val;
    }
    
    get length() {
      return this.list.length;
    } 

}

let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);

console.log('Size of Stack', stack.length);
console.log('Popped Item:', stack.pop());