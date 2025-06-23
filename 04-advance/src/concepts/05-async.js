import { heroes } from "../data/heroes"
/**
 * 
 * @param {HTMLDivElement} element 
 */



export const aysncComponent = ( element ) =>{

    const id1 = '5d86371f25a058e5b1c865e'
    findHero( id1 )
        .then( hero => element.innerHTML = hero.name)
}

/**
 * 
 * @param {String} id 
 */
const findHero = async(id) =>{

    const hero = heroes.find( hero => hero.id === id)
     if( !hero ) throw `Hero not found with id ${id}`
    return hero;

}