console.log('Hash Table');

// [ , , , , , , , , , , ] 10
// {key: Name, value: Phone}

class HashTable {
  constructor (size) {
    this.buckets = Array(size);
    this.numBuckets = this.buckets.length;
  }

  hash (key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    //hashcode
    let bucket = total % this.numBuckets;
    return bucket;
  };

  insert (key, value) {
    let index = this.hash(key);
    console.log('INDEX: ', index);

    if (!this.buckets[index]) {
      this.buckets[index] = new HashNode(key, value);
    }

    else if (this.buckets[index].key === key) {
      this.buckets[index].value = value;
    }

    else {
      let currentNode = this.buckets[index];
      while (currentNode.next) {
        if(currentNode.next.key === key) {
           currentNode.next.value = value;
           return;
        }
        currentNode = currentNode.next;
      }
      currentNode.next = new HashNode(key, value);
    }
  };

  get (key) {
    let index = this.hash(key);
    if (!this.buckets[index]) return null;
    else {
      let currentNode = this.buckets[index];
      while (currentNode) {
        if (currentNode.key === key) return currentNode.value;
        currentNode = currentNode.next;
      }
      return null;
    }
  };

  retrieveAll () {
    let allNodes = [];
    for (let i = 0; i < this.numBuckets; i++) {
      let currentNode = this.buckets[i];
      while(currentNode) {
        allNodes.push(currentNode);
        currentNode = currentNode.next;
      }
    }
    return allNodes;
  };

};

class HashNode {
  constructor(key, value, next) {
    this.key = key;
    this.value = value;
    this.next || null;
  }

}

let myHT = new HashTable(30);
console.log(myHT);

console.log(myHT.hash('Becca'));

myHT.insert('Dean', 'dean@gmail.com');
myHT.insert('Megan', 'megan@gmail.com');
myHT.insert('Dane', 'dane@yahoo.com')
myHT.insert('Joe', 'joey@facebook.com')
myHT.insert('Samantha', 'sammy@twitter.com');
//update Dean email
myHT.insert('Dean', 'deanmachine@gmail.com');
myHT.insert('Dane', 'dane1010@outlook.com');

console.log(myHT.get('Dean'));

console.log(myHT.buckets);

console.log(myHT.retrieveAll());