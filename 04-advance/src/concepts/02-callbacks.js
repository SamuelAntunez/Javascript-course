
import { heroes } from "../data/heroes";

/**
 * 
 * @param {HTMLDivElement} element 
 */


export const callbacksComponent = ( element ) =>{
    const id1 = '5d86371f2343e37870b91ef1';
    const id2 = '5d86371f2343e37870b91ef1';
    findHero( id1, (err, hero1) =>{
        if (!hero1) {
            element.innerHTML = err
            return
        }
        findHero(id2, (err, hero2) =>{
            if (!hero2) {
            element.innerHTML = err
            return
            }
            element.innerHTML = `${hero1.name} ${hero2.name}`

        })
    })
}

/**
 * 
 * @param {String} id 
 * @param {(error?: String, hero: Object) => void} callback 
 */
const findHero = ( id, callback ) =>{

    const hero = heroes.find( hero => hero.id === id)
    if(!hero ){
        callback(`Hero with id ${id} not found0`)
        return
    }

   callback(null, hero)
}

