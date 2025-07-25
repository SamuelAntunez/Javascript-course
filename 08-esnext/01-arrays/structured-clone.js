

const SuperHeroes = [
    {
        id: 1,
        name: 'Batman'
    },
    {
        id: 2,
        name: 'Spiderman'
    },
    {
        id: 3,
        name: 'Flash'
    },
    {
        id: 4,
        name: 'Superman'
    }
]


const superHeroesCopy = [...SuperHeroes] // soloo para primitivos

const superHeroesCopy2 = structuredClone(SuperHeroes) // Para hacer cualquier copia que sea pasada por referencia

console.table( SuperHeroes)
console.table (superHeroesCopy)