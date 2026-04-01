//onde fica o mock de dados dos pets!

const pets = [
    { id: 1, nome: 'winnnow', type: 'coelho', age: 2},
    { id: 2, nome: 'skay', type: 'cadela', age: 7},
    { id: 3, nome: 'tunico', type: 'gato', age: 2},
    { id: 4, nome: 'maya', type: 'gata', age: 1},
    { id: 5, nome: 'zily', type: 'cadela', age: 6}
]

class Pet {
    getALL() {
        return pets;
    }

    //adicionei o getById para pegar um pet específico, por exemplo, para mostrar os detalhes do pet - 26/03 e 30/03
    getById(id){
        return pets.find((pet) => pet.id === id);
    }

    create(nome, type, age) {
        const newPet = {
            id: pets.length > 0 ? pets[pets.length - 1].id + 1 : 1,
            nome
        }

        pets.push(newPet)

        return newPet
    }

    updatePatch (id, nome) {
        const index = pets.findIndex((p) => p.id === parseInt(id));

        if (index === -1) return null;

        if (nome) {
            pets[index].nome = nome;
        }
    }
}

export default new Pet();
export const petServices = new Pet();

//BD > Services > Routes > pet.js