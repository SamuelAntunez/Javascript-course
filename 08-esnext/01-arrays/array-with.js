

const state = [
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

const index = 1
const newName = 'pepe'

const newState = state.with(index,  {
    id: 100,
    name: newName
})
const newState2 = state.with(index,  {
    ...state.at(index),
    name: newName
})


console.table(state)
console.table(newState)
console.table(newState2)


