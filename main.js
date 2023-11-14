// Hash table class
class HashTable {
  constructor() {
    this.table = {};
  }

  // Hash function to generate an index for the key
  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % 13; // Module to limit the index within the array size
  }

  // Method to insert a key-value pair into the hash table
  put(key, value) {
    const index = this.hash(key);
    this.table[index] = value;
  }

  get(key) {
    const index = this.hash(key);
    return this.table[index];
  }

  // Method to remove a key-value pair from the hash table
  remove(key) {
    const index = this.hash(key);
    if (this.table[index]) {
      delete this.table[index];
    }
  }

  print() {
    console.log(this.table);
  }
}

const myHashTable = new HashTable();

myHashTable.put("one", 1);
myHashTable.put("two", 2);
myHashTable.put("three", 3);

myHashTable.print();

console.log("Value for key 'two':", myHashTable.get("two"));
myHashTable.remove("two");

myHashTable.print();
