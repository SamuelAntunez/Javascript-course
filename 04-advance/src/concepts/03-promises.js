import { heroes } from "../data/heroes"

/**
 * 
 * @param {HTMLDivElement} element 
 */

export const promiseComponent = ( element ) =>{
    const renderTwoHeros = (hero1, hero2) =>{
        element.innerHTML = `
        ${hero1.name} ${hero2.name}
        `
    }
    const renderError = ( error ) =>{
        element.innerHTML = error;
    }
    const id1 = '5d86371f25a058e5b1c8a65e';
    const id2 = '5d86371f2343e37870b91ef1';
    // findHero(id1)
    //     .then( (hero1) =>{
    //         findHero(id2)
    //             .then(  (hero2) =>{
    //                 renderTwoHeros(hero1, hero2)
    //             } )
    //             .catch( error => renderError( error ))
    //     })
    //     .catch( error => renderError( error ))

//     let hero1, hero2;
//     findHero(id1)
//   .then( hero => {
//     hero1 = hero;
//     return findHero(id2)
//       .then( hero2 => {
//         renderTwoHeros( hero1, hero2)
//       })
//   })
//   .catch( renderError)

    Promise.all([
        findHero(id1),
        findHero(id2), 
    ])
    .then( ([hero1, hero2]) => renderTwoHeros(hero1, hero2))
    .catch( renderError )

}


/**
 * 
 * @param {String} id
 * @returns {promise<String>} 
 */
const findHero = ( id ) =>{
    return new Promise( (resolve, reject)=>{

    const hero = heroes.find( hero => hero.id === id)
    if (hero) {
        resolve(hero)
        return
    }
    reject(`hero with id ${id} not found`)
    
    });

    // const hero = heroes.find( hero => hero.id === id)
}