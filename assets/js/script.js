/* ESERCIZIO 1 */
class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.age = _age;
    this.location = _location;
  }

  compareAge(otherUser) {
    if (this.age > otherUser.age) {
      return `${this.firstName} è più vecchio di ${otherUser.firstName}`;
    } else if (this.age < otherUser.age) {
      return `${this.firstName} è più giovane di ${otherUser.firstName}`;
    } else {
      return `${this.firstName} e ${otherUser.firstName} hanno la stessa età`;
    }
  }
}

let user1 = new User("Luciano", "Ligabue", 65, "Correggio");
let user2 = new User("Vasco", "Rossi", 65, "Zocca");
let user3 = new User("Camilla", "Zicari", 23, "Cento");

console.log(user1.compareAge(user2));
console.log(user2.compareAge(user3));
console.log(user1.compareAge(user3));

/* ESERCIZIO 2 */

const btnAdd = document.getElementById('add');
let myPet;
const pets = [];
const owners = [];

class Pet {
  constructor(_petName, _ownerName, _species, _breed) {
    this.petName = _petName;
    this.ownerName = _ownerName;
    this.species = _species;
    this.breed = _breed;
  }
}

btnAdd.addEventListener('click', (e) => {
    e.preventDefault();
    let petName = document.getElementById('petName').value;
    let ownerName = document.getElementById('ownerName').value;
    let species = document.getElementById('species').value;
    let breed = document.getElementById('breed').value;

    myPet = new Pet(petName, ownerName, species, breed);
    pets.push(myPet);
    owners.push(myPet.ownerName);
    let owner1 = myPet.ownerName;
    for (let i=0; i<owners.length - 1; i++) {
       let owner2 = owners[i];
        if (owner1 === owner2) {
            console.log('true');
        }
    }
    printPets(); 
})

const printPets = () => {
    let ul = document.getElementById('ul');
    ul.innerHTML = '';
    pets.forEach(pet => {
        let newLi = document.createElement('li');
        newLi.innerText = `nome: ${pet.petName}, proprietario: ${pet.ownerName}, specie: ${pet.species}, razza: ${pet.breed}`;
        ul.appendChild(newLi);
    });

    let petForm = document.getElementById('petForm');
    petForm.reset();
}
