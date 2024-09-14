


class Hashmap {

    

    constructor (size = 16) {

        this.map = new Array(size);
    }


       

    hash(key) {
        let hashCode = 0;     
        
        let fullLength = this.map.length;
        let loadFactor = 0.75;    
        
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
          hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % fullLength;

          let arrLength = test.length();

            console.log('hash test length: ' + arrLength);

          if (arrLength >= (fullLength * loadFactor)) {
            fullLength *= 1.5;

          }

        }
        console.log('full lengthmeter: ' + fullLength);
        return hashCode;
      }; 


    set(key, value) {

        const index = this.hash(key);

        if (!this.map[index]) {  
            //if the key already exists, the new value replaces old value
            this.map[index] = [];
        }

        //function to handle collisions: two keys in the same bucket
        for (let i = 0; i < this.map[index].length; i++) {
            if (this.map[index][i][0] === key) {
                this.map[index][i][1] = value;

                console.log(`updated key '${key}' to value '${value}`);
                
                return;
            }   

        }

        this.map[index].push([key, value]);
        //load factor is 0.75, grow bucket size when load factor is reached.

    };


    get(key) {

        const index = this.hash(key);

        if (!this.map[index])
            return undefined;


        for (let i = 0; this.map[index].length; i++) {
            if (this.map[index][i][0] === key) {
                return this.map[index][i][1];

            }
        };

        return undefined;

        // return value assigned to the key.
        // if no value, return 'null'

    };


    has(key) {

        for (let i = 0; i < this.map[index].length; i++) {
            if(this.map[i][0] === key) {

                return true;
            }

            else return false;

        }

        // return TRUE if the key is in the hash map
        // return FALSE if the key is not in the hash map

    };

    remove(key) {

        // if the key is in the hash map, remove the key and return TRUE
        // if the key is not in the hash map, return FALSE
    };

    length() {

        // return the number of keys stored in the hash map
        let hashMapLength = 0;

        for (let i = 0; i < this.map.length; i++) {
            if (this.map[i]) {

                hashMapLength += this.map[i].length;
            }

            else {
                hashMapLength = hashMapLength;
            };

        };
        return hashMapLength;

    };

    clear() {

        // removes all entries in the hash map
        for (let i = 0; i < this.map.length; i++) {
            this.map[i] = '';

            console.log('cleared: ' + this.map[i]);

        };

    };

    keys() {

        let keyArray = Array();
        //return an array containing all the keys in the hash map

        for (let i = 0; i < this.map.length; i++) {

            if (this.map[i]) {
            keyArray[i] = this.map[i][0];
            console.log('Key Array Entry ' + i + ': ' + keyArray[i][0]);

        }
    }
       
    };

    values() {

        // returns an array containing all the values.  
        let valueArray = Array();
        //return an array containing all the keys in the hash map

        for (let i = 0; i < this.map.length; i++) {

            if (this.map[i]) {
            valueArray[i] = this.map[i][0];
            console.log('Value Array Entry ' + i + ': ' + valueArray[i][1]);

        }
    }


    };

    entries() {

        // returns an array that contains each key, value pair. 
        // Example: [[firstKey, firstValue], [secondKey, secondValue]]

        let keyArray = Array();
        //return an array containing all the keys in the hash map
        for (let i = 0; i < this.map.length; i++) {
            keyArray[i] = this.map[i];
            console.log('Key and Value Array Entry ' + i + ': ' + keyArray[i]);

        }


    };




}  



/*
const myMap = new Hashmap ();

myMap.set('Hello', 'I am the old value. 123');

console.log(myMap.get('Hello'));

myMap.set('Hello', 'I am the new value. 456');

console.log(myMap.map);

console.log(myMap.get('Hello'));

myMap.set('Goodbye', 'today is Friday');

myMap.set('John', 'my name is John Smith');

myMap.set('Bond', 'James Bond');

console.log('length: ' + myMap.length());

//myMap.clear();

myMap.keys();

myMap.entries();

myMap.values();
*/

const test = new Hashmap();

test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')
//12 of these

test.keys();

test.entries();

test.values();

test.length();


console.log('array length: ' + test.length());

console.log('full length: ' + test.map.length);

test.set('moon', 'silver');
//now 13


test.set('a', 'b');
//now 14


console.log('array length: ' + test.length());

console.log('full length: ' + test.map.length);

