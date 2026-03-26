//onde fica o mock de dados

const pet = [
    { id: 1, nome: 'winnnow', type: 'coelho', age: 2},
    { id: 2, nome: 'skay', type: 'cadela', age: 7},
    { id: 3, nome: 'tunico', type: 'gato', age: 2},
    { id: 4, nome: 'maya', type: 'gata', age: 1},
    { id: 5, nome: 'zily', type: 'cadela', age: 6}
]

class Pet {
    getALL() {
        return pet;
    }

    getById(id){
        return pet.find((pet) => pet.id === id);
    }
}

export default new Pet();
export const petServices = new Pet();

//BD > Services > Routes > pet.js