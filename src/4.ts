
class Key {
    private signature: number;
    constructor() {
        this.signature = Math.random()
    }
    getSignature(){
        return this.signature;
    }
}
class Person{
    constructor(private key: Key){}
    getKey(){
        return this.key;
    }
}
abstract class House{
    protected door: true|false;
    protected key: Key;
    public tenants: Person[] = [];
    abstract openDoor(key: Key): void;

    constructor(key: Key){
        this.key = key;
        this.door = false;
    }
    
    comeIn(tenant: Person){
        if(this.door){
           this.tenants.push(tenant);
        }
    }
}
class MyHouse extends House{
    openDoor(key: Key): void {
        if(key.getSignature() === this.key.getSignature()){
            this.door=true;
        }   
    }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export {};