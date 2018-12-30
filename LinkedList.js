console.log("Hi");

class User {
constructor (firstName, lastName, age, gender) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.gender = gender;
  }
}

class Student extends User {
  constructor(subject, mark, firstName, lastName, age)
  {
    super(firstName, lastName, age);
    this.subject = subject;
    this.mark = mark;

    this.funcKill = () => {
      alert(firstName + ' just killed his teacher');
    }
  }
}

let user1 = new User('John', 'Smith', 26, 'male');
let student1 = new Student('math', 'Excelent', 'kozko', 'D', 28);
student1.gender = 'male';

console.log('user1 has been created', user1);
console.log('student1 has been created', student1);

User.prototype.emailDomain = '@facebook.com';
User.prototype.getEmailAddress = function() {
  return this.firstName + this.lastName + this.emailDomain;
}
console.log('student1.getEmailAddress() ->', student1.getEmailAddress());


// Linked List
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;

    this.addToHead = (value) => {
      const newNode = new Node(value, this.head, null);
      if (this.head) this.head.prev = newNode;
      else this.tail = newNode;
      this.head = newNode;
    };

    this.addToTail = (value) => {
      const newNode = new Node(value, null, this.tail);
      if (this.tail) this.tail.next = newNode;
      else this.head = newNode;
      this.tail = newNode;
    };

    this.removeHead = () => {
      if (!this.head) return null;
      const val = this.head.value;
      this.head = this.head.next;
      if (this.head) this.head.prev = null;
      else this.tail = null;
      return val;
    };

    this.removeTail = () => {
      if (!this.tail) return null;
      const val = this.tail.value;
      this.tail = this.tail.prev;
      if (this.tail) this.tail.next = null;
      else this.head = null;
      return val;
    };

    this.search = (searchValue) => {
      let currentNode = this.head;
      while(currentNode) {
        if (currentNode.value === searchValue) return currentNode.value;
        currentNode = currentNode.next;
      };
      return null;
    };

    this.indexOf = (value) => {
      let indexes = [];
      let currentIndex = 0;
      let currentNode = this.head;
      while (currentNode) {
        if (currentNode.value === value) {
          indexes.push(currentIndex);
        };
        currentNode = currentNode.next;
        currentIndex++;
      };
      return indexes;
    };
  };
};

class Node {
  constructor(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  };
};

const ll = new LinkedList();
const node1 = new Node(100, 'node2', null);
console.log(node1);

ll.addToHead(100);
ll.addToHead(200);
ll.addToHead(300);

ll.addToTail(10);
ll.addToTail(20);
ll.addToTail(30);

console.log('2 times prev ', ll.tail.prev.prev);

ll.addToHead(1000);
ll.addToHead(2000);
ll.addToTail(3000);

ll.removeHead();
console.log(ll.removeHead());

ll.addToHead('one');
ll.addToHead('two');
ll.addToHead('three');

console.log(ll.removeTail());

ll.addToHead(123);
ll.addToHead(70);
ll.addToHead('hello');
ll.addToTail(19);
ll.addToTail('world');
ll.addToTail(20);

console.log(ll.search(25));

ll.addToTail(1);
ll.addToTail(5);
ll.addToTail(3);
ll.addToTail(5);
ll.addToTail(8);
ll.addToTail(7);
ll.addToTail(5);

console.log(ll.indexOf(5));

// Loading HTML
document.addEventListener("DOMContentLoaded", function(event) {
  const App = {
    html: `<h1>Sample ES6 by ${student1.firstName}</h1>`,
    Render: function () {
      let content = document.getElementById('content');
      content.innerHTML += App.html;
      //console.log(event);
    }
  };

  App.Render();
});