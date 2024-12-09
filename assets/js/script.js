
class User {
    constructor (_firstName, _lastName, _age, _location) {
        this.firstName = _firstName;
        this.lastName = _lastName;
        this.age = _age;
        this.location = _location; 
    }

    compareAge(otherUser) {
        if (this.age > otherUser.age) {
            return `${this.firstName} è più vecchio di ${otherUser.firstName}`
        } 
        else if (this.age < otherUser.age) {
            return `${this.firstName} è più giovane di ${otherUser.firstName}`
        } 
        else {
            return `${this.firstName} e ${otherUser.firstName} hanno la stessa età`
        }
    }
   
}

let user1 = new User ('Luciano', 'Ligabue', 65, 'Correggio');
let user2 = new User('Vasco', 'Rossi', 65, 'Zocca');
let user3 = new User('Camilla', 'Zicari', 23, 'Cento');

console.log(user1.compareAge(user2));
console.log(user2.compareAge(user3));
console.log(user1.compareAge(user3));
