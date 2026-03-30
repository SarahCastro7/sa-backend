//onde fica o mock de dados dos pets!

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

    //adicionei o getById para pegar um pet específico, por exemplo, para mostrar os detalhes do pet - 26/03 e 30/03
    getById(id){
        return pet.find((pet) => pet.id === id);
    }

    create(name) {
        const newPet = pet.length > 0 ? pet[pet.length - 1].id + 1 : pet.id
        + 1
        

    }
}

export default new Pet();
export const petServices = new Pet();

//BD > Services > Routes > pet.js